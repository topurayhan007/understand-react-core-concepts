import React from "react";
import Knob from "../Knob/Knob";

const Dial = (props) => {
  return (
    <div
      style={{ border: "2px solid purple", margin: "20px", padding: "20px" }}
    >
      <h3>This is Dial component</h3>
      Your steps count: {props.steps}
      <Knob steps={props.steps}></Knob>
    </div>
  );
};

export default Dial;
