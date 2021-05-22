import React from "react";
import Header from "../Header/Header";
import background from "../../assets/images/mesh-gradient2.png";

function LandingSection() {
  return (
    <>
      <div
        className="landing-section-wrapper"
        style={{ backgroundImage: `url(${background})` }}
      >
        <Header></Header>
        <div className="landing-section-main">
          <h1 id="landing-title">Ben Hurworth</h1>
          <h3 id="landing-description">
            CS student with a passion for Web and Mobile development
          </h3>
        </div>
        <div class="custom-shape-divider-bottom-1621620445">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
}

export default LandingSection;
