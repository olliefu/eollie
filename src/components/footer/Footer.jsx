import React from "react";

const Footer = () => {
  return (
    <>
      <div className="eollie_tm_section">
        <div className="eollie_tm_copyright">
          <div className="container">
            <div className="inner">
              <p>
                &copy; {new Date().getFullYear()} eollie.com by{" "}
                Oliver J. Tan - All rights reserved.
              </p>
            </div>
            {/* End inner */}
          </div>
        </div>
        {/* End eollie_tm_copyright */}
      </div>
    </>
  );
};

export default Footer;
