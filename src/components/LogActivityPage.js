import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ActivityContext } from './ActivityContext';
import Navbar from './Navbar';

const LogActivityPage = () => {
    const { addActivity } = useContext(ActivityContext); // Access context
    const [formData, setFormData] = useState({
        height: '',
        totalSteps: '',
        totalDistance: '',
        bodyWeight: '',
        gender: '',
    });
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { id, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newActivity = {
            activity: 'Walking',
            duration: `${formData.totalSteps} steps`,
            calories: `${Math.round(formData.totalDistance * formData.bodyWeight * 0.035)} kcal`,
            when: new Date().toLocaleString(),
        };
        addActivity(newActivity); // Add activity to context
        navigate('/ProgressData'); // Navigate to the table page
    };

    return (
        <>
            <Navbar />
            <div className='container'>
                <div className='m-auto mt-5 col-6 card p-4'>
                    <h3 className='pageTitle'>Log Steps Count</h3>
                    <form className="row g-3 mt-2" onSubmit={handleSubmit}>
                        <div className="col-md-12">
                            <label htmlFor="height" className="form-label">Height in CM</label>
                            <input
                                type="text"
                                className="form-control"
                                id="height"
                                value={formData.height}
                                onChange={handleChange}
                                placeholder='Enter Your Height in CM...'
                                required
                            />
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="totalSteps" className="form-label">Total Steps Walked</label>
                            <input
                                type="text"
                                className="form-control"
                                id="totalSteps"
                                value={formData.totalSteps}
                                onChange={handleChange}
                                placeholder='Total Steps Walked'
                                required
                            />
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="totalDistance" className="form-label">Total Distance Walked in KM</label>
                            <input
                                type="text"
                                className="form-control"
                                id="totalDistance"
                                value={formData.totalDistance}
                                onChange={handleChange}
                                placeholder='Enter Total Distance Walked in KM'
                                required
                            />
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="bodyWeight" className="form-label">Body Weight</label>
                            <input
                                type="text"
                                className="form-control"
                                id="bodyWeight"
                                value={formData.bodyWeight}
                                onChange={handleChange}
                                placeholder='Enter Your Weight'
                                required
                            />
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="gender" className="form-label">Gender</label>
                            <select
                                className="form-select"
                                id="gender"
                                value={formData.gender}
                                onChange={handleChange}
                                required
                            >
                                <option value="" disabled>Choose...</option>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </div>
                        <div className="col-12">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="invalidCheck2" required />
                                <label className="form-check-label" htmlFor="invalidCheck2">
                                    Agree to terms and conditions
                                </label>
                            </div>
                        </div>
                        <div className="col-12">
                            <button className="btn btn-secondary" type="submit">Submit form</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default LogActivityPage;