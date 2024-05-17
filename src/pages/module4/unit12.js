import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import UnitHeader from '../Components/unit_header'; 
import SectionBloc from '../Components/section_bloc';
import FinalReflection from '../Final Reflection of Secure Software Development module.pdf'


function Unit12({ cardNoteVisibility, toggleNoteCard }) {
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
            unit={"unit12"}
                title={"Unit 12: The Case for the Future Direction of Software Engineering Project Management"}
                toggleNoteCard={(unit) => toggleNoteCard(unit)} 
                cardNoteVisibility={cardNoteVisibility.unit12}
        />
        <Card style={{ display: cardNoteVisibility.unit12 ? 'none' : 'block' }}>
            <Card.Body style={{textAlign: 'left'}}>
            <SectionBloc
                section={"section1"}
                title={"Overview and reflection"}
                toggleSection={(section) => toggleSection(section)} 
                sectionVisibility={sectionVisibility.section1}
            />
            <div class="card card-block" style={{textAlign: 'left', display: sectionVisibility.section1 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px'}}>
            </div>
            </Card.Body>
        </Card>
        </div>
    );
}

export default Unit12;