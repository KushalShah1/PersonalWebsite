import React from "react";
import Typewriter from "typewriter-effect";

export const Main = () => {
  return (
    <div className="h-screen maxh-96 grid place-items-center">
      <div className="flex-col flex p-8 lg:w-4/6 w-5/6">
        <span className="font-mono text-t-green md:text-2xl pb-2 text-lg">
          <Typewriter
            options={{
              strings: [
                "Hello I am",
                "Hola yo soy",
                "Bonjour je suis",
                "Hallo ik ben",
                "مرحبا أنا",
                "Ciao io sono",
                "こんにちは私は",
                "Hallo ich bin",
                "Здравствуйте, я",
              ],
              autoStart: true,
              loop: true,
              // @ts-expect-error
              pauseFor: 5000,
            }}
          />
        </span>
        <span className="lg:text-8xl md:text-6xl font-bold md:pb-4 pb-2 text-4xl">Kushal Shah</span>
        <span className="lg:text-8xl md:text-6xl font-bold pb-4 text-t-green text-4xl">
          I create <wbr/>
          <span className="font-mono">{"<code>"}</span>
        </span>
        <span className="text-xl w-4/5 md:text-xl text-lg">
         I'm a developer focussed on building user experiences through design, innovation, and a lot of code. Currently, I am building onboarding solutions for customers at <a href="https://www.stripe.com" className="text-t-green font-semibold hover:underline">Stripe</a>.
        </span>
        <a type="button" href="https://drive.google.com/file/d/1e4YQjQhD4VjaS5cZr3T147_ewHleWOxf/view?usp=sharing" className="w-min border-2 border-t-green px-5 py-2.5 text-center rounded-lg mt-5 hover:bg-t-green-hover text-t-green font-semibold">Resume</a>
      </div>
      <div></div>
    </div>
  );
};
