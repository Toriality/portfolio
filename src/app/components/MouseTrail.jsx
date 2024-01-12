import { useState, useEffect } from "react";

export default function MouseTrail() {
  const [trail, setTrail] = useState([]);

  useEffect(() => {
    let animationFrameId;

    const handleMouseMove = (event) => {
      // animationFrameId = requestAnimationFrame(() => {
      const { clientX, clientY } = event;
      setTrail((prevTrail) => [...prevTrail, { x: clientX, y: clientY }]);
      // });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  useEffect(() => {
    if (trail.length > 1200) {
      setTrail([]);
    }
  }, [trail]);

  return (
    <div className="mouse-trail-container">
      {trail.map((point, index) => (
        <div
          key={index}
          className={`mouse-trail bg-violet-400/50`}
          style={{
            left: `${point.x}px`,
            top: `${point.y}px`,
          }}
        ></div>
      ))}
    </div>
  );
}
