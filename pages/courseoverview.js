import React from 'react'
import Head from 'next/head'
import Script from 'next/script'

const courseoverview = () => {
    return (
      <>
            <Head>
                <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="deScription" content="Poco admin is super flexible, powerful, clean &amp; modern responsive bootstrap 4 admin template with unlimited possibilities." />
                <meta name="keywords" content="admin template, Poco admin template, dashboard template, flat admin template, responsive admin template, web app" />
                <meta name="author" content="pixelstrap" />
                <link rel="icon" href="assets/images/favicon.png" type="image/x-icon" />
                <link rel="shortcut icon" href="assets/images/favicon.png" type="image/x-icon" />
                <title>Poco - Premium Admin Template</title>
                {/* <!-- Google font--> */}
                <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet"/>
                    {/* <!-- Font Awesome--> */}
                    <link rel="stylesheet" type="text/css" href="assets/css/fontawesome.css"/>
                        {/* <!-- ico-font--> */}
                        <link rel="stylesheet" type="text/css" href="assets/css/icofont.css" />
                        {/* <!-- Themify icon--> */}
                        <link rel="stylesheet" type="text/css" href="assets/css/themify.css" />
                        {/* <!-- Feather icon--> */}
                        <link rel="stylesheet" type="text/css" href="assets/css/feather-icon.css" />
                        <link rel="stylesheet" type="text/css" href="assets/css/animate.css" />
                        {/* <!-- Plugins css start--> */}
                        <link rel="stylesheet" type="text/css" href="assets/css/pe7-icon.css" />
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
                                            <li className="onhover-dropdown"><img className="img-fluid img-shadow-warning" src="assets/images/dashboard/notification.png" alt=""/>
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
                                                    <li><a href="techsupport"> Tech/Support Admin   </a></li>
                                                    <li className="iconbar-header sub-header"><i className="pe-7s-user"></i> Staffs Panel</li>
                                                    <li><a href="techsupport"> Faculty Panel   </a></li>
                                                    <li><a href="techsupport"> Tech/Support Panel   </a></li>
                                                </ul>
                                            </li>


                                        </ul>
                                    </div>
                                </div>
                                {/* <!-- Page Sidebar Ends-->
                                                                                                    <!-- Right sidebar Start--> */}
                                <div className="right-sidebar" id="right_side_bar">
                                    <div>
                                        <div className="container p-0">
                                            <div className="modal-header p-l-20 p-r-20">
                                                <div className="col-sm-8 p-0">
                                                    <h6 className="modal-title font-weight-bold">Contacts Status</h6>
                                                </div>
                                                <div className="col-sm-4 text-right p-0"><i className="mr-2" data-feather="settings"></i></div>
                                            </div>
                                        </div>
                                        <div className="friend-list-search mt-0">
                                            <input type="text" placeholder="search friend" /><i className="fa fa-search"></i>
                                        </div>
                                        <div className="p-l-30 p-r-30">
                                            <div className="chat-box">
                                                <div className="people-list friend-list">
                                                    <ul className="list">
                                                        <li className="clearfix"><img className="rounded-small user-image" src="./assets/images/user/1.jpg" alt="" />
                                                            <div className="status-circle online"></div>
                                                            <div className="about">
                                                                <div className="name">Vincent Porter</div>
                                                                <div className="status"> Online</div>
                                                            </div>
                                                        </li>
                                                        <li className="clearfix"><img className="rounded-small user-image" src="./assets/images/user/2.jpg" alt="" />
                                                            <div className="status-circle away"></div>
                                                            <div className="about">
                                                                <div className="name">Ain Chavez</div>
                                                                <div className="status"> 28 minutes ago</div>
                                                            </div>
                                                        </li>
                                                        <li className="clearfix"><img className="rounded-small user-image" src="./assets/images/user/8.jpg" alt="" />
                                                            <div className="status-circle online"></div>
                                                            <div className="about">
                                                                <div className="name">Kori Thomas</div>
                                                                <div className="status"> Online</div>
                                                            </div>
                                                        </li>
                                                        <li className="clearfix"><img className="rounded-small user-image" src="./assets/images/user/4.jpg" alt="" />
                                                            <div className="status-circle online"></div>
                                                            <div className="about">
                                                                <div className="name">Erica Hughes</div>
                                                                <div className="status"> Online</div>
                                                            </div>
                                                        </li>
                                                        <li className="clearfix"><img className="rounded-small user-image" src="./assets/images/user/5.jpg" alt="" />
                                                            <div className="status-circle offline"></div>
                                                            <div className="about">
                                                                <div className="name">Ginger Johnston</div>
                                                                <div className="status"> 2 minutes ago</div>
                                                            </div>
                                                        </li>
                                                        <li className="clearfix"><img className="rounded-small user-image" src="./assets/images/user/6.jpg" alt="" />
                                                            <div className="status-circle away"></div>
                                                            <div className="about">
                                                                <div className="name">Prasanth Anand</div>
                                                                <div className="status"> 2 hour ago</div>
                                                            </div>
                                                        </li>
                                                        <li className="clearfix"><img className="rounded-small user-image" src="./assets/images/user/7.jpg" alt="" />
                                                            <div className="status-circle online"></div>
                                                            <div className="about">
                                                                <div className="name">Hileri Jecno</div>
                                                                <div className="status"> Online</div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Right sidebar Ends--> */}
                                <div className="page-body">
                                    <div className="container-fluid">
                                        <div className="page-header">
                                            <div className="row">
                                                <div className="col-lg-6 main-header">

                                                </div>
                                                <div className="col-lg-6 breadcrumb-right">
                                                    <ol className="breadcrumb">
                                                        <li className="breadcrumb-item"><a href="index.html"><i className="pe-7s-home"></i></a></li>
                                                        <li className="breadcrumb-item active">Course </li>
                                                        <li className="breadcrumb-item"> Course Overview </li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- Container-fluid starts--> */}
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="card">
                                                    <div className="card-header">
                                                        <h5>Course Overview</h5>
                                                    </div>
                                                    <div className="card-body">
                                                <div id="editor1" name="editor1" cols="30" rows="20">
                                                    
                                                            <h2>MPPSC Syllabus & Exam Pattern 2022 <a id="tech-details" name="tech-details"></a></h2>
                                                            <p>MPPSC syllabus is set by Madhya Pradesh Public Service Commission (MPPSC). The commission conducts a Combined Competitive Examination (CCE) for the recruitment of officers and employees for various departments of the Madhya Pradesh Government.</p>
                                                            <p>In this article, candidates can find details on the updated MPPSC Syllabus for (State Service Exam) Prelims, Mains and the MPPSC Exam Pattern. Aspirants can also download the MPPSC prelims syllabus and MPPSC mains syllabus 2022 separately. </p></div>
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
                        {/* <!-- Plugins JS start--> */}
                        {/* <Script src="assets/js/chat-menu.js"></Script>
                        <Script src="assets/js/editor/ckeditor/ckeditor.js"></Script>
                        <Script src="assets/js/editor/ckeditor/styles.js"></Script>
                        <Script src="assets/js/editor/ckeditor/adapters/jquery.js"></Script>
                        <Script src="assets/js/editor/ckeditor/ckeditor.custom.js"></Script> */}
                        {/* <!-- Plugins JS Ends-->
                                                                                            <!-- Theme js--> */}
                        <Script src="assets/js/Script.js"></Script>
                        {/* <!-- login js-->
                                                                                            <!-- Plugin used--> */}
                    </div>
                </>
                )
}

                export default courseoverview