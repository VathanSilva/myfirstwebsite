import meter95 from "../public/meter95.svg";
import meter90 from "../public/meter90.svg";
import meter80 from "../public/meter80.svg";
import meter85 from "../public/meter85.png";
import meter75 from "../public/meter75.png";
import meter70 from "../public/meter70.png";
import meter65 from "../public/meter65.png";
import meter60 from "../public/meter60.png";
import meter55 from "../public/meter55.png";
import meter50 from "../public/meter50.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../public/color-sharp.png";
import React from "react";
import Image from "next/image";

export const Skills = () => {
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

  return (
    <div className="relative">
      <div className="absolute inset-0 ml-32 mr-32 bg-pink-600 bottom-12 rounded-3xl blur"></div>
      <section className="skill" id="skills">
          <div className="container">
              <div className="row">
                  <div className="col-12">
                      <div className="relative skill-bx wow zoomIn">
                        <div className="mb-5">
                          <h2>Language Skills</h2>
                        </div>
                          <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                              <div className="item">
                                  <Image src={meter60} alt="Image" />
                                  <h5>C Language</h5>
                              </div>
                              <div className="item">
                                  <Image src={meter50} alt="Image" />
                                  <h5>Python</h5>
                              </div>
                              <div className="item">
                                  <Image src={meter85} alt="Image" />
                                  <h5>HTML</h5>
                              </div>
                              <div className="item">
                                  <Image src={meter50} alt="Image" />
                                  <h5>R Language</h5>
                              </div>
                              <div className="item">
                                  <Image src={meter55} alt="Image" />
                                  <h5>CSS</h5>
                              </div>
                              <div className="item">
                                  <Image src={meter75} alt="Image" />
                                  <h5>Arduino/Linux</h5>
                              </div>
                              <div className="item">
                                  <Image src={meter65} alt="Image" />
                                  <h5>React/Next</h5>
                              </div>
                              <div className="item">
                                  <Image src={meter50} alt="Image" />
                                  <h5>TailwindCSS</h5>
                              </div>
                          </Carousel>
                      </div>
                  </div>
              </div>
          </div>
          <img className="background-image-left" src={colorSharp} alt="Image" />
      </section>
    </div>
  )
}
