import { useOutletContext } from "react-router-dom";
import "./Country.css";

export default function Country() {
  const { country } = useOutletContext();
  return <span>{country.Country ?? "no country"}</span>;
}
