import React from "react";

const About = () => {
  return (
    <>
      <div className="eollie_tm_section" id="about">
        <div className="eollie_tm_about">
          <div className="container">
            <div className="about_inner">
              <div className="left">
                <div
                  className="image"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <img src="/img/placeholders/1-1.jpg" alt="Headshot of Oliver Tan" />
                  <div
                    className="main"
                    style={{ backgroundImage: "url(img/about/1.jpg)" }}
                  ></div>
                </div>

                {/* End image */}
              </div>
              {/* End left */}

              <div className="right">
                <div
                  className="eollie_tm_title"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <span>About Me</span>
                  <h3>Leadership, Tech, & Art : An Unconventional Fusion</h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                  With over two decades of experience as a seasoned leader, I have cultivated a successful career committed to innovation and team achievement. Throughout my journey, I have honed my front-end development expertise and been passionate about creating inclusive and user-friendly digital experiences. During my rewarding tenure of 22 years in Gap's e-commerce division, I sharpened my skills. I served as an A11y leader, ensuring accessibility for all and assisting brands excelling in the e-commerce industry. Additionally, I took pride in my role as a people manager, nurturing and promoting individuals within my team to support their professional growth.<br /><br />Away from the professional sphere, I explore the captivating world of videography, and I've had the honor of showcasing my work at the 1997 San Francisco International Asian American Film Festival. I also channel my creativity into creating unique AI-generated digital art pieces. Furthermore, I delight in sharing my Star Wars cosplay adventures on Instagram (@mandoollie). Follow along as I navigate through a galaxy not so far away, one post at a time!
                  </p>
                </div>
                <div
                  className="eollie_tm_button"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <a href="img/resume/Oliver_Tan_resume_2023.pdf" download>
                    Download Résumé
                  </a>
                </div>
              </div>
              {/* End right */}
            </div>
          </div>
          {/* End container */}
        </div>
      </div>
    </>
  );
};

export default About;
