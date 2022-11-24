import './App.css';
import Dashboard from "./Layout/Dashboard";

import {BrowserRouter, Route, Routes} from "react-router-dom";

import {connect, useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import SignIn from "./Pages/SignIn";
import Client from "./Pages/Client";
import Projects from "./Pages/Projects";
import Invoices from "./Pages/Invoices";

const mapStateToProps = (state) => {
    return {user: state.auth.isLoggedIn}
}

const App = (props) => {

    const [isAuth,setIsAuth]=useState(false)

    useEffect(()=>{


    },[props.user])

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={props.user ? <Dashboard/> : <SignIn />}>

                    <Route path="/" element={<Client/>}/>
                    <Route path="Clients" element={<Client/>}/>
                    <Route path="Projects" element={<Projects/>}/>
                    <Route path="Invoices" element={<Invoices/>}/>
                </Route>

            </Routes>
        </BrowserRouter>

    )
        ;
}


export default connect(mapStateToProps)(App)