"use client";
import { useParams } from "next/navigation";
import React from "react";

const getRandomItem = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const SectionDetail = () => {
  const params = useParams();
  const item = getRandomItem(["", "ikan"]);

  if (item === "") {
    throw new Error("Item is empty!");
  }
  return (
    <div>
      <h1>{item}</h1>
      Note {params.noteId} Section {params.sectionId}
    </div>
  );
};

export default SectionDetail;
