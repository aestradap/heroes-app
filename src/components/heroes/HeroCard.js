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
        <div className="card mb-3 me-3 p-0" style={{maxWidth: 350}}>
            <div className="row g-0">
                <div className="col-md-4 ">
                    <img src={`docs/assets/heroes/${id}.jpg`}
                         className="img-fluid rounded-start"
                         alt="..."
                    />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
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
        </div>
    )
}
