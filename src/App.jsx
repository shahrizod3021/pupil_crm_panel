import {BrowserRouter, Route, Routes} from "react-router-dom";
import {PupilLayout} from "./layout/PupilLayout.jsx";
import {Basic} from "./pages/Basic.jsx";
import {Login} from "./pages/Login.jsx";
import {ForbiddenPage} from "./component/ForbiddenPage.jsx";
import {NotFoundPage} from "./component/NotFoundPage.jsx";
import {MyWallet} from "./pages/MyWallet.jsx";

export const App = () => {
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path={"/:username"} element={<PupilLayout/>}>
                        <Route index element={<Basic/>}/>
                        <Route path={"/:username/myWallet"} element={<MyWallet/>}/>
                    </Route>
                    <Route path={"/auth/login"} element={<Login/>}/>
                    <Route path={"/forbidden"} element={<ForbiddenPage/>}/>
                    <Route path={"*"} element={<NotFoundPage/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}