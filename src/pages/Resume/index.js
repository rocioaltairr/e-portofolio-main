import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img1 from './alexandre-debieve-FO7JIlwjOtU-unsplash.jpg'
import { Link } from 'react-router-dom';

class Resume extends Component {
  render() {
    return (
      <section id="resume">
        <div style={{display:'flex', flexDirection:'flex-start'}}>
          <Card style={{ backgroudColor: 'red'}}>
              <Card.Img variant="top" src={img1} />
              <Card.Body>
                  <Card.Title>Launching into Computer Science May 2023</Card.Title>
                  <Card.Text>
                  Module1
                  </Card.Text>
                  <Link to="/module1"><Button variant="primary">View more</Button></Link>
              </Card.Body>
          </Card>
        </div>
      </section>
    )
  }
}

export default Resume;
