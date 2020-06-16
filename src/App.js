import React, { Fragment, Component } from "react";
import CardList from "./CardList.js";
import SearchBox from "./SearchBox.js";
import { robot } from "./Robot";
import "./App.css";
import { render } from "@testing-library/react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robot: robot,
      searchField: "",
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const filterrobots = this.state.robot.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });
    return (
      <Fragment>
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <CardList robot={filterrobots} />
        </div>
      </Fragment>
    );
  }
}

export default App;
