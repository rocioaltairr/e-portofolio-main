import React from 'react';
import { Link } from 'react-router-dom';
const ModuleNote = ({ title, content, module, date}) => {

  return (
    <div class="col-lg-4 col-md-6">
    <Link to={module}>
        <div class="card card-block card-stretch card-height card-bottom-border-info note-detail">
            <div class="card-header d-flex justify-content-between pb-1">
                <div class="icon iq-icon-box-2 icon-border-info rounded">
                    <svg width="23" height="23" class="svg-icon" id="iq-main-01" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                </div>
                <div class="card-header-toolbar d-flex align-items-center">
                    <div class="dropdown">
                        <span class="dropdown-toggle dropdown-bg" id="note-dropdownMenuButton4"
                            data-toggle="dropdown" aria-expanded="false" role="button">
                        </span>
                        <div class="dropdown-menu dropdown-menu-right"
                            aria-labelledby="note-dropdownMenuButton4">
                            <a href="#" class="dropdown-item new-note1" data-toggle="modal" data-target="#new-note1"><i class="las la-eye mr-3"></i>View</a>
                            <a href="#" class="dropdown-item edit-note1" data-toggle="modal" data-target="#edit-note1"><i class="las la-pen mr-3"></i>Edit</a>
                            <a class="dropdown-item" data-extra-toggle="delete" data-closest-elem=".card" href="#"><i class="las la-trash-alt mr-3"></i>Delete</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-body rounded">
                <h4 class="card-title">{title}</h4>
                {/* <p class="mb-3 card-description short">{content}</p>                                                             */}
            </div>
            <div class="card-footer">
                <div class="d-flex align-items-center justify-content-between note-text note-text-info">
                    {/* <a href="#" class=""><i class="las la-user-friends mr-2 font-size-20"></i>03 share</a> */}
                    <a href="#" class=""><i class="las la-calendar mr-2 font-size-20"></i>{date}</a>
                </div>
            </div>
        </div>
    </Link>
</div>
  );
}

export default ModuleNote;
