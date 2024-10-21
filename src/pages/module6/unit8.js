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
                        title={"Exercises - Workbooks"}
                        toggleSection={(section) => toggleSection(section)} 
                        sectionVisibility={sectionVisibility.section1}
                    />
                    <div  style={{display: sectionVisibility.section1 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px' }} className='card card-block'>
                        <a  style={{color: '#11ABB0'}} href='https://docs.google.com/document/d/1j96gleZNofTBDhhOXfBd3hji7uirvQLMMBvokoMTm_A/edit?usp=sharing' target="_blank">
                            See more about - Exercises - Workbooks
                        </a>
                    </div>
                    <SectionBloc
                        section={"section2"}
                        title={"Learning and reflection"}
                        toggleSection={(section) => toggleSection(section)} 
                        sectionVisibility={sectionVisibility.section2}
                    />
                    <div class="card card-block" style={{textAlign: 'left', display: sectionVisibility.section2 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px'}}>
                    This seminar provided me with many valuable insights, especially as a computer science major. I gained a deeper understanding of various data analysis tools such as RStudio, Python, and Google Colab, and learned how important statistics are for drawing meaningful conclusions from data. I also realized the significance of presenting data visually and ethically, ensuring that the data is both accurate and engaging.<br/>

                    In my dissertation, I will carefully consider what I want my audience to focus on when presenting data. For example, tables might be used to convey precise, detailed numbers, while charts will be more effective for highlighting patterns such as deviations, correlations, rankings, distributions, changes over time, and part-to-whole relationships. Choosing the right visualization helps guide the audience’s attention to key insights. Real-world examples, such as stock market data showing changes over time or maps displaying spatial distributions, can make these insights more tangible and relatable.<br/>

                    Additionally, I now understand that proper data cleaning and preparation—such as handling missing data and eliminating outliers—are crucial to ensuring accurate and meaningful analysis.<br/>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Unit8;