import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import UnitHeader from '../Components/unit_header'; 
import SectionBloc from '../Components/section_bloc';

function Unit2({ cardNoteVisibility, toggleNoteCard }) {
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
            unit={"unit2"}
                title={"Unit 2: Threat Modelling Exercises"}
                toggleNoteCard={(unit) => toggleNoteCard(unit)} 
                cardNoteVisibility={cardNoteVisibility.unit2}
            />
            <Card style={{ display: cardNoteVisibility.unit2 ? 'none' : 'block' }}>
                <Card.Body style={{textAlign : 'left' }}>
                    <SectionBloc
                        section={"section1"}
                        title={"Unit 2 Threat Modeling Exercises"}
                        toggleSection={(section) => toggleSection(section)} 
                        sectionVisibility={sectionVisibility.section1}
                    />
                    <div class="card card-block" style={{textAlign: 'left', display: sectionVisibility.section1 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px'}}>
                    <a  style={{color: '#11ABB0'}} href='https://docs.google.com/document/d/1prwDQzolwnvjMcJhhW6bBoI2gCX8YAiD1NhKOii8yZQ/edit' target="_blank">
                        See more about Threat Modeling Exercises
                    </a>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Unit2;
