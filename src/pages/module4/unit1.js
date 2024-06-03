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
                title={"Unit 1: Introduction to Software Engineering Project Management"}
                toggleNoteCard={(unit) => toggleNoteCard(unit)} 
                cardNoteVisibility={cardNoteVisibility.unit1}
            />
            <Card style={{ display: cardNoteVisibility.unit1 ? 'none' : 'block' }}>
                <Card.Body style={{textAlign : 'left' }}>
                    <SectionBloc
                        section={"section1"}
                        title={"Collaborative Discussion 1: Project Failures Study"}
                        toggleSection={(section) => toggleSection(section)} 
                        sectionVisibility={sectionVisibility.section1}
                    />
                    <div class="card card-block" style={{textAlign: 'left', display: sectionVisibility.section1 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px'}}>
                    Covering units 1 to 3, I have gained a better understanding of references through the feedback provided. By responding to peers and reviewing others' responses and posts, I now have a better understanding of project management failures.<br/>
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
