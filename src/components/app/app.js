import React from "react";
import './app.css';
import RowGroups from "../row-groups";
import {PostManagerServiceConsumer} from "../post-manager-service-context";
import PostList from "../post-list";
import AddPanel from "../add-panel";

const App = () => {
    return (
        <div className="container">
            <PostManagerServiceConsumer>{
                value => (
                    <React.Fragment>
                        <RowGroups groups={value.getGroups()}/>
                        <AddPanel/>
                        <PostList posts={value.getPosts()}/>

                    </React.Fragment>
                )
            }
            </PostManagerServiceConsumer>
        </div>
    )
}

export default App;