import React from "react";

const SocialShare = [
  {
    iconName: "instagram",
    link: "https://www.instagram.com/mandoollie/",
  },
  {
    iconName: "linkedin",
    link: "https://www.linkedin.com/in/olliefu/",
  },
];
const Social = () => {
  return (
    <>
      <ul className="social social-default position-relative">
        {SocialShare.map((val, i) => (
          <li key={i}>
            <a href={`${val.link}`} target="_blank" rel="noreferrer">
              <img
                className="svg"
                src={`/img/svg/social/${val.iconName}.svg`}
                alt={`${val.iconName} logos`}
              ></img>
            </a>
          </li>
        ))}
      </ul>
      {/* END social */}
    </>
  );
};

export default Social;
