import React from 'react';
import Card from 'react-bootstrap/Card';
import UnitHeaderTwo from '../Components/unit_header_two';

function Unit8({ cardVisibility, cardNoteVisibility, toggleCard, toggleNoteCard }) {
    return (
        <div>
        <UnitHeaderTwo
            unit={"unit8"}
                title={"Unit 8: Data Structures and Data Search in Practic"}
                toggleNoteCard={(unit) => toggleNoteCard(unit)}
                toggleCard ={(unit) => toggleCard(unit)}
                cardNoteVisibility={cardNoteVisibility.unit8}
                cardVisibility={cardVisibility.unit8}
            />
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
                <Card.Title><h3 style={{color:"white"}}>e-Portfolio activities</h3></Card.Title>
                <Card.Title><h3 style={{color:"white"}}>Title: Errors and Data Structures</h3></Card.Title>
                <Card.Text style={{textAlign:'left'}}>
                <strong>Learning Python - Recursion</strong><br/>
                The recursive pattern is to select the largest value between the first number in the list and get_max which takes the rest of the list. The base case is when the list only has one number in it. In this case, return the number in the list. Here is one example of the solution:
                <div style = {{background: 'white', padding: 12}}>
                    <pre>
                        <code class="language-python">
                        <p style={{margin: 0}}>if len(nums) == 1:</p>
                        <p style={{margin: 0}}>&nbsp;&nbsp;return nums[0]</p>
                        <p style={{margin: 0}}>else:</p>
                        <p style={{margin: 0}}>&nbsp;&nbsp;return max(nums[0], get_max(nums[1:]))</p>
                        <br/>
                        </code>
                    </pre>
                </div>
                <br/>
                <strong>Encapsulation</strong><br/>
                Define the Country class which has attributes for name, capital, population, and continent. Please use the Python convention for making these attributes private.
                <div style = {{background: 'white', padding: 12}}>
                    <pre>
                        <code class="language-python">
                        <p style={{margin: 0}}>class Country:</p>
                        <p style={{margin: 0}}>&nbsp;&nbsp;def __init__(self, name, capital, population, continent):</p>
                        <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;self._name = name</p>
                        <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;self._capital = capital</p>
                        <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;self._population = population</p>
                        <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;self._continent = continent</p>
                        <br/>
                        <p style={{margin: 0}}>my_country = Country('France', 'Paris', 67081000, 'Europe')</p>
                        </code>
                    </pre>
                </div>
                <br/>

                Activity 1: Errors<br/>
                Incorporate the following code into a Python program to handle exceptions.<br/>

                <div style = {{background: 'white', padding: 12}}>
                    <pre>
                        <code class="language-python">
                        <p style={{margin: 0}}>try:</p>
                        <p style={{margin: 0}}>&nbsp;&nbsp;number = int(input("Enter a number: "))</p>
                        <p style={{margin: 0}}>&nbsp;&nbsp;result = 10 / number</p>
                        <p style={{margin: 0}}>except ValueError:</p>
                        <p style={{margin: 0}}>&nbsp;&nbsp;print("Invalid input. Please enter a valid number.")</p>
                        <p style={{margin: 0}}>except ZeroDivisionError:</p>
                        <p style={{margin: 0}}>&nbsp;&nbsp;print("You cannot divide by zero.")</p>
                        <p style={{margin: 0}}>except Exception as e:</p>
                        <p style={{margin: 0}}>&nbsp;&nbsp;print(f"An error occurred: &#123;e&#125;")</p>
                        <p style={{margin: 0}}>else:</p>
                        <p style={{margin: 0}}>&nbsp;&nbsp;print(f"Result: &#123;result&#125;")</p>
                        <p style={{margin: 0}}>finally:</p>
                        <p style={{margin: 0}}>&nbsp;&nbsp;print("Execution completed.")</p>
                        </code>
                    </pre>
                </div>
                </Card.Text>
            </Card.Body>
        </Card>
        </div>
    );
}

export default Unit8;