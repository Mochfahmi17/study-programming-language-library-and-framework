import Card from "@/components/Card";
import React from "react";

const getRandomItem = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const Analytics = () => {
  const item = getRandomItem(["", "ikan"]);
  if (item === "") {
    throw new Error("Item is empty!");
  }
  return <Card>Analytics Slot {item}</Card>;
};

export default Analytics;
