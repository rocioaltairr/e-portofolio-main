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
                title={"Unit 2: Study: Why Projects Fail and Gathering Requirements Exercise"}
                toggleNoteCard={(unit) => toggleNoteCard(unit)} 
                cardNoteVisibility={cardNoteVisibility.unit2}
            />
            <Card style={{ display: cardNoteVisibility.unit2 ? 'none' : 'block' }}>
                <Card.Body style={{textAlign : 'left' }}>
                    <SectionBloc
                        section={"section1"}
                        title={"Unit 2 Seminar Preparation"}
                        toggleSection={(section) => toggleSection(section)} 
                        sectionVisibility={sectionVisibility.section1}
                    />
                    <div class="card card-block" style={{textAlign: 'left', display: sectionVisibility.section1 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px'}}>
                    I learned about the common reasons for project failures and how to mitigate them. Additionally, I practiced requirements gathering using the Gherkin language, creating detailed scenarios for different roles. The collaborative discussions enhanced my understanding through peer feedback and shared insights.<br/>
                    <a  style={{color: '#11ABB0'}} href='https://docs.google.com/document/d/1TbeLDXtYIxPrTTfYLR3H4purTUp-SBTDdxAGhzlih70/edit?usp=sharing' target="_blank">
                        See more about UNIT 2: Seminar Preparation
                    </a>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Unit2;
