import React from 'react';
import Card from 'react-bootstrap/Card';

function Unit10({ cardVisibility, cardNoteVisibility, toggleCard, toggleNoteCard }) {
    return (
        <div>
        <div className="d-flex  justify-content-between align-items-center">
            <h3 style={{ color: 'white' }}>Unit 10: Testing Code in Practice</h3>
            <div>
                <button style={{ marginRight: 16 }} className="btn btn-primary ml-2" onClick={() => toggleNoteCard('unit10')}>{cardNoteVisibility.unit10 ? 'Show Note' : 'Close Note'}</button>
                <button className="btn btn-primary ml-2" onClick={() => toggleCard('unit10')}>{cardVisibility.unit10 ? 'Show' : 'Close'}</button>
            </div>
        </div>
        <Card style={{ display: cardNoteVisibility.unit10 ? 'none' : 'block' }}>
            <Card.Body>
                {/* <Card.Title><h3 style={{color:"white"}}></h3></Card.Title> */}
                <Card.Text style={{textAlign:'left'}}>
                    "Testing can show the presence of defects but not the absence of them" __ E. W. Dijkstra<br/>
                    EQUIVALENCE PARTITIONING
                    Ｗhite box testing is focused on the internal workings of the software and is typically used for verifying code quality and logic. <br/>
                    Black box testing is concerned with the software's external behavior and is used to verify that it meets the functional requirements and is user-friendly. <br/>
                    UNIT TEST: mocking <br/>
                    INTEGRATION TEST: 
                    Top-down testing 
                    Bottom-up testing <br/>
                </Card.Text>
            </Card.Body>
        </Card>
        <Card style={{ display: cardVisibility.unit10 ? 'none' : 'block' }}>
            <Card.Body>
                {/* <Card.Title><h3 style={{color:"white"}}></h3></Card.Title> */}
                <Card.Text style={{textAlign:'left'}}>
                Activity 1<br/>
                Run the following code using pylint and identify the errors.<br/>
                <br/>
                def factorial (x)<br/>
                    if x == 1:<br/>
                        return 1<br/>
                    <br/>
                    else:<br/>
                        return (x * factorial(x-1))<br/>

                num = 3<br/>
                print("The factorial of", num, "is", factorial(num))  <br/>
                Source: Progamiz. (n.d.) <a href='https://www.programiz.com/python-programming/recursion'>Python Recursion.</a><br/>

                Activity 2<br/>
                In ‘Packaging & Testing’ (unit 9), we examined the use of documentation to support code developments. Add appropriate commenting and documentation for the code below.<br/>

                def add(x, y): <br/>
                return x + y <br/>
                def subtract(x, y): <br/>
                return x - y <br/>
                def multiply(x, y): <br/>
                return x * y <br/>
                def divide(x, y): <br/>
                return x / y <br/>
                print("Select operation.") <br/>
                print("1.Add") <br/>
                print("2.Subtract") <br/>
                print("3.Multiply") <br/>
                print("4.Divide") <br/>
                while True: <br/>
                choice = input("Enter choice(1/2/3/4): ")  <br/>
                if choice in ('1', '2', '3', '4'): <br/>
                num1 = float(input("Enter first number: ")) <br/>
                num2 = float(input("Enter second number: ")) <br/>
                if choice == '1': print(num1, "+", num2, "=", add(num1, num2)) <br/>
                elif choice == '2': print(num1, "-", num2, "=", subtract(num1, num2)) <br/>
                elif choice == '3': print(num1, "*", num2, "=", multiply(num1, num2)) <br/>
                elif choice == '4': print(num1, "/", num2, "=", divide(num1, num2)) <br/>
                break the while loop if answer is no next_calculation = input("Let's do next calculation? (yes/no): ") <br/>
                if next_calculation == "no": <br/>
                break <br/>
                else: print("Invalid Input")<br/>
                Source: Progamiz. (n.d.) <a href='https://www.programiz.com/python-programming/examples/calculator'>Python Program to Make a Simple Calculator.</a><br/>

                Activity 3<br/>
                Read the article by Rani et al. (2021). What impact does this article have on the way in which you have commented the code in the task above?<br/>

                Activity 4<br/>
                Integrate unit tests into the code in Activity 2 to test operation of the methods.<br/>
                </Card.Text>
            </Card.Body>
        </Card>
        </div>
    );
}

export default Unit10;