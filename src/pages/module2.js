import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import img1 from './desing_pattern.png';
import SystemDesign from './system_design.pdf'
import use_case_uml from './images/module2/Use Case Diagram.png';
import activity_uml from './images/module2/Activity Diagram.png';
import class_uml from './images/module2/Class Diagram.png';
import sequence_uml from './images/module2/Sequence Diagram.png';
import state_uml from './images/module2/State Transition Diagram.png';

const Module2 = () => {
    // State to manage the visibility of each card
    const [cardVisibility, setCardVisibility] = useState({
      unit1: true,
      unit2: true,
      unit3: true,
      unit4: true,
      unit5: true,
      unit6: true,
      unit7: true,
      unit8: true,
      unit9: true,
      unit10: true,
      unit11: true,
    });

    const [cardNoteVisibility, setNoteCardVisibility] = useState({
        unit1: true,
        unit2: true,
        unit3: true,
        unit4: true,
        unit5: true,
        unit6: true,
        unit7: true,
        unit8: true,
        unit9: true,
        unit10: true,
        unit11: true,
      });
  
    // Function to toggle the visibility of a card
    const toggleCard = (unit) => {
      setCardVisibility((prevState) => ({
        ...prevState,
        [unit]: !prevState[unit],
      }));
    };

    const toggleNoteCard = (unit) => {
        setNoteCardVisibility((prevState) => ({
          ...prevState,
          [unit]: !prevState[unit],
        }));
      };

    return <div className='module1' style={{textAlign:'left'}}>
        <h1 style={{color:"white", textAlign:"center",padding:"20px"}}>Launching into Computer Science</h1>

        {/* === Unit 1 === */}
        <div className="d-flex  justify-content-between align-items-center">
            <h3 style={{ color: 'white' }}>Unit 1: An Introduction to Python Programming and the OO Programming Paradigm</h3>
            <button className="btn btn-primary ml-2" onClick={() => toggleCard('unit1')}>{cardVisibility.unit1 ? 'Show' : 'Close'}</button>
        </div>
        <Card style={{ display: cardVisibility.unit1 ? 'none' : 'block' }}>
            <Card.Body>
                <Card.Title><h3 style={{color:"white"}}>Initial Post</h3></Card.Title>
                {/* <Card.Subtitle className="mb-2 text-muted"><p style={{color:"white", fontSize:"14px"}}>Create your e-portfolio on GitHub.</p></Card.Subtitle> */}
                <Card.Text style={{textAlign:'left'}}>
                    In the realm of software development, achieving reusability is a pivotal objective that empowers developers to enhance the development process and curtail redundancy. According to insights from Padhy et al. in 2018, there are several critical factors that influence the reusability of object-oriented software.<br/>
                    Development Process and Methodology:<br/>
                    Used in the data project (UD): This factor pertains to the reusability of data from past projects, offering valuable insights and efficiency gains in data-related tasks.<br/>
                    Modules in the program (MIP): Embracing modularity is essential for creating software with independent, interchangeable components, fostering flexibility, ease of maintenance, and code efficiency.<br/>
                    Architecture-driven approach (ADP): An architecture-driven approach emphasizes a well-defined software architecture, providing a structured and scalable design that simplifies component reuse.<br/>
                    An algorithm used in the program (AP): Reusable algorithms play a pivotal role in resolving common problems, thereby saving development time and effort.<br/>
                    Design patterns (DP): Design patterns offer battle-tested solutions to recurring design challenges, enhancing code quality and maintainability.<br/>
                    Documentation in the project (DIP): Thorough documentation supports understanding and reusability, offering insights into prior project experiences and facilitating knowledge transfer.<br/>
                    Knowledge and Information:<br/>
                    Knowledge requirement (KR): Knowledge generated during the software development lifecycle is a valuable resource for promoting reusability, representing experiences, ideas, and reasoning that guide future development efforts.<br/>
                    Models in the project (MP): Models represent project tasks, solutions, and insights, providing reusable representations that enable sharing and meaningful code and design artifact reuse.<br/>
                    Analysis and Planning:<br/>
                    Requirement analysis (RA): Requirement analysis is pivotal for comprehending and fulfilling system needs, although its direct impact on code or solution reusability may be relatively lower.<br/>
                    Service contracts (SC): Service contracts promote reusable interfaces and communication channels, bolstering effective collaboration, albeit with a somewhat lower impact on direct code reusability.<br/>
                    Quality Assurance and Testing:<br/>
                    Test cases/test design (TCTD): While reusable test cases and designs enhance efficient testing and quality assurance, their overall impact on reusability may be relatively lower compared to other factors.<br/>
                    These descriptions provide a comprehensive understanding of each factor's significance in fostering reusability within the realm of software development.<br/>
                </Card.Text>
            </Card.Body>
        </Card>

        {/* === Unit 2 === */}
        <div className="d-flex  justify-content-between align-items-center">
            <h3 style={{ color: 'white' }}>Unit 2: Object Oriented Analysis - Initial Steps towards Programming in Python</h3>
            <button className="btn btn-primary ml-2" onClick={() => toggleNoteCard('unit2')}>{cardNoteVisibility.unit2 ? 'Show' : 'Close'}</button>
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

        {/* === Unit 3 === */}
        <div className="d-flex  justify-content-between align-items-center">
            <h3 style={{ color: 'white' }}>Unit 3: UML</h3>
            <button className="btn btn-primary ml-2" onClick={() => toggleCard('unit3')}>{cardVisibility.unit3 ? 'Show' : 'Close'}</button>
        </div>
        <Card style={{ display: cardVisibility.unit3 ? 'none' : 'block' }}>
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

        {/* === Unit 4 === */}
        <div className="d-flex  justify-content-between align-items-center">
            <h3 style={{ color: 'white' }}>Unit 4: Applying a UML Model to a Program Implementation: UML in Practice</h3>
            <div>
                <button style={{ marginRight: 16 }} className="btn btn-primary ml-2" onClick={() => toggleNoteCard('unit4')}>{cardNoteVisibility.unit4 ? 'Show Note' : 'Close Note'}</button>
                <button className="btn btn-primary ml-2" onClick={() => toggleCard('unit4')}>{cardVisibility.unit4 ? 'Show' : 'Close'}</button>
            </div>
        </div>
        <Card style={{ display: cardNoteVisibility.unit4 ? 'none' : 'block' }}>
            <Card.Body>
                <Card.Title><h3 style={{color:"white"}}>Activity Diagram</h3></Card.Title>
                <Card.Text style={{textAlign:'left'}}>
                    Seminar2<br/>
                    1. Design and implement programs that demonstrate appropriate use of object-oriented design principles.<br/>
                    2. Propose object-oriented solutions using an appropriate modelling language, such as UML.<br/>
                </Card.Text>
            </Card.Body>
        </Card>
        <Card style={{ display: cardVisibility.unit4 ? 'none' : 'block' }}>
            <Card.Body>
                {/* <Card.Title><h3 style={{color:"white"}}></h3></Card.Title> */}
                <Card.Text style={{textAlign:'left'}}>
                Design an activity diagram which shows the relationships and interactivity between the user’s behaviour within the driverless car.
                <div className="d-flex justify-content-between">
                    <div style={{width:"45%"}} >
                        <p>Activity Diagram</p>
                        <Card.Img variant="top" src={activity_uml} />
                    </div>
                </div>
                {/* 
                +------------------+             +-------------------+
                |     Employee    |             |    AnnualLeave   |
                +------------------+             +-------------------+
                | - employee_id   |             | - leave_id       |
                | - first_name    |1--------1   | - start_date     |
                | - last_name     |             | - end_date       |
                | - email         |             | - employee_id    |
                | - annual_balance|             +-------------------+
                +------------------+ 
                */}
                    Expand upon the activity diagram with the development of a class diagram using UML to support a system with basic employee-related functionality. This should include the retention of employee details and allowing an employee to book a day of annual leave.
                    Develop the Python program to implement the class model.<br/><br/>
                    <div style={{background: 'white', padding: 12}}>
                        <pre>
                            <code class="language-python">
                                class Employee:<br/>
                                    <p style={{margin: 0}}>&nbsp;def __init__(self, employee_id, first_name, last_name, email, annual_balance):</p>
                                    <p style={{margin: 0}}>&nbsp;&nbsp;self.employee_id = employee_id</p>
                                    <p style={{margin: 0}}>&nbsp;&nbsp;self.first_name = first_name</p>
                                    <p style={{margin: 0}}>&nbsp;&nbsp;self.last_name = last_name</p>
                                    <p style={{margin: 0}}>&nbsp;&nbsp;self.email = email</p>
                                    <p style={{margin: 0}}>&nbsp;&nbsp;self.annual_balance = annual_balance</p>
                                <br/>
                                class AnnualLeave:<br/>
                                    <p style={{margin: 0}}>&nbsp;def __init__(self, leave_id, start_date, end_date, employee_id):</p>
                                    <p style={{margin: 0}}>&nbsp;&nbsp;self.leave_id = leave_id</p>
                                    <p style={{margin: 0}}>&nbsp;&nbsp;self.start_date = start_date</p>
                                    <p style={{margin: 0}}>&nbsp;&nbsp;self.end_date = end_date</p>
                                    <p style={{margin: 0}}>&nbsp;&nbsp;self.employee_id = employee_id</p>
                                <br/>
                                employee1 = Employee(1, "John", "Doe", "john@example.com", 20)<br/>
                                annual_leave1 = AnnualLeave(1, "2023-01-01", "2023-01-05", 1)<br/>
                            </code>
                        </pre>
                    </div>
                </Card.Text>
            </Card.Body>
        </Card>

        {/* === Unit 5 === */}
        <div className="d-flex  justify-content-between align-items-center">
            <h3 style={{ color: 'white' }}>Unit 5: More on Classess</h3>
            <button className="btn btn-primary ml-2" onClick={() => toggleCard('unit5')}>{cardVisibility.unit5 ? 'Show' : 'Close'}</button>
        </div>
        <Card style={{ display: cardVisibility.unit5 ? 'none' : 'block' }}>
            <Card.Body>
                <Card.Title><h3 style={{color:"white"}}></h3></Card.Title>
                <Card.Subtitle className="mb-2 text-muted"><p style={{color:"white", fontSize:"14px"}}>The Four pillars of OOP</p></Card.Subtitle>
                <Card.Text>
                explore the concept of classes in Python further, in the sense of assigning variable values using a constructor, in addition to the use of an abstract class.<br/>
                In this unit, there is a formative activity to complete – e-Portfolio Activity: Polymorphism which cover the following learning outcomes:<br/>
                Design and implement programs that demonstrate appropriate use of object-oriented design principles.<br/><br/>
                
                Abstraction<br/>
                Encapsulation<br/>
                Inheritance<br/>
                Polymorphism<br/>
                -----<br/>
                Create a Python program which uses a constructor and abstract class.<br/>
                Describe the concepts of polymorphism, aggregation and composition.<br/>
                Name variables according to the namespace within which they exist.<br/>
                </Card.Text>
            </Card.Body>
        </Card>

        {/* === Unit 6 === */}
        <div className="d-flex  justify-content-between align-items-center">
            <h3 style={{ color: 'white' }}>Unit 6: Abstract Methods and Interfaces</h3>
            <div>
                <button style={{ marginRight: 16 }} className="btn btn-primary ml-2" onClick={() => toggleNoteCard('unit6')}>{cardNoteVisibility.unit6 ? 'Show Note' : 'Close Note'}</button>
                <button className="btn btn-primary ml-2" onClick={() => toggleCard('unit6')}>{cardVisibility.unit6 ? 'Show' : 'Close'}</button>
            </div>
        </div>
        <Card style={{ display: cardNoteVisibility.unit6 ? 'none' : 'block' }}>
            <Card.Body>
                {/* <Card.Title><h3 style={{color:"white"}}></h3></Card.Title> */}
                <Card.Text style={{textAlign:'left'}}>
                    Seminar 3<br/>
                    in the sense of using abstract classes and interfaces to assign values to variables and execute methods<br/>
                    Propose object-oriented solutions using an appropriate modelling language, such as UML.<br/>
                </Card.Text>
            </Card.Body>
        </Card>
        <Card style={{ display: cardVisibility.unit6 ? 'none' : 'block' }}>
            <Card.Body>
                {/* <Card.Title><h3 style={{color:"white"}}></h3></Card.Title> */}
                <Card.Text style={{textAlign:'left'}}>
                    <a href='https://www.dora.lib4ri.ch/eawag/islandora/object/eawag%3A16597/datastream/PDF/Knox-2018-A_python_framework_for_multi-agent-%28published_version%29.pdf'>https://www.dora.lib4ri.ch/eawag/islandora/object/eawag%3A16597/datastream/PDF/Knox-2018-A_python_framework_for_multi-agent-%28published_version%29.pdf</a><br/>
                
                Discuss the metrics used to assess the features of an object oriented program.<br/>
                Develop a Python program which has three abstract methods and one subclass which allows a user to perform banking operations.<br/>
                Read the article by Knox et al. (2018) and answer the following questions:<br/>
                <br/>
                
                <h3 style={{color:'white'}}>1. What is Component-based modelling?</h3>
                
                Component-based modeling is an approach used in environmental modeling where you break down a complex system into smaller "components" that represent specific parts or processes. Each component can be developed by different experts using their own approaches and terminology.<br/>
                To make these components work together, a central framework or structure is used as a common interface. This allows all the components to communicate and be integrated into a single model. This approach makes it easier to create flexible and maintainable simulation models, even when dealing with different models created by various experts.<br/>
                In the article by Knox et al. (2018), they discuss the Python Network Simulation (Pynsim) Framework, which is an example of this component-based modeling approach. In Pynsim, a network structure is used as the central framework for building simulation models of networked systems, including physical and non-physical entities like organizational hierarchies.<br/>
                <br/><br/>

                <h3 style={{color:'white'}}>2. Upon what do component-based modelling frameworks depend?</h3>
                Component-based modeling frameworks depend on a few things:<br/>
                Integration Structure: They need a central structure that acts as a common interface for connecting different parts of a model.<br/>
                Abstractions: They use standard definitions for inputs, outputs, and the context in which models work.<br/>
                Flexibility: They should allow easy addition and removal of components, making it possible to integrate various models without a lot of changes.<br/>
                Minimal Changes: They aim to minimize how much individual models have to be modified to fit into the framework.<br/>
                Value Evaluation: They consider whether adding a particular model to the framework is worthwhile and how it contributes to the overall modeling goals.<br/>
                <br/><br/>

                <h3 style={{color:'white'}}>3. Within the context of the work presented in this paper, what is Pynsim?</h3>
                In the context of the paper, Pynsim is a specialized framework in Python. It's designed for building simulation models for networked systems. Pynsim is all about making it easy for different parts of a model to work together.<br/>
                It uses a network structure as a common way for these model parts to connect, instead of them directly communicating with each other. This setup allows different sub-models to follow a common representation of a network of nodes and links. Pynsim doesn't force any specific rules for how models talk to each other, but it provides a basic structure for building network-based simulations.<br/>
                Pynsim is also built to be flexible. It helps with combining different components easily, and it supports agent-based modeling, where individual elements in the network can do their own tasks during the simulation. Pynsim can even represent non-physical structures like organizational hierarchies.<br/>
                The key contribution of Pynsim in this work is that it's a component-based simulation framework specifically created for networks. It makes it easier to model decision-making hierarchies and supports multi-agent modeling. The best part is that it's available as a standard Python library, making it accessible to a wide range of researchers and developers.<br/>
                <br/><br/>

                <h3 style={{color:'white'}}>4. How does Pynsim achieve its goal when using object oriented Python programming?</h3>
                Pynsim uses object-oriented Python programming to make it easy to build flexible and modular simulation models for networked systems. Here's how it works:<br/>
                Templates: Pynsim provides templates (abstract classes) for different parts of the model, like network nodes and links. Users can use these templates to create their specific components.<br/>
                Sharing: Components can share common features and behaviors defined in these templates. This reduces repetition and makes the system more consistent.<br/>
                Modularity: Pynsim encourages breaking the model into separate parts, each represented by a class. For example, you might have a class for nodes and another for links. This modular approach allows you to change or add components without affecting the whole system.<br/>
                Isolation: Each component's data and methods are kept separate in their class, so they don't interfere with other parts of the program. This isolation helps manage complexity.<br/>
                Consistency: Different components can work together because they follow the same rules, even if they have different internal workings. This is called polymorphism.<br/>
                Customization: You can create new components by extending the templates. This flexibility allows you to adapt the framework to your specific modeling needs.<br/>
                Dynamic Actions: In Pynsim, network elements can do things on their own during the simulation. This dynamic behavior is achieved through object-oriented programming.<br/>
                So, by using object-oriented Python, Pynsim offers a structured way to build and customize simulation models, making them easy to manage, change, and extend as needed.<br/>
                <br/><br/>
                </Card.Text>
            </Card.Body>
        </Card>

        {/* === Unit 7 === */}
        <div className="d-flex  justify-content-between align-items-center">
            <h3 style={{ color: 'white' }}>Unit 7: Debugging / Error Handling, Data Structures and Data Search</h3>
            <button className="btn btn-primary ml-2" onClick={() => toggleCard('unit7')}>{cardVisibility.unit7 ? 'Show' : 'Close'}</button>
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

        {/* === Unit 8 === */}
        <div className="d-flex  justify-content-between align-items-center">
            <h3 style={{ color: 'white' }}>Unit 8: Data Structures and Data Search in Practice</h3>
            <div>
                <button style={{ marginRight: 16 }} className="btn btn-primary ml-2" onClick={() => toggleNoteCard('unit8')}>{cardNoteVisibility.unit8 ? 'Show Note' : 'Close Note'}</button>
                <button className="btn btn-primary ml-2" onClick={() => toggleCard('unit8')}>{cardVisibility.unit8 ? 'Show' : 'Close'}</button>
            </div>
        </div>
        <Card style={{ display: cardNoteVisibility.unit8 ? 'none' : 'block' }}>
            <Card.Body>
                {/* <Card.Title><h3 style={{color:"white"}}></h3></Card.Title> */}
                <Card.Text style={{textAlign:'left'}}>
                    Seminar4<br/>
                    This week we will experiment with operations which may be applied to data structures, in addition to examining the ways in which data search algorithms are implemented.<br/> 
                    In this unit, there is formative activity for you to complete - Collaborative Discussion 2: OO Design for IoT and e-Portfolio which cover the following learning outcomes:<br/>
                    1.Design and implement programs that demonstrate appropriate use of object-oriented design principles.<br/>
                </Card.Text>
            </Card.Body>
        </Card>
        <Card style={{ display: cardVisibility.unit8 ? 'none' : 'block' }}>
            <Card.Body>
                {/* <Card.Title><h3 style={{color:"white"}}></h3></Card.Title> */}
                <Card.Text style={{textAlign:'left'}}>
                Activity 1: Errors<br/>
                Incorporate the following code into a Python program to handle exceptions.<br/>

                try:<br/>
                # do something<br/>
                pass<br/>

                except ValueError:<br/>
                # handle ValueError exception<br/>
                pass<br/>

                except (TypeError, ZeroDivisionError):<br/>
                # handle multiple exceptions<br/>
                # TypeError and ZeroDivisionError<br/>
                pass<br/>

                except:<br/>
                # handle all other exceptions<br/>
                pass<br/>

                Source: Programiz (n.d.) <a href='https://www.programiz.com/python-programming/exception-handling'>Python Exception Handling Using try, except and finally statement.</a><br/>

                Activity 2: Data Structures<br/>
                1. Set operations include:<br/>
                Union<br/>
                Intersection<br/>
                Difference<br/>
                Symmetric difference<br/>
                Explain a use for each of these set operations within the context of your summative assessment.<br/>

                2. Write a Python program to carry out a linear search on a list data structure.<br/>
                </Card.Text>
            </Card.Body>
        </Card>

        {/* === Unit 9 === */}
        <div className="d-flex  justify-content-between align-items-center">
            <h3 style={{ color: 'white' }}>Unit 9: Packaging and Testing</h3>
            <button className="btn btn-primary ml-2" onClick={() => toggleCard('unit9')}>{cardVisibility.unit9 ? 'Show' : 'Close'}</button>
        </div>
        <Card style={{ display: cardVisibility.unit9 ? 'none' : 'block' }}>
            <Card.Body>
                {/* <Card.Title><h3 style={{color:"white"}}></h3></Card.Title> */}
                <Card.Text style={{textAlign:'left'}}>
                    This week we will examine how to test a Python program, in addition to packaging it for distribution to stakeholders. <br/> 
                    In this unit, there are formative activities for you to complete - Collaborative Discussion 2: OO Design for IoT and e-Portfolio and e-Portfolio Activities  which cover the following learning outcomes:<br/>
                    1.     Appraise and critically evaluate object-oriented programming compared to other programming paradigms.<br/>
                    2.     Design and implement programs that demonstrate appropriate use of object-oriented design principles.<br/>
                    3.     Select and use appropriate data structures for a given problem.<br/>
                </Card.Text>
            </Card.Body>
        </Card>

        {/* === Unit 10 === */}
        <div className="d-flex  justify-content-between align-items-center">
            <h3 style={{ color: 'white' }}>Unit 10: Testing Code in Practice</h3>
            <div>
                <button style={{ marginRight: 16 }} className="btn btn-primary ml-2" onClick={() => toggleNoteCard('unit10')}>{cardNoteVisibility.unit10 ? 'Show Note' : 'Close Note'}</button>
                <button className="btn btn-primary ml-2" onClick={() => toggleCard('unit10')}>{cardVisibility.unit10 ? 'Show' : 'Close'}</button>
            </div>
        </div>
        <Card style={{ display: cardNoteVisibility.unit10 ? 'none' : 'block' }}>
            <Card.Body>
                {/* <Card.Title><h3 style={{color:"white"}}></h3></Card.Title> */}
                <Card.Text style={{textAlign:'left'}}>
                    "Testing can show the presence of defects but not the absence of them" __ E. W. Dijkstra<br/>
                    EQUIVALENCE PARTITIONING
                    Ｗhite box testing is focused on the internal workings of the software and is typically used for verifying code quality and logic. <br/>
                    Black box testing is concerned with the software's external behavior and is used to verify that it meets the functional requirements and is user-friendly. <br/>
                    UNIT TEST: mocking <br/>
                    INTEGRATION TEST: 
                    Top-down testing 
                    Bottom-up testing <br/>
                </Card.Text>
            </Card.Body>
        </Card>
        <Card style={{ display: cardVisibility.unit10 ? 'none' : 'block' }}>
            <Card.Body>
                {/* <Card.Title><h3 style={{color:"white"}}></h3></Card.Title> */}
                <Card.Text style={{textAlign:'left'}}>
                Activity 1<br/>
                Run the following code using pylint and identify the errors.<br/>
                <br/>
                def factorial (x)<br/>
                    if x == 1:<br/>
                        return 1<br/>
                    <br/>
                    else:<br/>
                        return (x * factorial(x-1))<br/>

                num = 3<br/>
                print("The factorial of", num, "is", factorial(num))  <br/>
                Source: Progamiz. (n.d.) <a href='https://www.programiz.com/python-programming/recursion'>Python Recursion.</a><br/>

                Activity 2<br/>
                In ‘Packaging & Testing’ (unit 9), we examined the use of documentation to support code developments. Add appropriate commenting and documentation for the code below.<br/>

                def add(x, y): <br/>
                return x + y <br/>
                def subtract(x, y): <br/>
                return x - y <br/>
                def multiply(x, y): <br/>
                return x * y <br/>
                def divide(x, y): <br/>
                return x / y <br/>
                print("Select operation.") <br/>
                print("1.Add") <br/>
                print("2.Subtract") <br/>
                print("3.Multiply") <br/>
                print("4.Divide") <br/>
                while True: <br/>
                choice = input("Enter choice(1/2/3/4): ")  <br/>
                if choice in ('1', '2', '3', '4'): <br/>
                num1 = float(input("Enter first number: ")) <br/>
                num2 = float(input("Enter second number: ")) <br/>
                if choice == '1': print(num1, "+", num2, "=", add(num1, num2)) <br/>
                elif choice == '2': print(num1, "-", num2, "=", subtract(num1, num2)) <br/>
                elif choice == '3': print(num1, "*", num2, "=", multiply(num1, num2)) <br/>
                elif choice == '4': print(num1, "/", num2, "=", divide(num1, num2)) <br/>
                break the while loop if answer is no next_calculation = input("Let's do next calculation? (yes/no): ") <br/>
                if next_calculation == "no": <br/>
                break <br/>
                else: print("Invalid Input")<br/>
                Source: Progamiz. (n.d.) <a href='https://www.programiz.com/python-programming/examples/calculator'>Python Program to Make a Simple Calculator.</a><br/>

                Activity 3<br/>
                Read the article by Rani et al. (2021). What impact does this article have on the way in which you have commented the code in the task above?<br/>

                Activity 4<br/>
                Integrate unit tests into the code in Activity 2 to test operation of the methods.<br/>
                </Card.Text>
            </Card.Body>
        </Card>

        {/* === Unit 11 === */}
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
}

export default Module2