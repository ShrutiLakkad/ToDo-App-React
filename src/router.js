import React from "react";
import { NavLink } from "react-router-dom";
import './router.css';

const Router = () => {
    return (
        <div className="main-quote">
            <div className="Quote">
                <p>
                    Put yourself at the top <br></br>
                    of your to-do list <br></br>
                    every single day and<br></br>
                    the rest will fall <br></br>
                    into place...
                </p>
            </div>
            <div className="gobtn">
                <NavLink to="/login">
                    <button className="aheadBtn">Go Ahead</button>
                </NavLink>
            </div>
        </div>
    )
}
export default Router;