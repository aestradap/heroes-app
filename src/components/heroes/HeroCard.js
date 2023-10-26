import React from 'react'
import {Link} from "react-router-dom";

export const HeroCard = ({
                             id,
                             superhero,
                             alter_ego,
                             first_appearance,
                             characters
                         }) => {

    return (
        <div className="col-sm-4 col-md-3 py-3">
            <div className="card border-primary">
                <div className="card-body">
                    <img src={`./assets/heroes/${id}.jpg`} className="card-img"/>
                    <h4 className="card-title">{superhero}</h4>
                    <p className="card-text">{alter_ego}</p>
                    {
                        (alter_ego != characters)
                        && <p className="card-text">
                            {characters}
                        </p>
                    }
                    <p className="card-text">
                        <small className="text-muted">{first_appearance}</small>
                    </p>
                    <Link to={`/hero/${id}`} className="btn btn-outline-secondary">
                        Mas...
                    </Link>
                </div>
            </div>
        </div>
    )
}
