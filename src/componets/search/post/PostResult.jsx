import { Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Skeleton from "@mui/material/Skeleton";
import elapsedTime from "../../helpers/elapsepTime";

import { storage } from "../../../firebase";

const PostResult = ({posts, loading}) => {

    return (
        <ul className="articles">
        {(loading ? Array.from(new Array(8)) : posts)
        .map((post, i) => (
            <li className="article" key={i}>
                {post 
                ?   <div className="articles-image-box">
                        <Link to={`/post/${post.id}`}>
                            <LazyLoadImage 
                                src={`https://firebasestorage.googleapis.com/v0/b/blog-redux-51c80.appspot.com/o/${post?.image_one}?alt=media&token=${storage?.app?._options?.apiKey}`}
                                width={'100%'} height={'100%'}
                                alt={post.tittle}
                                placeholder={<Skeleton variant="rectangular" width="100%" height={300} />}
                                />
                        </Link>
                    </div>
                :   <div className="articles-image-box">
                        <Skeleton variant="rectangular" width="100%" height={300} />
                    </div>
                }
                {post 
                ?   <>  
                        <div className="article-source_div">
                            {post.views > 0 
                            ? <p className="article-views"><span>{post.views} </span>views</p> 
                            :<p className="article-views"><i className="bi bi-stars" style={{color: "#FF7A42"}} ></i> Take a look at this post</p>
                            }
                            <p className="article-date">{elapsedTime(post.date)}</p>
                        </div>
                        <p className="article-source">{post.tagline}</p>
                        <p className="article-headline">{post.tittle}</p>
                    </>
                :  
                    <>
                        <Skeleton width="60%" />
                        <Skeleton />
                    </>
                }
            </li>
            ))}
        </ul>
      );
}
 
export default PostResult;