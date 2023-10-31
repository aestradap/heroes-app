import React, {useEffect, useReducer} from 'react'
import {AppRouter} from "./routers/AppRouter";
import {BrowserRouter} from "react-router-dom";
import {AuthContext} from "./auth/AuthContext";
import {authReducer} from "./auth/authReducer";


const init = () => {
    return JSON.parse(localStorage.getItem('user')) || {logged: false};
}

export const HeroesApp = () => {

    const [user, dispatch] = useReducer(authReducer, {}, init);
//the user is my state on authReducer
    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);


    return (
        <BrowserRouter>
            <AuthContext.Provider value={{user, dispatch}}>
                <AppRouter/>
            </AuthContext.Provider>
        </BrowserRouter>
    )

}
