import React from "react";
import { useLocation } from "react-router-dom";

export default function Detail() {
  const location = useLocation();
  const { item } = location.state || {};
  console.log(location);
  if (!item) {
    return <div>No item data available</div>;
  }
  return <div></div>;
}
