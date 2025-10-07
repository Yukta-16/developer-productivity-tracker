import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from "./components/Form";
import ChartComp from "./components/Chart";

function App() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const res = await axios.get("/api/hours");
    setData(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h1>Developer Productivity Tracker 🚀</h1>
      <Form onSuccess={fetchData} />
      <ChartComp data={data} />
    </div>
  );
}

export default App;
