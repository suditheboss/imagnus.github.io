import React from 'react'
import Head from 'next/head'
import Script from 'next/script'


const dashboard = () => {
    return (
        <>
            <Head>
                <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="assets/images/favicon.png" type="image/x-icon" />
                <link rel="shortcut icon" href="assets/images/favicon.png" type="image/x-icon" />
                <title>Imagnus - Super Admin Dashboard</title>

                <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet" />

                <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet" />

                <link rel="stylesheet" type="text/css" href="assets/css/fontawesome.css" />

                <link rel="stylesheet" type="text/css" href="assets/css/icofont.css" />

                <link rel="stylesheet" type="text/css" href="assets/css/themify.css" />

                <link rel="stylesheet" type="text/css" href="assets/css/feather-icon.css" />
                <link rel="stylesheet" type="text/css" href="assets/css/animate.css" />

                <link rel="stylesheet" type="text/css" href="assets/css/datatables.css" />
                <link rel="stylesheet" type="text/css" href="assets/css/datatable-extension.css" />
                <link rel="stylesheet" type="text/css" href="assets/css/pe7-icon.css" />

                <link rel="stylesheet" type="text/css" href="assets/css/date-picker.css" />
                <link rel="stylesheet" type="text/css" href="assets/css/owlcarousel.css" />
                <link rel="stylesheet" type="text/css" href="assets/css/prism.css" />
                <link rel="stylesheet" type="text/css" href="assets/css/whether-icon.css" />
                <link rel="stylesheet" type="text/css" href="assets/css/pe7-icon.css" />
                <link rel="stylesheet" type="text/css" href="assets/css/ionic-icon.css" />

                <link rel="stylesheet" type="text/css" href="assets/css/bootstrap.css" />

                <link rel="stylesheet" type="text/css" href="assets/css/style.css" />
                <link id="color" rel="stylesheet" href="assets/css/color-1.css" media="screen" />

                <link rel="stylesheet" type="text/css" href="assets/css/responsive.css" />
            </Head>
            <div>
                {/* Loader starts */}
                <div className="loader-wrapper">
                    <div className="typewriter">
                        <h1>Imagnus Admin Loading..</h1>
                    </div>
                </div>
                {/* Loader ends */}
                {/* page-wrapper Start */}
                <div className="page-wrapper">
                    {/* Page Header Start */}
                    <div className="page-main-header">
                        <div className="main-header-right">
                            <div className="main-header-left text-center">
                                <div className="logo-wrapper"><a href="dashboard"><img src="assets/images/logo/logo.png" alt="" className="logo" /></a></div>
                            </div>
                            <div className="mobile-sidebar">
                                <div className="media-body text-right switch-sm">
                                    <label className="switch ml-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"  className="feather feather-align-center font-primary" id="sidebar-toggle"><line x1="18" y1="10" x2="6" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="18" y1="18" x2="6" y2="18"></line></svg>
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
                                        <div className="ProfileCard-realName"></div>
                                    </div>
                                </div>
                            </Script>
                            <Script id="empty-template" type="text/x-handlebars-template"><div className="EmptyMessage">Your search turned up 0 results. This most likely means the backend is down, yikes!</div></Script>
                        </div>
                    </div>

                    {/* Page Body Start */}
                    <div className="page-body-wrapper">
                        {/* Page Sidebar Start */}
                        <div className="iconsidebar-menu">
                            <div className="sidebar">
                                <ul className="iconMenu-bar custom-scrollbar">
                                    <li><a className="bar-icons" href="javaScript:void(0)">
                                        {/* img(src='assets/images/menu/home.png' alt='')   */}
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
                                            <li><a href="coupon"> Coupon Code</a></li>

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
                                            <li className="iconbar-header sub-header"><i className="pe-7s-user"></i> Staffs Panel</li>
                                            <li><a href="techsupport.html"> Faculty Panel   </a></li>
                                            <li><a href="techsupport.html"> Tech/Support Panel   </a></li>
                                        </ul>
                                    </li>


                                </ul>
                            </div>
                        </div>
                        {/* Page Sidebar Ends */}
                        <div className="page-body">
                            <div className="container-fluid">
                                <div className="page-header">
                                    <div className="row">
                                        <div className="col-lg-6 main-header">
                                            <h2><span>Dashboard  </span></h2>
                                            <h6 className="mb-0">Super Admin</h6>
                                        </div>
                                        <div className="col-lg-6 breadcrumb-right">
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item"><a href="dashboard"><i className="pe-7s-home"></i></a></li>
                                                <li className="breadcrumb-item">General</li>
                                                <li className="breadcrumb-item active">Dashboard </li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Container-fluid starts */}
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-sm-6 col-xl-3 col-lg-6 box-col-6">
                                        <div className="card gradient-primary o-hidden pd-20">
                                            <div className="b-r-4 card-body">
                                                <div className="media static-top-widget">
                                                    <div className="align-self-center text-center"><i data-feather="database"></i></div>
                                                    <div className="media-body"><span className="m-0 text-white">Earnings</span>
                                                        <h4 className="mb-0 counter">1665900</h4><i className="icon-bg" data-feather="database"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-xl-3 col-lg-6 box-col-6">
                                        <div className="card bg-red o-hidden pd-20">
                                            <div className="b-r-4 card-body">
                                                <div className="media static-top-widget">
                                                    <div className="align-self-center text-center"><i data-feather="shopping-bag"></i></div>
                                                    <div className="media-body"><span className="m-0">Courses</span>
                                                        <h4 className="mb-0 counter">36</h4><i className="icon-bg" data-feather="shopping-bag"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-xl-3 col-lg-6 box-col-6">
                                        <div className="card bg-green o-hidden pd-20">
                                            <div className="b-r-4 card-body">
                                                <div className="media static-top-widget">
                                                    <div className="align-self-center text-center">
                                                        <div className="text-white i" data-feather="message-circle"></div>
                                                    </div>
                                                    <div className="media-body"><span className="m-0 text-white">Orders</span>
                                                        <h4 className="mb-0 counter text-white">4893</h4><i className="icon-bg" data-feather="message-circle"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 col-xl-3 col-lg-6 box-col-6">
                                        <div className="card gradient-info o-hidden pd-20">
                                            <div className="b-r-4 card-body">
                                                <div className="media static-top-widget">
                                                    <div className="align-self-center text-center">
                                                        <div className="text-white i" data-feather="user-plus"></div>
                                                    </div>
                                                    <div className="media-body"><span className="m-0 text-white">Students</span>
                                                        <h4 className="mb-0 counter text-white">45631</h4><i className="icon-bg" data-feather="user-plus"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-8 xl-100 box-col-12">
                                        <div className="card">
                                            <div className="card-header no-border">
                                                <h5>Best Selling Course</h5>
                                                <ul className="creative-dots">
                                                    <li className="bg-primary big-dot"></li>
                                                    <li className="bg-secondary semi-big-dot"></li>
                                                    <li className="bg-warning medium-dot"></li>
                                                </ul>

                                            </div>
                                            <div className="card-body pt-0 mt-30">
                                                <div className="user-status cart-table table-responsive">
                                                    <table className="table table-bordernone">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">Course Name</th>
                                                                <th scope="col">Orders</th>
                                                                <th scope="col">Course Category</th>
                                                                <th scope="col">Total </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td className="f-w-600">MPPSC Target Batch</td>
                                                                <td className="digits">1250</td>
                                                                <td>
                                                                    <div className="span badge badge-pill pill-badge-primary">MPPSC Civil Services</div>
                                                                </td>
                                                                <td className="digits">₹256000</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="f-w-600">Special MP GK</td>
                                                                <td className="digits">1080</td>
                                                                <td>
                                                                    <div className="span badge badge-pill pill-badge-primary">MPPSC Civil Services</div>
                                                                </td>
                                                                <td className="digits">₹350000</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="f-w-600">MPPSC MAINS (Hindi Medium)</td>
                                                                <td className="digits">900</td>
                                                                <td>
                                                                    <div className="span badge badge-pill pill-badge-primary">MPPSC Civil Services</div>
                                                                </td>
                                                                <td className="digits">₹58000</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="f-w-600">MPPSC MAINS (English Medium)</td>
                                                                <td className="digits">850</td>
                                                                <td>
                                                                    <div className="span badge badge-pill pill-badge-primary">MPPSC Civil Services</div>
                                                                </td>
                                                                <td className="digits">₹650000</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="f-w-600">MPPSC Paper Third</td>
                                                                <td className="digits">300</td>
                                                                <td>
                                                                    <div className="span badge badge-pill pill-badge-primary">MPPSC Civil Services</div>
                                                                </td>
                                                                <td className="digits">₹50000</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>


                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-4 xl-50 box-col-6">
                                        <div className="card gradient-primary o-hidden monthly-overview">
                                            <div className="card-body pb-0" id="customers-ratio">
                                                <div className="media customers">
                                                    <div className="media-body">
                                                        <h5>New Students</h5>
                                                    </div>
                                                    <div className="setting-dot">
                                                        <div className="setting-bg-primary date-picker-setting position-set pull-right"><i className="fa fa-spin fa-cog"></i></div>
                                                    </div><span className="overview-dots full-lg-dots"><span className="dots-group"><span className="dots dots1"></span><span className="dots dots2 dot-small"></span><span className="dots dots3 dot-small"></span><span className="dots dots4 dot-medium"></span><span className="dots dots5 dot-small"></span><span className="dots dots6 dot-small"></span><span className="dots dots7 dot-small-semi"></span><span className="dots dots8 dot-small-semi"></span><span className="dots dots9 dot-small">         </span></span></span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-xl-12 xl-100 box-col-12">
                                        <div className="widget-joins card widget-arrow">
                                            <div className="row">
                                                <div className="col-sm-6 pr-0">
                                                    <div className="media border-after-xs">
                                                        <div className="align-self-center mr-3 text-left">
                                                            <h6 className="mb-1">Sale</h6>
                                                            <h3 className="txt-primary f-w-600 mb-0">Today</h3>
                                                        </div>
                                                        <div className="media-body align-self-center"><i className="font-success ion ion-arrow-graph-up-right"></i></div>
                                                        <div className="media-body">
                                                            <h4 className="mb-0">₹<span className="counter">2560</span></h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 pl-0">
                                                    <div className="media">
                                                        <div className="align-self-center mr-3 text-left">
                                                            <h6 className="mb-1">Sale</h6>
                                                            <h3 className="txt-primary f-w-700 mb-0">Month</h3>
                                                        </div>
                                                        <div className="media-body align-self-center"><i className="font-success ion ion-arrow-graph-up-right"></i></div>
                                                        <div className="media-body pl-2">
                                                            <h4 className="mb-0">₹<span className="counter">69540</span></h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 pr-0">
                                                    <div className="media border-after-xs">
                                                        <div className="align-self-center mr-3 text-left">
                                                            <h6 className="mb-1">Sale</h6>
                                                            <h3 className="txt-primary f-w-600 mb-0">Week</h3>
                                                        </div>
                                                        <div className="media-body align-self-center"><i className="font-danger ion ion-arrow-graph-down-right"></i></div>
                                                        <div className="media-body">
                                                            <h4 className="mb-0">₹<span className="counter">2500</span></h4>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 pl-0">
                                                    <div className="media">
                                                        <div className="align-self-center mr-3 text-left">
                                                            <h6 className="mb-1">Sale</h6>
                                                            <h3 className="txt-primary f-w-600 mb-0">Year</h3>
                                                        </div>
                                                        <div className="media-body align-self-center pl-3"><i className="font-success ion ion-arrow-graph-up-right"></i></div>
                                                        <div className="media-body pl-2">
                                                            <h4 className="mb-0">₹<span className="counter">903198</span></h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            {/* Container-fluid Ends */}
                        </div>
                        {/* footer start */}
                        <footer className="footer">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-md-6 footer-copyright">
                                        <p className="mb-0">Copyright © 2022 Imagnus <i className="fa fa-heart"></i>. All rights reserved.</p>
                                    </div>

                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
                {/* latest jquery */}
             
                <Script language="JavaScript" type="text/javascript" src="assets/js/jquery-3.5.1.min.js"></Script>
                {/* Bootstrap js */}
                <Script language="JavaScript" type="text/javascript"  src="assets/js/bootstrap/popper.min.js"></Script>
                <Script language="JavaScript" type="text/javascript" src="assets/js/bootstrap/bootstrap.js"></Script>
                {/* feather icon js */}
                <Script language="JavaScript" type="text/javascript" src="assets/js/icons/feather-icon/feather.min.js"></Script>
                {/* <Script src="assets/js/icons/feather-icon/feather-icon.js"></Script>  */}
                {/* Sidebar jquery */}
                <Script language="JavaScript" type="text/javascript" src="assets/js/sidebar-menu.js"></Script>
                <Script language="JavaScript" type="text/javascript" src="assets/js/config.js"></Script>

                <Script src="https://code.jquery.com/jquery-3.5.1.min.js"></Script>
                <Script type="text/javascript" src="/assets/js/value.js"></Script>

                
                


                {/* <Script src="assets/js/datatable/datatables/jquery.dataTables.min.js"></Script>
                <Script src="assets/js/datatable/datatable-extension/dataTables.buttons.min.js"></Script>
                <Script src="assets/js/datatable/datatable-extension/jszip.min.js"></Script>
                <Script src="assets/js/datatable/datatable-extension/buttons.colVis.min.js"></Script>
                <Script src="assets/js/datatable/datatable-extension/pdfmake.min.js"></Script>
                <Script src="assets/js/datatable/datatable-extension/vfs_fonts.js"></Script>
                <Script src="assets/js/datatable/datatable-extension/dataTables.autoFill.min.js"></Script>
                <Script src="assets/js/datatable/datatable-extension/dataTables.select.min.js"></Script>
                <Script src="assets/js/datatable/datatable-extension/buttons.bootstrap4.min.js"></Script>
                <Script src="assets/js/datatable/datatable-extension/buttons.html5.min.js"></Script>
                <Script src="assets/js/datatable/datatable-extension/buttons.print.min.js"></Script>
                <Script src="assets/js/datatable/datatable-extension/dataTables.bootstrap4.min.js"></Script>
                <Script src="assets/js/datatable/datatable-extension/dataTables.responsive.min.js"></Script>
                <Script src="assets/js/datatable/datatable-extension/responsive.bootstrap4.min.js"></Script>
                <Script src="assets/js/datatable/datatable-extension/dataTables.keyTable.min.js"></Script>
                <Script src="assets/js/datatable/datatable-extension/dataTables.colReorder.min.js"></Script>
                <Script src="assets/js/datatable/datatable-extension/dataTables.fixedHeader.min.js"></Script>
                <Script src="assets/js/datatable/datatable-extension/dataTables.rowReorder.min.js"></Script>
                <Script src="assets/js/datatable/datatable-extension/dataTables.scroller.min.js"></Script>
                <Script src="assets/js/datatable/datatable-extension/custom.js"></Script> */}
                {/* Plugins JS start */}
                {/* <Script src="assets/js/chart/chartist/chartist.js"></Script>
                <Script src="assets/js/chart/chartist/chartist-plugin-tooltip.js"></Script>
                <Script src="assets/js/chart/apex-chart/apex-chart.js"></Script>
                <Script src="assets/js/chart/apex-chart/stock-prices.js"></Script> */}
                {/* <Script src="assets/js/prism/prism.min.js"></Script>
                <Script src="assets/js/clipboard/clipboard.min.js"></Script>
                <Script src="assets/js/counter/jquery.waypoints.min.js"></Script>
                <Script src="assets/js/counter/jquery.counterup.min.js"></Script>
                <Script src="assets/js/counter/counter-custom.js"></Script>
                <Script src="assets/js/custom-card/custom-card.js"></Script>
                <Script src="assets/js/dashboard/ecommerce-custom.js"></Script>
                <Script src="assets/js/chat-menu.js"></Script> */}
                {/* Plugins JS Ends */}
                {/* Theme js */}
                <Script language="JavaScript" type="text/javascript" src="assets/js/Script.js"></Script>

            </div>
        </>
    )
}

export default dashboard