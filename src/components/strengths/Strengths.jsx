import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const NewsTwo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }

  return (
    <div className="eollie_tm_section" id="strengths">
      <div className="eollie_tm_strengths">
        <div className="container">
          <div className="eollie_tm_title">
            <span>Strengths</span>
            <h3>Empowering Success: My Professional Strengths</h3>
          </div>
          {/* End eollie_tm_title */}
          <div className="news_list">
            <ul>
              <li data-aos="fade-right" data-aos-duration="1200">
                <div className="list_inner">
                  <div className="image" onClick={toggleModalOne}>
                    <img src="/img/placeholders/4-3.jpg" alt="Title: People Manager" />
                    <div
                      className="main"
                      style={{
                        backgroundImage: `url(${
                          process.env.PUBLIC_URL + "img/strengths/1.jpg"
                        })`,
                      }}
                    ></div>
                  </div>
                  {/* End image */}

                  <div className="details">
                    <h3 className="title" onClick={toggleModalOne}>
                    My Leadership Philosophy
                    </h3>
                  </div>
                  {/* End details */}

                  {/* START MODAL */}
                  <Modal
                    isOpen={isOpen}
                    onRequestClose={toggleModalOne}
                    contentLabel="My dialog"
                    className="custom-modal"
                    overlayClassName="custom-overlay"
                    closeTimeoutMS={500}
                  >
                    <div className="eollie_tm_modalbox_strengths">
                      <button className="close-modal" onClick={toggleModalOne}>
                        <img src="/img/svg/cancel.svg" alt="close icon" />
                      </button>
                      {/* End close icon */}
                      <div className="box_inner">
                        <div className="description_wrap scrollable">
                          <div className="image">
                            <img src="/img/placeholders/4-3.jpg" alt="Title: People Manager" />
                            <div
                              className="main"
                              style={{
                                backgroundImage: `url(${
                                  process.env.PUBLIC_URL + "img/strengths/1.jpg"
                                })`,
                              }}
                            ></div>
                          </div>
                          {/* End image */}
                          <div className="details">
                            <h3 className="title">
                              My Leadership Philosophy
                            </h3>
                          </div>
                          {/* End details */}
                          <div className="description">
                            <p>
                            At Gap Inc., my role as a seasoned leader has highlighted the importance of empathy and care, as crucial to our success as the fit of our jeans. This people-first mindset connects with our customers and weaves through our team, stitching us together like the fibers of a cozy sweater.
                            </p>
                            <p>
                            Engaging with various stakeholders often feels like steering a ship through choppy waters. Yet, thanks to effective communication, a well-defined vision, and a balanced approach, we consistently navigate these challenges and exceed our collective expectations. Achieving a shared goal amidst diverse interests requires attention to detail, persistence, and a commitment to quality.
                            </p>
                            <p>    
                            As I look forward to fresh challenges, I leverage my leadership expertise with a consistent focus on strategic decision-making, problem-solving, and nurturing a culture of growth. My goal? To achieve our business objectives and cultivate an inclusive, innovative work environment that is responsive and resilient in the face of industry shifts.
                            </p>
                          </div>
                          {/* End description */}
                        </div>
                      </div>
                      {/* End box inner */}
                    </div>
                    {/* End modal box People Manager */}
                  </Modal>
                  {/* End modal */}
                </div>
              </li>
              {/* End People Manager*/}

              <li
                data-aos="fade-right"
                data-aos-duration="1200"
                data-aos-delay="150"
              >
                <div className="list_inner">
                  <div className="image" onClick={toggleModalTwo}>
                    <img src="/img/placeholders/4-3.jpg" alt="Title: Accessibility" />
                    <div
                      className="main"
                      style={{
                        backgroundImage: `url(${
                          process.env.PUBLIC_URL + "img/strengths/2.jpg"
                        })`,
                      }}
                    ></div>
                  </div>
                  {/* End image */}

                  <div className="details">
                    <h3 className="title" onClick={toggleModalTwo}>
                      Championing Web Accessibility
                    </h3>
                  </div>
                  {/* End details */}

                  <Modal
                    isOpen={isOpen2}
                    onRequestClose={toggleModalTwo}
                    contentLabel="My dialog"
                    className="custom-modal"
                    overlayClassName="custom-overlay"
                    closeTimeoutMS={500}
                  >
                    <div className="eollie_tm_modalbox_strengths">
                      <button className="close-modal" onClick={toggleModalTwo}>
                        <img src="/img/svg/cancel.svg" alt="close icon" />
                      </button>
                      {/* End close modal */}
                      <div className="box_inner">
                        <div className="description_wrap scrollable">
                          <div className="image">
                            <img src="/img/placeholders/4-3.jpg" alt="Title: Accessibility" />
                            <div
                              className="main"
                              style={{
                                backgroundImage: `url(${
                                  process.env.PUBLIC_URL + "img/strengths/2.jpg"
                                })`,
                              }}
                            ></div>
                          </div>
                          {/* End image */}
                          <div className="details">
                            <h3 className="title">
                              Championing Web Accessibility
                            </h3>
                          </div>
                          {/* End details */}
                          <div className="description">
                            <p>
                            My passion for accessibility was sparked in 2010 when I realized its transformative role in digital experiences. I remember talking about adding alt tags in code, a small but impactful change that paves the way for greater accessibility. In 2016, I centered my career around this passion, becoming a dedicated Accessibility Supporter and Advisor.
                            </p>
                            <p>
                            In my role, I saw the necessity for a structured approach to accessibility. I established Ra11y, a team committed to promoting accessibility awareness and education within Gap Inc. We have worked cross-functionally with various departments as a team, integrating accessibility considerations into our development process. This holistic approach ensured compliance and a heightened understanding of our customers' needs.
                            </p>
                            <div>
                              <img src="/img/strengths/a11y.png" alt="Acccessbility with Ollie" style={{float: 'right' , margin: '0px 0px 0px 10px' }} />
                            </div>
                            <p>
                            A significant part of my role is fostering a culture of inclusion and diversity. I've steadfastly advocated for accessibility, providing employees with the tools and knowledge to create accessible experiences. Through workshops and continuous education, we've instilled the principles of accessibility across our teams, further cementing our commitment to inclusion.
                            </p>
                            <p>
                            My strength lies in rallying people for a common cause, which, in this case, is accessibility - a cause close to my heart. This commitment extends beyond meeting standards; it's about sparking meaningful conversations, effecting real change, and enhancing our brand's inclusivity. With a focus on detail, patience, and advocacy, my work in accessibility at Gap Inc. is a testament to my professional accomplishments and personal strengths.                            
                            </p>    
                          </div>
                          {/* End description */}
                        </div>
                      </div>
                    </div>
                  </Modal>
                  {/* End Accessibility modal */}
                </div>
                {/* End list inner */}
              </li>
              {/* End Accessibility*/}

              <li
                data-aos="fade-right"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <div className="list_inner">
                  <div className="image" onClick={toggleModalThree}>
                    <img src="/img/placeholders/4-3.jpg" alt="thumb" />
                    <div
                      className="main"
                      style={{
                        backgroundImage: `url(${
                          process.env.PUBLIC_URL + "img/strengths/3.jpg"
                        })`,
                      }}
                    ></div>
                  </div>
                  {/* END IMAGE */}

                  <div className="details">
                    <h3 className="title" onClick={toggleModalThree}>
                      Developer to Manager
                    </h3>
                  </div>
                  {/* END DETAILS */}

                  {/* START MODAL */}
                  <Modal
                    isOpen={isOpen3}
                    onRequestClose={toggleModalThree}
                    contentLabel="My dialog"
                    className="custom-modal"
                    overlayClassName="custom-overlay"
                    closeTimeoutMS={500}
                  >
                    <div className="eollie_tm_modalbox_strengths">
                      <button
                        className="close-modal"
                        onClick={toggleModalThree}
                      >
                        <img src="/img/svg/cancel.svg" alt="close icon" />
                      </button>
                      {/* END CLOSE MODAL */}
                      <div className="box_inner">
                        <div className="description_wrap scrollable">
                          <div className="image">
                            <img src="/img/placeholders/4-3.jpg" alt="Title: E-Commerce" />
                            <div
                              className="main"
                              style={{
                                backgroundImage: `url(${
                                  process.env.PUBLIC_URL + "img/strengths/3.jpg"
                                })`,
                              }}
                            ></div>
                          </div>
                          {/* END IMAGE */}
                          <div className="details">
                            <h3 className="title">
                              Developer to Manager
                            </h3>
                          </div>
                          {/* END DETAILS */}
                          <div className="description">
                            <p>
                            With over 20+ years of experience in e-commerce, I have embraced a journey filled with exciting milestones, and I feel thrilled to contribute to Gap Inc.'s e-commerce success story actively. It all began at Alldomains.com and Eve.com, where I laid the foundation, learning the ins and outs of web development and witnessing the transformative power of online businesses.
                            </p>
                            <p>
                            Front End Development role for Banana Republic Global Online at Gap Inc. has been a fulfilling adventure. From the early days of mastering HTML, CSS, and JavaScript to embracing cutting-edge technologies like React.js, I have been committed to driving innovation and elevating the online shopping experience for our valued customers.
                            </p>
                            <p>
                            Supporting the expansion of Gap's digital footprint to international sites in the EU/UK and Japan was an invigorating challenge. Tailoring our web experiences to diverse markets and collaborating with cross-functional teams have ensured seamless global operations.
                            </p>
                            <p>
                            The journey has been marked by remarkable achievements, such as embedding video for the first time, embracing responsive web design, and supporting numerous brands during our busiest peak seasons. Additionally, I led the implementation of animations on the site, introduced personalized experiences, and conducted successful A/B tests to optimize user engagement. I take pride in leading my team through these demanding periods, fostering a supportive environment that brings out the best in our front-end developers. Together, we have achieved outstanding results and laid the foundation for continued growth and success in the ever-evolving e-commerce landscape.
                            </p>
                            <p>    
                            As I look forward to the future, I am excited to continue contributing my expertise and passion to the e-commerce industry. Together, we will keep pushing boundaries, embracing emerging technologies, and delivering exceptional digital experiences that resonate with customers across the globe. Here's to more milestones and successes on this incredible journey!
                            </p>
                          </div>
                          {/* END DESCRIPTION */}
                        </div>
                      </div>
                    </div>
                  </Modal>
                </div>
                {/* END E-Commerce modal */}
              </li>

              {/* End E-Commerce */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsTwo;
