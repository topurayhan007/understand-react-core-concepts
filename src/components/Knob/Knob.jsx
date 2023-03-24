import React from "react";

const Knob = (props) => {
  return (
    <div
      style={{ border: "2px solid orange", margin: "10px", padding: "10px" }}
    >
      <h3>This is Knob component</h3>
      Steps here is: {props.steps}
    </div>
  );
};

export default Knob;
