import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img1 from './alexandre-debieve-FO7JIlwjOtU-unsplash.jpg'
import img_security from './cyber-security.jpeg'
import img_oop from './oop.jpg'
import { Link } from 'react-router-dom';

class Resume extends Component {
  render() {
    return (
      <section id="resume">
        <div className="modules-div">
          <Card>
              <Card.Img variant="top" src={img1} />
              <Card.Body>
                  <Card.Title><p style={{fontWeight:'bold'}}>Module1</p></Card.Title>
                  <Card.Text>
                  Launching into Computer Science
                  </Card.Text>
                  <Link to="/module1"><Button variant="primary">View more</Button></Link>
              </Card.Body>
          </Card>
          <Card>
              <Card.Img variant="top" src={img_oop} />
              <Card.Body>
                  <Card.Title><p style={{fontWeight:'bold'}}>Module2</p></Card.Title>
                  <Card.Text>
                  Object-Oriented Programming
                  </Card.Text>
                  <Link to="/module2"><Button variant="primary">View more</Button></Link>
              </Card.Body>
          </Card>
          <Card>
              <Card.Img variant="top" src={img_security} />
              <Card.Body>
                  <Card.Title><p style={{fontWeight:'bold'}}>Module3</p></Card.Title>
                  <Card.Text>
                  <h2>Secure Software Development</h2>
                  </Card.Text>
                  <Link to="/module3"><Button variant="primary">View more</Button></Link>
              </Card.Body>
          </Card>
        </div>
      </section>
    )
  }
}

export default Resume;
