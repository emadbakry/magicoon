import BriefMore from "./small/BriefMore";
import arrow_down from "../assets/arrow-down.svg";
import crown from "../assets/crown.svg";
import gift from "../assets/gift.svg";
import icon_figma from "../assets/figma.svg";
import icon_figma_white from "../assets/figma_white.svg";
export default function Brief() {
  // function handleDownloadBtn() {
  //   let handle_dropdown = document.querySelector(
  //     ".brief--download--handle_dropdown"
  //   );
  //   handle_dropdown.classList.toggle("active");
  // }
  // no need for this, dlete it later

  return (
    <>
      <section className="brief relative py-[88px]">
        <div className="my_container">
          <div className="row brief--content flex justify-between flex-wrap">
            <div className="brief--content--text max-w-2xl pr-16">
              <h1 className="font-extrabold text-5xl text-primary mb-4 leading-[59.5px]">
                Free UI Icons Library
              </h1>
              <p>
                288 High-quality vector UI icons library that provides multiple
                formats and styles, Made for designers and developers.
              </p>
            </div>
            <BriefMore />
          </div>
          <div className="brief--download flex mt-8">
            <div className="brief--download--all_btn relative">
              <div
                className="brief--download--handle_dropdown relative bg-clr_green rounded-[8px] text-white flex items-center"
                type="button"
              >
                <button
                  className="brief--download--btn_inside py-4 px-4 min-w-[139px] outline-none rounded-lg font-bold"
                  type="button"
                >
                  Download All
                </button>
                <button className="downloadBtn--arrow_div rounded-r-lg border-l-[1px] border-clr_green_red outline-none h-14 w-12 flex items-center justify-center">
                  <img
                    className="downloadBtn--arrow transition duration-75"
                    src={arrow_down}
                    alt="arrow"
                  />
                </button>
                <ul className="download--versions_drop absolute z-10 top-full text-primary">
                  <li className="hover:bg-clr_gray rounded-lg">
                    <a className="py-[11px] px-4 block h-[48px]" href="/">
                      <img
                        className="inline-block mr-2"
                        src={crown}
                        alt="crown_icon"
                      />
                      <span className="align-middle font-bold text-sm">
                        Pro Version!
                      </span>
                    </a>
                  </li>
                  <li className="hover:bg-clr_gray rounded-lg">
                    <a className="py-[11px] px-4 block h-[48px]" href="/">
                      <img
                        className="inline-block mr-2 w-6"
                        src={gift}
                        alt="crown_icon"
                      />
                      <span className="align-middle font-bold text-sm">
                        Free Version
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="brief--download--figma_file cursor-pointer">
              <i>
                <img className="dark_figma" src={icon_figma} alt="icon_figma" />
                <img
                  className="white_figma hidden"
                  src={icon_figma_white}
                  alt="icon_figma"
                />
              </i>
              <button className="font-bold text-base ml-2" type="button">
                Figma File
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
