import React, { useEffect } from "react";
import axios from "./api";

const fetchData = async () => {
  const { data } = await axios.get("/data");
  console.log(data);
};

const Explore = () => {
  useEffect(() => {
    fetchData();
  });
  return <div>Hello</div>;
};

export default Explore;
