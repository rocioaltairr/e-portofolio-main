import React from 'react';
import Card from 'react-bootstrap/Card';

function Unit5({ cardVisibility, cardNoteVisibility, toggleCard, toggleNoteCard }) {
    return (
        <div>
        <div className="d-flex  justify-content-between align-items-center">
            <h3 style={{ color: 'white' }}>Unit 5: More on Classess</h3>
            <div>
                <button style={{ marginRight: 16 }} className="btn btn-primary ml-2" onClick={() => toggleNoteCard('unit5')}>{cardNoteVisibility.unit5 ? 'Show Note' : 'Close Note'}</button>
                <button className="btn btn-primary ml-2" onClick={() => toggleCard('unit5')}>{cardVisibility.unit5 ? 'Show' : 'Close'}</button>
            </div>
        </div>
        <Card style={{ display: cardNoteVisibility.unit5 ? 'none' : 'block' }}>
            <Card.Body>
                <Card.Title><h3 style={{color:"white"}}></h3></Card.Title>
                <Card.Subtitle className="mb-2 text-muted"><p style={{color:"white", fontSize:"14px"}}>The Four pillars of OOP</p></Card.Subtitle>
                <Card.Text>
                explore the concept of classes in Python further, in the sense of assigning variable values using a constructor, in addition to the use of an abstract class.<br/>
                In this unit, there is a formative activity to complete – e-Portfolio Activity: Polymorphism which cover the following learning outcomes:<br/>
                Design and implement programs that demonstrate appropriate use of object-oriented design principles.<br/><br/>
                
                Abstraction<br/>
                Encapsulation<br/>
                Inheritance<br/>
                Polymorphism<br/>
                -----<br/>
                Create a Python program which uses a constructor and abstract class.<br/>
                Describe the concepts of polymorphism, aggregation and composition.<br/>
                Name variables according to the namespace within which they exist.<br/>
                </Card.Text>
            </Card.Body>
        </Card>
        <Card style={{ display: cardVisibility.unit5 ? 'none' : 'block' }}>
            <Card.Body>
                <Card.Title><h3 style={{color:"white"}}>e-Portfolio Activity: Polymorphism</h3></Card.Title>
                {/* <Card.Subtitle className="mb-2 text-muted"><p style={{color:"white", fontSize:"14px"}}>Polymorphism</p></Card.Subtitle> */}
                <Card.Text>
                <h4 style={{color:"#11ABB0"}}>1. Write a Python program with polymorphism that is usable within the summative assessment for the driverless car.</h4>
                <br/>
                <div style={{background: 'white', padding: 12}}>
                    <pre>
                        <code class="language-python">
                            <p style={{margin: 0}}>class Sensor:</p>
                            <p style={{margin: 0}}>&nbsp;&nbsp;def __init__(self, sensor_type):</p>
                            <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;self.sensor_type = sensor_type</p>
                            <br/>
                            <p style={{margin: 0}}>&nbsp;&nbsp;def read_data(self):</p>
                            <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;pass</p>
                            <br/>
                            <p style={{margin: 0}}>class CameraSensor(Sensor):</p>
                            <p style={{margin: 0}}>&nbsp;&nbsp;def read_data(self):</p>
                            <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;return "Capturing images"</p>
                            <br/>
                            <p style={{margin: 0}}>class LidarSensor(Sensor):</p>
                            <p style={{margin: 0}}>&nbsp;&nbsp;def read_data(self):</p>
                            <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;return "Scanning with Lidar"</p>
                            <br/>
                            <p style={{margin: 0}}>class RadarSensor(Sensor):</p>
                            <p style={{margin: 0}}>def collect_sensor_data(sensor):</p>
                            <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;return "Detecting objects with radar"</p>
                            <br/>
                            <p style={{margin: 0}}># Polymorphic function</p>
                            <p style={{margin: 0}}>def __init__(self, sensor_type):</p>
                            <p style={{margin: 0}}>&nbsp;&nbsp;return sensor.read_data()</p>
                            <br/>
                            <p style={{margin: 0}}># Create different sensors</p>
                            <p style={{margin: 0}}>camera_sensor = CameraSensor("Camera")</p>
                            <p style={{margin: 0}}>lidar_sensor = LidarSensor("Lidar")</p>
                            <p style={{margin: 0}}>radar_sensor = RadarSensor("Radar")</p>
                            <br/>
                            <p style={{margin: 0}}># Store sensors in a list</p>
                            <p style={{margin: 0}}>sensors = [camera_sensor, lidar_sensor, radar_sensor]</p>
                            <br/>
                            <p style={{margin: 0}}># Collect data from all sensors using polymorphism</p>
                            <p style={{margin: 0}}>for sensor in sensors:</p>
                            <p style={{margin: 0}}>&nbsp;&nbsp;data = collect_sensor_data(sensor)</p>
                            {/* <p style={{margin: 0}}>&nbsp;&nbsp;print(f"&#123;{sensor.sensor_type} Sensor: {data}&#125;")</p> */}
                            <br/>
                        </code>
                    </pre>
                </div>
                </Card.Text>
            </Card.Body>
        </Card>
        </div>
    );
}

export default Unit5;