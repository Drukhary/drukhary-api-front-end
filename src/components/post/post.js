import React from "react";
import "./post.css";
import PostGallery from "../post-gallery";

const Post = ({index, title, description, images, dateCreated, keywords}) => {
    console.log(images);
    return (
        <li id={index}
            className="list-group-item list-group-item-action flex-column align-items-start justify-content-center">
            <h5 className="mb-1">{title}</h5>
            {keywords ? <small className="text-muted">keywords: {keywords.join(' ')}</small> : null}
            <p className="mb-1">{description}</p>
            <img src={images[0].original} alt={`I'm sorry`}/>
            {/*{images.length*/}
            {/*    ? <PostGallery images={images}/>*/}
            {/*    : null*/}
            {/*}*/}
            <p>
                <small className="text-muted">{dateCreated}</small>
            </p>
        </li>
    )
}
export default Post;