import { notFound } from "next/navigation";
import React from "react";

const getRandomItem = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export const generateMetadata = ({ params }) => {
  const metadata = {
    title: `Note detail ${params.noteId}`,
  };
  return metadata;
};

const NoteId = ({ params, searchParams }) => {
  console.log(searchParams);
  if (parseInt(params.noteId) > 100) {
    return notFound();
  }

  const item = getRandomItem(["", "ikan"]);
  return (
    <div>
      NoteId {params.noteId} {item}
    </div>
  );
};

export default NoteId;
