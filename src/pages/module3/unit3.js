import React from 'react';
import Card from 'react-bootstrap/Card';
import UnitHeader from '../Components/unit_header'; 

function Unit3({ cardNoteVisibility, toggleNoteCard }) {
    return (
        <div>
        <UnitHeader
            unit={"unit3"}
                title={"Unit 3: Programming Languages: History, Concepts & Design"}
                toggleNoteCard={(unit) => toggleNoteCard(unit)} 
                cardNoteVisibility={cardNoteVisibility.unit3}
            />
            
        <Card style={{ display: cardNoteVisibility.unit3 ? 'none' : 'block'}}>
            <Card.Body style={{textAlign : 'left' }}>
            <h3>Team Discussion: What is a Secure Programming Language?</h3>
            <br/>
            <a href='https://docs.google.com/document/d/1ELT3h0iFo3Earx-TLm81I6p99Xhv_KJby51W3hc1jTw/edit'>Team activity: Discussion Link</a>
            <br/><br/>
                <h3>Codio</h3><br/>
                <h3 style={{color: '#11ABB0'}}>Exploring Python tools and features</h3><br/>
                <h3>Buffer Overflow in C - partI</h3>
                <div style={{ padding:' 20px'}}>
                    <p style={{color: '#11ABB0'}}>What happens?</p>
                    After runnig ./bufoverflow, you could Enter name: because the buffer is 8,
                    if you enter more than 8 charactor it would overflow.<br/>

                    <p style={{color: '#11ABB0'}}>What does the output message mean?</p>
                    *** stack smashing detected ***: it means overflow.<br/>
                    <br/>
                </div>
                <h3>Buffer Overflow in Python - partII</h3>
                <div style={{ padding:' 20px'}}>
                    <p style={{color: '#11ABB0'}}>What happens?</p>
                    
                    Module over_flow output:<br/>
                    Trailing whitespace (trailing-whitespace)<br/>
                    Final newline missing (missing-final-newline)<br/>
                    Missing module docstring (missing-module-docstring)<br/>

                    <p style={{color: '#11ABB0'}}>What does the output message mean?</p>
                    You must add whitespace and newline for correct python format, and add docstring description on the top file 
                </div>
                <h3  style={{color: '#11ABB0'}}>Codio Activity: The Producer-Consumer Mechanism</h3>
                <Card.Text style={{textAlign:'left'}}>
                </Card.Text>
            </Card.Body>
        </Card>
        </div>
    );
}

export default Unit3;