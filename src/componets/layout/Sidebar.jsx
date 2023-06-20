import RecommenedPost from "./RecommenedPost";
import "./layout.css"
import imgAdvertising from "../../assets/img/advertising.jpg"

const Sidebar = () => {

    return (
        <aside className="">
          <div className="sidebar-content">
            <div className="sidebar-box-recommended">
              <h2 className="sidebar-tittle">Recommended</h2>
              <ul className="sidebar-recommended">
                <RecommenedPost />
                <RecommenedPost />
                <RecommenedPost />
              </ul>
            </div>
            
            <div className="recommended-box-advertising">
                <img src={imgAdvertising} alt="img-advertising" />
            </div>
          </div>
      
        </aside>
      );
}
 
export default Sidebar;