import React, { useState } from 'react';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';

const LogActivityCreate = () => {
    const [workoutName, setWorkoutName] = useState('');
    const [startTime, setStartTime] = useState('');
    const [date, setDate] = useState('');
    const [activity, setActivity] = useState('Choose...');
    const [termsChecked, setTermsChecked] = useState(false);

    const navigate = useNavigate();

    // Handle input change
    const handleChange = (event) => {
        const { id, value, type, checked } = event.target;
        if (type === 'checkbox') {
            setTermsChecked(checked);
        } else {
            if (id === 'workoutName') setWorkoutName(value);
            if (id === 'startTime') setStartTime(value);
            if (id === 'date') setDate(value);
            if (id === 'activity') setActivity(value);
        }
    };

    // Handle form submit
    const handleSubmit = (event) => {
        event.preventDefault();

        // Save data to localStorage
        const formData = {
            workoutName,
            startTime,
            date,
            activity,
            termsChecked
        };

        // Get existing data from localStorage or start fresh
        const savedData = JSON.parse(localStorage.getItem('activities')) || [];
        savedData.push(formData);

        // Save updated data to localStorage
        localStorage.setItem('activities', JSON.stringify(savedData));

        // Navigate to ActivityTable page
        navigate('/ActivityTable');
    };

    return (
        <>
            <Navbar />
            <div className='container'>
                <div className='m-auto mt-5 col-6 card p-4'>
                    <h3 className='pageTitle'>Log Manually</h3>
                    <form className="row g-3" onSubmit={handleSubmit}>
                        <div className="col-12">
                            <label htmlFor="workoutName" className="form-label">Workout name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="workoutName"
                                value={workoutName}
                                onChange={handleChange}
                                placeholder="Enter Workout Name"
                            />
                        </div>
                        <div className="col-6">
                            <label htmlFor="startTime" className="form-label">Start time</label>
                            <input
                                type="time"
                                className="form-control"
                                id="startTime"
                                value={startTime}
                                onChange={handleChange}
                                placeholder="Enter Start time"
                            />
                        </div>
                        <div className="col-6">
                            <label htmlFor="date" className="form-label">Date</label>
                            <input
                                type="date"
                                className="form-control"
                                id="date"
                                value={date}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="activity" className="form-label">Activity</label>
                            <select
                                id="activity"
                                className="form-select"
                                value={activity}
                                onChange={handleChange}
                            >
                                <option>Choose...</option>
                                <option>Run</option>
                                <option>Bike Ride</option>
                                <option>Walk</option>
                                <option>Hike</option>
                                <option>GYM Workout</option>
                                <option>Sports / Other Activity</option>
                            </select>
                        </div>
                        <div className="col-12">
                            <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="termsChecked"
                                    checked={termsChecked}
                                    onChange={handleChange}
                                />
                                <label className="form-check-label" htmlFor="termsChecked">
                                    Check me out
                                </label>
                            </div>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default LogActivityCreate;
