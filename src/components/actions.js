export const logActivity = (activity) => ({
    type: 'LOG_ACTIVITY',
    payload: activity
});

export const logSteps = (steps) => ({
    type: 'LOG_STEPS',
    payload: steps
});
