import React from "react";
import Header from "../../components/header/Header";
import Slider from "../../components/slider/Slider";
import About from "../../components/about/About";
import Portfolio from "../../components/portfolio/Portfolio";
import Video from "../../components/video/Video";
import Brand from "../../components/BrandAnimation";
import Testimonial from "../../components/testimonial/Testimonial";
import Strengths from "../../components/strengths/Strengths";
import CallToAction from "../../components/calltoactions/CallToAction";
import Footer from "../../components/footer/Footer";

const MainPage = () => {
  return (
    <div className="home-four">
      <Header />
      {/* End Header Section */}

      <Slider />
      {/* End Slider Section */}

      <About />
      {/* End About Section */}

      <div className="eollie_tm_section">
        <div className="eollie_tm_partners">
          <div className="container">
            <div className="partners_inner">
              <Brand />
            </div>
          </div>
        </div>
      </div>
      {/* End eollie_tm_partners */}

      <Strengths />
      {/* End Strengths Section */}

      <Portfolio />
      {/* End Portfolio Section */}

      <Video />
      {/* End Video Section */}

      <div className="eollie_tm_section">
        <div className="eollie_tm_testimonials" id="testimonials">
          <div className="container">
            <div className="testimonials_inner">
              <div
                className="left"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <div className="eollie_tm_title">
                  <span>Testimonials</span>
                  <h3>Partner Perspectives: My Impact</h3>
                </div>
              </div>

              <div
                className="right"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <Testimonial />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End  eollie_tm_testimonials*/}

      <CallToAction />
      {/* End CallToAction */}

      <Footer />
      {/* End Footer Section */}
    </div>
  );
};

export default MainPage;
