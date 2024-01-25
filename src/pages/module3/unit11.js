import React from 'react';
import Card from 'react-bootstrap/Card';
import UnitHeader from '../Components/header'; 

function Unit11({ cardVisibility, cardNoteVisibility, toggleCard, toggleNoteCard }) {
    return (
        <div>
        <UnitHeader
            unit={"unit11"}
                title={"Unit 11: Future trends in Secure Software Development"}
                toggleNoteCard={(unit) => toggleNoteCard(unit)} 
                cardNoteVisibility={cardNoteVisibility.unit11}
        />
        <Card style={{ display: cardNoteVisibility.unit11 ? 'none' : 'block' }}>
            <Card.Body style={{textAlign: 'left'}}>
                <Card.Title><h3 style={{color:"white"}}></h3></Card.Title>
                <h4 style={{color: '#1abc9c'}}>Team Activity - Debate: Microservices and Microkernels</h4>
                <h4 style={{color: '#1abc9c'}}>Assessment - Development Individual Project: Coding Output and Evidence of Testing</h4>
                <Card.Text>
                </Card.Text>
            </Card.Body>
        </Card>
        </div>
    );
}

export default Unit11;