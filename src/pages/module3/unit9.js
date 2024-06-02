import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import UnitHeader from '../Components/unit_header'; 
import SectionBloc from '../Components/section_bloc';

function Unit9({ cardNoteVisibility, toggleNoteCard }) {
    const [sectionVisibility, setSectionVisibility] = useState({
        section1: true,
        section2: true,
    });

    const toggleSection = (unit) => {
        setSectionVisibility((prevState) => ({
          ...prevState,
          [unit]: !prevState[unit],
        }));
      };

    return (
        <div>
        <UnitHeader
            unit={"unit9"}
                title={"Unit 9: Developing an API for a Distributed Environment"}
                toggleNoteCard={(unit) => toggleNoteCard(unit)} 
                cardNoteVisibility={cardNoteVisibility}
        />
        <Card style={{ display: cardNoteVisibility ? 'none' : 'block' }}>
            <Card.Body>
            <SectionBloc
                section={"section1"}
                title={"Overview and reflection"}
                toggleSection={(section) => toggleSection(section)} 
                sectionVisibility={sectionVisibility.section1}
            />
            <div class="card card-block" style={{textAlign: 'left', display: sectionVisibility.section1 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px'}}>
            * Create an API and use it to create and read records :Learning implementation of CRUD operations (Create, Read, Update, Delete) in a Flask API using SQLAlchemy and Flask-Smorest.<br/>
* Become familiar with the capabilities of Python’s flask library<br/>
* Design an ontology which can be used in standardised service deployments: Through the seminar the professor gave us some examples of the ontology and in the collaboration discussion we also presented an ontology design which captures the weaknesses of TrueCrypt, <br/>
            </div>
            </Card.Body>
        </Card>
        </div>
    );
}

export default Unit9;