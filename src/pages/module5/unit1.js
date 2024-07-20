import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import UnitHeader from '../Components/unit_header'; 
import SectionBloc from '../Components/section_bloc';

function Unit1({ cardNoteVisibility, toggleNoteCard }) {
    const [sectionVisibility, setSectionVisibility] = useState({
        section1: true,
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
            unit={"unit1"}
                title={"Unit 1: An Introduction to Security and Risk Management"}
                toggleNoteCard={(unit) => toggleNoteCard(unit)} 
                cardNoteVisibility={cardNoteVisibility.unit1}
            />
            <Card style={{ display: cardNoteVisibility.unit1 ? 'none' : 'block' }}>
                <Card.Body style={{textAlign : 'left' }}>
                    <SectionBloc
                        section={"section1"}
                        title={"Collaborative Discussion 1: The Risks of Digitalisation"}
                        toggleSection={(section) => toggleSection(section)} 
                        sectionVisibility={sectionVisibility.section1}
                    />
                    <div class="card card-block" style={{textAlign: 'left', display: sectionVisibility.section1 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px'}}>
                    <a  style={{color: '#11ABB0'}} href='https://docs.google.com/document/d/1GK5x9T3tXLNRyg3Wutqxpe1Pg14OESrc8T8xMbHY5Bc/edit?usp=sharing' target="_blank">
                        See more about Collaborative Discussion 1: The Risks of Digitalisation
                    </a>
                    </div>

                </Card.Body>
            </Card>
        </div>
    );
}

export default Unit1;
