import React from "react";
import ReactDOM from 'react-dom'
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from './context/UserContext';
import { App } from "./components";
// import Footer from "./Footer";
// import Nav from "./Nav";


const Index = ()=>{


    return(
        <BrowserRouter>
            <UserProvider>
                {/* <Nav /> */}
                <App />
                {/* <Footer /> */}
            </UserProvider>
        </BrowserRouter>
    )
}
ReactDOM.render(<Index />, document.getElementById('app'))
