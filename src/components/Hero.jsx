import { curve,robot } from "../assets";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";

import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";

import Notification from "./Notification";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            Hi, I am Rafath Zanar, {` `}
            <span className="inline-block relative">
             Software Engineer{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
          I am driven by a passion for technology and a relentless pursuit of knowledge. With a keen interest
in learning emerging technologies, I am committed to applying them in practical, hands-on projects.
          </p>
          
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl ">
          <div className="relative bg-n-10 bg-opacity-50 rounded-[1rem]">

              <div className="h-[1.4rem] bg-n-10 bg-opacity-50 rounded-t-[0.9rem]" />

              <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                <img
                  src={robot}
                  className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  width={1024}
                  height={490}
                  alt="My Pic"
                />
                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                    title="Hello! I am seeking for a Software Engineering Internship"
                  />
                </ScrollParallax>
              </div>
            </div>

            <Gradient />
          </div>
          

          <BackgroundCircles />
        </div>

       
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
