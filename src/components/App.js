import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './HomePage';

import {
    Home
} from './';

const { REACT_APP_BASE_URL } = process.env;

const App = () => {
    const [routines, setRoutines] = useState([]);
    const [token, setToken] = useState([]);

    const fetchRoutines = async () => {
        const resp = await fetch(`${REACT_APP_BASE_URL}/routines`);
        const data = await resp.json();
        if(data) {
            setRoutines(data);
        }
    }    




    
}

