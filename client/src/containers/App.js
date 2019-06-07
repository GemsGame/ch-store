import React, { Component } from "react";
import logo from "../logo.svg";
import "./App.css";
import RowList from "../components/RowList";
import SearchForm from "../components/SearchForm";
import Category from "../components/Category";
import PagePagination from "../components/PagePagination";

import { connect } from "react-redux";
import { chargesFetchData } from "../actions/charges";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      search: "",
      result: null
    };
  }
 
  componentWillMount() {
    fetch(
      "https://spreadsheets.google.com/feeds/list/1KSJUJi1lW8qT-lU9r5jXj-gv4bUSiN49SQZ-1fGua7M/1/public/values?alt=json"
    )
      //fetch('https://spreadsheets.google.com/feeds/list/1KSJUJi1lW8qT-lU9r5jXj-gv4bUSiN49SQZ-1fGua7M/2106449282/od6/public/values?alt=json')
      .then(response => response.json())
      .then(json => this.setState({ data: json }));
  }

  componentDidMount() {
   this.props.fetchData("/search=acer");
  }

  handleChange = event => {
    this.setState({ search: event.target.value });
  };



  /*componentDidUpdate () {
 if(this.state.search !== '') {
 const get = this.state.data.feed.entry.filter((item,index) => item.gsx$name.$t.match(this.state.search));
 console.log(get);

 } */

  getResult = () => {
    if (this.state.search !== "") {
      const get = this.state.data.feed.entry.filter((item, index) =>
        item.gsx$name.$t.match(this.state.search)
      );
      
      this.setState({ result: get });
    }
  };

  render() {
 
    return this.state.data != null ? (
      <div className="App">
        <Category />
        <br />
        <div className="search-container">
          <SearchForm
            handleChange={this.handleChange}
            value={this.state.search}
            getResult={this.getResult}
          />
        </div>
        <br />

        <div className="rowlist">
          <RowList data={this.state.data} result={this.state.result} />
        </div>
        <br />
        <PagePagination />
      </div>
    ) : null;
  }
}

const mapStateToProps = state => {
  return {
    charges: state.charges
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => dispatch(chargesFetchData(url))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
