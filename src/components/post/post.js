import React from "react";
import "./post.css";
import PostGallery from "../post-gallery";

const Post = ({message, images}) => {
    return (
        <div className='justify-content-center'>
            <div className="d-flex w-100">

            </div>
            <h5 className="mb-1">Какой-то заголовок, не уверен, что он нужен</h5>
            <small className="text-muted">Тут будет ближайшее время постинга</small>
            <p className="mb-1">{message}</p>
            <PostGallery images={images}/>
            <small className="text-muted">Время, когда оно было предложено</small>
        </div>
    )
}
export default Post;