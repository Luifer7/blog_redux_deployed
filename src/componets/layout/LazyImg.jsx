import { Skeleton } from "@mui/material"
import { LazyLoadImage } from "react-lazy-load-image-component"

const LazyImg = ({src, alt, width, height, lazyClass}) => {
    return ( 
        <LazyLoadImage
        className={lazyClass}
        src={src}
        alt={alt}
        width={width ? width : '100%'}
        height={height ? height : '100%'}
        placeholder={<Skeleton variant="rectangular" width="100%" height={'100%'} />}
        />
     )
}
 
export default LazyImg