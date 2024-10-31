import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Post = ({post}) => {
    const navigate = useNavigate();
    const {title,id} = post
    const handleClicked=()=>{
        navigate(`/post/${id}`)
    }
    return (
        <div className="border-2 border-orange-600 p-2 m-3">
            <h4 className="font-bold">Post Id : {id}</h4>
            <h4>Title : {title}</h4>
            <Link to={`/post/${id}`}><button className="px-2 py-1">Show post</button></Link>
            <button className="ml-4 px-2 py-1" onClick={handleClicked}>post details</button>
        </div>
    );
};

export default Post;