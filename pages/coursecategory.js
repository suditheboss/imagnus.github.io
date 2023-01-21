import React from 'react'
import Head from 'next/head'
import Script from 'next/script'

const coursecategory = () => {
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
                                        
                <link rel="stylesheet" type="text/css" href="assets/css/fontawesome.css" />
                {/* <!-- i   {/* <!-- Font Awesome-->co-font--> */}
                <link rel="stylesheet" type="text/css" href="assets/css/icofont.css" />
                {/* <!-- Themify icon--> */}
                <link rel="stylesheet" type="text/css" href="assets/css/themify.css" />
                {/* <!-- Feather icon--> */}
                <link rel="stylesheet" type="text/css" href="assets/css/feather-icon.css" />
                <link rel="stylesheet" type="text/css" href="assets/css/animate.css" />
                {/* <!-- Plugins css start--> */}
                <link rel="stylesheet" type="text/css" href="assets/css/datatables.css" />
                <link rel="stylesheet" type="text/css" href="assets/css/datatable-extension.css" />
                <link rel="stylesheet" type="text/css" href="assets/css/pe7-icon.css" />
                {/* <!-- Plugins css start--> */}
                <link rel="stylesheet" type="text/css" href="assets/css/date-picker.css" />
                <link rel="stylesheet" type="text/css" href="assets/css/owlcarousel.css" />
                <link rel="stylesheet" type="text/css" href="assets/css/prism.css" />
                <link rel="stylesheet" type="text/css" href="assets/css/whether-icon.css" />
                <link rel="stylesheet" type="text/css" href="assets/css/pe7-icon.css" />
                <link rel="stylesheet" type="text/css" href="assets/css/ionic-icon.css" />
                {/* <!-- Plugins css Ends-->
                                                                                                  <!-- Bootstrap css--> */}
                <link rel="stylesheet" type="text/css" href="assets/css/bootstrap.css" />
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
                                <div className="logo-wrapper"><a href="dashboard"><img src="assets/images/logo/logo.png" alt="" className="logo" /></a></div>
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
                                <div className="ProfileCard u-cf">Sudipt</div>

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
                                        <div className="col-lg-6 main-header"></div>
                                        <div className="col-lg-6 breadcrumb-right">
                                            <ol className="breadcrumb">
                                                <li className="breadcrumb-item"><a href="dashboard"><i className="pe-7s-home"></i></a></li>
                                                <li className="breadcrumb-item">General</li>
                                                <li className="breadcrumb-item active">Course </li>
                                                <li className="breadcrumb-item active">Course Category </li>
                                            </ol>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Container-fluid starts--> */}
                            <div className="container-fluid">
                                <div className="row">
                                    {/* <!-- Individual column searching (text inputs) Starts--> */}
                                    <div className="col-xl-8 box-col-12">
                                        <div className="card height-equal">
                                            <div className="card-header">
                                                <h6><strong> Course Preference </strong></h6>
                                            </div>
                                            <div className="card-body">
                                                <div className="user-status cart-table table-responsive">
                                                    <table className="table table-border">
                                                        <thead>
                                                            <tr>
                                                                <th> Course Preference</th>
                                                                <th> Creation Date </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td><strong>MPPSC Civil Services</strong></td>
                                                                <td>06-07-2021 05:20:56 PM</td>
                                                            </tr>
                                                            <tr>
                                                                <td><strong>MPPSC Forest Services</strong></td>
                                                                <td>27-12-2021 05:31:29 PM	</td>
                                                            </tr>
                                                            <tr>
                                                                <td><strong>UPSC Civil Services</strong></td>
                                                                <td>06-07-2021 05:20:56 PM</td>
                                                            </tr>
                                                            <tr>
                                                                <td><strong>One Day Exam Preparation </strong></td>
                                                                <td>06-07-2021 05:20:56 PM</td>
                                                            </tr>

                                                        </tbody>

                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Individual column searching (text inputs) Ends-->
                                                                                                                                      <!-- Debit Card Starts--> */}
                                    <div className="col-xl-4 col-lg-12 col-md-6 box-col-6 debit-card">
                                        <div className="card height-equal">
                                            <div className="card-header">
                                                <h6><strong>Add Course Preference </strong></h6>
                                            </div>
                                            <div className="card-body">
                                                <form className="theme-form e-commerce-form row">
                                                    <div className="form-group col-12 p-r-0">
                                                        <label>Course Preference*</label>
                                                        <input className="form-control" type="text" placeholder="enter course preference title..." />
                                                    </div>

                                                    <div className="col-12">
                                                        <button className="btn btn-primary btn-pill" type="button">Submit</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    {/* <!-- Individual column searching (text inputs) Starts--> */}
                                    <div className="col-xl-8 box-col-12">
                                        <div className="card height-equal">
                                            <div className="card-header">
                                                <h6><strong> Course Category </strong></h6>
                                            </div>
                                            <div className="card-body">
                                                <div className="dt-ext table-responsive">
                                                    <table className="display table table-border" id="export-button">
                                                        <thead>
                                                            <tr className="text-center">
                                                                <th>A-Icon</th>
                                                                <th>W-Icon</th>
                                                                <th>Course Category</th>
                                                                <th> Preference</th>
                                                                <th>Action </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr className="text-center">
                                                                <td className="sorting_1">
                                                                    <div className="media"><img className="img-60 mr-3" src="https://d11qyj7iojumc4.cloudfront.net/course_icons/mobile_icons/mobile_banner%20(9).png" alt="Generic placeholder image" />

                                                                    </div>
                                                                </td>
                                                                <td className="sorting_1">
                                                                    <div className="media"><img className="img-60 mr-3" src="https://d11qyj7iojumc4.cloudfront.net/course_icons/mobile_icons/mobile_banner%20(9).png" alt="Generic placeholder image" />

                                                                    </div>
                                                                </td>
                                                                <td>MPPSC Prelims (Target Batch 2021)</td>
                                                                <td>MPPSC Civil Services</td>
                                                                <td><a href="" className="btn btn-primary btn-xs"><i className="pe-7s-edit"></i> Edit</a></td>
                                                            </tr>

                                                            <tr className="text-center">
                                                                <td className="sorting_1">
                                                                    <div className="media"><img className="img-60 mr-3" src="https://d11qyj7iojumc4.cloudfront.net/course_icons/mobile_icons/mobile_banner%20(9).png" alt="Generic placeholder image" />

                                                                    </div>
                                                                </td>
                                                                <td className="sorting_1">
                                                                    <div className="media"><img className="img-60 mr-3" src="https://d11qyj7iojumc4.cloudfront.net/course_icons/mobile_icons/mobile_banner%20(9).png" alt="Generic placeholder image" />

                                                                    </div>
                                                                </td>
                                                                <td>MPPSC Prelims (Target Batch 2021)</td>
                                                                <td>MPPSC Civil Services</td>
                                                                <td><a href="" className="btn btn-primary btn-xs"><i className="pe-7s-edit"></i> Edit</a></td>
                                                            </tr>

                                                            <tr className="text-center">
                                                                <td className="sorting_1">
                                                                    <div className="media"><img className="img-60 mr-3" src="https://d11qyj7iojumc4.cloudfront.net/course_icons/mobile_icons/mobile_banner%20(9).png" alt="Generic placeholder image" />

                                                                    </div>
                                                                </td>
                                                                <td className="sorting_1">
                                                                    <div className="media"><img className="img-60 mr-3" src="https://d11qyj7iojumc4.cloudfront.net/course_icons/mobile_icons/mobile_banner%20(9).png" alt="Generic placeholder image" />

                                                                    </div>
                                                                </td>
                                                                <td>MPPSC Prelims (Target Batch 2021)</td>
                                                                <td>MPPSC Civil Services</td>
                                                                <td><a href="" className="btn btn-primary btn-xs"><i className="pe-7s-edit"></i> Edit</a></td>
                                                            </tr>


                                                        </tbody>
                                                    </table>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Individual column searching (text inputs) Ends-->
                                                                                                                                      <!-- Debit Card Starts--> */}
                                    <div className="col-xl-4 col-lg-12 col-md-6 box-col-6 debit-card">
                                        <div className="card height-equal">
                                            <div className="card-header">
                                                <h6><strong>Add Course Category </strong></h6>
                                            </div>
                                            <div className="card-body">
                                                <form className="theme-form e-commerce-form row">
                                                    <div className="form-group col-12  p-r-0">
                                                        <label>Course Preference*</label>
                                                        <select className="form-control" size="1">
                                                            <option>Select Course Prefernce</option>
                                                            <option>MPPSC Civil Services</option>
                                                            <option>MPPSC Forest Services</option>
                                                            <option>UPSC Civil Services</option>
                                                            <option>One day Exams</option>
                                                        </select>
                                                    </div>
                                                    <div className="form-group col-12 p-r-0">
                                                        <label>Course Category*</label>
                                                        <input className="form-control" type="text" placeholder="enter course preference title..." />
                                                    </div>

                                                    <div className="form-group col-12 p-r-0">
                                                        <label className="form-label" htmlFor="">App Icon*</label>
                                                        <input type="file" name="icon_image" className="btn btn-default" />
                                                    </div>

                                                    <div className="form-group col-12 p-r-0">
                                                        <label className="form-label" htmlFor="">Website Icon*</label>
                                                        <input type="file" name="icon_image" className="btn btn-default" />
                                                    </div>

                                                    <div className="col-12">
                                                        <button className="btn btn-primary btn-pill" type="button">Submit</button>
                                                    </div>
                                                </form>
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
                                        <p className="mb-0">Copyright © 2022 Imagnus <i className="fa fa-heart"></i>. All rights reserved.</p>
                                    </div>

                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
                {/* <!-- latest jquery--> */}
                <Script src="assets/js/jquery-3.5.1.min.js"></Script>
                {/* <!-- Bootstrap js--> */}
                <Script src="assets/js/bootstrap/popper.min.js"></Script>
                <Script src="assets/js/bootstrap/bootstrap.js"></Script>
                {/* <!-- feather icon js--> */}
                <Script src="assets/js/icons/feather-icon/feather.min.js"></Script>
                {/* <Script src="assets/js/icons/feather-icon/feather-icon.js"></Script> */}
                {/* <!-- Sidebar jquery--> */}
                <Script src="assets/js/sidebar-menu.js"></Script>
                <Script src="assets/js/config.js"></Script>

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
                {/* <!-- Plugins JS start--> */}
                {/* <Script src="assets/js/chart/chartist/chartist.js"></Script>
                <Script src="assets/js/chart/chartist/chartist-plugin-tooltip.js"></Script>
                <Script src="assets/js/chart/apex-chart/apex-chart.js"></Script>
                <Script src="assets/js/chart/apex-chart/stock-prices.js"></Script>
                <Script src="assets/js/prism/prism.min.js"></Script>
                <Script src="assets/js/clipboard/clipboard.min.js"></Script>
                <Script src="assets/js/counter/jquery.waypoints.min.js"></Script>
                <Script src="assets/js/counter/jquery.counterup.min.js"></Script>
                <Script src="assets/js/counter/counter-custom.js"></Script>
                <Script src="assets/js/custom-card/custom-card.js"></Script>
                <Script src="assets/js/dashboard/ecommerce-custom.js"></Script>
                <Script src="assets/js/chat-menu.js"></Script> */}
                {/* <!-- Plugins JS Ends-->
                                                                                                                  <!-- Theme js--> */}
                <Script src="assets/js/Script.js"></Script>
                {/* <!-- login js-->
                                                                                                                  <!-- Plugin used--> */}
            </div>
        </>
    )
}

export default coursecategory