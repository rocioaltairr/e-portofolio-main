import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import UnitHeader from '../Components/unit_header'; 
import SectionBloc from '../Components/section_bloc';

function Unit1({ cardNoteVisibility, toggleNoteCard }) {
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
            unit={"unit1"}
                title={"Unit 1: Introduction to Research Methods. The Scientific Investigation and Ethics in Computing"}
                toggleNoteCard={(unit) => toggleNoteCard(unit)} 
                cardNoteVisibility={cardNoteVisibility.unit1}
            />
            <Card style={{ display: cardNoteVisibility.unit1 ? 'none' : 'block' }}>
                <Card.Body style={{textAlign : 'left' }}>
                    <SectionBloc
                        section={"section1"}
                        title={"Reflective Activity 1 – Ethics in Computing in the age of Generative AI"}
                        toggleSection={(section) => toggleSection(section)} 
                        sectionVisibility={sectionVisibility.section1}
                    />
                    <div class="card card-block" style={{textAlign: 'left', display: sectionVisibility.section1 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px'}}>
                    <a  style={{color: '#11ABB0'}} href='https://docs.google.com/document/d/1YxgfPd3H-B8I4en1SRpVM3DVXHYMWj_bVbRGzd_0WZE/edit?usp=sharing' target="_blank">
                        See more about Reflective Activity 1 – Ethics in Computing in the age of Generative AI
                    </a>
                    </div>
                    <SectionBloc
                        section={"section2"}
                        title={"Collaborative Learning Discussion 1: Codes of Ethics and Professional Conduct"}
                        toggleSection={(section) => toggleSection(section)} 
                        sectionVisibility={sectionVisibility.section2}
                    />
                    <div class="card card-block" style={{textAlign: 'left', display: sectionVisibility.section2 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px'}}>
                    <a  style={{color: '#11ABB0'}} href='https://docs.google.com/document/d/1hOIKmMRJxM5J5_hTuLjc0cZHEqVmEVG6XwRXCwgYbrE/edit?usp=sharing' target="_blank">
                        See more about Collaborative Learning Discussion 1: Codes of Ethics and Professional Conduct
                    </a>
                    </div>
                    <SectionBloc
                        section={"section3"}
                        title={"Learning and reflection"}
                        toggleSection={(section) => toggleSection(section)} 
                        sectionVisibility={sectionVisibility.section3}
                    />
                    <div class="card card-block" style={{textAlign: 'left', display: sectionVisibility.section3 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px'}}>
                    In my studies, I learned that deductive reasoning leads to certain conclusions based on general principles, while inductive reasoning involves generalizing from specific observations, which can sometimes be less reliable.
                        Understanding these approaches will help me in my "Research Methods and Professional Practice" module. Deductive reasoning ensures logical certainty for testing theories, while inductive reasoning aids in generating new insights, though it may have some limitations.
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Unit1;
