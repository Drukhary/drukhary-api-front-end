import React, {useState} from "react";

const SearchPanel = ({setSearch}) => {
    const [searchString, setSearchString] = useState("");
    return (
        <div className="form-group">
            <label className="col-form-label mt-4" htmlFor="searchPanel">Enter the name of the space object</label>
            <input type="text" className="form-control" placeholder="star" id="searchPanel"
                   data-dashlane-rid="e6ebd68441b8e168" data-form-type="other"
                   value={searchString}
                   onChange={(e) => setSearchString(e.target.value)}
                   onKeyPress={(e) => {
                       if (e.key === 'Enter') {
                           setSearch(searchString);
                       }
                   }
                   }/>
        </div>
    )
}
export default SearchPanel;