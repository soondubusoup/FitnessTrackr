import React, {useState} from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { login } from '../util/index';


const { REACT_APP_BASE_URL } = process.env;

const Login = () => {
    const params = useParams();
    const history = useHistory();

    const {isLoggedIn, setIsLoggedIn, setUserToken, setUser} = useContext(UserContext)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    console.log('params: ', params);

    useEffect(async ()=>{
        if (isLoggedIn===true){
            // sends the user back to home when signed in. 
            history.push("/")
        }
    }, [isLoggedIn])


    return<>
        <h1>{params.method}</h1>
        <form onSubmit={async (event) => {
            event.preventDefault();
            const fetchUrl = `${REACT_APP_BASE_URL}/users/${params.method}`
            

            if (params.method=='login') {
                
                const loginData = await login({username:username, password:password})
                console.log(loginData)
                if (loginData && !loginData.name) {
                    localStorage.setItem("userToken", loginData.token);
                    setUserToken(loginData.token)
                    setIsLoggedIn(true)
                    setUser(username)
                   
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
                params.method === 'login' ? <div>Login Input</div> : ''
            }
            <button onClick={(event => setPassword(event))} type="submit">Submit</button>

        </form>
    </>
}

export default Login;
