import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import UnitHeader from '../Components/unit_header'; 
import SectionBloc from '../Components/section_bloc';
import FinalReflection from '../Final Reflection of Secure Software Development module.pdf'


function Unit12({ cardNoteVisibility, toggleNoteCard }) {
    const [sectionVisibility, setSectionVisibility] = useState({
        section1: true,
        section2: true,
        section3: true,
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
                unit={"unit12"}
                    title={"Unit 12: The Case for the Future Direction of Software Engineering Project Management"}
                    toggleNoteCard={(unit) => toggleNoteCard(unit)} 
                    cardNoteVisibility={cardNoteVisibility.unit12}
            />
            <Card style={{ display: cardNoteVisibility.unit12 ? 'none' : 'block' }}>
                <Card.Body style={{textAlign: 'left'}}>
                    <SectionBloc
                        section={"section1"}
                        title={"Unit 12 Seminar Preparation"}
                        toggleSection={(section) => toggleSection(section)} 
                        sectionVisibility={sectionVisibility.section1}
                    />
                    <div class="card card-block" style={{textAlign: 'left', display: sectionVisibility.section1 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px'}}>
                        In my opinion, the rise of artificial intelligence (AI) and technology integration, alongside potential cryptocurrency impact, will redefine software engineering project management (SEPM).
                        AI optimizes resource allocation and automation, emphasizing the need for AI-skilled project managers. Traditional principles remain vital, with Agile methodologies
                         evolving to incorporate new concepts like AIOps. Security and compliance gain importance.<br/>
                        <a  style={{color: '#11ABB0'}} href='https://docs.google.com/document/d/1wCSPNnaCH5YO06v3_tZsdHKppU45ck18RT89V5rQMJU/edit' target="_blank">
                            See more about Unit 12 Seminar Preparation: Future Trends in SEPM
                        </a>
                    </div>
                    <SectionBloc
                        section={"section2"}
                        title={"Individual e-Portfolio Submission"}
                        toggleSection={(section) => toggleSection(section)} 
                        sectionVisibility={sectionVisibility.section2}
                    />
                    <div class="card card-block" style={{textAlign: 'left', display: sectionVisibility.section2 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px'}}>
                    This assessment focuses on the reflections on being part of a development team and individual contributions throughout this module, 
                    as well as the evaluation of the team's work in units 6 and 11.<br/>
                        <iframe src="https://docs.google.com/document/d/1kDq6YGNZwfLPe2tH545uufEWvq9Zigct-Z2_pBOXyI8/edit" width="100%" height="600px" frameborder="0"></iframe>
                        {/* <a  style={{color: '#11ABB0'}} href='' target="_blank">
                            See more about final reflection
                        </a> */}
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Unit12;