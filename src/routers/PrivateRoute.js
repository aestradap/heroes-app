import React from 'react'
import PropTypes from "prop-types";
import {Navigate, useLocation} from "react-router-dom";

export const PrivateRoute = ({
                                 isAuthenticated,
                                 redirectPath = '/login',
                                 children
                             }) => {

    const location = useLocation();
    localStorage.setItem('lastPath', location.pathname);

    if (!isAuthenticated) {
        return <Navigate to={redirectPath} replace/>;
    }
    return children;
}

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
}
