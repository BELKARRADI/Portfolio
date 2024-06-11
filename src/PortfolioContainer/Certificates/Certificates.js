import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Certificates.css";
import javaFx from "../../img/Certificates/javaFx.png";
import SQL from "../../img/Certificates/SQL.png";
import shape from "../../img/Certificates/shape-bg.png";
import wordpress from "../../img/Certificates/wordPress.png";
import aws1 from "../../img/Certificates/AWS1.png";
import aws2 from "../../img/Certificates/AWS2.png";

export default function certificates(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 500,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div>
      <ScreenHeading
        title={"Certificats"}
        subHeading={"Les certificats que j'ai obtenus"}
      />
      <section className="certificates-section" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousel"
              id="certificates-carousel"
              {...options}
            >
              

              <div className="col-lg-12">
                <div className="certi-item">
                  <div className="certi-img">
                    <img src={javaFx} alt=""/>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="certi-item">
                  <div className="certi-img">
                    <img src={SQL} alt=""/>
                  </div>
                </div>
              </div>
             
              <div className="col-lg-12">
                <div className="certi-item">
                  <div className="certi-img">
                    <img src={wordpress} alt=""/>
                  </div>
                </div>
              </div>


              <div className="col-lg-12">
                <div className="certi-item">
                  <div className="certi-img">
                    <img src={aws2} alt=""/>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="certi-item">
                  <div className="certi-img">
                    <img src={aws2} alt=""/>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <div className="footer-image">
        <img src={shape} alt="image not responding" />
      </div>
    </div>
  );
}
