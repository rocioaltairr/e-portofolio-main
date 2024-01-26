import React from 'react';
// import Fade from "react-reveal";
// import img1 from './profile-img.jpeg'
import logo from '../../images/logo.png'
import user from '../../images/user/01.jpg'
import profile from '../../images/page-img/profile.jpg'
import { Link } from 'react-router-dom';
import LeftSlidebar from '../Components/left_slidebar.js';

const About = () => {
    return (
        <section id="about">
          <div class="right-sidebar-mini right-sidebar">
            <div class="right-sidebar-panel p-0">
                <div class="right-sidebar-toggle bg-primary mt-3" data-extra-toggle="right-sidebar-dissmiss">
                        <i class="ri-arrow-left-line side-left-icon"></i>
                        <i class="ri-close-fill side-right-icon"></i>
                    </div>
                <div class="card shadow-none tag-details mb-0">
                    <div class="card-header d-flex justify-content-between">
                        <div class="header-title">
                            <h4 class="card-title mb-0">Tag List</h4>
                        </div>
                        <div>
                            <a href="#" data-toggle="modal" data-target="#create-note"><i class="ri-add-line font-size-20"></i></a>
                        </div>
                    </div>
                    <div class="card-body p-0">
                        <ul class="list-inline p-3 m-0 pb-0">
                        <li class="mb-3 px-2">
                            <div class="item d-flex align-items-center justify-content-between pb-3 border-bottom">
                                <div class="media align-items-center">
                                    <div class="icon icon-btn icon-btn-success">A</div>
                                    <h5>Afternoon</h5>
                                </div>
                                <div class="dropdown">
                                    <span class="dropdown-toggle dstyle=ropdown-bg" id="tag-dropdownMenuButton1"
                                        data-toggle="dropdown" aria-expanded="false" role="button">
                                        <i class="ri-more-fill"></i>
                                    </span>
                                    <div class="dropdown-menu dropdown-menu-right border-none"
                                        aria-labelledby="tag-dropdownMenuButton1">
                                        <a class="dropdown-item" data-toggle="modal" data-target="#tag-rename" href="#"><i class="las la-pen mr-3"></i>Rename</a>
                                        <a class="dropdown-item" data-extra-toggle="delete" data-closest-elem=".item" href="#"><i class="las la-trash-alt mr-3"></i>Delete</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="mb-3 px-2">
                            <div class="item d-flex align-items-center justify-content-between pb-3 border-bottom">
                                <div class="media align-items-center">
                                    <div class="icon icon-btn icon-btn-danger">B</div>
                                    <h5>Book</h5>
                                </div>
                                <div class="dropdown">
                                    <span class="dropdown-toggle dropdown-bg" id="tag-dropdownMenuButton2"
                                        data-toggle="dropdown" aria-expanded="false" role="button">
                                        <i class="ri-more-fill"></i>
                                    </span>
                                    <div class="dropdown-menu dropdown-menu-right border-none"
                                        aria-labelledby="tag-dropdownMenuButton2">
                                        <a class="dropdown-item" data-toggle="modal" data-target="#tag-rename" href="#"><i class="las la-pen mr-3"></i>Rename</a>
                                        <a class="dropdown-item" data-extra-toggle="delete" data-closest-elem=".item" href="#"><i class="las la-trash-alt mr-3"></i>Delete</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="mb-3 px-2">
                            <div class="item d-flex align-items-center justify-content-between pb-3 border-bottom">
                                <div class="media align-items-center">
                                    <div class="icon icon-btn icon-btn-purple">C</div>
                                    <h5>Cupcake</h5>
                                </div>
                                <div class="dropdown">
                                    <span class="dropdown-toggle dropdown-bg" id="tag-dropdownMenuButton3"
                                        data-toggle="dropdown" aria-expanded="false" role="button">
                                        <i class="ri-more-fill"></i>
                                    </span>
                                    <div class="dropdown-menu dropdown-menu-right border-none"
                                        aria-labelledby="tag-dropdownMenuButton3">
                                        <a class="dropdown-item" data-toggle="modal" data-target="#tag-rename" href="#"><i class="las la-pen mr-3"></i>Rename</a>
                                        <a class="dropdown-item" data-extra-toggle="delete" data-closest-elem=".item" href="#"><i class="las la-trash-alt mr-3"></i>Delete</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="mb-3 px-2">
                            <div class="item d-flex align-items-center justify-content-between pb-3 border-bottom">
                                <div class="media align-items-center">
                                    <div class="icon icon-btn icon-btn-info">D</div>
                                    <h5>Dinner</h5>
                                </div>
                                <div class="dropdown">
                                    <span class="dropdown-toggle dropdown-bg" id="tag-dropdownMenuButton4"
                                        data-toggle="dropdown" aria-expanded="false" role="button">
                                        <i class="ri-more-fill"></i>
                                    </span>
                                    <div class="dropdown-menu dropdown-menu-right border-none"
                                        aria-labelledby="tag-dropdownMenuButton4">
                                        <a class="dropdown-item" data-toggle="modal" data-target="#tag-rename" href="#"><i class="las la-pen mr-3"></i>Rename</a>
                                        <a class="dropdown-item" data-extra-toggle="delete" data-closest-elem=".item" href="#"><i class="las la-trash-alt mr-3"></i>Delete</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="mb-3 px-2">
                            <div class="item d-flex align-items-center justify-content-between pb-3 border-bottom">
                                <div class="media align-items-center">
                                    <div class="icon icon-btn icon-btn-warning">E</div>
                                    <h5>Evening Snacks</h5>
                                </div>
                                <div class="dropdown">
                                    <span class="dropdown-toggle dropdown-bg" id="tag-dropdownMenuButton5"
                                        data-toggle="dropdown" aria-expanded="false" role="button">
                                        <i class="ri-more-fill"></i>
                                    </span>
                                    <div class="dropdown-menu dropdown-menu-right border-none"
                                        aria-labelledby="tag-dropdownMenuButton5">
                                        <a class="dropdown-item" data-toggle="modal" data-target="#tag-rename" href="#"><i class="las la-pen mr-3"></i>Rename</a>
                                        <a class="dropdown-item" data-extra-toggle="delete" data-closest-elem=".item" href="#"><i class="las la-trash-alt mr-3"></i>Delete</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="mb-3 px-2">
                            <div class="item d-flex align-items-center justify-content-between pb-3 border-bottom">
                                <div class="media align-items-center">
                                    <div class="icon icon-btn icon-btn-success">F</div>
                                    <h5>Fast Track</h5>
                                </div>
                                <div class="dropdown">
                                    <span class="dropdown-toggle dropdown-bg" id="tag-dropdownMenuButton6"
                                        data-toggle="dropdown" aria-expanded="false" role="button">
                                        <i class="ri-more-fill"></i>
                                    </span>
                                    <div class="dropdown-menu dropdown-menu-right border-none"
                                        aria-labelledby="tag-dropdownMenuButton6">
                                        <a class="dropdown-item" data-toggle="modal" data-target="#tag-rename" href="#"><i class="las la-pen mr-3"></i>Rename</a>
                                        <a class="dropdown-item" data-extra-toggle="delete" data-closest-elem=".item" href="#"><i class="las la-trash-alt mr-3"></i>Delete</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="mb-3 px-2">
                            <div class="item d-flex align-items-center justify-content-between pb-3 border-bottom">
                                <div class="media align-items-center">
                                    <div class="icon icon-btn icon-btn-danger">G</div>
                                    <h5>Good Morning</h5>
                                </div>
                                <div class="dropdown">
                                    <span class="dropdown-toggle dropdown-bg" id="tag-dropdownMenuButton7"
                                        data-toggle="dropdown" aria-expanded="false" role="button">
                                        <i class="ri-more-fill"></i>
                                    </span>
                                    <div class="dropdown-menu dropdown-menu-right border-none"
                                        aria-labelledby="tag-dropdownMenuButton7">
                                        <a class="dropdown-item" data-toggle="modal" data-target="#tag-rename" href="#"><i class="las la-pen mr-3"></i>Rename</a>
                                        <a class="dropdown-item" data-extra-toggle="delete" data-closest-elem=".item" href="#"><i class="las la-trash-alt mr-3"></i>Delete</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="mb-3 px-2">
                            <div class="item d-flex align-items-center justify-content-between pb-3 border-bottom">
                                <div class="media align-items-center">
                                    <div class="icon icon-btn icon-btn-info">H</div>
                                    <h5>Health</h5>
                                </div>
                                <div class="dropdown">
                                    <span class="dropdown-toggle dropdown-bg" id="tag-dropdownMenuButton8"
                                        data-toggle="dropdown" aria-expanded="false" role="button">
                                        <i class="ri-more-fill"></i>
                                    </span>
                                    <div class="dropdown-menu dropdown-menu-right border-none"
                                        aria-labelledby="tag-dropdownMenuButton8">
                                        <a class="dropdown-item" data-toggle="modal" data-target="#tag-rename" href="#"><i class="las la-pen mr-3"></i>Rename</a>
                                        <a class="dropdown-item" data-extra-toggle="delete" data-closest-elem=".item" href="#"><i class="las la-trash-alt mr-3"></i>Delete</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="mb-3 px-2">
                            <div class="item d-flex align-items-center justify-content-between pb-3 border-bottom">
                                <div class="media align-items-center">
                                    <div class="icon icon-btn icon-btn-warning">I</div>
                                    <h5>Ice Cream</h5>
                                </div>
                                <div class="dropdown">
                                    <span class="dropdown-toggle dropdown-bg" id="tag-dropdownMenuButton9"
                                        data-toggle="dropdown" aria-expanded="false" role="button">
                                        <i class="ri-more-fill"></i>
                                    </span>
                                    <div class="dropdown-menu dropdown-menu-right border-none"
                                        aria-labelledby="tag-dropdownMenuButton9">
                                        <a class="dropdown-item" data-toggle="modal" data-target="#tag-rename" href="#"><i class="las la-pen mr-3"></i>Rename</a>
                                        <a class="dropdown-item" data-extra-toggle="delete" data-closest-elem=".item" href="#"><i class="las la-trash-alt mr-3"></i>Delete</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="mb-3 px-2">
                            <div class="item d-flex align-items-center justify-content-between pb-3 border-bottom">
                                <div class="media align-items-center">
                                    <div class="icon icon-btn icon-btn-success">J</div>
                                    <h5>Juice</h5>
                                </div>
                                <div class="dropdown">
                                    <span class="dropdown-toggle dropdown-bg" id="tag-dropdownMenuButton10"
                                        data-toggle="dropdown" aria-expanded="false" role="button">
                                        <i class="ri-more-fill"></i>
                                    </span>
                                    <div class="dropdown-menu dropdown-menu-right border-none"
                                        aria-labelledby="tag-dropdownMenuButton10">
                                        <a class="dropdown-item" data-toggle="modal" data-target="#tag-rename" href="#"><i class="las la-pen mr-3"></i>Rename</a>
                                        <a class="dropdown-item" data-extra-toggle="delete" data-closest-elem=".item" href="#"><i class="las la-trash-alt mr-3"></i>Delete</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="mb-3 px-2">
                            <div class="item d-flex align-items-center justify-content-between pb-3 border-bottom">
                                <div class="media align-items-center">
                                    <div class="icon icon-btn icon-btn-danger">K</div>
                                    <h5>Kangaroo</h5>
                                </div>
                                <div class="dropdown">
                                    <span class="dropdown-toggle dropdown-bg" id="tag-dropdownMenuButton11"
                                        data-toggle="dropdown" aria-expanded="false" role="button">
                                        <i class="ri-more-fill"></i>
                                    </span>
                                    <div class="dropdown-menu dropdown-menu-right border-none"
                                        aria-labelledby="tag-dropdownMenuButton11">
                                        <a class="dropdown-item" data-toggle="modal" data-target="#tag-rename" href="#"><i class="las la-pen mr-3"></i>Rename</a>
                                        <a class="dropdown-item" data-extra-toggle="delete" data-closest-elem=".item" href="#"><i class="las la-trash-alt mr-3"></i>Delete</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="mb-3 px-2">
                            <div class="item d-flex align-items-center justify-content-between pb-3 border-bottom">
                                <div class="media align-items-center">
                                    <div class="icon icon-btn icon-btn-purple">L</div>
                                    <h5>Leaves</h5>
                                </div>
                                <div class="dropdown">
                                    <span class="dropdown-toggle dropdown-bg" id="tag-dropdownMenuButton12"
                                        data-toggle="dropdown" aria-expanded="false" role="button">
                                        <i class="ri-more-fill"></i>
                                    </span>
                                    <div class="dropdown-menu dropdown-menu-right border-none"
                                        aria-labelledby="tag-dropdownMenuButton12">
                                        <a class="dropdown-item" data-toggle="modal" data-target="#tag-rename" href="#"><i class="las la-pen mr-3"></i>Rename</a>
                                        <a class="dropdown-item" data-extra-toggle="delete" data-closest-elem=".item" href="#"><i class="las la-trash-alt mr-3"></i>Delete</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="mb-3 px-2">
                            <div class="item d-flex align-items-center justify-content-between pb-3 border-bottom">
                                <div class="media align-items-center">
                                    <div class="icon icon-btn icon-btn-info">M</div>
                                    <h5>Machine</h5>
                                </div>
                                <div class="dropdown">
                                    <span class="dropdown-toggle dropdown-bg" id="tag-dropdownMenuButton13"
                                        data-toggle="dropdown" aria-expanded="false" role="button">
                                        <i class="ri-more-fill"></i>
                                    </span>
                                    <div class="dropdown-menu dropdown-menu-right border-none"
                                        aria-labelledby="tag-dropdownMenuButton13">
                                        <a class="dropdown-item" data-toggle="modal" data-target="#tag-rename" href="#"><i class="las la-pen mr-3"></i>Rename</a>
                                        <a class="dropdown-item" data-extra-toggle="delete" data-closest-elem=".item" href="#"><i class="las la-trash-alt mr-3"></i>Delete</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="px-2">
                            <div class="item d-flex align-items-center justify-content-between">
                                <div class="media align-items-center">
                                    <div class="icon icon-btn icon-btn-warning">N</div>
                                    <h5>Nail Polish</h5>
                                </div>
                                <div class="dropdown">
                                    <span class="dropdown-toggle dropdown-bg" id="tag-dropdownMenuButton14"
                                        data-toggle="dropdown" aria-expanded="false" role="button">
                                        <i class="ri-more-fill"></i>
                                    </span>
                                    <div class="dropdown-menu dropdown-menu-right border-none"
                                        aria-labelledby="tag-dropdownMenuButton14">
                                        <a class="dropdown-item" data-toggle="modal" data-target="#tag-rename" href="#"><i class="las la-pen mr-3"></i>Rename</a>
                                        <a class="dropdown-item" data-extra-toggle="delete" data-closest-elem=".item" href="#"><i class="las la-trash-alt mr-3"></i>Delete</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
          </div>
          <div class="modal fade" id="create-note" tabindex="-1" role="dialog" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content">
                      <div class="modal-body">
                          <div class="popup text-left">
                              <h4 class="mb-4">Create New Tag</h4>
                              <div class="content create-workform">
                                  {/* <input type="text" class="form-control" placeholder="Enter Tag Name"> */}
                                  <div class="col-lg-12 mt-4">
                                      <div class="d-flex flex-wrap align-items-ceter justify-content-center">
                                          <div class="btn btn-outline-primary mr-4" data-dismiss="modal">Create</div>
                                          <div class="btn btn-primary" data-dismiss="modal">Cancel</div>
                                      </div>
                                  </div>  
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>    
          <div class="modal fade" id="tag-rename" tabindex="-1" role="dialog" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered" role="document">
                  <div class="modal-content">
                      <div class="modal-body">
                          <div class="popup text-left">
                              <h4 class="mb-4">Rename Your Tag</h4>
                              <div class="content create-workform">
                                  {/* <input type="text" class="form-control" placeholder="Enter Tag Name"> */}
                                  <div class="col-lg-12 mt-4">
                                      <div class="d-flex flex-wrap align-items-ceter justify-content-center">
                                          <div class="btn btn-primary mr-4" data-dismiss="modal">Cancel</div>
                                          <div class="btn btn-outline-primary" data-dismiss="modal">Save</div>
                                      </div>
                                  </div>  
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>     
          <div class="iq-top-navbar">
              <div class="iq-navbar-custom">
                  <nav class="navbar navbar-expand-lg navbar-light p-0">
                      <div class="iq-navbar-logo d-flex align-items-center justify-content-between">
                          <i class="ri-menu-line wrapper-menu"></i>
                      
                      </div>
                      <div class="d-flex align-items-center">
                          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"  aria-label="Toggle navigation">
                          <i class="ri-menu-3-line"></i>
                          </button>
                          <div class="collapse navbar-collapse" id="navbarSupportedContent">
                              <ul class="navbar-nav ml-auto navbar-list align-items-center">

                      
                              <li class="caption-content">
                                  <a href="#" class="iq-user-toggle d-flex align-items-center justify-content-between" id="h-dropdownMenuButton001" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                      <img src={user} class="img-fluid rounded avatar-50"></img>
                                  </a>
                                  <div class="dropdown-menu dropdown-menu-right w-100 border-0 py-2" aria-labelledby="h-dropdownMenuButton001">
                                      <a class="dropdown-item mb-2" href="../app/user-profile.html">
                                          <i class="lar la-user-circle font-size-20 mr-1"></i>
                                          <Link class="mt-2" to="/about">My Profile</Link>
                                      </a>
                                  </div>
                              </li>
                              </ul>                     
                          </div> 
                      </div>
                  </nav>
              </div>
          </div>      
          <LeftSlidebar></LeftSlidebar>     
          <div class="content-page">
              <div class="container-fluid">
              <div class="desktop-header">
                  <div class="card card-block topnav-left">
                      <div class="card-body d-flex align-items-center">
                          <div class="d-flex justify-content-between">
                              <h4 class="text-capitalize">MSC COMPUTER SCIENCE JOURNEY IN ESSEX</h4>
                          </div>
                      </div>
                  </div>
                  <div class="card topnav-right">

                      </div>    </div>
              </div>        
          </div>
          <div class="content-page">
              <div class="container-fluid">
              <div class="row">
                  <div class="col-lg-12">
                      <div class="card car-transparent">
                          <div class="card-body p-0">
                          <div class="profile-image position-relative">
                            <img src={profile} class="img-fluid rounded w-100"></img>
                          </div>
                          <div class="profile-overly">
                              <h3>Rocio Altair</h3>
                              <span>Software Engineer</span>
                          </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-6">
                      <div class="card card-block card-stretch card-height">
                          <div class="card-body">
                          <h4 class="mb-3">Personal Profile</h4>
                          <p class="mb-0 text-ellipsis short-4">
                              HI
                          </p>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-6">
                      <div class="card card-block card-stretch card-height">
                          <div class="card-body text-center">
                          <svg width="60" height="48" viewBox="0 0 60 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                  d="M23.9091 24.5297C24.495 25.1156 25.4447 25.1156 26.0306 24.5297L27.0909 23.4694C27.6769 22.8834 27.6769 21.9338 27.0909 21.3478L23.7422 18L27.09 14.6512C27.6759 14.0653 27.6759 13.1156 27.09 12.5297L26.0297 11.4694C25.4437 10.8834 24.4941 10.8834 23.9081 11.4694L18.4387 16.9387C17.8528 17.5247 17.8528 18.4744 18.4387 19.0603L23.9091 24.5297V24.5297ZM32.91 23.4703L33.9703 24.5306C34.5563 25.1166 35.5059 25.1166 36.0919 24.5306L41.5613 19.0613C42.1472 18.4753 42.1472 17.5256 41.5613 16.9397L36.0919 11.4703C35.5059 10.8844 34.5563 10.8844 33.9703 11.4703L32.91 12.5306C32.3241 13.1166 32.3241 14.0662 32.91 14.6522L36.2578 18L32.91 21.3488C32.3241 21.9347 32.3241 22.8844 32.91 23.4703V23.4703ZM58.5 39H35.7694C35.7 40.8572 34.3903 42 32.7 42H27C25.2478 42 23.9044 40.3622 23.9278 39H1.5C0.675 39 0 39.675 0 40.5V42C0 45.3 2.7 48 6 48H54C57.3 48 60 45.3 60 42V40.5C60 39.675 59.325 39 58.5 39ZM54 4.5C54 2.025 51.975 0 49.5 0H10.5C8.025 0 6 2.025 6 4.5V36H54V4.5ZM48 30H12V6H48V30Z"
                                  fill="#81F4B2" />
                          </svg>
                          <h2 class="mb-2 mt-3">3+ years </h2>
                          <h4>Experience</h4>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-6">
                      <div class="card card-block card-stretch card-height">
                      </div>
                  </div>
                  <div class="col-lg-3 col-md-6 col-sm-6">
                      <div class="card card-block card-stretch card-height">
                      </div>
                  </div>
                  <div class="col-lg-5 col-md-6">
                      <div class="card card-block card-stretch card-height">
                          <div class="card-header">
                              <div class="header-title">
                                  <h4 class="card-title">Education Traning</h4>
                              </div>
                          </div>
                          <div class="card-body">
                              <ul class="list-inline p-0 m-0">
                                  <li class="d-flex align-items-center mb-3">
                                      <div class="profile-icon iq-icon-box rounded-small bg-info-light text-center">
                                          <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path
                                              d="M17.1107 17.1746L12 22.2853L6.88929 17.1746C3.05893 17.3406 0 20.4746 0 24.3424V24.8567C0 26.2764 1.15179 27.4281 2.57143 27.4281H21.4286C22.8482 27.4281 24 26.2764 24 24.8567V24.3424C24 20.4746 20.9411 17.3406 17.1107 17.1746ZM0.728571 4.27457L1.07143 4.35493V7.4835C0.696429 7.7085 0.428571 8.09957 0.428571 8.571C0.428571 9.021 0.675 9.396 1.02321 9.62636L0.1875 12.9639C0.0964286 13.3335 0.3 13.7139 0.594643 13.7139H2.83393C3.12857 13.7139 3.33214 13.3335 3.24107 12.9639L2.40536 9.62636C2.75357 9.396 3 9.021 3 8.571C3 8.09957 2.73214 7.7085 2.35714 7.4835V4.66564L5.89286 5.51743C5.43214 6.43886 5.14286 7.46743 5.14286 8.571C5.14286 12.3585 8.2125 15.4281 12 15.4281C15.7875 15.4281 18.8571 12.3585 18.8571 8.571C18.8571 7.46743 18.5732 6.43886 18.1071 5.51743L23.2661 4.27457C24.2411 4.03886 24.2411 2.82278 23.2661 2.58707L13.0661 0.122784C12.3696 -0.0432879 11.6357 -0.0432879 10.9393 0.122784L0.728571 2.58171C-0.241071 2.81743 -0.241071 4.03886 0.728571 4.27457Z"
                                              fill="#88DFFF" />
                                          </svg>
                                      </div>
                                      <div class="pl-3">
                                          <h5>Fu Jen Catholic University</h5>
                                          <p class="mb-0">Bachelor of Science - Textile Design | 2013</p>
                                      </div>
                                  </li>
                                  <li class="d-flex align-items-center mb-3">
                                      <div class="profile-icon iq-icon-box rounded-small bg-warning-light text-center">
                                          <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path
                                              d="M23.25 6.46152V7.26922C23.25 7.37632 23.2105 7.47904 23.1402 7.55478C23.0698 7.63051 22.9745 7.67306 22.875 7.67306H21.75V8.27883C21.75 8.61337 21.4981 8.8846 21.1875 8.8846H2.8125C2.50186 8.8846 2.25 8.61337 2.25 8.27883V7.67306H1.125C1.02554 7.67306 0.930161 7.63051 0.859835 7.55478C0.789509 7.47904 0.75 7.37632 0.75 7.26922V6.46152C0.750001 6.38163 0.772007 6.30353 0.813234 6.2371C0.854462 6.17068 0.913058 6.11892 0.981609 6.08837L11.8566 1.64606C11.9484 1.60512 12.0516 1.60512 12.1434 1.64606L23.0184 6.08837C23.0869 6.11892 23.1455 6.17068 23.1868 6.2371C23.228 6.30353 23.25 6.38163 23.25 6.46152V6.46152ZM22.125 21.8077H1.875C1.25367 21.8077 0.75 22.3501 0.75 23.0192V23.8269C0.75 23.934 0.789509 24.0367 0.859835 24.1125C0.930161 24.1882 1.02554 24.2308 1.125 24.2308H22.875C22.9745 24.2308 23.0698 24.1882 23.1402 24.1125C23.2105 24.0367 23.25 23.934 23.25 23.8269V23.0192C23.25 22.3501 22.7463 21.8077 22.125 21.8077ZM4.5 9.69229V19.3846H2.8125C2.50186 19.3846 2.25 19.6558 2.25 19.9904V21H21.75V19.9904C21.75 19.6558 21.4981 19.3846 21.1875 19.3846H19.5V9.69229H16.5V19.3846H13.5V9.69229H10.5V19.3846H7.5V9.69229H4.5Z"
                                              fill="#FFCB99" />
                                          </svg>
                                      </div>
                                      <div class="pl-3">
                                          <h5>iOS Mobile engineering</h5>
                                          <p class="mb-0">Institute for Information Industry| 2020</p>
                                      </div>
                                  </li>
                                  <li class="d-flex align-items-center mb-3">
                                      <div class="profile-icon iq-icon-box rounded-small bg-success-light text-center">
                                          <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <g clip-path="url(#clip0)">
                                              <path
                                                  d="M0 8.39995V18.5999C0 18.9314 0.2685 19.1999 0.6 19.1999H3.6V7.19994H1.2C0.537375 7.19994 0 7.73732 0 8.39995ZM13.5 6.59994H12.6V5.09994C12.6 4.93419 12.4658 4.79994 12.3 4.79994H11.7C11.5343 4.79994 11.4 4.93419 11.4 5.09994V7.49994C11.4 7.66569 11.5343 7.79995 11.7 7.79995H13.5C13.6658 7.79995 13.8 7.66569 13.8 7.49994V6.89994C13.8 6.73419 13.6658 6.59994 13.5 6.59994ZM18.6656 4.20144L12.6656 0.201317C12.4685 0.0700041 12.2369 -6.10352e-05 12 -6.10352e-05C11.7631 -6.10352e-05 11.5315 0.0700041 11.3344 0.201317L5.33438 4.20144C5.17003 4.31101 5.03527 4.45945 4.94206 4.63358C4.84884 4.80772 4.80004 5.00218 4.8 5.19969V19.1999H9.6V13.7999C9.6 13.4684 9.8685 13.1999 10.2 13.1999H13.8C14.1315 13.1999 14.4 13.4684 14.4 13.7999V19.1999H19.2V5.20007C19.2 4.79882 18.9994 4.42382 18.6656 4.20144ZM12 9.59995C10.3433 9.59995 9 8.2567 9 6.59994C9 4.94319 10.3433 3.59994 12 3.59994C13.6568 3.59994 15 4.94319 15 6.59994C15 8.2567 13.6568 9.59995 12 9.59995ZM22.8 7.19994H20.4V19.1999H23.4C23.7315 19.1999 24 18.9314 24 18.5999V8.39995C24 7.73732 23.4626 7.19994 22.8 7.19994Z"
                                                  fill="#81F4B2" />
                                          </g>
                                          <defs>
                                              <clipPath id="clip1">
                                                  <rect width="24" height="19.2" fill="white" />
                                              </clipPath>
                                          </defs>
                                          </svg>
                                      </div>
                                      <div class="pl-3">
                                          <h5>42 Prague</h5>
                                          <p class="mb-0">Cadet | 2023</p>
                                      </div>
                                  </li>
                                  <li class="d-flex align-items-center mb-2">
                                      <div class="profile-icon iq-icon-box rounded-small bg-info-light text-center">
                                          <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path
                                              d="M17.1107 17.1746L12 22.2853L6.88929 17.1746C3.05893 17.3406 0 20.4746 0 24.3424V24.8567C0 26.2764 1.15179 27.4281 2.57143 27.4281H21.4286C22.8482 27.4281 24 26.2764 24 24.8567V24.3424C24 20.4746 20.9411 17.3406 17.1107 17.1746ZM0.728571 4.27457L1.07143 4.35493V7.4835C0.696429 7.7085 0.428571 8.09957 0.428571 8.571C0.428571 9.021 0.675 9.396 1.02321 9.62636L0.1875 12.9639C0.0964286 13.3335 0.3 13.7139 0.594643 13.7139H2.83393C3.12857 13.7139 3.33214 13.3335 3.24107 12.9639L2.40536 9.62636C2.75357 9.396 3 9.021 3 8.571C3 8.09957 2.73214 7.7085 2.35714 7.4835V4.66564L5.89286 5.51743C5.43214 6.43886 5.14286 7.46743 5.14286 8.571C5.14286 12.3585 8.2125 15.4281 12 15.4281C15.7875 15.4281 18.8571 12.3585 18.8571 8.571C18.8571 7.46743 18.5732 6.43886 18.1071 5.51743L23.2661 4.27457C24.2411 4.03886 24.2411 2.82278 23.2661 2.58707L13.0661 0.122784C12.3696 -0.0432879 11.6357 -0.0432879 10.9393 0.122784L0.728571 2.58171C-0.241071 2.81743 -0.241071 4.03886 0.728571 4.27457Z"
                                              fill="#88DFFF" />
                                          </svg>
                                      </div>
                                      <div class="pl-3">
                                          <h5>Essex University</h5>
                                          <p class="mb-0">Master of Science in Computer Science | 2023</p>
                                      </div>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-7 col-md-6">
                      <div class="row">
                          <div class="col-md-12 col-lg-6">
                          <div class="card card-block card-stretch card-height">
                              <div class="card-header">
                                  <div class="header-title">
                                      <h4 class="card-title">Languages</h4>
                                  </div>
                              </div>
                              <div class="card-body">
                                  <ul class="list-inline p-0 mb-0">
                                      <li>
                                      <div class="d-flex align-items-center justify-content-between mb-3 row">
                                          <div class="col-10">
                                              <div class="d-flex align-items-center">
                                                  <p class="mb-0 font-size-16 mr-3">English</p>
                                                  <div class="iq-progress-bar-linear d-inline-block iq-progress-height mt-1 w-80">
                                                  <div class="iq-progress-bar iq-bg-danger">
                                                      <span class="bg-danger" data-percent="75"></span>
                                                  </div>
                                                  </div>
                                              </div>
                                          </div>
                                          <div class="col-2">
                                              <div class="percentage float-right text-danger font-weight-bold">75%
                                              </div>
                                          </div>                                    
                                      </div>
                                      </li>
                                      <li>
                                      <div class="d-flex align-items-center justify-content-between mb-3 row">
                                          <div class="col-10">
                                              <div class="d-flex align-items-center">
                                                  <p class="mb-0 font-size-16 mr-3">Chinese</p>
                                                  <div class="iq-progress-bar-linear d-inline-block iq-progress-height mt-1 w-80">
                                                  <div class="iq-progress-bar iq-bg-primary">
                                                      <span class="bg-primary" data-percent="50"></span>
                                                  </div>
                                                  </div>
                                              </div>
                                          </div>                                   
                                          <div class="col-2">
                                              <div class="percentage float-right text-primary font-weight-bold">100%
                                              </div>
                                          </div>
                                      </div>
                                      </li>
                                      <li>
                                      <div class="d-flex align-items-center justify-content-between row">
                                          <div class="col-10">
                                              <div class="d-flex align-items-center">
                                                  <p class="mb-0 font-size-16 mr-3">Spanish</p>
                                                  <div class="iq-progress-bar-linear d-inline-block iq-progress-height mt-1 w-80">
                                                  <div class="iq-progress-bar iq-bg-success">
                                                      <span class="bg-success" data-percent="65"></span>
                                                  </div>
                                                  </div>
                                              </div>
                                          </div>                                   
                                          <div class="col-2">
                                              <div class="percentage float-right text-success font-weight-bold">65%
                                              </div>
                                          </div>
                                      </div>
                                      </li>
                                  </ul>
                              </div>
                          </div>
                          </div>
                          <div class="col-md-12 col-lg-6">
                          <div class="card card-block card-stretch card-height">
                              <div class="card-header">
                                  <div class="header-title">
                                      <h4 class="card-title">Social</h4>
                                  </div>
                              </div>
                          </div>
                          </div>
                          <div class="col-lg-12">
                              <div class="card card-block card-stretch card-height">
                                  <div class="card-header">
                                      <div class="header-title">
                                          <h4 class="card-title">Experience</h4>
                                      </div>
                                  </div>
                                  <div class="card-body">
                                      <ul class="list-inline p-0 m-0">
                                          <li class="d-flex align-items-center mb-3">
                                              <div class="profile-icon iq-icon-box rounded-small bg-info-light text-center">
                                                  1
                                              </div>
                                              <div class="pl-3">
                                                  <h5>Software Engineer</h5>
                                                  <p class="mb-0">BairesDev | 2023</p>
                                              </div>
                                          </li>
                                          <li class="d-flex align-items-center mb-3">
                                              <div class="profile-icon iq-icon-box rounded-small bg-warning-light text-center">
                                                  2
                                              </div>
                                              <div class="pl-3">
                                                  <h5>Flutter Developer</h5>
                                                  <p class="mb-0">ViewSonic| 2022</p>
                                              </div>
                                          </li>
                                          {/* <li class="d-flex align-items-center mb-3">
                                              <div class="profile-icon iq-icon-box rounded-small bg-success-light text-center">
                                                  <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                  <g clip-path="url(#clip0)">
                                                      <path
                                                          d="M0 8.39995V18.5999C0 18.9314 0.2685 19.1999 0.6 19.1999H3.6V7.19994H1.2C0.537375 7.19994 0 7.73732 0 8.39995ZM13.5 6.59994H12.6V5.09994C12.6 4.93419 12.4658 4.79994 12.3 4.79994H11.7C11.5343 4.79994 11.4 4.93419 11.4 5.09994V7.49994C11.4 7.66569 11.5343 7.79995 11.7 7.79995H13.5C13.6658 7.79995 13.8 7.66569 13.8 7.49994V6.89994C13.8 6.73419 13.6658 6.59994 13.5 6.59994ZM18.6656 4.20144L12.6656 0.201317C12.4685 0.0700041 12.2369 -6.10352e-05 12 -6.10352e-05C11.7631 -6.10352e-05 11.5315 0.0700041 11.3344 0.201317L5.33438 4.20144C5.17003 4.31101 5.03527 4.45945 4.94206 4.63358C4.84884 4.80772 4.80004 5.00218 4.8 5.19969V19.1999H9.6V13.7999C9.6 13.4684 9.8685 13.1999 10.2 13.1999H13.8C14.1315 13.1999 14.4 13.4684 14.4 13.7999V19.1999H19.2V5.20007C19.2 4.79882 18.9994 4.42382 18.6656 4.20144ZM12 9.59995C10.3433 9.59995 9 8.2567 9 6.59994C9 4.94319 10.3433 3.59994 12 3.59994C13.6568 3.59994 15 4.94319 15 6.59994C15 8.2567 13.6568 9.59995 12 9.59995ZM22.8 7.19994H20.4V19.1999H23.4C23.7315 19.1999 24 18.9314 24 18.5999V8.39995C24 7.73732 23.4626 7.19994 22.8 7.19994Z"
                                                          fill="#81F4B2" />
                                                  </g>
                                                  <defs>
                                                      <clipPath id="clip1">
                                                          <rect width="24" height="19.2" fill="white" />
                                                      </clipPath>
                                                  </defs>
                                                  </svg>
                                              </div>
                                              <div class="pl-3">
                                                  <h5>42 Prague</h5>
                                                  <p class="mb-0">Cadet | 2023</p>
                                              </div>
                                          </li>
                                          <li class="d-flex align-items-center mb-2">
                                              <div class="profile-icon iq-icon-box rounded-small bg-info-light text-center">
                                                  <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                  <path
                                                      d="M17.1107 17.1746L12 22.2853L6.88929 17.1746C3.05893 17.3406 0 20.4746 0 24.3424V24.8567C0 26.2764 1.15179 27.4281 2.57143 27.4281H21.4286C22.8482 27.4281 24 26.2764 24 24.8567V24.3424C24 20.4746 20.9411 17.3406 17.1107 17.1746ZM0.728571 4.27457L1.07143 4.35493V7.4835C0.696429 7.7085 0.428571 8.09957 0.428571 8.571C0.428571 9.021 0.675 9.396 1.02321 9.62636L0.1875 12.9639C0.0964286 13.3335 0.3 13.7139 0.594643 13.7139H2.83393C3.12857 13.7139 3.33214 13.3335 3.24107 12.9639L2.40536 9.62636C2.75357 9.396 3 9.021 3 8.571C3 8.09957 2.73214 7.7085 2.35714 7.4835V4.66564L5.89286 5.51743C5.43214 6.43886 5.14286 7.46743 5.14286 8.571C5.14286 12.3585 8.2125 15.4281 12 15.4281C15.7875 15.4281 18.8571 12.3585 18.8571 8.571C18.8571 7.46743 18.5732 6.43886 18.1071 5.51743L23.2661 4.27457C24.2411 4.03886 24.2411 2.82278 23.2661 2.58707L13.0661 0.122784C12.3696 -0.0432879 11.6357 -0.0432879 10.9393 0.122784L0.728571 2.58171C-0.241071 2.81743 -0.241071 4.03886 0.728571 4.27457Z"
                                                      fill="#88DFFF" />
                                                  </svg>
                                              </div>
                                              <div class="pl-3">
                                                  <h5>Essex University</h5>
                                                  <p class="mb-0">Master of Science in Computer Science | 2023</p>
                                              </div>
                                          </li> */}
                                      </ul>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                      <div class="card card-block card-stretch card-height">
                          <div class="card-header">
                          <div class="header-title">
                              <h4 class="card-title">Professional Skills</h4>
                          </div>
                          </div>
                          <div class="card-body">
                          <ul class="list-inline p-0 mb-0">
                              <li>
                                  <div class="d-flex align-items-center justify-content-between mb-4 row">
                                      <div class="col-lg-4">
                                      <p class="mb-0 font-size-16">Photoshop</p>
                                      </div>
                                      <div class="col-lg-8">
                                      <div class="iq-progress-bar bg-primary-light mt-2">
                                          <span class="bg-primary iq-progress progress-1" data-percent="85">
                                              <span class="progress-text-one bg-primary">85%</span>
                                          </span>
                                      </div>
                                      </div>
                                  </div>
                              </li>
                              <li>
                                  <div class="d-flex align-items-center justify-content-between mb-4 row">
                                      <div class="col-lg-4">
                                      <p class="mb-0 font-size-16">Illustrator</p>
                                      </div>
                                      <div class="col-lg-8">
                                      <div class="iq-progress-bar bg-warning-light mt-2">
                                          <span class="bg-warning iq-progress progress-1" data-percent="65">
                                              <span class="progress-text-one bg-warning">65%</span>
                                          </span>
                                      </div>
                                      </div>
                                  </div>
                              </li>
                              <li>
                                  <div class="d-flex align-items-center justify-content-between mb-4 row">
                                      <div class="col-lg-4">
                                      <p class="mb-0 font-size-16">Adobe XD</p>
                                      </div>
                                      <div class="col-lg-8">
                                      <div class="iq-progress-bar bg-success-light mt-2">
                                          <span class="bg-success iq-progress progress-1" data-percent="55">
                                              <span class="progress-text-one bg-success">55%</span>
                                          </span>
                                      </div>
                                      </div>
                                  </div>
                              </li>
                              <li>
                                  <div class="d-flex align-items-center justify-content-between row">
                                      <div class="col-lg-4">
                                      <p class="mb-0 font-size-16">Figma</p>
                                      </div>
                                      <div class="col-lg-8">
                                      <div class="iq-progress-bar bg-info-light mt-2">
                                          <span class="bg-info iq-progress progress-1" data-percent="60">
                                              <span class="progress-text-one bg-info">60%</span>
                                          </span>
                                      </div>
                                      </div>
                                  </div>
                              </li>
                          </ul>
                          </div>
                      </div>
                  </div>
                  <div class="col-lg-4 col-md-6">
                      <div class="card card-block card-stretch card-height">
                          <div class="card-header">
                          <div class="header-title">
                              <h4 class="card-title">Personal Skills</h4>
                          </div>
                          </div>
                          <div class="card-body">
                          <ul class="list-inline p-0 m-0">
                              <li class="mb-3">
                                  <div class="d-flex align-items-center">
                                      <div class="badge badge-primary iq-number">1</div>
                                      <div class="ml-4">
                                      <p class="mb-0 font-size-16">Creative spirit</p>
                                      </div>
                                  </div>
                              </li>
                              <li class="mb-3">
                                  <div class="d-flex align-items-center">
                                      <div class="badge badge-primary iq-number">2</div>
                                      <div class="ml-4">
                                      <p class="mb-0 font-size-16">Reliable and professional</p>
                                      </div>
                                  </div>
                              </li>
                              <li class="mb-3">
                                  <div class="d-flex align-items-center">
                                      <div class="badge badge-primary iq-number">3</div>
                                      <div class="ml-4">
                                      <p class="mb-0 font-size-16">Time management</p>
                                      </div>
                                  </div>
                              </li>
                              <li class="mb-3">
                                  <div class="d-flex align-items-center">
                                      <div class="badge badge-primary iq-number">4</div>
                                      <div class="ml-4">
                                      <p class="mb-0 font-size-16">Organized</p>
                                      </div>
                                  </div>
                              </li>
                              <li class="">
                                  <div class="d-flex align-items-center">
                                      <div class="badge badge-primary iq-number">5</div>
                                      <div class="ml-4">
                                      <p class="mb-0 font-size-16">Organized</p>
                                      </div>
                                  </div>
                              </li>
                          </ul>
                          </div>
                      </div>
                  </div>
                  <div class="col-md-6 col-lg-4">
                      <div class="card card-block card-stretch card-height">
                          <div class="card-header">
                          <div class="header-title">
                              <h4 class="card-title">Contact Information</h4>
                          </div>
                          </div>
                          <div class="card-body">
                              rocioaltair01@gmail.com<br/>
                              +886 970129378
                          </div>
                      </div>
                  </div>
              </div>
              </div>
          </div>
        </section>
      );
}
export default About 