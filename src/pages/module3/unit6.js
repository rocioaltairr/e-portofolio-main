import React from 'react';
import Card from 'react-bootstrap/Card';
import UnitHeader from '../Components/unit_header'; 

function Unit6({ cardVisibility, cardNoteVisibility, toggleCard, toggleNoteCard }) {
    return (
        <div>
        <UnitHeader
            unit={"unit6"}
                title={"Unit 6: Using Linters to Support Python Testing"}
                toggleNoteCard={(unit) => toggleNoteCard(unit)} // Adjust the function signature
                cardNoteVisibility={cardNoteVisibility.unit6}
        />
        <Card style={{ display: cardNoteVisibility.unit6 ? 'none' : 'block' }}>
            <Card.Body  style={{textAlign : 'left' }}>
                <Card.Text style={{textAlign:'left'}}>
                Assessment<br/>
                Development Team Project: Design Document<br/> 
                Peer review: Design Document<br/>
                </Card.Text>
            </Card.Body>
        </Card>
        </div>
    );
}

export default Unit6;