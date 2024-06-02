import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import UnitHeader from '../Components/unit_header'; 
import SectionBloc from '../Components/section_bloc';

function Unit1({ cardNoteVisibility, toggleNoteCard }) {
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
            unit={"unit1"}
                title={"Unit 1: Introduction to Secure Software Development"}
                toggleNoteCard={(unit) => toggleNoteCard(unit)} 
                cardNoteVisibility={cardNoteVisibility.unit1}
            />
            <Card style={{ display: cardNoteVisibility.unit1 ? 'none' : 'block' }}>
                <Card.Body style={{textAlign : 'left' }}>
                    <SectionBloc
                        section={"section1"}
                        title={"Overview and reflection"}
                        toggleSection={(section) => toggleSection(section)} 
                        sectionVisibility={sectionVisibility.section1}
                    />
                    <div class="card card-block" style={{textAlign: 'left', display: sectionVisibility.section1 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px'}}>
                    * Management Approaches to Software Development: Explore the limitations of traditional methods like Waterfall and discover strategies for modern approaches such as Agile.<br/>
                    * Unified Modeling Language (UML): Dive into the world of UML and its practical application in software development, illustrated through the creation of a flow chart.<br/>
                    * Industry Standards for Secure Software Development: Discover the significance of industry standards like OWASP for developing secure software.<br/>
                    * Fostering a Risk-Aware Culture: GDPR Perspective: Understand the importance of cultivating a risk-aware culture within organisations, with insights drawn from GDPR compliance.<br/>
                    <br/><br/>
                    In this module, we learned about the waterfall approach, which emphasises less frequent testing, and how agile would be a better choice for security. We also learned about UML and implemented it in the team discussion, where we discussed OWASP and created a flowchart of the steps that may have led to the weaknesses occurring. Through this approach, I gained a deeper understanding of the OWASP concept, making it a good starting point for this module.<br/>
                    In the lectures, there was a topic on Awareness of Cybersecurity Challenges, which I related to a lot. Since technology is evolving rapidly, even with advancements in semiconductors and supercomputers that could potentially increase processing speeds, there are significant security challenges to consider in the future.<br/>
                    </div>
                    <SectionBloc
                        section={"section2"}
                        title={"Collaborative Discussion 1: UML flowchart"}
                        toggleSection={(section) => toggleSection(section)} 
                        sectionVisibility={sectionVisibility.section2}
                    />
                    <div class="card card-block" style={{textAlign: 'left', display: sectionVisibility.section2 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px'}}>
                        <a  style={{color: '#11ABB0'}} href='https://docs.google.com/document/d/1UggymmzP9JBBnC2NdjbyTMB62DMI9GoomB2_85eS118/edit'>
                            Explore Initial Post
                        </a>
                    </div>

                </Card.Body>
            </Card>
        </div>
    );
}

export default Unit1;
