import React from "react";
import Post from "../post";

const PostList = (props) => {
    const listItemsRendered = props.posts.map((post, index) => {
        const {title, description, date_created, keywords} = post.data;
        const {image} = post;
        return (
            // <li id={index} className="list-group-item list-group-item-action flex-column align-items-start">
                <Post
                    index={index}
                    title={title}
                    images={[image]}
                    description={description}
                    dateCreated={date_created}
                    keywords={keywords}
                />
            //</li>
        )
    });
    return (
        <div className='justify-content-center row'>
            <ul className="post-list list-group col-md-8">
                {Array.isArray(listItemsRendered) && listItemsRendered.length ? listItemsRendered : null}
            </ul>
        </div>
    )
}
export default PostList;