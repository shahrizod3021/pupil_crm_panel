import {SideBar} from "../component/SideBar.jsx";
import {Navbar} from "../component/Navbar.jsx";
import {ForbiddenPage} from "../component/ForbiddenPage.jsx";
import {Outlet} from "react-router-dom";

export const PupilLayout = () => {
    return(
        <div className={"layout-wrapper layout-content-navbar"}>
            {localStorage.getItem("dataPupil") !== null ? (
                <>
                    <div className={"layout-container"}>
                        <SideBar/>
                        <div className={"layout-page"}>
                            <Navbar/>
                            <div className={"content-wrapper"}>
                                <Outlet/>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
              <>
                <ForbiddenPage/>
              </>
            ) }

        </div>
    )
}