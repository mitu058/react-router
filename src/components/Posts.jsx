import { useLoaderData } from "react-router-dom";
import Post from "./post";

const Posts = () => {
    const posts = useLoaderData()
    return (
        <div>
            <h2 className="text-2xl">Total post : {posts.length}</h2>
           <div className="grid grid-cols-3 gap-6">
           {
                posts.map(post => <Post key={post.id} post={post}></Post>)
            }
           </div>
        </div>
    );
};

export default Posts;