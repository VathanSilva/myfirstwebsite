import colorSharp from "../public/color-sharp.png";
import React from "react";
import Image from "next/image";
import logo1 from "../public/logo1.png";
import logo2 from "../public/logo2.jpg";
import logo3 from "../public/logo3.jpg";
import logo4 from "../public/logo4.jpg";
import logo5 from "../public/logo5.jpg";
import logo6 from "../public/logo6.jpg";
import logo7 from "../public/logo7.jpg";
import logo8 from "../public/logo8.jpg";
import logo9 from "../public/logo9.jpg";
import logo10 from "../public/logo10.jpg";
import logo11 from "../public/logo11.jpg";
import de1 from "../public/de1.jpg";
import de2 from "../public/de2.jpg";
import de3 from "../public/de3.jpg";
import de4 from "../public/de4.jpg";
import de5 from "../public/de5.jpg";
import de6 from "../public/de6.jpg";
import de7 from "../public/de7.jpg";
import de8 from "../public/de8.jpg";
import de9 from "../public/de9.jpg";
import de10 from "../public/de10.jpg";
import de11 from "../public/de11.jpg";
import de12 from "../public/de12.jpg";
import de13 from "../public/de13.jpg";
import de14 from "../public/de14.jpg";
import de15 from "../public/de15.jpg";
import de16 from "../public/de16.jpg";
import de17 from "../public/de17.jpg";
import de18 from "../public/de18.jpg";
import de19 from "../public/de19.jpg";
import de20 from "../public/de20.jpg";
import de21 from "../public/de21.jpg";
import de22 from "../public/de22.jpg";


export const Designs = () => {
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
    <><><div className="relative">
      <div className="absolute inset-0 mt-5 ml-32 mr-32 bg-pink-600 bottom-12 rounded-3xl blur"></div>
      <section className="skill" id="skills">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="relative skill-bx wow zoomIn mt-5">
                <div class="iot" className="mb-5">
                  LOGO DESIGNS
                </div>

                <div>
                  <ul className="items-center mt-3 justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                    <li>
                      <Image src={logo1}  width={400} height={400}/>
                    </li>
                    <li>
                      <Image src={logo2} width={400} height={400}/>
                    </li>
                    <li>
                      <Image src={logo3} width={400} height={400}/>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="items-center mt-3 justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                    <li>
                      <Image src={logo4} width={400} height={400}/>
                    </li>
                    <li>
                      <Image src={logo5} width={400} height={400}/>
                    </li>
                    <li>
                      <Image src={logo6} width={400} height={400}/>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="items-center mt-3 justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                    <li>
                      <Image src={logo7} width={400} height={400}/>
                    </li>
                    <li>
                      <Image src={logo8} width={400} height={400}/>
                    </li>
                    <li>
                      <Image src={logo9} width={400} height={400}/>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="items-center mt-3 justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                    <li>
                      <Image src={logo10} width={400} height={400}/>
                    </li>
                    <li>
                      <Image src={logo11} width={400} height={400}/>
                    </li>
                  </ul>
                </div>
                
                
              </div>
            </div>
          </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
      </section>
    </div>

      <div className="relative">
        <div className="absolute inset-0 mt-5 ml-32 mr-32 bg-pink-600 bottom-12 rounded-3xl blur"></div>
        <section className="skill" id="skills">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="relative skill-bx wow zoomIn mt-5">
                  <div class="iot" className="mb-5">
                    POST DESIGNS
                  </div>
      
                  <div>
                  <ul className="items-center mt-3 justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                    <li>
                      <Image src={de1}  width={500} height={500}/>
                    </li>
                    <li>
                      <Image src={de2} width={500} height={500}/>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="items-center mt-3 justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                    <li>
                      <Image src={de3}  width={500} height={500}/>
                    </li>
                    <li>
                      <Image src={de4} width={500} height={500}/>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="items-center mt-3 justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                    <li>
                      <Image src={de5}  width={500} height={500}/>
                    </li>
                    <li>
                      <Image src={de6} width={500} height={500}/>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="items-center mt-3 justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                    <li>
                      <Image src={de7}  width={500} height={500}/>
                    </li>
                    <li>
                      <Image src={de8} width={500} height={500}/>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="items-center mt-3 justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                    <li>
                      <Image src={de9}  width={500} height={500}/>
                    </li>
                    <li>
                      <Image src={de10} width={500} height={500}/>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="items-center mt-3 justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                    <li>
                      <Image src={de11}  width={500} height={500}/>
                    </li>
                    <li>
                      <Image src={de12} width={500} height={500}/>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="items-center mt-3 justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                    <li>
                      <Image src={de13}  width={500} height={500}/>
                    </li>
                    <li>
                      <Image src={de14} width={500} height={500}/>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="items-center mt-3 justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                    <li>
                      <Image src={de15}  width={500} height={500}/>
                    </li>
                    <li>
                      <Image src={de16} width={500} height={500}/>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="items-center mt-3 justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                    <li>
                      <Image src={de17}  width={500} height={500}/>
                    </li>
                    <li>
                      <Image src={de18} width={500} height={500}/>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="items-center mt-3 justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                    <li>
                      <Image src={de19}  width={500} height={500}/>
                    </li>
                    <li>
                      <Image src={de20} width={500} height={500}/>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="items-center mt-3 justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                    <li>
                      <Image src={de21}  width={500} height={500}/>
                    </li>
                    <li>
                      <Image src={de22} width={500} height={500}/>
                    </li>
                  </ul>
                </div>

                </div>
              </div>
            </div>
          </div>
          <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
      </div></>
      
      <div className="relative">
        <div className="absolute inset-0 mt-5 ml-32 mr-32 bg-pink-600 bottom-12 rounded-3xl blur"></div>
        <section className="skill" id="skills">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="relative skill-bx wow zoomIn mt-5">
                  <div class="iot" className="mb-5">
                    VIDEO EDITING
                  </div>
                  
                  <p className='text-md m-auto mx-5 leading-8 text-white mt-4'>Youtube Intro video using After Effect Software.</p>
                  <div className="ratio ratio-16x9 mt-4">
                    <iframe src="https://youtube.com/embed/Uzy6h7R420w" title="YouTube video" allowfullscreen></iframe>
                  </div>
                  
                  <p className='text-md m-auto mx-5 leading-8 text-white pt-10 mt-4'>Tamil Students' Committee - USJ AAROHANA Finalist video using After Effect Software.</p>
                  <div className="ratio ratio-16x9 mt-4">
                    <iframe src="https://youtube.com/embed/xtT4jrgpeVo" title="YouTube video" allowfullscreen></iframe>
                  </div>

                  <p className='text-md m-auto mx-5 leading-8 text-white pt-10 mt-4'>Tamil Students' Committee - USJ Cricket match suspend video using After Effect Software.</p>
                  <div className="ratio ratio-16x9 mt-4">
                    <iframe src="https://youtube.com/embed/O3xIxAAruh0" title="YouTube video" allowfullscreen></iframe>
                  </div>

                  <p className='text-md m-auto mx-5 leading-8 text-white pt-10 mt-4'>Tamil Students' Committee - USJ Cricket match Logo opener video using After Effect Software.</p>
                  <div className="ratio ratio-16x9 mt-4">
                    <iframe src="https://youtube.com/embed/s9v3uHoO0Pg" title="YouTube video" allowfullscreen></iframe>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
          <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
      </div></>
  )
}
