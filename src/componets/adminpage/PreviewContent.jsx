import ParceredContent from "./form/ParceredContent";
import { useSelector } from "react-redux";
import "./admin.css"

const PreviewContent = () => {

   const { contentSize } = useSelector(store => store.resize )

   const {
   category,
   tittle,
   tagline, 
   comment,
   paragraph_one,
   paragraph_two,
   img_one,
   img_two,
   taggs} = useSelector(store => store.form)
      
    return ( 
        <div className="m-auto" 
        style={{overflow: 'hidden', width: `${contentSize}`}} >

            <strong className="tagline" >{tagline ? tagline : ''}</strong>
            <h1 className="tittle">{tittle ? tittle : ''}</h1>
            <h3 className="comment" >{comment ? comment : ''}</h3>
            
            <div className="mt-2 mb-3">
            <img  className="border w-100" style={{height: 'auto'}}  src={img_one.reader} alt="" />
            </div>
            
           <ParceredContent html={paragraph_one}/> 
         
           <div className="mt-2 mb-3">
            <img  className="border w-100" style={{height: 'auto'}}  src={img_two.reader} alt="" />
            </div>
         
           
           <ParceredContent html={paragraph_two}/> 

           <div className="mb-5 d-flex gap-2 align-items-center flex-wrap mt-4" >
               <span className="fw-bold h5 m-0" >Taggs: </span>
            {
               taggs.map((tag, i) => (
               
                  <span className="taggs rounded" key={i}>{tag.label}</span>
               
               ))
            }
           </div>

        </div>
     )
}
 
export default PreviewContent;