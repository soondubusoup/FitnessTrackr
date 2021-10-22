import React,{useContext, useEffect, useState} from 'react';
import { Route } from 'react-router';
import {UserContext} from './context/UserContext';
import {useParams} from 'react-router';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login'
import Profile from './components/Profile';
import Activities from './components/Activities';
import Routines from './components/Routines';
import MyRoutines from './components/MyRoutines';
import SingleRoutines from './components/SingleRoutine';
import { getAllRoutines, getAllActivities }  from './util';

const App = () => {
    const params = useParams();
    // const [setUserToken, setIsLoggedIn]  = useContext(UserContext)
    const [routines, setRoutines] = useState([]);
    const [activities, setActivities] = useState([]);
    const fetchRoutines = async () => {
        try {
            const fetchedRoutines = await getAllRoutines ();
            if (fetchedRoutines) {
                

                setRoutines(fetchedRoutines)
            }
            return fetchedRoutines
        } catch (error) {
            console.error(error);
        };
    };
    const fetchActivities = async () => {
        try {
            const fetchedActivities = await getAllActivities ();
            if (fetchedActivities) {
                

                setActivities(fetchedActivities)
            }
            return fetchedActivities
        } catch (error) {
            console.error(error);
        };
    };
    const props = {
        routines,
        setRoutines,
        activities,
        setActivities

    }
    useEffect (() => {
        try {
            fetchRoutines();
            fetchActivities();
        }catch (error) {
            console.error (error)
        }
    } ,[])
    return (
        <>
        <Route exact path='/'>
            <Home />
        </Route>
        <Route exact path='/profile'>
            <Profile/>
        </Route>
        <Route exact path='/users/:method'>
            {
            params.method==='login' ? <Login {...props}  /> : <Register /> 
            }   
        </Route>
        {/* <Route exact path='/users/:method'>
        <Login {...props} />
        </Route> */}
        <Route exact path='/activities'>
            <Activities {...props} />
        </Route>
        <Route path='/routines'>
            <Routines {...props} /> 
        </Route>
        <Route path='/myroutines'>
            <MyRoutines/>
        </Route>
        </>
    )
}

export default App;