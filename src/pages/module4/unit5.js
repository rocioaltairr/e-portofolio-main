import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import UnitHeader from '../Components/unit_header'; 
import python1_q from './q_python1.png' 
import q_python2_1 from './q_python2_1.png' 
import python2_q from './q_python2.png' 
import SectionBloc from '../Components/section_bloc'; 
import Cyclomatic from './Cyclomatic Complexity’s.png' 

function Unit5({ cardNoteVisibility, toggleNoteCard }) {
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
                unit={"unit5"}
                    title={"Unit 5: User Experience"}
                    toggleNoteCard={(unit) => toggleNoteCard(unit)} 
                    cardNoteVisibility={cardNoteVisibility.unit5}
            />
            <Card style={{ display: cardNoteVisibility.unit5 ? 'none' : 'block' }}>
                <Card.Body  style={{textAlign : 'left' }}>
                    <SectionBloc
                        section={"section1"}
                        title={"Overview and reflectionn"}
                        toggleSection={(section) => toggleSection(section)} 
                        sectionVisibility={sectionVisibility.section1}
                    />
                    <div class="card card-block" style={{textAlign: 'left', display: sectionVisibility.section1 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px'}}>
                        In Unit 5, the Lecturecast provided valuable insights into User Experience (UX) metrics, emphasizing effectiveness, efficiency, and satisfaction as 
                        crucial components. It also highlighted the roles of key entities like the Product Owner and Project Manager in ensuring optimal UX. <br/>
                        Additionally, essential aspects of project planning, governance strategies, communication plans, and quality assurance were discussed, underscoring their significance
                        in enhancing user satisfaction. <br/>
                        Furthermore, the integration of Python's Test-driven Development (TDD) capabilities was explored as a means to align technical 
                        practices with UX objectives. <br/>
                        Overall, the unit impowered me the knowledge and skills to craft effective project plans, define UX strategies, and implement TDD methodologies to deliver exceptional user experiences.
                    </div>
                    <SectionBloc
                        section={"section2"}
                        title={"Collaborative Discussion 2: Factors Affecting User Experience"}
                        toggleSection={(section) => toggleSection(section)} 
                        sectionVisibility={sectionVisibility.section2}
                    />
                    <div  style={{display: sectionVisibility.section2 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px' }} className='card card-block'>
                        <a  style={{color: '#11ABB0'}} href='https://docs.google.com/document/d/17PZowTXugbfBjtFAhZaak5SRPZWSFTt0/edit' target="_blank">
                            See more about Collaborative Discussion 2: Factors Affecting User Experience Initial Post
                        </a>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Unit5;