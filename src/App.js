import React,{useContext, useEffect} from 'react';
import { Route } from 'react-router';
import {UserContext} from './context/UserContext';
import {useParams} from 'react-router';
import Homepage from './components/Homepage';
import Register from './components/Register';
import Profile from './components/Profile';
import Activities from './components/Activities';
import Routines from './components/Routines';
import MyRoutines from './components/MyRoutines';
import SingleRoutines from './components/SingleRoutine';

const App = () => {
    const params = useParams();
    const {setUserToken, setIsLoggedIn } = useContext(UserContext)
    return (
        <>
        <Route exact path='/'>
            <Homepage />
        </Route>
        <Route exact path='/profile'>
            <Profile/>
        </Route>
        <Route exact path='/users/:method'>
            {
            params.method==='login' ? <Login  /> : <Register /> 
            }   
        </Route>
        <Route exact path='/activities'>
            <Activities/>
        </Route>
        <Route path='/routines'>
            <Routines/>
        </Route>
        <Route path='/myroutines'>
            <MyRoutines/>
        </Route>
        </>
    )
}

export default App;