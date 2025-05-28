import { IShinyText } from "./types";

export const ShinyText = ({
  text,
  disabled = false,
  speed = 5,
  className = "",
}: IShinyText) => {
  const animationDuration = `${speed}s`;

  return (
    <div
      className={`text-white/70 bg-clip-text inline-block ${
        disabled ? "" : "animate-shine"
      } ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 60%)",
        backgroundSize: "200% 100%",
        WebkitBackgroundClip: "text",
        animationDuration: animationDuration,
      }}
    >
      {text}
    </div>
  );
};
