import React from "react";
import Lottie from "lottie-react";
import arrowWhiteAnimation from "./arrow-white.json";
import arrowPrimaryAnimation from "./arrow-primary.json";

const LottieArrow = ({ animationData }) => {
  return (
    <div
      style={{ width: 30, height: 30, alignContent: "center", marginRight: 10 }}
    >
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
};

export default LottieArrow;
