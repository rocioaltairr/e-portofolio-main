import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
// import activity_uml from '../images/module2/Activity Diagram.png';
import UnitHeader from '../Components/unit_header'; 
import SectionBloc from '../Components/section_bloc';

function Unit4({ cardVisibility, cardNoteVisibility, toggleNoteCard }) {
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
                unit={"unit4"}
                    title={"Unit 4: Estimating Tools and Risk Assessment"}
                    toggleNoteCard={(unit) => toggleNoteCard(unit)} // Adjust the function signature
                    cardNoteVisibility={cardNoteVisibility.unit4}
            />
            <Card style={{ display: cardNoteVisibility.unit4 ? 'none' : 'block' }}>
                <Card.Body  style={{textAlign : 'left' }}>
                    <SectionBloc
                        section={"section1"}
                        title={"Overview and reflection"}
                        toggleSection={(section) => toggleSection(section)} 
                        sectionVisibility={sectionVisibility.section1}
                    />
                    <div style={{display: sectionVisibility.section1 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px' }} className='card card-block'>
                    In Unit 4, I delved into the realm of risk assessment and estimation in large software projects. <br/>
                    Through discussions and practical exercises, I gained insights into identifying, evaluating, and mitigating risks inherent in global software development. <br/>
                    Additionally, I explored various estimating tools and methodologies essential for producing accurate project estimates. 
                    This unit equipped me with the skills to select appropriate tools for project estimation, assess their usefulness, and effectively manage risks throughout the project lifecycle.
                    </div>
                    <SectionBloc
                        section={"section2"}
                        title={"Wiki Entry: Risks and Risk Mitigation"}
                        toggleSection={(section) => toggleSection(section)} 
                        sectionVisibility={sectionVisibility.section2}
                    />
                    <div class="card card-block" style={{textAlign: 'left', display: sectionVisibility.section2 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px'}}>
                        <a  style={{color: '#11ABB0'}} href='https://docs.google.com/document/d/1uNSomsLn9Bmwzb5gv6mBHtivVvIVLiF-/edit?usp=sharing&ouid=101567821305826151050&rtpof=true&sd=true' target="_blank">
                        See more about - Risks and risk mitigation
                        </a>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Unit4;