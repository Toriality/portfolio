import Button from "@/components/Button";

export default function PageListButton({ text, image, to }) {
  function handleClick() {
    window.location.href = to;
  }

  return (
    <li>
      <Button
        onClick={handleClick}
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="p-12 w-4/5 m-auto text-center text-2xl font-black rounded-xl hover:scale-110 hover:shadow-lg hover:shadow-violet-500/25 relative hover:border-lime-500/75 hover:border-2 group pages-list-item"
      >
        <div
          className="rounded-xl backdrop-blur-sm group-hover:backdrop-blur-0 transition duration-200 pages-list-bg"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        ></div>
        <p className="relative text-white group-hover:text-lime-500 pages-list-text transition duration-200">
          {text}
        </p>
      </Button>
    </li>
  );
}
