import React from "react";
import "./Spinner.css";

const Spinner = props => {
  return (
    <div className="spinner-container">
      <div className="lds-hourglass"></div>
    </div>
  );
};

export default Spinner;
