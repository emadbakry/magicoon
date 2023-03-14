import React from "react";
import PopupResult from "./small/PopupResult";
function ResultsIcons(props) {
  function Icon(props) {
    return (
      <>
        <div
          onClick={props.clickFunc}
          ئئ
          data-id={props.id}
          data-type={props.type}
          className={`icon cursor-pointer ${props.styles}`}
        >
          <div className="icon_content relative w-full h-full pb-9 pt-2 px-4 justify-center items-center">
            <i>
              {/* old v=> <img className="m-auto" src={props.icon} alt="icon" /> */}
              {props.icon}
            </i>
            <p className="tracking-wider text-center w-full px-3 font-bold absolute top-[65%] left-1/2 -translate-x-1/2 text-primary">
              {props.txt ?? "no-names"}
            </p>
          </div>
        </div>
      </>
    );
  }
  // ///////////////////
  const [PopIcon, setPopIcon] = React.useState(props.data[0].path);
  const [PopIconName, setPopIconName] = React.useState(props.data[0].name);
  const [iconName, setIconName] = React.useState("no-name");
  const [iconType, setIconType] = React.useState("regular");
  let [isReady, setIsReady] = React.useState(false);
  function RunPop(e) {
    setIsReady(true);
    setTimeout(() => {
      setIsReady(false);
    }, 2000);
    setIconName(e.currentTarget.querySelector("p").textContent);
    setIconType(props.data[e.currentTarget.dataset.id].type);
    setPopIcon(props.data[e.currentTarget.dataset.id].path);
    setPopIconName(props.data[e.currentTarget.dataset.id].name);
    // icons still random, change them when setting api or database, and try catching icons using id from data base or something...
  }
  function HandleResults() {
    let data_to_result = props.data;
    const finalResult = data_to_result.map((i) => {
      return (
        <Icon
          clickFunc={RunPop}
          txt={i.name}
          type={i.type}
          key={i.id}
          id={i.id}
          icon={i.path}
        />
      );
    });
    // console.log(data_to_result);
    return <>{finalResult}</>;
  }
  return (
    <>
      {props.k === "OnlyOne" ? (
        <Icon icon={PopIcon} />
      ) : (
        <>
          <section className="results_icon_sec pt-12 pb-20 bg-clr_white_gray">
            <div className="my_container">
              <div className="results_badge mb-4 text-primary">
                <div
                  id="results_num"
                  className="results_num inline-block font-bold"
                >
                  {props.data.length}
                </div>
                <span className="uppercase mx-1 font-bold">{`Result${
                  props.data.length !== 1 ? "s" : ""
                }`}</span>
                <span className="uppercase">(icons)</span>
              </div>
              <div id="results" className="icons_results">
                <div className="grid my_result_items gap-3">
                  <HandleResults />
                </div>
              </div>
            </div>
          </section>
          {
            <PopupResult
              isReady={isReady}
              txt={iconName}
              iconSelected={PopIcon}
              iconSelectedName={PopIconName}
              type={iconType}
            />
          }
        </>
      )}
    </>
  );
}

export { ResultsIcons };
