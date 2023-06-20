
import ContentLayout from "../componets/layout/ContentLayout";
import Sidebar from "../componets/layout/Sidebar";
/** import Views from "../componets/layout/views/Views" */
import { useParams } from "react-router-dom";

const PostPage = () => {

    const {id} = useParams();

    return (
            <div className="container-box layout-sidebar px-1 px-md-4">
                <div className="px-3" >
                   
                    <ContentLayout id={id} />
                </div>
             
                 <Sidebar />           
              
            </div>
    )
}
 
export default PostPage;