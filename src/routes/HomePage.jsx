import GridNews from "../componets/homepage/GridNews";
import Slider from "../componets/homepage/Slider";

const HomePage = () => {
    return ( 
        <div className="w-100 d-flex align-items-center justify-content-center flex-column" >
            <GridNews/>
            <Slider titulo={'Noticias Recientes'} />
        </div>
     )
}
 
export default HomePage;