import React, { createContext, useState } from 'react';

// Create the context
export const ActivityContext = createContext();

const ActivityProvider = ({ children }) => {
    const [activities, setActivities] = useState([]);

    const addActivity = (activityData) => {
        setActivities((prevActivities) => [...prevActivities, activityData]);
    };

    return (
        <ActivityContext.Provider value={{ activities, addActivity }}>
            {children}
        </ActivityContext.Provider>
    );
};

export default ActivityProvider; // Default export
