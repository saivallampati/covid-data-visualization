import { useState } from "react";
import { Button, Skeleton } from "antd";

import CountyWiseData from "../components/CountyWiseData";
import Global from "../components/Global";
import useFetch from "../hooks/useFetch";
import MainHeader from "../components/MainHeader";

function Home() {
  const [reload, setReload] = useState(true);
  const { data, isLoading } = useFetch(reload, setReload);
  return (
    <div className="home-container">
      <div className="home-container__header">
        <MainHeader header={"Covid Data Visualization"} />
        <Button type="primary" onClick={() => setReload(!reload)}>
          Refresh Data
        </Button>
      </div>
      {!data || isLoading ? (
        <Skeleton loading active paragraph />
      ) : (
        <>
          <Global global={data?.Global} />
          <CountyWiseData countriesData={data?.Countries} />
        </>
      )}
    </div>
  );
}

export default Home;
