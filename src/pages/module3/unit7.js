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
                title={"Unit 7: Introduction to Operating Systems"}
                toggleNoteCard={(unit) => toggleNoteCard(unit)} 
                cardNoteVisibility={cardNoteVisibility.unit7}
        />
        <Card style={{ display: cardNoteVisibility.unit7 ? 'none' : 'block' }}>
            <Card.Body>
                <SectionBloc
                    section={"section1"}
                    title={"What is an Ontology?"}
                    toggleSection={(section) => toggleSection(section)} 
                    sectionVisibility={sectionVisibility.section1}
                />
                <div class="card card-block"  style={{textAlign: 'left', display: sectionVisibility.section1 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px'}}>
                    <p style={{textAlign: 'left'}}>
                    An ontology is defined as being formal naming of concepts, their properties, 
                    and relationships within a domain of interest that is revealed through a developed taxonomy
                    </p>
                </div>

                <SectionBloc
                    section={"section2"}
                    title={"Exploring a simple Python shell"}
                    toggleSection={(section) => toggleSection(section)} 
                    sectionVisibility={sectionVisibility.section2}
                />
        
                <div class="card card-block"  key={checklistItems[1].id} style={{display:'flex', textAlign: 'left', display: sectionVisibility.section2 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px'}}>
                    <input
                    type="checkbox"
                    id={`item${checklistItems[1].id}`}
                    checked={checklistItems[1].checked}
                    onChange={() => handleCheckboxChange(checklistItems[1].id)}
                    />
                    <label style={{color: '#1abc9c'}} htmlFor={`item${checklistItems[1].id}`}>{checklistItems[1].text}</label>
                </div>
        

                <SectionBloc
                    section={"section3"}
                    title={"Developing an API for a Distributed Environment"}
                    toggleSection={(section) => toggleSection(section)} 
                    sectionVisibility={sectionVisibility.section3}
                />
                <div class="card card-block"  style={{display:'flex', textAlign: 'left', display: sectionVisibility.section3 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px'}}>
                    <div key={checklistItems[2].id} style={{display:'flex'}}>
                        <input
                        type="checkbox"
                        id={`item${checklistItems[2].id}`}
                        checked={true}
                        onChange={() => handleCheckboxChange(checklistItems[2].id)}
                        />
                        <div style={{width: '10px'}}></div>
                        <label style={{color: '#1abc9c'}} htmlFor={`item${checklistItems[2].id}`}>{checklistItems[2].text}</label>
                    </div>
                    <p style={{textAlign: 'left'}}>
                    Microframework refers to a light-weight web application framework in contrast to full-stack frameworks.
                    That means Flask gives only what you need essentially to create a back-end server but provides the flexibility to install any extensions to support features like database interfacing, 
                    authentication, encryption, CSRF protection and so on.<br/>
                    <br/>

                    <h4 style={{color: '#1abc9c'}}>Question 1</h4>
                    <p style={{margin: '0',color: '#1abc9c'}}>Run the API.py code. Take a screenshot of the terminal output. What command did you use to compile and run the code?</p>
                    I run "python3 api.py"
                    <img className='profile-pic'  src={img1} alt="Girl in a jacket"></img>
                    <h4 style={{color: '#1abc9c'}}>Question 2</h4>
                    <p style={{margin: '0',color: '#1abc9c'}}>Run the following command at the terminal prompt: w3m http://127.0.0.1:5000/user/Ann
                    What happens when this command is run, and why?
                    </p>
                    when you run the command, it accesses the specified URL using the text-based browser w3m, downloads the content, and saves it to the file /Users/rocio/Ann, and the download is reported as complete. The specific content of the web page is not visible in the provided output. If you want to view the content, you might need to open the file /Users/rocio/Ann in a text editor or another appropriate tool.<br/>
                    
                    <h4 style={{color: '#1abc9c'}}>Question 3</h4>
                    <p style={{margin: '0', color: '#1abc9c'}}>
                    Run the following command at the terminal prompt: w3m http://127.0.0.1:5000/user/Adam
                    What happens when this command is run, and why?
                    </p>
                    When I cat to the file the output would be "User not found"

                    <h4 style={{color: '#1abc9c'}}>Question 4</h4>
                    <p style={{margin: '0', color: '#1abc9c'}}>
                    What capability is achieved by the flask library?
                    </p>
                    Flask is a micro web framework for Python that provides the tools to build web applications quickly and with minimal code. It belongs to the category of web frameworks, which are software frameworks specifically designed to aid the development of web applications, including web services, web APIs, and more.
                    </p>
                </div>

                <SectionBloc
                    section={"section4"}
                    title={"Coding Activities"}
                    toggleSection={(section) => toggleSection(section)} 
                    sectionVisibility={sectionVisibility.section4}
                />
                <div class="card card-block"  style={{display:'flex', textAlign: 'left', display: sectionVisibility.section4 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px'}}>
                    <div key={checklistItems[3].id} style={{display:'flex'}}>
                        <input
                        type="checkbox"
                        id={`item${checklistItems[3].id}`}
                        checked={true}
                        onChange={() => handleCheckboxChange(checklistItems[3].id)}
                        />
                        <div style={{width: '10px'}}></div>
                        <label style={{color: '#1abc9c'}} htmlFor={`item${checklistItems[3].id}`}>{checklistItems[3].text}</label>
                    </div>
                    <p style={{textAlign: 'left'}}>
                    </p>
                    <div>
                    <div key={checklistItems[4].id} style={{display:'flex'}}>
                        <input
                        type="checkbox"
                        id={`item${checklistItems[4].id}`}
                        checked={true}
                        onChange={() => handleCheckboxChange(checklistItems[4].id)}
                        />
                        <div style={{width: '10px'}}></div>
                        <label style={{color: '#1abc9c'}} htmlFor={`item${checklistItems[4].id}`}>{checklistItems[4].text}</label>
                    </div>
                    <p style={{textAlign: 'left'}}>
                    </p>
                </div>
                <div>
                    <div key={checklistItems[5].id} style={{display:'flex'}}>
                        <input
                        type="checkbox"
                        id={`item${checklistItems[5].id}`}
                        checked={true}
                        onChange={() => handleCheckboxChange(checklistItems[5].id)}
                        />
                        <div style={{width: '10px'}}></div>
                        <label style={{color: '#1abc9c'}} htmlFor={`item${checklistItems[5].id}`}>{checklistItems[5].text}</label>
                    </div>
                    <p style={{textAlign: 'left'}}>
                    </p>
                </div>
                <div>
                    <div key={checklistItems[6].id} style={{display:'flex'}}>
                        <input
                        type="checkbox"
                        id={`item${checklistItems[6].id}`}
                        checked={checklistItems[6].checked}
                        onChange={() => handleCheckboxChange(checklistItems[6].id)}
                        />
                        <div style={{width: '10px'}}></div>
                        <label style={{color: '#1abc9c'}} htmlFor={`item${checklistItems[6].id}`}>{checklistItems[6].text}</label>
                    </div>
                    <p style={{textAlign: 'left'}}>
                    </p>
                </div>
                </div>

                <SectionBloc
                    section={"section5"}
                    title={"Jupyter Notebooks"}
                    toggleSection={(section) => toggleSection(section)} 
                    sectionVisibility={sectionVisibility.section5}
                />
                <div  class="card card-block"  style={{display:'flex', textAlign: 'left', display: sectionVisibility.section5 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px'}}>
                    <div key={checklistItems[7].id} style={{display:'flex'}}>
                        <input
                        type="checkbox"
                        id={`item${checklistItems[7].id}`}
                        checked={true}
                        onChange={() => handleCheckboxChange(checklistItems[7].id)}
                        />
                        <div style={{width: '10px'}}></div>
                        <label style={{color: '#1abc9c'}} htmlFor={`item${checklistItems[7].id}`}>{checklistItems[7].text}</label>
                    </div>
                    <p style={{textAlign: 'left'}}>
                    </p>
                </div>

                <SectionBloc
                    section={"section6"}
                    title={"Overview and reflection"}
                    toggleSection={(section) => toggleSection(section)} 
                    sectionVisibility={sectionVisibility.section5}
                />
                <div  class="card card-block"  style={{display:'flex', textAlign: 'left', display: sectionVisibility.section6 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px'}}>
                Relevance for me as an App Developer:<br/>
                As an app developer, understanding how applications interact with the underlying operating system is crucial. I learned about input/output mechanisms, system calls, and software libraries.<br/>
                Knowing how to link with OS-provided or third-party libraries securely ensures robust and safe application behavior.<br/>
                It helps to select an appropriate operating system for your app. Different OSes have varying features, performance characteristics, and security models.<br/>
                <br/>
                Relevance for me as a Future Computer Science Expert:<br/>
                Understanding OS concepts—such as processes, threads, and scheduling—provides a solid foundation.<br/>
                Learning about OS security approaches equipped me with tools to mitigate risks. Security vulnerabilities in OSes impact all software running on them.<br/>
                Virtualization is transforming the industry. Understanding different virtualization approaches prepared me for cloud computing and containerization.<br/>
                <br/>

                Practical Application:<br/>
                Selecting OSes: When developing apps, you’ll make informed decisions about the OS environment based on factors like performance, compatibility, and security.<br/>
                Secure Coding Practices: Applying knowledge from this unit ensures your code interacts safely with the OS and minimizes vulnerabilities.<br/>
                In summary, Unit 7 bridges theory and practice, equipping you with OS insights critical for app development and your broader expertise in computer science. <br/>
                </div>
            </Card.Body>
        </Card>
    </div>
    );
}

export default Unit7;