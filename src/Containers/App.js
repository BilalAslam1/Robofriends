import React, { Fragment, Component } from "react";
import CardList from "../Components/CardList.js";
import SearchBox from "../Components/SearchBox.js";
import "./App.css";
import { setSearchField } from "../actions.js";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    searchField: state.searchField,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
  };
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      robot: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robot: users }));
  }

  render() {
    const { searchField, onSearchChange } = this.props;
    const filterrobots = this.state.robot.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      <Fragment>
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox searchChange={onSearchChange} />
          <CardList robot={filterrobots} />
        </div>
      </Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
