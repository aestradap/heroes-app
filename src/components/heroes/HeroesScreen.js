import React from 'react'
import {Navigate, useParams} from "react-router-dom";
import {getHeroesById} from "../../selectors/getHeroById";


export const HeroesScreen = () => {

    const {heroeId} = useParams();

    const hero = getHeroesById(heroeId);
    if (!hero) {
        return <Navigate to='/'/>;
    }

    const {
        id,
        superhero,
        alter_ego,
        first_appearance,
        characters
    } = hero;

    return <>

        <div>Hero Screen</div>

    </>

}
