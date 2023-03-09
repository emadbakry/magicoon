export default function Btn(props) {
  let content = (
    <>
      <div
        onClick={props.func}
        className={`${props.styles} ${props.bg} py-3 px-5 cursor-pointer`}
      >
        <i>
          <img src={props.icon} alt={props.alt || "icon"} />
        </i>
        <span className="ml-2">{props.txtContent}</span>
      </div>
    </>
  );
  return (
    <>
      {props.useAnchor ? (
        <a
          className="block"
          download={props.iconName}
          href={`data:image/svg+xml,${encodeURIComponent(props.href)}`}
        >
          {content}
        </a>
      ) : (
        <div> {content}</div>
      )}
    </>
  );
}
