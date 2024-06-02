import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import UnitHeader from '../Components/unit_header'; 
import SectionBloc from '../Components/section_bloc';

function Unit2({ cardVisibility, cardNoteVisibility, toggleCard, toggleNoteCard }) {
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
            unit={"unit2"}
                title={"Unit 2: Object Oriented Analysis - Initial Steps towards Programming in Python"}
                toggleNoteCard={(unit) => toggleNoteCard(unit)} 
                cardNoteVisibility={cardNoteVisibility.unit2}
            />
            <Card style={{ display: cardNoteVisibility.unit2 ? 'none' : 'block' }}>
                <Card.Body style={{textAlign : 'left' }}>
                    <SectionBloc
                        section={"section1"}
                        title={"Overview and reflection"}
                        toggleSection={(section) => toggleSection(section)} 
                        sectionVisibility={sectionVisibility.section1}
                    />
                    <div class="card card-block" style={{textAlign: 'left', display: sectionVisibility.section1 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px'}}>
                    * Research the academic literature on software development which follows an agile process and prioritises security: By gainig an awareness of the opportunities for integrating software security development practices at each stage of the agile SDLC.<br/>
                    * Break down the steps involved in a process so that they may be represented as a flow chart: Through giving and receiving feed back from the professor and peers, have a better overview of the UML implementation<br/>
                    * Reading areas of an ISO/IEC Standard on security and becoming familiar with the language and concepts: Understanding the Range of Software Security Challenges: The challenges in software security are manifold, encompassing various facets highlighted by leveraging five key concepts from ISO/IEC (2018): Top Management, Vulnerability, Confidentiality, Review, Policy, and also human factors.<br/>
                    <br/><br/>
                    Upon reviewing the professor's feedback on this unit, I gained further insight into making my UML article more specific and detailed, as well as how to make it more academic. Additionally, I am still not familiar with the practice of integrating software security development practices at each stage of the Agile SDLC. While I didn't have time to participate in the unit discussion, reviewing the peer responses and key concepts from ISO/IEC (2018) helped me gain a better understanding of the range of ways in which software security can be problematic. Therefore, I plan to take measures to address this in the future.
                    </div>
                </Card.Body>
            </Card>

        </div>
    );
}

export default Unit2;
