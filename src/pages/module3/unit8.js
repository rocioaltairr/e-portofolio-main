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
                title={"Unit 8: Cryptography and Its Use in Operating Systems"}
                toggleNoteCard={(unit) => toggleNoteCard(unit)} 
                cardNoteVisibility={cardNoteVisibility.unit8}
        />
        <Card style={{ display: cardNoteVisibility.unit8 ? 'none' : 'block' }}>
            <Card.Body  style={{textAlign : 'left' }}>
                <SectionBloc
                    section={"section1"}
                    title={"Overview and reflection"}
                    toggleSection={(section) => toggleSection(section)} 
                    sectionVisibility={sectionVisibility.section1}
                />
                <div  style={{display: sectionVisibility.section1 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px' }} className='card card-block'>
                Overview:<br/><br/>
                * Describe some of the issues encountered with cryptographic libraries:  In Collaborative Discussion 2: Cryptography case study - TrueCrypt, we discussed whether TrueCrypt is secure and analyzed it.<br/>
                * Explain the pros and cons of using common cryptographic libraries: We also discussed the pros and cons of TrueCrypt, showcasing its vulnerabilities and security levels from cryptanalysis.<br/>
                * Demonstrate the use of cryptographic libraries in a simple application: By using Crypto and AES Cipher, I can encrypt user data in Flask APIs.<br/>

                <br/><br/>
                Reflection: <br/><br/>

                Implications for me as an App Developer<br/>
                1. Secure Communication<br/>
                As an app developer, understanding cryptographic principles is essential.<br/>
                You’ll implement secure communication channels (HTTPS, TLS) to protect user data.<br/>
                Cryptography prevents man-in-the-middle attacks and data interception.<br/>
                <br/><br/>
                2. Data Encryption:<br/>
                Apps handle sensitive data—user credentials, payment information, health records.<br/>
                Proper encryption (AES, RSA) ensures data confidentiality.<br/>
                Choosing appropriate algorithms and key management is critical.<br/>
                <br/><br/>
                Authentication and Authorization:<br/>
                Cryptography verifies user identities (digital signatures, certificates).<br/>
                3. Authorization mechanisms (OAuth, JWT) rely on cryptographic tokens.<br/>
                Secure user sessions and API access using cryptographic tools.<br/>
                <br/>
                Usefulness for Future Computer Science Experts<br/>
                1. Foundational Knowledge:<br/>
                Cryptography is a fundamental pillar of computer science.<br/>
                Understanding algorithms, key exchange, and protocols prepares you for advanced research and development.<br/>
                2. Security Mindset:<br/>
                As a future expert, you’ll assess security risks.<br/>
                Cryptography awareness helps you design resilient systems.<br/>
                You’ll contribute to secure software development practices.<br/>
                <br/>
                3. Ethical Considerations:<br/>
                Cryptography intersects with ethics, policy, and law.<br/>
                Balancing encryption rights and law enforcement needs is a societal debate.<br/>
                Future experts shape these discussions.<br/>

                <br/>
                In summary, Unit 8 bridges theory and practice. Embrace cryptography—it’s not just about code; it’s about securing our digital future.
                </div>
                <SectionBloc
                    section={"section2"}
                    title={"Collaborative Discussion 2: Cryptography case study - TrueCrypt"}
                    toggleSection={(section) => toggleSection(section)} 
                    sectionVisibility={sectionVisibility.section2}
                />
                <div  style={{display: sectionVisibility.section2 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px' }} className='card card-block'>
                    <a style={{color: '#11ABB0'}} href='https://docs.google.com/document/d/1Rh4y1UsTp02SAtgDlWK3wKaGl2bljMxw3_qYY6VtMOM/edit'>Initial Post Link</a>
                </div>
            </Card.Body>
        </Card>
        </div>
    );
}

export default Unit8;