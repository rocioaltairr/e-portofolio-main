import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import UnitHeader from '../Components/unit_header'; 
import SectionBloc from '../Components/section_bloc';

function Unit9({ cardNoteVisibility, toggleNoteCard }) {
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
                unit={"unit9"}
                    title={"Unit 9: Quality Management Strategy"}
                    toggleNoteCard={(unit) => toggleNoteCard(unit)} 
                    cardNoteVisibility={cardNoteVisibility}
            />
            <Card style={{ display: cardNoteVisibility ? 'none' : 'block' }}>
                <Card.Body>
                    <SectionBloc
                        section={"section1"}
                        title={"Formative activities: Improving Code Quality"}
                        toggleSection={(section) => toggleSection(section)} 
                        sectionVisibility={sectionVisibility.section1}
                    />
                    <div class="card card-block" style={{textAlign: 'left', display: sectionVisibility.section1 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px'}}>
                        <a  style={{color: '#11ABB0'}} href='https://docs.google.com/document/d/1TOOhiRP6WyqRLyvMoGrm1Fgqj6CXpMrG/edit?usp=sharing&ouid=101567821305826151050&rtpof=true&sd=true' target="_blank">
                        See more about - Formative activities: Improving Code Quality
                        </a>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Unit9;