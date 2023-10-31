import React, {useContext} from 'react'
import {Routes, Route, Outlet, Link} from "react-router-dom";
import {LoginScreen} from "../components/login/LoginScreen";
import {MarvelScreen} from "../components/marvel/MarvelScreen";
import {DcScreen} from "../components/dc/DcScreen";
import {Navbar} from "../components/ui/NavBar";
import {HeroesScreen} from "../components/heroes/HeroesScreen";
import {SearchScreen} from "../components/search/SearchScreen";
import {PrivateRoute} from "./PrivateRoute";
import {PublicRoute} from "./PublicRoute";
import {AuthContext} from "../auth/AuthContext";

export const AppRouter = () => {

    const {user} = useContext(AuthContext);
    console.log(user.logget)


    return <div>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<MarvelScreen/>}/>
                <Route
                    path="dc"
                    element={
                        <PrivateRoute isAuthenticated={user.logget}>
                            <DcScreen/>
                        </PrivateRoute>
                    }
                />
                <Route
                    path="marvel"
                    element={
                        <PrivateRoute isAuthenticated={user.logget}>
                            <MarvelScreen/>
                        </PrivateRoute>
                    }
                />
                <Route
                    path="search"
                    element={
                        <PrivateRoute isAuthenticated={user.logget}>
                            <SearchScreen/>
                        </PrivateRoute>
                    }
                />
                <Route
                    path="hero/:heroeId"
                    element={
                        <PrivateRoute isAuthenticated={user.logget}>
                            <HeroesScreen/>
                        </PrivateRoute>
                    }
                />
                <Route
                    path="*"
                    element={
                        <PrivateRoute
                            isAuthenticated={user.logget}>
                            <NoMatch/>
                        </PrivateRoute>
                    }
                />

            </Route>
            <Route
                path="login"
                element={
                    <PublicRoute isAuthenticated={user.logget}>
                        <LoginScreen/>
                    </PublicRoute>
                }
            />
        </Routes>
    </div>
}

const Layout = () => {
    return (
        <div>
            <Navbar/>
            <div className='container mt-2'>
                <Outlet/>
            </div>
        </div>
    );
}

const NoMatch = () => {
    return (
        <div>
            <h2>Nothing to see here!</h2>
            <p>
                <Link to="/">Go to the home page</Link>
            </p>
        </div>
    );
}



