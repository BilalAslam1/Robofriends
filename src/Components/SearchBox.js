import React, { Fragment } from "react";

const SearchBox = ({ searchField, searchChange }) => {
  return (
    <Fragment>
      <div className="pa3">
        <input
          className="pa3 ba b--green bg-lightest-blue"
          type="search"
          placeholder="search robots"
          onChange={searchChange}
        />
      </div>
    </Fragment>
  );
};

export default SearchBox;
