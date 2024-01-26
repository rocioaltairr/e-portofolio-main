import React from 'react';
import Card from 'react-bootstrap/Card';
import UnitHeader from '../Components/unit_header'; 

function Unit5({ cardVisibility, cardNoteVisibility, toggleCard, toggleNoteCard }) {
    return (
        <div>
        <UnitHeader
            unit={"unit5"}
                title={"Unit 5: An Introduction to Testing"}
                toggleNoteCard={(unit) => toggleNoteCard(unit)} // Adjust the function signature
                cardNoteVisibility={cardNoteVisibility.unit5}
        />
        <Card style={{ display: cardNoteVisibility.unit5 ? 'none' : 'block' }}>
            <Card.Body  style={{textAlign : 'left' }}>
                <Card.Title><h3 style={{color:"white"}}></h3></Card.Title>
                <h3>Codio</h3>
                <h3>Testing with Python</h3>
                <h3>Exploring the Cyclomatic Complexity’s Relevance Today</h3>
                
                <Card.Text>
                
                </Card.Text>
            </Card.Body>
        </Card>
        </div>
    );
}

export default Unit5;