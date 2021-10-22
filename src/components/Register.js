import React, {useState} from 'react';
import { useParams, useHistory } from 'react-router';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { register } from '../util/index';


const { REACT_APP_BASE_URL } = process.env;

const Register = () => {
    const {isLoggedIn, setIsLoggedIn, setUserToken, setUser} = useContext(UserContext)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const params = useParams();
    const history = useHistory();
    console.log('params: ', params);


    return<>
        <h1>{params.method}</h1>
        <form onSubmit={async (event) => {
            event.preventDefault();
            const fetchUrl = `${REACT_APP_BASE_URL}/users/${params.method}`

        if (params.method=='register') {
            const registerData = await register({username:username, password:password})
            if(registerData && !registerData.name) {
                localStorage.setItem("userToken", registerData.token);
                setUserToken(registerData.token)
                setIsLoggedIn(true)
                setUser(username)
            }else{
                alert('Make sure password has a length of 8 or more (:')
            }
        }

        }}>
            <input type="text" placeholder="username" 
            onChange={(event)=> setUsername(event.target.value)}></input>
            <hr></hr>
            <input type="password" placeholder="password" 
            onChange={(event)=> setPassword(event.target.value)}></input>
            <hr></hr>
            {
                params.method === 'Register' ? <div>Register Input</div> : ''
            }

            <button type="submit">Submit</button>

        </form>
    </>
}

export default Register;