import React from "react";
import Image from "next/image";
import PhoneDashBoard from "../../../../public/staff-mobile-laptop.png";
import PrimaryBtn from "@/app/components/PrimaryBtn";
import "./Staff.scss";

const Staff = () => {
  return (
    <div
      className="Staff"
      style={{ backgroundColor: "#f2f7f8", color: "#3d4f60" }}
    >
      <div className="pt-10">
        <div className="p-5 space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
          <div className="text-center mt-10 pt-10">
            <Image className="phoneImg" src={PhoneDashBoard} alt="Logo" />
          </div>
          <div className="pl-3 max-w-xl lg:py-16">
            {/* sm:py-48 lg:py-56 */}
            <div className="text">
              <h1
                className="text-2xl font-extrabold tracking-wide shadow-2 sm:text-4xl"
                style={{ color: "#122231" }} //#122231
              >
                My Staff
              </h1>
              <p
                className="mt-4 text-md leading-8"
                style={{ color: "#122231" }} //#3d4f60
              >
                We understand that the safety and well-being of your child are
                paramount, even when theyre at school. Thats why our schools kid
                monitoring software goes above and beyond to ensure parents are
                always informed about their childs arrival and departure.
              </p>
            </div>
            <div className="flex mt-10">
              <PrimaryBtn text="Start free trial" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staff;
