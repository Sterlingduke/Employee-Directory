import React from "react";

function Search() {
  return (
  
    <div className="input-group">
      <div className="form-outline">
        <input type="search" id="form1" className="form-control" />
        <label className="form-label" for="form1">Search Employees</label>
      </div>
      {/* <button type="button" className="btn btn-primary">
        <i className="fas fa-search"></i>
      </button> */}
    </div>
  );
}

export default Search;
