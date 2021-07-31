import React, {ReactFragment} from "react";
import {Link} from "react-router-dom";

const RowGroups = ({groups}) => {
    const groupListRendered = groups.map(group => {
            const {name} = group;
            return (
                <React.Fragment>
                    <input type="radio" className="btn-check" name="btnradio" id={name} autoComplete="off"
                           checked=""/>
                    <Link to={`/${name}`} className="btn btn-outline-primary" for={name}>{name}</Link>
                </React.Fragment>
            )
        });
    console.log(groupListRendered);
    return (
        <div className="btn-group d-flex" role="group" aria-label="Basic radio toggle button group">
            {groupListRendered}
        </div>
    )
}

export default RowGroups;