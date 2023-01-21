import React from 'react'
import Head from 'next/head'
import Script from 'next/script'

const allorders = () => {
    return (
        <>
            <Head>
                <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="assets/images/favicon.png" type="image/x-icon" />
                <link rel="shortcut icon" href="assets/images/favicon.png" type="image/x-icon" />
                <title>Imagnus - Super Admin Dashboard</title>
                {/* <!-- Google font--> */}
                <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet" />
                {/* <!-- Google font--> */}
                <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet" />
                {/* <!-- Font Awesome-->
                                          <!-- Font Awesome--> */}
                <link rel="stylesheet" type="text/css" href="assets/css/fontawesome.css" />
                {/* <!-- ico-font--> */}
                <link rel="stylesheet" type="text/css" href="assets/css/icofont.css" />
                {/* <!-- Themify icon--> */}
                <link rel="stylesheet" type="text/css" href="assets/css/themify.css" />
                {/* <!-- Feather icon--> */}
                <link rel="stylesheet" type="text/css" href="assets/css/feather-icon.css" />
                <link rel="stylesheet" type="text/css" href="assets/css/animate.css" />
                {/* <!-- Plugins css start--> */}
                <link rel="stylesheet" type="text/css" href="assets/css/chartist.css" />
                <link rel="stylesheet" type="text/css" href="assets/css/owlcarousel.css" />
                <link rel="stylesheet" type="text/css" href="assets/css/prism.css" />
                <link rel="stylesheet" type="text/css" href="assets/css/tour.css" />
                <link rel="stylesheet" type="text/css" href="assets/css/pe7-icon.css" />
                <link rel="stylesheet" type="text/css" href="assets/css/ionic-icon.css" />
                {/* <!-- Plugins css Ends-->
                                                                                      <!-- Bootstrap css--> */}
                <link rel="stylesheet" type="text/css" href="assets/css/bootstrap.css" />
                <link rel="stylesheet" type="text/css" href="assets/css/date-picker.css" />
                {/* <!-- App css--> */}
                <link rel="stylesheet" type="text/css" href="assets/css/style.css" />
                <link id="color" rel="stylesheet" href="assets/css/color-1.css" media="screen" />
                {/* <!-- Responsive css--> */}
                <link rel="stylesheet" type="text/css" href="assets/css/responsive.css" />

            </Head>
            <div>
                {/* <!-- Loader starts--> */}
                <div className="loader-wrapper">
                    <div className="typewriter">
                        <h1>Imagnus Admin Loading..</h1>
                    </div>
                </div>
                {/* <!-- Loader ends-->
                                                                                                          <!-- page-wrapper Start--> */}
                <div className="page-wrapper">
                    {/* <!-- Page Header Start--> */}
                    <div className="page-main-header">
                        <div className="main-header-right">
                            <div className="main-header-left text-center">
                                <div className="logo-wrapper"><a href="./dashboard"><img src="assets/images/logo/logo.png" alt="" className="logo" /></a></div>
                            </div>
                            <div className="mobile-sidebar">
                                <div className="media-body text-right switch-sm">
                                    <label className="switch ml-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="feather feather-align-center font-primary" id="sidebar-toggle"><line x1="18" y1="10" x2="6" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="18" y1="18" x2="6" y2="18"></line></svg>
                                    </label>
                                </div>
                            </div>
                            <div className="vertical-mobile-sidebar"><i className="fa fa-bars sidebar-bar">               </i></div>
                            <div className="nav-right col pull-right right-menu">
                                <ul className="nav-menus">

                                    <li className="onhover-dropdown"></li>
                                    <li className="onhover-dropdown"><img className="img-fluid img-shadow-warning" src="assets/images/dashboard/notification.png" alt="" />
                                        <ul className="onhover-show-div notification-dropdown">
                                            <li className="gradient-primary">
                                                <h5 className="f-w-700">Notifications</h5><span>You have 6 unread messages</span>
                                            </li>
                                            <li>
                                                <div className="media">
                                                    <div className="notification-icons bg-success mr-3"><i className="mt-0" data-feather="thumbs-up"></i></div>
                                                    <div className="media-body">
                                                        <h6>Someone Likes Your Posts</h6>
                                                        <p className="mb-0"> 2 Hours Ago</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="pt-0">
                                                <div className="media">
                                                    <div className="notification-icons bg-info mr-3"><i className="mt-0" data-feather="message-circle"></i></div>
                                                    <div className="media-body">
                                                        <h6>3 New Comments</h6>
                                                        <p className="mb-0"> 1 Hours Ago</p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="bg-light txt-dark"><a href="#">All </a> notification</li>
                                        </ul>
                                    </li>
                                    <li className="onhover-dropdown"> <span className="media user-header"><img className="img-fluid" src="assets/images/dashboard/user.png" alt="" /></span>
                                        <ul className="onhover-show-div profile-dropdown">
                                            <li className="gradient-primary">
                                                <h6 className="f-w-600 mb-0">Divyashakti Sagar</h6><span>Super Admin</span>
                                            </li>
                                            <li><i data-feather="user"> </i>Profile</li>
                                            <li><i data-feather="message-square"> </i>Logout </li>
                                        </ul>
                                    </li>
                                </ul>
                                <div className="d-lg-none mobile-toggle pull-right"><i data-feather="more-horizontal"></i></div>
                            </div>
                            <Script id="result-template" type="text/x-handlebars-template">
                                <div className="ProfileCard u-cf">
                                    <div className="ProfileCard-avatar"><i className="pe-7s-home"></i></div>
                                    <div className="ProfileCard-details">
                                        <div className="ProfileCard-realName">deprecated name</div>
                                    </div>
                                </div>
                            </Script>
                            <Script id="empty-template" type="text/x-handlebars-template"><div className="EmptyMessage">Your search turned up 0 results. This most likely means the backend is down, yikes!</div></Script>
                        </div>
                    </div>

                    {/* <!-- Page Body Start--> */}
                    <div className="page-body-wrapper">
                        {/* <!-- Page Sidebar Start--> */}
                        <div className="iconsidebar-menu">
                            <div className="sidebar">
                                <ul className="iconMenu-bar custom-scrollbar">
                                    <li><a className="bar-icons" href="javaScript:void(0)">
                                        {/* <!--img(src='assets/images/menu/home.png' alt='')--> */}
                                        <i className="pe-7s-home"></i><span>General    </span></a>
                                        <ul className="iconbar-mainmenu custom-scrollbar">
                                            <li className="iconbar-header"><i className="pe-7s-home"></i> General</li>
                                            <li><a href="dashboard">Dashboard</a></li>

                                        </ul>
                                    </li>

                                    <li className="active"><span className="badge badge-pill badge-primary">New</span>
                                        <a className="bar-icons" href="javaScript:void(0)"><i className="pe-7s-cart"></i><span>Orders</span></a>
                                        <ul className="iconbar-mainmenu custom-scrollbar">
                                            <li className="iconbar-header"><i className="pe-7s-cart"></i> Orders </li>
                                            <li><a href="allorders">MPPSC Civil Services</a></li>
                                            <li><a href="studymaterialorders">MPPSC Forest Services</a></li>
                                            <li><a href="testseriesorders">UPSC Civil Services</a></li>
                                            <li><a href="testseriesorders"> One Day Exam Preparation</a></li>

                                        </ul>
                                    </li>

                                    <li>
                                        <a className="bar-icons" href="javaScript:void(0)"><i className="pe-7s-gift"></i><span>Courses</span></a>
                                        <ul className="iconbar-mainmenu custom-scrollbar">
                                            <li className="iconbar-header"><i className="pe-7s-gift"></i> Courses </li>
                                            <li><a href="coursecategory">Course Category</a></li>
                                            <li><a href="subcategory">Course Sub-category</a></li>
                                            <li><a href="topics">Course Topics</a></li>
                                            <li><a href="courseoverview">Course Overview</a></li>
                                            <li><a href="coursedetails">Course Details</a></li>
                                            <li className="iconbar-header sub-header"><i className="pe-7s-gift"></i> SubScription</li>
                                            <li><a href="suScriptionplan"> SubScription Plans</a></li>
                                            <li className="iconbar-header sub-header"><i className="pe-7s-gift"></i> Coupon Code</li>
                                            <li><a href="suScriptionplan"> Coupon Code</a></li>

                                        </ul>
                                    </li>

                                    <li><a className="bar-icons" href="javaScript:void(0)"><i className="pe-7s-id"></i><span>Students</span></a>
                                        <ul className="iconbar-mainmenu custom-scrollbar">
                                            <li className="iconbar-header"><i className="pe-7s-id"></i> Students</li>
                                            <li><a href="registrations">Student Registrations</a></li>
                                            <li><a href="enquiries">Student Enquiries</a></li>
                                            <li><a href="supporttickets">Support Tickets</a></li>
                                            <li><a href="invoices">Invoices</a></li>
                                        </ul>
                                    </li>

                                    <li><a className="bar-icons" href="javaScript:void(0)"><i className="pe-7s-user"></i><span>Staffs</span></a>
                                        <ul className="iconbar-mainmenu custom-scrollbar">
                                            <li className="iconbar-header"><i className="pe-7s-user"></i> Staffs</li>
                                            <li><a href="faculty"> Faculties   </a></li>
                                            <li><a href="techsupport.html"> Tech/Support Admin   </a></li>
                                        </ul>
                                    </li>


                                </ul>
                            </div>
                        </div>
                        {/* <!-- Page Sidebar Ends--> */}

                        <div className="page-body">
                            <div className="container-fluid">
                                <div className="page-header">
                                    <div className="row">
                                        <div className="col-lg-6 main-header">
                                            <h2> MPPSC Civil Services</h2>
                                        </div>
                                        <div className="col-lg-6 breadcrumb-right">
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item"><a href="index.html"><i className="pe-7s-cart"></i></a></li>
                                                <li className="breadcrumb-item active">Orders </li>
                                                <li className="breadcrumb-item">MPPSC Civil Services </li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Container-fluid starts--> */}
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-xl-4 xl-50 col-md-6 box-col-6">
                                        <div className="card gradient-primary o-hidden pd-20">
                                            <div className="card-body tag-card">
                                                <div className="default-chart">
                                                    <h5 className="f-w-700 mb-0"><i className="icofont icofont-growth"></i> Course Orders<span className="pull-right">1362   </span></h5>
                                                    <div className="widgets-bottom mt-4">
                                                        <a href="courseorders.html" className="btn btn-pill btn-light"><i className="icofont icofont-mouse"></i> view orders</a>
                                                    </div>
                                                </div>
                                                <span className="tag-hover-effect"><span className="dots-group"><span className="dots dots1"></span><span className="dots dots2 dot-small"></span><span className="dots dots3 dot-small"></span><span className="dots dots4 dot-medium"></span><span className="dots dots5 dot-small"></span><span className="dots dots6 dot-small"></span><span className="dots dots7 dot-small-semi"></span><span className="dots dots8 dot-small-semi"></span><span className="dots dots9 dot-small"></span></span></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 xl-50 col-md-6 box-col-6">
                                        <div className="card bg-red o-hidden pd-20">
                                            <div className="card-body tag-card">
                                                <div className="default-chart">
                                                    <h5 className="f-w-700 mb-0"><i className="icofont icofont-growth"></i> Study Material<span className="pull-right">962   </span></h5>
                                                    <div className="widgets-bottom mt-4">
                                                        <a href="studymaterialorders.html" className="btn btn-pill btn-light"><i className="icofont icofont-mouse"></i> view orders</a>
                                                    </div>
                                                </div><span className="tag-hover-effect"><span className="dots-group"><span className="dots dots1"></span><span className="dots dots2 dot-small"></span><span className="dots dots3 dot-small"></span><span className="dots dots4 dot-medium"></span><span className="dots dots5 dot-small"></span><span className="dots dots6 dot-small"></span><span className="dots dots7 dot-small-semi"></span><span className="dots dots8 dot-small-semi"></span><span className="dots dots9 dot-small"></span></span></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 xl-50 col-md-6 box-col-6">
                                        <div className="card bg-green o-hidden pd-20">
                                            <div className="card-body tag-card">
                                                <div className="default-chart">
                                                    <h5 className="f-w-700 mb-0 text-white"><i className="icofont icofont-growth"></i> Test Series<span className="pull-right">435   </span></h5>
                                                    <div className="widgets-bottom mt-4">
                                                        <a href="testseriesorders.html" className="btn btn-pill btn-light"><i className="icofont icofont-mouse"></i> view orders</a>
                                                    </div>
                                                </div><span className="tag-hover-effect"><span className="dots-group"><span className="dots dots1"></span><span className="dots dots2 dot-small"></span><span className="dots dots3 dot-small"></span><span className="dots dots4 dot-medium"></span><span className="dots dots5 dot-small"></span><span className="dots dots6 dot-small"></span><span className="dots dots7 dot-small-semi"></span><span className="dots dots8 dot-small-semi"></span><span className="dots dots9 dot-small">     </span></span></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-12 box-col-12 xl-100">
                                        <div className="card gradient-primary o-hidden btc-overview pd-20">
                                            <div className="card-header p-b-0 no-border bg-transparent">
                                                <div className="crypto-graph-card">
                                                    <div className="media">
                                                        <div className="d-flex">
                                                            <div className="form-group mr-3">
                                                                <select className="form-control digits" id="exampleFormControlSelect9">
                                                                    <option disabled>select range</option>
                                                                    <option>Today</option>
                                                                    <option>Weekly</option>
                                                                    <option>Monthly</option>
                                                                    <option>Yearly</option>
                                                                </select>
                                                            </div>
                                                            <div className="form-group form-row">
                                                                <label className="col-sm-2 col-form-label text-right">Date</label>
                                                                <div className="col-sm-10">
                                                                    <input className="datepicker-here form-control digits" type="text" data-range="true" data-multiple-dates-separator=" - " data-language="en" placeholder="select date range" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="media-body">
                                                            <div className="header-right text-right">
                                                                <h5 className="mb-2">Orders 1476</h5>
                                                                <h6 className="f-w-700 mb-0">Total <i className="icofont icofont-cur-rupee"></i>6552225 </h6>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-body tag-card p-0">
                                                <div className="btc-earning"></div>
                                                <div className="text-bg"><span>iMagnus</span></div><span className="tag-hover-effect overview-dots full-lg-dots"><span className="dots-group"><span className="dots dots1"></span><span className="dots dots2 dot-small"></span><span className="dots dots3 dot-small"></span><span className="dots dots4 dot-medium"></span><span className="dots dots5 dot-small"></span><span className="dots dots6 dot-small"></span><span className="dots dots7 dot-small-semi"></span><span className="dots dots8 dot-small-semi"></span><span className="dots dots9 dot-small"></span></span></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-12 xl-100 box-col-12">
                                        <div className="card o-hidden">
                                            <div className="card-header" style={{ padding: '25px' }}>
                                                <h5></h5>
                                            </div>
                                            <div className="card-body p-0">
                                                <div className="user-status cart-table table-responsive">
                                                    <table className="table table-border">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">Course Name (QTY)</th>
                                                                <th scope="col">Enrollment</th>
                                                                <th scope="col">Amount</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td className="f-w-600">MPPSC Prelims Bilingual (Target Batch 2021)</td>
                                                                <td className="f-w-600">1200 students</td>
                                                                <td>
                                                                    <div className="span badge badge-pill pill-badge-primary"><i className="icofont icofont-cur-rupee"></i>50225 </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="f-w-600">MP GK PRE Special </td>
                                                                <td className="f-w-600">300 students</td>
                                                                <td>
                                                                    <div className="span badge badge-pill pill-badge-primary"><i className="icofont icofont-cur-rupee"></i>10223 </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="f-w-600">MP GK MAINS Special </td>
                                                                <td className="f-w-600">1000 students</td>
                                                                <td>
                                                                    <div className="span badge badge-pill pill-badge-primary"><i className="icofont icofont-cur-rupee"></i>9870 </div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td className="f-w-600">MPPSC PRE (E-Notes + Test Series) </td>
                                                                <td className="f-w-600">100 students</td>
                                                                <td>
                                                                    <div className="span badge badge-pill pill-badge-primary"><i className="icofont icofont-cur-rupee"></i>2250 </div>
                                                                </td>
                                                            </tr>

                                                        </tbody>
                                                    </table>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Container-fluid Ends--> */}
                        </div>
                        {/* <!-- footer start--> */}
                        <footer className="footer">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-6 footer-copyright">
                                        <p className="mb-0">Copyright © 2022 Imagnus<i className="fa fa-heart"></i> . All rights reserved.</p>
                                    </div>

                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
                {/* <!-- latest jquery--> */}
                <Script language="JavaScript" type="text/javascript" src="assets/js/jquery-3.5.1.min.js"></Script>
                {/* <!-- Bootstrap js--> */}
                <Script language="JavaScript" type="text/javascript" src="assets/js/bootstrap/popper.min.js"></Script>
                <Script language="JavaScript" type="text/javascript" src="assets/js/bootstrap/bootstrap.js"></Script>
                {/* <!-- feather icon js--> */}
                <Script language="JavaScript" type="text/javascript" src="assets/js/icons/feather-icon/feather.min.js"></Script>
                {/* <Script src="assets/js/icons/feather-icon/feather-icon.js"></Script> */}
                {/* <!-- Sidebar jquery--> */}
                <Script language="JavaScript" type="text/javascript" src="assets/js/sidebar-menu.js"></Script>
                <Script language="JavaScript" type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.min.js"></Script>
                <Script language="JavaScript" type="text/javascript" src="/assets/js/value.js"></Script>
                {/* <!-- Plugins JS start--> */}
                {/* <Script language="JavaScript" type="text/javascript" src="assets/js/datepicker/date-picker/datepicker.js"></Script>
                <Script language="JavaScript" type="text/javascript" src="assets/js/datepicker/date-picker/datepicker.en.js"></Script>
                <Script language="JavaScript" type="text/javascript" src="assets/js/datepicker/date-picker/datepicker.custom.js"></Script> */}
                <Script language="JavaScript" type="text/javascript" src="assets/js/config.js"></Script>

                <Script src="https://code.jquery.com/jquery-3.5.1.min.js"></Script>
                <Script type="text/javascript" src="/assets/js/value.js"></Script>
                {/* <!-- Plugins JS start--> */}
                {/* <Script src="assets/js/chart/chartist/chartist.js"></Script>
                <Script src="assets/js/chart/chartist/chartist-plugin-tooltip.js"></Script>
                <Script src="assets/js/chart/apex-chart/apex-chart.js"></Script>
                <Script src="assets/js/chart/apex-chart/stock-prices.js"></Script>
                <Script src="assets/js/owlcarousel/owl.carousel.js"></Script>
                <Script src="assets/js/prism/prism.min.js"></Script>
                <Script src="assets/js/clipboard/clipboard.min.js"></Script>
                <Script src="assets/js/counter/jquery.waypoints.min.js"></Script>
                <Script src="assets/js/counter/jquery.counterup.min.js"></Script>
                <Script src="assets/js/counter/counter-custom.js"></Script>
                <Script src="assets/js/custom-card/custom-card.js"></Script>
                <Script src="assets/js/dashboard/crypto-custom.js"></Script>
                <Script src="assets/js/tour/intro.js"></Script>
                <Script src="assets/js/tour/intro-init.js"></Script>
                <Script src="assets/js/chat-menu.js"></Script>
                <Script src="assets/js/height-equal.js"></Script> */}
                {/* <!-- Plugins JS Ends-->
                                                                                              <!-- Theme js--> */}
                <Script language="JavaScript" type="text/javascript" src="assets/js/Script.js"></Script>
                {/* <!-- login js-->
                                                                                              <!-- Plugin used--> */}
            </div>
        </>
    )
}

export default allorders