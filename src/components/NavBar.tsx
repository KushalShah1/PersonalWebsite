import React from "react";
// @ts-expect-error
import logoPng from '../images/logo.png';
import { AnchorLink } from "gatsby-plugin-anchor-links";

export const NavBar: React.FC = () => {
    const [isExpanded, toggleExpansion] = React.useState(false)
    const itemCss = "block py-2 pl-3 pr-4 text-lg font-semibold rounded hover:bg-t-green-hover hover:text-t-green md:hover:bg-transparent md:border-0 md:p-0";

  return (
    <nav className={`bg-t-ivory px-2 sm:px-8 py-2.5`}>
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <div className="flex items-center">
            <img src={logoPng} className="h-10 mr-3 sm:h-10" alt="Kushal Shah Logo" />
        </div>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-t-green rounded-lg md:hidden hover:bg-t-green-hover"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => {toggleExpansion(!isExpanded)}}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div className={`${ isExpanded ? "block" : "hidden" } w-full md:block md:w-auto`} id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent bg-t-ivory-hover">
            <li>
              <AnchorLink
                to="/#about"
                className={itemCss}
              >
                About
              </AnchorLink>
            </li>
            <li>
              <AnchorLink
                to="/#portfolio"
                className={itemCss}
              >
                Portfolio
              </AnchorLink>
            </li>
            <li>
              <AnchorLink
                to="/#contact"
                className={itemCss}
              >
                Contact
              </AnchorLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
