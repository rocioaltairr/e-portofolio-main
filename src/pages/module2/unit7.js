import React from 'react';
import Card from 'react-bootstrap/Card';
import SystemDesign from '../system_design.pdf'
import use_case_uml from '../images/module2/Use Case Diagram.png';
import activity_uml from '../images/module2/Activity Diagram.png';
import class_uml from '../images/module2/Class Diagram.png';
import sequence_uml from '../images/module2/Sequence Diagram.png';
import state_uml from '../images/module2/State Transition Diagram.png';

function Unit7({ cardVisibility, cardNoteVisibility, toggleCard, toggleNoteCard }) {
    return (
        <div>
        <div className="d-flex  justify-content-between align-items-center">
            <h3 style={{ color: 'white' }}>Unit 7: Debugging / Error Handling, Data Structures and Data Search</h3>
            <div>
                <button style={{ marginRight: 16 }} className="btn btn-primary ml-2" onClick={() => toggleNoteCard('unit7')}>{cardNoteVisibility.unit7 ? 'Show Note' : 'Close Note'}</button>
                <button className="btn btn-primary ml-2" onClick={() => toggleCard('unit7')}>{cardVisibility.unit7 ? 'Show' : 'Close'}</button>
            </div>
        </div>
        <Card style={{ display: cardVisibility.unit7 ? 'none' : 'block' }}>
            <Card.Body>
                <Card.Title><h3 style={{color:"white"}}></h3></Card.Title>
                <Card.Subtitle className="mb-2 text-muted"><p style={{color:"white", fontSize:"14px"}}>The Four pillars of OOP</p></Card.Subtitle>
                <Card.Text>
                -----<br/>
                Apply Python tools to examine the quality of code.<br/>
                Implement data structures to store data.<br/>
                Implement a search algorithm to explore stored data.<br/>
                </Card.Text>
                Design Proposal for Software Supporting the Operation of a Driverless Car<br/>
                <a href={SystemDesign} download="Design Proposal for Software Supporting the Operation of a Driverless Car" target='_blank'>
                    download file
                </a>
                <div className="d-flex justify-content-between">
                    <div style={{width:"45%"}} >
                        <p>Use Case Diagram</p>
                        <Card.Img variant="top" src={use_case_uml} />
                    </div>
                    <div style={{width:"45%"}} >
                        <p>Activity Diagram</p>
                        <Card.Img variant="top" src={activity_uml} />
                    </div>
                </div>
                <div className="d-flex justify-content-between">
                    <div style={{width:"45%"}} >
                        <p>Class Diagram</p>
                        <Card.Img variant="top" src={class_uml} />
                    </div>
                    <div style={{width:"45%"}} >
                        <p>Sequence Diagram</p>
                        <Card.Img variant="top" src={sequence_uml} />
                    </div>
                </div>
                <div className="d-flex justify-content-between">
                    <div style={{width:"45%"}} >
                        <p>Class Diagram</p>
                        <Card.Img variant="top" src={state_uml} />
                    </div>
                </div>
                
            </Card.Body>
        </Card>
        <Card style={{ display: cardNoteVisibility.unit7 ? 'none' : 'block' }}>
            <Card.Body>
            1. Discuss the ways in which data structures support object-oriented development. Use examples of three different data structures to contextualise your response.<br/> 
            2. Create a nested dictionary of data on cars within a Car class. Extend the program to work with the dictionary by calling the following methods:<br/> 
            items()<br/> 
            keys()<br/> 
            values()<br/> 
            3. Read the article by Kampffmeyer & Zschaler (2007). Develop a program which allows a user to enter the properties which they require of a design pattern, and have the program make a recommendation. Your program should use a constructor to initialise attributes and assign values to variables based on input entered by the user.<br/> 
            </Card.Body>
        </Card>
        </div>
    );
}

export default Unit7;