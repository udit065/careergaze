import React from "react";
import Navbar from "./components/Navbar";
import PostSection from "./components/PostSection";
import Nav from "./components/Test";

export default function Home() {
  return (
    <>
      <Navbar />
      <PostSection />
      <Nav />
      <p className='flex justify-center xs:text-[20px] md:text-[40px] lg:text-[75px] xl:text-[100px] '>GLASSDOOR</p>
    </>
  )
}
