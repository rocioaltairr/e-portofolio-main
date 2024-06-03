import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import UnitHeader from '../Components/unit_header'; 
import SectionBloc from '../Components/section_bloc'; 

function Unit10({ cardVisibility, cardNoteVisibility, toggleCard, toggleNoteCard }) {
    const [sectionVisibility, setSectionVisibility] = useState({
        section1: true,
        section2: true,
        section3: true
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
                unit={"unit10"}
                    title={"Unit 10: Software Quality Monitoring in Python"}
                    toggleNoteCard={(unit) => toggleNoteCard(unit)} 
                    cardNoteVisibility={cardNoteVisibility.unit10}
            />
            <Card style={{ display: cardNoteVisibility.unit10 ? 'none' : 'block' }}>
                <Card.Body>
                    <SectionBloc
                        section={"section1"}
                        title={"Overview and reflection"}
                        toggleSection={(section) => toggleSection(section)} 
                        sectionVisibility={sectionVisibility.section1}
                    />
                    <div style={{display: sectionVisibility.section1 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px' }} className='card card-block'>
                        In Unit 10, I delved into software quality monitoring using Python, mastering the implementation of high-quality code through Python linters. 
                        Exploring the evolution of software quality concepts and techniques for project. The seminar, deepened my understanding of quality management, emphasizing adherence to ISO/IEC 25010 standards 
                        and addressing technical debt. Through discussions on verification, validation, and practical strategies like code review and automated checkers, 
                        I gained comprehensive insights into maintaining top software quality throughout development.
                    </div>
                    <SectionBloc
                        section={"section2"}
                        title={"Activity: Using Linters to Achieve Python Code Quality"}
                        toggleSection={(section) => toggleSection(section)} 
                        sectionVisibility={sectionVisibility.section2}
                    />
                    <div style={{display:'flex', textAlign: 'left', display: sectionVisibility.section2 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px'}}>
                    pylint:<br/><br/>

                    Strengths: Offers comprehensive analysis covering style, potential errors, and code design. Provides detailed feedback on each identified issue, including suggestions for improvement. <br/>
                    Weaknesses: Can sometimes produce a high number of false positives, leading to potential confusion for developers. May be overly strict in enforcing certain style guidelines. <br/>
                    Conclusion: Effective for in-depth code quality assessment, but requires careful interpretation of results to distinguish between genuine issues and false positives.<br/>
                    <br/>
                    pyflakes:<br/><br/>

                    Strengths: Focuses on detecting unused imports, variables, and undefined names, providing straightforward feedback on code cleanliness and potential issues. <br/>
                    Weaknesses: Limited in scope compared to pylint, as it primarily identifies unused code elements and undefined names without offering style or design feedback. <br/>
                    Conclusion: Effective for identifying unused code elements and potential issues related to variable names and imports, but may not provide as comprehensive an analysis as pylint.<br/>
                    <br/>
                    pycodestyle:<br/><br/>

                    Strengths: Enforces consistent code formatting according to the PEP 8 style guide, flagging issues related to indentation, line length, and whitespace usage. <br/>
                    Weaknesses: Focuses solely on code formatting and may not catch other types of code quality issues such as potential errors or design flaws. <br/>
                    Conclusion: Effective for ensuring consistent code style and readability, but should be used in conjunction with other tools for a more comprehensive code quality assessment.<br/>
                    <br/>
                    pydocstyle:<br/><br/>

                    Strengths: Ensures proper documentation practices by identifying missing docstrings and providing recommendations for improving documentation. <br/>
                    Weaknesses: Limited in scope to documentation conventions and does not provide feedback on other aspects of code quality such as style or potential errors. <br/>
                    Conclusion: Effective for promoting good documentation practices, particularly in projects where clear and consistent documentation is essential, but should be used alongside other tools for a complete code quality assessment.<br/><br/>
                        <a  style={{color: '#11ABB0'}} href='https://github.com/rocioaltairr/Activity-Using-Linters-to-Achieve-Python-Code-Quality/tree/main' target="_blank">
                            GitHub Link
                        </a>
                    </div>
                    <SectionBloc
                        section={"section3"}
                        title={"e-Portfolio Activity: Reflection on Software Quality"}
                        toggleSection={(section) => toggleSection(section)} 
                        sectionVisibility={sectionVisibility.section3}
                    />
                    <div style={{display:'flex', textAlign: 'left', display: sectionVisibility.section3 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px'}}>
                        <a  style={{color: '#11ABB0'}} href='https://docs.google.com/document/d/1GaMRAcWZGeDNUJaBvuTA1RO-nTY0RpYxf3ZyX-x9xpM/edit?usp=sharing' target="_blank">
                            See more about - ePortfolio Activity: Reflection on Software Quality
                        </a>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Unit10;