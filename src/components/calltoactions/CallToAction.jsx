import React from "react";

const CallToAction = () => {
  return (
    <div className="eollie_tm_section" id="contact">
      <div
        className="eollie_tm_connect bg_image_props"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "img/callto-action/1.jpg"
          })`,
        }}
      >
        <div className="talk_inner">
          <div className="text" data-aos="fade-up" data-aos-duration="1200">
            <h3>Create. Connect. Collaborate.</h3>
          </div>

          <div
            className="button"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <button className="white-fill-bg" onClick={() => window.open('mailto:ollietan@gmail.com', '_blank')}>
            E-mail me at ollietan@gmail.com
            </button>
            <br /><br />        
            <button className="white-fill-bg" onClick={() => window.open('https://www.linkedin.com/in/olliefu/', '_blank')}>
            <img src="img/callto-action/logo_linkedin.png" alt="linkedin logo" /> Message me on LinkedIn 
            </button>
            <br /><br />   
            <a href="https://github.com/olliefu/eollie" target="_blank" rel="noopener noreferrer"><img src="img/callto-action/logo_github.svg" alt="github logo" style={{ width: '40px' }} /></a>
          </div>
        </div>
        {/* End talk_inner */}
      </div>

    </div>
  );
};

export default CallToAction;
