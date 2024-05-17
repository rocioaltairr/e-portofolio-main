import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';
import img1 from './api_terminal_output.png'
import UnitHeader from '../Components/unit_header'; 
import SectionBloc from '../Components/section_bloc'; 

function Unit7({ cardNoteVisibility, toggleNoteCard }) {
    const [sectionVisibility, setSectionVisibility] = useState({
        section1: true,
        section2: true,
        section3: true,
        section4: true,
        section5: true,
        section6: true,
    });

    const toggleSection = (unit) => {
      setSectionVisibility((prevState) => ({
        ...prevState,
        [unit]: !prevState[unit],
      }));
    };

    const [checklistItems, setChecklistItems] = useState([
        { id: 1, text: 'What is an Ontology?', content: '', checked: false },
        { id: 2, text: 'Exploring a simple Python shell',content: '', checked: true },
        { id: 3, text: 'Developing an API for a Distributed Environment', content: '', checked: false },
        { id: 4, text: 'Buffer Overflow in C', content: '', checked: false },
        { id: 5, text: 'Buffer Overflow in Python', content: '', checked: false },
        { id: 6, text: 'Testing with Python', content: '', checked: false },
        { id: 7, text: 'The Producer-Consumer Mechanism', content: '', checked: true },
        { id: 8, text: 'Jupyter Notebooks', content: '', checked: false },
      ]);
    
      const handleCheckboxChange = (id) => {
        setChecklistItems((prevItems) =>
          prevItems.map((item) =>
            checklistItems[0].id === id ? { ...item, checked: !checklistItems[0].checked } : item
          )
        );
      };
    return (
        <div>
        <UnitHeader
            unit={"unit7"}
                title={"Unit 7: Software Development Life Cycles"}
                toggleNoteCard={(unit) => toggleNoteCard(unit)} 
                cardNoteVisibility={cardNoteVisibility.unit7}
        />
        <Card style={{ display: cardNoteVisibility.unit7 ? 'none' : 'block' }}>
            <Card.Body>
                <SectionBloc
                    section={"section1"}
                    title={"Overview and reflection"}
                    toggleSection={(section) => toggleSection(section)} 
                    sectionVisibility={sectionVisibility.section1}
                />
                <div class="card card-block"  style={{textAlign: 'left', display: sectionVisibility.section1 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px'}}>
                    <p style={{textAlign: 'left'}}>
                    </p>
                </div>
                 <SectionBloc
                    section={"section2"}
                    title={"e-Portfolio activity: Questions and answers"}
                    toggleSection={(section) => toggleSection(section)} 
                    sectionVisibility={sectionVisibility.section2}
                />
                <div  style={{display: sectionVisibility.section2 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px' }} className='card card-block'>
                    <iframe
                        src="https://docs.google.com/document/d/1c1nhzO7g908fYqtflPJCcEHgMxwF4Tor/edit?usp=sharing&ouid=101567821305826151050&rtpof=true&sd=true"
                        frameBorder="0"
                        scrolling="auto"
                        height="500px"
                        width="100%"
                    ></iframe>
                </div>
                <SectionBloc
                    section={"section3"}
                    title={"e-Portfolio activity: Data Structures Reflection"}
                    toggleSection={(section) => toggleSection(section)} 
                    sectionVisibility={sectionVisibility.section3}
                />
                <div  style={{display: sectionVisibility.section3 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px' }} className='card card-block'>
                    <iframe
                        src="https://docs.google.com/document/d/1CeiaJY8O1uWvqOZv3Yi6BR2KIlKQYDQO/edit?usp=sharing&ouid=101567821305826151050&rtpof=true&sd=true"
                        frameBorder="0"
                        scrolling="auto"
                        height="500px"
                        width="100%"
                    ></iframe>
                </div>
            </Card.Body>
        </Card>
    </div>
    );
}

export default Unit7;