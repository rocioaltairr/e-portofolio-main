import React from 'react';
import logo from '../../images/logo.png'
import user from '../../images/user/01.jpg'
import { Link } from 'react-router-dom';

const LeftSlidebar = () => {

  return (
    <div class="iq-sidebar  sidebar-default ">
        <div class="iq-sidebar-logo d-flex align-items-center justify-content-between">
            <Link to="/">
                <a href="../index.html" class="header-logo">
                    <img src={logo} class="img-fluid rounded-normal light-logo"></img>
                    <h4 class="logo-title ml-3">Journey</h4>
                </a>
                <div class="iq-menu-bt-sidebar">
                    <i class="las la-times wrapper-menu"></i>
                </div>
            </Link>
        </div>    
        <div class="sidebar-caption dropdown">
            <a href="#" class="iq-user-toggle d-flex align-items-center justify-content-between" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                <img src={user} class="img-fluid rounded avatar-50 mr-3" alt="user"></img>
                <div class="caption">
                    <h6 class="mb-0 line-height">Rocio Altair</h6>
                    
                </div>
                <i class="las la-angle-down"></i>
            </a>
            <div class="dropdown-menu w-100 border-0 my-2" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item mb-2">
                    <i class="lar la-user-circle font-size-20 mr-1"></i>
                    <Link to="/about">My Profile</Link>
                </a> 
            </div>
        </div>
        <div class="data-scrollbar" data-scroll="1">
            <div class="iq-search-bar device-search mb-3">
            
            </div>
            <div class="sidebar-btn dropdown mb-3">
                <div class="dropdown-menu w-100 border-0 py-3" aria-labelledby="dropdownMenuButton01">
                    <a class="dropdown-item mb-2" href="../backend/page-new-note.html?type=blank">
                        <span><i class="ri-sticky-note-line mr-3"></i>Blank Notes</span>
                    </a>
                    <a class="dropdown-item mb-2" href="../backend/page-new-note.html?type=todo">
                        <span><i class="ri-todo-line mr-3"></i>To-do</span>
                    </a>
                    <a class="dropdown-item mb-2" href="../backend/page-new-note.html?type=essay">
                        <span><i class="ri-booklet-line mr-3"></i>Essay Notes</span>
                    </a>
                    <a class="dropdown-item" href="../backend/page-new-note.html?type=daily">
                        <span><i class="ri-donut-chart-line mr-3"></i>Daily Reflection</span>
                    </a>
                </div>
            </div>
            
            <div class="p-3"></div>
        </div>
    </div>     
  );
}

export default LeftSlidebar;
