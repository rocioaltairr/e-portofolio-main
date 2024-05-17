import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import UnitHeader from '../Components/unit_header'; 
import SectionBloc from '../Components/section_bloc'; 

function Unit3({ cardNoteVisibility, toggleNoteCard }) {
    const [sectionVisibility, setSectionVisibility] = useState({
        section1: true,
        section2: true,
        section3: true,
        section4: true,
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
                    title={"Overview and reflection"}
                    toggleSection={(section) => toggleSection(section)} 
                    sectionVisibility={sectionVisibility.section1}
                />
                <div style={{display: sectionVisibility.section1 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px' }} className='card card-block'>

                </div>
            <SectionBloc
                section={"section2"}
                title={"Formative activities"}
                toggleSection={(section) => toggleSection(section)} 
                sectionVisibility={sectionVisibility.section2}
            />
            <div style={{display: sectionVisibility.section2 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px' }} className='card card-block'>ç
            <iframe
                src="https://docs.google.com/document/d/1p0qTkxI-N3nDKbTkbsMMpM7-q2LVHgcJZ7ukwrQiTMU/edit#heading=h.lkj032cl6i9l"
                frameBorder="0"
                scrolling="auto"
                height="1000px"
                width="100%"
            ></iframe>
            </div>
            <SectionBloc
                section={"section3"}
                title={"e-Portfolio Activity: Data Structures Reflection"}
                toggleSection={(section) => toggleSection(section)} 
                sectionVisibility={sectionVisibility.section3}
            />
            <div style={{display: sectionVisibility.section3 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px' }} className='card card-block'>ç
            <iframe
                src="https://docs.google.com/document/d/1sRi_Ya8WaoCYmVLfR0dFMub6SrlxvJ8eyiCA2C6H5Kg/edit"
                frameBorder="0"
                scrolling="auto"
                height="1000px"
                width="100%"
            ></iframe>
            </div>
            </Card.Body>
        </Card>
        </div>
    );
}

export default Unit3;