import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CurrentDate from './DateCurrent';
import { ActivityContext } from './ActivityContext'; // Import the shared context
import Navbar from './Navbar';
import FitnessContainer from './FitnessContainer';


const ProgessData = () => {
    const { activities } = useContext(ActivityContext); // Fetch shared activities from context

    return (
        <>
            <Navbar />
            <FitnessContainer />
            <div className='container'>
                <div className='table-header mt-5'>
                    <div className='row'>
                        <div className='col-4'>
                            <CurrentDate />
                        </div>
                        <div className='col-6 text-end'>
                            <Link to={"/LogActivity"}>
                                <button
                                    type="button"
                                    className="btn btn-secondary me-3">
                                    LOG STEPS
                                </button>
                            </Link>
                            <Link to={"/LogActivityCreate"}>
                                <button
                                    type="button"
                                    className="btn btn-secondary">
                                    LOG ACTIVITY
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <table className="table mt-4">
                    <thead>
                        <tr className='table-info'>
                            <th scope="col">ACTIVITY</th>
                            <th scope="col">DURATION</th>
                            <th scope="col">CALORIES BURNT</th>
                            <th scope="col">WHEN</th>
                        </tr>
                    </thead>
                    <tbody>
                        {activities.length > 0 ? (
                            activities.map((activity, index) => (
                                <tr key={index}>
                                    <td>{activity.activity}</td>
                                    <td>{activity.duration}</td>
                                    <td>{activity.calories}</td>
                                    <td>{activity.when}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="text-center">No data available. Log your activity!</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default ProgessData;
