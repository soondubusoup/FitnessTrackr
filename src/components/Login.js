import React, {useState,useContext, useEffect} from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { login } from '../util/index';


const { REACT_APP_BASE_URL } = process.env;



const Login = ({setMango}) => {
    const params = useParams();
    const history = useHistory();

    const {isLoggedIn, setIsLoggedIn, setUserToken, setUser} = useContext(UserContext)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    console.log('params: ', params);

    const handleLogin = async (event) => {
    
        event.preventDefault();
        try {
            const user = await login({username, password});
            if (user) {
                localStorage.setItem('token', user.token);
                setMango(user.user.username)
                setUsername('');
                setPassword('');
                history.push('/');
            };
        } catch (error) {
            console.error (error);
        };        
    };

    useEffect(async ()=>{
        if (isLoggedIn===true){
            // sends the user back to home when signed in. 
            history.push("/")
        }
    }, [isLoggedIn])

    return<>
        <h1>Please login below! (: {params.method}</h1>
        <form onSubmit={handleLogin}>
            <input type="text" placeholder="username" 
            onChange={(event)=> setUsername(event.target.value)}></input>
            <hr></hr>
            <input type="password" placeholder="password" 
            onChange={(event)=> setPassword(event.target.value)}></input>
            <hr></hr>
            <button type="submit">Submit</button>

        </form>
    </>
}

export default Login;