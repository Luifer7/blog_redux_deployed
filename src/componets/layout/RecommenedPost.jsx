import { Link } from "react-router-dom";

const RecommenedPost = () => {
    const image = "https://images.pexels.com/photos/8294606/pexels-photo-8294606.jpeg?auto=compress&cs=tinysrgb&w=600"
    return (
    
            <Link className="recommended-post text-decoration-none" 
            to={`/`} >
            <div className="recommended-box-img">
                <img src={image} alt="img-recomended" />
            </div> 

            <div>
                <div className="sidebar-div-data">
                    <p className="sidebar-main">Lucasfilms</p>
                    <p className="sidebar-date">May / 22 / 23</p>
                </div>

                <p className="sidebar-headline">¿Natalie Portman podría regresar a Star Wars?</p>
            </div>
            </Link>
    
      );

}

export default RecommenedPost