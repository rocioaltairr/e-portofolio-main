import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import UnitHeader from '../Components/unit_header'; 
import SectionBloc from '../Components/section_bloc'; 

function Unit5({ cardNoteVisibility, toggleNoteCard }) {
    const [sectionVisibility, setSectionVisibility] = useState({
        section1: true,
        section2: true
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
                unit={"unit5"}
                    title={"Unit 5: Interviews, Survey Methods, and Questionnaire Design"}
                    toggleNoteCard={(unit) => toggleNoteCard(unit)} 
                    cardNoteVisibility={cardNoteVisibility.unit5}
            />
            <Card style={{ display: cardNoteVisibility.unit5 ? 'none' : 'block' }}>
                <SectionBloc
                    section={"section1"}
                    title={"Reflective Activity 2"}
                    toggleSection={(section) => toggleSection(section)} 
                    sectionVisibility={sectionVisibility.section1}
                />
                <div style={{display: sectionVisibility.section1 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px' }} className='card card-block'>
                    <a  style={{color: '#11ABB0'}} href='https://docs.google.com/document/d/1wp3benPJn3OiY-UDhcxImYeDydR7xv0SmbG77Eg8z8w/edit?usp=sharing' target="_blank">
                        See more about - Reflective Activity 2
                    </a>
                </div>
                <SectionBloc
                    section={"section2"}
                    title={"Wiki Activity: Questionnaires"}
                    toggleSection={(section) => toggleSection(section)} 
                    sectionVisibility={sectionVisibility.section2}
                />
                <div style={{display: sectionVisibility.section2 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px' }} className='card card-block'>
                    <a  style={{color: '#11ABB0'}} href='https://docs.google.com/document/d/1v1YldhtLzi2NuZkId7x6GCPrEya02pb9Mfzr_sJltaI/edit?usp=sharing' target="_blank">
                        See more about - Wiki Activity: Questionnaires
                    </a>
                </div>
            </Card>
        </div>
    );
}

export default Unit5;