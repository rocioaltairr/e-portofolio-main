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
        </Card>
        </div>
    );
}

export default Unit6;