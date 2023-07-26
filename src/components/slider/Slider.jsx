import React from "react";
import TextLoop from "react-text-loop";

const Slider = () => {
  return (
    <div className="slider">
      <div className="eollie_tm_hero" id="home" data-style="one">
        <div className="background">
          <div
            className="image"
            style={{ backgroundImage: "url(img/slider/4.jpg)" }}
          ></div>
        </div>
        {/* End .background */}

        <div className="container">
          <div className="content">
            <div className="name_wrap">
              <h3>
                <span>Oliver </span> Tan{" "}
                <TextLoop>
                  <span className="loop-text">People Manager</span>
                  <span className="loop-text"> Digital Creator</span>
                  <span className="loop-text"> Tech Leader</span>
                  <span className="loop-text"> A11y Consultant</span>
                  <span className="loop-text"> Videographer</span>
                </TextLoop>{" "}
              </h3>
            </div>
            {/* End title */}

            <div className="job_wrap">
              <span className="job">
                SF Bay Area
              </span>
            </div>
            {/* End designation */}
          </div>
          {/* End content */}
        </div>
        {/* End .container */}
      </div>
    </div>
  );
};

export default Slider;
