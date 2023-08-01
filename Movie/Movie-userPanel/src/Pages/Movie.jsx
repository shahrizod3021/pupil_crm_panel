import {getComment, getMovieByCategory, getOneMovie, sendComment} from "../server/service/AppService.js";
import {useEffect, useState} from "react";
import {Link, useLocation, useParams} from "react-router-dom";
import {Api} from "../server/Api.js";
import {Loading} from "../Component/Loading.jsx";
import {InputTextarea} from "primereact/inputtextarea";
import {toast} from "react-toastify";
import {Avatar} from "primereact/avatar";

export const Movie = () => {
    const loca = useLocation()
    const [movie, setMovie] = useState({})
    const [comments, setComment] = useState([])
    const [comment, setValue] = useState('')
    const [loading, setLoading] = useState(false)
    const [movies, setMovies] = useState([])
    const id = useParams().id
    const day = Date().substring(9, 11)
    const year = Date().substring(11, 15)
    console.log(day + " " + year)
    const getAll = async () => {
        try {
            await getComment(id, setComment)
            await getOneMovie(id, setMovie)
            setLoading(true)
            await getMovieByCategory(movie.category.id, setMovies)
            setLoading(true)
        } catch (err) {
            console.log("")
        }
    }
    const send = async () => {
        const movieId = id;
        if (comment.trim().length === 0) {
            toast.warn("izoh bo'sh bo'lmasin!")
        } else {
            const data = {
                comment, movieId
            }
            try {
                await sendComment(data)
                getAll()
                setValue(" ")
            } catch (err) {
                console.log("")
            }
        }
    }

    useEffect(() => {
        getAll()
    }, [])
    return (
        <div className={"container"}>
            {loading ? (
                <>
                    <div className="shadow card mb-3" id={"kino"} style={{maxWidth: " 540px"}}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={Api.downloadPhoto + movie.photoId} className="img-fluid rounded-start"
                                     alt={movie.name}/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <p className="card-title">Nomi: {" " + movie.name}</p>
                                    <p className="card-text">Davomiyligi: {" " + movie.duration}</p>
                                    <p className="card-text">Tili: {" " + movie.language}</p>
                                    <p className="card-text">Bo'limi: {" " + movie.category.name}</p>
                                    <p className="card-text">Davlat: {" " + movie.country}</p>
                                    <p className="card-text">Sanasi:{" " + movie.year}-yil</p>
                                    <p className="card-text">
                                        <small className="text-body-secondary">{" " + movie.description}</small></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={"container align-items-center form-control"}>
                        <video style={{width: "90%", marginLeft: "5%", marginTop: "100px"}}
                               className="object-fit-contain" controls={true}>
                            <source src={movie.movieId !== null ? Api.downloadPhoto + movie.movieId : ""}
                                    type={"video/mp4"}/>
                        </video>
                    </div>
                    <hr/>
                    <h2 className={"text-primary text-center"}>Shu Bo'limga tegishlilar</h2>
                    <main className={"row"} id="main">
                        {movies.map((item1) => (
                            item1.id !== movie.id ? (
                                <div className={"col"} style={{marginLeft: "30px"}}>
                                    <div className="poster">
                                        <div className="flip-card_i">
                                            <div className="flip-card-inner_i" style={{borderRadius: "30px"}}>
                                                <div className="flip-card-front_i">
                                                    <img src={Api.downloadPhoto + item1.photoId} alt="Avatar"
                                                         style={{width: "250px", height: "360px"}}/>
                                                </div>
                                                <div className="flip-card-back_i">
                                                    <h3>{item1.name}</h3>
                                                    <div className="btnContainer">
                                                        <p> yili: <br/>{item1.year}</p>
                                                    </div>
                                                    <p className="para_i"> film haqida:<br/>{item1.description}</p>
                                                    <Link to={"/movie/" + item1.id} style={{textDecoration: "none"}}
                                                          className="btn btn text-center m-2 ">▶Play
                                                    </Link>
                                                </div>
                                                <div className="flim">
                                                    <b>{item1.name}</b>
                                                    IMDb - 9.0
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                ""
                            )

                        ))}
                        <hr/>
                    </main>
                </>
            ) : (
                <Loading/>
            )}
            <div className={"border shadow m-3"}>
                <div className="hstack gap-3 m-2" style={{position: "relative"}}>
                    <input onChange={e => setValue(e.target.value)} className="form-control me-auto" type="text"
                           placeholder="Fikr bildiring!"
                           aria-label="Fikr bildiring!"/>
                    <button type="button" onClick={() => send()} className="btn btn-primary"><i
                        className="bi bi-send-check"></i></button>
                    <div className="vr"></div>
                </div>
                <div className={"border shadow"}>
                    {loading ? (
                        comments.length !== 0 ? (
                            comments.map(item => (
                                <div className={"border d-flex"}>
                                    <i className="bi bi-person-circle m-2 mt-0 mb-0"
                                       style={{fontSize: "40px", marginTop: "0px"}}></i>
                                    <small className={"text-primary"} style={{fontSize: "15px", marginLeft: "10px"}}>foydalanuvhi
                                        | {item.createAt.substr(0, 10)}</small>
                                    <p style={{
                                        fontSize: "18px",
                                        marginTop: "20px",
                                        marginLeft: "-12%"
                                    }}>{item.comment}</p>
                                </div>

                            ))) : (
                            <h3 className={"text-center text-primary"}>Hozircha izohlar yo'q</h3>
                        )
                    ) : (
                        <Loading/>
                    )
                    }

                </div>
            </div>
        </div>
    )
}
