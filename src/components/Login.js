// import React, {useState} from 'react';
// import { useParams, useHistory } from 'react-router-dom';
// import { useContext } from 'react';
// import { UserContext } from '../context/UserContext';
// import { login } from '../util/index';


// const { REACT_APP_BASE_URL } = process.env;

// const Login = () => {
//     const params = useParams();
//     const history = useHistory();

//     const {isLoggedIn, setIsLoggedIn, setUserToken, setUser} = useContext(UserContext)
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
  
//     console.log('params: ', params);

//     useEffect(async ()=>{
//         if (isLoggedIn===true){
//             // sends the user back to home when signed in. 
//             history.push("/")
//         }
//     }, [isLoggedIn])


//     return<>
//         <h1>{params.method}</h1>
//         <form onSubmit={async (event) => {
//             event.preventDefault();
//             const fetchUrl = `${REACT_APP_BASE_URL}/users/${params.method}`
            

//             if (params.method=='login') {
                
//                 const loginData = await login({username:username, password:password})
//                 console.log(loginData)
//                 if (loginData && !loginData.name) {
//                     localStorage.setItem("userToken", loginData.token);
//                     setUserToken(loginData.token)
//                     setIsLoggedIn(true)
//                     setUser(username)
                   
//                 }
//             }

//         }}>
//             <input type="text" placeholder="username" 
//             onChange={(event)=> setUsername(event.target.value)}></input>
//             <hr></hr>
//             <input type="password" placeholder="password" 
//             onChange={(event)=> setPassword(event.target.value)}></input>
//             <hr></hr>
//             {
//                 params.method === 'login' ? <div>Login Input</div> : ''
//             }
//             <button type="submit">Submit</button>

//         </form>
//     </>
// }

// export default Login;
import React, {useState} from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { login, register } from '../util'

const Login = ({setToken}) => {
    const params = useParams();
    const history = useHistory();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [verifyPassword, setVerifyPassword] = useState('')

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const user = await login({username, password});
            if (user) {
                console.log(user, 'mango')
                setToken(user.token)
                localStorage.setItem('token', user.token)
                setUsername('');
                setPassword('');
                history.push('/');
            };
        } catch (error) {
            console.error (error);
        };        
    };

    const handleRegister = async (event) => {
        event.preventDefault();
        try {
            const user = await register({username, password});
            if (user) {
                setToken(user.token)
                localStorage.setItem('token', user.token)
                setUsername('');
                setPassword('');
                history.push('/');
            };
        } catch (error) {
            console.error (error);
        };        
    };

    if (params.method === 'login') {
        return <>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input type='text' placeholder='enter your username' onChange={(event) => setUsername(event.target.value)}/>
                <input type='password' placeholder='enter your password' onChange={(event) => setPassword(event.target.value)}/>
                <button type='submit' disabled={password.length < 8}>Log in</button>
            </form>
        </>;
    };

    if (params.method === 'register') {
        return <>
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
                <input type='text' placeholder='choose your username' onChange={(event) => setUsername(event.target.value)}/>
                <input type='password' placeholder='choose your password' onChange={(event) => setPassword(event.target.value)}/>         
                <input type='password' placeholder='verify your password' onChange={(event) => setVerifyPassword(event.target.value)}/>
                <button type='submit' disabled={password.length < 8 || password.value || verifyPassword.value}>Register</button>
            </form>
        </>;
    }
}

export default Login;