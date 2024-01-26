import React from 'react';
import Card from 'react-bootstrap/Card';
import UnitHeader from '../Components/unit_header'; 

function Unit1({ cardNoteVisibility, toggleNoteCard }) {
    return (
        <div>
            <UnitHeader
            unit={"unit1"}
                title={"Unit 1: Introduction to Secure Software Development"}
                toggleNoteCard={(unit) => toggleNoteCard(unit)} // Adjust the function signature
                cardNoteVisibility={cardNoteVisibility.unit1}
            />
            
            <Card style={{ display: cardNoteVisibility.unit1 ? 'none' : 'block' }}>
                <Card.Body style={{textAlign: 'left'}}>
                    <Card.Title></Card.Title>
                    <h3>Collaborative Discussion 1: UML flowchart</h3>
                    <a  href='https://docs.google.com/document/d/1UggymmzP9JBBnC2NdjbyTMB62DMI9GoomB2_85eS118/edit'>Initial Post Link</a>
                    <Card.Text style={{textAlign:'left'}}>
                        
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Unit1;
