import {Link, useParams} from "react-router-dom";
import {getMovieByCategory} from "../server/service/AppService.js";
import {useEffect, useState} from "react";
import {Api} from "../server/Api.js";
import {Loading} from "../Component/Loading.jsx";

export const Category = () => {
    const id = useParams().name
    const [movie, setMovie] = useState([])
    const [loading, setLoading] = useState(false)
    const getAll = async () => {
        try {
            await getMovieByCategory(id, setMovie)
            setLoading(true)
        } catch (err) {
            console.log("")
        }
    }
    useEffect(() => {
        getAll()
    }, [])
    return (
        <>
            {loading ? (
                <main  id="main">
                    {movie.map((item) => (
                        <div  style={{marginLeft: "30px"}}>
                            <div className="poster">
                                <div className="flip-card_i">
                                    <div className="flip-card-inner_i" style={{borderRadius: "30px"}}>
                                        <div className="flip-card-front_i">
                                            <img src={Api.downloadPhoto + item.photoId} alt="Avatar"
                                                 style={{width: "250px", height: "360px"}}/>
                                        </div>
                                        <div className="flip-card-back_i">
                                            <h3>{item.name}</h3>
                                            <div className="btnContainer">
                                                <p> yili: <br/>{item.year}</p>
                                            </div>
                                            <p className="para_i"> film haqida:<br/>{item.description}</p>
                                            <Link to={"/movie/" + item.id} style={{textDecoration: "none"}}
                                                  className="btn btn b4_i text-center m-2 ">▶Play
                                            </Link>
                                        </div>
                                        <div className="flim">
                                            <b>{item.name}</b>
                                            IMDb - 9.0
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </main>

            ) : (
                <Loading/>
            )
            }

        </>
    )
}