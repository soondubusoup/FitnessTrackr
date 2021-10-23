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
import { getAllRoutines, getAllActivities, getUserRoutinesWithToken }  from './util';

const App = () => {
    const token = localStorage.getItem('token')

    const params = useParams();
    // const [setUserToken, setIsLoggedIn]  = useContext(UserContext)
    const [routines, setRoutines] = useState([]);
    const [activities, setActivities] = useState([]);
    const [userRoutines, setUserRoutines] = useState([]);
    const [mango, setMango] = useState('');
    
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

    const fetchUserRoutines = async () => {
        try { 
            const userRoutines = await getUserRoutinesWithToken (mango, token);
           
         if(userRoutines) {
           setUserRoutines(userRoutines)
            return userRoutines
         }  
        }catch (error) {
            console.error(error);
        }
    }
    const props = {
        routines,
        setRoutines,
        activities,
        setActivities,
        userRoutines,
        setUserRoutines,
        mango,
        setMango,
        fetchRoutines,
        fetchUserRoutines
        

    }
    useEffect (() => {
        try {
            fetchRoutines();
            fetchActivities();
            fetchUserRoutines();
        }catch (error) {
            console.error (error)
        }
    } ,[token])

    // useEffect(() => {
    //     const foundToken = localStorage.getItem('token');
    //     if (foundToken) {
    //         setToken(foundToken);
    //     };
    // });

    return (
        <>
        <Route exact path='/'>
            <Home {...props} />
        </Route>
        <Route exact path='/profile'>
            <Profile {...props}/>
        </Route>
        <Route exact path='/users/login'>
            <Login {...props}/>
        </Route>
        <Route exact path='/users/register'>
            <Register {...props} />
        </Route>
        <Route exact path='/activities'>
            <Activities {...props} />
        </Route>
        <Route path='/routines'>
            <Routines {...props} /> 
        </Route>
        <Route path='/user/routines'>
            <MyRoutines {...props}/>
        </Route>
        </>
    )
}

export default App;