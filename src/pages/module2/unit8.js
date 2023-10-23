import React from 'react';
import Card from 'react-bootstrap/Card';

function Unit8({ cardVisibility, cardNoteVisibility, toggleCard, toggleNoteCard }) {
    return (
        <div>
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
        </div>
    );
}

export default Unit8;