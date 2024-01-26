import React from 'react';
import Card from 'react-bootstrap/Card';
import UnitHeaderTwo from '../Components/unit_header_two';

function Unit6({ cardVisibility, cardNoteVisibility, toggleCard, toggleNoteCard }) {
    return (
        <div>
        <UnitHeaderTwo
            unit={"unit6"}
                title={"Unit 6: Abstract Methods and Interfaces"}
                toggleNoteCard={(unit) => toggleNoteCard(unit)}
                toggleCard ={(unit) => toggleCard(unit)}
                cardNoteVisibility={cardNoteVisibility.unit6}
                cardVisibility={cardVisibility.unit6}
            />
        <Card style={{ display: cardNoteVisibility.unit6 ? 'none' : 'block' }}>
            <Card.Body>
                {/* <Card.Title><h3 style={{color:"white"}}></h3></Card.Title> */}
                <Card.Text style={{textAlign:'left'}}>
                    Seminar 3<br/>
                    in the sense of using abstract classes and interfaces to assign values to variables and execute methods<br/>
                    Propose object-oriented solutions using an appropriate modelling language, such as UML.<br/>
                </Card.Text>
            </Card.Body>
        </Card>
        <Card style={{ display: cardVisibility.unit6 ? 'none' : 'block' }}>
            <Card.Body>
                <Card.Title><h3 style={{color:"white"}}>Title: Abstraction in Object Oriented Programming</h3></Card.Title>
                <Card.Text style={{textAlign:'left'}}>
                    {/* <a href='https://www.dora.lib4ri.ch/eawag/islandora/object/eawag%3A16597/datastream/PDF/Knox-2018-A_python_framework_for_multi-agent-%28published_version%29.pdf'>https://www.dora.lib4ri.ch/eawag/islandora/object/eawag%3A16597/datastream/PDF/Knox-2018-A_python_framework_for_multi-agent-%28published_version%29.pdf</a><br/> */}              
                    <h3 style={{color:"#11ABB0"}}>1. Discuss the metrics used to assess the features of an object oriented program.</h3>
                    <strong>Cyclomatic Complexity: </strong> This measures how complicated the program's logic is. The higher it is, the more complex and challenging the code may be to understand and maintain.<br/>
                    <strong>Class Coupling: </strong>It checks how classes in your program depend on each other. High coupling can make code less reusable and harder to manage.<br/>
                    <br/><br/>

                    <h3 style={{color:"#11ABB0"}}>2. Develop a Python program which has three abstract methods and one subclass which allows a user to perform banking operations.</h3>
                    <br/>
                    <div style = {{background: 'white', padding: 12}}>
                        <pre>
                            <code class="language-python">
                            <p style={{margin: 0}}>class BankAccount:</p>
                            <p style={{margin: 0}}>&nbsp;&nbsp;def __init__(self):</p>
                            <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;self.balance = 0</p>
                            <br/>
                            <p style={{margin: 0}}>&nbsp;&nbsp;def deposit(self, amount):</p>
                            <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;if amount &gt; 0:</p>
                            <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.balance += amount</p>
                            <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;else:</p>
                            <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print("Invalid deposit amount. Amount must be positive.")</p>
                            <br/>
                            <p style={{margin: 0}}>&nbsp;&nbsp;def withdraw(self, amount):</p>
                            <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;if amount &gt; 0:</p>
                            <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if self.balance &gt;= amount:</p>
                            <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.balance -= amount</p>
                            <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(f"Withdrew $amount. New balance: $self.balance")</p>
                            <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;else:</p>
                            <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print("Insufficient funds.")</p>
                            <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;else:</p>
                            <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print("Invalid withdrawal amount. Amount must be positive.")</p>
                            <br/>
                            <p style={{margin: 0}}>&nbsp;&nbsp;def get_balance(self):</p>
                            <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;print(f"Current balance: $self.balance")</p>
                            <br/>
                            <p style={{margin: 0}}>def main():</p>
                            <p style={{margin: 0}}>&nbsp;&nbsp;account = BankAccount()</p>
                            <br/>
                            <p style={{margin: 0}}>while True:</p>
                            <p style={{margin: 0}}>&nbsp;&nbsp;print("\nBanking Options:")</p>
                            <p style={{margin: 0}}>&nbsp;&nbsp;print("1. Deposit")</p>
                            <p style={{margin: 0}}>&nbsp;&nbsp;print("2. Withdraw")</p>
                            <p style={{margin: 0}}>&nbsp;&nbsp;print("3. Check Balance")</p>
                            <p style={{margin: 0}}>&nbsp;&nbsp;print("4. Exit")</p>
                            <br/>
                            <p style={{margin: 0}}>&nbsp;&nbsp;choice = input("Enter your choice (1/2/3/4): ")</p>
                            <br/>
                            <p style={{margin: 0}}>&nbsp;&nbsp;if choice == '1':</p>
                            <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;amount = float(input("Enter the deposit amount: $"))</p>
                            <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;account.deposit(amount)</p>
                            <p style={{margin: 0}}>&nbsp;&nbsp;elif choice == '2':</p>
                            <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;amount = float(input("Enter the withdrawal amount: $"))</p>
                            <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;account.withdraw(amount)</p>
                            <p style={{margin: 0}}>&nbsp;&nbsp;elif choice == '3':</p>
                            <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;account.get_balance()</p>
                            <p style={{margin: 0}}>&nbsp;&nbsp;elif choice == '4':</p>
                            <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;print("Exiting program.")</p>
                            <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;break</p>
                            <p style={{margin: 0}}>&nbsp;&nbsp;else:</p>
                            <p style={{margin: 0}}>&nbsp;&nbsp;&nbsp;&nbsp;print("Invalid choice. Please select 1, 2, 3, or 4.")</p>
                            <br/>
                            <p style={{margin: 0}}>if __name__ == "__main__":</p>
                            <p style={{margin: 0}}>&nbsp;&nbsp;main()</p>
                            </code>
                        </pre>
                    </div>
                    <br/>
                    <h3 style={{color:"#11ABB0"}}>3. Read the article by Knox et al. (2018) and answer the following questions:</h3>
                    <br/>

                    <h5 style={{color:'white'}}>1. What is Component-based modelling?</h5>
                    
                    Component-based modeling is an approach used in environmental modeling where you break down a complex system into smaller "components" that represent specific parts or processes. Each component can be developed by different experts using their own approaches and terminology.<br/>
                    To make these components work together, a central framework or structure is used as a common interface. This allows all the components to communicate and be integrated into a single model. This approach makes it easier to create flexible and maintainable simulation models, even when dealing with different models created by various experts.<br/>
                    In the article by Knox et al. (2018), they discuss the Python Network Simulation (Pynsim) Framework, which is an example of this component-based modeling approach. In Pynsim, a network structure is used as the central framework for building simulation models of networked systems, including physical and non-physical entities like organizational hierarchies.<br/>
                    <br/>
                    <h5 style={{color:'white'}}>2. Upon what do component-based modelling frameworks depend?</h5>
                    Component-based modeling frameworks depend on a few things:<br/>
                    Integration Structure: They need a central structure that acts as a common interface for connecting different parts of a model.<br/>
                    Abstractions: They use standard definitions for inputs, outputs, and the context in which models work.<br/>
                    Flexibility: They should allow easy addition and removal of components, making it possible to integrate various models without a lot of changes.<br/>
                    Minimal Changes: They aim to minimize how much individual models have to be modified to fit into the framework.<br/>
                    Value Evaluation: They consider whether adding a particular model to the framework is worthwhile and how it contributes to the overall modeling goals.<br/>
                    <br/>
                    <h5 style={{color:'white'}}>3. Within the context of the work presented in this paper, what is Pynsim?</h5>
                    In the context of the paper, Pynsim is a specialized framework in Python. It's designed for building simulation models for networked systems. Pynsim is all about making it easy for different parts of a model to work together.<br/>
                    It uses a network structure as a common way for these model parts to connect, instead of them directly communicating with each other. This setup allows different sub-models to follow a common representation of a network of nodes and links. Pynsim doesn't force any specific rules for how models talk to each other, but it provides a basic structure for building network-based simulations.<br/>
                    Pynsim is also built to be flexible. It helps with combining different components easily, and it supports agent-based modeling, where individual elements in the network can do their own tasks during the simulation. Pynsim can even represent non-physical structures like organizational hierarchies.<br/>
                    The key contribution of Pynsim in this work is that it's a component-based simulation framework specifically created for networks. It makes it easier to model decision-making hierarchies and supports multi-agent modeling. The best part is that it's available as a standard Python library, making it accessible to a wide range of researchers and developers.<br/>
                    <br/>
                    <h5 style={{color:'white'}}>4. How does Pynsim achieve its goal when using object oriented Python programming?</h5>
                    Pynsim uses object-oriented Python programming to make it easy to build flexible and modular simulation models for networked systems. Here's how it works:<br/>
                    Templates: Pynsim provides templates (abstract classes) for different parts of the model, like network nodes and links. Users can use these templates to create their specific components.<br/>
                    Sharing: Components can share common features and behaviors defined in these templates. This reduces repetition and makes the system more consistent.<br/>
                    Modularity: Pynsim encourages breaking the model into separate parts, each represented by a class. For example, you might have a class for nodes and another for links. This modular approach allows you to change or add components without affecting the whole system.<br/>
                    Isolation: Each component's data and methods are kept separate in their class, so they don't interfere with other parts of the program. This isolation helps manage complexity.<br/>
                    Consistency: Different components can work together because they follow the same rules, even if they have different internal workings. This is called polymorphism.<br/>
                    Customization: You can create new components by extending the templates. This flexibility allows you to adapt the framework to your specific modeling needs.<br/>
                    Dynamic Actions: In Pynsim, network elements can do things on their own during the simulation. This dynamic behavior is achieved through object-oriented programming.<br/>
                    So, by using object-oriented Python, Pynsim offers a structured way to build and customize simulation models, making them easy to manage, change, and extend as needed.<br/>
                    <br/>
                    <h3 style={{color:"#11ABB0"}}>4. Final reflection</h3>
                </Card.Text>
            </Card.Body>
        </Card>
        </div>
    );
}

export default Unit6;