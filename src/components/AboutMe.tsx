import React from "react"
// @ts-expect-error
import carousel1 from '../images/carousel1.jpeg';
// @ts-expect-error
import carousel2 from '../images/carousel2.jpg';
// @ts-expect-error
import carousel3 from '../images/carousel3.jpg';
import { SocialMediaRow } from "./SocialMediaRow";
import { SectionContainer } from "./SectionContainer";

export const AboutMe:React.FC = () => {
    return (
      <SectionContainer
        id="about"
        badge="👋 About Me"
        title="Get To Know Me"
      >
        <div className="flex lg:flex-row flex-col lg:gap-28 items-center">
          <div className="flex flex-col lg:items-start items-end  md:text-base text-sm">
            I am a recent graduate of the University of Texas at Austin with a
            degree in Electrical and Computer Engineering. I have a passion for
            technology and innovation, which led me to pursue a career in
            software development. I currently work as a software developer for
            Stripe, on the Connect Onboarding team, where I am able to utilize
            my skills to build onboarding solutions for Stripe Connect and our
            users. My prior experiences in starting two failed startups, as well
            as working at another startup, Pop Social, have given me valuable
            experience and motivated me to continue learning and growing in the
            tech industry. My goal is to be an entrepreneur and use my skills to
            create new and innovative solutions. In my free time, I enjoy
            watching Formula One, playing video games, hiking, and spending time
            with friends. I am also a big foodie and have a great love for dogs.
            <span className="hidden lg:block">
              <SocialMediaRow className="pt-12" />
            </span>
          </div>
          <img
            src={carousel1}
            className="rounded-3xl object-cover lg:h-96 lg:w-96 h-80 w-80 mt-14 lg:mt-0"
          />
          <span className="block lg:hidden">
            <SocialMediaRow className="pt-12" />
          </span>
        </div>
      </SectionContainer>
    );
}