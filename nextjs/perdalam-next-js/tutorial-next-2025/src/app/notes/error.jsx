"use client";
import React from "react";

const Error = ({ error, reset }) => {
  return (
    <div className="flex flex-col gap-2">
      <h2>{error.message}</h2>
      <button onClick={reset} className="bg-slate-800 hover:bg-opacity-50 text-white">
        Try Again
      </button>
    </div>
  );
};

export default Error;
