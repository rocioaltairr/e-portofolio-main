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
                    title={"Unit 5: Future Trends in Security and Risk Management"}
                    toggleNoteCard={(unit) => toggleNoteCard(unit)} 
                    cardNoteVisibility={cardNoteVisibility.unit5}
            />
            <Card style={{ display: cardNoteVisibility.unit5 ? 'none' : 'block' }}>
            <SectionBloc
                    section={"section1"}
                    title={"Collaborative Wiki Development: The Future of ISM"}
                    toggleSection={(section) => toggleSection(section)} 
                    sectionVisibility={sectionVisibility.section1}
                />
                <div style={{display: sectionVisibility.section1 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px' }} className='card card-block'>
                    <a  style={{color: '#11ABB0'}} href='https://docs.google.com/document/d/1_MNsBfwiIP_esB7E2b0oSNIv_aAu9-mSxyAXoJr5Cy0/edit?usp=sharing' target="_blank">
                    See more about - Collaborative Wiki Development: The Future of ISM
                    </a>
                </div>
            </Card>
        </div>
    );
}

export default Unit5;