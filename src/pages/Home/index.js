import React from 'react';

import About from '.././About/about.js'
import Resume from '.././Resume/index.js'
import ModuleNote from '../Components/module_note.js'

import user from '../../images/user/01.jpg'
import { Link } from 'react-router-dom';
import LeftSlidebar from '../Components/left_slidebar.js';

const Home = () => {
    return (
        <div>
            {/* <div id="loading">
                <div id="loading-center">
                </div>
            </div> */}
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
                                    <span class="dropdown-toggle dropdown-bg" id="tag-dropdownMenuButton1"
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
            {/* <div class="wrapper"> */}
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
                                            {/* <img src="../assets/images/user/1.jpg" class="img-fluid rounded avatar-50"></img> */}
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
                    <div class="container-fluid note-details">
                    <div class="desktop-header">
                        <div class="card card-block topnav-left">
                            <div class="card-body write-card">
                                <div class="d-flex align-items-center justify-content-between">
                                    <div class="iq-note-callapse-menu">
                                        <a class="iq-note-callapse-btn show-note-button" role="button">
                                            <i class="las la-pencil-alt pr-2"></i>MSC COMPUTER SCIENCE JOURNEY IN ESSEX
                                        </a>
                                        <span class="hide-note-button d-none"><i class="las la-folder pr-2"></i>Folder</span>
                                    </div>
                                    <div class="note-right media align-items-top hide-note-button d-none">
                                        <div class="mr-2"><a href="#" class="btn view-btn body-bg" data-toggle="modal" data-target="#share-note">Share</a></div>
                                        <div class="view-btn btn-dropdown body-bg rounded">
                                            <div class="dropdown">
                                                <span class="dropdown-toggle" id="dropdownMenuButton1" data-toggle="dropdown">
                                                    <i class="ri-more-2-fill"></i>
                                                </span>
                                                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton1">
                                                    <a class="dropdown-item" href="#"><i class="lar la-heart mr-3"></i>Add To Favourite</a>
                                                    <a class="dropdown-item" href="#"><i class="las la-thumbtack mr-3"></i>Mark As Pin</a>
                                                    <a class="dropdown-item" href="#"><i class="las la-trash-alt mr-3"></i>Move to Trash</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>          
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="collapse" id="collapseMenu">
                                <div class="card card-block card-stretch">
                                    <div class="card-body write-card">
                                        <div class="container-fluid collapse-fluid">
                                            <div class="row">
                                                <div class="col-md-12 col-lg-12 p-0">
                                                    <div class="card card-transparent card-block card-stretch event-note">
                                                        <div class="card-body px-0 bukmark">
                                                            <div class="d-flex align-items-center justify-content-between pb-2 mb-3 border-bottom">                                                    
                                                                <div class="quill-tool">
                                                                </div>
                                                                <div class="iq-full-screen"><a href="#" class="" id="btnFullscreen"><i class="las la-expand-arrows-alt font-size-18"></i></a></div>
                                                            </div>
                                                            <div id="quill-toolbar">
                                                                <h1 class="mb-3">Birthday Bash</h1>
                                                                <p>Hosting friend's birthday party and purchasing items.</p>
                                                                <ul>
                                                                    <li>Cake</li>
                                                                    <li>Balloons</li>
                                                                    <li>Cold Drinks</li>
                                                                </ul>
                                                                {/* <img src="./assets/images/event-note/01.png" class="img-fluid image-1" alt="image">                                                    
                                                                <img src="./assets/images/event-note/02.png" class="img-fluid image-2" alt="image"> */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>                                    
                                                <div class="col-lg-12 p-0 d-flex justify-content-end">
                                                    <button class="btn btn-outline-primary" data-extra-toggle="toggle" data-extra-class-show=".show-note-button" data-extra-class-hide=".hide-note-button">Close</button>
                                                    <button class="btn btn-primary ml-2" data-extra-toggle="toggle" data-extra-class-show=".show-note-button" data-extra-class-hide=".hide-note-button">Save</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12">                
                            <div class="card card-block card-stretch">
                                <div class="card-body custom-notes-space">
                                    <h3 class="">Modules</h3>
                                        <div class="note-content tab-content">                                
                                            <div id="note1" class="tab-pane fade active show">
                                                <div class="icon active animate__animated animate__fadeIn i-grid">
                                                    <div class="row">
                                                    <ModuleNote 
                                                            title={"Module1: Launching into Computer Science"}
                                                            content={"Module1"}
                                                            module={"/module1"}
                                                            date={"May 2023"}
                                                    />
                                                    <ModuleNote 
                                                            title={"Module2: Object Oriented Programming"}
                                                            content={"Module2"}
                                                            module={"/module2"}
                                                            date={"August 2023"}
                                                        />
                                                    <ModuleNote 
                                                            title={"Module3: Secure Software Development"}
                                                            content={"Module3"}
                                                            module={"/module3"}
                                                            date={"November 2023"}
                                                        />
                                                    <ModuleNote 
                                                        title={"Module4: Software Engineering Project Management March 2024"}
                                                        content={"Module4"}
                                                        module={"/module4"}
                                                        date={"March 2024"}
                                                    />
                                                    <ModuleNote 
                                                        title={"Information Security Management June 2024"}
                                                        content={"Module5"}
                                                        module={"/module5"}
                                                        date={"June 2024"}
                                                    />
                                                    </div>
                                                </div>
                                                <div class="icon active animate__animated animate__fadeIn i-list">
                                                    <div class="row">
                                                        <div class="col-lg-12">
                                                            <div class="table-responsive">
                                                                <table class="table  tbl-server-info">
                                                                    <thead>
                                                                        <tr class="ligth">
                                                                            <th class="w-50" scope="col">Title</th>
                                                                            <th scope="col">Permission</th>
                                                                            <th scope="col">Created At</th>
                                                                            <th scope="col">Action</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>
                                                                                <h4 class="mb-2">Weekly Planner</h4>
                                                                                <span>Virtual Digital Marketing Course every week on Monday, Wednesday and Saturday</span>
                                                                            </td>
                                                                            <td>
                                                                                <i class="las la-user-friends mr-2 font-size-20"></i>
                                                                                03 share
                                                                            </td>
                                                                            <td>Dec 20</td>
                                                                            <td>
                                                                                <div>
                                                                                    <a href="#" class="badge badge-success mr-3" data-toggle="modal" data-target="#edit-note1"><i class="las la-pen mr-0"></i></a>
                                                                                    <a href="#" class="badge badge-danger" data-extra-toggle="delete" data-closest-elem="tr"><i class="las la-trash-alt mr-0"></i></a>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <h4 class="mb-2">Birthday Celebration <i class="las la-thumbtack ml-2 show-tab" data-show-tab="[href='#note3']"></i></h4>
                                                                                <span>You can easily share via message, WhatsApp, emails etc.</span>
                                                                            </td>
                                                                            <td>
                                                                                <i class="las la-lock mr-2 font-size-20"></i>
                                                                                Only You
                                                                            </td>
                                                                            <td>Dec 20</td>
                                                                            <td>
                                                                                <div>
                                                                                    <a href="#" class="badge badge-success mr-3" data-toggle="modal" data-target="#edit-note1"><i class="las la-pen mr-0"></i></a>
                                                                                    <a href="#" class="badge badge-danger" data-extra-toggle="delete" data-closest-elem="tr"><i class="las la-trash-alt mr-0"></i></a>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <h4 class="mb-2">Essay Outline <i class="lar la-heart ml-2 show-tab" data-show-tab="[href='#note4']"></i></h4>
                                                                                <span>Donec rutrum congue leo eget malesuada.</span>
                                                                            </td>
                                                                            <td>
                                                                                <i class="las la-lock mr-2 font-size-20"></i>
                                                                                Only You
                                                                            </td>
                                                                            <td>Dec 20</td>
                                                                            <td>
                                                                                <div>
                                                                                    <a href="#" class="badge badge-success mr-3" data-toggle="modal" data-target="#edit-note1"><i class="las la-pen mr-0"></i></a>
                                                                                    <a href="#" class="badge badge-danger" data-extra-toggle="delete" data-closest-elem="tr"><i class="las la-trash-alt mr-0"></i></a>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <h4 class="mb-2">Lecture Notes <i class="lar la-heart ml-2 show-tab" data-show-tab="[href='#note4']"></i></h4>
                                                                                <span>Chapter 1 notes, Chapter 2 Assignment, Chapter 3 practical File.</span>
                                                                            </td>
                                                                            <td>
                                                                                <i class="las la-lock mr-2 font-size-20"></i>
                                                                                Only You
                                                                            </td>
                                                                            <td>Dec 20</td>
                                                                            <td>
                                                                                <div>
                                                                                    <a href="#" class="badge badge-success mr-3" data-toggle="modal" data-target="#edit-note1"><i class="las la-pen mr-0"></i></a>
                                                                                    <a href="#" class="badge badge-danger" data-extra-toggle="delete" data-closest-elem="tr"><i class="las la-trash-alt mr-0"></i></a>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <h4 class="mb-2">Image Notes<i class="las la-thumbtack ml-2"></i></h4>
                                                                                <span>NotePlus lets you do in on-the-go!</span>
                                                                            </td>
                                                                            <td>
                                                                                <i class="las la-lock mr-2 font-size-20"></i>
                                                                                Only You
                                                                            </td>
                                                                            <td>Dec 20</td>
                                                                            <td>
                                                                                <div>
                                                                                    <a href="#" class="badge badge-success mr-3" data-toggle="modal" data-target="#edit-note1"><i class="las la-pen mr-0"></i></a>
                                                                                    <a href="#" class="badge badge-danger" data-extra-toggle="delete" data-closest-elem="tr"><i class="las la-trash-alt mr-0"></i></a>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <h4 class="mb-2">Benefits of NotePlus</h4>
                                                                                <span>Take organized notes and share later as meeting minutes or check-list</span>
                                                                            </td>
                                                                            <td>
                                                                                <i class="las la-user-friends mr-2 font-size-20"></i>
                                                                                2 share
                                                                            </td>
                                                                            <td>Dec 20</td>
                                                                            <td>
                                                                                <div>
                                                                                    <a href="#" class="badge badge-success mr-3" data-toggle="modal" data-target="#edit-note1"><i class="las la-pen mr-0"></i></a>
                                                                                    <a href="#" class="badge badge-danger" data-extra-toggle="delete" data-closest-elem="tr"><i class="las la-trash-alt mr-0"></i></a>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <h4 class="mb-2">Quick Summary <i class="las la-thumbtack ml-2 show-tab" data-show-tab="[href='#note3']"></i></h4>
                                                                                <span>Need to write a summary note of the subject you just finished</span>
                                                                            </td>
                                                                            <td>
                                                                                <i class="las la-lock mr-2 font-size-20"></i>
                                                                                Only You
                                                                            </td>
                                                                            <td>Dec 19</td>
                                                                            <td>
                                                                                <div>
                                                                                    <a href="#" class="badge badge-success mr-3" data-toggle="modal" data-target="#edit-note1"><i class="las la-pen mr-0"></i></a>
                                                                                    <a href="#" class="badge badge-danger" data-extra-toggle="delete" data-closest-elem="tr"><i class="las la-trash-alt mr-0"></i></a>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <h4 class="mb-2">Address & Email</h4>
                                                                                <span>Quickly note down the address and email address on NotePlus</span>
                                                                            </td>
                                                                            <td>
                                                                                <i class="las la-user-friends mr-2 font-size-20"></i>
                                                                                04 share
                                                                            </td>
                                                                            <td>Dec 19</td>
                                                                            <td>
                                                                                <div>
                                                                                    <a href="#" class="badge badge-success mr-3" data-toggle="modal" data-target="#edit-note1"><i class="las la-pen mr-0"></i></a>
                                                                                    <a href="#" class="badge badge-danger" data-extra-toggle="delete" data-closest-elem="tr"><i class="las la-trash-alt mr-0"></i></a>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <h4 class="mb-2">NotePlus for Entrepreneurs <i class="lar la-heart ml-2 show-tab" data-show-tab="[href='#note4']"></i></h4>
                                                                                <span>With NotePlus, you can easily share via message, WhatsApp, emails etc.</span>
                                                                            </td>
                                                                            <td>
                                                                                <i class="las la-lock mr-2 font-size-20"></i>
                                                                                Only You
                                                                            </td>
                                                                            <td>Dec 19</td>
                                                                            <td>
                                                                                <div>
                                                                                    <a href="#" class="badge badge-success mr-3" data-toggle="modal" data-target="#edit-note1"><i class="las la-pen mr-0"></i></a>
                                                                                    <a href="#" class="badge badge-danger" data-extra-toggle="delete" data-closest-elem="tr"><i class="las la-trash-alt mr-0"></i></a>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="note2" class="tab-pane fade">
                                                <div class="icon active animate__animated animate__fadeIn i-grid">
                                                    <div class="row">
                                                        <div class="col-lg-4 col-md-6">
                                                            <div class="card card-block card-stretch card-height card-bottom-border-info note-detail">
                                                                <div class="card-header d-flex justify-content-between pb-1">
                                                                    <div class="icon iq-icon-box-2 icon-border-info rounded">
                                                                        <svg width="23" height="23" class="svg-icon" id="iq-main-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                                        </svg>
                                                                    </div>
                                                                    <div class="card-header-toolbar d-flex align-items-center">
                                                                        <div class="dropdown">
                                                                            <span class="dropdown-toggle dropdown-bg" id="note-dropdownMenuButton13"
                                                                                data-toggle="dropdown" aria-expanded="false" role="button">
                                                                                <i class="ri-more-fill"></i>
                                                                            </span>
                                                                            <div class="dropdown-menu dropdown-menu-right"
                                                                                aria-labelledby="note-dropdownMenuButton13">
                                                                                <a href="#" class="dropdown-item new-note1" data-toggle="modal" data-target="#new-note1"><i class="las la-eye mr-3"></i>View</a>
                                                                                <a href="#" class="dropdown-item edit-note1" data-toggle="modal" data-target="#edit-note1"><i class="las la-pen mr-3"></i>Edit</a>
                                                                                <a class="dropdown-item" data-extra-toggle="delete" data-closest-elem=".card" href="#"><i class="las la-trash-alt mr-3"></i>Delete</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="card-body rounded">
                                                                    <h4 class="card-title">Weekly Planner</h4>
                                                                    <p class="mb-3 card-description short">Virtual Digital Marketing Course every week on Monday, Wednesday and Saturday.Virtual Digital Marketing Course every week on Monday</p>                                                            
                                                                </div>
                                                                <div class="card-footer">
                                                                    <div class="d-flex align-items-center justify-content-between note-text note-text-info"> 
                                                                        <a href="#" class=""><i class="las la-user-friends mr-2 font-size-20"></i>03 share</a>                                                            
                                                                        <a href="#" class=""><i class="las la-calendar mr-2 font-size-20"></i>12 Jan 2021</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4 col-md-6">
                                                            <div class="card card-block card-stretch card-height card-bottom-border-success note-detail">
                                                                <div class="card-header d-flex justify-content-between pb-1">
                                                                    <div class="icon iq-icon-box-2 icon-border-success rounded">
                                                                        <svg width="23" height="23" class="svg-icon" id="iq-main-11" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                                                        </svg>
                                                                    </div>
                                                                    <div class="card-header-toolbar d-flex align-items-center">
                                                                        <div class="dropdown">
                                                                            <span class="dropdown-toggle dropdown-bg" id="note-dropdownMenuButton14"
                                                                                data-toggle="dropdown" aria-expanded="false" role="button">
                                                                                <i class="ri-more-fill"></i>
                                                                            </span>
                                                                            <div class="dropdown-menu dropdown-menu-right"
                                                                                aria-labelledby="note-dropdownMenuButton14">
                                                                                <a href="#" class="dropdown-item new-note6" data-toggle="modal" data-target="#new-note6"><i class="las la-eye mr-3"></i>View</a>
                                                                                <a href="#" class="dropdown-item edit-note1" data-toggle="modal" data-target="#edit-note1"><i class="las la-pen mr-3"></i>Edit</a>
                                                                                <a class="dropdown-item" data-extra-toggle="delete" data-closest-elem=".card" href="#"><i class="las la-trash-alt mr-3"></i>Delete</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="card-body rounded">
                                                                    <h4 class="card-title">Benefits of NotePlus</h4>
                                                                    <p class="mb-3 card-description short">Take organized notes and share later as meeting minutes or check-list with this simple accessible Noteplus. Each note you create will be stored on a virtual page of the NotePlus. You can store groups of seperate notes. You can store an unlimited number of separate notes within the NotePlus.</p>
                                                                </div>
                                                                <div class="card-footer">
                                                                    <div class="d-flex align-items-center justify-content-between note-text note-text-success"> 
                                                                        <a href="#" class=""><i class="las la-user-friends mr-2 font-size-20"></i>02 share</a>                                                            
                                                                        <a href="#" class=""><i class="las la-calendar mr-2 font-size-20"></i>10 Jan 2021</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div> 
                                                        <div class="col-lg-4 col-md-6">
                                                            <div class="card card-block card-stretch card-height card-bottom-border-warning note-detail">
                                                                <div class="card-header d-flex justify-content-between pb-1">
                                                                    <div class="icon iq-icon-box-2 icon-border-warning rounded">
                                                                        <svg width="23" height="23" class="svg-icon" id="iq-main-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
                                                                        </svg>
                                                                    </div>
                                                                    <div class="card-header-toolbar d-flex align-items-center">
                                                                        <div class="dropdown">
                                                                            <span class="dropdown-toggle dropdown-bg" id="note-dropdownMenuButton15"
                                                                                data-toggle="dropdown" aria-expanded="false" role="button">
                                                                                <i class="ri-more-fill"></i>
                                                                            </span>
                                                                            <div class="dropdown-menu dropdown-menu-right"
                                                                                aria-labelledby="note-dropdownMenuButton15">
                                                                                <a href="#" class="dropdown-item new-note8" data-toggle="modal" data-target="#new-note8"><i class="las la-eye mr-3"></i>View</a>
                                                                                <a href="#" class="dropdown-item edit-note1" data-toggle="modal" data-target="#edit-note1"><i class="las la-pen mr-3"></i>Edit</a>
                                                                                <a class="dropdown-item" data-extra-toggle="delete" data-closest-elem=".card" href="#"><i class="las la-trash-alt mr-3"></i>Delete</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="card-body rounded">
                                                                    <h4 class="card-title">Address & Email</h4>
                                                                    <p class="mb-3 card-description short">Quickly note down the address and email address on NotePlus so that you can access it from anywhere.</p>
                                                                </div>
                                                                <div class="card-footer">
                                                                    <div class="d-flex align-items-center justify-content-between note-text note-text-warning"> 
                                                                        <a href="#" class=""><i class="las la-user-friends mr-2 font-size-20"></i>04 share</a>                                                            
                                                                        <a href="#" class=""><i class="las la-calendar mr-2 font-size-20"></i>8 Jan 2021</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4 col-md-6">
                                                            <div class="card card-block card-stretch card-height card-bottom-border-danger note-detail">
                                                                <div class="card-header d-flex justify-content-between pb-1">
                                                                    <div class="icon iq-icon-box-2 icon-border-danger rounded">
                                                                        <svg width="23" height="23" class="svg-icon" id="iq-main-13" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                                        </svg>
                                                                    </div>
                                                                    <div class="card-header-toolbar d-flex align-items-center">  
                                                                        <div class="card-header-toolbar d-flex align-items-center">
                                                                            <div class="dropdown">
                                                                                <span class="dropdown-toggle dropdown-bg" id="note-dropdownMenuButton16"
                                                                                    data-toggle="dropdown" aria-expanded="false" role="button">
                                                                                    <i class="ri-more-fill"></i>
                                                                                </span>
                                                                                <div class="dropdown-menu dropdown-menu-right"
                                                                                    aria-labelledby="note-dropdownMenuButton16">
                                                                                    <a href="#" class="dropdown-item new-note4" data-toggle="modal" data-target="#new-note4"><i class="las la-eye mr-3"></i>View</a>
                                                                                    <a href="#" class="dropdown-item edit-note1" data-toggle="modal" data-target="#edit-note1"><i class="las la-pen mr-3"></i>Edit</a>
                                                                                    <a class="dropdown-item" data-extra-toggle="delete" data-closest-elem=".card" href="#"><i class="las la-trash-alt mr-3"></i>Delete</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="card-body rounded">
                                                                    <h4 class="card-title">Lecture Notes</h4>
                                                                    <div class="checkbox mb-2">
                                                                        {/* <input type="checkbox" class="checkbox-input mr-3" id="checkbox4"> */}
                                                                        <label for="checkbox4" class="note-checkbox mb-0">Chapter 1 notes.</label>
                                                                    </div>
                                                                    <div class="checkbox mb-2">
                                                                        {/* <input type="checkbox" class="checkbox-input mr-3" id="checkbox5"> */}
                                                                        <label for="checkbox5" class="note-checkbox mb-0">Chapter 2 Assignment.</label>
                                                                    </div>
                                                                    <div class="checkbox mb-2">
                                                                        {/* <input type="checkbox" class="checkbox-input mr-3" id="checkbox6"> */}
                                                                        <label for="checkbox6" class="note-checkbox mb-0">Chapter 3 practical File.</label>
                                                                    </div>
                                                                </div>
                                                                <div class="card-footer">
                                                                    <div class="d-flex align-items-center justify-content-between note-text note-text-danger"> 
                                                                        <a href="#" class=""><i class="las la-user-friends mr-2 font-size-20"></i>05 share</a>                                                            
                                                                        <a href="#" class=""><i class="las la-calendar mr-2 font-size-20"></i>09 Jan 2021</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>  
                                                        <div class="col-lg-4 col-md-6">
                                                            <div class="card card-block card-stretch card-height card-bottom-border-purple note-detail">
                                                                <div class="card-header d-flex justify-content-between pb-1">
                                                                    <div class="icon iq-icon-box-2 icon-border-purple rounded">
                                                                        <svg width="23" height="23" class="svg-icon" id="iq-main-14" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                                                                        </svg>
                                                                    </div>
                                                                    <div class="card-header-toolbar d-flex align-items-center">
                                                                        <div class="card-header-toolbar d-flex align-items-center">
                                                                            <div class="dropdown">
                                                                                <span class="dropdown-toggle dropdown-bg" id="note-dropdownMenuButton17"
                                                                                    data-toggle="dropdown" aria-expanded="false" role="button">
                                                                                    <i class="ri-more-fill"></i>
                                                                                </span>
                                                                                <div class="dropdown-menu dropdown-menu-right"
                                                                                    aria-labelledby="note-dropdownMenuButton17">
                                                                                    <a href="#" class="dropdown-item new-note2" data-toggle="modal" data-target="#new-note2"><i class="las la-eye mr-3"></i>View</a>
                                                                                    <a href="#" class="dropdown-item edit-note1" data-toggle="modal" data-target="#edit-note1"><i class="las la-pen mr-3"></i>Edit</a>
                                                                                    <a class="dropdown-item" data-extra-toggle="delete" data-closest-elem=".card" href="#"><i class="las la-trash-alt mr-3"></i>Delete</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="card-body rounded">
                                                                    <h4 class="card-title">Birthday Celebration</h4>
                                                                    <p class="mb-3 card-description short">You can easily share via message, WhatsApp, emails etc. You can also save your notes and edit it later or can easily delete the note.</p>
                                                                    <ul class="pl-3 mb-0">
                                                                        <li class="note-list">Cakes and Balloons.</li>
                                                                    </ul>  
                                                                </div>
                                                                <div class="card-footer">
                                                                    <div class="d-flex align-items-center justify-content-between note-text note-text-purple"> 
                                                                        <a href="#" class=""><i class="las la-lock mr-2 font-size-20"></i>Only You</a>                                                            
                                                                        <a href="#" class=""><i class="las la-calendar mr-2 font-size-20"></i>10 Jan 2021</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>                                           
                                                        <div class="col-lg-4 col-md-6">
                                                            <div class="card card-block card-stretch card-height card-bottom-border-info note-detail">
                                                                <div class="card-header d-flex justify-content-between pb-1">
                                                                    <div class="icon iq-icon-box-2 icon-border-info rounded">
                                                                        <svg width="23" height="23" class="svg-icon" id="iq-main-15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                                            <path fill-rule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z" clip-rule="evenodd" />
                                                                        </svg>
                                                                    </div>
                                                                    <div class="card-header-toolbar d-flex align-items-center">
                                                                        <div class="card-header-toolbar d-flex align-items-center">
                                                                            <div class="dropdown">
                                                                                <span class="dropdown-toggle dropdown-bg" id="note-dropdownMenuButton18"
                                                                                    data-toggle="dropdown" aria-expanded="false" role="button">
                                                                                    <i class="ri-more-fill"></i>
                                                                                </span>
                                                                                <div class="dropdown-menu dropdown-menu-right"
                                                                                    aria-labelledby="note-dropdownMenuButton18">
                                                                                    <a href="#" class="dropdown-item new-note9" data-toggle="modal" data-target="#new-note9"><i class="las la-eye mr-3"></i>View</a>
                                                                                    <a href="#" class="dropdown-item edit-note1" data-toggle="modal" data-target="#edit-note1"><i class="las la-pen mr-3"></i>Edit</a>
                                                                                    <a class="dropdown-item" data-extra-toggle="delete" data-closest-elem=".card" href="#"><i class="las la-trash-alt mr-3"></i>Delete</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="card-body rounded">
                                                                    <h4 class="card-title">NotePlus for Entrepreneurs</h4>
                                                                    <p class="mb-3 card-description short">With NotePlus, you can easily share via message, WhatsApp, emails etc. You can also save your notes and edit it later or can easily delete the note.</p>                                                            
                                                                </div>
                                                                <div class="card-footer">
                                                                    <div class="d-flex align-items-center justify-content-between note-text note-text-info"> 
                                                                        <a href="#" class=""><i class="las la-user-friends mr-2 font-size-20"></i>07 share</a>                                                            
                                                                        <a href="#" class=""><i class="las la-calendar mr-2 font-size-20"></i>16 Jan 2021</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div> 
                                                    </div>  
                                                </div>
                                                <div class="icon active animate__animated animate__fadeIn i-list">
                                                    <div class="row">   
                                                        <div class="col-lg-12">
                                                            <div class="table-responsive">
                                                                <table class="table  tbl-server-info">
                                                                    <thead>
                                                                        <tr class="ligth">
                                                                            <th class="w-50" scope="col">Title</th>
                                                                            <th scope="col">Permission</th>
                                                                            <th scope="col">Created At</th>
                                                                            <th scope="col">Action</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>
                                                                                <h4 class="mb-2">Weekly Planner</h4>
                                                                                <span>Virtual Digital Marketing Course every week on Monday, Wednesday and Saturday</span>
                                                                            </td>
                                                                            <td>
                                                                                <i class="las la-user-friends mr-2 font-size-20"></i>
                                                                                03 share
                                                                            </td>
                                                                            <td>Dec 20</td>
                                                                            <td>
                                                                                <div>
                                                                                    <a href="#" class="badge badge-success mr-3" data-toggle="modal" data-target="#edit-note1"><i class="las la-pen mr-0"></i></a>
                                                                                    <a href="#" class="badge badge-danger" data-extra-toggle="delete" data-closest-elem="tr"><i class="las la-trash-alt mr-0"></i></a>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <h4 class="mb-2">Benefits of NotePlus</h4>
                                                                                <span>Take organized notes and share later as meeting minutes or check-list</span>
                                                                            </td>
                                                                            <td>
                                                                                <i class="las la-user-friends mr-2 font-size-20"></i>
                                                                                2 share
                                                                            </td>
                                                                            <td>Dec 20</td>
                                                                            <td>
                                                                                <div>
                                                                                    <a href="#" class="badge badge-success mr-3" data-toggle="modal" data-target="#edit-note1"><i class="las la-pen mr-0"></i></a>
                                                                                    <a href="#" class="badge badge-danger" data-extra-toggle="delete" data-closest-elem="tr"><i class="las la-trash-alt mr-0"></i></a>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <h4 class="mb-2">Address & Email</h4>
                                                                                <span>Quickly note down the address and email address on NotePlus</span>
                                                                            </td>
                                                                            <td>
                                                                                <i class="las la-user-friends mr-2 font-size-20"></i>
                                                                                04 share
                                                                            </td>
                                                                            <td>Dec 20</td>
                                                                            <td>
                                                                                <div>
                                                                                    <a href="#" class="badge badge-success mr-3" data-toggle="modal" data-target="#edit-note1"><i class="las la-pen mr-0"></i></a>
                                                                                    <a href="#" class="badge badge-danger" data-extra-toggle="delete" data-closest-elem="tr"><i class="las la-trash-alt mr-0"></i></a>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <h4 class="mb-2">Lecture Notes</h4>
                                                                                <span>Chapter 1 notes, Chapter 2 Assignment, Chapter 3 practical File.</span>
                                                                            </td>
                                                                            <td>
                                                                                <i class="las la-user-friends mr-2 font-size-20"></i>
                                                                                05 share
                                                                            </td>
                                                                            <td>Dec 20</td>
                                                                            <td>
                                                                                <div>
                                                                                    <a href="#" class="badge badge-success mr-3" data-toggle="modal" data-target="#edit-note1"><i class="las la-pen mr-0"></i></a>
                                                                                    <a href="#" class="badge badge-danger" data-extra-toggle="delete" data-closest-elem="tr"><i class="las la-trash-alt mr-0"></i></a>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <h4 class="mb-2">Birthday Celebration</h4>
                                                                                <span>You can easily share via message, WhatsApp, emails etc.</span>
                                                                            </td>
                                                                            <td>
                                                                                <i class="las la-lock mr-2 font-size-20"></i>
                                                                                Only You
                                                                            </td>
                                                                            <td>Dec 20</td>
                                                                            <td>
                                                                                <div>
                                                                                    <a href="#" class="badge badge-success mr-3" data-toggle="modal" data-target="#edit-note1"><i class="las la-pen mr-0"></i></a>
                                                                                    <a href="#" class="badge badge-danger" data-extra-toggle="delete" data-closest-elem="tr"><i class="las la-trash-alt mr-0"></i></a>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <h4 class="mb-2">NotePlus for Entrepreneurs</h4>
                                                                                <span>Quickly note down the address and email address on NotePlus</span>
                                                                            </td>
                                                                            <td>
                                                                                <i class="las la-user-friends mr-2 font-size-20"></i>
                                                                                07 share
                                                                            </td>
                                                                            <td>Dec 20</td>
                                                                            <td>
                                                                                <div>
                                                                                    <a href="#" class="badge badge-success mr-3" data-toggle="modal" data-target="#edit-note1"><i class="las la-pen mr-0"></i></a>
                                                                                    <a href="#" class="badge badge-danger" data-extra-toggle="delete" data-closest-elem="tr"><i class="las la-trash-alt mr-0"></i></a>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="note3" class="tab-pane fade">
                                                <div class="icon active animate__animated animate__fadeIn i-grid">
                                                    <div class="row">
                                                        <div class="col-lg-4 col-md-6">
                                                            <div class="card card-block card-stretch card-height card-bottom-border-purple note-detail">
                                                                <div class="card-header d-flex justify-content-between pb-1">
                                                                    <div class="icon iq-icon-box-2 icon-border-purple rounded">
                                                                        <svg width="23" height="23" class="svg-icon" id="iq-main-16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                                                                        </svg>
                                                                    </div>
                                                                    <div class="card-header-toolbar d-flex align-items-center">
                                                                        <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="pin content"><i class="las la-thumbtack mr-2"></i></a>
                                                                        <div class="card-header-toolbar d-flex align-items-center">
                                                                            <div class="dropdown">
                                                                                <span class="dropdown-toggle dropdown-bg" id="note-dropdownMenuButton19"
                                                                                    data-toggle="dropdown" aria-expanded="false" role="button">
                                                                                    <i class="ri-more-fill"></i>
                                                                                </span>
                                                                                <div class="dropdown-menu dropdown-menu-right"
                                                                                    aria-labelledby="note-dropdownMenuButton19">
                                                                                    <a href="#" class="dropdown-item new-note2" data-toggle="modal" data-target="#new-note2"><i class="las la-eye mr-3"></i>View</a>
                                                                                    <a href="#" class="dropdown-item edit-note1" data-toggle="modal" data-target="#edit-note1"><i class="las la-pen mr-3"></i>Edit</a>
                                                                                    <a class="dropdown-item" data-extra-toggle="delete" data-closest-elem=".card" href="#"><i class="las la-trash-alt mr-3"></i>Delete</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="card-body rounded">
                                                                    <h4 class="card-title">Birthday Celebration</h4>
                                                                    <p class="mb-3 card-description short">You can easily share via message, WhatsApp, emails etc. You can also save your notes and edit it later or can easily delete the note.</p>
                                                                    <ul class="pl-3 mb-0">
                                                                        <li class="note-list">Cakes and Balloons.</li>
                                                                    </ul>  
                                                                </div>
                                                                <div class="card-footer">
                                                                    <div class="d-flex align-items-center justify-content-between note-text note-text-purple"> 
                                                                        <a href="#" class=""><i class="las la-user mr-2 font-size-20"></i>Only You</a>                                                            
                                                                        <a href="#" class=""><i class="las la-calendar mr-2 font-size-20"></i>10 Jan 2021</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4 col-md-6">
                                                            <div class="card card-block card-stretch card-height card-bottom-border-primary note-detail">
                                                                <div class="card-header d-flex justify-content-between pb-1">
                                                                    <div class="icon iq-icon-box-2 icon-border-primary rounded">
                                                                        <svg width="23" height="23" class="svg-icon" id="iq-main-17" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                                        </svg>
                                                                    </div>
                                                                    <div class="card-header-toolbar d-flex align-items-center">
                                                                        <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="pin content"><i class="las la-thumbtack mr-2"></i></a>
                                                                        <div class="card-header-toolbar d-flex align-items-center">
                                                                            <div class="dropdown">
                                                                                <span class="dropdown-toggle dropdown-bg" id="note-dropdownMenuButton20"
                                                                                    data-toggle="dropdown" aria-expanded="false" role="button">
                                                                                    <i class="ri-more-fill"></i>
                                                                                </span>
                                                                                <div class="dropdown-menu dropdown-menu-right"
                                                                                    aria-labelledby="note-dropdownMenuButton20">
                                                                                    <a href="#" class="dropdown-item new-note5" data-toggle="modal" data-target="#new-note5"><i class="las la-eye mr-3"></i>View</a>
                                                                                    <a href="#" class="dropdown-item edit-note1" data-toggle="modal" data-target="#edit-note1"><i class="las la-pen mr-3"></i>Edit</a>
                                                                                    <a class="dropdown-item" data-extra-toggle="delete" data-closest-elem=".card" href="#"><i class="las la-trash-alt mr-3"></i>Delete</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="card-body rounded">
                                                                    <h4 class="card-title">Image Notes</h4>
                                                                    <ul class="row mb-0 p-0 list-inline flex-wrap align-items-center">
                                                                        <li class="col-4">
                                                                            <a href="#">
                                                                                {/* <img src="./assets/images/gallery/grid/01.jpg" class="img-fluid rounded" alt="" />   */}
                                                                            </a> 
                                                                        </li>
                                                                        <li class="col-4">
                                                                            <a href="#">
                                                                                {/* <img src="./assets/images/gallery/grid/02.jpg" class="img-fluid rounded" alt="" />   */}
                                                                            </a> 
                                                                        </li>
                                                                        <li class="col-4">
                                                                            <a href="#">
                                                                                {/* <img src="./assets/images/gallery/grid/03.jpg" class="img-fluid rounded" alt="" />   */}
                                                                            </a> 
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div class="card-footer">
                                                                    <div class="d-flex align-items-center justify-content-between note-text note-text-primary"> 
                                                                        <a href="#" class=""><i class="las la-user mr-2 font-size-20"></i>Only You</a>                                                            
                                                                        <a href="#" class=""><i class="las la-calendar mr-2 font-size-20"></i>05 Jan 2021</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4 col-md-6">
                                                            <div class="card card-block card-stretch card-height card-bottom-border-success note-detail mb-0">
                                                                <div class="card-header d-flex justify-content-between pb-1">
                                                                    <div class="icon iq-icon-box-2 icon-border-success rounded">
                                                                        <svg width="23" height="23" class="svg-icon" id="iq-main-18" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                                                                        </svg>
                                                                    </div>
                                                                    <div class="card-header-toolbar d-flex align-items-center">
                                                                        <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="pin content"><i class="las la-thumbtack mr-2"></i></a>
                                                                        <div class="card-header-toolbar d-flex align-items-center">
                                                                            <div class="dropdown">
                                                                                <span class="dropdown-toggle dropdown-bg" id="note-dropdownMenuButton21"
                                                                                    data-toggle="dropdown" aria-expanded="false" role="button">
                                                                                    <i class="ri-more-fill"></i>
                                                                                </span>
                                                                                <div class="dropdown-menu dropdown-menu-right"
                                                                                    aria-labelledby="note-dropdownMenuButton21">
                                                                                    <a href="#" class="dropdown-item new-note7" data-toggle="modal" data-target="#new-note7"><i class="las la-eye mr-3"></i>View</a>
                                                                                    <a href="#" class="dropdown-item edit-note1" data-toggle="modal" data-target="#edit-note1"><i class="las la-pen mr-3"></i>Edit</a>
                                                                                    <a class="dropdown-item" data-extra-toggle="delete" data-closest-elem=".card" href="#"><i class="las la-trash-alt mr-3"></i>Delete</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="card-body rounded">  
                                                                    <h4 class="card-title">Quick Summary</h4>          
                                                                    <p class="mb-3 card-description short">Need to write a summary note of the subject you just finished? NotePlus lets you do in on-the-go!</p>
                                                                    <p class="text-underline ellipsis-text short">Https://Dribble.com/Shots/6387620</p>
                                                                </div>
                                                                <div class="card-footer">
                                                                    <div class="d-flex align-items-center justify-content-between note-text note-text-success"> 
                                                                        <a href="#" class=""><i class="las la-user mr-2 font-size-20"></i>Only You</a>                                                            
                                                                        <a href="#" class=""><i class="las la-calendar mr-2 font-size-20"></i>12 Jan 2021</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4 col-md-6">
                                                            <div class="card card-block card-stretch card-height card-bottom-border-warning note-detail">
                                                                <div class="card-header d-flex justify-content-between pb-1">
                                                                    <div class="icon iq-icon-box-2 icon-border-warning rounded">
                                                                        <svg width="23" height="23" class="svg-icon" id="iq-main-19"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                                                        </svg>
                                                                    </div>
                                                                    <div class="card-header-toolbar d-flex align-items-center">     
                                                                        <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="pin content"><i class="las la-thumbtack mr-2"></i></a>
                                                                        <div class="card-header-toolbar d-flex align-items-center">
                                                                            <div class="dropdown">
                                                                                <span class="dropdown-toggle dropdown-bg" id="note-dropdownMenuButton22"
                                                                                    data-toggle="dropdown" aria-expanded="false" role="button">
                                                                                    <i class="ri-more-fill"></i>
                                                                                </span>
                                                                                <div class="dropdown-menu dropdown-menu-right"
                                                                                    aria-labelledby="note-dropdownMenuButton22">
                                                                                    <a href="#" class="dropdown-item new-note3" data-toggle="modal" data-target="#new-note3"><i class="las la-eye mr-3"></i>View</a>
                                                                                    <a href="#" class="dropdown-item edit-note1" data-toggle="modal" data-target="#edit-note1"><i class="las la-pen mr-3"></i>Edit</a>
                                                                                    <a class="dropdown-item" data-extra-toggle="delete" data-closest-elem=".card" href="#"><i class="las la-trash-alt mr-3"></i>Delete</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="card-body rounded">
                                                                    <h4 class="card-title">Essay Outline</h4> 
                                                                    <ul class="pl-3 mb-0">
                                                                        <li class="note-list mb-2">Content should be of topic.</li>
                                                                        <li class="note-list mb-2">300 Words only.</li>
                                                                        <li class="note-list">Make presentation.</li>
                                                                    </ul>  
                                                                </div>
                                                                <div class="card-footer">
                                                                    <div class="d-flex align-items-center justify-content-between note-text note-text-warning"> 
                                                                        <a href="#" class=""><i class="las la-user mr-2 font-size-20"></i>Only You</a>                                                            
                                                                        <a href="#" class=""><i class="las la-calendar mr-2 font-size-20"></i>13 Jan 2021</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div> 
                                                        <div class="col-lg-4 col-md-6">
                                                            <div class="card card-block card-stretch card-height card-bottom-border-info note-detail">
                                                                <div class="card-header d-flex justify-content-between pb-1">
                                                                    <div class="icon iq-icon-box-2 icon-border-info rounded">
                                                                        <svg width="23" height="23" class="svg-icon" id="iq-main-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                                            <path fill-rule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z" clip-rule="evenodd" />
                                                                        </svg>
                                                                    </div>
                                                                    <div class="card-header-toolbar d-flex align-items-center">     
                                                                        <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="pin content"><i class="las la-thumbtack mr-2"></i></a>
                                                                        <div class="card-header-toolbar d-flex align-items-center">
                                                                            <div class="dropdown">
                                                                                <span class="dropdown-toggle dropdown-bg" id="note-dropdownMenuButton23"
                                                                                    data-toggle="dropdown" aria-expanded="false" role="button">
                                                                                    <i class="ri-more-fill"></i>
                                                                                </span>
                                                                                <div class="dropdown-menu dropdown-menu-right"
                                                                                    aria-labelledby="note-dropdownMenuButton23">
                                                                                    <a href="#" class="dropdown-item new-note9" data-toggle="modal" data-target="#new-note9"><i class="las la-eye mr-3"></i>View</a>
                                                                                    <a href="#" class="dropdown-item edit-note1" data-toggle="modal" data-target="#edit-note1"><i class="las la-pen mr-3"></i>Edit</a>
                                                                                    <a class="dropdown-item" data-extra-toggle="delete" data-closest-elem=".card" href="#"><i class="las la-trash-alt mr-3"></i>Delete</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="card-body rounded">
                                                                    <h4 class="card-title">NotePlus for Entrepreneurs</h4>
                                                                    <p class="mb-3 card-description short">With NotePlus, you can easily share via message, WhatsApp, emails etc. You can also save your notes and edit it later or can easily delete the note.</p>                                                            
                                                                </div>
                                                                <div class="card-footer">
                                                                    <div class="d-flex align-items-center justify-content-between note-text note-text-info"> 
                                                                        <a href="#" class=""><i class="las la-user mr-2 font-size-20"></i>Only You</a>                                                            
                                                                        <a href="#" class=""><i class="las la-calendar mr-2 font-size-20"></i>12 Jan 2021</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4 col-md-6">
                                                            <div class="card card-block card-stretch card-height card-bottom-border-danger note-detail">
                                                                <div class="card-header d-flex justify-content-between pb-1">
                                                                    <div class="icon iq-icon-box-2 icon-border-danger rounded">
                                                                        <svg width="23" height="23" class="svg-icon" id="iq-main-21" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                                        </svg>
                                                                    </div>
                                                                    <div class="card-header-toolbar d-flex align-items-center">        
                                                                        <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="pin content"><i class="las la-thumbtack mr-2"></i></a>
                                                                        <div class="card-header-toolbar d-flex align-items-center">
                                                                            <div class="dropdown">
                                                                                <span class="dropdown-toggle dropdown-bg" id="note-dropdownMenuButton24"
                                                                                    data-toggle="dropdown" aria-expanded="false" role="button">
                                                                                    <i class="ri-more-fill"></i>
                                                                                </span>
                                                                                <div class="dropdown-menu dropdown-menu-right"
                                                                                    aria-labelledby="note-dropdownMenuButton24">
                                                                                    <a href="#" class="dropdown-item new-note4" data-toggle="modal" data-target="#new-note4"><i class="las la-eye mr-3"></i>View</a>
                                                                                    <a href="#" class="dropdown-item edit-note1" data-toggle="modal" data-target="#edit-note1"><i class="las la-pen mr-3"></i>Edit</a>
                                                                                    <a class="dropdown-item" data-extra-toggle="delete" data-closest-elem=".card" href="#"><i class="las la-trash-alt mr-3"></i>Delete</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="card-body rounded">
                                                                    <h4 class="card-title">Lecture Notes</h4>
                                                                    <div class="checkbox mb-2">
                                                                        {/* <input type="checkbox" class="checkbox-input mr-3" id="checkbox7"> */}
                                                                        <label for="checkbox7" class="note-checkbox mb-0">Chapter 1 notes.</label>
                                                                    </div>
                                                                    <div class="checkbox mb-2">
                                                                        {/* <input type="checkbox" class="checkbox-input mr-3" id="checkbox8"> */}
                                                                        <label for="checkbox8" class="note-checkbox mb-0">Chapter 2 Assignment.</label>
                                                                    </div>
                                                                    <div class="checkbox mb-2">
                                                                        {/* <input type="checkbox" class="checkbox-input mr-3" id="checkbox9"> */}
                                                                        <label for="checkbox9" class="note-checkbox mb-0">Chapter 3 practical File.</label>
                                                                    </div>
                                                                </div>
                                                                <div class="card-footer">
                                                                    <div class="d-flex align-items-center justify-content-between note-text note-text-danger"> 
                                                                        <a href="#" class=""><i class="las la-user mr-2 font-size-20"></i>Only You</a>                                                            
                                                                        <a href="#" class=""><i class="las la-calendar mr-2 font-size-20"></i>9 Jan 2021</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div> 
                                                </div>
                                                <div class="icon active animate__animated animate__fadeIn i-list">
                                                    <div class="row">                                            
                                                        <div class="col-lg-12">
                                                            <div class="table-responsive">
                                                                <table class="table  tbl-server-info">
                                                                    <thead>
                                                                        <tr class="ligth">
                                                                            <th class="w-50" scope="col">Title</th>
                                                                            <th scope="col">Permission</th>
                                                                            <th scope="col">Created At</th>
                                                                            <th scope="col">Action</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>
                                                                                <h4 class="mb-2">Birthday Celebration <i class="las la-thumbtack ml-2"></i></h4>
                                                                                <span>You can easily share via message, WhatsApp, emails etc.</span>
                                                                            </td>
                                                                            <td>
                                                                                <i class="las la-lock mr-2 font-size-20"></i>
                                                                                Only You
                                                                            </td>
                                                                            <td>Dec 20</td>
                                                                            <td>
                                                                                <div>
                                                                                    <a href="#" class="badge badge-success mr-3" data-toggle="modal" data-target="#edit-note1"><i class="las la-pen mr-0"></i></a>
                                                                                    <a href="#" class="badge badge-danger" data-extra-toggle="delete" data-closest-elem="tr"><i class="las la-trash-alt mr-0"></i></a>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <h4 class="mb-2">Image Notes<i class="las la-thumbtack ml-2"></i></h4>
                                                                                <span>NotePlus lets you do in on-the-go!</span>
                                                                            </td>
                                                                            <td>
                                                                                <i class="las la-lock mr-2 font-size-20"></i>
                                                                                Only You
                                                                            </td>
                                                                            <td>Dec 20</td>
                                                                            <td>
                                                                                <div>
                                                                                    <a href="#" class="badge badge-success mr-3" data-toggle="modal" data-target="#edit-note1"><i class="las la-pen mr-0"></i></a>
                                                                                    <a href="#" class="badge badge-danger" data-extra-toggle="delete" data-closest-elem="tr"><i class="las la-trash-alt mr-0"></i></a>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <h4 class="mb-2">Quick Summary <i class="las la-thumbtack ml-2"></i></h4>
                                                                                <span>Need to write a summary note of the subject you just finished</span>
                                                                            </td>
                                                                            <td>
                                                                                <i class="las la-lock mr-2 font-size-20"></i>
                                                                                Only You
                                                                            </td>
                                                                            <td>Dec 20</td>
                                                                            <td>
                                                                                <div>
                                                                                    <a href="#" class="badge badge-success mr-3" data-toggle="modal" data-target="#edit-note1"><i class="las la-pen mr-0"></i></a>
                                                                                    <a href="#" class="badge badge-danger" data-extra-toggle="delete" data-closest-elem="tr"><i class="las la-trash-alt mr-0"></i></a>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <h4 class="mb-2">Essay Outline <i class="las la-thumbtack ml-2"></i></h4>
                                                                                <span>Donec rutrum congue leo eget malesuada.</span>
                                                                            </td>
                                                                            <td>
                                                                                <i class="las la-lock mr-2 font-size-20"></i>
                                                                                Only You
                                                                            </td>
                                                                            <td>Dec 20</td>
                                                                            <td>
                                                                                <div>
                                                                                    <a href="#" class="badge badge-success mr-3" data-toggle="modal" data-target="#edit-note1"><i class="las la-pen mr-0"></i></a>
                                                                                    <a href="#" class="badge badge-danger" data-extra-toggle="delete" data-closest-elem="tr"><i class="las la-trash-alt mr-0"></i></a>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <h4 class="mb-2">NotePlus for Entrepreneurs <i class="las la-thumbtack ml-2"></i></h4>
                                                                                <span>With NotePlus, you can easily share via message, WhatsApp, emails etc.</span>
                                                                            </td>
                                                                            <td>
                                                                                <i class="las la-lock mr-2 font-size-20"></i>
                                                                                Only You
                                                                            </td>
                                                                            <td>Dec 20</td>
                                                                            <td>
                                                                                <div>
                                                                                    <a href="#" class="badge badge-success mr-3" data-toggle="modal" data-target="#edit-note1"><i class="las la-pen mr-0"></i></a>
                                                                                    <a href="#" class="badge badge-danger" data-extra-toggle="delete" data-closest-elem="tr"><i class="las la-trash-alt mr-0"></i></a>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <h4 class="mb-2">Lecture Notes <i class="las la-thumbtack ml-2"></i></h4>
                                                                                <span>Chapter 1 notes, Chapter 2 Assignment, Chapter 3 practical File.</span>
                                                                            </td>
                                                                            <td>
                                                                                <i class="las la-lock mr-2 font-size-20"></i>
                                                                                Only You
                                                                            </td>
                                                                            <td>Dec 20</td>
                                                                            <td>
                                                                                <div>
                                                                                    <a href="#" class="badge badge-success mr-3" data-toggle="modal" data-target="#edit-note1"><i class="las la-pen mr-0"></i></a>
                                                                                    <a href="#" class="badge badge-danger" data-extra-toggle="delete" data-closest-elem="tr"><i class="las la-trash-alt mr-0"></i></a>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="note4" class="tab-pane fade">
                                                <div class="icon active animate__animated animate__fadeIn i-grid">
                                                    <div class="row">
                                                        <div class="col-lg-4 col-md-6">
                                                            <div class="card card-block card-stretch card-height card-bottom-border-warning note-detail">
                                                                <div class="card-header d-flex justify-content-between pb-1">
                                                                    <div class="icon iq-icon-box-2 icon-border-warning rounded">
                                                                        <svg width="23" height="23" class="svg-icon" id="iq-main-22" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                                                        </svg>
                                                                    </div>
                                                                    <div class="card-header-toolbar d-flex align-items-center">                                                                
                                                                        <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="favorite"><i class="lar la-heart mr-2"></i></a>
                                                                        <div class="card-header-toolbar d-flex align-items-center">
                                                                            <div class="dropdown">
                                                                                <span class="dropdown-toggle dropdown-bg" id="note-dropdownMenuButton25"
                                                                                    data-toggle="dropdown" aria-expanded="false" role="button">
                                                                                    <i class="ri-more-fill"></i>
                                                                                </span>
                                                                                <div class="dropdown-menu dropdown-menu-right"
                                                                                    aria-labelledby="note-dropdownMenuButton25">
                                                                                    <a href="#" class="dropdown-item new-note3" data-toggle="modal" data-target="#new-note3"><i class="las la-eye mr-3"></i>View</a>
                                                                                    <a href="#" class="dropdown-item edit-note1" data-toggle="modal" data-target="#edit-note1"><i class="las la-pen mr-3"></i>Edit</a>
                                                                                    <a class="dropdown-item" data-extra-toggle="delete" data-closest-elem=".card" href="#"><i class="las la-trash-alt mr-3"></i>Delete</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="card-body rounded">
                                                                    <h4 class="card-title">Essay Outline</h4> 
                                                                    <ul class="pl-3 mb-0">
                                                                        <li class="note-list mb-2">Content should be of topic.</li>
                                                                        <li class="note-list mb-2">300 Words only.</li>
                                                                        <li class="note-list">Make presentation.</li>
                                                                    </ul>  
                                                                </div>
                                                                <div class="card-footer">
                                                                    <div class="d-flex align-items-center justify-content-between note-text note-text-warning"> 
                                                                        <a href="#" class=""><i class="las la-user mr-2 font-size-20"></i>Only You</a>                                                            
                                                                        <a href="#" class=""><i class="las la-calendar mr-2 font-size-20"></i>09 Jan 2021</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div> 
                                                        <div class="col-lg-4 col-md-6">
                                                            <div class="card card-block card-stretch card-height card-bottom-border-danger note-detail">
                                                                <div class="card-header d-flex justify-content-between pb-1">
                                                                    <div class="icon iq-icon-box-2 icon-border-danger rounded">
                                                                        <svg width="23" height="23" class="svg-icon" id="iq-main-23" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                                        </svg>
                                                                    </div>
                                                                    <div class="card-header-toolbar d-flex align-items-center">                                                                      
                                                                        <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="favorite"><i class="lar la-heart mr-2"></i></a>
                                                                        <div class="card-header-toolbar d-flex align-items-center">
                                                                            <div class="dropdown">
                                                                                <span class="dropdown-toggle dropdown-bg" id="note-dropdownMenuButton26"
                                                                                    data-toggle="dropdown" aria-expanded="false" role="button">
                                                                                    <i class="ri-more-fill"></i>
                                                                                </span>
                                                                                <div class="dropdown-menu dropdown-menu-right"
                                                                                    aria-labelledby="note-dropdownMenuButton26">
                                                                                    <a href="#" class="dropdown-item new-note4" data-toggle="modal" data-target="#new-note4"><i class="las la-eye mr-3"></i>View</a>
                                                                                    <a href="#" class="dropdown-item edit-note1" data-toggle="modal" data-target="#edit-note1"><i class="las la-pen mr-3"></i>Edit</a>
                                                                                    <a class="dropdown-item" data-extra-toggle="delete" data-closest-elem=".card" href="#"><i class="las la-trash-alt mr-3"></i>Delete</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="card-body rounded">
                                                                    <h4 class="card-title">Lecture Notes</h4>
                                                                    <div class="checkbox mb-2">
                                                                        {/* <input type="checkbox" class="checkbox-input mr-3" id="checkbox10"> */}
                                                                        <label for="checkbox10" class="note-checkbox mb-0">Chapter 1 notes.</label>
                                                                    </div>
                                                                    <div class="checkbox mb-2">
                                                                        {/* <input type="checkbox" class="checkbox-input mr-3" id="checkbox11"> */}
                                                                        <label for="checkbox11" class="note-checkbox mb-0">Chapter 2 Assignment.</label>
                                                                    </div>
                                                                    <div class="checkbox mb-2">
                                                                        {/* <input type="checkbox" class="checkbox-input mr-3" id="checkbox12"> */}
                                                                        <label for="checkbox12" class="note-checkbox mb-0">Chapter 3 practical File.</label>
                                                                    </div>
                                                                </div>
                                                                <div class="card-footer">
                                                                    <div class="d-flex align-items-center justify-content-between note-text note-text-danger"> 
                                                                        <a href="#" class=""><i class="las la-user mr-2 font-size-20"></i>Only You</a>                                                            
                                                                        <a href="#" class=""><i class="las la-calendar mr-2 font-size-20"></i>15 Jan 2021</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>  
                                                        <div class="col-lg-4 col-md-6">
                                                            <div class="card card-block card-stretch card-height card-bottom-border-info note-detail">
                                                                <div class="card-header d-flex justify-content-between pb-1">
                                                                    <div class="icon iq-icon-box-2 icon-border-info rounded">
                                                                        <svg width="23" height="23" class="svg-icon" id="iq-main-24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                                            <path fill-rule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z" clip-rule="evenodd" />
                                                                        </svg>
                                                                    </div>
                                                                    <div class="card-header-toolbar d-flex align-items-center">                                                                     
                                                                        <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="favorite"><i class="lar la-heart mr-2"></i></a>
                                                                        <div class="card-header-toolbar d-flex align-items-center">
                                                                            <div class="dropdown">
                                                                                <span class="dropdown-toggle dropdown-bg" id="note-dropdownMenuButton27"
                                                                                    data-toggle="dropdown" aria-expanded="false" role="button">
                                                                                    <i class="ri-more-fill"></i>
                                                                                </span>
                                                                                <div class="dropdown-menu dropdown-menu-right"
                                                                                    aria-labelledby="note-dropdownMenuButton27">
                                                                                    <a href="#" class="dropdown-item new-note9" data-toggle="modal" data-target="#new-note9"><i class="las la-eye mr-3"></i>View</a>
                                                                                    <a href="#" class="dropdown-item edit-note1" data-toggle="modal" data-target="#edit-note1"><i class="las la-pen mr-3"></i>Edit</a>
                                                                                    <a class="dropdown-item" data-extra-toggle="delete" data-closest-elem=".card" href="#"><i class="las la-trash-alt mr-3"></i>Delete</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="card-body rounded">
                                                                    <h4 class="card-title">NotePlus for Entrepreneurs</h4>
                                                                    <p class="mb-3 card-description short">With NotePlus, you can easily share via message, WhatsApp, emails etc. You can also save your notes and edit it later or can easily delete the note.</p>                                                            
                                                                </div>
                                                                <div class="card-footer">
                                                                    <div class="d-flex align-items-center justify-content-between note-text note-text-info"> 
                                                                        <a href="#" class=""><i class="las la-user mr-2 font-size-20"></i>Only You</a>                                                            
                                                                        <a href="#" class=""><i class="las la-calendar mr-2 font-size-20"></i>18 Jan 2021</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>                                         
                                                        <div class="col-lg-4 col-md-6">
                                                            <div class="card card-block card-stretch card-height card-bottom-border-purple note-detail">
                                                                <div class="card-header d-flex justify-content-between pb-1">
                                                                    <div class="icon iq-icon-box-2 icon-border-purple rounded">
                                                                        <svg width="23" height="23" class="svg-icon" id="iq-main-25" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z" />
                                                                        </svg>
                                                                    </div>
                                                                    <div class="card-header-toolbar d-flex align-items-center">                                                                
                                                                        <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="favorite"><i class="lar la-heart mr-2"></i></a>
                                                                        <div class="card-header-toolbar d-flex align-items-center">
                                                                            <div class="dropdown">
                                                                                <span class="dropdown-toggle dropdown-bg" id="note-dropdownMenuButton28"
                                                                                    data-toggle="dropdown" aria-expanded="false" role="button">
                                                                                    <i class="ri-more-fill"></i>
                                                                                </span>
                                                                                <div class="dropdown-menu dropdown-menu-right"
                                                                                    aria-labelledby="note-dropdownMenuButton28">
                                                                                    <a href="#" class="dropdown-item new-note2" data-toggle="modal" data-target="#new-note2"><i class="las la-eye mr-3"></i>View</a>
                                                                                    <a href="#" class="dropdown-item edit-note1" data-toggle="modal" data-target="#edit-note1"><i class="las la-pen mr-3"></i>Edit</a>
                                                                                    <a class="dropdown-item" data-extra-toggle="delete" data-closest-elem=".card" href="#"><i class="las la-trash-alt mr-3"></i>Delete</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="card-body rounded">
                                                                    <h4 class="card-title">Birthday Celebration</h4>
                                                                    <p class="mb-3 card-description short">You can easily share via message, WhatsApp, emails etc. You can also save your notes and edit it later or can easily delete the note.</p>
                                                                    <ul class="pl-3 mb-0">
                                                                        <li class="note-list">Cakes and Balloons.</li>
                                                                    </ul>  
                                                                </div>
                                                                <div class="card-footer">
                                                                    <div class="d-flex align-items-center justify-content-between note-text note-text-purple"> 
                                                                        <a href="#" class=""><i class="las la-user mr-2 font-size-20"></i>Only You</a>                                                            
                                                                        <a href="#" class=""><i class="las la-calendar mr-2 font-size-20"></i>10 Jan 2021</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4 col-md-6">
                                                            <div class="card card-block card-stretch card-height card-bottom-border-primary note-detail">
                                                                <div class="card-header d-flex justify-content-between pb-1">
                                                                    <div class="icon iq-icon-box-2 icon-border-primary rounded">
                                                                        <svg width="23" height="23" class="svg-icon" id="iq-main-26" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                                        </svg>
                                                                    </div>
                                                                    <div class="card-header-toolbar d-flex align-items-center">                                                                
                                                                        <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="favorite"><i class="lar la-heart mr-2"></i></a>
                                                                        <div class="card-header-toolbar d-flex align-items-center">
                                                                            <div class="dropdown">
                                                                                <span class="dropdown-toggle dropdown-bg" id="note-dropdownMenuButton29"
                                                                                    data-toggle="dropdown" aria-expanded="false" role="button">
                                                                                    <i class="ri-more-fill"></i>
                                                                                </span>
                                                                                <div class="dropdown-menu dropdown-menu-right"
                                                                                    aria-labelledby="note-dropdownMenuButton29">
                                                                                    <a href="#" class="dropdown-item new-note5" data-toggle="modal" data-target="#new-note5"><i class="las la-eye mr-3"></i>View</a>
                                                                                    <a href="#" class="dropdown-item edit-note1" data-toggle="modal" data-target="#edit-note1"><i class="las la-pen mr-3"></i>Edit</a>
                                                                                    <a class="dropdown-item" data-extra-toggle="delete" data-closest-elem=".card" href="#"><i class="las la-trash-alt mr-3"></i>Delete</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="card-body rounded">
                                                                    <h4 class="card-title">Image Notes</h4>
                                                                    <ul class="row mb-0 p-0 list-inline flex-wrap align-items-center">
                                                                        <li class="col-4">
                                                                            <a href="#">
                                                                                {/* <img src="./assets/images/gallery/grid/01.jpg" class="img-fluid rounded" alt="" />   */}
                                                                            </a> 
                                                                        </li>
                                                                        <li class="col-4">
                                                                            <a href="#">
                                                                                {/* <img src="./assets/images/gallery/grid/02.jpg" class="img-fluid rounded" alt="" />   */}
                                                                            </a> 
                                                                        </li>
                                                                        <li class="col-4">
                                                                            <a href="#">
                                                                                {/* <img src="./assets/images/gallery/grid/03.jpg" class="img-fluid rounded" alt="" />   */}
                                                                            </a> 
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div class="card-footer">
                                                                    <div class="d-flex align-items-center justify-content-between note-text note-text-primary"> 
                                                                        <a href="#" class=""><i class="las la-user mr-2 font-size-20"></i>Only You</a>                                                            
                                                                        <a href="#" class=""><i class="las la-calendar mr-2 font-size-20"></i>5 Jan 2021</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4 col-md-6">
                                                            <div class="card card-block card-stretch card-height card-bottom-border-success note-detail mb-0">
                                                                <div class="card-header d-flex justify-content-between pb-1">
                                                                    <div class="icon iq-icon-box-2 icon-border-success rounded">
                                                                        <svg width="23" height="23" class="svg-icon" id="iq-main-27"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                                                                        </svg>
                                                                    </div>
                                                                    <div class="card-header-toolbar d-flex align-items-center">                                                                
                                                                        <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="favorite"><i class="lar la-heart mr-2"></i></a>
                                                                        <div class="card-header-toolbar d-flex align-items-center">
                                                                            <div class="dropdown">
                                                                                <span class="dropdown-toggle dropdown-bg" id="note-dropdownMenuButton30"
                                                                                    data-toggle="dropdown" aria-expanded="false" role="button">
                                                                                    <i class="ri-more-fill"></i>
                                                                                </span>
                                                                                <div class="dropdown-menu dropdown-menu-right"
                                                                                    aria-labelledby="note-dropdownMenuButton30">
                                                                                    <a href="#" class="dropdown-item new-note7" data-toggle="modal" data-target="#new-note7"><i class="las la-eye mr-3"></i>View</a>
                                                                                    <a href="#" class="dropdown-item edit-note1" data-toggle="modal" data-target="#edit-note1"><i class="las la-pen mr-3"></i>Edit</a>
                                                                                    <a class="dropdown-item" data-extra-toggle="delete" data-closest-elem=".card" href="#"><i class="las la-trash-alt mr-3"></i>Delete</a>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="card-body rounded">  
                                                                    <h4 class="card-title">Quick Summary</h4>          
                                                                    <p class="mb-3 card-description short">Need to write a summary note of the subject you just finished? NotePlus lets you do in on-the-go!</p>
                                                                    <p class="text-underline ellipsis-text short">Https://Dribble.com/Shots/6387620</p>
                                                                </div>
                                                                <div class="card-footer">
                                                                    <div class="d-flex align-items-center justify-content-between note-text note-text-success"> 
                                                                        <a href="#" class=""><i class="las la-user mr-2 font-size-20"></i>Only You</a>                                                            
                                                                        <a href="#" class=""><i class="las la-calendar mr-2 font-size-20"></i>12 Jan 2021</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>     
                                                    </div>
                                                </div>
                                                <div class="icon active animate__animated animate__fadeIn i-list">
                                                    <div class="row">                                            
                                                        <div class="col-lg-12">
                                                            <div class="table-responsive">
                                                                <table class="table  tbl-server-info">
                                                                    <thead>
                                                                        <tr class="ligth">
                                                                            <th class="w-50" scope="col">Title</th>
                                                                            <th scope="col">Permission</th>
                                                                            <th scope="col">Created At</th>
                                                                            <th scope="col">Action</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>
                                                                                <h4 class="mb-2">Essay Outline <i class="lar la-heart ml-2"></i></h4>
                                                                                <span>Donec rutrum congue leo eget malesuada.</span>
                                                                            </td>
                                                                            <td>
                                                                                <i class="las la-lock mr-2 font-size-20"></i>
                                                                                Only You
                                                                            </td>
                                                                            <td>Dec 20</td>
                                                                            <td>
                                                                                <div>
                                                                                    <a href="#" class="badge badge-success mr-3" data-toggle="modal" data-target="#edit-note1"><i class="las la-pen mr-0"></i></a>
                                                                                    <a href="#" class="badge badge-danger" data-extra-toggle="delete" data-closest-elem="tr"><i class="las la-trash-alt mr-0"></i></a>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <h4 class="mb-2">Lecture Notes <i class="lar la-heart ml-2"></i></h4>
                                                                                <span>Chapter 1 notes, Chapter 2 Assignment, Chapter 3 practical File.</span>
                                                                            </td>
                                                                            <td>
                                                                                <i class="las la-lock mr-2 font-size-20"></i>
                                                                                Only You
                                                                            </td>
                                                                            <td>Dec 20</td>
                                                                            <td>
                                                                                <div>
                                                                                    <a href="#" class="badge badge-success mr-3" data-toggle="modal" data-target="#edit-note1"><i class="las la-pen mr-0"></i></a>
                                                                                    <a href="#" class="badge badge-danger" data-extra-toggle="delete" data-closest-elem="tr"><i class="las la-trash-alt mr-0"></i></a>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <h4 class="mb-2">NotePlus for Entrepreneurs <i class="lar la-heart ml-2"></i></h4>
                                                                                <span>With NotePlus, you can easily share via message, WhatsApp, emails etc.</span>
                                                                            </td>
                                                                            <td>
                                                                                <i class="las la-lock mr-2 font-size-20"></i>
                                                                                Only You
                                                                            </td>
                                                                            <td>Dec 20</td>
                                                                            <td>
                                                                                <div>
                                                                                    <a href="#" class="badge badge-success mr-3" data-toggle="modal" data-target="#edit-note1"><i class="las la-pen mr-0"></i></a>
                                                                                    <a href="#" class="badge badge-danger" data-extra-toggle="delete" data-closest-elem="tr"><i class="las la-trash-alt mr-0"></i></a>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <h4 class="mb-2">Birthday Celebration <i class="lar la-heart ml-2"></i></h4>
                                                                                <span>You can easily share via message, WhatsApp, emails etc.</span>
                                                                            </td>
                                                                            <td>
                                                                                <i class="las la-lock mr-2 font-size-20"></i>
                                                                                Only You
                                                                            </td>
                                                                            <td>Dec 20</td>
                                                                            <td>
                                                                                <div>
                                                                                    <a href="#" class="badge badge-success mr-3" data-toggle="modal" data-target="#edit-note1"><i class="las la-pen mr-0"></i></a>
                                                                                    <a href="#" class="badge badge-danger" data-extra-toggle="delete" data-closest-elem="tr"><i class="las la-trash-alt mr-0"></i></a>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <h4 class="mb-2">Image Notes<i class="lar la-heart ml-2"></i></h4>
                                                                                <span>NotePlus lets you do in on-the-go!</span>
                                                                            </td>
                                                                            <td>
                                                                                <i class="las la-lock mr-2 font-size-20"></i>
                                                                                Only You
                                                                            </td>
                                                                            <td>Dec 20</td>
                                                                            <td>
                                                                                <div>
                                                                                    <a href="#" class="badge badge-success mr-3" data-toggle="modal" data-target="#edit-note1"><i class="las la-pen mr-0"></i></a>
                                                                                    <a href="#" class="badge badge-danger" data-extra-toggle="delete" data-closest-elem="tr"><i class="las la-trash-alt mr-0"></i></a>
                                                                                </div>
                                                                            </td>
                                                                        </tr>
                                                                        <tr>
                                                                            <td>
                                                                                <h4 class="mb-2">Quick Summary <i class="lar la-heart ml-2"></i></h4>
                                                                                <span>Need to write a summary note of the subject you just finished</span>
                                                                            </td>
                                                                            <td>
                                                                                <i class="las la-lock mr-2 font-size-20"></i>
                                                                                Only You
                                                                            </td>
                                                                            <td>Dec 20</td>
                                                                            <td>
                                                                                <div>
                                                                                    <a href="#" class="badge badge-success mr-3" data-toggle="modal" data-target="#edit-note1"><i class="las la-pen mr-0"></i></a>
                                                                                    <a href="#" class="badge badge-danger" data-extra-toggle="delete" data-closest-elem="tr"><i class="las la-trash-alt mr-0"></i></a>
                                                                                </div>
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
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            {/* </div> */}
            <div class="modal fade" id="share-note" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-body">
                            <div class="popup text-left">
                                <h4 class="mb-3">Share</h4>
                                <div class="content create-workform bg-body">
                                    <div class="mb-3">
                                        <h5 class="mb-2">Shareable Link</h5>
                                        {/* <input type="text" class="form-control" placeholder="" value="Https://Dribble.com/Shots/6387620"> */}
                                    </div>      
                                    <div class="pb-3">               
                                        <h5 class="mb-2">Invite Someone</h5>
                                        {/* <input type="text" class="form-control" placeholder="Enter Name or Email"> */}
                                    </div>       
                                    <div class="col-lg-12 mt-4">
                                        <div class="d-flex flex-wrap align-items-ceter justify-content-center">
                                            <div class="btn btn-primary mr-4" data-dismiss="modal">Cancel</div>
                                            <div class="btn btn-outline-primary" data-dismiss="modal">Create</div>
                                        </div>
                                    </div>  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="new-note2" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-body">
                            <div class="popup text-left">
                                <div class="media align-items-top justify-content-between">                            
                                    <h3 class="mb-3">Birthday Celebration</h3>
                                    <div class="media align-items-center">
                                        <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="pin content"><i class="las la-thumbtack mr-2"></i></a>
                                        <div class="btn-cancel p-0" data-dismiss="modal"><i class="las la-times"></i></div>
                                    </div>
                                </div>
                                <div class="content create-workform">
                                    <p>You can easily share via message, WhatsApp, emails etc. You can also save your notes and edit it later or can easily delete the note.</p> 
                                    <ul class="pl-3 mb-0">
                                        <li class="note-list">Cakes and Balloons.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            <div class="modal fade" id="new-note3" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-body">
                            <div class="popup text-left">
                                <div class="media align-items-top justify-content-between">                            
                                    <h3 class="mb-3">Essay Outline</h3>
                                    <div class="media align-items-center">
                                        <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="favorite"><i class="lar la-heart mr-2"></i></a>
                                        <div class="btn-cancel p-0" data-dismiss="modal"><i class="las la-times"></i></div>
                                    </div>
                                </div>
                                <div class="content create-workform">
                                    <ul class="pl-3 mb-0">
                                        <li class="note-list mb-2">Content should be of topic</li>
                                        <li class="note-list mb-2">300 Words only</li>
                                        <li class="note-list mb-2">Make presentation</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="new-note4" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-body">
                            <div class="popup text-left">
                                <div class="media align-items-top justify-content-between">                            
                                    <h3 class="mb-3">Lecture Notes</h3>
                                    <div class="media align-items-center">
                                        <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="favorite"><i class="lar la-heart mr-2"></i></a>
                                        <div class="btn-cancel p-0" data-dismiss="modal"><i class="las la-times"></i></div>
                                    </div>
                                </div>
                                <div class="content create-workform">
                                    <div class="checkbox mb-2">
                                        {/* <input type="checkbox" class="checkbox-input mr-3" id="checkbox13"> */}
                                        <label for="checkbox13" class="note-checkbox mb-0">Chapter 1 notes</label>
                                    </div>
                                    <div class="checkbox mb-2">
                                        {/* <input type="checkbox" class="checkbox-input mr-3" id="checkbox14"> */}
                                        <label for="checkbox14" class="note-checkbox mb-0">Chapter 2 Assignment</label>
                                    </div>
                                    <div class="checkbox mb-2">
                                        {/* <input type="checkbox" class="checkbox-input mr-3" id="checkbox15"> */}
                                        <label for="checkbox15" class="note-checkbox mb-0">Chapter 3 practical File</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="new-note5" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-body">
                            <div class="popup text-left">
                                <div class="media align-items-top justify-content-between">                            
                                    <h3 class="mb-3">Image Notes</h3>
                                    <div class="media align-items-center">
                                        <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="favorite"><i class="lar la-heart mr-2"></i></a>
                                        <div class="btn-cancel p-0" data-dismiss="modal"><i class="las la-times"></i></div>
                                    </div>
                                </div>
                                <div class="content create-workform mb-4">
                                    <ul class="row mb-0 p-0 list-inline flex-wrap align-items-center">
                                        <li class="col-md-4 mb-4">
                                            <a href="#">
                                                {/* <img src="./assets/images/gallery/grid/01.jpg" class="img-fluid rounded avatar-150" alt="">   */}
                                            </a> 
                                        </li>
                                        <li class="col-md-4 mb-4">
                                            <a href="#">
                                                {/* <img src="./assets/images/gallery/grid/02.jpg" class="img-fluid rounded avatar-150" alt="">   */}
                                            </a> 
                                        </li>
                                        <li class="col-md-4 mb-4">
                                            <a href="#">
                                                {/* <img src="./assets/images/gallery/grid/03.jpg" class="img-fluid rounded avatar-150" alt="">   */}
                                            </a> 
                                        </li>
                                        <li class="col-md-4">
                                            <a href="#">
                                                {/* <img src="./assets/images/gallery/grid/04.jpg" class="img-fluid rounded avatar-150" alt="">   */}
                                            </a> 
                                        </li>
                                        <li class="col-md-4">
                                            <a href="#">
                                                {/* <img src="./assets/images/gallery/grid/05.jpg" class="img-fluid rounded avatar-150" alt="">   */}
                                            </a> 
                                        </li>
                                        <li class="col-md-4">
                                            <a href="#">
                                                {/* <img src="./assets/images/gallery/grid/06.jpg" class="img-fluid rounded avatar-150" alt="">   */}
                                            </a> 
                                        </li>
                                    </ul>
                                </div>
                                <h4 class="mb-3">Shared</h4>
                                <ul class="list-inline p-0 m-0">
                                    <li>
                                        <div class="media align-items-center cust-card mb-3">
                                            <div class="">
                                                {/* <img class="avatar-50 rounded-small" src="./assets/images/user/04.jpg" alt="01"> */}
                                            </div>
                                            <div class="media-body ml-3">
                                                <div class="d-flex align-items-center justify-content-between">
                                                    <h5 class="mb-0">Anne Effit</h5>
                                                    <h6 class="mb-0">02 Min Ago</h6>
                                                </div>
                                                <p class="mb-0">anneeffit@gmail.com</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="new-note6" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-body">
                            <div class="popup text-left">
                                <div class="media align-items-top justify-content-between">                            
                                    <h3 class="mb-3">Benefits of NotePlus</h3>
                                    <div class="btn-cancel p-0" data-dismiss="modal"><i class="las la-times"></i></div>
                                </div>
                                <div class="content create-workform">
                                    <p>Take organized notes and share later as meeting minutes or check-list with this simple accessible Noteplus.</p> 
                                    <h4 class="mb-3">Shared</h4>
                                    <ul class="list-inline p-0 m-0">
                                        <li>
                                            <div class="media align-items-center cust-card mb-3">
                                                <div class="">
                                                    {/* <img class="avatar-50 rounded-small" src="./assets/images/user/04.jpg" alt="01"> */}
                                                </div>
                                                <div class="media-body ml-3">
                                                    <div class="d-flex align-items-center justify-content-between">
                                                        <h5 class="mb-0">Anne Effit</h5>
                                                        <h6 class="mb-0">02 Min Ago</h6>
                                                    </div>
                                                    <p class="mb-0">anneeffit@gmail.com</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="media align-items-center cust-card mb-3">
                                                <div class="">
                                                    {/* <img class="avatar-50 rounded-small" src="./assets/images/user/05.jpg" alt="01"> */}
                                                </div>
                                                <div class="media-body ml-3">
                                                    <div class="d-flex align-items-center justify-content-between">
                                                        <h5 class="mb-0">Poall Molve</h5>
                                                        <h6 class="mb-0">15 Min Ago</h6>
                                                    </div>
                                                    <p class="mb-0">poallmolve@gmail.com</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            <div class="modal fade" id="new-note7" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-body">
                            <div class="popup text-left">
                                <div class="media align-items-top justify-content-between">                            
                                    <h3 class="mb-3">Quick Summary</h3>
                                    <div class="media align-items-center">
                                        <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="pin content"><i class="las la-thumbtack mr-2"></i></a>
                                        <div class="btn-cancel p-0" data-dismiss="modal"><i class="las la-times"></i></div>
                                    </div>
                                </div>
                                <div class="content create-workform">
                                    <p>Need to write a summary note of the subject you just finished? NotePlus lets you do in on-the-go!</p> 
                                    <p class="text-underline ellipsis-text short">Https://Dribble.com/Shots/6387620</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            <div class="modal fade" id="new-note8" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-body">
                            <div class="popup text-left">
                                <div class="media align-items-top justify-content-between">                            
                                    <h3 class="mb-3">Address & Email</h3>
                                    <div class="btn-cancel p-0" data-dismiss="modal"><i class="las la-times"></i></div>
                                </div>
                                <div class="content create-workform">
                                    <p>Quickly note down the address and email address on NotePlus so that you can access it from anywhere.</p> 
                                    <h4 class="mb-3">Shared</h4>
                                    <ul class="list-inline p-0 m-0">
                                        <li>
                                            <div class="media align-items-center cust-card mb-3">
                                                <div class="">
                                                    {/* <img class="avatar-50 rounded-small" src="./assets/images/user/06.jpg" alt="01"> */}
                                                </div>
                                                <div class="media-body ml-3">
                                                    <div class="d-flex align-items-center justify-content-between">
                                                        <h5 class="mb-0">Anne Effit</h5>
                                                        <h6 class="mb-0">02 Min Ago</h6>
                                                    </div>
                                                    <p class="mb-0">anneeffit@gmail.com</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="media align-items-center cust-card mb-3">
                                                <div class="">
                                                    {/* <img class="avatar-50 rounded-small" src="./assets/images/user/07.jpg" alt="01"> */}
                                                </div>
                                                <div class="media-body ml-3">
                                                    <div class="d-flex align-items-center justify-content-between">
                                                        <h5 class="mb-0">Poall Molve</h5>
                                                        <h6 class="mb-0">05 Min Ago</h6>
                                                    </div>
                                                    <p class="mb-0">poallmolve@gmail.com</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="media align-items-center cust-card mb-3">
                                                <div class="">
                                                    {/* <img class="avatar-50 rounded-small" src="./assets/images/user/08.jpg" alt="01"> */}
                                                </div>
                                                <div class="media-body ml-3">
                                                    <div class="d-flex align-items-center justify-content-between">
                                                        <h5 class="mb-0">John Teach</h5>
                                                        <h6 class="mb-0">16 Min Ago</h6>
                                                    </div>
                                                    <p class="mb-0">johnteach@gmail.com</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="media align-items-center cust-card mb-3">
                                                <div class="">
                                                    {/* <img class="avatar-50 rounded-small" src="./assets/images/user/09.jpg" alt="01"> */}
                                                </div>
                                                <div class="media-body ml-3">
                                                    <div class="d-flex align-items-center justify-content-between">
                                                        <h5 class="mb-0">Rick Ness</h5>
                                                        <h6 class="mb-0">18 Min Ago</h6>
                                                    </div>
                                                    <p class="mb-0">rickness@gmail.com</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
            <div class="modal fade" id="new-note9" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-body">
                            <div class="popup text-left">
                                <div class="media align-items-top justify-content-between">                            
                                    <h3 class="mb-3">NotePlus for Entrepreneurs</h3>
                                    <div class="media align-items-center">
                                        <a href="#" data-toggle="tooltip" data-placement="top" title="" data-original-title="favorite"><i class="lar la-heart mr-2"></i></a>
                                        <div class="btn-cancel p-0" data-dismiss="modal"><i class="las la-times"></i></div>
                                    </div>
                                </div>
                                <div class="content create-workform">
                                    <p>With NotePlus, you can easily share via message, WhatsApp, emails etc. You can also save your notes and edit it later or can easily delete the note.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
    </div>

    )
}

export default Home