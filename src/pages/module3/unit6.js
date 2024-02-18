import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import UnitHeader from '../Components/unit_header'; 
import SectionBloc from '../Components/section_bloc'; 
import PeerReview from '../peer_review.pdf'

function Unit6({ cardVisibility, cardNoteVisibility, toggleCard, toggleNoteCard }) {
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
            unit={"unit6"}
                title={"Unit 6: Using Linters to Support Python Testing"}
                toggleNoteCard={(unit) => toggleNoteCard(unit)} // Adjust the function signature
                cardNoteVisibility={cardNoteVisibility.unit6}
        />
        <Card style={{ display: cardNoteVisibility.unit6 ? 'none' : 'block' }}>
            <Card.Body  style={{textAlign : 'left' }}>
                <Card.Text style={{textAlign:'left'}}>
                    <SectionBloc
                            section={"section1"}
                            title={"Overview and reflection"}
                            toggleSection={(section) => toggleSection(section)} 
                            sectionVisibility={sectionVisibility.section1}
                        />
                        <div style={{display: sectionVisibility.section1 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px' }} className='card card-block'>
                            Overview:<br/><br/>
                            * Be familiar with using linters to support quality Python code development: This unit I explored essential linters technologies in Python that enhance the development of high-quality code. Quality code not only ensures functionality but also contributes to security.
                            Linters play a crucial role in maintaining code quality.<br/>
                            * Compare and contrast the outputs from linters to recognise their relevance and applicability in different development and testing scenarios: Despite having similar objectives, different linters offer unique features, and I learned their applicability and utility across various scenarios.<br/>
                            * Develop Python code, which is free of error, consistent in its design, and considered to be high quality according to common Python standards: Through Codio I learn how to identify and rectify errors in Python code, ensuring consistency in design and adherence to common Python standards.<br/>

                            <br/>
                            Reflection:<br/><br/>
                            As an developer, understanding and utilizing linters can significantly enhance myr development process because of :
                            <br/>
                            1. Code Quality Assurance:<br/>
                            Linters analyze your code for potential issues, style violations, and best practices.
                            By catching syntax errors and enforcing coding conventions, they ensure high-quality code.
                            Clean code leads to better maintainability and fewer bugs.
                            <br/>
                            2. Consistency and Collaboration:<br/>
                            Linters promote consistency across your codebase.
                            When working in a team, consistent code makes collaboration smoother.
                            Everyone adheres to the same standards, reducing confusion and improving teamwork.
                            <br/>
                            3. Security and Reliability:<br/>
                            Linters highlight security vulnerabilities early on.
                            Secure applications start with well-structured, error-free code.
                            By addressing issues proactively, you create a more reliable software product.
                            <br/>
                            4. Efficiency and Productivity:<br/>
                            Fixing issues identified by linters saves time during development.
                            You can focus on solving complex problems rather than dealing with trivial errors.
                            Productivity increases when your tools assist you effectively.
                            In summary, linters are valuable companions for app developers. 
                    </div>
                    <SectionBloc
                        section={"section2"}
                        title={"Development Team Project: Design Document"}
                        toggleSection={(section) => toggleSection(section)} 
                        sectionVisibility={sectionVisibility.section2}
                    />
                    <div style={{display: sectionVisibility.section2 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px' }} className='card card-block'>
                        <a href={PeerReview} download="Secure Software Development-Design Document" target='_blank'>
                            download file
                        </a>
                    </div>
                </Card.Text>
            </Card.Body>
        </Card>
        </div>
    );
}

export default Unit6;