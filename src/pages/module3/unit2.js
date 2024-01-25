import React from 'react';
import Card from 'react-bootstrap/Card';
import UnitHeader from '../Components/header'; 

function Unit2({ cardVisibility, cardNoteVisibility, toggleCard, toggleNoteCard }) {
    return (
        <div>
        <UnitHeader
                unit={"unit2"}
                title={"Unit 2: UML Modelling to Support Secure System Planning"}
                toggleNoteCard={(unit) => toggleNoteCard(unit)} // Adjust the function signature
                cardNoteVisibility={cardNoteVisibility.unit2}
            />
        <Card style={{ display: cardNoteVisibility.unit2 ? 'none' : 'block' }}>
            <Card.Body>
                {/* <Card.Title><h3 style={{color:"white"}}></h3></Card.Title> */}
                <Card.Text style={{textAlign:'left'}}>
                </Card.Text>
            </Card.Body>
        </Card>
        </div>
    );
}

export default Unit2;
