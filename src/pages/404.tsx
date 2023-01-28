import * as React from "react";
import { HeadFC, PageProps, navigate } from "gatsby";
import Typewriter from "typewriter-effect";

const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};
const redirect = () => {
  navigate("/");
};
const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <main className="bg-t-black h-screen w-min-screen">
      <div className="container mx-auto items-center justify-center h-screen flex flex-row">
        <div style={{width: '500px'}} className="flex flex-col">
          <span className="font-mono md:text-xl text-lg my-4 w-min whitespace-nowrap text-t-green">{"> "}<span className="text-t-ivory bg-red-700">ERROR: 404</span></span>
          <div className="font-mono text-t-green md:text-xl pb-2 text-lg flex h-20">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("> Hello traveller!")
                  .pauseFor(1000)
                  .typeString("<br/>> The page you requested is not here :(")
                  .pauseFor(1000)
                  .typeString("<br/>> I will redirect you back in 5")
                  .pauseFor(1000)
                  .deleteChars(1)
                  .typeString("4")
                  .pauseFor(1000)
                  .deleteChars(1)
                  .typeString("3")
                  .pauseFor(1000)
                  .deleteChars(1)
                  .typeString("2")
                  .pauseFor(1000)
                  .deleteChars(1)
                  .typeString("1")
                  .pauseFor(500)
                  .callFunction(redirect)
                  .start();
              }}
              options={{
                delay: 50,
              }}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;
