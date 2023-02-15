import ae from "../public/ae.png";
import android from "../public/android.png";
import arduino from "../public/arduino.png";
import blender from "../public/blender.png";
import GitHub from "../public/GitHub.png";
import ill from "../public/ill.png";
import ph from "../public/ph.png";
import pycharm from "../public/pycharm.png";
import vs from "../public/vs.png";
import wsf from "../public/wsf.png";
import rstudio from "../public/rstudio.png"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../public/arrow1.svg";
import arrow2 from "../public/arrow2.svg";
import colorSharp from "../public/color-sharp.png";
import React from "react";
import Image from "next/image";

export const Softwares = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const UnoptimizedImage = (props) => {
    return <Image {...props} unoptimized />
  };

  return (
    <div className="relative">
      <div className="absolute inset-0 ml-32 mr-32 bg-yellow-500 bottom-12 rounded-3xl blur"></div>
      <section className="software" id="softwares">
          <div className="container">
              <div className="row">
                  <div className="col-12">
                      <div className="relative software-bx wow zoomIn">
                        <div className="mb-5">
                          <h2>Software Skills</h2>
                        </div>
                          <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme software-slider">
                              <div className="item1">
                                  <Image src={pycharm} alt="Image" />
                                  <h5>Pycharm</h5>
                              </div>
                              <div className="item1">
                                  <Image src={vs} alt="Image" />
                                  <h5>Visual Studio Code</h5>
                              </div>
                              <div className="item1">
                                  <Image src={rstudio} alt="Image" />
                                  <h5>R Studio</h5>
                              </div>
                              <div className="item1">
                                  <Image src={android} alt="Image" />
                                  <h5>Android Studio</h5>
                              </div>
                              <div className="item1">
                                  <Image src={arduino} alt="Image" />
                                  <h5>Arduino IDE</h5>
                              </div>
                              <div className="item1">
                                  <Image src={GitHub} alt="Image" />
                                  <h5>GitHub</h5>
                              </div>
                              <div className="item1">
                                  <Image src={blender} alt="Image" />
                                  <h5>Blender</h5>
                              </div>
                              <div className="item1">
                                  <Image src={ae} alt="Image" />
                                  <h5>After Effect</h5>
                              </div>
                              <div className="item1">
                                  <Image src={ph} alt="Image" />
                                  <h5>PhotoShop</h5>
                              </div>
                              <div className="item1">
                                  <Image src={ill} alt="Image" />
                                  <h5>Illustrator</h5>
                              </div>
                              <div className="item1">
                                  <Image src={wsf} alt="Image" />
                                  <h5>wondershare filmora</h5>
                              </div>
                          </Carousel>
                      </div>
                  </div>
              </div>
          </div>
          <img className="background-image-left1" src={colorSharp} alt="Image" />
      </section>
    </div>
  )
}
