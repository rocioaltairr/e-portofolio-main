import React from 'react';
import Card from 'react-bootstrap/Card';

function Unit2({ cardVisibility, cardNoteVisibility, toggleCard, toggleNoteCard }) {
    return (
        <div>
        <div className="d-flex  justify-content-between align-items-center">
            <h3 style={{ color: 'white' }}>Unit 2: Object Oriented Analysis - Initial Steps towards Programming in Python</h3>
            <div>
                <button style={{ marginRight: 16 }} className="btn btn-primary ml-2" onClick={() => toggleNoteCard('unit2')}>{cardNoteVisibility.unit2 ? 'Show Note' : 'Close Note'}</button>
                <button className="btn btn-primary ml-2" onClick={() => toggleCard('unit2')}>{cardVisibility.unit2 ? 'Show' : 'Close'}</button>
            </div>
        </div>
        <Card style={{ display: cardNoteVisibility.unit2 ? 'none' : 'block' }}>
            <Card.Body>
                {/* <Card.Title><h3 style={{color:"white"}}></h3></Card.Title> */}
                <Card.Text style={{textAlign:'left'}}>
                    <h3  style={{color:"white"}}>Use Case Diagram</h3>
                    <p  style={{fontSize:"16px", fontWeight:"bold", margin:"0px"}}>USE CASES:</p>
                    A use case is a set of scenarios tied together by a common user goal.<br/>
                    <p  style={{fontStyle:"italic", margin:"0px"}}>
                        System use cases: Describe an interaction with the software.<br/>
                        Business use cases: that describes how the business will respond to a customer or an event.<br/>
                    </p>
                    <p  style={{fontSize:"16px", fontWeight:"bold", margin:"0px"}}>ACTORS:</p>
                    * users of the system are refetted to as actors.<br/>
                    * Actors carry out use cases and a single actor my carry many use cases and use case can have many actors who will perform it.<br/>
                    * One person may act as more than one actor.<br/>
                    <p  style={{fontSize:"16px", fontWeight:"bold", margin:"0px"}}>LEVELS:</p>
                    SEA LEVELS:A system should be justified by aligning with user goals and requirements, ensuring it can adequately support them.<br/>
                    CLOUD LEVELS: Cloud levels offer an abstract, high-level view of the system, illustrating the context in which user goals and requirements operate. This level often demonstrates how different use cases are interconnected and interdependent.<br/>
                    FISH LEVELS: Within the Fish level, we break down elements and use cases into smaller, manageable parts. This helps us understand complex functionalities in more detail.<br/>
                    <p  style={{fontSize:"16px", fontWeight:"bold", margin:"0px"}}>MAIN SUCCESS SCENARIO:</p>
                    The main sucesss scenario should usually take the form of sequence of steps that highlights a typical path, and also the extensions to the main sucess scenario my be included to illustrate conditions that might result in a different set of steps.
                    <br/>
                    <h3  style={{color:"white"}}>State Machine Diagram</h3>

                    <h3  style={{color:"white"}}>Codio: Class, Functions and Methods</h3>
                    Collaborative Discussion 1: Factors which influence reusability, Optional Extension Activities and e-Portfolio activities cover the following learning outcomes:<br/>
                    1.     Appraise and critically evaluate object-oriented programming compared to other programming paradigms.<br/>
                    2.     Design and implement programs that demonstrate appropriate use of object-oriented design principles.<br/>
                    3.     Propose object-oriented solutions using an appropriate modelling language, such as UML.<br/>
                </Card.Text>
            </Card.Body>
        </Card>
        <Card style={{ display: cardVisibility.unit2 ? 'none' : 'block' }}>
            <Card.Body>
                {/* <Card.Title><h3 style={{color:"white"}}></h3></Card.Title> */}
                <Card.Text style={{textAlign:'left'}}>
                <h3 style={{color:"white"}}>Title: Software Design</h3>
                Write a pen portrait for a user of a driverless car. You can read more about<a href='https://www.aqr.org.uk/glossary/pen-portrait'> pen portraits at the AQR website</a>.<br/>
                Create a use case model which captures the ways in which a user needs to interact with the software system. You can <a href='https://www.visual-paradigm.com/guide/uml-unified-modeling-language/what-is-use-case-diagram/'>read more about use case diagrams at the Visual Paradigm website</a>.<br/>
                </Card.Text>
            </Card.Body>
        </Card>
        </div>
    );
}

export default Unit2;
