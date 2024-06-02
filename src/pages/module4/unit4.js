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
                title={"Unit 4: Estimating Tools and Risk Assessment"}
                toggleNoteCard={(unit) => toggleNoteCard(unit)} // Adjust the function signature
                cardNoteVisibility={cardNoteVisibility.unit4}
        />

        <Card style={{ display: cardNoteVisibility.unit4 ? 'none' : 'block' }}>
            <Card.Body  style={{textAlign : 'left' }}>
                <SectionBloc
                    section={"section1"}
                    title={"Wiki Entry: Risks and Risk Mitigation"}
                    toggleSection={(section) => toggleSection(section)} 
                    sectionVisibility={sectionVisibility.section1}
                />
                <div class="card card-block" style={{textAlign: 'left', display: sectionVisibility.section1 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px'}}>
                    <a  style={{color: '#11ABB0'}} href='https://docs.google.com/document/d/1uNSomsLn9Bmwzb5gv6mBHtivVvIVLiF-/edit?usp=sharing&ouid=101567821305826151050&rtpof=true&sd=true' target="_blank">
                    See more about - Risks and risk mitigation
                    </a>
                </div>
                <SectionBloc
                    section={"section2"}
                    title={"Unit 4 Seminar Preparation"}
                    toggleSection={(section) => toggleSection(section)} 
                    sectionVisibility={sectionVisibility.section2}
                />
                <div class="card card-block" style={{textAlign: 'left', display: sectionVisibility.section2 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px'}}>
                    <a  style={{color: '#11ABB0'}} href='https://docs.google.com/document/d/1m7eL4vOUmKyj66cYQRvDYb3DjleY2fwqAMTul-Rw5zc/edit?usp=sharing' target="_blank">
                    See more about - Unit 4 Seminar - Estimating Tools and Risk Assessment - Activity 2
                    </a>
                </div>
            </Card.Body>
        </Card>
        </div>
    );
}

export default Unit4;