import React from "react";
import {Link} from "react-router-dom";

const Authorization = () => {
    return (
        <div>
        <a href={`http://localhost:3000/vk/login`} className="btn btn-outline-primary">{"{login}"}</a>
    </div>
    )
}

export default Authorization;