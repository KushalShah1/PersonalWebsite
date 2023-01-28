import * as React from "react";
import { HeadFC, Link, PageProps, navigate} from "gatsby";
import { NavBar } from "../components/NavBar";
import { Main } from "../components/Main";
import { AboutMe } from "../components/AboutMe";
import { ContactMeFooter } from "../components/ContactMeFooter";
import { Portfolio } from "../components/Portfolio";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main className="font-sans font-normal leading-relaxed text-t-black font-base bg-t-ivory h-min-screen">
      <div className="container mx-auto">
        <NavBar />
        <Main />
        <div className="flex flex-col gap-36">
          <AboutMe />
          <Portfolio />
          <ContactMeFooter />
        </div>
        <a
          onClick={() => navigate("/404")}
          className="flex flex-row justify-center"
          type="button"
        >
          <span className="mb-8 text-sm hover:text-t-green font-light">
            Shh! Easter Egg: Check out my 404 page
          </span>
        </a>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Kushal Shah</title>;
