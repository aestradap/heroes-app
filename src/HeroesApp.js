import React from 'react'
import {AppRouter} from "./routers/AppRouter";
import {BrowserRouter} from "react-router-dom";

export const HeroesApp = () => {
    return (
        <BrowserRouter>
            <AppRouter/>
        </BrowserRouter>
    )

}
