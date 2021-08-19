import PropTypes from "prop-types";
import { Table } from "antd";
import { tableColumns } from "../constants/countriesTableColumns";
import SubHeader from "./common/SubHeader";

function CountyWiseData({ countriesData }) {
  return (
    <div className="countries-data">
      <SubHeader header={"Country wise Summary"} />
      <Table dataSource={countriesData} columns={tableColumns} bordered />
    </div>
  );
}

CountyWiseData.propTypes = {
  countriesData: PropTypes.array,
};

export default CountyWiseData;
