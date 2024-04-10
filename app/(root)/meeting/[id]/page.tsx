"use client";
import { useGetCallById } from "@/Hooks/useGetCallById";
import Loader from "@/components/ui/Loader";
import MeetingRoom from "@/components/ui/MeetingRoom";
import MeetingSetUp from "@/components/ui/MeetingSetUp";
import { useUser } from "@clerk/nextjs";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import React, { useState } from "react";

const meeting = ({ params: { id } }: { params: { id: string } }) => {
  const { user, isLoaded } = useUser();
  const [isSetUpComplete, setIsSetUpComplete] = useState(false);

  const { call, callLoading } = useGetCallById(id);

  if (!isLoaded || callLoading) return <Loader />;
  return (
    <main className="h-screen w-full">
      <StreamCall call={call}>
        <StreamTheme>
          {!isSetUpComplete ? (
            <MeetingSetUp setIsSetUpComplete={setIsSetUpComplete} />
          ) : (
            <MeetingRoom />
          )}
        </StreamTheme>
      </StreamCall>
    </main>
  );
};

export default meeting;
