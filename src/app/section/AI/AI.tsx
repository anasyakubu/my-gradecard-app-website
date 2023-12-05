import React from "react";
import IMG from "../../../../public/newsletter.jpg";
import Image from "next/image";

const AI = () => {
  return (
    <div className="AI bg-white text-gray-900">
      <div className="p-5">
        <div className="text-center">
          <h3
            className="text-2xl font-extrabold tracking-wide shadow-2 sm:text-4xl"
            style={{ color: "#122231" }}
          >
            AI Empowers Creativity
          </h3>
        </div>
        <div className="mt-10 space-y-2 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
          <div
            className="p-5 bg-gray-900 text-white rounded-xl"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "3%",
              // height: "100vh",
            }}
          >
            <div className="">
              <h3 className="text-xl font-semibold">AI Performance Software</h3>
              <p className="mt-4 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                cumque officiis eligendi! Nisi cum, deserunt numquam ad rem quam
                molestiae.
              </p>
              <button
                className="text-white mt-5 text-sm p-2 m-1 rounded-sm"
                style={{ backgroundColor: "#1D4ED8" }}
              >
                Join us today
              </button>
            </div>
          </div>
          <div>
            <Image className="rounded-xl mt-3" src={IMG} alt="IMG" />
          </div>
          <div>
            <Image className="rounded-xl mt-3" src={IMG} alt="IMG" />
          </div>
          <div
            className="p-5 bg-gray-900 text-white rounded-xl"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "3%",
              // height: "100vh",
            }}
          >
            <div className="">
              <h3 className="text-xl font-semibold">AI Performance Software</h3>
              <p className="mt-4 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
                cumque officiis eligendi! Nisi cum, deserunt numquam ad rem quam
                molestiae.
              </p>
              <button
                className="text-white mt-5 text-sm p-2 m-1 rounded-sm"
                style={{ backgroundColor: "#1D4ED8" }}
              >
                Join us today
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AI;
