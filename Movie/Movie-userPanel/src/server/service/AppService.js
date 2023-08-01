import {BaseConfig} from "../BaseConfig.js";
import {Api} from "../Api.js";
import {toast} from "react-toastify";

export const getMovie = async (setMovie) => {
    try {
        const res = await BaseConfig.doGet(Api.movie)
        setMovie(res.data)
    } catch (err) {
        toast.error(err.message)
    }
}

export const getOneMovie = async (id, setMovie) => {
    try {
        const res = await BaseConfig.doGet(Api.movie + "/" + id)
        setMovie(res.data)
    } catch (err) {
        toast.error(err.message)
    }
}
export const getCategories = async (setCategory) => {
    try {
        const res = await BaseConfig.doGet(Api.category)
        setCategory(res.data._embedded.list)
    } catch (err) {
        toast.error(err.message)
    }
}
export const getMovieByCategory = async (id, setMovies) => {
    try {
        const res = await BaseConfig.doGet(Api.movie + "/category/" + id)
        setMovies(res.data)
    } catch (err) {
        toast.error(err.message)
    }
}
export const searchMovie = async (name, setMovie) => {
    try {
        const res = await BaseConfig.doGet(Api.movie + "/search?name=" + name)
        setMovie(res.data)
        console.log(res.data)
    } catch (err) {
        toast.error(err.message)
    }
}
export const sendComment = async (data) => {
    try {
        await BaseConfig.doPost(Api.comment, data)
        return  toast.success("izoh yuborildi")
    } catch (err) {
        console.log(err)
    }
}
export const getComment = async (id, setComment) => {
    try {
        const res = await BaseConfig.doGet(Api.comment + "/" + id)
        console.log(res)
        setComment(res.data)
    } catch (err) {
        console.log(err)
    }
}
