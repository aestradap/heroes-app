import React from 'react'
import {Navigate, useNavigate, useParams} from "react-router-dom";
import {getHeroesById} from "../../selectors/getHeroById";


export const HeroesScreen = () => {

    const {heroeId} = useParams();
    const navigate = useNavigate();

    const hero = getHeroesById(heroeId);
    if (!hero) {
        return <Navigate to='/'/>;
    }

    const {
        superhero,
        alter_ego,
        publisher,
        first_appearance,
        characters
    } = hero;

    const handleReturn = () => {
        // navigate(-1)   // v5's history.go(-1) or history.goBack()
        // navigate(1)    // v5's history.go(1) or history.goForward()
        // navigate(2)    // v5's history.go(2)
        // https://blog.logrocket.com/migrating-react-router-v6-guide/
        return navigate(-1);
    }

    return <>

        <div className="row mt-5">
            <div className="col-4">
                <img
                    src={`../assets/heroes/${heroeId}.jpg`}
                    alt={superhero}
                    className="img-thumbnail"
                />
            </div>
            <div className="col-8">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego: </b>{alter_ego}</li>
                    <li className="list-group-item"><b>Publisher: </b>{publisher}</li>
                    <li className="list-group-item"><b>First appearance:</b>{first_appearance}</li>
                </ul>

                <h5>Characters</h5>
                <p>{characters}</p>

                <button
                    className="btn btn-outline-info"
                    onClick={handleReturn}
                >
                    Return
                </button>

            </div>
        </div>

    </>

}
