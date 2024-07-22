import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
// import activity_uml from '../images/module2/Activity Diagram.png';
import UnitHeader from '../Components/unit_header'; 
import SectionBloc from '../Components/section_bloc';

function Unit4({ cardVisibility, cardNoteVisibility, toggleNoteCard }) {
    const [sectionVisibility, setSectionVisibility] = useState({
        section1: true,
        section2: true,
        section3: true,
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
                unit={"unit4"}
                    title={"Unit 4: Security Standards, Frameworks and Disaster Recovery"}
                    toggleNoteCard={(unit) => toggleNoteCard(unit)} // Adjust the function signature
                    cardNoteVisibility={cardNoteVisibility.unit4}
            />
            <Card style={{ display: cardNoteVisibility.unit4 ? 'none' : 'block' }}>
                <Card.Body  style={{textAlign : 'left' }}>
                <SectionBloc
                    section={"section1"}
                    title={"DR Solutions Design and Review"}
                    toggleSection={(section) => toggleSection(section)} 
                    sectionVisibility={sectionVisibility.section1}
                />
                <div style={{display: sectionVisibility.section1 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px' }} className='card card-block'>
                    <a  style={{color: '#11ABB0'}} href='https://docs.google.com/document/d/1IjboFeSfji373XdhMR6fgXfczVok0SV-lC8Ink8TbHA/edit?usp=sharing' target="_blank">
                    See more about - DR Solutions Design and Review
                    </a>
                </div>
                <SectionBloc
                    section={"section2"}
                    title={"Collaborative Wiki Development: Security Frameworks"}
                    toggleSection={(section) => toggleSection(section)} 
                    sectionVisibility={sectionVisibility.section2}
                />
                <div style={{display: sectionVisibility.section2 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px' }} className='card card-block'>
                    <a  style={{color: '#11ABB0'}} href='https://docs.google.com/document/d/1ePUgF58PlIp3_51LI0yG70z9TMkAwCOgEZHJ0nqDZpo/edit?usp=sharing' target="_blank">
                    See more about - Collaborative Wiki Development: Security Frameworks
                    </a>
                </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Unit4;