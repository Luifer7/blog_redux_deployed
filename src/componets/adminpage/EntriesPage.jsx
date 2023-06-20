import { useSendEntry } from "../../hooks/useSendEntry"
import { useLocation } from "react-router-dom"

const EntriesPage = () => {

    const location = useLocation()
    const {entries} = useSendEntry()

    let imgUrl = `https://firebasestorage.googleapis.com/v0/b/blog-redux-51c80.appspot.com/o/NOTHING?alt=media&token=483abd86-6265-4246-9e41-83b9685cff40`

    return ( 
        <div className="p-2" >
           
          {
            entries &&
            entries.map((entry, i) => (
                <div key={i} className="border rounded px-3 mb-3" >
                   <h4 className="mt-2" ><strong className="fw-bold">
                    {entry.category}</strong>
                    </h4>
                    <div className="py-2 d-flex flex-column" >
                    <div className="d-flex flex-column gap-2" >
                       <span className="text-dark fw-bold" >{entry.tagline}</span>
                     <span>{entry.tittle}</span>
                    </div>
                     <div className="d-flex justify-content-between align-items-end mt-2">
                     <img width={100} 
                     src={`https://firebasestorage.googleapis.com/v0/b/blog-redux-51c80.appspot.com/o/${entry?.image_two}?alt=media&token=483abd86-6265-4246-9e41-83b9685cff40`} 
                     className="p-1 rounded img-thumbnail"  alt="fff" />
                      <span className="" >{entry.date}</span>
                     </div>
                    </div>
                </div>
            ))
          }
        </div>
     )
}
 
export default EntriesPage