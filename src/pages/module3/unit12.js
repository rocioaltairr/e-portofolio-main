import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import UnitHeader from '../Components/unit_header'; 
import SectionBloc from '../Components/section_bloc';

function Unit12({ cardNoteVisibility, toggleNoteCard }) {
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
            unit={"unit12"}
                title={"Unit 12: The Great Tanenbaum-Torvalds Debate Revisited"}
                toggleNoteCard={(unit) => toggleNoteCard(unit)} 
                cardNoteVisibility={cardNoteVisibility.unit12}
        />
        <Card style={{ display: cardNoteVisibility.unit12 ? 'none' : 'block' }}>
            <Card.Body style={{textAlign: 'left'}}>
            <SectionBloc
                section={"section1"}
                title={"Overview and reflection"}
                toggleSection={(section) => toggleSection(section)} 
                sectionVisibility={sectionVisibility.section1}
            />
            <div class="card card-block" style={{textAlign: 'left', display: sectionVisibility.section1 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px'}}>
                Overview:
                <br/>
                * Recommend a strategy around which methodology to adopt: monolithic or microservices.<br/>
                * Provide evidence to support your recommendation.<br/>
                * Explain how faceted data approaches work.<br/>
                <br/>
                Reflection:
                <br/>
                The debate is quite interesting. Reviewing and giving feedback to peers, I've learned that even when on the same side, you could still criticize through research and not trust every source. Everything should be valued.
            </div>

            <SectionBloc
                section={"section2"}
                title={"Our team’s stance to the forum along with justifications"}
                toggleSection={(section) => toggleSection(section)} 
                sectionVisibility={sectionVisibility.section2}
            />
            <div class="card card-block" style={{textAlign: 'left', display: sectionVisibility.section2 ? 'none' : 'block', background: 'rgb(237 237 237)', padding:'20px'}}>
                
                Our team's stance provides a balanced perspective on the ongoing debate between monolithic
                 and microservices architectures. 
                I acknowledge the increasing popularity of microservices while also recognizing that monolithic 
                architecture won't disappear entirely, offering insights into the advantages and challenges of each approach.<br/>

                To reply to the forum post, you could write something like:<br/>

                Our team concurs with the viewpoints expressed in both Elliot and Claire's posts. 
                We believe that while microservices architecture is indeed gaining momentum, 
                it doesn't signify the complete obsolescence of monolithic architecture.<br/>

                As Elliot pointed out, the adoption of microservices often complements 
                rather than replaces monolithic systems, especially in scenarios where 
                simplicity and cost-efficiency are paramount. Additionally, Claire's detailed analysis 
                on the advantages and challenges of both architectural paradigms, emphasizing 
                the importance of considering factors such as project requirements, scalability needs, and team expertise.<br/>

                We agree that the future of software architecture will likely involve a blend of approaches, 
                including hybrid models that integrate microservices and microkernels. 
                It's crucial to remain adaptable and informed as technological trends evolve.<br/>
            </div>
            </Card.Body>
        </Card>
        </div>
    );
}

export default Unit12;