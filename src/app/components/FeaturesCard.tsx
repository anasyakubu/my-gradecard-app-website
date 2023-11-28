import React from "react";
import { FaSchool } from "react-icons/fa6";

interface featuresCardProps {
  tittle: string;
  text: string;
}

const FeaturesCard = (props: featuresCardProps) => {
  const { tittle, text } = props;
  return (
    <div className="FeaturesCard">
      <div
        className="m-1 p-3 text-center rounded-md bg-blue-600 text-white shadow-lg"
        // style={{ backgroundColor: "#f2f7f8", color: "#3d4f60" }}
      >
        <div className="icon p-8 text-center">
          <FaSchool className="text-4xl" />
        </div>
        <div className="text">
          <h6 className="p-3 text-xl font-semibold">{tittle}</h6>
          <p className="p-2 pb-5">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturesCard;
