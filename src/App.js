import "./App.css";
import React from "react";
import "./components/Header";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Brief from "./components/Brief";
import { ResultsIcons } from "./components/Results_icons";
import SearchSec from "./components/Search";
import NoResult from "./components/small/NoResult";
import { Data } from "./components/Data";

function App() {
  // for search sec
  const [color, setColor] = React.useState("#25314C");
  function change_color(e) {
    setColor(e.currentTarget.value);
  }
  function apply_color(e) {
    if (e.keyCode === 13 && e.currentTarget.value) {
      console.log(e.currentTarget.value[0] === "#");
    }
  }
  // filter icons type
  let filterType = "all";
  function setIconFilterType(e) {
    let IconTypes_list = document.querySelectorAll(".icons_filter_type ul li");
    IconTypes_list.forEach((e) => e.classList.remove("type_active"));
    e.currentTarget.classList.add("type_active");
    let typeOfFilter = e.currentTarget.querySelector(".filterTypeSpan")
      .textContent;
    // console.log(e.currentTarget.querySelector(".filterTypeSpan"));
    // console.log(`Filter type  : ${typeOfFilter}`);
    filterType = typeOfFilter;
    // force input to trigger, to do filtering when filter type changes
    document
      .getElementById("main-search_btn")
      .dispatchEvent(new Event("input", ~{ bubbles: true }));
  }

  // for search sec
  const [filterData, SetFilterData] = React.useState(Data.svgs);

  const [isVisible, setIsVisible] = React.useState("invisible");
  const [term, setTerm] = React.useState("icon");
  function filtering(e) {
    let value = e.currentTarget.value.toLowerCase();
    console.log(value);
    setTerm(value);
    // if value == back, just cancel filtering and show normal results

    // filtering starts here \\\\\\\\\\\\
    var data_matched = [];
    Data.svgs.forEach((icon) => {
      if (
        icon.keywords
          .join("")
          .toLowerCase()
          .includes(value.trim())
      ) {
        // check filter
        // console.log(icon.type);
        // console.log(icon.type);
        // console.log(data_matched);
        if (
          filterType.toLowerCase() === "all" ||
          icon.type.toLowerCase() === filterType.toLowerCase()
        ) {
          data_matched.push(icon.id);
        }
      }
    });
    let path_matched = Data.svgs.filter((i) => data_matched.includes(i.id));
    if (Array.isArray(path_matched) && path_matched.length > 0) {
      console.log(path_matched);
      SetFilterData(path_matched);
    } else {
      SetFilterData("no-match");
      // no matches
    }
    // filtering Ends here \\\\\\\\\\\\\\\\\\
    if (value === "" || value === " ") {
      setIsVisible("invisible");
    } else {
      setIsVisible("visible");
    }
  }
  function cleanInput() {
    document.getElementById("main-search_btn").value = "";
    // force input to trigger, to do filtering when cleaning input
    document
      .getElementById("main-search_btn")
      .dispatchEvent(new Event("input", { bubbles: true }));
  }

  return (
    <>
      <div className="top_content">
        <Header />
        <Brief />
      </div>
      <SearchSec
        filterFunc={filtering}
        cleanBtn={isVisible}
        cleanFunc={cleanInput}
        color={color}
        applyColorFunc={apply_color}
        changeClrFunc={change_color}
        setIconFilterType={setIconFilterType}
      />
      {filterData === "no-match" ? (
        <NoResult term={term} />
      ) : (
        <ResultsIcons data={filterData} />
      )}
      <Footer />
      {/* <PopupResult /> */}
    </>
  );
}

export default App;
