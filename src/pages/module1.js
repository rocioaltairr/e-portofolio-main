import React from 'react';
import Card from 'react-bootstrap/Card';

const Module1 = () => {
    return <div style={{textAlign:'left'}}>
        <h2 style={{color:"white"}}>Unit1</h2>
        <Card >
            <Card.Body>
                <Card.Title><h3 style={{color:"white"}}>Works</h3></Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Create your e-portfolio on GitHub.</Card.Subtitle>
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
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>

                <p>Chapter 4.6 of the core textbook explores the topic of cybersecurity.</p>
                1. Should law enforcement agencies be given access to databases for the purpose of identifying individuals with criminal tendencies, even though the individuals might not have committed a crime?
2. Should insurance companies be given access to databases for the purpose of identifying individuals with potential medical problems, even though the individuals have not shown any symptoms?
3. Suppose you were financially comfortable. What benefits could you derive if this information were shared among a variety of institutions? What penalties could you suffer from the distribution of this same information? What if you were financially uncomfortable?
4. What role does a free press have in controlling database abuse? (For example, to what extent does the press affect public opinion or expose abuse?)
                <p>Chapter 9.7 discusses the social impact of database technology.</p>
                1. Should law enforcement agencies be given access to databases for the purpose of identifying individuals with criminal tendencies, even though the individuals might not have committed a crime?
2. Should insurance companies be given access to databases for the purpose of identifying individuals with potential medical problems, even though the individuals have not shown any symptoms?
3. Suppose you were financially comfortable. What benefits could you derive if this information were shared among a variety of institutions? What penalties could you suffer from the distribution of this same information? What if you were financially uncomfortable?
4. What role does a free press have in controlling database abuse? (For example, to what extent does the press affect public opinion or expose abuse?)
                <p>Chapter 11.7 focuses on considering the consequences of actions in computer science.</p>
                
                <p>1. In what way does the reactive approach to robot behavior differ from the more traditional "plan-based" behavior?</p>
                
                <p>2. What are some current topics of research in the field of robotics?</p>

                <p>3. What are two levels at which evolutionary theories are being applied to robot development?</p>
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
}

export default Module1