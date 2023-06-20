import axios from "axios";
import {BaseUrl} from "./BaseUrl.js";
import {Apis} from "./Apis.js";
import {isSuccess} from "./handler/isSuccess.js";
import {toast} from "react-toastify";
import {BaseConfig} from "./BaseConfig.js";

export const LoginJon = async (data) => {
    try {
        const res = await axios.post(BaseUrl + Apis.auth + "/login", data)
        if (res.data.user.role.id === 3) {
            console.log(res.data.user)
            if (isSuccess(res.status)) {
                localStorage.setItem("path", "/" + res.data.user.username)
                localStorage.setItem("dataTeacher", res.data.user.id)
                return toast.success("logindan muvaffaqiyatli o'tdingiz. biroz kuting", true)
            }
        }
    } catch (err) {
        localStorage.setItem("dataTeacher", null)
        console.log(err)
    }
}

export const StatisticMyPayment = async (id, setData) => {
    try {
        const res = await axios.get(BaseUrl + Apis.statistic + "/myStatistic/" + id)
        if (isSuccess(res.status)) {
            setData(res.data)
        }
    } catch (err) {
        console.log(err)
    }
}
export const GetOneTeacher = async (id, setData) => {
    try {
        const res = await BaseConfig.doGet(Apis.teacher + "/" + id)
        setData(res)
    } catch (err) {
        console.log(err)
    }
}

export const GetMyGroup = async (id, setData) => {
    try {
        const res = BaseConfig.doGet(Apis.group + "/teacher/" + id)
        if (isSuccess(res.status)) {
            setData(res.data)
        }
    } catch (err) {
        console.log(err)

    }
}

export const MyMessage = async (id, setData) => {
    try {
        const res = await axios.get(BaseUrl + Apis.myMessage + '/' + id)
        if (res.status) {
            setData(res.data)
        }
    } catch (err) {
        console.log(err)
    }
}

export const MyLastMessage = async (id, setData) => {
    try {
        const res = await axios.get(BaseUrl + Apis.myMessage + "/last/" + id)
        if (isSuccess(res.status)) {
            setData(res.data);
        }
    } catch (err) {
        console.log(err)
    }
}

export const MyLastMonthPayment = async (id, setData) => {
    try {
        const res = await axios.get(BaseUrl + Apis.paymentHistory + "/lastMonth/" + id)
        if (isSuccess(res.status)) {
            setData(res.data)
        }
    } catch (err) {
        console.log(err)
    }
}