import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import UnitHeader from '../Components/unit_header'; 
import python1_q from './q_python1.png' 
import q_python2_1 from './q_python2_1.png' 
import python2_q from './q_python2.png' 
import SectionBloc from '../Components/section_bloc'; 
import Cyclomatic from './Cyclomatic Complexity’s.png' 

function Unit5({ cardNoteVisibility, toggleNoteCard }) {
    const [sectionVisibility, setSectionVisibility] = useState({
        section1: true
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
                title={"Unit 5: User Experience"}
                toggleNoteCard={(unit) => toggleNoteCard(unit)} 
                cardNoteVisibility={cardNoteVisibility.unit5}
        />
        <Card style={{ display: cardNoteVisibility.unit5 ? 'none' : 'block' }}>
            <Card.Body  style={{textAlign : 'left' }}>
                <SectionBloc
                    section={"section1"}
                    title={"Collaborative Discussion 2: Factors Affecting User Experience"}
                    toggleSection={(section) => toggleSection(section)} 
                    sectionVisibility={sectionVisibility.section1}
                />
                <div  style={{display: sectionVisibility.section1 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px' }} className='card card-block'>
                    <a  style={{color: '#11ABB0'}} href='https://docs.google.com/document/d/17PZowTXugbfBjtFAhZaak5SRPZWSFTt0/edit' target="_blank">
                    See more about Collaborative Discussion 2: Factors Affecting User Experience Initial Post
                    </a>
                </div>
            </Card.Body>
        </Card>
        </div>
    );
}

export default Unit5;