import React from 'react';
import Card from 'react-bootstrap/Card';
import UnitHeader from '../Components/header'; 

function Unit8({ cardVisibility, cardNoteVisibility, toggleCard, toggleNoteCard }) {
    return (
        <div>
        <UnitHeader
            unit={"unit8"}
                title={"Unit 8: Cryptography and Its Use in Operating Systems"}
                toggleNoteCard={(unit) => toggleNoteCard(unit)} 
                cardNoteVisibility={cardNoteVisibility.unit8}
        />
        <Card style={{ display: cardNoteVisibility.unit8 ? 'none' : 'block' }}>
            <h3>Collaborative Discussion 2: Cryptography case study - TrueCrypt</h3>
        {/* <h3  style={{textAlign:'center'}}>Initial Post</h3> */}
        <a href='https://docs.google.com/document/d/1Rh4y1UsTp02SAtgDlWK3wKaGl2bljMxw3_qYY6VtMOM/edit'>Initial Post Link</a>
            <Card.Body style={{textAlign:'left'}}>
               
                <Card.Text style={{textAlign:'left'}}>
                </Card.Text>
            </Card.Body>
        </Card>
        </div>
    );
}

export default Unit8;