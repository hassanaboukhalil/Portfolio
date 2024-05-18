import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10 xl:w-3/4 xl:m-auto xl:gap-18">
      {technologies.map((technology) => (
        <div className="w-20 h-20 bg-white" key={technology.name}>
          <img
            className="w-full"
            src={technology.icon}
            alt={technology.name + " image"}
          />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
