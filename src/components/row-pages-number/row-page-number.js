import React from "react";
import {Link} from "react-router-dom";



const RowPageNumber = ({pageNumbers}) =>{
    const pageNumbersRendered = pageNumbers.map(pageNumber => {
        return (
            <div>
                <input type="radio" className="btn-check" name="btnradio" id={pageNumber} autoComplete="off"
                       checked=""/>
                <Link to={`/$`} className="btn btn-outline-primary" for={pageNumber}>{pageNumber}</Link>
            </div>
        )
    });
    const [previous,next] = ["previous","next"];
    return (
        <div className="btn-group d-flex" role="group" aria-label="Basic radio toggle button group">
            <div>
                <input type="radio" className="btn-check" name="btnradio" id={previous} autoComplete="off"
                       checked=""/>
                <Link to={`/${previous}`} className="btn btn-outline-primary" for={previous}>{previous}</Link>
            </div>
            {pageNumbersRendered}
            <div>
                <input type="radio" className="btn-check" name="btnradio" id={next} autoComplete="off"
                       checked=""/>
                <Link to={`/${next}`} className="btn btn-outline-primary" for={next}>{next}</Link>
            </div>
        </div>
    )
}

export default RowPageNumber;