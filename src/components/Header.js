import logo from "../logo.svg";
import icon_burger from "../assets/burger.png";
import React from "react";

export default function Header() {
  return (
    <>
      <header className="pt-5">
        <div className="my_container flex items-center justify-between">
          <div className="logo">
            <img
              src={logo}
              className="logo--img h-[63px] inline-block"
              alt="logo"
            />
            <div className="version inline-block bg-clr_blue_2 text-white font-bold rounded text-xs py-[3.5px] min-w-[39px] px-[7.8px] ml-4">
              v1.3
            </div>
          </div>
          <div className="nav">
            <div className="hidden burder_icon relative z-30">
              <button type="button">
                <img className="w-8" src={icon_burger} alt="icon" />
              </button>
            </div>
            <ul className="nav--links flex">
              <li className="active">
                <a
                  className="px-5 py-3 text-primary font-bold hover:underline hover:text-clr_blue_2"
                  href="./"
                >
                  Home
                </a>
              </li>
              <li className="">
                <a
                  className="px-5 py-3 text-primary font-bold hover:underline hover:text-clr_blue_2"
                  href="./"
                >
                  Pricing
                </a>
              </li>
              <li className="contact">
                <a
                  className="border-2 border-primary rounded-[8px] px-6 py-3 ml-5 hover:bg-primary hover:text-clr_white_1 font-bold"
                  href="./"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
