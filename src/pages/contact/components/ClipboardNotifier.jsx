import { useEffect, useRef } from "react";

export default function ClipboardNotifier({ isVisible = false, setIsVisible }) {
  const notification = useRef(null);

  useEffect(() => {
    if (isVisible && notification.current) {
      notification.current.classList.add("notification");
      notification.current.classList.remove("hidden");

      setTimeout(() => {
        notification.current.classList.remove("notification");
        notification.current.classList.add("hidden");
        setIsVisible(false);
      }, 2000);
    }
  }, [isVisible, setIsVisible]);

  return (
    <div
      ref={notification}
      className="fixed bottom-0 right-0 left-0 bg-zinc-800 text-white font-bold text-lg text-center rounded-xl z-10 m-4 p-4 hidden pointer-events-none clipboard"
    >
      <p>Copied to clipboard!</p>
    </div>
  );
}
