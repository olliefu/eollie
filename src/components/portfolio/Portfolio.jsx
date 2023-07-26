import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Gallery, Item } from "react-photoswipe-gallery";

const tabList = ["All", "Code", "Design", "Video"];

const tabListContent = [
  {
    porftoliItems: [
      {
        img: "/img/portfolio/1.jpg",
        title: " eollie.com: React.js + GitHub",
        meta: "Code",
        portfolioLink: "https://github.com/olliefu/eollie",
      },
      {
        img: "/img/portfolio/2.jpg",
        title: "@mandoollie: Card & Sticker",
        meta: "Design",
        portfolioLink:
          "https://www.instagram.com/mandoollie/",
      },
      {
        img: "/img/portfolio/3.jpg",
        title: "Giant Dreams of Olliefu",
        meta: "Video",
        portfolioLink:
          "https://youtube.com/playlist?list=PLrPPxWZhDYIhoBQjIW-hXOtzsaiMoOgrr",
      },
      {
        img: "/img/portfolio/4.jpg",
        title: "Gap Inc. - HTML/CSS/JavaScript",
        meta: "Code",
        portfolioLink: "http://bananarepublic.com",
      },
      {
        img: "/img/portfolio/5.jpg",
        title: "Olliefu Shirts - T-Shirt Design",
        meta: "Design",
        portfolioLink:
          "https://www.redbubble.com/people/olliefu/shop",
      },
      {
        img: "/img/portfolio/6.jpg",
        title: "@mandoollie: Instagram Reels",
        meta: "Video",
        portfolioLink: "https://www.instagram.com/reel/CgsLDUcM7pQ/",
      },
      {
        img: "/img/portfolio/7.jpg",
        title: "AT&T Park: HTML 5 (Desktop Only)",
        meta: "Code",
        portfolioLink:
          "http://kuya.com/att/att.html",
      },
      {
        img: "/img/portfolio/8.jpg",
        title: "Bay Bridge: MidJourney (AI)",
        meta: "Design",
        portfolioLink:
          "http://bit.ly/44CxZnb",
      },
      {
        img: "/img/portfolio/9.jpg",
        title: "Wedding - Natalia + Marek (PL)",
        meta: "Video",
        portfolioLink:
          "https://www.youtube.com/watch?v=8Je-Br58w4Q",
      },
    ],
  },
  {
    porftoliItems: [
      {
        img: "/img/portfolio/1.jpg",
        title: " eollie.com: React.js + GitHub",
        meta: "Code",
        portfolioLink: "https://github.com/olliefu/eollie",
      },
      {
        img: "/img/portfolio/4.jpg",
        title: "Gap Inc. - HTML/CSS/JavaScript",
        meta: "Code",
        portfolioLink: "http://bananarepublic.com",
      },
      {
        img: "/img/portfolio/7.jpg",
        title: "AT&T Park: HTML 5 (Desktop Only)",
        meta: "Code",
        portfolioLink:
          "http://kuya.com/att/att.html",
      },
    ],
  },
  {
    porftoliItems: [
      {
        img: "/img/portfolio/2.jpg",
        title: "@mandoollie: Card & Sticker",
        meta: "Design",
        portfolioLink:
          "https://www.instagram.com/mandoollie/",
      },
      {
        img: "/img/portfolio/5.jpg",
        title: "Olliefu Shirts - T-Shirt Design",
        meta: "Design",
        portfolioLink:
          "https://www.redbubble.com/people/olliefu/shop",
      },
      {
        img: "/img/portfolio/8.jpg",
        title: "Bay Bridge: MidJourney (AI)",
        meta: "Design",
        portfolioLink:
          "http://bit.ly/44CxZnb",
      },
    ],
  },
  {
    porftoliItems: [
      {
        img: "/img/portfolio/3.jpg",
        title: "Giant Dreams of Olliefu",
        meta: "Video",
        portfolioLink:
          "https://youtube.com/playlist?list=PLrPPxWZhDYIhoBQjIW-hXOtzsaiMoOgrr",
      },
      {
        img: "/img/portfolio/6.jpg",
        title: "@mandoollie: Instagram Reels",
        meta: "Video",
        portfolioLink: "https://www.instagram.com/reel/CgsLDUcM7pQ/",
      },
      {
        img: "/img/portfolio/9.jpg",
        title: "Wedding - Natalia + Marek (PL)",
        meta: "Video",
        portfolioLink:
          "https://www.youtube.com/watch?v=8Je-Br58w4Q",
      },
    ],
  },
];

const Portfolio = () => {
  return (
    <div className="eollie_tm_section" id="portfolio">
      <div className="eollie_tm_portfolio">
        <div className="container">
          <div className="positon-relative">
            <div className="eollie_tm_title">
              <div className="title_flex">
                <div className="left">
                  <span>Portfolio</span>
                  <h3>Code and Creativity Showcase</h3>
                </div>
              </div>
            </div>
            {/* End eollie_tm_title */}

            <div className="portfolio_filter">
              <Tabs>
                <TabList>
                  {tabList.map((val, i) => (
                    <Tab key={i}>{val}</Tab>
                  ))}
                </TabList>
                {/* End tablist */}

                <div className="portfolio_list has-effect">
                  <Gallery>
                    {tabListContent.map((tabContent, i) => (
                      <TabPanel key={i}>
                        <ul className="gallery_zoom">
                          {tabContent.porftoliItems.map((val, i) => (
                            <li
                              key={i}
                              data-aos="fade-right"
                              data-aos-duration="1200"
                              data-aos-delay={val.delayAnimation}
                            >
                              <div className="inner">
                                <div className="entry eollie_tm_portfolio_animation_wrap">
                                  <Item
                                    original={val.img}
                                    thumbnail={val.img}
                                    width={1000}
                                    height={1000}
                                  >
                                    {({ ref, open }) => (
                                      <img
                                        src={val.img}
                                        alt="portfolio"
                                        role="button"
                                        ref={ref}
                                        onClick={open}
                                      />
                                    )}
                                  </Item>
                                </div>
                                <div className="mobile_title">
                                  <h3>
                                    <a
                                      href={val.portfolioLink}
                                      rel="noopener noreferrer"
                                      target="_blank"
                                    >
                                      {val.title}
                                    </a>
                                  </h3>
                                  <span>{val.meta}</span>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </TabPanel>
                    ))}
                  </Gallery>
                  {/* End tabpanel */}
                </div>
                {/* End list wrapper */}
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
