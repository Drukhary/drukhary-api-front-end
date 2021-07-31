import React from "react";
import Post from "../post";

const PostList = ({posts}) => {
    const listItems = posts.map(post => {
        const {message,images} = post;
        return (
        <div className="list-group-item list-group-item-action flex-column align-items-start">
            <Post message={message} images={images}/>
        </div>
        )
    });
    return (
            <div className="post-list list-group justify-content-center">
                {listItems}
            </div>
    )
}
export default PostList;