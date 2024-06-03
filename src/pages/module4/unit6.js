import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import UnitHeader from '../Components/unit_header'; 
import SectionBloc from '../Components/section_bloc'; 
import img1 from './Jupyter_Notebook_Activity.png';

function Unit6({ cardVisibility, cardNoteVisibility, toggleCard, toggleNoteCard }) {
    const [sectionVisibility, setSectionVisibility] = useState({
        section1: true,
        section2: true
    });

    const toggleSection = (unit) => {
      setSectionVisibility((prevState) => ({
        ...prevState,
        [unit]: !prevState[unit],
      }));
    };

    return (
        <div>
        <UnitHeader
            unit={"unit6"}
                title={"Unit 6: pytest and Test-Driven Development"}
                toggleNoteCard={(unit) => toggleNoteCard(unit)} // Adjust the function signature
                cardNoteVisibility={cardNoteVisibility.unit6}
        />
        <Card style={{ display: cardNoteVisibility.unit6 ? 'none' : 'block' }}>
            <Card.Body  style={{textAlign : 'left' }}>
                <Card.Text style={{textAlign:'left'}}>
                    <SectionBloc
                        section={"section1"}
                        title={"Overview and reflection"}
                        toggleSection={(section) => toggleSection(section)} 
                        sectionVisibility={sectionVisibility.section1}
                    />
                    <div style={{display: sectionVisibility.section1 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px' }} className='card card-block'>
                        In Unit 6, I learned about the principles and practices of Test-Driven Development (TDD) in Python using pytest. <br/>
                        Additionally, we explored the role responsibilities of User Experience researchers and the impact of emotional reactions on user experience.
                        We discussed various testing stages and automation techniques, including unit testing, acceptance testing, and system testing. <br/>
                        Furthermore, the seminar provided insight into project management considerations and requirements gathering, culminating in an understanding of how to create a costed project plan for a software/hardware system. <br/>
                        Overall, this seminar gave me valuable knowledge and skills in software engineering project management, user experience, and testing methodologies.<br/>
                    </div>
                    <SectionBloc
                        section={"section2"}
                        title={"Activity: Jupyter Notebook Activity - pytest"}
                        toggleSection={(section) => toggleSection(section)} 
                        sectionVisibility={sectionVisibility.section2}
                    />
                    <div style={{display: sectionVisibility.section2 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px' }} className='card card-block'>
                    Amend the code so that the tests fail, you can see the amended code on the GitHub link.<br/>
                        <a  style={{color: '#11ABB0'}} href='https://github.com/rocioaltairr/Jupyter-Notebook-Activity---pytest' target="_blank">
                            GitHub link
                        </a>
                    <Card.Img variant="top" src={img1} />
                    </div>
                </Card.Text>
            </Card.Body>
        </Card>
        </div>
    );
}

export default Unit6;