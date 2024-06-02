import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import UnitHeader from '../Components/unit_header'; 
import SectionBloc from '../Components/section_bloc';

function Unit1({ cardNoteVisibility, toggleNoteCard }) {
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
            unit={"unit1"}
                title={"Unit 1: Introduction to Software Engineering Project Management"}
                toggleNoteCard={(unit) => toggleNoteCard(unit)} 
                cardNoteVisibility={cardNoteVisibility.unit1}
            />
            <Card style={{ display: cardNoteVisibility.unit1 ? 'none' : 'block' }}>
                <Card.Body style={{textAlign : 'left' }}>
                    <SectionBloc
                        section={"section1"}
                        title={"Unit 1 Seminar Preparation"}
                        toggleSection={(section) => toggleSection(section)} 
                        sectionVisibility={sectionVisibility.section1}
                    />
                    <div class="card card-block" style={{textAlign: 'left', display: sectionVisibility.section1 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px'}}>

                    </div>
                    <SectionBloc
                        section={"section2"}
                        title={"Collaborative Discussion 1: Project Failures Study"}
                        toggleSection={(section) => toggleSection(section)} 
                        sectionVisibility={sectionVisibility.section2}
                    />
                    <div class="card card-block" style={{textAlign: 'left', display: sectionVisibility.section2 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px'}}>
                        This is cover through unit1 to unit3 through the feedback I had better understanding on references<br/>
                        Upon responding the peer and reviewing others response and post have better understanding of failure on project management<br/>
                    <a  style={{color: '#11ABB0'}} href='https://docs.google.com/document/d/1kElEg4DxU66NZIZR2qedn0rdmZH1OINgyrEMCAtcn2E/edit#heading=h.usvx2bxt7x5f' target="_blank">
                        See more about Collaborative Discussion 1: Initial Post Project Failures Study
                    </a>
                    </div>

                </Card.Body>
            </Card>
        </div>
    );
}

export default Unit1;
