import React, { useState } from "react";

function DateNavigator() {
    // Initialize current date
    const [currentDate, setCurrentDate] = useState(new Date());

    // Function to format date as DD/MM/YYYY
    const formatDate = (date) => {
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    // Go to the next day
    const handleNext = () => {
        const newDate = new Date(currentDate);
        newDate.setDate(currentDate.getDate() + 1);
        setCurrentDate(newDate);
    };

    // Go to the previous day
    const handlePrev = () => {
        const newDate = new Date(currentDate);
        newDate.setDate(currentDate.getDate() - 1);
        setCurrentDate(newDate);
    };

    return (
        <div>
            <div>
                <button onClick={handlePrev} className="dateBtn">&#8249;</button>
                <span>{formatDate(currentDate)}</span>
                <button onClick={handleNext} className="dateBtn">&#8250;</button>
            </div>
        </div>
    );
}

export default DateNavigator;
