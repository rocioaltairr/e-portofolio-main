import React from 'react';
import Card from 'react-bootstrap/Card';
import img1 from '../desing_pattern.png';

function Unit11({ cardVisibility, cardNoteVisibility, toggleCard, toggleNoteCard }) {
    return (
        <div>
        <div className="d-flex  justify-content-between align-items-center">
            <h3 style={{ color: 'white' }}>Unit11: Pointers, References & Memory, and Design Patterns</h3>
            <div>
                <button style={{ marginRight: 16 }} className="btn btn-primary ml-2" onClick={() => toggleNoteCard('unit11')}>{cardNoteVisibility.unit11 ? 'Show Note' : 'Close Note'}</button>
                <button className="btn btn-primary ml-2" onClick={() => toggleCard('unit11')}>{cardVisibility.unit11 ? 'Show' : 'Close'}</button>
            </div>
        </div>
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
        <Card style={{ display: cardVisibility.unit11 ? 'none' : 'block' }}>
            <Card.Body>
                <Card.Title><h3 style={{color:"white"}}></h3></Card.Title>
                <Card.Subtitle className="mb-2 text-muted"><p style={{color:"white", fontSize:"14px"}}>Design patterns belong to one of three categories:</p></Card.Subtitle>
                <Card.Text>
                Title: Design Patterns in a Python Program<br/>
                Define the test cases for the following system development: Oracle. (n.d.) <a href='https://www.oracle.com/uk/hospitality/cruise/'>Cruise Ship Management and Cruise Software.</a><br/>

                Which design patterns do you consider to be compatible with others, and why?<br/>

                Read Zhang & Budgen (2012). Which design patterns are used most commonly, and why?<br/>
                </Card.Text>
            </Card.Body>
        </Card>
        </div>
    );
}

export default Unit11;