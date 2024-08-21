import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import UnitHeader from '../Components/unit_header'; 
import SectionBloc from '../Components/section_bloc'; 

function Unit8({ cardNoteVisibility, toggleNoteCard }) {
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
                unit={"unit8"}
                    title={"Unit 8: Data Analysis and Visualisation"}
                    toggleNoteCard={(unit) => toggleNoteCard(unit)} 
                    cardNoteVisibility={cardNoteVisibility.unit8}
            />
            <Card style={{ display: cardNoteVisibility.unit8 ? 'none' : 'block' }}>
                <Card.Body  style={{textAlign : 'left' }}>
                    <SectionBloc
                        section={"section1"}
                        title={"Inference Worksheet"}
                        toggleSection={(section) => toggleSection(section)} 
                        sectionVisibility={sectionVisibility.section1}
                    />
                    <div  style={{display: sectionVisibility.section1 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px' }} className='card card-block'>
                        <a  style={{color: '#11ABB0'}} href='https://docs.google.com/document/d/1i4ISnCtJIhuBCS-_vkWEJoyAWZoyp1ZbdIC3xyDlmJE/edit?usp=sharing' target="_blank">
                            See more about - Inference Worksheet
                        </a>
                    </div>
                    <SectionBloc
                        section={"section1"}
                        title={"Exercises - Workbooks"}
                        toggleSection={(section) => toggleSection(section)} 
                        sectionVisibility={sectionVisibility.section1}
                    />
                    <div  style={{display: sectionVisibility.section1 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px' }} className='card card-block'>
                        <a  style={{color: '#11ABB0'}} href='https://docs.google.com/document/d/1W7UM2T3wZanvmmDvsCCIsBMGdUk044gL6dTdzmH_AH0/edit?usp=sharing' target="_blank">
                            See more about - Exercises - Workbooks
                        </a>
                    </div>
                    <SectionBloc
                        section={"section1"}
                        title={"Unit 7 and 8 Data Annexe and Datasets"}
                        toggleSection={(section) => toggleSection(section)} 
                        sectionVisibility={sectionVisibility.section1}
                    />
                    <div  style={{display: sectionVisibility.section1 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px' }} className='card card-block'>
                        <a  style={{color: '#11ABB0'}} href='https://docs.google.com/document/d/1xIJga6jeZbrydQL9pIubTqH2gH5xCEbinzJSHYFzRoE/edit?usp=sharing' target="_blank">
                            See more about - Unit 7 and 8 Data Annexe and Datasets
                        </a>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Unit8;