import React from 'react';
import Card from 'react-bootstrap/Card';
import activity_uml from '../images/module2/Activity Diagram.png';
import UnitHeader from '../Components/header'; 

function Unit4({ cardVisibility, cardNoteVisibility, toggleNoteCard }) {
    return (
        <div>
        <UnitHeader
            unit={"unit4"}
                title={"Unit 4: Exploring Programming Language Concepts"}
                toggleNoteCard={(unit) => toggleNoteCard(unit)} // Adjust the function signature
                cardNoteVisibility={cardNoteVisibility.unit4}
        />

        <Card style={{ display: cardNoteVisibility.unit4 ? 'none' : 'block' }}>
            <Card.Body  style={{textAlign : 'left' }}>

Programming language concepts<br/>
Read Larson (2018) and Weidman (n.d.) then answer the questions below, adding them as evidence to your e-portfolio. You may want to complete this activity in conjunction with or after completing Seminar 2 preparation.
<br/>
What is ReDOS and what part do ‘Evil Regex’ play?<br/>
What are the common problems associated with the use of regex? How can these be mitigated?<br/>
How and why could regex be used as part of a security solution?<br/>
                <Card.Title><h3 style={{color:"white"}}></h3></Card.Title>
                <Card.Text style={{textAlign:'left'}}>
                </Card.Text>
            </Card.Body>
        </Card>
        </div>
    );
}

export default Unit4;