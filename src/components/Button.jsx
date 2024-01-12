export default function Button({ children, onClick, className, style }) {
  const transition = "transition ease-in-out duration-200";

  return (
    <button
      className={`
            ${className}
            ${transition}
            `}
      onClick={onClick}
      style={style}
    >
      {children}
    </button>
  );
}
