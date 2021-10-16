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
    useEffect(() => {
        fetchRoutines();
      }, [token])
      return <div>
        Hello World
        <Route exact path='/'>
          <Home {...props}/>
        </Route>
        <Route exact path="/activities">
          <div>Activities</div>
        </Route>
        <Route exact path="/routines">
          <h1>Routines</h1>
          {
            routines.map((routine) => <div>{routine.name}</div>)
          }
        </Route>
      </div>
}

export default App;
