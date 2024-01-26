import React from 'react';
import Card from 'react-bootstrap/Card';
import UnitHeaderTwo from '../Components/unit_header_two';

function Unit2({ cardVisibility, cardNoteVisibility, toggleCard, toggleNoteCard }) {
    return (
        <div>
        <UnitHeaderTwo
            unit={"unit2"}
                title={"Unit 2: Object Oriented Analysis - Initial Steps towards Programming in Python"}
                toggleNoteCard={(unit) => toggleNoteCard(unit)}
                toggleCard ={(unit) => toggleCard(unit)}
                cardNoteVisibility={cardNoteVisibility.unit2}
                cardVisibility={cardVisibility.unit2}
            />
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
                <Card.Title><h3 style={{color:"white"}}>e-Portfolio activities</h3></Card.Title>
                <Card.Text style={{textAlign:'left'}}>
                <h3 style={{color:"white"}}>Title: Software Design</h3>
                <h4 style={{color:"white"}}>1. Write a pen portrait for a user of a driverless car. You can read more about<a href='https://www.aqr.org.uk/glossary/pen-portrait'> pen portraits at the AQR website</a>.</h4>
                <h4 style={{color:"white"}}>2. Create a use case model which captures the ways in which a user needs to interact with the software system. You can <a href='https://www.visual-paradigm.com/guide/uml-unified-modeling-language/what-is-use-case-diagram/'>read more about use case diagrams at the Visual Paradigm website</a>.</h4>
                <div style={{background: 'white', padding: 12}}>
                        <pre>
                            <code class="language-python">
                            class ControlSystem:<br/>
                                <p style={{margin: 0}}>&nbsp;&nbsp;def __init__(self):</p>
                                <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;self.speed = 0</p>
                                <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;self.steering_angle = 0</p>
                                <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;self.dataset = []</p>
                                <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;self.emergency_signals = False</p>
                                <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;self.command_stack = []  # Stack for handling commands</p>
                                <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;self.user_in_manual_mode = False </p>
                                <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;self.loaded_model = False</p>
                                <br/>

                                <p style={{margin: 0}}>&nbsp;&nbsp;def user_running_manual_mode(self):</p>
                                <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;self.user_in_manual_mode = True</p>
                                <br/>

                                <p style={{margin: 0}}>&nbsp;&nbsp;def record_dataset(self, data):</p>
                                <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;self.dataset.append(data)</p>
                                <br/>

                                <p style={{margin: 0}}>&nbsp;&nbsp;def open_safety_system(self):</p>
                                <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;print("Opening the safety system")</p>
                                <br/>

                                <p style={{margin: 0}}>&nbsp;&nbsp;def prioritize_emergency_command(self, command):</p>
                                <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;self.command_stack.append(command)</p>
                                <br/>

                                <p style={{margin: 0}}>&nbsp;&nbsp;def execute_command(self, command):</p>
                                <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;command = self.command_stack.pop()</p>
                                <br/><br/>
                            class User:<br/>
                                <p style={{margin: 0}}>&nbsp;&nbsp;def __init__(self, control_system: ControlSystem):</p>
                                <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;self.car_simulator = CarSimulator()</p>
                                <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;self.command_queue = []  # Queue for handling user requests</p>
                                <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;self.control_system = control_system</p>
                                <br/>

                                <p style={{margin: 0}}>&nbsp;&nbsp;def open_car_simulator(self):</p>
                                <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;self.car_simulator.open()</p>
                                <br/>

                                <p style={{margin: 0}}>&nbsp;&nbsp;def run_manual_mode(self):</p>
                                <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;self.control_system.user_running_manual_mode()</p>
                                <br/>

                                <p style={{margin: 0}}>&nbsp;&nbsp;def run_autonomous_mode(self):</p>
                                <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;print("Running autonomous mode")</p>
                                <br/>

                                <p style={{margin: 0}}>&nbsp;&nbsp;def run_driver_script(self):</p>
                                <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;while self.command_queue:</p>
                                <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;command = self.command_queue.pop(0)</p>
                                <br/>

                                <p style={{margin: 0}}>&nbsp;&nbsp;def add_user_request(self, request):</p>
                                <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;self.command_queue.append(request)</p>
                                <br/>
                            </code>
                        </pre>
                        </div>
                </Card.Text>
            </Card.Body>
        </Card>
        </div>
    );
}

export default Unit2;
