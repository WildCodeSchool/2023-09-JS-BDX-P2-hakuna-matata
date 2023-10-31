import React from "react";
import { useParams } from "react-router-dom";

function Continent() {
  const { continent } = useParams();
  return <div>PAGE CONTINENT {continent}</div>;
}

export default Continent;
