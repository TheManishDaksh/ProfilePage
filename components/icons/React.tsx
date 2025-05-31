import React from "react";

export default function ReactIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ backgroundColor: "transparent" }}
      width="25"
      height="25"
      viewBox="0 0 64 64"
      fill="white"
    >
      <circle cx="32" cy="32" r="6" />
      <ellipse cx="32" cy="32" rx="24" ry="8" fill="none" stroke="white" strokeWidth="3" />
      <ellipse
        cx="32"
        cy="32"
        rx="24"
        ry="8"
        fill="none"
        stroke="white"
        strokeWidth="3"
        transform="rotate(60 32 32)"
      />
      <ellipse
        cx="32"
        cy="32"
        rx="24"
        ry="8"
        fill="none"
        stroke="white"
        strokeWidth="3"
        transform="rotate(120 32 32)"
      />
    </svg>
  );
}
