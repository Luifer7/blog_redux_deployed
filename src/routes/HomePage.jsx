import { Link, NavLink } from "react-router-dom";
import GridNews from "../componets/homepage/GridNews";
import GridContent from "../componets/layout/GridContent";
import SliderContent from "../componets/layout/SliderContent";
import { useSelector } from "react-redux";
import LinearProgressBar from "../componets/layout/LinearProgressBar";
import usePosts from "../hooks/usePosts"
import { useGetWidth } from "../hooks/useGetWidth";
import SwiperTags from "../componets/homepage/SwiperTags";

const HomePage = () => {

    const {loading} = useSelector(store => store.user)
    const {posts} = useSelector(store => store.postReducer)

    usePosts(true, '')
    const {width} = useGetWidth()
    
    const manageItemsTaggs = () => {
      if (width > 800) {
        return 8
      }
      if (width > 600) {
        return 5
      }
      if (width < 600) {
        return 3
      }
    }

   
    return ( 
        <div className="w-100 d-flex align-items-center justify-content-center flex-column" >
              
              {
                loading &&  <LinearProgressBar/>
              }
    
            <GridNews posts={posts[0]} anotherPosts={posts} />

            <SwiperTags/>
         
                 <SliderContent 
                 tittle={'news'}
                 space={30} 
                 content={posts} 
                 />

                 <SliderContent 
                 tittle={'article'} 
                 space={30} 
                 content={posts} 
                 />
            
            
           
              
            <GridContent posts={posts}/>

        </div>
     )
}
 
export default HomePage;