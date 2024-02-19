import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import UnitHeader from '../Components/unit_header'; 
import SectionBloc from '../Components/section_bloc';
import IndividualProject from '../Development Individual Project.pdf'

function Unit11({ cardVisibility, cardNoteVisibility, toggleCard, toggleNoteCard }) {
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
            unit={"unit11"}
                title={"Unit 11: Future trends in Secure Software Development"}
                toggleNoteCard={(unit) => toggleNoteCard(unit)} 
                cardNoteVisibility={cardNoteVisibility.unit11}
        />
        <Card style={{ display: cardNoteVisibility.unit11 ? 'none' : 'block' }}>
            <Card.Body style={{textAlign: 'left'}}>
                <SectionBloc
                    section={"section1"}
                    title={"Overview and reflection"}
                    toggleSection={(section) => toggleSection(section)} 
                    sectionVisibility={sectionVisibility.section1}
                />
                <div class="card card-block" style={{textAlign: 'left', display: sectionVisibility.section1 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px'}}>
                Overview:<br/>
                * Discuss future trends in the areas of secure design, development, programming languages and operating systems.<br/>
                * Explain what is meant by Fog Computing, the Internet of Things and Cyber Physical Systems.<br/>
                * Explore systems and solutions that can be investigated as possible research topics or fields.<br/>
                <br/>
                

                </div>
                
                <SectionBloc
                    section={"section2"}
                    title={"Development Individual Project: Coding Output and Evidence of Testing"}
                    toggleSection={(section) => toggleSection(section)} 
                    sectionVisibility={sectionVisibility.section2}
                />

                <div class="card card-block" style={{textAlign: 'left', display: sectionVisibility.section2 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px'}}>
                    <div style={{display:'flex', flexDirection:'column'}}>
                        <a tyle={{color: '#11ABB0'}} href={IndividualProject} download="Development Individual Project" target='_blank'>
                            Download file
                        </a>
                        <a  style={{color: '#11ABB0'}} href='https://github.com/rocioaltairr/The-CURE-Store-Apis'>
                            Go to Github Repository
                        </a>
                    </div>
                </div>

                <SectionBloc
                    section={"section3"}
                    title={"Monolithic vs Microkernel: A Continuing Debate in Operating System Architecture"}
                    toggleSection={(section) => toggleSection(section)} 
                    sectionVisibility={sectionVisibility.section3}
                />
                <div class="card card-block" style={{textAlign: 'left', display: sectionVisibility.section3 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px'}}>
                    <a  style={{color: '#11ABB0'}} href='https://docs.google.com/document/d/1eIGXYZfeDtpr_zg4_9KFR_wjnJFnfUrLIQ3udw_ea6w/edit?usp=sharing'>
                        Explore more
                    </a>
                </div>
            </Card.Body>
        </Card>
        </div>
    );
}

export default Unit11;