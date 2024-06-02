import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import UnitHeader from '../Components/unit_header'; 
import SectionBloc from '../Components/section_bloc'; 

function Unit3({ cardNoteVisibility, toggleNoteCard }) {
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
        unit={"unit3"}
            title={"Unit 3: Estimating, Planning and Risk"}
            toggleNoteCard={(unit) => toggleNoteCard(unit)} 
            cardNoteVisibility={cardNoteVisibility.unit3}
        />
            
        <Card style={{ display: cardNoteVisibility.unit3 ? 'none' : 'block'}}>
            <Card.Body style={{textAlign : 'left' }}>
            <SectionBloc
                section={"section1"}
                title={"Formative activities"}
                toggleSection={(section) => toggleSection(section)} 
                sectionVisibility={sectionVisibility.section1}
            />
            <div style={{display: sectionVisibility.section1 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px' }} className='card card-block'>
                 <a  style={{color: '#11ABB0'}} href='https://docs.google.com/document/d/1p0qTkxI-N3nDKbTkbsMMpM7-q2LVHgcJZ7ukwrQiTMU/edit#heading=h.lkj032cl6i9l' target="_blank">
                 See more about Collaborative Discussion 1: Summary Post Project Failures Study
                </a>
            </div>
            <SectionBloc
                section={"section2"}
                title={"e-Portfolio Activity: Data Structures Reflection"}
                toggleSection={(section) => toggleSection(section)} 
                sectionVisibility={sectionVisibility.section2}
            />
            <div style={{display: sectionVisibility.section2 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px' }} className='card card-block'>
                <a  style={{color: '#11ABB0'}} href='https://docs.google.com/document/d/1sRi_Ya8WaoCYmVLfR0dFMub6SrlxvJ8eyiCA2C6H5Kg/edit' target="_blank">
                See more about - Data Structures Reflection
                </a>
            </div>
            </Card.Body>
        </Card>
        </div>
    );
}

export default Unit3;