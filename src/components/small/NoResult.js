import icon_sorry_noRes from "../../assets/sorry.svg";
export default function NoResult(props) {
  return (
    <>
      <section className="noResult_sec text-center pt-12 pb-20 bg-clr_white_gray">
        <div className="my_container">
          <div className="noResult_sec--content bg-clr_white_1 rounded-2xl">
            <i>
              <img
                className="m-auto pt-10 w-14"
                src={icon_sorry_noRes}
                alt="icon_sorry"
              />
            </i>
            <h3 className="text-xl text-primary font-bold mt-4 mx-4">
              No results found for “{props.term}”
            </h3>
            <p className="font-medium leading-5 mx-auto px-4 max-w-[453px] pb-14 mt-3 text-clr_gray_dark">
              If you can't find what you're looking for, retype another keyword
              for the icon you're looking for.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
