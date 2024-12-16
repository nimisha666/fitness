import React, { useEffect, useState } from "react";
import RunImage from "../images/run.png";
import CalsBurnt from "../images/metabolism.png";
import GoalWeight from "../images/weight.png";
import ProgressBar from "./ProgressBar";

export default function FitnessContainer() {
    const [progress, setProgress] = useState({
        stepProgress: 0,
        calorieProgress: 0,
        weightProgress: 0,
    });

    useEffect(() => {

        const activities = JSON.parse(localStorage.getItem('activities')) || [];
        if (activities.length > 0) {
            const latestActivity = activities[activities.length - 1];
            setProgress({
                stepProgress: latestActivity.stepProgress,
                calorieProgress: latestActivity.calorieProgress,
                weightProgress: latestActivity.weightProgress,
            });
        }
    }, []);

    return (
        <div className="container mt-5">
            <h3>My Lifetime Stats</h3>
            <div className="d-flex justify-content-between mt-4 flex-wrap">

                <div className="col-3">
                    <div className="mx-auto bg-sky rounded-xl p-3">
                        <div className="d-flex align-content-between justify-content-around flex-wrap">
                            <div className="text-center">
                                <img src={RunImage} alt="Run" className="card-img" />
                                <div className="text-blue mt-3">Steps</div>
                            </div>
                            <div className="ms-5">
                                <ProgressBar progress={progress.stepProgress} stroke="rgba(209, 249, 255, 0.491)" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-3">
                    <div className="mx-auto bg-pink rounded-xl p-3">
                        <div className="d-flex align-content-between justify-content-around flex-wrap">
                            <div className="text-center">
                                <img src={CalsBurnt} alt="Calories Burnt" className="card-img" />
                                <div className="text-pink mt-3">Calories Burned</div>
                            </div>
                            <div className="ms-4">
                                <ProgressBar progress={progress.calorieProgress} progressColor="#ff4081" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-3">
                    <div className="mx-auto bg-green rounded-xl p-3">
                        <div className="d-flex align-content-between justify-content-around flex-wrap">
                            <div className="text-center">
                                <img src={GoalWeight} alt="Goal Weight" className="card-img" />
                                <div className="text-green mt-3">Weight Goal</div>
                            </div>
                            <div className="ms-5">
                                <ProgressBar progress={progress.weightProgress} progressColor="#4caf50" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
