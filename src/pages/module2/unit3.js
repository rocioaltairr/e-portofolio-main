import React from 'react';
import Card from 'react-bootstrap/Card';

function Unit3({ cardVisibility, cardNoteVisibility, toggleCard, toggleNoteCard }) {
    return (
        <div>
        <div className="d-flex  justify-content-between align-items-center">
            <h3 style={{ color: 'white' }}>Unit 3: UML</h3>
            <div>
                <button style={{ marginRight: 16 }} className="btn btn-primary ml-2" onClick={() => toggleNoteCard('unit3')}>{cardNoteVisibility.unit3 ? 'Show Note' : 'Close Note'}</button>
                <button className="btn btn-primary ml-2" onClick={() => toggleCard('unit3')}>{cardVisibility.unit3 ? 'Show' : 'Close'}</button>
            </div>
        </div>
        <Card style={{ display: cardNoteVisibility.unit3 ? 'none' : 'block' }}>
            <Card.Body>
                {/* <Card.Title><h3 style={{color:"white"}}></h3></Card.Title> */}
                <Card.Text style={{textAlign:'left'}}>
                Collaborative Discussion 1: Factors which influence reusability and e-Portfolio activities which cover the following learning outcomes:<br/>
                1.              Appraise and critically evaluate object-oriented programming compared to other programming paradigms.<br/>
                2.              Design and implement programs that demonstrate appropriate use of object-oriented design principles.<br/>
                3.              Propose object-oriented solutions using an appropriate modelling language, such as UML.<br/>
                </Card.Text>
            </Card.Body>
        </Card>
        <Card style={{ display: cardVisibility.unit3 ? 'none' : 'block' }}>
            <Card.Body>
                {/* <Card.Title><h3 style={{color:"white"}}></h3></Card.Title> */}
                <Card.Text style={{textAlign:'left'}}>
                Discuss which UML models are most applicable at different stages of the Software Development Life Cycle.<br/>
                Making reference to ‘The Unified Modeling Language Reference Manual Second Edition’, use the State Machine Diagram in Figure 3-7 to design a similar model for a washing machine.<br/>
                </Card.Text>
            </Card.Body>
        </Card>
        </div>
    );
}

export default Unit3;