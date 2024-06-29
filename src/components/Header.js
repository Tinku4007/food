import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.clear("token")
        navigate("/login")
    }
    const handleCart = () => {
        navigate("/cart")
    }
    return (
        <nav className="navbar navbar-expand-lg bg-success navbar-dark">
            <div className="container-fluid">
                <Link className="navbar-brand fs-1 fs-italic" to="/">GoFood</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2">
                        <li className="nav-item">
                            <Link className="nav-link fs-5 text-white" aria-current="page" to="/">Home</Link>
                        </li>
                        {
                            (localStorage.getItem("token")) ?
                                <li className="nav-item">
                                    <Link className="nav-link fs-5 text-white" aria-current="page" to="/">My Order</Link>
                                </li>
                                : ""
                        }
                    </ul>

                    {
                        (!localStorage.getItem("token")) ?
                            <div className="d-flex">
                                <Link className="btn bg-white text-success mx-1" aria-current="page" to="/login">Login</Link>
                                <Link className="btn bg-white text-success mx-1" aria-current="page" to="/signup">Sign up</Link>
                            </div>
                            :
                            <>
                                <div onClick={handleCart} className="d-flex btn bg-white text-success mx-1">
                                    My Cart
                                </div>
                                <div className="d-flex btn bg-danger text-white mx-1" onClick={handleLogout}>
                                    logout
                                </div>
                            </>
                    }



                </div>
            </div>
        </nav>
    )
}

export default Header