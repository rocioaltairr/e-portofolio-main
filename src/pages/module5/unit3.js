import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import UnitHeader from '../Components/unit_header'; 
import SectionBloc from '../Components/section_bloc'; 

function Unit3({ cardNoteVisibility, toggleNoteCard }) {
    const [sectionVisibility, setSectionVisibility] = useState({
        section1: true,
        section2: true,
        section3: true
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
            unit={"unit3"}
                title={"Unit 3: Introduction to Threat Modelling and Management"}
                toggleNoteCard={(unit) => toggleNoteCard(unit)} 
                cardNoteVisibility={cardNoteVisibility.unit3}
            />
            <Card style={{ display: cardNoteVisibility.unit3 ? 'none' : 'block'}}>
                <Card.Body style={{textAlign : 'left' }}>
                <SectionBloc
                        section={"section1"}
                        title={"Overview and reflection"}
                        toggleSection={(section) => toggleSection(section)} 
                        sectionVisibility={sectionVisibility.section1}
                    />
                    <div style={{display: sectionVisibility.section1 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px' }} className='card card-block'>
                    </div>
                <SectionBloc
                    section={"section2"}
                    title={"Risk Identification Report"}
                    toggleSection={(section) => toggleSection(section)} 
                    sectionVisibility={sectionVisibility.section2}
                />
                <div style={{display: sectionVisibility.section2 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px' }} className='card card-block'>
                    <a  style={{color: '#11ABB0'}} href='https://docs.google.com/document/d/1nxvKT2R1rfV7uhlMCQRu-SyRV9l5ZvxnrI0iCF7VV5Y/edit?usp=sharing' target="_blank">
                    See more about - Risk Identification Report
                    </a>
                </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Unit3;