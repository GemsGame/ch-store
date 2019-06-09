import React, { Component } from "react";
import "./App.css";
import RowList from "../components/RowList";
import SearchForm from "../components/SearchForm";
import Category from "../components/Category";
import PagePagination from "../components/PagePagination";
import { connect } from "react-redux";

class App extends Component {
  render() {
    return this.props.chargers != null ? (
      <div className="App">
        <Category />
        <SearchForm />
        <RowList />
        <PagePagination />
      </div>
    ) : null;
  }
}

const mapStateToProps = state => {
  return {
    chargers: state.chargers
  };
};

export default connect(mapStateToProps)(App);
