import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import UnitHeader from '../Components/unit_header'; 
import SectionBloc from '../Components/section_bloc'; 

function Unit10({ cardVisibility, cardNoteVisibility, toggleCard, toggleNoteCard }) {
    const [sectionVisibility, setSectionVisibility] = useState({
        section1: true,
        section2: true,
        section3: true,
        section4: true,
        section5: true,
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
                title={"Unit 10: From Distributed Computing to Microarchitectures"}
                toggleNoteCard={(unit) => toggleNoteCard(unit)} 
                cardNoteVisibility={cardNoteVisibility.unit10}
        />
        <Card style={{ display: cardNoteVisibility.unit10 ? 'none' : 'block' }}>
        
            <Card.Body>
                <SectionBloc
                    section={"section1"}
                    title={"Overview and reflection"}
                    toggleSection={(section) => toggleSection(section)} 
                    sectionVisibility={sectionVisibility.section1}
                />
                <div style={{display:'flex', textAlign: 'left', display: sectionVisibility.section1 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px'}}>
                * Describe a variety of distributed systems, and the pattern in which they evolved.<br/>
                * Discuss the security attacks that distributed systems, in particular, are vulnerable to.<br/>
                * Understand the ways in which virtual systems need to be protected due to the specific nature of attacks on them.<br/>
                
                </div>
                <SectionBloc
                    section={"section2"}
                    title={"Notes: From Distributed Computing to Microarchitectures"}
                    toggleSection={(section) => toggleSection(section)} 
                    sectionVisibility={sectionVisibility.section2}
                />
                <div style={{display:'flex', textAlign: 'left', display: sectionVisibility.section2 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px'}}>
                    Key words:<br/>
                    DoS attacks <br/>
                    Diffie-Hellman <br/>
                    Service Oriented Architectures (SOA)<br/>
                
                </div>
                <SectionBloc
                    section={"section3"}
                    title={"Faceted Data"}
                    toggleSection={(section) => toggleSection(section)} 
                    sectionVisibility={sectionVisibility.section3}
                />
                <div style={{display:'flex', textAlign: 'left', display: sectionVisibility.section3 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px'}}>
                    <p>
                        Read Schmitz et al (2016) article about faceted data.<br/>
                        Do you think this is a good approach to protect systems from data leakage? What are the pros and cons?<br/>
                        Create a basic outline design of how you would create such a system in Python. <br/>
                    </p>
                    Pros and Cons:<br/>
                    Pros:<br/>
                    Fine-Grained Access Control: Faceted data structures provide fine-grained control over data access based on security labels, such as private, public.<br/>
                    Expressive Security Policies: The system allows for expressing and enforcing complex security policies through facets.<br/>
                    Dynamic Information Flow: The ability to dynamically handle information flow allows for flexible and adaptive security measures.<br/>

                    Cons:<br/>
                    Learning Curve: Implementing and using faceted data structures may have a learning curve for developers unfamiliar with this approach.<br/>
                    Performance Overhead: There might be a performance overhead due to the dynamic nature of information flow checks.<br/>
                    Complexity: Managing facets and security labels can add complexity to the codebase.<br/>

                    Conclusion:<br/>
                    In conclusion, a faceted data protection system offers a robust mechanism for controlling data<br/>
                    access based on security labels. The system's pros include fine-grained access control and expressive security policies, <br/>
                    while cons involve a potential learning curve and some performance overhead. Careful consideration and testing are necessary to balance security requirements with system performance.<br/>
                    Faceted Data Protection System in Python<br/>

                    Faceted Data Structure:<br/>
                    Define a class for the faceted data structure, which includes labels, branches, and the data value.<br/>

                    File Handle Class:<br/>
                        Create a class to represent faceted file handles, including methods for reading, writing, opening, and closing files.<br/>

                    FIO (Faceted I/O) Class:<br/>
                    Develop a class for faceted I/O operations, including methods for running faceted operations and handling facets.<br/>

                    FIORef Class:<br/>
                    Implement a class to represent faceted references, allowing read and write operations.<br/>

                </div>
                <Card.Text style={{textAlign:'left'}}>
                </Card.Text>
            </Card.Body>
        </Card>
        </div>
    );
}

export default Unit10;