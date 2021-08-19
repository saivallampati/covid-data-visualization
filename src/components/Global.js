import PropTypes from "prop-types";
import SubHeader from "./common/SubHeader";
import { globalDetails } from "../constants/globalData";

function Global({ global }) {
  return (
    <>
      <SubHeader header={"Global Summary"} />
      <div className="global-data">
        {Object.keys(globalDetails).map((key, index) => (
          <div key={index} className="global-data__row">
            <p className="global-data__row__key">{key}</p>
            <p>{global[globalDetails[key]]}</p>
          </div>
        ))}
      </div>
    </>
  );
}

Global.propTypes = {
  global: PropTypes.object,
};

export default Global;
