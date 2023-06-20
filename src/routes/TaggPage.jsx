import GridContent from "../componets/layout/GridContent"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";

const TaggPage = () => {

   const {tagg} = useParams()
   const [currentTagg, setCurrentTagg] = useState([]) 

   useEffect(() => {

    const getEntriesByTaggs = async () => {
        let items = []
        const taggsRef = collection(db, "entries");
        const q = query(taggsRef, where("taggs", "array-contains", tagg));
        try {
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                items.push({...doc.data(), id: doc.id});
            })   
            setCurrentTagg(items)
        } catch (error) {
            
        }
    }

    getEntriesByTaggs()

    },[tagg])

    return ( 
  
           <div className="p-2" >
                { currentTagg && <GridContent titulo={tagg} posts={currentTagg} /> }
           </div>


     )
}
 
export default TaggPage