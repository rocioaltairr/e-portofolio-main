import React from 'react';
import Card from 'react-bootstrap/Card';
import SystemDesign from '../system_design.pdf'
import UnitHeaderTwo from '../Components/unit_header_two';
// import use_case_uml from '../images/module2/Use Case Diagram.png';
// import activity_uml from '../images/module2/Activity Diagram.png';
// import class_uml from '../images/module2/Class Diagram.png';
// import sequence_uml from '../images/module2/Sequence Diagram.png';
// import state_uml from '../images/module2/State Transition Diagram.png';

function Unit7({ cardVisibility, cardNoteVisibility, toggleCard, toggleNoteCard }) {
    return (
        <div>
        <UnitHeaderTwo
            unit={"unit7"}
                title={"Unit 7: Debugging / Error Handling, Data Structures and Data Search"}
                toggleNoteCard={(unit) => toggleNoteCard(unit)}
                toggleCard ={(unit) => toggleCard(unit)}
                cardNoteVisibility={cardNoteVisibility.unit7}
                cardVisibility={cardVisibility.unit7}
            />
        <Card style={{ display: cardNoteVisibility.unit7 ? 'none' : 'block' }}>
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
                        {/* <Card.Img variant="top" src={use_case_uml} /> */}
                    </div>
                    <div style={{width:"45%"}} >
                        <p>Activity Diagram</p>
                        {/* <Card.Img variant="top" src={activity_uml} /> */}
                    </div>
                </div>
                <div className="d-flex justify-content-between">
                    <div style={{width:"45%"}} >
                        <p>Class Diagram</p>
                        {/* <Card.Img variant="top" src={class_uml} /> */}
                    </div>
                    <div style={{width:"45%"}} >
                        <p>Sequence Diagram</p>
                        {/* <Card.Img variant="top" src={sequence_uml} /> */}
                    </div>
                </div>
                <div className="d-flex justify-content-between">
                    <div style={{width:"45%"}} >
                        <p>Class Diagram</p>
                        {/* <Card.Img variant="top" src={state_uml} /> */}
                    </div>
                </div>
                
            </Card.Body>
        </Card>
        <Card style={{ display: cardVisibility.unit7 ? 'none' : 'block' }}>
            <Card.Body>
            <Card.Title><h3 style={{color:"white"}}>e-Portfolio activities</h3></Card.Title>
            <h4 style={{color:"#11ABB0"}}>1. Discuss the ways in which data structures support object-oriented development. Use examples of three different data structures to contextualise your response.</h4>
            <Card.Text style={{textAlign:'left'}}>
            <br/> 
            <strong>Encapsulation:</strong>  <br/> 

            Explanation: Encapsulation is a fundamental concept in OOP, where data (attributes) and methods (functions) are bundled together within a class, and access to these members is controlled. Data structures can be used to encapsulate data within objects.<br/> 
            Example: In Python, a class can encapsulate data using a dictionary as a data structure. For instance, consider a Person class with attributes for name, age, and address, stored in a dictionary.<br/> 
            <br/> 
            <div style={{background: 'white', padding: 12}}>
                <pre>
                    <code class="language-python">
                        <p style={{margin: 0}}>class Person:</p>
                        <p style={{margin: 0}}>&nbsp;&nbsp;def __init__(self, name, age, address):</p>
                        <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;self.data = &#123;</p>
                        <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name": name,</p>
                        <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"age": age,</p>
                        <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"address": address</p>
                        <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;&#125;</p>
                        <br/>
                        <p style={{margin: 0}}>&nbsp;&nbsp;def get_name(self):</p>
                        <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;return self.data["name"]</p>
                        <br/>
                        <p style={{margin: 0}}>&nbsp;&nbsp;def set_address(self, new_address):</p>
                        <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;self.data["address"] = new_address</p>
                    </code>
                </pre>
            </div>
            <br/> 
            <strong>Inheritance:</strong>  <br/> 

            Explanation: Inheritance is a key OOP concept that allows one class (subclass or derived class) to inherit the properties and behaviors of another class (superclass or base class). Data structures can be used to represent inherited attributes and methods.<br/> 
            Example: A hierarchy of classes representing different types of vehicles can share common attributes like color and speed using inheritance.<br/> 
            <br/> 
            <div style={{background: 'white', padding: 12}}>
                <pre>
                    <code class="language-python">
                        <p style={{margin: 0}}>class Vehicle:</p>
                        <p style={{margin: 0}}>&nbsp;&nbsp;def __init__(self, color, speed):</p>
                        <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;self.color = color</p>
                        <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;self.color = color</p>
                        <br/>
                        <p style={{margin: 0}}>class Car(Vehicle):</p>
                        <p style={{margin: 0}}>&nbsp;&nbsp;def __init__(self, color, speed, brand):</p>
                        <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;super().__init__(color, speed)</p>
                        <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;self.brand = brand</p>
                        <br/>
                        <p style={{margin: 0}}>class Bicycle(Vehicle):</p>
                        <p style={{margin: 0}}>&nbsp;&nbsp;def __init__(self, color, speed, type):</p>
                        <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;super().__init__(color, speed)</p>
                        <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;self.type = type</p>
                    </code>
                </pre>
            </div>
            <br/>  
            <strong>Polymorphism:</strong>  <br/> 
            Explanation: Polymorphism allows objects of different classes to be treated as objects of a common superclass. Data structures can help achieve polymorphism by storing objects of various subclasses within a container, such as a list or an array.<br/> 
            Example: A list of different animals (each being an instance of a specific animal class) can be used to demonstrate polymorphism. All animals share common behaviors like making a sound.<br/> 
            <br/> 
            <div style={{background: 'white', padding: 12}}>
                <pre>
                    <code class="language-python">
                        <p style={{margin: 0}}>class Animal:</p>
                        <p style={{margin: 0}}>&nbsp;&nbsp;def make_sound(self):</p>
                        <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;pass</p>
                        <br/>
                        <p style={{margin: 0}}>class Dog(Animal):</p>
                        <p style={{margin: 0}}>&nbsp;&nbsp;def make_sound(self):</p>
                        <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;return "Woof!"</p>
                        <br/>
                        <p style={{margin: 0}}>class Cat(Animal):</p>
                        <p style={{margin: 0}}>&nbsp;&nbsp;def make_sound(self):</p>
                        <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;return "Meow!"</p>
                        <br/>
                        <p style={{margin: 0}}>animals = [Dog(), Cat()]</p>
                        <br/>
                        <p style={{margin: 0}}>for animal in animals:</p>
                        <p style={{margin: 0}}>&nbsp;&nbsp;print(animal.make_sound())</p>
                    </code>
                </pre>
            </div>
            <br/> 
            <h4 style={{color:"#11ABB0"}}>2. Create a nested dictionary of data on cars within a Car class. Extend the program to work with the dictionary by calling the following methods:</h4>
            items(), keys(), values()<br/> 
            <br/> 
            <div style={{background: 'white', padding: 12}}>
                <pre>
                    <code class="language-python">
                        <p style={{margin: 0}}>class Car:</p>
                        <p style={{margin: 0}}>&nbsp;&nbsp;def __init__(self):</p>
                        <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;self.car_data = &#123;</p>
                        <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"car1": &#123;"make": "Toyota", "model": "Camry", "year": 2022&#125;,</p>
                        <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"car2": &#123;"make": "Ford", "model": "Focus", "year": 2020&#125;,</p>
                        <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"car3": &#123;"make": "Honda", "model": "Civic", "year": 2021&#125;,</p>
                        <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;&#125;</p>
                        <br/>
                        <p style={{margin: 0}}>&nbsp;&nbsp;def get_car_data(self):</p>
                        <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;return self.car_data</p>
                        <br/>
                        <p style={{margin: 0}}>&nbsp;&nbsp;def display_items(self):</p>
                        <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;return self.car_data.items()</p>
                        <br/>
                        <p style={{margin: 0}}>&nbsp;&nbsp;def display_keys(self):</p>
                        <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;return self.car_data.keys()</p>
                        <br/>
                        <p style={{margin: 0}}>&nbsp;&nbsp;def display_values(self):</p>
                        <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;return self.car_data.values()</p>
                        <br/>
                        <p style={{margin: 0}}>my_cars = Car()</p>
                        <br/>
                        <p style={{margin: 0}}>for car, data in my_cars.get_car_data().items():</p>
                        <p style={{margin: 0}}>&nbsp;&nbsp;print(f"&#123;car&#125;: &#123;data&#125;")</p>
                        <br/>
                        <p style={{margin: 0}}>for key, value in my_cars.display_items():</p>
                        <p style={{margin: 0}}>&nbsp;&nbsp;print(f"Key: &#123;key&#125;, Value: &#123;value&#125;")</p>
                        <br/>
                        <p style={{margin: 0}}>for key in my_cars.display_keys():</p>
                        <p style={{margin: 0}}>&nbsp;&nbsp;print(f"Key: &#123;key&#125;")</p>
                        <br/>
                        <p style={{margin: 0}}>for value in my_cars.display_values():</p>
                        <p style={{margin: 0}}>&nbsp;&nbsp;print(f"Value: &#123;value&#125;")</p>
                    </code>
                </pre>
            </div>
            <br/> 
            <h4 style={{color:"#11ABB0"}}>3. Read the article by Kampffmeyer & Zschaler (2007). Develop a program which allows a user to enter the properties which they require of a design pattern, and have the program make a recommendation. Your program should use a constructor to initialise attributes and assign values to variables based on input entered by the user.</h4>
            </Card.Text>
            </Card.Body>
        </Card>
        </div>
    );
}

export default Unit7;