import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import UnitHeader from '../Components/unit_header'; 
import SectionBloc from '../Components/section_bloc';

function Unit11({ cardVisibility, cardNoteVisibility, toggleCard, toggleNoteCard }) {
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
            unit={"unit11"}
                title={"Unit 11: Future trends in Secure Software Development"}
                toggleNoteCard={(unit) => toggleNoteCard(unit)} 
                cardNoteVisibility={cardNoteVisibility.unit11}
        />
        <Card style={{ display: cardNoteVisibility.unit11 ? 'none' : 'block' }}>
            <Card.Body style={{textAlign: 'left'}}>
                <SectionBloc
                    section={"section1"}
                    title={"Overview and reflection"}
                    toggleSection={(section) => toggleSection(section)} 
                    sectionVisibility={sectionVisibility.section1}
                />
                <div class="card card-block" style={{textAlign: 'left', display: sectionVisibility.section1 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px'}}>
                * Discuss future trends in the areas of secure design, development, programming languages and operating systems.<br/>
                * Explain what is meant by Fog Computing, the Internet of Things and Cyber Physical Systems.<br/>
                * Explore systems and solutions that can be investigated as possible research topics or fields.<br/>

                </div>
            </Card.Body>
        </Card>
        </div>
    );
}

export default Unit11;