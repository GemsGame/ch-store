import React, { Component } from "react";
import "./App.css";
import RowList from "../components/RowList";
import SearchForm from "../components/SearchForm";
import Category from "../components/Category";
import PagePagination from "../components/PagePagination";
import { connect } from "react-redux";
import { chargersFetchData } from "../actions/chargers";


class App extends Component {
  
  componentWillMount() {
    this.props.fetchData("/page=0&limit=10");
  } 
  

  handleChange = event => {
    this.setState({ search: event.target.value });
  };

  getResult = () => {
    if (this.state.search !== "") {
      const get = this.state.data.feed.entry.filter((item, index) =>
        item.gsx$name.$t.match(this.state.search)
      );
      
      this.setState({ result: get });
    }
  };

  render() {
 
    return this.props.chargers != null ? (
      <div className="App">
        <Category />
          <SearchForm/>
          <RowList/>
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

const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => dispatch(chargersFetchData(url))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
