export default function Button({
  mode = "filled",
  Icon,
  children,
  ...props
}) {
    
  let buttonClass = "button ";

  if (mode === 'outline') {
    buttonClass += "outline-button";
  } else if (mode === "text") {
    buttonClass += "text-button";
  } else {
    buttonClass += "filled-button"
  }

  const iconButtonClass = Icon ? buttonClass + " icon-button" : buttonClass;

  return (
    <button className={iconButtonClass} {...props}>
      {Icon && (
        <span className="button-icon">
          <Icon /></span>
      )}
      <span>{children}</span>
    </button>
  );
}
