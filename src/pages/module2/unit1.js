import React from 'react';
import Card from 'react-bootstrap/Card';
import UnitHeaderTwo from '../Components/unit_header_two';

function Unit1({ cardVisibility, cardNoteVisibility, toggleCard, toggleNoteCard }) {
    return (
        <div>
            <UnitHeaderTwo
            unit={"unit1"}
                title={"Unit 1: An Introduction to Python Programming and the OO Programming Paradigm"}
                toggleNoteCard={(unit) => toggleNoteCard(unit)}
                toggleCard ={(unit) => toggleCard(unit)}
                cardNoteVisibility={cardNoteVisibility.unit1}
                cardVisibility={cardVisibility.unit1}
            />
           
            <Card style={{ display: cardNoteVisibility.unit1 ? 'none' : 'block' }}>
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
            <Card style={{ display: cardVisibility.unit1 ? 'none' : 'block' }}>
                <Card.Body>
                    <Card.Title><h3 style={{color:"white"}}>e-Portfolio Activities</h3></Card.Title>
                    {/* <Card.Subtitle className="mb-2 text-muted"><p style={{color:"white", fontSize:"14px"}}>Create your e-portfolio on GitHub.</p></Card.Subtitle> */}
                    <Card.Text style={{textAlign:'left'}}>
                    <h4 style={{color:"#11ABB0"}}>1. Review the article by Di Silvestro & Nadir (2021). Discuss one aspect of this article which you find unexpected.</h4>
                        
                        <br/>
                        <h4 style={{color:"#11ABB0"}}>2. Develop a Python program and apply protected and unprotected variables within it.</h4>
                        In Python, you can use protected and unprotected variables by using a single underscore _ or a double underscore __ as a prefix to variable names. These prefixes serve as conventions to indicate variable visibility, but they are not a strict access control mechanism.<br/>
                        <div style={{background: 'white', padding: 12}}>
                        <pre>
                            <code class="language-python">
                            class Car:<br/>
                                <p style={{margin: 0}}>&nbsp;&nbsp;def __init__(self, make, model, year):</p>
                                <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;self._make = make  # Protected variable</p>
                                <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;self._model = model  # Protected variable</p>
                                <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;self.__year = year  # Unprotected variable</p>
                                <br/>
                                <p style={{margin: 0}}>&nbsp;&nbsp;def get_year(self):</p>
                                <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;return self.__year</p>
                                <br/>
                                <p style={{margin: 0}}>&nbsp;&nbsp;def set_year(self, year):</p>
                                <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;if year &gt; 0:</p>
                                <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;self.__year = year</p>
                                <p style={{margin: 0}}>&nbsp;&nbsp;else:</p>
                                <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;print("Invalid year value. Year must be greater than 0.")</p>åå
                                my_car = Car("Toyota", "Camry", 2022)<br/>
                                <br/>
                                # Access protected variables<br/>
                                print("Make:", my_car._make)<br/>
                                print("Model:", my_car._model)<br/>
                                <br/>
                                # Access methods to get and set year<br/>
                                print("Year (using method):", my_car.get_year())<br/>
                                my_car.set_year(2023)<br/>
                                print("Year (using method):", my_car.get_year())<br/>
                                <br/>
                                print(my_car.get_make_and_model())<br/>
                            </code>
                        </pre>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Unit1;
