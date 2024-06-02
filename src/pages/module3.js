import React, { useState } from 'react';
import Unit1 from './module3/unit1'; 
import Unit2 from './module3/unit2'; 
import Unit3 from './module3/unit3'; 
import Unit4 from './module3/unit4'; 
import Unit5 from './module3/unit5'; 
import Unit6 from './module3/unit6'; 
import Unit7 from './module3/unit7'; 
import Unit8 from './module3/unit8'; 
import Unit9 from './module3/unit9'; 
import Unit10 from './module3/unit10'; 
import Unit11 from './module3/unit11'; 
import Unit12 from './module3/unit12'; 
import logo from '.././images/logo.png'
import user from '.././images/user/01.jpg'
import { Link } from 'react-router-dom';
import LeftSlidebar from './Components/left_slidebar.js';

const Module3 = () => {
    const [cardVisibility, setCardVisibility] = useState({
        unit1: true,
        unit2: true,
        unit3: true,
        unit4: true,
        unit5: true,
        unit6: true,
        unit7: true,
        unit8: true,
        unit9: true,
        unit10: true,
        unit11: true,
        unit12: true,
    });

    const [cardNoteVisibility, setNoteCardVisibility] = useState({
        unit1: true,
        unit2: true,
        unit3: true,
        unit4: true,
        unit5: true,
        unit6: true,
        unit7: true,
        unit8: true,
        unit9: true,
        unit10: true,
        unit11: true,
        unit12: true,
      });
  
    const toggleCard = (unit) => {
      setCardVisibility((prevState) => ({
        ...prevState,
        [unit]: !prevState[unit],
      }));
    };

    const toggleNoteCard = (unit) => {
        setNoteCardVisibility((prevState) => ({
          ...prevState,
          [unit]: !prevState[unit],
        }));
      };

    return <div className='module3' style={{textAlign:'left'}}>
        <div className='wrapper'>
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
                <div className='content-page'>
                        <div class="container-fluid note-details">
                                <div class="desktop-header">
                                        <div class="card card-block topnav-left">
                                        <div class="card-body write-card">
                                                <h2>Secure Software Development </h2>
                                        </div>
                                        </div>
                                        <div class="card topnav-right">
                                        
                                        </div>            
                                </div>
                        </div>
                        <div className='card card-block card-stretch'>
                                        <div className='card-body custom-notes-space'>
                                                <Unit1
                                                                cardVisibility={cardVisibility}
                                                                cardNoteVisibility={cardNoteVisibility}
                                                                toggleCard={toggleCard}
                                                                toggleNoteCard={toggleNoteCard}
                                                        />

                                                        <Unit2
                                                                cardVisibility={cardVisibility}
                                                                cardNoteVisibility={cardNoteVisibility}
                                                                toggleCard={toggleCard}
                                                                toggleNoteCard={toggleNoteCard}
                                                        />
                                                        
                                                        <Unit3
                                                                cardVisibility={cardVisibility}
                                                                cardNoteVisibility={cardNoteVisibility}
                                                                toggleCard={toggleCard}
                                                                toggleNoteCard={toggleNoteCard}
                                                        />

                                                        <Unit4
                                                                cardVisibility={cardVisibility}
                                                                cardNoteVisibility={cardNoteVisibility}
                                                                toggleCard={toggleCard}
                                                                toggleNoteCard={toggleNoteCard}
                                                        />

                                                        <Unit5
                                                                cardVisibility={cardVisibility}
                                                                cardNoteVisibility={cardNoteVisibility}
                                                                toggleCard={toggleCard}
                                                                toggleNoteCard={toggleNoteCard}
                                                        />
                                                        
                                                        <Unit6
                                                                cardVisibility={cardVisibility}
                                                                cardNoteVisibility={cardNoteVisibility}
                                                                toggleCard={toggleCard}
                                                                toggleNoteCard={toggleNoteCard}
                                                        />

                                                        <Unit7
                                                                cardVisibility={cardVisibility}
                                                                cardNoteVisibility={cardNoteVisibility}
                                                                toggleCard={toggleCard}
                                                                toggleNoteCard={toggleNoteCard}
                                                        />

                                                        <Unit8
                                                                cardVisibility={cardVisibility}
                                                                cardNoteVisibility={cardNoteVisibility}
                                                                toggleCard={toggleCard}
                                                                toggleNoteCard={toggleNoteCard}
                                                        />

                                                        <Unit9
                                                                cardVisibility={cardVisibility}
                                                                cardNoteVisibility={cardNoteVisibility.unit9}
                                                                toggleCard={toggleCard}
                                                                toggleNoteCard={toggleNoteCard}
                                                        />

                                                        <Unit10
                                                                cardVisibility={cardVisibility}
                                                                cardNoteVisibility={cardNoteVisibility}
                                                                toggleCard={toggleCard}
                                                                toggleNoteCard={toggleNoteCard}
                                                        />

                                                        <Unit11
                                                                cardVisibility={cardVisibility}
                                                                cardNoteVisibility={cardNoteVisibility}
                                                                toggleCard={toggleCard}
                                                                toggleNoteCard={toggleNoteCard}
                                                        />

                                                        <Unit12
                                                                cardVisibility={cardVisibility}
                                                                cardNoteVisibility={cardNoteVisibility}
                                                                toggleCard={toggleCard}
                                                                toggleNoteCard={toggleNoteCard}
                                                        />
                                        
                                        </div>
                        </div>
                </div>
        </div>
    </div>
}

export default Module3