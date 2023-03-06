import logo_shape from "../../assets/icon_shape.svg";
export default function BriefMore(props) {
  return (
    <>
      <a
        href="/"
        className={`brief--content--more ${props.brdr} cursor-default p-4 bg-clr_white_1 flex max-w-[328px] min-w-[300px] rounded-[8px]`}
      >
        <div className="more_bg_gradient cursor-pointer">
          <img src={logo_shape} alt="" />
        </div>
        <div className="more--text grid">
          <p className="pb-2 text-[14px] text-primary leading-[18px] cursor-pointer">
            5,400+ high-quality vector icons library, made for designers and
            developers.
          </p>
          <button className="text-end flex self-end cursor-pointer justify-self-end text-sm">
            Read More
          </button>
        </div>
      </a>
    </>
  );
}
