import React from 'react'
import Head from 'next/head'
import Script from 'next/Script'

const suScriptionplan = () => {
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
                {/* <!-- Font Awesome--> */}
                <link rel="stylesheet" type="text/css" href="assets/css/fontawesome.css" />
                {/* <!-- ico-font--> */}
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
                    
                            {/* !-- Container-fluid starts--> */}
                            <div className="container-fluid">
                                <div className="row">
                                    {/* <!-- Individual column searching (text inputs) Starts--> */}
                                    <div className="col-xl-12 box-col-12">
                                        <div className="card height-equal">
                                            <div className="card-header">
                                                <h6><strong> SubScription Plan </strong></h6>
                                                <div className="card-header-right">
                                                    <button className="btn btn-primary" data-toggle="modal" data-target="#subScription"><i className="fa fa-plus-square text-white"></i>  SubScription Plan</button>
                                                </div>
                                            </div>

                                            <div className="card-body">
                                                <div className="table-responsive">
                                                    <table className="table table-border">
                                                        <thead>
                                                            <tr className="text-center">
                                                                <th> Course_Name </th>
                                                                <th> Package </th>
                                                                <th> Validity </th>
                                                                <th> Course_Price </th>
                                                                <th> Offer_Price </th>
                                                                <th> Lectures </th>
                                                                <th> Tests </th>
                                                                <th> Notes </th>
                                                                <th> Live_Classes </th>
                                                                <th> Action </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr className="text-center">
                                                                <td><strong>MPPSC MAINS (ENGLISH)</strong></td>
                                                                <td>Foundation PRE+MAINS</td>
                                                                <td>18 months</td>
                                                                <td>Rs.35000</td>
                                                                <td>Rs.15000</td>
                                                                <td>1800</td>
                                                                <td>800</td>
                                                                <td>18</td>
                                                                <td>Yes</td>
                                                                <td><a href="" className="btn btn-primary btn-xs"><i className="pe-7s-edit"></i> Edit</a></td>
                                                            </tr>
                                                            <tr className="text-center">
                                                                <td><strong>MPPSC Prelims (Target Batch 2021)	</strong></td>
                                                                <td>Target Batch</td>
                                                                <td>12 months</td>
                                                                <td>Rs.35000</td>
                                                                <td>Rs.15000</td>
                                                                <td>1800</td>
                                                                <td>800</td>
                                                                <td>18</td>
                                                                <td>Yes</td>
                                                                <td><a href="" className="btn btn-primary btn-xs"><i className="pe-7s-edit"></i> Edit</a></td>
                                                            </tr>
                                                            <tr className="text-center">
                                                                <td><strong>MPPSC MAINS (ENGLISH)</strong></td>
                                                                <td>Foundation PRE+MAINS</td>
                                                                <td>18 months</td>
                                                                <td>Rs.35000</td>
                                                                <td>Rs.15000</td>
                                                                <td>1800</td>
                                                                <td>800</td>
                                                                <td>18</td>
                                                                <td>Yes</td>
                                                                <td><a href="" className="btn btn-primary btn-xs"><i className="pe-7s-edit"></i> Edit</a></td>
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
                                        <p className="mb-0">Copyright © 2022 Imagnus <i className="fa fa-heart"></i>. All rights reserved.</p>
                                    </div>

                                </div>
                            </div>
                        </footer>
                    </div>
                </div>

                {/* <!-- Add Course modal--> */}
                <div className="modal fade" id="subScription" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenter" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h6 className="modal-title"> <i className=" fa fa-comments-o />"></i> Add SubScription Plan</h6>
                        <button className="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                    </div>
                    <div className="modal-body">
                        <div className="row">

                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlSelect9"> Course Category</label>
                                    <select className="form-control digits" id="exampleFormControlSelect9">
                                        <option>Choose Course Category</option>
                                        <option>MPPSC MAINS (HINDI)</option>
                                        <option>MPPSC MAINS (ENGLISH)</option>
                                        <option>MPPSC Prelims (Target Batch 2021)</option>
                                        <option>MPPSC PRE (E-Notes + Test Series)</option>
                                        <option>MP GK PRE Special</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="package">Package Name</label>
                                    <input className="form-control" type="text" placeholder="Enter package name."/>
                                    </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label htmlFor="price">Course Validity </label>
                                    <input className="form-control digits" type="number" placeholder="Enter course validity."/>
                                    </div>
                            </div>

                            <div className="col-md-4">
                                <div className="form-group">
                                    <label htmlFor="price">Course Price</label>
                                    <input className="form-control digits" type="number" placeholder="Enter package price."/>
                                    </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label htmlFor="offer"> Offer Price</label>
                                    <input className="form-control digits" type="number" placeholder="Enter discount package price."/>
                                    </div>
                            </div>

                            <div className="col-md-4">
                                <div className="form-group">
                                    <label htmlFor="lecture">Video Lectures </label>
                                    <input className="form-control digits" type="number" placeholder="Enter video lectures count"/>
                                    </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label htmlFor="test">Test Series </label>
                                    <input className="form-control digits" type="number" placeholder="Enter test series count"/>
                                    </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label htmlFor="pdf">PDF Notes </label>
                                    <input className="form-control digits" type="number" placeholder="Enter pdf notes count"/>
                                    </div>
                            </div>



                            <div className="col-md-6">
                                <label htmlFor="package">Live Classes Includes or Not</label>
                                <div className="form-check">
                                    <input type="radio" className="form-check-input" id="radio2" name="optradio" value="option2"/>Yes
                                        <label className="form-check-label" htmlFor="radio2"></label>
                                    </div>
                                <div className="form-check">
                                    <input type="radio" className="form-check-input" id="radio3" name="optradio" value="option3"/>No
                                        <label className="form-check-label" htmlFor="radio3"></label>
                                    </div>

                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-secondary" type="button" data-dismiss="modal">Close</button>
                        <button className="btn btn-primary" type="button">Submit Course</button>
                    </div>
                        </div>
                        </div>
            </div>
       
                <Script src="assets/js/jquery-3.5.1.min.js"></Script>
        
                <Script src="assets/js/bootstrap/popper.min.js"></Script>
                <Script src="assets/js/bootstrap/bootstrap.js"></Script>
         
                <Script src="assets/js/icons/feather-icon/feather.min.js"></Script>
                {/* <Script src="assets/js/icons/feather-icon/feather-icon.js"></Script> */}
                
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
           
                <Script src="assets/js/Script.js"></Script>
                                                                                                       
                </div >
                </>
    
  )
}

export default suScriptionplan