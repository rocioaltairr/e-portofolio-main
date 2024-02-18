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
        section2: true,
        section3: true,
        section4: true,
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
                title={"Unit 5: An Introduction to Testing"}
                toggleNoteCard={(unit) => toggleNoteCard(unit)} 
                cardNoteVisibility={cardNoteVisibility.unit5}
        />
        <Card style={{ display: cardNoteVisibility.unit5 ? 'none' : 'block' }}>
            <Card.Body  style={{textAlign : 'left' }}>
            <SectionBloc
                    section={"section1"}
                    title={"Overview"}
                    toggleSection={(section) => toggleSection(section)} 
                    sectionVisibility={sectionVisibility.section1}
                />
                <div  style={{display: sectionVisibility.section1 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px' }} className='card card-block'>
                    {/* <h4 style={{color: '#1abc9c'}}>Overview</h4> */}
                    Overview:
                    <br/>
                    Evaluation of the Unit 5: An Introduction to Testing<br/>
                    This unit introduces the concepts and techniques for testing software, with a specific emphasis on security aspects.<br/>
                    <br/>
                    Relevance to the Course:<br/>
                    Understanding common attack surfaces in software helps minimize security risks during development.<br/>
                    Knowledge of industry standards and testing techniques aids in implementing best practices.<br/>
                    Learning automation tools improves testing efficiency and effectiveness.<br/>
                    <br/>
                    Strengths:<br/>

                    Broad coverage of essential testing concepts, including security-specific aspects.<br/>
                    Practical application through exploration of Python tools and automation techniques.<br/>
                    Alignment with industry standards and practices.<br/>
                    Clear learning objectives and outcome statements.<br/>
                    <br/>
                    Potential Areas for Improvement:<br/>

                    Specificity of the content towards the overall course deliverables could be further emphasized.<br/>
                    The level of detail regarding each testing technique might need adjustment based on the target audience and course goals.<br/>
                    Additional resources or references could be provided for deeper exploration of topics.<br/>
                    <br/>
                    Overall:<br/>

                    Unit 5 provides a comprehensive introduction to software testing, particularly focusing on security aspects. By combining theoretical knowledge with practical tools and industry standards, it equips learners with valuable skills for developing secure software. The unit could be further improved by tailoring the content to the specific course context and providing additional resources for deeper learning.<br/>
                    
                    <p></p>
                    <br/>
                </div>

                <SectionBloc
                    section={"section2"}
                    title={"Reading list reflection"}
                    toggleSection={(section) => toggleSection(section)} 
                    sectionVisibility={sectionVisibility.section2}
                />
                <div  style={{display: sectionVisibility.section2 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px' }} className='card card-block'>
                <a  style={{color: '#11ABB0'}} href='https://docs.google.com/document/d/11ZuuRv1WAvMUsLHFml0QoN5ZdRo9z7odqsef3hmVGoo/edit?usp=sharing'>Explore more about</a>
                    
                       
                </div>

                <SectionBloc
                    section={"section3"}
                    title={"Testing with Python"}
                    toggleSection={(section) => toggleSection(section)} 
                    sectionVisibility={sectionVisibility.section3}
                />
                <div  style={{display: sectionVisibility.section3 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px' }} className='card card-block'>
                    <br/>
                    <h4 style={{color: '#1abc9c'}}>Testing in Python: Question 1</h4>
                    <br/>
                    <div style={{paddingLeft: '20px', paddingRight: '20px'}}>
                        What amendments have you made to the code?<br/>
                        <img style={{    width: '500px'}} src={python1_q}></img>
                        <br/>
                    </div>
                    <br/>

                    <h4 style={{color: '#1abc9c'}}>Exploring Linters to Support Testing in Python: Question 2</h4>
                    <br/>
                    <div style={{paddingLeft: '20px', paddingRight: '20px'}}>
                        Review each of the code errors returned.<br/>
                        Can you correct each of the errors identified by pylint? <br/>
                        
                        <img style={{    width: '500px'}} src={python2_q}></img><br/><br/>
                        <img style={{    width: '500px'}} src={q_python2_1}></img><br/>
                    </div>
                    <br/>

                    <h4 style={{color: '#1abc9c'}}>Exploring Linters to Support Testing in Python: Question 3</h4>
                    <br/>
                    <div style={{paddingLeft: '20px', paddingRight: '20px'}}>
                        What amendments have you made to the code?<br/>
                        Remove the number before each line and make correct indented block
                    </div>

                    <br/>
                    <h4 style={{color: '#1abc9c'}}>Exploring Linters to Support Testing in Python: Question 4</h4>
                    <br/>
                    
                    <div style={{paddingLeft: '20px', paddingRight: '20px'}}>
                        <p style={{color: '#1abc9c'}}>Run mccabe on sums.py. What is the result?</p>
                        <p>Everything passed</p>
                        <p style={{color: '#1abc9c'}}>Run mccabe on sums2.py. What is the result?</p>
                        <p>File "sums2.py", line 8, in test_sum_tuple AssertionError: Should be 5</p>
                        <p style={{color: '#1abc9c'}}>What are the contributors to the cyclomatic complexity in each piece of code?</p>
                    </div>
                    
                    <p></p>
                    <br/>
                </div>
                <SectionBloc
                    section={"section4"}
                    title={"Exploring the Cyclomatic Complexity’s Relevance Today"}
                    toggleSection={(section) => toggleSection(section)} 
                    sectionVisibility={sectionVisibility.section4}
                />
                <div  style={{display: sectionVisibility.section4 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px' }} className='card card-block'>
                    <img style={{width: '300px'}} src={Cyclomatic}></img>
                </div>
            </Card.Body>
        </Card>
        </div>
    );
}

export default Unit5;