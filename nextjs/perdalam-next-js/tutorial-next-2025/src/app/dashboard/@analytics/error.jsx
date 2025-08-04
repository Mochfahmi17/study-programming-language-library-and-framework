"use client";
import Card from "@/components/Card";
import React from "react";

const Error = ({ error, reset }) => {
  return (
    <Card>
      <h2>{error.message}</h2>
      <button onClick={reset}>Try Again</button>
    </Card>
  );
};

export default Error;
