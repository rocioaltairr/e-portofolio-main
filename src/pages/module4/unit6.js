import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import UnitHeader from '../Components/unit_header'; 
import SectionBloc from '../Components/section_bloc'; 
import PeerReview from '../peer_review.pdf'

function Unit6({ cardVisibility, cardNoteVisibility, toggleCard, toggleNoteCard }) {
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
            unit={"unit6"}
                title={"Unit 6: pytest and Test-Driven Development"}
                toggleNoteCard={(unit) => toggleNoteCard(unit)} // Adjust the function signature
                cardNoteVisibility={cardNoteVisibility.unit6}
        />
        <Card style={{ display: cardNoteVisibility.unit6 ? 'none' : 'block' }}>
            <Card.Body  style={{textAlign : 'left' }}>
                <Card.Text style={{textAlign:'left'}}>
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
                        title={"Activity: Jupyter Notebook Activity - pytest"}
                        toggleSection={(section) => toggleSection(section)} 
                        sectionVisibility={sectionVisibility.section2}
                    />
                    <div style={{display: sectionVisibility.section2 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px' }} className='card card-block'>
                    </div>
                </Card.Text>
            </Card.Body>
        </Card>
        </div>
    );
}

export default Unit6;