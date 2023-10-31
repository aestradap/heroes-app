import {useContext} from "react";
import {Link, NavLink, useNavigate} from 'react-router-dom';
import {AuthContext} from "../../auth/AuthContext";
import {types} from "../../types/types";


export const Navbar = () => {

    const {user: {name}, dispatch} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch({
            type: types.logout,
        })
        navigate('/');
    }

    function handleLogin() {
        navigate('/login');
    }

    return (

        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <Link
                    className="navbar-brand"
                    to="/"
                >
                    Asociaciones
                </Link>
                <div className="navbar-collapse">
                    <div className="navbar-nav">

                        <NavLink
                            className="nav-item nav-link"
                            to="/marvel"
                        >
                            Marvel
                        </NavLink>

                        <NavLink
                            className="nav-item nav-link"
                            to="/dc"
                        >
                            DC
                        </NavLink>

                        <NavLink
                            className="nav-item nav-link"
                            to="/search"
                        >
                            Search
                        </NavLink>
                    </div>
                </div>
                <div className="d-flex" role="search">
                    <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                        <ul className="navbar-nav ml-auto">

                            {!name
                                ?
                                <button
                                    type="button"
                                    className="btn btn-outline-info"
                                    onClick={handleLogin}
                                >
                                    Login
                                </button>
                                :
                                <>
                                    <span className="nav-item nav-link text-info">
                                     {name}
                                    </span>

                                    <button
                                        type="button"
                                        className="btn btn-outline-info"
                                        onClick={handleLogout}
                                    >
                                        Logout
                                    </button>
                                </>
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}