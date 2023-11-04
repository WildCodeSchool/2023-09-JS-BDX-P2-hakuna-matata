import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { countriesDetailed } from "./helpers";
import "./Country.css";

export default function Country() {
  const params = useParams();
  const [isSearching, setIsSearching] = useState(true);
  useEffect(() => {
    countriesDetailed.find((area) => area.CountryApi === params.id);
    setIsSearching(false);
  }, []);
  return <span>{!isSearching ? "country" : ""}</span>;
}
