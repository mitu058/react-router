import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData()
    const navigate = useNavigate()
    console.log(post)
    const {body,id} = post
    const handelGoBack = () =>{
      navigate(-1);
    }
    return (
        <div className='space-y-2'>
            <h2>Post details about : {id}</h2>
            <h2 className='border-2 border-cyan-500 p-3'>Post : {body}</h2>
            <button className="ml-4 px-2 py-1" onClick={handelGoBack}>go back</button>
        </div>
    );
};

export default PostDetails;