import React from 'react';
import Card from 'react-bootstrap/Card';
import UnitHeaderTwo from '../Components/unit_header_two';

function Unit10({ cardVisibility, cardNoteVisibility, toggleCard, toggleNoteCard }) {
    return (
        <div>
            <UnitHeaderTwo
                unit={"unit10"}
                title={"Unit 10: Testing Code in Practice"}
                toggleNoteCard={(unit) => toggleNoteCard(unit)}
                toggleCard ={(unit) => toggleCard(unit)}
                cardNoteVisibility={cardNoteVisibility.unit10}
                cardVisibility={cardVisibility.unit10}
            />
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
        </div>
    );
}

export default Unit10;