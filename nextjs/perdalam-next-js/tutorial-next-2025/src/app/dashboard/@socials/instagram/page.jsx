import Card from "@/components/Card";
import Link from "next/link";
import React from "react";

const Instagram = () => {
  return (
    <Card>
      <div className="flex flex-col gap-3">
        <h3>Instagram</h3>
        <Link href={"/dashboard"}>Go Back to dashboard</Link>
      </div>
    </Card>
  );
};

export default Instagram;
