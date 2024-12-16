import React from "react";

const ProgressBar = ({ progress, progressColor = "#007bff", stroke = "#ddd" }) => {
    return (
        <div style={{ width: "100px", height: "100px", position: "relative" }}>
            <svg width="100" height="100" viewBox="0 0 36 36">
                <path
                    d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke={stroke}
                    strokeWidth="2"
                />
                <path
                    d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831"
                    fill="none"
                    stroke={progressColor}
                    strokeWidth="2"
                    strokeDasharray={`${progress}, 100`}
                />
            </svg>
            <div
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    fontSize: "0.8rem",
                }}
            >
                {Math.round(progress)}%
            </div>
        </div>
    );
};

export default ProgressBar;
