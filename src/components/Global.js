import React from "react";
import { globalDetails } from "../constants/globalData";

function Global({ global }) {
  return (
    <div className="global-data">
      {Object.keys(globalDetails).map((key, index) => (
        <div key={index} className="global-data__row">
          <p>{key}</p>
          <p>{global[globalDetails[key]]}</p>
        </div>
      ))}
    </div>
  );
}

export default Global;
