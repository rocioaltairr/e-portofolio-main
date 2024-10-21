import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import UnitHeader from '../Components/unit_header'; 
import SectionBloc from '../Components/section_bloc';

function Unit11({ cardNoteVisibility, toggleNoteCard }) {
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
                unit={"unit11"}
                    title={"Unit 11: Going Forward: Professional Development and Your e-Portfolio"}
                    toggleNoteCard={(unit) => toggleNoteCard(unit)} 
                    cardNoteVisibility={cardNoteVisibility.unit11}
            />
            <Card style={{ display: cardNoteVisibility.unit11 ? 'none' : 'block' }}>
                <Card.Body style={{textAlign: 'left'}}>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Unit11;