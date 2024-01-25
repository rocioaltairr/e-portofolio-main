import React from 'react';
import Card from 'react-bootstrap/Card';
import UnitHeader from '../Components/header'; 

function Unit9({ cardNoteVisibility, toggleNoteCard }) {
    return (
        <div>
        <UnitHeader
            unit={"unit9"}
                title={"Unit 9: Developing an API for a Distributed Environment"}
                toggleNoteCard={(unit) => toggleNoteCard(unit)} 
                cardNoteVisibility={cardNoteVisibility.uni9}
        />
        <Card style={{ display: cardNoteVisibility.unit9 ? 'none' : 'block' }}>
            <Card.Body>
                <Card.Text style={{textAlign:'left'}}>
                </Card.Text>
            </Card.Body>
        </Card>
        </div>
    );
}

export default Unit9;