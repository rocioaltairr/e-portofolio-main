import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import UnitHeader from '../Components/unit_header'; 
import SectionBloc from '../Components/section_bloc'; 

function Unit3({ cardNoteVisibility, toggleNoteCard }) {
    const [sectionVisibility, setSectionVisibility] = useState({
        section1: true,
        section2: true,
        section3: true,
        section4: true,
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
        unit={"unit3"}
            title={"Unit 3: Programming Languages: History, Concepts & Design"}
            toggleNoteCard={(unit) => toggleNoteCard(unit)} 
            cardNoteVisibility={cardNoteVisibility.unit3}
        />
            
        <Card style={{ display: cardNoteVisibility.unit3 ? 'none' : 'block'}}>
            <Card.Body style={{textAlign : 'left' }}>
            <SectionBloc
                    section={"section1"}
                    title={"Overview and reflection"}
                    toggleSection={(section) => toggleSection(section)} 
                    sectionVisibility={sectionVisibility.section1}
                />
                <div style={{display: sectionVisibility.section1 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px' }} className='card card-block'>
                * Describe some key milestones in the development of programming languages.<br/>
                * Outline some of the key paradigms that define the different types of languages.<br/>
                * Explain the key concepts that determine the operation of programming languages.<br/>
                * Discuss key programming challenges and recommended best practices.<br/>
                * Explain what design patterns are and when to use them.<br/>
                </div>
            <SectionBloc
                section={"section2"}
                title={"Team Discussion: What is a Secure Programming Language?"}
                toggleSection={(section) => toggleSection(section)} 
                sectionVisibility={sectionVisibility.section2}
            />
            <div style={{display: sectionVisibility.section2 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px' }} className='card card-block'>
            <h3>Team Discussion: What is a Secure Programming Language?</h3>
            <br/>
            <a style={{color: '#11ABB0'}} href='https://docs.google.com/document/d/1ELT3h0iFo3Earx-TLm81I6p99Xhv_KJby51W3hc1jTw/edit'>Team activity: Discussion Link</a>
            <br/>
            
            </div>
                <SectionBloc
                    section={"section3"}
                    title={"Exploring Python tools and features"}
                    toggleSection={(section) => toggleSection(section)} 
                    sectionVisibility={sectionVisibility.section3}
                />
                <div style={{background: 'rgb(237 237 237)', padding:'20px', display: sectionVisibility.section3 ? 'none' : 'block' }} className='card card-block'>
                    <h3 style={{color: '#11ABB0'}}>Exploring Python tools and features</h3><br/>
                    <h3>Buffer Overflow in C - partI</h3>
                    <div style={{ padding:' 20px'}}>
                        <p style={{color: '#11ABB0'}}>What happens?</p>
                        After runnig ./bufoverflow, you could Enter name: because the buffer is 8,
                        if you enter more than 8 charactor it would overflow.<br/>

                        <p style={{color: '#11ABB0'}}>What does the output message mean?</p>
                        *** stack smashing detected ***: it means overflow.<br/>
                        <br/>
                    </div>
                    <h3>Buffer Overflow in Python - partII</h3>
                    <div style={{ padding:' 20px'}}>
                        <p style={{color: '#11ABB0'}}>What is the result?</p>
                        Module over_flow output:<br/>
                        Trailing whitespace (trailing-whitespace)<br/>
                        Final newline missing (missing-final-newline)<br/>
                        Missing module docstring (missing-module-docstring)<br/>
                        <br/>
                        <p style={{color: '#11ABB0'}}>What is the result? Does this tell you how to fix the error above?</p>
                        You must add whitespace and newline for correct python format, and add docstring description on the top file 
                    </div>
                </div>

                <SectionBloc
                    section={"section4"}
                    title={"Codio Activity: The Producer-Consumer Mechanism"}
                    toggleSection={(section) => toggleSection(section)} 
                    sectionVisibility={sectionVisibility.section4}
                />
                <div style={{display: sectionVisibility.section4 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px' }} className='card card-block'>
                    <h3  style={{color: '#11ABB0'}}>Codio Activity: The Producer-Consumer Mechanism</h3><br/>
                    <h3>The Producer-Consumer Mechanism</h3>
                    <div style={{ padding:' 20px'}}>
                        <p style={{color: '#11ABB0'}}>
                            How is the queue data structure used to achieve the purpose of the code?
                        </p>
                        <p>
                            Queue is first in first out
                        </p>

                        <p style={{color: '#11ABB0'}}>
                            What is the purpose of q.put(I)?
                        </p>
                        <p>
                            To put operator to the queue
                        </p>

                        <p style={{color: '#11ABB0'}}>
                            What is achieved by q.get()?
                        </p>
                        <p>
                            To put operator from the queue
                        </p>

                        <p style={{color: '#11ABB0'}}>
                            What functionality is provided by q.join()?
                        </p>
                        <p>
                        The main thread, after starting the producer and consumer threads, reaches the q.join() line.<br/>
                        The q.join() call blocks the main thread until all tasks in the queue have been processed and marked as done.<br/>
                        When all tasks are marked as done, the q.join() call unblocks, and the main thread continues to the next line of code.<br/>
                        Using q.join() ensures that the main thread waits until all tasks are completed, providing a way to synchronize the main thread with the worker threads.
                        </p>
                        
                        <p style={{color: '#11ABB0'}}>
                            Extend this producer-consumer code to make the producer-consumer scenario available 
                            in a secure way. What technique(s) would be appropriate to apply?
                        </p>
                        <p>
                            Use Locks to prevent race condition
                        </p>
                    </div>
                </div>
            </Card.Body>
        </Card>
        </div>
    );
}

export default Unit3;