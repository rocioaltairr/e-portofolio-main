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
                    title={"Unit 10: Research Writing"}
                    toggleNoteCard={(unit) => toggleNoteCard(unit)} 
                    cardNoteVisibility={cardNoteVisibility.unit10}
            />
            <Card style={{ display: cardNoteVisibility.unit10 ? 'none' : 'block' }}>
                <Card.Body>
                    <SectionBloc
                        section={"section1"}
                        title={"Research Proposal Presentation-Script"}
                        toggleSection={(section) => toggleSection(section)} 
                        sectionVisibility={sectionVisibility.section1}
                    />
                    <div style={{display: sectionVisibility.section1 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px' }} className='card card-block'>
                        <a  style={{color: '#11ABB0'}} href='https://docs.google.com/document/d/1p9xj2-2cRQGfTN1tcTn3Eb8VsI-EruIG7sBLeiSP-NE/edit?usp=sharing' target="_blank">
                        See more about - e-Portfolio Activity: Statistical Worksheet Submissions - Charts Worksheet
                        </a>
                    </div>
                    <SectionBloc
                        section={"section2"}
                        title={"e-Portfolio Activity: Statistical Worksheet Submissions"}
                        toggleSection={(section) => toggleSection(section)} 
                        sectionVisibility={sectionVisibility.section2}
                    />
                    <div style={{display: sectionVisibility.section2 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px' }} className='card card-block'>
                        <a  style={{color: '#11ABB0'}} href='https://docs.google.com/document/d/1n5pwe8npSOBXlZhq28UywiXmWsyF_QdsSZ_iRHeCQfo/edit?usp=sharing' target="_blank">
                        See more about - e-Portfolio Activity: Statistical Worksheet Submissions - Data Annexe and Datasets
                        </a>
                    </div>
                    <div style={{display: sectionVisibility.section2 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px' }} className='card card-block'>
                        <a  style={{color: '#11ABB0'}} href='https://docs.google.com/document/d/1xx6LbsTlWwBP7fr_GvkI0T5Wp5GVXEGlbzgRj1sU074/edit?usp=sharing' target="_blank">
                        See more about - e-Portfolio Activity: Statistical Worksheet Submissions - Exercises - Workbooks
                        </a>
                    </div>
                    <div style={{display: sectionVisibility.section2 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px' }} className='card card-block'>
                        <a  style={{color: '#11ABB0'}} href='https://docs.google.com/document/d/1PRSPJUFjxqG2GTcY4zRQF_fAPhBmwYDrMvThnaN72kE/edit?usp=sharing' target="_blank">
                        See more about - Research Proposal Presentation-Script
                        </a>
                    </div>
                    <SectionBloc
                        section={"section3"}
                        title={"Learning and reflection"}
                        toggleSection={(section) => toggleSection(section)} 
                        sectionVisibility={sectionVisibility.section3}
                    />
                    <div class="card card-block" style={{textAlign: 'left', display: sectionVisibility.section3 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px'}}>
                    In this module, I finally completed my Research Proposal Presentation for the dissertation, which focused on 'Enhancing KYC Processes with Machine Learning.' It was a rewarding experience going through the process of gathering information and researching this topic, as it’s something I’m really passionate about.<br/>

                    The feedback from my professor was insightful and helped me see both what worked well and where I could improve. They mentioned that I demonstrated a good understanding of the topic and that the key sections of the presentation—like the research questions, aims, and objectives—were clearly presented. That was great to hear! However, there’s definitely room to expand on certain areas, like digging deeper into the research gap and the significance of my work. I realize now that I could have provided more context on why my research matters.<br/>

                    The professor also pointed out that while my methodology is solid, it would have been better if I’d gone into more detail about the specific tools I plan to use. That’s something I’ll definitely focus on as I move forward with the project, making sure the technical aspects are clearer and more fleshed out.<br/>

                    As for the presentation itself, my professor liked the clarity of my research questions but suggested I improve the balance of my slides to keep the audience more engaged, especially toward the end. I’ll keep this in mind for future presentations, as well as adding more practical details about how I’ll implement my methodology.<br/>

                    All in all, I feel this experience has given me a strong starting point for my final project. I’m excited to take the professor’s feedback on board and refine both my research and presentation skills as I continue working on my dissertation.<br/>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Unit10;