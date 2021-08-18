import React from "react";
import { Table } from "antd";
import { tableColumns } from "../constants/countriesTableColumns";

function CountyWiseData({ countriesData }) {
  return (
    <div className="countries-data">
      <Table dataSource={countriesData} columns={tableColumns} bordered />
    </div>
  );
}

export default CountyWiseData;
