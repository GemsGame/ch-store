import React from "react";
import "semantic-ui-css/semantic.min.css";
import './Row.css';

const Row = ({name, ...props}) => (
    <div className="row">
  <div className="ui card">
    <div className="content">
      <div className="header">{name}</div>
    </div>
    <div className="image">
      <img src={props.image} />
    </div>
    <div className="content">
      <div className="description">
        <div className="ui statistic">
          <div className="label">
            <del>{props.oldPrice} руб.</del>
          </div>
          <div className="value">{props.newPrice}</div>
          <div className="label">руб.</div>
        </div>
      </div>
    </div>
    <div className="ui two bottom attached buttons">
          {props.children}
        </div>
  </div>
  </div>
);

export default Row;