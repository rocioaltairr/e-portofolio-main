import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';
import UnitHeader from '../Components/unit_header'; 
import SectionBloc from '../Components/section_bloc'; 

function Unit7({ cardNoteVisibility, toggleNoteCard }) {
    const [sectionVisibility, setSectionVisibility] = useState({
        section1: true,
        section2: true,
        section3: true,
        section4: true
        // section3: true,
        // section4: true
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
            unit={"unit7"}
                title={"Unit 7: Inferential Statistics and Hypothesis Testing"}
                toggleNoteCard={(unit) => toggleNoteCard(unit)} 
                cardNoteVisibility={cardNoteVisibility.unit7}
        />
        <Card style={{ display: cardNoteVisibility.unit7 ? 'none' : 'block' }}>
            <Card.Body>
                {/* <SectionBloc
                    section={"section1"}
                    title={"Hypothesis Testing Worksheet"}
                    toggleSection={(section) => toggleSection(section)} 
                    sectionVisibility={sectionVisibility.section1}
                />
                <div  style={{display: sectionVisibility.section1 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px' }} className='card card-block'>
                    <a  style={{color: '#11ABB0'}} href='https://docs.google.com/document/d/1TUKUlAZPA2bcwd4MkTTKWZffYTsT2PJxCAeJMm95xDY/edit?usp=sharing' target="_blank">
                    	See more about Hypothesis Testing Worksheet
                    </a>
                </div> */}
                <SectionBloc
                    section={"section1"}
                    title={"Collaborative Discussion 2: Case Study: Accuracy of information"}
                    toggleSection={(section) => toggleSection(section)} 
                    sectionVisibility={sectionVisibility.section1}
                />
                <div  style={{display: sectionVisibility.section1 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px' }} className='card card-block'>
                    <a  style={{color: '#11ABB0'}} href='https://docs.google.com/document/d/1Qh5FVfePB458nZUkR0hX5-nEtMzphLZ3RdbYP8e549M/edit?usp=sharing' target="_blank">
                    See more about Collaborative Discussion 2: Case Study: Accuracy of information
                    </a>
                </div>
                <SectionBloc
                    section={"section2"}
                    title={"Summary Measures Worksheet"}
                    toggleSection={(section) => toggleSection(section)} 
                    sectionVisibility={sectionVisibility.section2}
                />
                <div  style={{display: sectionVisibility.section2 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px' }} className='card card-block'>
                    <a  style={{color: '#11ABB0'}} href='https://docs.google.com/document/d/1krXH76obCupoL8yNkK9itIwDu6Ne9n9lxlXTZ4dLdHo/edit?usp=sharing' target="_blank">
                    	See more about Summary Measures Worksheet
                    </a>
                </div>
                <SectionBloc
                        section={"section3"}
                        title={"Literature Review"}
                        toggleSection={(section) => toggleSection(section)} 
                        sectionVisibility={sectionVisibility.section3}
                    />
                <div class="card card-block" style={{textAlign: 'left', display: sectionVisibility.section3 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px'}}>
                Inferential statistics and hypothesis testing is very time consuming and it might be more convinient to use some AI Apps, like  Julius AI that offers chi-square tests, p-value computations, and standard deviation calculations,  Hugging Face with a good library of pre-trained models that help in text generation and image processing, among others.
                </div>
                <SectionBloc
                        section={"section4"}
                        title={"Learning and reflection"}
                        toggleSection={(section) => toggleSection(section)} 
                        sectionVisibility={sectionVisibility.section4}
                />
                <div class="card card-block" style={{textAlign: 'left', display: sectionVisibility.section4 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px'}}>
                    <a  style={{color: '#11ABB0'}} href='https://docs.google.com/document/d/1-GRxsRiqsDtOWW6JkQPWCKSIpfSwlGcHKoBfwZS_sYk/edit?usp=sharing' target="_blank">
                    	See more about Learning and reflection
                    </a>
                </div>
                
                {/* <SectionBloc
                    section={"section4"}
                    title={"Examples - Workbooks"}
                    toggleSection={(section) => toggleSection(section)} 
                    sectionVisibility={sectionVisibility.section4}
                />
                <div  style={{display: sectionVisibility.section4 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px' }} className='card card-block'>
                    <a  style={{color: '#11ABB0'}} href='https://docs.google.com/document/d/1sML94BwjVzJN7QSUa-kOU3QiuqR9WID3vZ6BVL6p8Yg/edit?usp=sharing' target="_blank">
                    See more about Examples - Workbooks
                    </a>
                </div> */}
            </Card.Body>
        </Card>
      </div>
    );
}

export default Unit7;