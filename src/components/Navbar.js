import React from "react"
import logo from "../images/logo.png"

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid container">
                <a className="navbar-brand" href="/">
                    <img src={logo} alt="Run" className="logo" />
                </a>
                <button className="navbar-toggler" type="button"
                    data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse ps-3 " id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" href="/">Workouts</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Yoga</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Cycling</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

























