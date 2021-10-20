import React, {userContext} from 'react';
import {BrowserRouter, Link } from 'react-router-dom'
import { UserContext } from './context/UserContext';

const Title = (props) => {
    return (
        <div id='container'>
        <header id="header">
            <h1>Fitness Tracker</h1>
        </header>

            <div id='navbar'>
                <Link to="/Home" style={{ color: '#ff1515'}}>Home</Link>
                <Link to="/activities" style={{ color: '#ff1515'}}>Activities</Link>
                <Link to="/routines" style={{ color: '#ff1515'}}>Routines</Link>
                <Link to="/users/login" style={{color: '#ff1515'}}>Login</Link>
                <Link to="/users/register" style={{color: '#ff1515'}}>Register</Link>

            </div>
        </div>
    )
}


export default Title;