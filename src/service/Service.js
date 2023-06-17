import axios from "axios";
import {BaseUrl} from "./BaseUrl.js";
import {App} from "../App.jsx";
import {Apis} from "./Apis.js";
import {isSuccess} from "./handler/isSuccess.js";
import {toast} from "react-toastify";

export const LoginJon = async (data) => {
    try {
        const res = await axios.post(BaseUrl + Apis.auth + "/pupil/login", data)
        if (isSuccess(res.status)) {
            localStorage.setItem("path", "/" + res.data.user.username)
            localStorage.setItem("dataPupil", res.data.user.id)
            return toast.success("logindan muvaffaqiyatli o'tdingiz. biroz kuting", true)
        }
    } catch (err) {
        localStorage.setItem("dataPupil", null)
        localStorage.setItem("path", '/forbidden')
    }
}

export const StatisticMyPayment = async (id, setData) => {
    try {
        const res = await axios.get(BaseUrl + Apis.statistic + "/myStatistic/" + id)
        if (isSuccess(res.status)) {
            setData(res.data)
        }
    } catch (err) {
        localStorage.setItem("path", "*")
    }
}

export const GetOnePupil = async (id, setData) => {
    try {
        const res = await axios.get(BaseUrl + Apis.pupil + "/" + localStorage.getItem("dataPupil"))
        console.log(res.data)
        localStorage.setItem('path', '/' + res.data.username)
        if (isSuccess(res.status)) {
            setData(res.data)
        }
    } catch (err) {
        localStorage.setItem("path", "/forbidden")
    }
}

export const GetMyGroup = async (id, setData) => {
    try {
        const res = await axios.get(BaseUrl + Apis.group + "/pupil/" + id)
        if (isSuccess(res.status)) {
            setData(res.data)
        }
    } catch (err) {
        localStorage.setItem("path", "*")
    }
}

export const MyMessage = async (id, setData) => {
    try {
        const res = await axios.get(BaseUrl + Apis.myMessage + '/' + id)
        if (res.status) {
            setData(res.data)
        }
    } catch (err) {
        localStorage.setItem("path", "*")
    }
}

export const MyLastMessage = async (id, setData) => {
    try {
        const res = await axios.get(BaseUrl + Apis.myMessage + "/last/" + id)
        if (isSuccess(res.status)) {
            setData(res.data);
        }
    } catch (err) {
        localStorage.setItem("path", "*")
    }
}

export const MyLastMonthPayment = async (id, setData) => {
    try {
        const res = await axios.get(BaseUrl + Apis.paymentHistory + "/lastMonth/" + id)
        if (isSuccess(res.status)) {
            setData(res.data)
        }
    } catch (err) {
        localStorage.setItem("path", "*")
    }
}