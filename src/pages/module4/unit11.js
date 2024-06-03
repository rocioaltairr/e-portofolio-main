import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import UnitHeader from '../Components/unit_header'; 
import SectionBloc from '../Components/section_bloc';

function Unit11({ cardNoteVisibility, toggleNoteCard }) {
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
                unit={"unit11"}
                    title={"Unit 11: Software Engineering Project Management: Future Trends"}
                    toggleNoteCard={(unit) => toggleNoteCard(unit)} 
                    cardNoteVisibility={cardNoteVisibility.unit11}
            />
            <Card style={{ display: cardNoteVisibility.unit11 ? 'none' : 'block' }}>
                <Card.Body style={{textAlign: 'left'}}>
                    <SectionBloc
                        section={"section1"}
                        title={"Reflection"}
                        toggleSection={(section) => toggleSection(section)} 
                        sectionVisibility={sectionVisibility.section1}
                    />
                    <div style={{display: sectionVisibility.section1 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px' }} className='card card-block'>
                        Regarding the uploading of ppt and mp4 files, and providing the link to the mp4 file on Google Drive, 
                        I did it out of fear of potential unforeseen problems. However, I didn’t consider uploading to GitHub, 
                        which is a good practice since we frequently use it in the IT sector.
                    </div>
                    <SectionBloc
                        section={"section2"}
                        title={"Development Individual Project: Presentation"}
                        toggleSection={(section) => toggleSection(section)} 
                        sectionVisibility={sectionVisibility.section2}
                    />
                    <div class="card card-block" style={{textAlign: 'left', display: sectionVisibility.section2 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px'}}>
                        <a  style={{color: '#11ABB0'}} href='https://docs.google.com/document/d/1etPAdjOBXlm7vCtJfbL3vHsg0uH56jcf6Wp_ACoa9UY/edit' target="_blank">
                            See more about Development Individual Project: Presentation
                        </a>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Unit11;