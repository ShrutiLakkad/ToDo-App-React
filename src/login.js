import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './login.css';

const Login = () => {
    const [name, setName] = useState("");
    const [fullName, setFullName] = useState("");
    const [lastName, setLastName] = useState();
    const [lastNameNew, setLastNameNew] = useState("");


    const inputEvent = (event) => {
        console.log(event.target.value);
        setName(event.target.value);
    }

    const inputEventTwo = (event) => {
        console.log(event.target.value);
        setLastName(event.target.value);
    }

    const onSubmits = (event) => {
        event.preventDefault();
        setFullName(name);
        setLastNameNew(lastName);
    }

    return (
        <>
            {/* <div className='main-div'> */}
            <form onSubmit={onSubmits}>
                <div className='contain'>
                    <h1 className='textName'>Hello {fullName} {lastNameNew} </h1>
                    <input className='firstInput' type="text" placeholder='Enter Your Name' onChange={inputEvent} value={name} />
                    <br />
                    <input className='firstInput' type="text" placeholder='Enter Your Last Name' onChange={inputEventTwo} value={lastName} />

                    <button className="submit-btn" type="submit">Submit Me</button>
                    <div className="newBtn">
                        <NavLink to="/todo">
                            <button className="keep-btn">Keep Going</button>
                        </NavLink>
                    </div>
                </div>
            </form>
            {/* </div> */}
        </>
    )
}

export default Login;