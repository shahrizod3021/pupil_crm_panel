import {useLocation, useParams} from "react-router-dom";

export const NotFound = () => {
    const p = useLocation()
    console.log(p)
    return (
        <div className={"text-center text-danger"}>
            404 not found
        </div>
    )
}