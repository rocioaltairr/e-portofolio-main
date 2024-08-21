import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import UnitHeader from '../Components/unit_header'; 
import SectionBloc from '../Components/section_bloc'; 

function Unit3({ cardNoteVisibility, toggleNoteCard }) {
    const [sectionVisibility, setSectionVisibility] = useState({
        section1: true
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
                title={"Unit 3: Methodology and Research Methods"}
                toggleNoteCard={(unit) => toggleNoteCard(unit)} 
                cardNoteVisibility={cardNoteVisibility.unit3}
            />
            <Card style={{ display: cardNoteVisibility.unit3 ? 'none' : 'block'}}>
                <Card.Body style={{textAlign : 'left' }}>
                <SectionBloc
                    section={"section1"}
                    title={"Research Proposal Review"}
                    toggleSection={(section) => toggleSection(section)} 
                    sectionVisibility={sectionVisibility.section1}
                />
                <div style={{display: sectionVisibility.section1 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px' }} className='card card-block'>
                    <a  style={{color: '#11ABB0'}} href='https://docs.google.com/document/d/15Bo9exvTvMFC3k2eFamuIhCa0qt66cSR07qpbw78Mdo/edit?usp=sharing' target="_blank">
                    See more about - Research Proposal Review
                    </a>
                </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Unit3;