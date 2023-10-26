import React from 'react'
import {Routes, Route, Outlet, Link} from "react-router-dom";
import {LoginScreen} from "../components/login/LoginScreen";
import {MarvelScreen} from "../components/marvel/MarvelScreen";
import {DcScreen} from "../components/dc/DcScreen";
import {Navbar} from "../components/ui/NavBar";
import {HeroesScreen} from "../components/heroes/HeroesScreen";

export const AppRouter = () => {
    return <div>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<MarvelScreen/>}/>
                <Route path="dc" element={<DcScreen/>}/>
                <Route path="marvel" element={<MarvelScreen/>}/>
                <Route path="hero/:heroeId" element={<HeroesScreen/>}/>

                <Route path="*" element={<NoMatch/>}/>
            </Route>
            <Route path="login" element={<LoginScreen/>}/>
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



