import SideBar from "@/components/SideBar/SideBar";
import Footer from "@/components/footer/Footer";
import NavBar from "@/components/navBar/NavBar";
import React, { ReactNode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CUTUU",
  description: "Video Calling App",
  icons: {
    icon: "/icons/logo.svg",
  },
};

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="relative">
      <NavBar />
      <div className="flex">
        <SideBar />
        <section className="flex min-h-screen  flex-1 flex-col px-6 pb-6 pt-28 max-md:pd-14 sm:pb-14">
          <div className="w-full">{children}</div>
        </section>
      </div>
      <Footer />
    </main>
  );
};

export default HomeLayout;
