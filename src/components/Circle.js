import React from "react";

const CircularProgressDial = ({
    size = 150,        // Diameter of the circle
    strokeWidth = 10,  // Width of the progress bar
    progress = 75,     // Percentage progress (0-100)
    trackColor = "none", // Color of the background track
    progressColor = "#4caf50", // Color of the progress stroke
    textColor = "#333",       // Color of the percentage text
}) => {
    // Calculate the radius and circumference
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;

    // Calculate the stroke-dashoffset based on progress
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
        <svg
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Background Track */}
            <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                stroke={trackColor}
                strokeWidth={strokeWidth}
                fill="none"
            />
            {/* Progress Circle */}
            <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                stroke={progressColor}
                strokeWidth={strokeWidth}
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                style={{ transition: "stroke-dashoffset 0.3s ease" }}
            />
            {/* Percentage Text */}
            <text
                x="50%"
                y="50%"
                dy=".3em"
                textAnchor="middle"
                fontSize="20px"
                fill={textColor}
            >
                {`${progress}%`}
            </text>
        </svg>
    );
};

export default CircularProgressDial;