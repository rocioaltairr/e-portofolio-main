import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import UnitHeader from '../Components/unit_header'; 
import SectionBloc from '../Components/section_bloc';

function Unit9({ cardNoteVisibility, toggleNoteCard }) {
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
                unit={"unit9"}
                    title={"Unit 9: Validity and Generalisability in Research"}
                    toggleNoteCard={(unit) => toggleNoteCard(unit)} 
                    cardNoteVisibility={cardNoteVisibility.unit9}
            />
            <Card style={{ display: cardNoteVisibility.unit9 ? 'none' : 'block' }}>
                <Card.Body>
                    <SectionBloc
                        section={"section1"}
                        title={"Charts Worksheet"}
                        toggleSection={(section) => toggleSection(section)} 
                        sectionVisibility={sectionVisibility.section1}
                    />
                    <div class="card card-block" style={{textAlign: 'left', display: sectionVisibility.section1 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px'}}>
                        <a  style={{color: '#11ABB0'}} href='https://docs.google.com/document/d/1dxz9fkCVVnnvij9RSawPLbY3syaEy4GYYSx5aqNNpAs/edit?usp=sharing' target="_blank">
                        See more about - Charts Worksheet
                        </a>
                    </div>
                    <SectionBloc
                        section={"section2"}
                        title={"Unit 7 and 8 Data Annexe and Datasets"}
                        toggleSection={(section) => toggleSection(section)} 
                        sectionVisibility={sectionVisibility.section2}
                    />
                    <div  style={{display: sectionVisibility.section2 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px' }} className='card card-block'>
                        <a  style={{color: '#11ABB0'}} href='https://docs.google.com/document/d/1xIJga6jeZbrydQL9pIubTqH2gH5xCEbinzJSHYFzRoE/edit?usp=sharing' target="_blank">
                            See more about - Data Annexe and Datasets
                        </a>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Unit9;