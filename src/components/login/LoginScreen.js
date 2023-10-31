import React, {useContext} from 'react';
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../../auth/AuthContext";
import {types} from "../../types/types";

export const LoginScreen = () => {

    const {dispatch} = useContext(AuthContext);


    const navigate = useNavigate();
    const lastPath = localStorage.getItem('lastPath') || '/';
    const searchText = localStorage.getItem('searchText') || ''
    const handleLogin = () => {
        // navigate('/', { replace: true });
        // navigate('/');

        dispatch({
            type: types.login,
            payload: {name: 'Alain'}
        })
        navigate(`${lastPath}?q=${searchText}`, {replace: true});
    }

    return <div className="container mt-5">
        <h1>Login</h1>
        <hr/>

        <button
            className="btn btn-primary mt5"
            onClick={handleLogin}
        >
            Login
        </button>

    </div>

}
