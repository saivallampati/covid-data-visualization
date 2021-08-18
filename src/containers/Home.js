import { Button } from "antd";
import { useState } from "react";
import CountyWiseData from "../components/CountyWiseData";
import Global from "../components/Global";
import useFetch from "../hooks/useFetch";

function Home() {
  const [reload, setReload] = useState(true);
  const { data, isLoading } = useFetch(reload, setReload);
  return (
    <div>
      Welcome to Covid Data Visualization
      {!data || isLoading ? (
        "loading...."
      ) : (
        <>
          <Button onClick={() => setReload(!reload)}>Refresh Data</Button>
          <Global global={data?.Global} />
          <CountyWiseData countriesData={data?.Countries} />
        </>
      )}
    </div>
  );
}

export default Home;
