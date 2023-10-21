import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import img1 from './desing_pattern.png';
import SystemDesign from './system_design.pdf'

const Module2 = () => {
    // State to manage the visibility of each card
    const [cardVisibility, setCardVisibility] = useState({
      unit1: true,
      unit5: true,
      unit7: true,
      unit11: true,
    });
  
    // Function to toggle the visibility of a card
    const toggleCard = (unit) => {
      setCardVisibility((prevState) => ({
        ...prevState,
        [unit]: !prevState[unit],
      }));
    };

    return <div className='module1' style={{textAlign:'left'}}>
        <h1 style={{color:"white", textAlign:"center",padding:"20px"}}>Launching into Computer Science</h1>
        <div className="d-flex  justify-content-between align-items-center">
            <h3 style={{ color: 'white' }}>Unit 1: An Introduction to Python Programming and the OO Programming Paradigm</h3>
            <button className="btn btn-primary ml-2" onClick={() => toggleCard('unit1')}>Show</button>
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
        <div className="d-flex  justify-content-between align-items-center">
            <h3 style={{ color: 'white' }}>Unit5: More on Classess</h3>
            <button className="btn btn-primary ml-2" onClick={() => toggleCard('unit5')}>Show</button>
        </div>
        <Card style={{ display: cardVisibility.unit5 ? 'none' : 'block' }}>
            <Card.Body>
                <Card.Title><h3 style={{color:"white"}}></h3></Card.Title>
                <Card.Subtitle className="mb-2 text-muted"><p style={{color:"white", fontSize:"14px"}}>The Four pillars of OOP</p></Card.Subtitle>
                <Card.Text>
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
        <div className="d-flex  justify-content-between align-items-center">
            <h3 style={{ color: 'white' }}>Unit7: Debugging / Error Handling, Data Structures and Data Search</h3>
            <button className="btn btn-primary ml-2" onClick={() => toggleCard('unit7')}>Show</button>
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

            </Card.Body>
        </Card>
        <div className="d-flex  justify-content-between align-items-center">
            <h3 style={{ color: 'white' }}>Unit11: Pointers, References & Memory, and Design Patterns</h3>
            <button className="btn btn-primary ml-2" onClick={() => toggleCard('unit11')}>Show</button>
        </div>
        <Card style={{ display: cardVisibility.unit11 ? 'none' : 'block' }}>
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
}

export default Module2