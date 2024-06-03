import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import UnitHeader from '../Components/unit_header'; 
import SectionBloc from '../Components/section_bloc'; 

function Unit8({ cardNoteVisibility, toggleNoteCard }) {
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
                unit={"unit8"}
                    title={"Unit 8: Python Data Structures"}
                    toggleNoteCard={(unit) => toggleNoteCard(unit)} 
                    cardNoteVisibility={cardNoteVisibility.unit8}
            />
            <Card style={{ display: cardNoteVisibility.unit8 ? 'none' : 'block' }}>
                <Card.Body  style={{textAlign : 'left' }}>
                    <SectionBloc
                        section={"section1"}
                        title={"Unit 8 Seminar Preparation"}
                        toggleSection={(section) => toggleSection(section)} 
                        sectionVisibility={sectionVisibility.section1}
                    />
                    <div  style={{display: sectionVisibility.section1 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px' }} className='card card-block'>
                    In selecting data structures for organizing functional and non-functional requirements, Python lists and dictionaries are chosen. Lists maintain the order of requirements, while dictionaries categorize them efficiently. This choice is supported by the need for flexible, efficient data handling, as discussed in academic papers by Heck (2024) and Abeykoon and Fox (2023). These sources underscore the importance of high-performance data engineering, aligning with the requirements of managing project requirements effectively.<br/>
                        <a  style={{color: '#11ABB0'}} href='https://docs.google.com/document/d/1j11hp2NwToIyu07B51CVjbkyStmmnHqQ-3RcgBIqiqU/edit?usp=sharing' target="_blank">
                            See more about - Unit 8 Seminar - Data Structures
                        </a>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Unit8;