import React from "react";
import Header from "../../Header/Header";
import man from '../../../assets/images/man2.png'
import Projects from './projects/projects';
import background from '../../../assets/images/ppbackgroundnew1.png'
import Div100vh from 'react-div-100vh'

function LandingSection() {
  return (
    <div className="landing-page-wrapper">
      <Div100vh
        className="landing-section-wrapper"
        style={{ backgroundImage: `url(${background})` }}
      >
        <Header></Header>
        <div className="landing-section-main">
          <h1 id="landing-title">
            Ben <br />
            Hurworth
          </h1>
          <h3 id="landing-description">
            CS student with a passion for Web and Mobile development
          </h3>

          <img src={man} className="landing-person"></img>
          <div className="button">
            <h5>Let's talk!</h5>
          </div>
        </div>
        <div class="custom-shape-divider-bottom-1621703551">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </Div100vh>

      <Projects></Projects>
    </div>
  );
}

export default LandingSection;
