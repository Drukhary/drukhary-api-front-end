import React, {useEffect, useState} from "react";
import './app.css';
import PostList from "../post-list";
import NasaApiGov from '../../services/nasa-api-gov';

import SearchPanel from "../search-panel";
import {useHistory} from "react-router-dom";

const App = () => {

    const [listPosts, setListPosts] = useState([]);
    const [search,setSearch] = useState("");
    useEffect(() => {
        const nasaApiGov = new NasaApiGov();
        nasaApiGov
            .getSearch(search)
            .then(list => {
                console.log(list);
                setListPosts(list.slice(0,5));
                history.push(`?search=${search}`);
            });
        return ()=>setListPosts([]);
    }, [search]);
    const history = useHistory();

    function handleClick() {
        history.push("/home");
    }
    return (
        <div className="container">
            <SearchPanel setSearch={setSearch}/>
            <PostList posts={listPosts}/>
        </div>
    )
}

export default App;