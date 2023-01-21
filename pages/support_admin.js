import React from 'react'
import Head from 'next/head'
import Script from 'next/script'

const support_admin = () => {
  return (
      <>
          <Head>
              <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8"/>
                  <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                          <link rel="icon" href="../assets/images/favicon.png" type="image/x-icon"/>
                              <link rel="shortcut icon" href="../assets/images/favicon.png" type="image/x-icon"/>
                                  <title>Imagnus - Super Admin Dashboard</title>
                                  {/* <!-- Google font--> */}
                                  <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet"/>
                                      {/* <!-- Google font--> */}
                                      <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet"/>
                                          {/* <!-- Font Awesome--> */}
                                          <link rel="stylesheet" type="text/css" href="../assets/css/fontawesome.css"/>
                                              {/* <!-- ico-font--> */}
                                              <link rel="stylesheet" type="text/css" href="../assets/css/icofont.css"/>
                                                  {/* <!-- Themify icon--> */}
                                                  <link rel="stylesheet" type="text/css" href="../assets/css/themify.css"/>
                                                      {/* <!-- Feather icon--> */}
                                                      <link rel="stylesheet" type="text/css" href="../assets/css/feather-icon.css"/>
                                                          <link rel="stylesheet" type="text/css" href="../assets/css/animate.css"/>
                                                              {/* <!-- Plugins css start--> */}
                                                              <link rel="stylesheet" type="text/css" href="../assets/css/date-picker.css"/>
                                                                  <link rel="stylesheet" type="text/css" href="../assets/css/owlcarousel.css"/>
                                                                      <link rel="stylesheet" type="text/css" href="../assets/css/prism.css"/>
                                                                          <link rel="stylesheet" type="text/css" href="../assets/css/whether-icon.css"/>
                                                                              <link rel="stylesheet" type="text/css" href="../assets/css/pe7-icon.css"/>
                                                                                  <link rel="stylesheet" type="text/css" href="../assets/css/ionic-icon.css"/>
                                                                                      {/* <!-- Plugins css Ends-->
                                                                                      <!-- Bootstrap css--> */}
                                                                                      <link rel="stylesheet" type="text/css" href="../assets/css/bootstrap.css"/>
                                                                                          {/* <!-- App css--> */}
                                                                                          <link rel="stylesheet" type="text/css" href="../assets/css/style.css"/>
                                                                                              <link id="color" rel="stylesheet" href="../assets/css/color-1.css" media="screen"/>
                                                                                                  {/* <!-- Responsive css--> */}
                                                                                                  <link rel="stylesheet" type="text/css" href="../assets/css/responsive.css"/>
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
                                                                                                                      <div className="logo-wrapper"><a href="index.html"><img src="../assets/images/logo/logo.png" alt=""/></a></div>
                                                                                                                  </div>
                                                                                                                  <div className="mobile-sidebar">
                                                                                                                      <div className="media-body text-right switch-sm">
                                                                                                                          <label className="switch ml-3"><i className="font-primary" id="sidebar-toggle" data-feather="align-center"></i></label>
                                                                                                                      </div>
                                                                                                                  </div>
                                                                                                                  <div className="vertical-mobile-sidebar"><i className="fa fa-bars sidebar-bar">               </i></div>
                                                                                                                  <div className="nav-right col pull-right right-menu">
                                                                                                                      <ul className="nav-menus">

                                                                                                                          <li className="onhover-dropdown"><img className="img-fluid img-shadow-secondary" src="../assets/images/dashboard/like.png" alt=""/>
                                                                                                                              <ul className="onhover-show-div droplet-dropdown">
                                                                                                                                  <li className="gradient-primary text-center">
                                                                                                                                      <h5 className="f-w-700">Grid Dashboard</h5><span>Easy Grid inside dropdown</span>
                                                                                                                                  </li>
                                                                                                                                  <li>
                                                                                                                                      <div className="row">
                                                                                                                                          <div className="col-sm-4 col-6 droplet-main"><i data-feather="file-text"></i><span className="d-block">Content</span></div>
                                                                                                                                          <div className="col-sm-4 col-6 droplet-main"><i data-feather="activity"></i><span className="d-block">Activity</span></div>
                                                                                                                                          <div className="col-sm-4 col-6 droplet-main"><i data-feather="users"></i><span className="d-block">Contacts</span></div>
                                                                                                                                          <div className="col-sm-4 col-6 droplet-main"><i data-feather="clipboard"></i><span className="d-block">Reports</span></div>
                                                                                                                                          <div className="col-sm-4 col-6 droplet-main"><i data-feather="anchor"></i><span className="d-block">Automation</span></div>
                                                                                                                                          <div className="col-sm-4 col-6 droplet-main"><i data-feather="settings"></i><span className="d-block">Settings</span></div>
                                                                                                                                      </div>
                                                                                                                                  </li>
                                                                                                                                  <li className="text-center">
                                                                                                                                      <button className="btn btn-primary btn-air-primary">Follows Up</button>
                                                                                                                                  </li>
                                                                                                                              </ul>
                                                                                                                          </li>
                                                                                                                          <li className="onhover-dropdown"><img className="img-fluid img-shadow-warning" src="../assets/images/dashboard/notification.png" alt=""/>
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
                                                                                                                          <li className="onhover-dropdown"> <span className="media user-header"><img className="img-fluid" src="../assets/images/dashboard/user.png" alt=""/></span>
                                                                                                                              <ul className="onhover-show-div profile-dropdown">
                                                                                                                                  <li className="gradient-primary">
                                                                                                                                      <h5 className="f-w-600 mb-0">Elana Saint</h5><span>Web Designer</span>
                                                                                                                                  </li>
                                                                                                                                  <li><i data-feather="user"> </i>Profile</li>
                                                                                                                                  <li><i data-feather="message-square"> </i>Inbox</li>
                                                                                                                                  <li><i data-feather="file-text"> </i>Taskboard</li>
                                                                                                                                  <li><i data-feather="settings"> </i>Settings            </li>
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
                                                                                                          {/* <!-- Page Header Ends                              -->
                                                                                                          <!-- Page Body Start--> */}
                                                                                                          <div className="page-body-wrapper">
                                                                                                              {/* <!-- Page Sidebar Start--> */}
                                                                                                              <div className="iconsidebar-menu">
                                                                                                                  <div className="sidebar">
                                                                                                                      <ul className="iconMenu-bar custom-scrollbar">
                                                                                                                          <li><a className="bar-icons" href="javascript:void(0)">
                                                                                                                              {/* <!--img(src='../assets/images/menu/home.png' alt='')--> */}
                                                                                                                              <i className="pe-7s-home"></i><span>General    </span></a>
                                                                                                                              <ul className="iconbar-mainmenu custom-scrollbar">
                                                                                                                                  <li className="iconbar-header">General</li>
                                                                                                                                  <li><a href="support_admin">Dashboard</a></li>

                                                                                                                                  <li className="iconbar-header sub-header"> Staffs</li>
                                                                                                                                  <li><a href="addfaculty.html">Add Faculties   </a></li>
                                                                                                                                  <li><a href="../starter-kit/index.html">Add Tech/Support Admin   </a></li>

                                                                                                                                  <li className="iconbar-header sub-header"> Courses</li>
                                                                                                                                  <li><a href="../starter-kit/index.html">Add New Course   </a></li>
                                                                                                                                  <li><a href="../starter-kit/index.html">Add Subscription Plans   </a></li>
                                                                                                                                  <li><a href="../starter-kit/index.html">Add Coupon Code </a></li>
                                                                                                                              </ul>
                                                                                                                          </li>

                                                                                                                          <li className="active"><span className="badge badge-pill badge-primary">New</span>
                                                                                                                              <a className="bar-icons" href="javascript:void(0)"><i className="pe-7s-cart"></i><span>Orders</span></a>
                                                                                                                              <ul className="iconbar-mainmenu custom-scrollbar">
                                                                                                                                  <li className="iconbar-header">All Orders</li>
                                                                                                                                  <li><a href="allorders">MPPSC Civil Services</a></li>
                                                                                                                                  <li><a href="allorder">MPPSC Forest Services</a></li>
                                                                                                                                  <li><a href="allorder">UPSC</a></li>
                                                                                                                                  <li><a href="allorder">NEET</a></li>
                                                                                                                                  <li><a href="allorder">JEE</a></li>
                                                                                                                              </ul>
                                                                                                                          </li>

                                                                                                                          <li>
                                                                                                                              <a className="bar-icons" href="javascript:void(0)"><i className="pe-7s-gift"></i><span>Courses</span></a>
                                                                                                                              <ul className="iconbar-mainmenu custom-scrollbar">
                                                                                                                                  <li className="iconbar-header">All Orders</li>
                                                                                                                                  <li><a href="orders.html">MPPSC Civil Services</a></li>
                                                                                                                              </ul>
                                                                                                                          </li>

                                                                                                                          <li>
                                                                                                                              <a className="bar-icons" href="javascript:void(0)"><i className="pe-7s-id"></i><span>Students</span></a>
                                                                                                                              <ul className="iconbar-mainmenu custom-scrollbar">
                                                                                                                                  <li className="iconbar-header">All Orders</li>
                                                                                                                                  <li><a href="orders.html">MPPSC Civil Services</a></li>
                                                                                                                              </ul>
                                                                                                                          </li>

                                                                                                                          <li>
                                                                                                                              <a className="bar-icons" href="javascript:void(0)"><i className="pe-7s-server"></i><span>Support</span></a>
                                                                                                                              <ul className="iconbar-mainmenu custom-scrollbar">
                                                                                                                                  <li className="iconbar-header">All Orders</li>
                                                                                                                                  <li><a href="orders.html">MPPSC Civil Services</a></li>
                                                                                                                              </ul>
                                                                                                                          </li>

                                                                                                                      </ul>
                                                                                                                  </div>
                                                                                                              </div>
                                                                                                              {/* <!-- Right sidebar Start--> */}
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
                                                                                                                          <input type="text" placeholder="search friend"/><i className="fa fa-search"></i>
                                                                                                                      </div>
                                                                                                                      <div className="p-l-30 p-r-30">
                                                                                                                          <div className="chat-box">
                                                                                                                              <div className="people-list friend-list">
                                                                                                                                  <ul className="list">
                                                                                                                                      <li className="clearfix"><img className="rounded-small user-image" src="./../assets/images/user/1.jpg" alt=""/>
                                                                                                                                          <div className="status-circle online"></div>
                                                                                                                                          <div className="about">
                                                                                                                                              <div className="name">Vincent Porter</div>
                                                                                                                                              <div className="status"> Online</div>
                                                                                                                                          </div>
                                                                                                                                      </li>
                                                                                                                                      <li className="clearfix"><img className="rounded-small user-image" src="./../assets/images/user/2.jpg" alt=""/>
                                                                                                                                          <div className="status-circle away"></div>
                                                                                                                                          <div className="about">
                                                                                                                                              <div className="name">Ain Chavez</div>
                                                                                                                                              <div className="status"> 28 minutes ago</div>
                                                                                                                                          </div>
                                                                                                                                      </li>
                                                                                                                                      <li className="clearfix"><img className="rounded-small user-image" src="./../assets/images/user/8.jpg" alt=""/>
                                                                                                                                          <div className="status-circle online"></div>
                                                                                                                                          <div className="about">
                                                                                                                                              <div className="name">Kori Thomas</div>
                                                                                                                                              <div className="status"> Online</div>
                                                                                                                                          </div>
                                                                                                                                      </li>
                                                                                                                                      <li className="clearfix"><img className="rounded-small user-image" src="./../assets/images/user/4.jpg" alt=""/>
                                                                                                                                          <div className="status-circle online"></div>
                                                                                                                                          <div className="about">
                                                                                                                                              <div className="name">Erica Hughes</div>
                                                                                                                                              <div className="status"> Online</div>
                                                                                                                                          </div>
                                                                                                                                      </li>
                                                                                                                                      <li className="clearfix"><img className="rounded-small user-image" src="./../assets/images/user/5.jpg" alt=""/>
                                                                                                                                          <div className="status-circle offline"></div>
                                                                                                                                          <div className="about">
                                                                                                                                              <div className="name">Ginger Johnston</div>
                                                                                                                                              <div className="status"> 2 minutes ago</div>
                                                                                                                                          </div>
                                                                                                                                      </li>
                                                                                                                                      <li className="clearfix"><img className="rounded-small user-image" src="./../assets/images/user/6.jpg" alt=""/>
                                                                                                                                          <div className="status-circle away"></div>
                                                                                                                                          <div className="about">
                                                                                                                                              <div className="name">Prasanth Anand</div>
                                                                                                                                              <div className="status"> 2 hour ago</div>
                                                                                                                                          </div>
                                                                                                                                      </li>
                                                                                                                                      <li className="clearfix"><img className="rounded-small user-image" src="./../assets/images/user/7.jpg" alt=""/>
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
                                                                                                                                  <h2>Chart <span>Widget  </span></h2>
                                                                                                                                  <h6 className="mb-0">admin panel</h6>
                                                                                                                              </div>
                                                                                                                              <div className="col-lg-6 breadcrumb-right">
                                                                                                                                  <ol className="breadcrumb">
                                                                                                                                      <li className="breadcrumb-item"><a href="index.html"><i className="pe-7s-home"></i></a></li>
                                                                                                                                      <li className="breadcrumb-item">Charts</li>
                                                                                                                                      <li className="breadcrumb-item active">Chart Widget</li>
                                                                                                                                  </ol>
                                                                                                                              </div>
                                                                                                                          </div>
                                                                                                                      </div>
                                                                                                                  </div>
                                                                                                                  {/* <!-- Container-fluid starts--> */}
                                                                                                                  <div className="container-fluid">
                                                                                                                      {/* <!-- Chart widget top Start--> */}
                                                                                                                      <div className="row">
                                                                                                                          <div className="col-xl-4 col-md-12 box-col-12">
                                                                                                                              <div className="card gradient-primary text-white">
                                                                                                                                  <div className="chart-widget-top">
                                                                                                                                      <div className="row card-body p-b-0">
                                                                                                                                          <div className="col-5">
                                                                                                                                              <h6 className="f-w-600">SALE</h6><span><span>90</span>%<i className="icon-angle-up f-12 ml-1"></i></span>
                                                                                                                                          </div>
                                                                                                                                          <div className="col-7 text-right">
                                                                                                                                              <h4 className="total-value">$ <span>3654</span>.00</h4>
                                                                                                                                          </div>
                                                                                                                                      </div>
                                                                                                                                      <div>
                                                                                                                                          <div id="chart-widget1"></div>
                                                                                                                                      </div>
                                                                                                                                  </div>
                                                                                                                              </div>
                                                                                                                          </div>
                                                                                                                          <div className="col-xl-4 col-md-12 box-col-12">
                                                                                                                              <div className="card gradient-secondary text-white">
                                                                                                                                  <div className="chart-widget-top">
                                                                                                                                      <div className="row card-body p-b-0">
                                                                                                                                          <div className="col-7">
                                                                                                                                              <h6 className="f-w-600">PROJECTS</h6><span><span>30</span>%<i className="icon-angle-up f-12 ml-1"></i></span>
                                                                                                                                          </div>
                                                                                                                                          <div className="col-5 text-right text-white">
                                                                                                                                              <h4 className="total-value">12569</h4>
                                                                                                                                          </div>
                                                                                                                                      </div>
                                                                                                                                      <div id="chart-widget2">
                                                                                                                                          <div className="flot-chart-placeholder" id="chart-widget-top-second"></div>
                                                                                                                                      </div>
                                                                                                                                  </div>
                                                                                                                              </div>
                                                                                                                          </div>
                                                                                                                          <div className="col-xl-4 col-md-12 box-col-12">
                                                                                                                              <div className="card gradient-info text-white">
                                                                                                                                  <div className="chart-widget-top">
                                                                                                                                      <div className="row card-body p-b-0">
                                                                                                                                          <div className="col-8">
                                                                                                                                              <h6 className="f-w-600">PRODUCTS</h6><span><span>68</span>%<i className="icon-angle-up f-12 ml-1"></i></span>
                                                                                                                                          </div>
                                                                                                                                          <div className="col-4 text-right">
                                                                                                                                              <h4 className="total-value"><span>93</span>M</h4>
                                                                                                                                          </div>
                                                                                                                                      </div>
                                                                                                                                      <div id="chart-widget3">
                                                                                                                                          <div className="flot-chart-placeholder" id="chart-widget-top-third"></div>
                                                                                                                                      </div>
                                                                                                                                  </div>
                                                                                                                              </div>
                                                                                                                          </div>
                                                                                                                      </div>
                                                                                                                      {/* <!-- Chart widget top Ends-->
                                                                                                                      <!-- market widget start--> */}
                                                                                                                      <div className="row">
                                                                                                                          <div className="col-xl-12 col-lg-12 box-col-12">
                                                                                                                              <div className="card">
                                                                                                                                  <div className="card-header">
                                                                                                                                      <div className="row">
                                                                                                                                          <div className="col-9">
                                                                                                                                              <h5>Market Trending Status</h5>
                                                                                                                                          </div>
                                                                                                                                          <div className="col-3 text-right"><i className="text-muted" data-feather="trending-up"></i></div>
                                                                                                                                      </div>
                                                                                                                                  </div>
                                                                                                                                  <div className="card-body p-0">
                                                                                                                                      <div id="chart"></div>
                                                                                                                                  </div>
                                                                                                                              </div>
                                                                                                                          </div>
                                                                                                                      </div>
                                                                                                                      {/* <!-- market widget Ends            -->
                                                                                                                      <!-- market-value widget start              --> */}
                                                                                                                      <div className="row">
                                                                                                                          <div className="col-xl-4 col-lg-12 box-col-12">
                                                                                                                              <div className="card">
                                                                                                                                  <div className="card-header">
                                                                                                                                      <div className="row">
                                                                                                                                          <div className="col-9">
                                                                                                                                              <h5>Serious Trends</h5>
                                                                                                                                          </div>
                                                                                                                                          <div className="col-3 text-right"><i className="text-muted" data-feather="shopping-bag"></i></div>
                                                                                                                                      </div>
                                                                                                                                  </div>
                                                                                                                                  <div className="card-body r-dount">
                                                                                                                                      <div id="chart1"> </div>
                                                                                                                                  </div>
                                                                                                                              </div>
                                                                                                                          </div>
                                                                                                                          <div className="col-xl-5 col-lg-12 box-col-12">
                                                                                                                              <div className="card">
                                                                                                                                  <div className="card-header">
                                                                                                                                      <div className="row">
                                                                                                                                          <div className="col-9">
                                                                                                                                              <h5>Results</h5>
                                                                                                                                          </div>
                                                                                                                                          <div className="col-3 text-right"><i className="text-muted" data-feather="shopping-bag"></i></div>
                                                                                                                                      </div>
                                                                                                                                  </div>
                                                                                                                                  <div className="card-body p-0">
                                                                                                                                      <div id="chart-year"> </div>
                                                                                                                                  </div>
                                                                                                                              </div>
                                                                                                                          </div>
                                                                                                                          <div className="col-xl-3 col-lg-12 box-col-12">
                                                                                                                              <div className="row">
                                                                                                                                  <div className="col-sm-12">
                                                                                                                                      <div className="card o-hidden small-chart">
                                                                                                                                          <div id="small-chart1"></div>
                                                                                                                                          <div className="card-body px-0 p-t-0">
                                                                                                                                              <div className="p-l-25">
                                                                                                                                                  <h4>$23,567</h4><span className="p-b-10">Amount Processed</span>
                                                                                                                                              </div>
                                                                                                                                          </div>
                                                                                                                                      </div>
                                                                                                                                  </div>
                                                                                                                                  <div className="col-sm-12">
                                                                                                                                      <div className="card o-hidden small-chart">
                                                                                                                                          <div id="small-chart2"></div>
                                                                                                                                          <div className="card-body px-0 p-t-0">
                                                                                                                                              <div className="p-l-25">
                                                                                                                                                  <h4>$23,530</h4><span className="p-b-10">Amount Spent</span>
                                                                                                                                              </div>
                                                                                                                                          </div>
                                                                                                                                      </div>
                                                                                                                                  </div>
                                                                                                                              </div>
                                                                                                                          </div>
                                                                                                                      </div>
                                                                                                                      {/* <!-- market-value widget start-->
                                                                                                                      <!-- status widget Start--> */}
                                                                                                                      <div className="row">
                                                                                                                          <div className="col-xl-7 col-md-12 box-col-12">
                                                                                                                              <div className="card">
                                                                                                                                  <div className="card-header">
                                                                                                                                      <div className="row">
                                                                                                                                          <div className="col-9">
                                                                                                                                              <h5>Order Status</h5>
                                                                                                                                          </div>
                                                                                                                                          <div className="col-3 text-right"><i className="text-muted" data-feather="navigation"></i></div>
                                                                                                                                      </div>
                                                                                                                                  </div>
                                                                                                                                  <div className="card-body pt-0 px-0">
                                                                                                                                      <div id="line-adwords"></div>
                                                                                                                                  </div>
                                                                                                                              </div>
                                                                                                                          </div>
                                                                                                                          <div className="col-xl-5 col-lg-12 box-col-12">
                                                                                                                              <div className="card">
                                                                                                                                  <div className="card-header">
                                                                                                                                      <div className="row">
                                                                                                                                          <div className="col-9">
                                                                                                                                              <h5>Finance</h5>
                                                                                                                                          </div>
                                                                                                                                          <div className="col-3 text-right"><i className="text-muted" data-feather="shopping-bag"></i></div>
                                                                                                                                      </div>
                                                                                                                                  </div>
                                                                                                                                  <div className="card-body pt-0 r-radial">
                                                                                                                                      <div id="radialBarBottom"></div>
                                                                                                                                  </div>
                                                                                                                              </div>
                                                                                                                          </div>
                                                                                                                      </div>
                                                                                                                      {/* <!-- status widget Ends--> */}
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
                                                                                                      <Script src="../assets/js/jquery-3.5.1.min.js"></Script>
                                                                                                      {/* <!-- Bootstrap js--> */}
                                                                                                      <Script src="../assets/js/bootstrap/popper.min.js"></Script>
                                                                                                      <Script src="../assets/js/bootstrap/bootstrap.js"></Script>
                                                                                                      {/* <!-- feather icon js--> */}
                                                                                                      <Script src="../assets/js/icons/feather-icon/feather.min.js"></Script>
                                                                                                      <Script src="../assets/js/icons/feather-icon/feather-icon.js"></Script>
                                                                                                      {/* <!-- Sidebar jquery--> */}
                                                                                                      <Script src="../assets/js/sidebar-menu.js"></Script>
                                                                                                      <Script src="../assets/js/config.js"></Script>
                                                                                                      {/* <!-- Plugins JS start--> */}
                                                                                                      <Script src="../assets/js/chart/chartist/chartist.js"></Script>
                                                                                                      <Script src="../assets/js/chart/chartist/chartist-plugin-tooltip.js"></Script>
                                                                                                      <Script src="../assets/js/chart/apex-chart/apex-chart.js"></Script>
                                                                                                      <Script src="../assets/js/chart/apex-chart/stock-prices.js"></Script>
                                                                                                      <Script src="../assets/js/prism/prism.min.js"></Script>
                                                                                                      <Script src="../assets/js/clipboard/clipboard.min.js"></Script>
                                                                                                      <Script src="../assets/js/counter/jquery.waypoints.min.js"></Script>
                                                                                                      <Script src="../assets/js/counter/jquery.counterup.min.js"></Script>
                                                                                                      <Script src="../assets/js/counter/counter-custom.js"></Script>
                                                                                                      <Script src="../assets/js/custom-card/custom-card.js"></Script>
                                                                                                      <Script src="../assets/js/chart-widget.js"></Script>
                                                                                                      <Script src="../assets/js/chat-menu.js"></Script>
                                                                                                      {/* <!-- Plugins JS Ends-->
                                                                                                      <!-- Theme js--> */}
                                                                                                      <Script src="../assets/js/script.js"></Script>
                                                                                                      <Script src="../assets/js/theme-customizer/customizer.js"></Script>
                                                                                                      {/* <!-- login js-->
                                                                                                      <!-- Plugin used--> */}
                                                                                                  </div>
    </>
  )
}

export default support_admin