import React from "react";
import { Box } from "@mui/material";

const Blur = () => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1920 1080" // Full HD ratio रखा
      preserveAspectRatio="xMidYMid slice" // हर screen पर spread
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Soft colorful blobs */}
      <circle cx="500" cy="200" r="300" fill="#22C55F" opacity=".8" />
      <circle cx="1100" cy="150" r="280" fill="#3B82F6" opacity=".7" />
      <circle cx="300" cy="700" r="350" fill="#F43F5E" opacity=".7" />
      <circle cx="1200" cy="650" r="380" fill="#0EA5E9" opacity=".8" />
      <circle cx="700" cy="1050" r="320" fill="#9333EA" opacity=".7" />
      <circle cx="1600" cy="950" r="300" fill="#7C3AED" opacity=".8" />
    </svg>
  );
};

export default Blur;
