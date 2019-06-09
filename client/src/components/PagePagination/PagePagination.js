import React, { Component } from "react";
import { Pagination } from "semantic-ui-react";
import { connect } from "react-redux";
import { chargersFetchData } from "../../actions/chargers";

class PagePagination extends Component {
  
  componentWillMount() {
    this.props.fetchData("/page=0&limit=30");
  } 

  activePage = page => {
    this.props.fetchData(`/page=${page-1}&limit=30`);
  };

  render() {
    return (
      <Pagination
        boundaryRange={5}
        defaultActivePage={1}
        ellipsisItem={null}
        firstItem={null}
        lastItem={null}
        siblingRange={1}
        totalPages={Infinity}
        onPageChange={(e, props) => this.activePage(props.activePage)}
      />
    );
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
)(PagePagination);
