import Button from "@/components/Button";

export default function ButtonStylized({ children, onClick, className, style }) {
  return (
    <Button
      onClick={onClick}
      style={style}
      className={`bg-violet-500 rounded-md text-white px-4 py-2 font-bold hover:bg-transparent hover:text-lime-500 border-2 border-transparent hover:border-lime-400 hover:scale-105 button-stylized ${className}`}
    >
      {children}
    </Button>
  );
}
