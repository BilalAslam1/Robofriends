import React, { Fragment } from "react";
import CardList from "./CardList.js";
import SearchBox from "./SearchBox.js";

const App = () => {
  return (
    <Fragment>
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox />
        <CardList />
      </div>
    </Fragment>
  );
};

export default App;
