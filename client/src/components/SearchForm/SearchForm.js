import React, {Component} from 'react';
import { Input } from 'semantic-ui-react';
import { connect } from "react-redux";
import { chargersFetchData } from "../../actions/chargers";

class SearchForm extends Component {
  state = {
    query: '',
  };


search = () => {
   this.props.fetchData(`/search=${this.state.query}`);
}

handleChange = (event) => {
this.setState({query: event.target.value});
console.log(this.state.query);
}
render() {
  return(
    <div className="search-container">
   <br/>
    <Input fluid action={{color: 'violet', content:'Поиск', onClick: ()=> this.search()}} placeholder='Введите модель ноутбука, например Acer V5-123' value={this.state.query} onChange={this.handleChange}/>
    <br/>
  </div>
  )
}
  
}
const mapStateToProps = state => {
  return {
    chargers: state.chargers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: query => dispatch(chargersFetchData(query))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);