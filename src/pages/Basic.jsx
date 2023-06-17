import laptop from '../assets/img/illustrations/man-with-laptop-light.png'
import success from '../assets/img/icons/unicons/cc-success.png'
import credit from '../assets/img/icons/unicons/wallet-info.png'
import pay from '../assets/img/icons/unicons/paypal.png'
import transaction from '../assets/img/icons/unicons/cc-primary.png'
import {GetOnePupil, MyLastMessage, MyLastMonthPayment, StatisticMyPayment} from "../service/Service.js";
import {useEffect, useState} from "react";
import {Loading} from "../component/Loading.jsx";
import {Link, useNavigate} from "react-router-dom";
export const Basic = () => {
    const [payment, setPayment] = useState({})
    const [pupil, setPupil] = useState({})
    const [loading, setLoading] = useState(false)
    const [message, setMessage]= useState({})
    const [lastMonthPayment, setLastMonthPayment] = useState([])
    const navigate = useNavigate()
    const myStatisticPayment = async () => {
        await StatisticMyPayment(localStorage.getItem("dataPupil"), setPayment)
        await GetOnePupil(localStorage.getItem("dataPupil"), setPupil)
        await MyLastMessage(localStorage.getItem("dataPupil"), setMessage)
        await MyLastMonthPayment(localStorage.getItem("dataPupil"), setLastMonthPayment)
        navigate(localStorage.getItem("path"))
        setLoading(true)
    }
    useEffect(() => {
        myStatisticPayment()
    }, [])
    return(
        <div>
            {loading ? (
                <div className="container-xxl flex-grow-1 container-p-y">
                    <div className="row">
                        <div className="col-lg-8 mb-4 order-0">
                            <div className="card">
                                <div className="d-flex align-items-end row">
                                    <div className="col-sm-7">
                                        <div className="card-body">
                                            <h5 className="card-title text-primary"> {pupil.name}</h5>
                                            <p className="mb-4">
                                                {message.message}
                                            </p>

                                            <a href="#" className="btn btn-sm btn-outline-primary">Barcha habarlar</a>
                                        </div>
                                    </div>
                                    <div className="col-sm-5 text-center text-sm-left">
                                        <div className="card-body pb-0 px-0 px-md-4">
                                            <img
                                                src={laptop}
                                                height={"140vh"}
                                                alt="View Badge User"
                                                data-app-dark-img="illustrations/man-with-laptop-dark.png"
                                                data-app-light-img="illustrations/man-with-laptop-light.png"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 order-1">
                            <div className="row">
                                <div className="col-lg-6 col-md-12 col-6 mb-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="card-title d-flex align-items-start justify-content-between">
                                                <div className="avatar flex-shrink-0">
                                                    <img
                                                        src={success}
                                                        alt="chart success"
                                                        className="rounded"
                                                    />
                                                </div>
                                                <div className="dropdown">
                                                    <button
                                                        className="btn p-0"
                                                        type="button"
                                                        id="cardOpt3"
                                                        data-bs-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                    >
                                                        <i className="bx bx-dots-vertical-rounded"></i>
                                                    </button>
                                                    <div className="dropdown-menu dropdown-menu-end"
                                                         aria-labelledby="cardOpt3">
                                                        <a className="dropdown-item" href="#">View
                                                            More</a>
                                                        <a className="dropdown-item" href="#">Delete</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <span className="fw-semibold d-block mb-1">To'lov qilingan (UZS)</span>
                                            <h5 className="card-title mb-2">{payment.tolovQildi} usz</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-6 mb-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="card-title d-flex align-items-start justify-content-between">
                                                <div className="avatar flex-shrink-0">
                                                    <img
                                                        src={credit}
                                                        alt="Credit Card"
                                                        className="rounded"
                                                    />
                                                </div>
                                                <div className="dropdown">
                                                    <button
                                                        className="btn p-0"
                                                        type="button"
                                                        id="cardOpt6"
                                                        data-bs-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                    >
                                                        <i className="bx bx-dots-vertical-rounded"></i>
                                                    </button>
                                                    <div className="dropdown-menu dropdown-menu-end"
                                                         aria-labelledby="cardOpt6">
                                                        <a className="dropdown-item" href="#">View
                                                            More</a>
                                                        <a className="dropdown-item" href="#">Delete</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <span>Qolgan (USZ)</span>
                                            <h5 className="card-title text-nowrap mb-1">{payment.qoldi} usz</h5>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-8 order-2 order-md-3 order-lg-2 mb-4">
                            <div className="card">
                                <div className="row row-bordered g-0">
                                    <div className="col-md-8">
                                        <h5 className="card-header m-0 me-2 pb-3">Total Revenue</h5>
                                        <div id="totalRevenueChart" className="px-2"></div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="card-body">
                                            <div className="text-center">
                                                <div className="dropdown">
                                                    <button
                                                        className="btn btn-sm btn-outline-primary dropdown-toggle"
                                                        type="button"
                                                        id="growthReportId"
                                                        data-bs-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                    >
                                                        2022
                                                    </button>
                                                    <div className="dropdown-menu dropdown-menu-end"
                                                         aria-labelledby="growthReportId">
                                                        <a className="dropdown-item" href="#">2021</a>
                                                        <a className="dropdown-item" href="#">2020</a>
                                                        <a className="dropdown-item" href="#">2019</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="growthChart"></div>
                                        <div className="text-center fw-semibold pt-3 mb-2">62% Company Growth</div>

                                        <div
                                            className="d-flex px-xxl-4 px-lg-2 p-4 gap-xxl-3 gap-lg-1 gap-3 justify-content-between">
                                            <div className="d-flex">
                                                <div className="me-2">
                                                <span className="badge bg-label-primary p-2"><i
                                                    className="bx bx-dollar text-primary"></i></span>
                                                </div>
                                                <div className="d-flex flex-column">
                                                    <small>2022</small>
                                                    <h6 className="mb-0">$32.5k</h6>
                                                </div>
                                            </div>
                                            <div className="d-flex">
                                                <div className="me-2">
                                                <span className="badge bg-label-info p-2"><i
                                                    className="bx bx-wallet text-info"></i></span>
                                                </div>
                                                <div className="d-flex flex-column">
                                                    <small>2021</small>
                                                    <h6 className="mb-0">$41.2k</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-8 col-lg-4 order-3 order-md-2">
                            <div className="row">
                                <div className="col-6 mb-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="card-title d-flex align-items-start justify-content-between">
                                                <div className="avatar flex-shrink-0">
                                                    <img src={pay} alt="Credit Card"
                                                         className="rounded"/>
                                                </div>
                                                <div className="dropdown">
                                                    <button
                                                        className="btn p-0"
                                                        type="button"
                                                        id="cardOpt4"
                                                        data-bs-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                    >
                                                        <i className="bx bx-dots-vertical-rounded"></i>
                                                    </button>
                                                    <div className="dropdown-menu dropdown-menu-end"
                                                         aria-labelledby="cardOpt4">
                                                        <a className="dropdown-item" href="#">View
                                                            More</a>
                                                        <a className="dropdown-item" href="#">Delete</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <span className="d-block mb-1">Bir kunlik to'lov</span>
                                            <h5 className="card-title text-nowrap mb-2">{payment.dailyfee} usz</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6 mb-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="card-title d-flex align-items-start justify-content-between">
                                                <div className="avatar flex-shrink-0">
                                                    <img src={transaction} alt="Credit Card"
                                                         className="rounded"/>
                                                </div>
                                                <div className="dropdown">
                                                    <button
                                                        className="btn p-0"
                                                        type="button"
                                                        id="cardOpt1"
                                                        data-bs-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                    >
                                                        <i className="bx bx-dots-vertical-rounded"></i>
                                                    </button>
                                                    <div className="dropdown-menu" aria-labelledby="cardOpt1">
                                                        <a className="dropdown-item" href="#">View
                                                            More</a>
                                                        <a className="dropdown-item" href="#">Delete</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <span className="fw-semibold d-block mb-1">Oylik to'lovlar (jami)</span>
                                            <h5 className="card-title mb-2">{payment.totalPayment} usz</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 mb-4">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="d-flex justify-content-between flex-sm-row flex-column gap-3">
                                                <div
                                                    className="d-flex flex-sm-column flex-row align-items-start justify-content-between">
                                                    <div className="card-title">
                                                        <h5 className="text-nowrap mb-2">Shu paytgacha to'lov qilindi</h5>
                                                        <span
                                                            className="badge bg-label-warning rounded-pill">{pupil.createdAt.substring(0, 4)}-yildan beri</span>
                                                    </div>
                                                    <div className="mt-sm-auto">
                                                        <h3 className="mb-0">{payment.ketganHarajat} usz</h3>
                                                    </div>
                                                </div>
                                                <div id="profileReportChart"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-4 col-xl-4 order-0 mb-4">
                            <div className="card h-100">
                                <div className="card-header d-flex align-items-center justify-content-between pb-0">
                                    <div className="card-title mb-0">
                                        <h5 className="m-0 me-2">Order Statistics</h5>
                                        <small className="text-muted">42.82k Total Sales</small>
                                    </div>
                                    <div className="dropdown">
                                        <button
                                            className="btn p-0"
                                            type="button"
                                            id="orederStatistics"
                                            data-bs-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            <i className="bx bx-dots-vertical-rounded"></i>
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-end" aria-labelledby="orederStatistics">
                                            <a className="dropdown-item" href="#">Select All</a>
                                            <a className="dropdown-item" href="#">Refresh</a>
                                            <a className="dropdown-item" href="#">Share</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <div className="d-flex flex-column align-items-center gap-1">
                                            <h2 className="mb-2">8,258</h2>
                                            <span>Total Orders</span>
                                        </div>
                                        <div id="orderStatisticsChart"></div>
                                    </div>
                                    <ul className="p-0 m-0">
                                        <li className="d-flex mb-4 pb-1">
                                            <div className="avatar flex-shrink-0 me-3">
                            <span className="avatar-initial rounded bg-label-primary"
                            ><i className="bx bx-mobile-alt"></i
                            ></span>
                                            </div>
                                            <div
                                                className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                                <div className="me-2">
                                                    <h6 className="mb-0">Electronic</h6>
                                                    <small className="text-muted">Mobile, Earbuds, TV</small>
                                                </div>
                                                <div className="user-progress">
                                                    <small className="fw-semibold">82.5k</small>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="d-flex mb-4 pb-1">
                                            <div className="avatar flex-shrink-0 me-3">
                                            <span className="avatar-initial rounded bg-label-success"><i
                                                className="bx bx-closet"></i></span>
                                            </div>
                                            <div
                                                className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                                <div className="me-2">
                                                    <h6 className="mb-0">Fashion</h6>
                                                    <small className="text-muted">T-shirt, Jeans, Shoes</small>
                                                </div>
                                                <div className="user-progress">
                                                    <small className="fw-semibold">23.8k</small>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="d-flex mb-4 pb-1">
                                            <div className="avatar flex-shrink-0 me-3">
                                            <span className="avatar-initial rounded bg-label-info"><i
                                                className="bx bx-home-alt"></i></span>
                                            </div>
                                            <div
                                                className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                                <div className="me-2">
                                                    <h6 className="mb-0">Decor</h6>
                                                    <small className="text-muted">Fine Art, Dining</small>
                                                </div>
                                                <div className="user-progress">
                                                    <small className="fw-semibold">849k</small>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="d-flex">
                                            <div className="avatar flex-shrink-0 me-3">
                            <span className="avatar-initial rounded bg-label-secondary"
                            ><i className="bx bx-football"></i
                            ></span>
                                            </div>
                                            <div
                                                className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                                <div className="me-2">
                                                    <h6 className="mb-0">Sports</h6>
                                                    <small className="text-muted">Football, Cricket Kit</small>
                                                </div>
                                                <div className="user-progress">
                                                    <small className="fw-semibold">99</small>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 order-1 mb-4">
                            <div className="card h-100">
                                <div className="card-header">
                                    <ul className="nav nav-pills" role="tablist">
                                        <li className="nav-item">
                                            <button
                                                type="button"
                                                className="nav-link active"
                                                role="tab"
                                                data-bs-toggle="tab"
                                                data-bs-target="#navs-tabs-line-card-income"
                                                aria-controls="navs-tabs-line-card-income"
                                                aria-selected="true"
                                            >
                                                Income
                                            </button>
                                        </li>
                                        <li className="nav-item">
                                            <button type="button" className="nav-link" role="tab">Expenses</button>
                                        </li>
                                        <li className="nav-item">
                                            <button type="button" className="nav-link" role="tab">Profit</button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-body px-0">
                                    <div className="tab-content p-0">
                                        <div className="tab-pane fade show active" id="navs-tabs-line-card-income"
                                             role="tabpanel">
                                            <div className="d-flex p-4 pt-3">
                                                <div className="avatar flex-shrink-0 me-3">
                                                    <img src="../assets/img/icons/unicons/wallet.png" alt="User"/>
                                                </div>
                                                <div>
                                                    <small className="text-muted d-block">Total Balance</small>
                                                    <div className="d-flex align-items-center">
                                                        <h6 className="mb-0 me-1">$459.10</h6>
                                                        <small className="text-success fw-semibold">
                                                            <i className="bx bx-chevron-up"></i>
                                                            42.9%
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="incomeChart"></div>
                                            <div className="d-flex justify-content-center pt-4 gap-2">
                                                <div className="flex-shrink-0">
                                                    <div id="expensesOfWeek"></div>
                                                </div>
                                                <div>
                                                    <p className="mb-n1 mt-1">Expenses This Week</p>
                                                    <small className="text-muted">$39 less than last week</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4 order-2 mb-4">
                            <div className="card h-100">
                                <div className="card-header d-flex align-items-center justify-content-between">
                                    <h5 className="card-title m-0 me-2">Hozirgi oy to'lovlari</h5>
                                    <div className="dropdown">
                                        <button
                                            className="btn p-0"
                                            type="button"
                                            id="transactionID"
                                            data-bs-toggle="dropdown"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            <i className="bx bx-dots-vertical-rounded"></i>
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-end" aria-labelledby="transactionID">
                                            <Link className="dropdown-item" to={"/" + pupil.username + "/myWallet"}>O'tgan oy</Link>
                                            <Link className="dropdown-item" to={"/" + pupil.username + "/myWallet"}>Barcha to'lovlar</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <ul className="p-0 m-0">
                                        {lastMonthPayment.length !== 0 ? (
                                            <>
                                                {lastMonthPayment.map((item) => (
                                                    <>
                                                        <li className="d-flex mb-4 pb-1">
                                                            <div className="avatar flex-shrink-0 me-3">
                                                                {item.payTypeName === "CASH" ? (
                                                                    <>
                                                                        <img src={pay} alt="User"
                                                                             className="rounded"/>
                                                                    </>
                                                                ) : (
                                                                    <>
                                                                        <img src={credit} alt="User"
                                                                             className="rounded"/>
                                                                    </>
                                                                )}

                                                            </div>
                                                            <div
                                                                className="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                                                                <div className="me-2">
                                                                    <small className="text-muted d-block mb-1 ">To'lov turi: {item.payTypeName}</small>
                                                                    <h6 className="mb-0">id: {item.historyId}</h6>
                                                                </div>
                                                                <div className="user-progress d-flex align-items-center gap-1">
                                                                    <h6 className="mb-0 text-success">{item.howMuch}</h6>
                                                                    <span className="text-success">USZ</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </>
                                                ))}
                                            </>
                                        ) : (
                                            <>
                                                <h5 className={"text-danger"}>bu oyda to'lovlar mavjud emas</h5>
                                            </>
                                        )}

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            ) : (
                <>
                    <Loading/>
                </>
            )}
        </div>
    )
}