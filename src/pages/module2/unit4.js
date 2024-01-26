import React from 'react';
import Card from 'react-bootstrap/Card';
import UnitHeaderTwo from '../Components/unit_header_two';
// import activity_uml from '../images/module2/Activity Diagram.png';

function Unit4({ cardVisibility, cardNoteVisibility, toggleCard, toggleNoteCard }) {
    return (
        <div>
        <UnitHeaderTwo
            unit={"unit4"}
                title={"Unit 4: Applying a UML Model to a Program Implementation: UML in Practice"}
                toggleNoteCard={(unit) => toggleNoteCard(unit)}
                toggleCard ={(unit) => toggleCard(unit)}
                cardNoteVisibility={cardNoteVisibility.unit4}
                cardVisibility={cardVisibility.unit4}
            />
        <Card style={{ display: cardNoteVisibility.unit4 ? 'none' : 'block' }}>
            <Card.Body>
                <Card.Title><h3 style={{color:"white"}}>Activity Diagram</h3></Card.Title>
                <Card.Text style={{textAlign:'left'}}>
                    Seminar2<br/>
                    1. Design and implement programs that demonstrate appropriate use of object-oriented design principles.<br/>
                    2. Propose object-oriented solutions using an appropriate modelling language, such as UML.<br/>
                </Card.Text>
            </Card.Body>
        </Card>
        <Card style={{ display: cardVisibility.unit4 ? 'none' : 'block' }}>
            <Card.Body>
                <Card.Title><h3 style={{color:"white"}}>e-Portfolio Activities</h3></Card.Title>
                <Card.Text style={{textAlign:'left'}}>
                <h4 style={{color:"#11ABB0"}}>1. Design an activity diagram which shows the relationships and interactivity between the user’s behaviour within the driverless car.</h4>
                <div className="d-flex justify-content-between">
                    <div style={{width:"45%"}} >
                        {/* <Card.Img variant="top" src={activity_uml} /> */}
                    </div>
                </div>
                <h4 style={{color:"#11ABB0"}}>2. Expand upon the activity diagram with the development of a class diagram using UML to support a system with basic employee-related functionality. This should include the retention of employee details and allowing an employee to book a day of annual leave.
                    Develop the Python program to implement the class model.</h4>
                <br/>
                <div style={{background: 'white', padding: 12}}>
                    <pre>
                        <code class="language-python">
                            class Employee:<br/>
                                <p style={{margin: 0}}>&nbsp;&nbsp;def __init__(self, employee_id, first_name, last_name, email, annual_balance):</p>
                                <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;self.employee_id = employee_id</p>
                                <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;self.first_name = first_name</p>
                                <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;self.last_name = last_name</p>
                                <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;self.email = email</p>
                                <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;self.annual_balance = annual_balance</p>
                            <br/>
                            class AnnualLeave:<br/>
                                <p style={{margin: 0}}>&nbsp;&nbsp;def __init__(self, leave_id, start_date, end_date, employee_id):</p>
                                <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;self.leave_id = leave_id</p>
                                <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;self.start_date = start_date</p>
                                <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;self.end_date = end_date</p>
                                <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;self.employee_id = employee_id</p>
                            <br/>
                            employee1 = Employee(1, "John", "Doe", "john@example.com", 20)<br/>
                            annual_leave1 = AnnualLeave(1, "2023-01-01", "2023-01-05", 1)<br/>
                        </code>
                    </pre>
                </div>
                </Card.Text>
            </Card.Body>
        </Card>
        </div>
    );
}

export default Unit4;