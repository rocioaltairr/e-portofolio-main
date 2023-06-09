import React from 'react';
import Card from 'react-bootstrap/Card';

const Module1 = () => {
    return <div className='module1' style={{textAlign:'left'}}>
         <h1 style={{color:"white", textAlign:"center",padding:"20px"}}>Launching into Computer Science</h1>
        <h2 style={{color:"white"}}>Unit1</h2>
        <Card >
            <Card.Body>
                <Card.Title><h3 style={{color:"white"}}>Works</h3></Card.Title>
                <Card.Subtitle className="mb-2 text-muted"><p style={{color:"white", fontSize:"14px"}}>Create your e-portfolio on GitHub.</p></Card.Subtitle>
                <Card.Text>
                HTML, CSS, JavaScript, and the React framework for web developmen and learn Object Oriented Programming.
                </Card.Text>
                <Card.Link href="https://rocioaltairr.github.io/e-portofolio-main/">Web Link</Card.Link>
                <Card.Link href="https://github.com/rocioaltairr/e-portofolio-main">GitHub Link</Card.Link>
            </Card.Body>
        </Card>
        <Card >
            <Card.Body>
                <Card.Title><h3 style={{color:"white"}}>Reading</h3></Card.Title>
                <Card.Subtitle className="mb-2 text-muted"><p style={{color:"white", fontSize:"14px"}}>This week we focus on the challenges and threats that are particularly raised due to the advancement and widespread use of computing technology.</p></Card.Subtitle>
                <Card.Text>
                <div style={{display:'flex'}}>
                    <h4 style={{color:'#1abc9c',marginRight:"12px"}}>Chapter 4.6</h4>
                    <p style={{marginRight:"12px"}}>Of the core textbook explores the topic of cybersecurity.</p>
                </div>
                {/* <p>1. What is phishing? How are computers secured against it?</p>
                <p>2. What distinction is there between the types of firewalls that can be placed at a domain’s gateway as opposed to an individual host within the domain?</p>
                <p>3. Technically, the term data refers to representations of information, whereas information refers to the underlying meaning. Does the use of passwords protect data or information? Does the use of encryption protect data or information?</p>
                <p>4. What advantage does public-key encryption have over more traditional encryption techniques?</p>
                <p>5. What problems are associated with legal attempts to protect against network security problems?</p>
                <p>Question</p> */}
                <div style={{display:'flex'}}>
                    <h4 style={{color:'#1abc9c',marginRight:"12px"}}>Chapter 9.7</h4>
                    <p style={{marginRight:"12px"}}>discusses the social impact of database technology.</p>
                </div>
                {/* <p style={{color:'#1abc9c'}}>Question</p> */}
                {/* <p>1. Should law enforcement agencies be given access to databases for the purpose of identifying individuals with criminal tendencies, even though the individuals might not have committed a crime?</p>
                <p>2. Should insurance companies be given access to databases for the purpose of identifying individuals with potential medical problems, even though the individuals have not shown any symptoms?</p>
                <p>3. Suppose you were financially comfortable. What benefits could you derive if this information were shared among a variety of institutions? What penalties could you suffer from the distribution of this same information? What if you were financially uncomfortable?</p> */}
                {/* <p>4. What role does a free press have in controlling database abuse? (For example, to what extent does the press affect public opinion or expose abuse?)</p> */}

                <div style={{display:'flex'}}>
                    <h4 style={{color:'#1abc9c',marginRight:"12px"}}>Chapter 11.7</h4>
                    <p style={{marginRight:"12px"}}>Focuses on considering the consequences of actions in computer science.</p>
                </div>
                {/* <p style={{color:'#1abc9c'}}>Question</p>
                <p>1. In what way does the reactive approach to robot behavior differ from the more traditional "plan-based" behavior?</p>
                <p>2. What are some current topics of research in the field of robotics?</p>
                <p>3. What are two levels at which evolutionary theories are being applied to robot development?</p> */}
                <hr />
                <div style={{display:'flex'}}>
                    <h4 style={{color:'#1abc9c',marginRight:"12px"}}>GDPR</h4>
                    <p style={{marginRight:"12px"}}>stands for the General Data Protection Regulation</p>
                    <a href='https://commission.europa.eu/law/law-topic/data-protection/eu-data-protection-rules_en'>Link</a>
                </div>
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
}

export default Module1