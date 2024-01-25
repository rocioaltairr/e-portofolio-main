import React from 'react';
import Card from 'react-bootstrap/Card';
import UnitHeader from '../Components/header'; 

function Unit10({ cardVisibility, cardNoteVisibility, toggleCard, toggleNoteCard }) {
    return (
        <div>
        <UnitHeader
            unit={"unit10"}
                title={"Unit 10: From Distributed Computing to Microarchitectures"}
                toggleNoteCard={(unit) => toggleNoteCard(unit)} 
                cardNoteVisibility={cardNoteVisibility.unit10}
        />
        <Card style={{ display: cardNoteVisibility.unit10 ? 'none' : 'block' }}>
            <Card.Body>
                <h4>Faceted Data</h4>
                <p>
                    Read Schmitz et al (2016) article about faceted data.
                    Do you think this is a good approach to protect systems from data leakage? What are the pros and cons?
                    Create a basic outline design of how you would create such a system in Python. 
                    Add your answers to your e-portfolio.
                </p>
                <Card.Text style={{textAlign:'left'}}>
                </Card.Text>
            </Card.Body>
        </Card>
        </div>
    );
}

export default Unit10;