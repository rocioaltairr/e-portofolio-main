import React from 'react';
import Card from 'react-bootstrap/Card';
import UnitHeaderTwo from '../Components/unit_header_two';

function Unit3({ cardVisibility, cardNoteVisibility, toggleCard, toggleNoteCard }) {
    return (
        <div>
        <UnitHeaderTwo
            unit={"unit3"}
                title={"Unit 3: UML"}
                toggleNoteCard={(unit) => toggleNoteCard(unit)}
                toggleCard ={(unit) => toggleCard(unit)}
                cardNoteVisibility={cardNoteVisibility.unit3}
                cardVisibility={cardVisibility.unit3}
            />
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
                <Card.Title><h3 style={{color:"white"}}>e-Portfolio activities</h3></Card.Title>
                <Card.Text style={{textAlign:'left'}}>
                <h3 style={{color:"#11ABB0"}}>1. Discuss which UML models are most applicable at different stages of the Software Development Life Cycle.</h3>
                <br/>
                <h3>Software Development Life Cycle (SDLC)</h3>

                <h4>Use Case Diagrams:</h4>
                <p  style={{margin:0}}><strong>Stage:</strong> Requirements Analysis</p>
                <p><strong>Applicability:</strong> To understand how users interact with the system and define its functional requirements.</p>

                <h4>Class Diagrams:</h4>
                <p  style={{margin:0}}><strong>Stage:</strong> System Design</p>
                <p><strong>Applicability:</strong> To define the structure of the system, including classes, their relationships, and attributes.</p>

                <h4>Sequence Diagrams:</h4>
                <p  style={{margin:0}}><strong>Stage:</strong> System Design and Implementation</p>
                <p><strong>Applicability:</strong> To illustrate interactions between objects or components in specific scenarios.</p>

                <h4>State Machine Diagrams:</h4>
                <p  style={{margin:0}}><strong>Stage:</strong> System Design and Implementation</p>
                <p><strong>Applicability:</strong> To model the behavior of objects or components, showing states and transitions.</p>

                <h4>Component Diagrams:</h4>
                <p  style={{margin:0}}><strong>Stage:</strong> System Design and Implementation</p>
                <p><strong>Applicability:</strong> To depict the physical structure of the system, including components and their relationships.</p>

                <h4>Deployment Diagrams:</h4>
                <p  style={{margin:0}}><strong>Stage:</strong> System Design and Deployment</p>
                <p><strong>Applicability:</strong> To show how software components are deployed on hardware nodes.</p>

                <h4>Package Diagrams:</h4>
                <p  style={{margin:0}}><strong>Stage:</strong> System Design and Implementation</p>
                <p><strong>Applicability:</strong> To organize and manage classes and packages in complex systems.</p>

                <h4>Collaboration Diagrams (Communication Diagrams):</h4>
                <p  style={{margin:0}}><strong>Stage:</strong> System Design and Implementation</p>
                <p><strong>Applicability:</strong> To visualize interactions between objects or components.</p>

                <h4>Component Interaction Diagrams:</h4>
                <p  style={{margin:0}}><strong>Stage:</strong> Implementation</p>
                <p><strong>Applicability:</strong> To focus on component interactions during the implementation phase.</p>

                <p>Each UML model serves a specific purpose in the SDLC, and their applicability varies depending on the stage of development and the need to represent different aspects of the system.</p>
                <h3 style={{color:"#11ABB0"}}>2. Making reference to ‘The Unified Modeling Language Reference Manual Second Edition’, use the State Machine Diagram in Figure 3-7 to design a similar model for a washing machine.</h3>
                </Card.Text>
            </Card.Body>
        </Card>
        </div>
    );
}

export default Unit3;