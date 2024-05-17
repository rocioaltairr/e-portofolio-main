import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import UnitHeader from '../Components/unit_header'; 
import SectionBloc from '../Components/section_bloc';

function Unit9({ cardNoteVisibility, toggleNoteCard }) {
    const [sectionVisibility, setSectionVisibility] = useState({
        section1: true,
        section2: true,
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
                    title={"Overview and reflection"}
                    toggleSection={(section) => toggleSection(section)} 
                    sectionVisibility={sectionVisibility.section1}
                />
                <div class="card card-block" style={{textAlign: 'left', display: sectionVisibility.section1 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px'}}>
                </div>
                <SectionBloc
                    section={"section2"}
                    title={"Formative activities: Improving Code Quality"}
                    toggleSection={(section) => toggleSection(section)} 
                    sectionVisibility={sectionVisibility.section2}
                />
                <div class="card card-block" style={{textAlign: 'left', display: sectionVisibility.section2 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px'}}>
                    <iframe
                        src="https://docs.google.com/document/d/1TOOhiRP6WyqRLyvMoGrm1Fgqj6CXpMrG/edit?usp=sharing&ouid=101567821305826151050&rtpof=true&sd=true"
                        frameBorder="0"
                        scrolling="auto"
                        height="500px"
                        width="100%"
                    ></iframe>
                </div>
            </Card.Body>
        </Card>
        </div>
    );
}

export default Unit9;