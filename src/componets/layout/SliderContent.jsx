// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../layout/layout.css";
import {useGetWidth} from "../../hooks/useGetWidth"
import { Navigation } from "swiper";
import { useState } from "react";
import { storage } from "../../firebase";
import { formatDate } from "../../services/formatDate";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Skeleton } from "@mui/material";

export default function SliderContent({tittle = String, space = Number, content = Array}) {

  const {width} = useGetWidth()
  
  const [examples, setExamples] = useState([])

  const getNumber = () => {
    if(width > 1200){
        return 4;
    }else if (width > 800) {
        return 3;
    }else if (width > 596){
        return 2;
    } else{
        return 1;
    }
  }

  const getDataFilter = (data) => {
    if (data) {
      let data = content.filter((field => field.category === tittle))
       return data
    }
  }

  return (
   
    <div className="w-100 px-2 slider-home" >
    <h2 style={
      { fontFamily: 'Roboto , sans-serif'}
      } className="mt-3 px-2 fw-bold text-capitalize">
      { tittle ? tittle : ''}</h2>

      <Swiper
        slidesPerView={getNumber()}
        spaceBetween={space}
        className="mySwiper"
        navigation={true}
        modules={[Navigation]}
      >
          { content &&
          getDataFilter(content).map((info, i) => (
      
            <SwiperSlide key={i}>
              
              
              <div className="box-imagen-slide" >
              
                <div className="box-img" >
                <LazyLoadImage
                src={info?.img ? info?.img : `https://firebasestorage.googleapis.com/v0/b/blog-redux-51c80.appspot.com/o/${info?.image_one}?alt=media&token=${storage?.app?._options?.apiKey}`} 
                className="img-card"
                placeholder={<Skeleton variant="rectangular" width="100%" height={100} />}
                />
              
                {
                  /**
                     <img src={info?.img ? info?.img : `https://firebasestorage.googleapis.com/v0/b/blog-redux-51c80.appspot.com/o/${info?.image_one}?alt=media&token=${storage?.app?._options?.apiKey}`} 
                    className="img-card"
                    /> 
                   */
                }
                  
                </div>
            
              <div className="content d-flex flex-column align-items-start py-1 justify-content-between" >
              
              <div className="w-100 d-flex align-items-center justify-content-between" >
              <h5 className="text-dark fw-bold">{info?.tagline ? info?.tagline : 'Tittle'}</h5>
                <small className="text-muted text-end">{info?.date ? formatDate(info.date) : '12/06/2022'}</small>
              </div>

                <div className="w-100 d-flex align-items-start justify-content-start h-100 content-square" >
                  <strong className="text-start h5 content-square-text">
                    {info?.tittle ? info?.tittle : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.'}
                    </strong>
                </div>
              
              </div>
              
              </div>
   
            </SwiperSlide>
          
          ))
        
        }
      
      </Swiper>
    
    </div>
   
  );
}
