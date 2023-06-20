import {GetOneTeacher, MyMessage} from "../service/Service.js";
import {useEffect, useState} from "react";
import {Loading} from "./Loading.jsx";
import {Link} from "react-router-dom";
import {Apis} from "../service/Apis.js";

export const Navbar = () => {
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState([])
    const [teacher, setTeacher] = useState({})
    const getMyAccount = async () => {
        await MyMessage(localStorage.getItem("dataTeacher"), setMessage)
        await GetOneTeacher(localStorage.getItem("dataTeacher"), setTeacher)
        setLoading(true);
    }
    useEffect(() => {
        getMyAccount()
    }, [])

    function slideSide() {
        document.getElementById('slide').classList.toggle('layout-menu-expanded')
    }

    return (
        <div>
            {loading ? (
                <>
                    <nav
                        className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
                        id="layout-navbar"
                    >
                        <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
                            <a onClick={slideSide} className="nav-item nav-link px-0 me-xl-4" href="#">
                                <i className="bx bx-menu bx-sm"></i>
                            </a>
                        </div>

                        <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
                            <div className="navbar-nav align-items-center">
                                <div className="nav-item d-flex align-items-center">
                                    <i className="bx bx-search fs-4 lh-0"></i>
                                    <input
                                        type="text"
                                        className="form-control border-0 shadow-none"
                                        placeholder="Search..."
                                        aria-label="Search..."
                                    />
                                </div>
                            </div>

                            <ul className="navbar-nav flex-row align-items-center ms-auto">

                                <li className="nav-item navbar-dropdown dropdown-user dropdown">
                                    <a className="nav-link dropdown-toggle hide-arrow" href="#"
                                       data-bs-toggle="dropdown">
                                        <div className="avatar avatar-online">
                                            <img src={Apis.getContent + teacher.img} alt={teacher.data.name}
                                                 className="w-px-40 h-auto rounded-circle"/>
                                        </div>
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-end">
                                        <li>
                                            <a className="dropdown-item" href="#">
                                                <div className="d-flex">
                                                    <div className="flex-shrink-0 me-3">
                                                        <div className="avatar avatar-online">
                                                            <Link to={'/upload'} className={"link-light"}>
                                                                <img src={Apis.getContent + teacher.data.img}
                                                                     alt={teacher.data.name}
                                                                     className="w-px-40 h-auto rounded-circle"/>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <span
                                                            className="fw-semibold d-block">{teacher.data.name} {teacher.data.userSurname}</span>
                                                        <small className="text-muted">{teacher.data.username}</small>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <div className="dropdown-divider"></div>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item"
                                                  to={"/" + teacher.data.username + "/myProfile"}>
                                                <i className="bx bx-user me-2"></i>
                                                <span className="align-middle">Mening accountim</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item"
                                                  to={"/" + teacher.data.username + "/settings"}>
                                                <i className="bx bx-cog me-2"></i>
                                                <span className="align-middle">Sozlamalar</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="dropdown-item" to="">
                        <span className="d-flex align-items-center align-middle">
                          <i className="flex-shrink-0 bx bx-credit-card me-2"></i>
                          <span className="flex-grow-1 align-middle">Habarlar</span>
                          <span
                              className="flex-shrink-0 badge badge-center rounded-pill bg-danger w-px-20 h-px-20">{message.length}</span>
                        </span>
                                            </Link>
                                        </li>
                                        <li>
                                            <div className="dropdown-divider"></div>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="auth-login-basic.html">
                                                <i className="bx bx-power-off me-2"></i>
                                                <span className="align-middle">Chiqish</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </nav>

                </>
            ) : (
                <>
                    <Loading/>
                </>
            )}
        </div>
    )
}