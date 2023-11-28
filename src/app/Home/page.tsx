import React from "react";
import HomeHeader from "../section/HomeHeader/HomeHeader";
import Student from "../section/Student/Student";
import Staff from "../section/Staff/Staff";
import Features from "../section/Features/Features";

const Home = () => {
  return (
    <div>
      <HomeHeader />
      <Features />
      <Student />
      <Staff />
    </div>
  );
};

export default Home;
