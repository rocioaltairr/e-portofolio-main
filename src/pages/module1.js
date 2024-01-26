import React from 'react';
import Card from 'react-bootstrap/Card';
import logo from '.././images/logo.png'
import user from '.././images/user/01.jpg'

const Module1 = () => {
    return <div className='module1' style={{textAlign:'left'}}>
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
                                        <span class="mt-2">My Profile</span>
                                        </a>
                                </div>
                                </li>
                                </ul>                     
                        </div> 
                        </div>
                </nav>
                </div>
        </div>   
        <div class="iq-sidebar  sidebar-default ">
                <div class="iq-sidebar-logo d-flex align-items-center justify-content-between">
                        <a href="../index.html" class="header-logo">
                                <img src={logo} class="img-fluid rounded-normal light-logo"></img>
                                <h4 class="logo-title ml-3">Journey</h4>
                        </a>
                        <div class="iq-menu-bt-sidebar">
                                <i class="las la-times wrapper-menu"></i>
                        </div>
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
                                <a class="dropdown-item mb-2" href="../app/user-profile.html">
                                <i class="lar la-user-circle font-size-20 mr-1"></i>
                                <span class="mt-2">My Profile</span>
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
        <div className='content-page'>
            <div class="container-fluid note-details">
                    <div class="desktop-header">
                        <div class="card card-block topnav-left">
                                <div class="card-body write-card">
                                    Launching into Computer Science
                                </div>
                        </div>
                        <div class="card topnav-right">
                        </div>            
                    </div>
            </div>
            <h2>Unit1</h2>
            <Card >
                <Card.Body>
                    <Card.Title><h3 style={{color:"white"}}>Works</h3></Card.Title>
                    <Card.Subtitle className="mb-2 text-muted"><p style={{color:"white", fontSize:"14px"}}>Create your e-portfolio on GitHub.</p></Card.Subtitle>
                    <Card.Text>
                    HTML, CSS, JavaScript, and the React framework for web developmen and learn Object Oriented Programming.
                    </Card.Text>
                    <Card.Link href="https://rocioaltairr.github.io/e-portofolio-main/">Web Link</Card.Link>
                    <Card.Link href="https://github.com/rocioaltairr/e-portofolio-main">GitHub Link</Card.Link>
                </Card.Body>
            </Card>
            <Card >
                <Card.Body>
                    <Card.Title><h3 style={{color:"white"}}>Reading</h3></Card.Title>
                    <Card.Subtitle className="mb-2 text-muted"><p style={{color:"white", fontSize:"14px"}}>This week we focus on the challenges and threats that are particularly raised due to the advancement and widespread use of computing technology.</p></Card.Subtitle>
                    <Card.Text>
                    <div style={{display:'flex'}}>
                        <h4 style={{color:'#1abc9c',marginRight:"12px"}}>Chapter 4.6</h4>
                        <p style={{marginRight:"12px"}}>Of the core textbook explores the topic of cybersecurity.</p>
                    </div>
                    {/* <p>1. What is phishing? How are computers secured against it?</p>
                    <p>2. What distinction is there between the types of firewalls that can be placed at a domain’s gateway as opposed to an individual host within the domain?</p>
                    <p>3. Technically, the term data refers to representations of information, whereas information refers to the underlying meaning. Does the use of passwords protect data or information? Does the use of encryption protect data or information?</p>
                    <p>4. What advantage does public-key encryption have over more traditional encryption techniques?</p>
                    <p>5. What problems are associated with legal attempts to protect against network security problems?</p>
                    <p>Question</p> */}
                    <div style={{display:'flex'}}>
                        <h4 style={{color:'#1abc9c',marginRight:"12px"}}>Chapter 9.7</h4>
                        <p style={{marginRight:"12px"}}>discusses the social impact of database technology.</p>
                    </div>
                    {/* <p style={{color:'#1abc9c'}}>Question</p> */}
                    {/* <p>1. Should law enforcement agencies be given access to databases for the purpose of identifying individuals with criminal tendencies, even though the individuals might not have committed a crime?</p>
                    <p>2. Should insurance companies be given access to databases for the purpose of identifying individuals with potential medical problems, even though the individuals have not shown any symptoms?</p>
                    <p>3. Suppose you were financially comfortable. What benefits could you derive if this information were shared among a variety of institutions? What penalties could you suffer from the distribution of this same information? What if you were financially uncomfortable?</p> */}
                    {/* <p>4. What role does a free press have in controlling database abuse? (For example, to what extent does the press affect public opinion or expose abuse?)</p> */}

                    <div style={{display:'flex'}}>
                        <h4 style={{color:'#1abc9c',marginRight:"12px"}}>Chapter 11.7</h4>
                        <p style={{marginRight:"12px"}}>Focuses on considering the consequences of actions in computer science.</p>
                    </div>
                    {/* <p style={{color:'#1abc9c'}}>Question</p>
                    <p>1. In what way does the reactive approach to robot behavior differ from the more traditional "plan-based" behavior?</p>
                    <p>2. What are some current topics of research in the field of robotics?</p>
                    <p>3. What are two levels at which evolutionary theories are being applied to robot development?</p> */}
                    <hr />
                    <div style={{display:'flex'}}>
                        <h4 style={{color:'#1abc9c',marginRight:"12px"}}>GDPR</h4>
                        <p style={{marginRight:"12px"}}>stands for the General Data Protection Regulation</p>
                        <a href='https://commission.europa.eu/law/law-topic/data-protection/eu-data-protection-rules_en'>Link</a>
                    </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    </div>
}

export default Module1