import StreamVideoProvider from "@/Providers/StreamClientProvider";
import React, { ReactNode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CUTUU",
  description: "Video Calling App",
  icons: {
    icon: "/icons/logo.svg",
  },
};
const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default RootLayout;
