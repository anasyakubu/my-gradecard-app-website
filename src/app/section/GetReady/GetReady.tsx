import React from "react";
import "./GetReady.scss";

const GetReady = () => {
  return (
    <div
      className="GetReady"
      style={{ backgroundColor: "#f2f7f8", color: "#3d4f60" }}
    >
      <div className="p-20">
        <div className="Container phoneImg bg-gray-900 text-white p-20 rounded-2xl shadow-lg">
          <h3
            className="text-2xl font-extrabold tracking-wide shadow-2 sm:text-4xl"
            style={{ color: "#fff" }}
          >
            Ready to get Started?
          </h3>
          <p className="mt-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut a
            similique sequi, vitae incidunt quo maxime commodi officia
            laudantium enim quibusdam consectetur repellat totam natus nemo,
            recusandae ipsam illo. Officiis.
          </p>
          <div className="mt-10">
            <button className="m-5 bg-white text-gray-900 text-lg font-semibold p-5 rounded-md">
              Get Started
            </button>
            <button className="m-5 text-lg font-semibold underline">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetReady;
