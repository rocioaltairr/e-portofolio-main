import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import UnitHeader from '../Components/unit_header'; 
import SectionBloc from '../Components/section_bloc'; 

function Unit10({ cardVisibility, cardNoteVisibility, toggleCard, toggleNoteCard }) {
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
                unit={"unit10"}
                    title={"Unit 10: Research Writing"}
                    toggleNoteCard={(unit) => toggleNoteCard(unit)} 
                    cardNoteVisibility={cardNoteVisibility.unit10}
            />
            <Card style={{ display: cardNoteVisibility.unit10 ? 'none' : 'block' }}>
                <Card.Body>
                    <SectionBloc
                        section={"section1"}
                        title={"Statistical Worksheet Submissions"}
                        toggleSection={(section) => toggleSection(section)} 
                        sectionVisibility={sectionVisibility.section1}
                    />
                    <div style={{display: sectionVisibility.section1 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px' }} className='card card-block'>
                        <a  style={{color: '#11ABB0'}} href='https://docs.google.com/document/d/1SuURYrF_yGhRoCdimj4icJPw2u5GdwJMixPzkVKWsJI/edit?usp=sharing' target="_blank">
                        See more about - Statistical Worksheet Submissions
                        </a>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Unit10;