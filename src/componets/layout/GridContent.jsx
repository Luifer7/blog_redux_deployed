import CardContent from "./CardContent"

const GridContent = ({titulo, posts}) => {
    return ( 
        <>
        <h3 className="my-4" >{titulo ? titulo : 'All Posts'}</h3>
        <div className="w-100 row my-1">

            {
                posts ? posts.map((post, i)=> (
                    <div key={i} 
                     className="col-12 col-sm-6 col-md-4 col-lg-3 text-center" 
                      >
                    <CardContent post={post} />
                    </div>
                ))
                : null
            }
           
            
        </div>
        </>
     )
}
 
export default GridContent