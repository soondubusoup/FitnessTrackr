import React from "react";
import ReactDOM from 'react-dom'
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from './context/UserContext';
import { App } from "./components";


const Index = ()=>{


    return(
        <BrowserRouter>
            <UserProvider>
                <App />
            </UserProvider>
        </BrowserRouter>
    )
}
ReactDOM.render(<Index />, document.getElementById('app'))
