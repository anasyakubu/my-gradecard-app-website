import FeaturesCard from "@/app/components/FeaturesCard";
import React from "react";
import "./Features.scss";
// import {
//   faHomeUser,
//   faUserFriends,
//   faSchool,
// } from "@fortawesome/free-solid-svg-icons";

const Features = () => {
  return (
    <div
      className="Features"
      style={{ backgroundColor: "#fff", color: "#3d4f60" }}
    >
      <div className="p-10">
        <div className="text-center mt-5">
          <h2
            className="text-2xl font-extrabold tracking-wide shadow-2"
            style={{ color: "#122231" }}
          >
            ALL-IN-ONE CLOUD SOLUTION FOR <br /> DIGITALIZING EDUCATIONAL
            INSTITUTIONS
          </h2>
        </div>
        <div className="mt-10 space-y-2 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
          <div className="">
            <div
              className="m-1 p-3 text-center rounded-md bg-transparent text-black"
              // style={{ backgroundColor: "#f2f7f8", color: "#3d4f60" }}
            >
              {/* <div className="icon p-8 text-center"></div> */}
              <div className="text">
                <h6 className="p-3 text-2xl font-extrabold">Others</h6>
                <p className="p-2 pb-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt repellendus assumenda accusamus nemo ab adipisci
                  obcaecati dolorem quibusdam culpa optio ratione consequuntur,
                  unde deleniti quis, blanditiis sint eaque sed iure.
                </p>
              </div>
            </div>
          </div>
          <FeaturesCard
            // icon={faSchool}
            tittle="School"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quae aperiam dolor explicabo soluta assumenda quam ipsam, voluptatem, amet blanditiis alias. Expedita cupiditate quis qui eveniet labore numquam debitis dolorem!"
          />
          <FeaturesCard
            // icon={faSchool}
            tittle="Student"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quae aperiam dolor explicabo soluta assumenda quam ipsam, voluptatem, amet blanditiis alias. Expedita cupiditate quis qui eveniet labore numquam debitis dolorem!"
          />
          <FeaturesCard
            // icon={faSchool}
            tittle="Staff"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quae aperiam dolor explicabo soluta assumenda quam ipsam, voluptatem, amet blanditiis alias. Expedita cupiditate quis qui eveniet labore numquam debitis dolorem!"
          />
          <FeaturesCard
            // icon={faSchool}
            tittle="Parent"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quae aperiam dolor explicabo soluta assumenda quam ipsam, voluptatem, amet blanditiis alias. Expedita cupiditate quis qui eveniet labore numquam debitis dolorem!"
          />
          <FeaturesCard
            // icon={faSchool}
            tittle="Guardian"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, quae aperiam dolor explicabo soluta assumenda quam ipsam, voluptatem, amet blanditiis alias. Expedita cupiditate quis qui eveniet labore numquam debitis dolorem!"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
