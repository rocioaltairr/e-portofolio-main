
import React, { useState } from 'react';
import Unit1 from './module3/unit1'; 
import Unit2 from './module3/unit2'; 
import Unit3 from './module3/unit3'; 
import Unit4 from './module3/unit4'; 
import Unit5 from './module3/unit5'; 
import Unit6 from './module3/unit6'; 
import Unit7 from './module3/unit7'; 
import Unit8 from './module3/unit8'; 
import Unit9 from './module3/unit9'; 
import Unit10 from './module3/unit10'; 
import Unit11 from './module3/unit11'; 

const Module3 = () => {
    const [cardVisibility, setCardVisibility] = useState({
        unit1: true,
        unit2: true,
        unit3: true,
        unit4: true,
        unit5: true,
        unit6: true,
        unit7: true,
        unit8: true,
        unit9: true,
        unit10: true,
        unit11: true,
    });

    const [cardNoteVisibility, setNoteCardVisibility] = useState({
        unit1: true,
        unit2: true,
        unit3: true,
        unit4: true,
        unit5: true,
        unit6: true,
        unit7: true,
        unit8: true,
        unit9: true,
        unit10: true,
        unit11: true,
      });
  
    const toggleCard = (unit) => {
      setCardVisibility((prevState) => ({
        ...prevState,
        [unit]: !prevState[unit],
      }));
    };

    const toggleNoteCard = (unit) => {
        setNoteCardVisibility((prevState) => ({
          ...prevState,
          [unit]: !prevState[unit],
        }));
      };

    return <div className='module3' style={{textAlign:'left'}}>
        <h1 style={{color:"white", textAlign:"center",padding:"20px"}}>Object Oriented Programming August 2023</h1>

        <Unit1
                cardVisibility={cardVisibility}
                cardNoteVisibility={cardNoteVisibility}
                toggleCard={toggleCard}
                toggleNoteCard={toggleNoteCard}
        />

        <Unit2
                cardVisibility={cardVisibility}
                cardNoteVisibility={cardNoteVisibility}
                toggleCard={toggleCard}
                toggleNoteCard={toggleNoteCard}
        />
        
        <Unit3
                cardVisibility={cardVisibility}
                cardNoteVisibility={cardNoteVisibility}
                toggleCard={toggleCard}
                toggleNoteCard={toggleNoteCard}
        />

        <Unit4
                cardVisibility={cardVisibility}
                cardNoteVisibility={cardNoteVisibility}
                toggleCard={toggleCard}
                toggleNoteCard={toggleNoteCard}
        />

        <Unit5
                cardVisibility={cardVisibility}
                cardNoteVisibility={cardNoteVisibility}
                toggleCard={toggleCard}
                toggleNoteCard={toggleNoteCard}
        />
        
        <Unit6
                cardVisibility={cardVisibility}
                cardNoteVisibility={cardNoteVisibility}
                toggleCard={toggleCard}
                toggleNoteCard={toggleNoteCard}
        />

        <Unit7
                cardVisibility={cardVisibility}
                cardNoteVisibility={cardNoteVisibility}
                toggleCard={toggleCard}
                toggleNoteCard={toggleNoteCard}
        />

        <Unit8
                cardVisibility={cardVisibility}
                cardNoteVisibility={cardNoteVisibility}
                toggleCard={toggleCard}
                toggleNoteCard={toggleNoteCard}
        />

        <Unit9
                cardVisibility={cardVisibility}
                cardNoteVisibility={cardNoteVisibility}
                toggleCard={toggleCard}
                toggleNoteCard={toggleNoteCard}
        />

        <Unit10
                cardVisibility={cardVisibility}
                cardNoteVisibility={cardNoteVisibility}
                toggleCard={toggleCard}
                toggleNoteCard={toggleNoteCard}
        />

        <Unit11
                cardVisibility={cardVisibility}
                cardNoteVisibility={cardNoteVisibility}
                toggleCard={toggleCard}
                toggleNoteCard={toggleNoteCard}
        />
    </div>
}

export default Module3