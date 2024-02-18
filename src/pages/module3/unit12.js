import React from 'react';
import Card from 'react-bootstrap/Card';
import UnitHeader from '../Components/unit_header'; 

function Unit12({ cardNoteVisibility, toggleNoteCard }) {
    return (
        <div>
        <UnitHeader
            unit={"unit12"}
                title={"Unit 12: The Great Tanenbaum-Torvalds Debate Revisited"}
                toggleNoteCard={(unit) => toggleNoteCard(unit)} 
                cardNoteVisibility={cardNoteVisibility.unit12}
        />
        <Card style={{ display: cardNoteVisibility.unit12 ? 'none' : 'block' }}>
            <Card.Body style={{textAlign: 'left'}}>
                <Card.Title><h3 style={{color:"white"}}></h3></Card.Title>
                <h4 style={{color: '#1abc9c'}}>Team Activity - Debate: Microservices and Microkernels</h4>
                <h4 style={{color: '#1abc9c'}}>After dicussion within our team our stance is that </h4>
                <Card.Text>
                </Card.Text>
            </Card.Body>
        </Card>
        </div>
    );
}

export default Unit12;