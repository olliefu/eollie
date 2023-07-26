import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Testimonial() {
  var settings = {
    dots: false,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 15000,
  };
  return (
    <ul>
      <Slider {...settings}>
        <li className="item">
          <div className="texts">
            <p>
            "One of Ollie's greatest strengths was his exceptional project management skills. As an overseer of various projects across markets, he excelled in keeping teams organized and focused on meeting deadlines. His effective communication and collaboration skills facilitated seamless coordination among cross-functional teams, resulting in successful project deliveries time and time again. Ollie's ability to balance the needs of stakeholders, while ensuring the team's creative vision remained intact, was truly commendable."
            </p>
            <div className="author">
              <div className="image">
                <div
                  alt="Melody Ichikawa"
                  className="main"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL + "img/testimonials/1.jpg"
                    })`,
                  }}
                ></div>
              </div>
              <div className="short">
                <h3 className="author">
                  <span>Melody Ichikawa</span>
                </h3>
                <h3 className="job">
                  <span>Sr. Director, BR Digital</span>
                </h3>
              </div>
            </div>
          </div>
        </li>
        {/* End single slide item */}
        
        <li className="item">
          <div className="texts">
            <p>
            "Ollie and I worked together at Gap and we partnered on various projects for new business tools and processes. He was a great partner to the business teams and helped me understand what his team was able to help us with and what their limitations were. He and his team would always take the time to understand our tool needs and help us create a plan forward. He not only has a wealth of knowledge, but shares and teaches those around him. He's a great leader and manager who cares about those on his team and their success, whatever that means to them. Ollie is a great addition to any team!"
            </p>
            <div className="author">
              <div className="image">
                <div
                  alt="Heather Haas"
                  className="main"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL + "img/testimonials/2.jpg"
                    })`,
                  }}
                ></div>
              </div>
              <div className="short">
                <h3 className="author">
                  <span>Heather Haas</span>
                </h3>
                <h3 className="job">
                  <span>Sr. Principal, Nike Direct</span>
                </h3>
              </div>
            </div>
          </div>
        </li>
        {/* End single slide item */}

        <li className="item">
          <div className="texts">
            <p>
            "The most important thing to know about Ollie, is that Ollie cares. He cares about his company, he cares about the customers, and he cares about his team. But what makes him exceptional is how he inspires that same sense of caring in those around him, strengthening them to push their boundaries and find ways that they can give more.When it comes to those who he manages, Ollie inspires confidence, comradery and curiosity. He encourages each of us to go beyond simply completing tasks and meeting deadlines. Instead he finds out what drives us and he encourages us to give more to the company in a way that feeds our internal passions and caters to our interests as individuals."
            </p>
            <div className="author">
              <div className="image">
                <div
                  alt="Azzi Haq"
                  className="main"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL + "img/testimonials/3.jpg"
                    })`,
                  }}
                ></div>
              </div>
              <div className="short">
                <h3 className="author">
                  <span>Azzi Haq</span>
                </h3>
                <h3 className="job">
                  <span>Sr. Front End Developer, Gap Inc.</span>
                </h3>
              </div>
            </div>
          </div>
        </li>
        {/* End single slide item */}

        <li className="item">
          <div className="texts">
            <p>
            "I guess I can start by saying that he's among the best people managers I've ever worked with. He instills so much pure love, loyalty, and passion in his team members and it shows in what they deliver. He's been nothing but dedicated to the mission of the company, the brands he's represented, and most importantly, to the people who report to him...He's savvy, dedicated, and is always - always - there to support if you need help."
            </p> 
            <div className="author">
              <div className="image">
                <div
                  alt="Rob Sable"
                  className="main"
                  style={{
                    backgroundImage: `url(${
                      process.env.PUBLIC_URL + "img/testimonials/4.jpg"
                    })`,
                  }}
                ></div>
              </div>
              <div className="short">
                <h3 className="author">
                  <span>Rob Sable</span>
                </h3>
                <h3 className="job">
                  <span>Sr. Mgr, Front End Development: Gap</span>
                </h3>
              </div>
            </div>
          </div>
        </li>
        {/* End single slide item */}

      </Slider>
    </ul>
  );
}
