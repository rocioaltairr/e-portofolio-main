import React from 'react';
import Card from 'react-bootstrap/Card';
import img1 from '../desing_pattern.png';
import UnitHeaderTwo from '../Components/unit_header_two';

function Unit11({ cardVisibility, cardNoteVisibility, toggleCard, toggleNoteCard }) {
    return (
        <div>
            <UnitHeaderTwo
                unit={"unit11"}
                title={"Unit11: Pointers, References & Memory, and Design Patterns"}
                toggleNoteCard={(unit) => toggleNoteCard(unit)}
                toggleCard ={(unit) => toggleCard(unit)}
                cardNoteVisibility={cardNoteVisibility.unit11}
                cardVisibility={cardVisibility.unit11}
            />
            <Card style={{ display: cardNoteVisibility.unit11 ? 'none' : 'block' }}>
                <Card.Body>
                    <Card.Title><h3 style={{color:"white"}}></h3></Card.Title>
                    <Card.Subtitle className="mb-2 text-muted"><p style={{color:"white", fontSize:"14px"}}>Design patterns belong to one of three categories:</p></Card.Subtitle>
                    <Card.Text>
                        Creational: Support the creation of objects<br/>
                        Structural: Support relationships between entities<br/>
                        Behavioral: Support communications between objects<br/>
                    </Card.Text>
                    <Card.Img variant="top" src={img1} />
                </Card.Body>
            </Card>
        </div>
    );
}

export default Unit11;