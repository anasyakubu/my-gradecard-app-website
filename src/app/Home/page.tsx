import React from "react";
import HomeHeader from "../section/HomeHeader/HomeHeader";
import Student from "../section/Student/Student";
import Staff from "../section/Staff/Staff";
import Features from "../section/Features/Features";
import Parent from "../section/Parent/Parent";
import Join from "../section/Join/Join";
import Video from "../section/Video/Video";
import Pricing from "../section/Pricing/Pricing";

const Home = () => {
  return (
    <div>
      <HomeHeader />
      <Features />
      <Student />
      <Staff />
      <Parent />
      <Join />
      {/* <Video /> */}
      {/* <Pricing /> */}
    </div>
  );
};

export default Home;
