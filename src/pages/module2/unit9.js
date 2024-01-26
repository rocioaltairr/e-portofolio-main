import React from 'react';
import Card from 'react-bootstrap/Card';
import UnitHeaderTwo from '../Components/unit_header_two';

function Unit9({ cardVisibility, cardNoteVisibility, toggleCard, toggleNoteCard }) {
    return (
        <div>
        <UnitHeaderTwo
            unit={"unit9"}
                title={"Unit 9: Packaging and Testing"}
                toggleNoteCard={(unit) => toggleNoteCard(unit)}
                toggleCard ={(unit) => toggleCard(unit)}
                cardNoteVisibility={cardNoteVisibility.unit9}
                cardVisibility={cardVisibility.unit9}
            />
        <Card style={{ display: cardNoteVisibility.unit9 ? 'none' : 'block' }}>
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
        <Card style={{ display: cardVisibility.unit9 ? 'none' : 'block' }}>
            <Card.Body>
                <Card.Title><h3 style={{color:"white"}}>e-Portfolio activities</h3></Card.Title>
                <Card.Text style={{textAlign:'left'}}>
                Activity 1<br/>
                How relevant is the cyclomatic complexity in object oriented systems? Which alternative metrics do you consider to be more reflective of the complexity of a piece of code, in comparison to the number of independent paths through a program? Support your response using reference to the related academic literature.
                <br/>
                Activity 2<br/>
                To what extent is cyclomatic complexity relevant when developing object-oriented code?<br/>
                <br/>
                Activity 3<br/>
                What is the cyclomatic complexity of the following piece of code?<br/>
                public static string IntroducePerson(string name, int age)<br/>
                {/* {
                    var response = $"Hi! My name is {name} and I'm {age} years old.";

                    if (age >= 18)
                        response += " I'm an adult.";

                    if (name.Length > 7)
                        response += " I have a long name.";

                    return response;
                } */}
                Source: Schultz, C. (2021) Cyclomatic Complexity Defined Clearly, With Examples. LinearB.<br/>
                <br/>
                Activity 4<br/>
                Extend the following program to test accuracy of operations using the assert statement.<br/>

                # Python String Operations<br/>
                str1 = 'Hello'<br/>
                str2 ='World!'<br/>

                # using +<br/>
                print('str1 + str2 = ', str1 + str2)<br/>

                # using *<br/>
                print('str1 * 3 =', str1 * 3)<br/>

                Source: Progamiz. (n.d.) Python Strings.<br/>
                </Card.Text>
            </Card.Body>
        </Card>
        </div>
    );
}

export default Unit9;