import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useMemo } from "react";
import { useGetWidth } from "../../hooks/useGetWidth";
import "./homepage.css"
import { Link } from "react-router-dom";


const SwiperTags = () => {
    
const { allposts } = useSelector(state => state.postReducer);

const { width } = useGetWidth()

const SwipperByWidth = () => {
    if (width) {
        if (width > 1100) {
            return 9;
        } else if (width > 850) {
            return 8;
        } else if (width > 621) {
            return 7;
        } else if (width > 570) {
            return 6;
        } else if (width > 500) {
            return 5;
        } else {
            return 3;
        }
    }
}

const sortedTags = useMemo(() => {
    if (allposts.length === 0) return;
    const tagsArray = [];
    allposts?.forEach(post => post.taggs?.forEach(tag => (!tagsArray.includes(tag) ? tagsArray.push(tag) : null)));
    return [...tagsArray].sort((a, b) => a.localeCompare(b));
}, [allposts]);

    return (
        <div className="swiperTag-container mt-3 mb-3">
            <Swiper
                navigation={true}
                modules={[Navigation]}
                spaceBetween={10}
                slidesPerView={SwipperByWidth()}
            >
                {sortedTags?.map(tag => (
                    <SwiperSlide
                        key={tag}
                        className="SwiperSlide-tag">
                        <Link to={`/taggs/${tag}`} className="swiperTag-button_div">
                            <button className="swiperTag-button">{tag}</button>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default SwiperTags;