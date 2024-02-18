import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
// import activity_uml from '../images/module2/Activity Diagram.png';
import UnitHeader from '../Components/unit_header'; 
import SectionBloc from '../Components/section_bloc';

function Unit4({ cardVisibility, cardNoteVisibility, toggleNoteCard }) {
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
            unit={"unit4"}
                title={"Unit 4: Exploring Programming Language Concepts"}
                toggleNoteCard={(unit) => toggleNoteCard(unit)} // Adjust the function signature
                cardNoteVisibility={cardNoteVisibility.unit4}
        />

        <Card style={{ display: cardNoteVisibility.unit4 ? 'none' : 'block' }}>
            <Card.Body  style={{textAlign : 'left' }}>
                <SectionBloc
                    section={"section1"}
                    title={"Overview"}
                    toggleSection={(section) => toggleSection(section)} 
                    sectionVisibility={sectionVisibility.section1}
                />
                <div class="card card-block" style={{textAlign: 'left', display: sectionVisibility.section1 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px'}}>
                * Explain how and when to use regular expressions in solutions: Regular expressions are patterns used to match or extract text, making them useful for validation, parsing, filtering, searching, and replacing. <br/>
                * Describe how and when to use recursion in solutions: Recursion is a programming technique where a function calls itself in order to solve a problem. It is useful when tackling problems that can be broken down into smaller, similar subproblems.<br/>
                * Discuss the security implications of both approaches: Regarding regular expressions, for example, when you need to enforce a strong password policy while creating user accounts, while recursion could mitigate security risks associated with recursion, it's essential to ensure that recursive functions have proper termination conditions and that the depth of recursion is limited to prevent excessive stack usage.<br/>
                </div>
                <SectionBloc
                    section={"section2"}
                    title={"Programming language concepts"}
                    toggleSection={(section) => toggleSection(section)} 
                    sectionVisibility={sectionVisibility.section2}
                />
                <div class="card card-block" style={{textAlign: 'left', display: sectionVisibility.section2 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px'}}>
                <a  style={{color: '#11ABB0'}} href='https://docs.google.com/document/d/1FCiBB_aYxmpgr5j5BpKCAh9YmYjgh6x5vhSRk_ovCvE/edit?usp=sharing'>Explore Programming language concepts</a>
                </div>
                
            </Card.Body>
        </Card>
        </div>
    );
}

export default Unit4;