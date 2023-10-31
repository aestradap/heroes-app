import React, {useMemo} from 'react'
import queryString from 'query-string';
import {HeroCard} from "../heroes/HeroCard";
import {useForm} from "../../custom-hooks/useForm";
import {useLocation, useNavigate} from "react-router-dom";
import {getHeroesByName} from "../../selectors/getHeroesByName";

export const SearchScreen = () => {

    const navigate = useNavigate();

    const location = useLocation();
    const {q} = queryString.parse(location.search);
    const initialForm = {
        searchText: q
    };

    const [formValues, handleInputChange, reset] = useForm(initialForm);
    const {searchText} = formValues;

    const heroesFiltered = useMemo(() => getHeroesByName(searchText), [q]);

    const handleSearch = (e) => {
        e.preventDefault();
        navigate(`?q=${searchText}`);
        localStorage.setItem('searchText',searchText);
    }

    return <div>
        <h1>SearchScreen</h1>
        <hr/>
        <div className="row">
            <div className="col-5">
                <h4>Search Form</h4>
                <hr/>
                <form onSubmit={handleSearch}>
                    <input
                        type="text"
                        placeholder="Find your hero"
                        className="form-control"
                        autoComplete="off"
                        name="searchText"
                        value={searchText}
                        onChange={handleInputChange}
                    />
                    <button
                        type="submit"
                        className="btn mt-3 btn-block btn-outline-primary"
                        onClick={handleSearch}
                    >
                        Search
                    </button>
                </form>


            </div>
            <div className="col-7">
                <h4>Results</h4>
                <hr/>

                {
                    (q === "")
                    &&
                    <div className="alert alert-info">
                        Search a Hero
                    </div>
                }

                {
                    (q !== '' && heroesFiltered.length === 0)
                    &&
                    <div className="alert alert-danger">
                        There is no a hero with {q}
                    </div>
                }


                {
                    heroesFiltered.map(hero => (
                        <HeroCard
                            key={hero.id}
                            {...hero}
                        />
                    ))
                }
            </div>
        </div>


    </div>


}
