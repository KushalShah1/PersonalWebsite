import React from "react";
import { SectionContainer } from "./SectionContainer";
import { SocialMediaRow } from "./SocialMediaRow";

export const ContactMeFooter: React.FC = () => {
    return (
      <SectionContainer
        id="contact"
        badge="📞 Contact Me"
        title="Want to get in touch?"
        center
      >
        <div className="flex flew-row mb-36 items-center">
          <div className="flex flex-col items-center">
            <span className="text-lg text-center w-96">Feel free to shoot me an email and connect with me on my socials. I am not actively looking for a new position, but happy to talk!</span>
            <a type="button" href={`mailto:kushalshah@flash.net`} className="w-min whitespace-nowrap border-2 border-t-green px-5 py-2.5 text-center rounded-lg my-5 hover:bg-t-green-hover text-t-green font-semibold">Send an Email</a>
            <SocialMediaRow className={""} />
          </div>
        </div>
      </SectionContainer>
    );
}