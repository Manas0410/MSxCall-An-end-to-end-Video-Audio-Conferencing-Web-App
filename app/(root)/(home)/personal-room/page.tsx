"use client";
import { useUser } from "@clerk/nextjs";
import React from "react";

const Table = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <div>
    <h1>{title}:</h1>
    <h1>{description}:</h1>
  </div>
);

const personalRoom = () => {
  const { user } = useUser();
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <h1 className="text-3xl font-bold"> Personal room</h1>
      <div className="flex w-full flex-col gap-8 xl:max-w-[900px]">
        <Table
          title="Topic"
          description={`${
            user?.username || user?.emailAddresses[0].emailAddress
          }'s Meeting Room`}
        />
      </div>
    </section>
  );
};

export default personalRoom;
