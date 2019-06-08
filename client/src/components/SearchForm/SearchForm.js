import React, {Component} from 'react';
import { Segment,Input, ModalDescription } from 'semantic-ui-react';

class SearchForm extends Component {
  
render() {
  return(
    <div className="search-container">
   <br/>
    <Input fluid action={{color: 'violet', content:'Поиск', onClick: ()=> this.props.getResult()}} placeholder='Введите модель ноутбука, например Acer V5-123' value={this.props.value} onChange={this.props.handleChange}/>
    <br/>
  </div>
  )
}
  
}

export default SearchForm;