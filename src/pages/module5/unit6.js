import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import UnitHeader from '../Components/unit_header'; 
import SectionBloc from '../Components/section_bloc'; 

function Unit6({ cardVisibility, cardNoteVisibility, toggleCard, toggleNoteCard }) {
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
            unit={"unit6"}
                title={"Unit 6: The Great Debate - What Will be the Most Influential Trend in ISM in the Next 5 Years?"}
                toggleNoteCard={(unit) => toggleNoteCard(unit)} // Adjust the function signature
                cardNoteVisibility={cardNoteVisibility.unit6}
        />
        <Card style={{ display: cardNoteVisibility.unit6 ? 'none' : 'block' }}>
        <SectionBloc
                section={"section1"}
                title={"Executive Summary and App Presentation"}
                toggleSection={(section) => toggleSection(section)} 
                sectionVisibility={sectionVisibility.section1}
            />
            <div style={{display: sectionVisibility.section1 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px' }} className='card card-block'>
                <a  style={{color: '#11ABB0'}} href='https://docs.google.com/document/d/1BAU_YZKIhzwvqP7lhDvaabNUmOsItZ2Y51l6jXIwhgU/edit' target="_blank">
                See more about - Executive Summary and App Presentation
                </a>
            </div>
            <SectionBloc
                section={"section2"}
                title={"Individual Reflection"}
                toggleSection={(section) => toggleSection(section)} 
                sectionVisibility={sectionVisibility.section2}
            />
            <div style={{display: sectionVisibility.section2 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px' }} className='card card-block'>
                <a  style={{color: '#11ABB0'}} href='https://docs.google.com/document/d/10MrQU9UL1FTvUP3HncatXeHDcSyJxvstJBE9toXGrSQ/edit' target="_blank">
                See more about - Individual Reflection
                </a>
            </div>
        </Card>
        </div>
    );
}

export default Unit6;