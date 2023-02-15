import colorSharp from "../public/color-sharp.png";
import React from "react";
import { AiFillGithub} from "react-icons/ai";

export const Electronics = () => {
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
    <><><div className="relative">
      <div className="absolute inset-0 mt-5 ml-32 mr-32 bg-pink-600 bottom-12 rounded-3xl blur"></div>
      <section className="skill" id="skills">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="relative skill-bx wow zoomIn mt-5">
                <div class="iot" className="mb-5">
                  IOT HOME AUTOMATION SYSTEM WITH ALEXA APP USING ESP8266 AND ARDUINO UNO
                </div>
                <p className='text-md m-auto mx-5 leading-8 text-white mt-4'>In this Arduino project, I have shown you how to make an Arduino IoT project with the Alexa app using ESP8266 Arduino UNO WiFi control Relay with voice commands. I have used all the free tools for this IoT-based home automation system.</p>
                <div className="mt-4 text-left text-white">
                  Required Components for this IoT Project (without PCB)<br />
                  1. Arduino UNO <br />
                  2. ESP-01 <br />
                  3. 5V SPDT Relay Module <br />
                  4. Switches or Push Buttons <br />
                  5. Breadboard <br />
                  6.230V bulb <br />
                  7. Wires
                </div>

                <p className="flex gap-2 mb-0 mt-3">
                    <a href="https://github.com/VathanSilva/Arduino-IoT-Home-Automation-System-with-Alexa-App-using-ESP8266-and-Arduino-UNO">GitHub</a> - coding
                </p>

                <div className="ratio ratio-16x9 mt-4">
                  <iframe src="https://youtube.com/embed/1UPYd1EZyW4" title="YouTube video" allowfullscreen></iframe>
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
                    SOIL MOISTURE TESTER USING ARDUINO UNO
                  </div>
                  <p className='text-md m-auto mx-5 leading-8 text-white mt-4'>In this Arduino project, I have shown you how to make a Soil Moisture Tester using Arduino uno. I have used all the free tools for this Project.</p>
                  <div className="mt-4 text-left text-white">
                    Required Components for this Project <br />
                    1. Arduino UNO <br />
                    2. Soil Moisture Sensor FC-28 <br />
                    3. Breadboard (Generic) <br />
                    4. Resistor 330 ohm <br />
                    5. Led <br />
                    6. Breadboard Jumper Wire
                  </div>
                  <div className="ratio ratio-16x9 mt-5">
                    <iframe src="https://youtube.com/embed/z-6WbqYL_kM" title="YouTube video" allowfullscreen></iframe>
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
                    SELF BALANCING ROBOT USING ARDUINO UNO
                  </div>
                  <p className='text-md m-auto mx-5 leading-8 text-white mt-4'>In this Arduino Project, I Built Self Balancing Robot using Arduino Microcontroller. This Self Balancing Robot is a Two-wheeled Robot that balances vertically using a closed-loop algorithm. This Self Balancing Robot Features various modes like Position Hold, Simple Mode, Rise Mode and Joystick Control. Self Balancing robot uses data from the Accelerometer and Gyroscope to correct its orientation and position.</p>
                  <div className="mt-4 text-left text-white">
                    Required Components for this Project <br />
                    1. Arduino UNO <br />
                    2. Forex sheet <br />
                    3. L298N Motor Driver Module <br />
                    4. Geared DC motors (Yellow coloured) 2Nos <br />
                    5. Jumper Cable <br />
                    6. MPU 6050 <br/>
                    7. Battery 7.4V Li-ion <br/>
                    8. A pair of wheels <br/>
                  </div>

                  <p className="flex gap-2 mb-0 mt-3">
                    <a href="https://github.com/VathanSilva/Self-Balancing-Robot">GitHub</a> - coding
                  </p>

                  <div className="ratio ratio-16x9 mt-4">
                    <iframe src="https://youtube.com/embed/4lggMpiALKs" title="YouTube video" allowfullscreen></iframe>
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