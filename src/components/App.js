import React,{useContext, useEffect, useState} from 'react';
import { Route, Link } from 'react-router-dom';
import {UserContext} from '../context/UserContext';
import {useParams, useHistory} from 'react-router';
import Home from './Home';
import Register from './Register';
import Login from './Login'
import Profile from './Profile';
import Activities from './Activities';
import Routines from './Routines';
import MyRoutines from './MyRoutines';
import SingleRoutines from './SingleRoutine';
import { getAllRoutines, getAllActivities, getUserRoutinesWithToken }  from '../util';


const App = () => {
    const token = localStorage.getItem('token')

    const params = useParams();
    // const [setUserToken, setIsLoggedIn]  = useContext(UserContext)
    const [routines, setRoutines] = useState([]);
    const [activities, setActivities] = useState([]);
    const [userRoutines, setUserRoutines] = useState([]);
    const [mango, setMango] = useState('');
    

    const history = useHistory();
    
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
        fetchUserRoutines,
        fetchActivities
        

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

    return <>
        <header className='site-header'>
            <div className='logo'>Fitness Trac.kr</div>
            <div className='link-bar'>
                <Link to='/' className='nav-link'>Home</Link>
                <Link to='/routines' className='nav-link'>Routines</Link>
                {
                 token ? <Link to='/user/routines' className='nav-link'>My Routines</Link> : null  
                }
                <Link to='/activities' className='nav-link'>Activities</Link>
                {
                 token 
                    ? <button className='logout' onClick={() => {
                        localStorage.removeItem('token');
                        localStorage.removeItem('username');
                        localStorage.removeItem('userId');
                        setMango('');
                        // setToken('');
                        setUserRoutines([]);
                        history.push('/');
                    }}>Log out</button>
                    : <Link to='/users/login' className='nav-link'>Login</Link>                 

                }
            </div>
        </header>

        <main>
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
        </main>
    </>;
};

export default App;