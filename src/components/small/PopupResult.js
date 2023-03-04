import React from "react";
// import ReactDom from "react-dom";
import icon_correct from "../../assets/correct.svg";
import icon_download from "../../assets/arrow_download.svg";
import icon_copy from "../../assets/copy.svg";
// import icon_regular from "../../assets/regular.svg";
// import icon_behance from "../../assets/behance.svg";
import logo_shape_small from "../../assets/icon_shape_small.svg";
import Btn from "../small/Btn";
import BriefMore from "../small/BriefMore";
// import Convert from "convert-svg-react";
// import { ResultsIcons as Icon } from "../Results_icons";

export default function PopupResult(props) {
  console.log(
    <svg
      viewBox="0 0 24 24"
      strokeWidth=".895"
      aria-hidden="true"
      className="min-h-6 min-w-6"
    >
      <path
        d="M11.554 4v-.447H8.738a2.553 2.553 0 1 0 0 5.105H11.554V4Z"
        fill="#DF5A33"
        stroke="#DF5A33"
      />
      <path
        d="M11.554 9.895v-.448H8.738a2.553 2.553 0 0 0 0 5.106H11.554V9.895Z"
        fill="#985CF7"
        stroke="#985CF7"
      />
      <path
        d="M11.554 15.79v-.448H8.738a2.553 2.553 0 0 0 0 5.105h.132a2.684 2.684 0 0 0 2.684-2.684V15.79Z"
        fill="#5ECC89"
        stroke="#5ECC89"
      />
      <path
        d="M15.262 9.447a2.553 2.553 0 1 1 0 5.106h-.263a2.553 2.553 0 0 1 0-5.106h.263Z"
        fill="#57B9F8"
        stroke="#57B9F8"
      />
      <path
        d="M12.446 4v-.447H15.262a2.553 2.553 0 1 1 0 5.105H12.446V4Z"
        fill="#EE7A69"
        stroke="#EE7A69"
      />
    </svg>
  );
  if (props.isReady) {
    // let popup_result = document.getElementById("popup_result");
    // popup_result.style.display = "flex";
    document.body.classList.add("popup_active");
    document.body.classList.add("popup_active_2");
  }
  /////
  function closePop(e) {
    document.body.classList.remove("popup_active_2");
    setTimeout(() => {
      document.body.classList.remove("popup_active");
    }, 100);
    // document.querySelector("#popup_result").style.display = "none";
  }
  const [succesMsg, setSuccessMsg] = React.useState("success");
  let canExcute = true;
  function success_copyMsg(msg) {
    if (canExcute) {
      canExcute = false;
      let body = document.body;
      body.classList.add("show_msg");
      setSuccessMsg(msg || "that was done successfully");
      setTimeout(() => {
        body.classList.remove("show_msg");
        canExcute = true;
      }, 3000);
    }
  }
  // temporarily
  function copy_svg(e) {
    let svg_path = document.querySelector(
      ".popup_result--icon .icon_content i"
    );
    navigator.clipboard.writeText(svg_path.innerHTML);
    // sucess msg
    success_copyMsg("Copied to Clipboard successfully");
  }
  const [iconToDownload, setIconToDownload] = React.useState(" ");
  function download_svg(e) {
    let svg_path = document.querySelector(
      ".popup_result--icon .icon_content i"
    );
    // svg_path.innerHTML;
    // sucess msg
    success_copyMsg("Copied to Clipboard successfully");
  }
  return (
    <>
      <div
        // style={{ display: "none" }}
        id="popup_result"
        className="popup_result invisible"
      >
        <div className="fixed Mycont z-30 w-[440px] flex items-center justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 scale-75 transition-all">
          <div className="popup_content w-full">
            <div className="popup_result--top bg-clr_white_gray min-h-[56px] flex items-center justify-between px-3 rounded-t-2xl">
              <div className="popup_result--icon_title ml-5 font-bold text-primary">
                {props.txt}
              </div>
              <button
                onClick={closePop}
                type="button"
                className="cancel_btn p-2"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="25314C"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M13.414 12L18.707 6.70695C19.098 6.31695 19.098 5.68301 18.707 5.29301C18.316 4.90201 17.684 4.90201 17.293 5.29301L12 10.586L6.70701 5.29301C6.31601 4.90201 5.68401 4.90201 5.29301 5.29301C4.90201 5.68301 4.90201 6.31695 5.29301 6.70695L10.586 12L5.29301 17.293C4.90201 17.683 4.90201 18.3169 5.29301 18.7069C5.48801 18.9019 5.74401 19 6.00001 19C6.25601 19 6.51201 18.9019 6.70701 18.7069L12 13.414L17.293 18.7069C17.488 18.9019 17.744 19 18 19C18.256 19 18.512 18.9019 18.707 18.7069C19.098 18.3169 19.098 17.683 18.707 17.293L13.414 12Z" />
                </svg>
              </button>
            </div>
            <div className="popup_result--main bg-clr_white_1 rounded-b-2xl p-8">
              <div className="popup_result--download_icon">
                <div className="row flex flex-wrap justify-between">
                  <div className="popup_result--icon w-[168px]">
                    <div className="w-full h-full">
                      <div
                        style={{ backgroundColor: "#DDE2EB" }}
                        className={`icon ${props.styles}`}
                      >
                        <div className="icon_content flex-col w-full h-full pb-9 pt-2 px-4 flex justify-center items-center">
                          <i>
                            {/*old v=> <img
                              className="m-auto min-w-[96px] block"
                              src={props.iconSelected}
                              alt="props.txt"
                            /> */}
                            {props.iconSelected}
                          </i>
                          <p className="absolute font-bold uppercase bottom-4 left-1/2 -translate-x-1/2">
                            {props.type}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="popup_result--download_btns ">
                    <Btn
                      bg="bg-primary"
                      icon={icon_download}
                      styles={
                        "rounded-lg flex justify-center text-clr_white_1 font-bold mb-3 hover:bg-[#3B4B70]"
                      }
                      txtContent={"Download SVG"}
                      func={download_svg}
                      useAnchor={true}
                      href={iconToDownload}
                      iconName={props.iconSelectedName}
                    />
                    <Btn
                      bg="bg-primary"
                      icon={icon_copy}
                      styles={
                        "rounded-lg flex justify-center text-clr_white_1 font-bold mb-3 hover:bg-[#3B4B70]"
                      }
                      txtContent={"Copy SVG"}
                      func={copy_svg}
                    />
                    <Btn
                      bg="bg-clr_green"
                      icon={logo_shape_small}
                      styles={
                        "rounded-lg flex justify-center text-clr_white_1 font-bold hover:bg-clr_green_red"
                      }
                      txtContent={"Pro Icons"}
                    />
                  </div>
                </div>
              </div>
              <div className="footer--line bg-clr_white_gray w-full h-[1px] mt-6"></div>
              <div className="popup_result--brief_more flex items-center justify-center mt-6">
                <BriefMore brdr="border border-clr_white_gray" />
              </div>
            </div>
          </div>
        </div>
        <div
          onClick={closePop}
          className="popup_result--overlay fixed z-10 bg-[#25314c3d] m-auto w-screen h-screen top-0 opacity-20 left-0"
        >
          <div className="success_msg">
            <div className="text">
              {succesMsg}{" "}
              <img
                className="w-6 inline-block"
                src={icon_correct}
                alt="icon_correct"
              />
            </div>
            <div className="progressBar"></div>
          </div>
        </div>
      </div>
    </>
  );
}
