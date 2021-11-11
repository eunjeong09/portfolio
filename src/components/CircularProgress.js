import React, { useEffect, useState } from "react";

const CircularProgress = ({ language, size, strokeWidth, percentage, color }) => {
  const [progress, setProgress] = useState(0);
//   const [language, setLanguage] = useState('');
  useEffect(() => {
    setProgress(percentage);
    console.log("useEffect");
    // setLanguage(language);
//   }, [percentage]);
  },[]);
  const viewBox = `0 0 ${size} ${size}`;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * Math.PI * 2;
  const dash = (progress * circumference) / 100;

  return (
    <svg style={{margin:"1rem"}} width={size} height={size} viewBox={viewBox}>
      <circle
        fill="none"
        stroke="#ccc"
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
      />
      <circle
        fill="none"
        stroke={color}
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeWidth={`${strokeWidth}px`}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
        strokeDasharray={[dash, circumference - dash]}
        strokeLinecap="round"
        style={{ transition: "all 0.5s" }}
      />
      <text
        // fill="black"
        fontSize="25px"
        x="50%"
        y="35%"
        dy="20px"
        textAnchor="middle"  
      >
        {`${language}`}
      </text>
      <text
        fill="black"
        fontSize="40px"
        x="50%"
        y="50%"
        dy="20px"
        textAnchor="middle"
      > 
        {`${percentage}%`}
      </text>
    </svg>
  );
};

export default CircularProgress;
