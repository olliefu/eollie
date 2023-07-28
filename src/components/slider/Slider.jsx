import React from "react";
import { TypeAnimation } from 'react-type-animation';

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
                <div>
                    <TypeAnimation
                      sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'People Manager',
                        2000, // wait 1s before replacing "Mice" with "Hamsters"
                        'Tech Leader',
                        2000,
                        'Digital Creator',
                        2000,
                        'A11y Consultant',
                        2000,
                        'Videographer',
                        2000
                      ]}
                      className="title-text"
                      style={{ color : '#ffffff' }}
                      wrapper="span"
                      speed={180}
                      repeat={Infinity}
                    />
                </div>{" "}
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
