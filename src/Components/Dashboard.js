// import React, { useEffect, useState } from "react";
// import { onDash } from "../Api/dashboard";
import Dash from "./Dash";

const DashBoard = () => {
 
  return (
    <div>
      <Dash
        image="sample"
        customer="300"
        money="500"
        place="jeddah"
        handling="two days left"
      />
      <Dash
        image="family_bench"
        customer="200"
        money="400"
        place="damam"
        handling="three days left"
      />
      <Dash
        image="front_face.png"
        customer="500"
        money="200"
        place="jeddah"
        handling="four days left"
      />
      <Dash
        image="front_face.png"
        customer="500"
        money="200"
        place="jeddah"
        handling="four days left"
      />
      <Dash
        image="family_bench"
        customer="500"
        money="200"
        place="jeddah"
        handling="four days left"
      />
    </div>
  );
};

export default DashBoard;
