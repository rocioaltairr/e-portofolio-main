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
            </Card>
        </div>
    );
}

export default Unit5;