import PrimaryBtn from "@/app/components/PrimaryBtn";
import React from "react";
import "./Join.scss";
import Image from "next/image";
import Student from "../../../../public/college students-rafiki.svg";

const Join = () => {
  return (
    <div className="Join bg-white">
      <div className="p-10">
        <div
          className="JoinCard rounded-lg shadow-lg p-20 space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0"
          style={{ backgroundColor: "#f2f7f8", color: "#3d4f60" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              // height: "100vh",
            }}
          >
            <div className="">
              <h2 className="text-3xl font-bold" style={{ color: "#1D4ED8" }}>
                Join MyGradeCard Community
              </h2>
              <p className="mt-5 text-gray-900">
                Behind every School Management System, there’s a creative mind.
                You can join MyGradeCard
              </p>
              <div className="mt-5">
                <PrimaryBtn text="Join the Community" />
              </div>
            </div>
          </div>

          <div className="text-center">
            <Image src={Student} alt="Student" className="h-80" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
