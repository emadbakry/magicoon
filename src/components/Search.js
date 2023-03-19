// hey!
import icon_clear from "../assets/clear.svg";
import React from "react";
import icon_light from "../assets/light.svg";
import icon_regular from "../assets/regular.svg";
import icon_filled from "../assets/filled.svg";
import icon_duotone from "../assets/duotone.svg";
import icon_light_white from "../assets/light_white.svg";
import icon_regular_white from "../assets/regular_white.svg";
import icon_filled_white from "../assets/filled_white.svg";
import icon_duotone_white from "../assets/duotone_white.svg";
import icon_crown_white from "../assets/crown_white.svg";
import icon_search from "../assets/search.svg";
export default function SearchSec(props) {
  function stickSearchSec(e) {
    let srchSec = e.currentTarget;
    // console.log("jjj");
    window.addEventListener("scroll", () => {
      srchSec.getBoundingClientRect().top <= 0
        ? document.body.classList.add("active_sticky")
        : srchSec.getBoundingClientRect().top >= 50 &&
          document.body.classList.remove("active_sticky");
      // for mobile, to fix some problems
      // if (srchSec.getBoundingClientRect().top <= 0) {
      //   document.body.classList.add("active_sticky_mob");
      // } else if (srchSec.getBoundingClientRect().top >= 80) {
      //   document.body.classList.remove("active_sticky_mob");
      // }
      // hii
    });
  }
  return (
    <>
      <section
        onLoad={stickSearchSec}
        id="search_sec"
        className="search_sec py-8 z-[9] bg-clr_white_1 sticky top-0"
      >
        <style>{`.icon_content i path {fill: ${props.color};}`}</style>
        <div className="my_container">
          <div className="search_btn mb-4 w-full border-clr_white_gray h-16 flex items-center relative">
            <label
              htmlFor="main-search_btn"
              className="absolute left-6 top-[calc(50%-10px)]"
            >
              <img src={icon_search} alt="search_icon" />
            </label>
            <input
              id="main-search_btn"
              onInput={props.filterFunc}
              className="w-full h-full text-primary bg-[#ffffff] font-bold indent-8 pl-8 border-[3px] rounded-lg placeholder:text-clr_gray_dark focus-visible:border-primary focus-visible:outline-none"
              type="text"
              placeholder="Search 288 icons..."
            />
            <div
              onClick={props.cleanFunc}
              className={`absolute p-4 right-0 cursor-pointer ${props.cleanBtn}`}
            >
              <img src={icon_clear} alt="icon_clear" />
            </div>
          </div>
          <div className="search_options flex flex-wrap justify-between gap-4">
            <div className="icons_filter_type">
              <ul className="flex bg-clr_gray rounded-lg overflow-hidden">
                <li
                  onClick={props.setIconFilterType}
                  className="option_all border-[1px] cursor-pointer type_active w-12 flex items-center justify-center text-xs font-bold"
                >
                  <span className="filterTypeSpan">All</span>
                </li>
                <li onClick={props.setIconFilterType} className="option">
                  <i>
                    <img src={icon_light} alt="icon" />
                    <img
                      src={icon_light_white}
                      className="white_copy hidden"
                      alt="icon"
                    />
                  </i>
                  <span className="filterTypeSpan">light</span>
                </li>
                <li onClick={props.setIconFilterType} className="option">
                  <i>
                    <img src={icon_regular} alt="icon" />
                    <img
                      src={icon_regular_white}
                      className="white_copy hidden"
                      alt="icon"
                    />
                  </i>
                  <span className="filterTypeSpan">Regular</span>
                </li>
                <li onClick={props.setIconFilterType} className="option">
                  <i>
                    <img src={icon_filled} alt="icon" />
                    <img
                      src={icon_filled_white}
                      className="white_copy hidden"
                      alt="icon"
                    />
                  </i>
                  <span className="filterTypeSpan">Filled</span>
                </li>
                <li onClick={props.setIconFilterType} className="option">
                  <i>
                    <img src={icon_duotone} alt="icon" />
                    <img
                      src={icon_duotone_white}
                      className="white_copy hidden"
                      alt="icon"
                    />
                  </i>
                  <span className="filterTypeSpan">Duotone</span>
                </li>
              </ul>
            </div>
            <div className="search_options--right flex flex-wrap">
              <div className="select_clr h-full flex items-center">
                <label htmlFor="color_input_text">color:</label>
                <input
                  id="color_input_text"
                  onChange={props.changeClrFunc}
                  onBlur={props.applyColorFunc}
                  onKeyDown={props.applyColorFunc}
                  className="border w-24 mx-2 h-8 rounded-lg indent-1 hiddennn note:not-needed-now"
                  type="text"
                  value={props.color}
                  placeholder={props.color}
                />
                <label
                  className="select_clr--clr_label cursor-pointer h-full w-12 p-1 block border-2 border-clr_white_gray rounded-lg ml-1"
                  htmlFor="color_input"
                >
                  <span
                    className="color_aria block h-full w-full bg-primary rounded-[4px]"
                    style={{ backgroundColor: props.color }}
                  ></span>
                </label>
                <input
                  id="color_input"
                  onChange={props.changeClrFunc}
                  onBlur={props.applyColorFunc}
                  className="invisible w-0 h-0 opacity-0"
                  type="color"
                  value="#ff0"
                />
              </div>
              <div className="select_premium cursor-pointer bg-clr_blue_2 hover:bg-[#124ad5] text-clr_white_1 font-semibold flex items-center justify-center py-2 px-6 rounded-lg ml-[18px]">
                <i>
                  <img
                    className="mr-1"
                    src={icon_crown_white}
                    alt="crown_icon"
                  />
                </i>
                Premium! (5,400 ICONS)
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
