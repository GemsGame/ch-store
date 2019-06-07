import React from "react";
import { Button } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const UiButton = ({children, ...props }) => (
  <div>
    <Button
     {...props}
    >{children}</Button>
  </div>
);

export default UiButton;
