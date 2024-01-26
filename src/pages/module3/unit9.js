import React from 'react';
import Card from 'react-bootstrap/Card';
import UnitHeader from '../Components/unit_header'; 

function Unit9({ cardNoteVisibility, toggleNoteCard }) {
    return (
        <div>
        <UnitHeader
            unit={"unit9"}
                title={"Unit 9: Developing an API for a Distributed Environment"}
                toggleNoteCard={(unit) => toggleNoteCard(unit)} 
                cardNoteVisibility={cardNoteVisibility}
        />
        <Card style={{ display: cardNoteVisibility ? 'none' : 'block' }}>
            <Card.Body>
                <Card.Text style={{textAlign:'left'}}>
                </Card.Text>
            </Card.Body>
        </Card>
        </div>
    );
}

export default Unit9;