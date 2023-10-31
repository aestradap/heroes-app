import React from 'react'
import PropTypes from "prop-types";
import {Navigate} from "react-router-dom";

export const PublicRoute = ({
                                isAuthenticated,
                                redirectPath = '/',
                                children}) => {
    if (isAuthenticated) {
        return <Navigate to={redirectPath} replace />;
    }
    return children;
}

PublicRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
}
