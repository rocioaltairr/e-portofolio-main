import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import UnitHeader from '../Components/unit_header'; 
import SectionBloc from '../Components/section_bloc';

function Unit2({ cardNoteVisibility, toggleNoteCard }) {
    const [sectionVisibility, setSectionVisibility] = useState({
        section1: true,
        section2: true
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
                title={"Unit 2: Research Questions, the Literature Review and the Research Proposal"}
                toggleNoteCard={(unit) => toggleNoteCard(unit)} 
                cardNoteVisibility={cardNoteVisibility.unit2}
            />
            <Card style={{ display: cardNoteVisibility.unit2 ? 'none' : 'block' }}>
                <Card.Body style={{textAlign : 'left' }}>
                <SectionBloc
                        section={"section1"}
                        title={"Unit 2: Literature Review and Research Proposal Outlines"}
                        toggleSection={(section) => toggleSection(section)} 
                        sectionVisibility={sectionVisibility.section1}
                    />
                <div class="card card-block" style={{textAlign: 'left', display: sectionVisibility.section1 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px'}}>
                <a  style={{color: '#11ABB0'}} href='https://docs.google.com/document/d/1S7PoZmDon2OTju8i0vtBqdW0gyVebTSNZ4OJFyVutCA/edit?usp=sharing' target="_blank">
                    See more about Literature Review and Research Proposal Outlines
                </a>
                </div>
                <SectionBloc
                        section={"section2"}
                        title={"Unit 2: Literature Review and Research Proposal Outlines"}
                        toggleSection={(section) => toggleSection(section)} 
                        sectionVisibility={sectionVisibility.section2}
                    />
                <div class="card card-block" style={{textAlign: 'left', display: sectionVisibility.section2 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px'}}>
                <a  style={{color: '#11ABB0'}} href='https://docs.google.com/document/d/1S7PoZmDon2OTju8i0vtBqdW0gyVebTSNZ4OJFyVutCA/edit?usp=sharing' target="_blank">
                    I appreciate teacher's insights on the fragmented nature of my literature review pieces. I understand the importance of a fluid narrative and I made an effort to improve this aspect in the rest of lierature reviews and projects overviews, and will keep this in mind in my academic writing. I guess that having a clear list of points and their logical relationship and structure might help me. But I will also focus on writing smoother transitions between sections and ensuring that my arguments and evidence are more cohesively presented. 
                </a>
                </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Unit2;
