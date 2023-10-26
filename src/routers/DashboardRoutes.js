import React from 'react'
import {Navbar} from "../components/ui/NavBar";
import {Route, Routes} from "react-router-dom";
import {MarvelScreen} from "../components/marvel/MarvelScreen";
import {HeroesScreen} from "../components/heroes/HeroesScreen";
import {DcScreen} from "../components/dc/DcScreen";

export const DashboardRoutes = () => {
    return <>
        <Navbar/>
        <Routes>
            <Route path="marvel" element={<MarvelScreen/>}/>
            <Route path="hero/:heroeId" element={<HeroesScreen/>}/>
            <Route path="dc" element={<DcScreen/>}/>
        </Routes>

    </>
}
