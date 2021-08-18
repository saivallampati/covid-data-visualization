import { useState } from "react";
import { Button, Skeleton } from "antd";

import CountyWiseData from "../components/CountyWiseData";
import Global from "../components/Global";
import useFetch from "../hooks/useFetch";

function Home() {
  const [reload, setReload] = useState(true);
  const { data, isLoading } = useFetch(reload, setReload);
  return (
    <div className="home-container">
      <div className="home-container__header">
        <h1>Covid Data Visualization</h1>
        <Button onClick={() => setReload(!reload)}>Refresh Data</Button>
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
