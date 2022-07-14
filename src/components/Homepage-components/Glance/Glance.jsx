import { useState } from "react";
import GlanceBox from "./Glance-box";

const Glance = (props) => {
  return (
    <div className="glance">
      <h1 className="glance__text">At a Glance</h1>
      {/* <div className="glance__current">
        <h2 className="glance__current--subheading">Current Class:</h2>
        <h3 className="glance__current--class">
          {currentClass}
          Introduction to CS50x
        </h3>
        <i class="bx bx-laptop"></i>
      </div>
      <div className="glance__next">
        <h2 className="glance__next--subheading">Next Class:</h2>
        <h3 className="glance_next--class">
          {nextClass}
          Aviation 101
        </h3>
        <i class='bx bxs-plane-alt'></i>
      </div> */}
      <div className="glance__container">
        <GlanceBox />
      </div>
    </div>
  );
};

export default Glance;
