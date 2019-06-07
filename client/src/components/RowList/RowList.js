import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import "./RowList.css";
import Row from "../RowList/Row";
import UiButton from "../UiButton";

class RowList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.data.feed);

      return (
        
        this.props.result !== null?
        this.props.result.map((item, index) => 
          <Row key={item.gsx$id.$t}
          name={item.gsx$name.$t}
          image={item.gsx$img.$t}
          newPrice={item.gsx$price.$t}
          oldPrice={item.gsx$price.$t}
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
  
        ):  
        this.props.data.feed.entry.map((item, index) => 
          <Row key={item.gsx$id.$t}
          name={item.gsx$name.$t}
          image={item.gsx$img.$t}
          newPrice={item.gsx$price.$t}
          oldPrice={item.gsx$price.$t}
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
        )
    );
  }
}

export default RowList;
