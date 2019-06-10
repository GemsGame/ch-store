import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import "./RowList.css";
import Row from "../RowList/Row";
import UiButton from "../UiButton";
import { connect } from "react-redux";

class RowList extends Component {

  render() {
    
      return (
        <div className="rowlist">
        {this.props.chargers.map((item, index) => 
          <Row key={item.id}
          name={item.name}
          image={item.img}
          newPrice={item.price}
          oldPrice={item.price+15}
          >
            <UiButton color="violet">
              <i className="question icon" />
              Подробнее
            </UiButton>
            <UiButton color="green" style={{ minWidth: "150px" }}>
              <i className="check circle outline icon" />
              Купить
            </UiButton>
          </Row>
        )}
        
        </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    chargers: state.chargers
  };
};

export default connect(mapStateToProps)(RowList);
