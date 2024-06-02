import React from 'react';
import up1 from './icons8-up-100.png'
import down1 from './icons8-down-button-100.png'


const UnitHeader = ({ unit, title, toggleNoteCard, cardNoteVisibility}) => {

  return (
    <div>
      <button style={{width: '100%', background: cardNoteVisibility ? 'transparent' : '#1abc9c',border:'0px'}} className="btn btn-primary ml-2" onClick={() => toggleNoteCard(unit)}>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', fontSize: '20px' }} className="">
          <h3 style={{ color: cardNoteVisibility ? 'black' : 'white', margin: 0 }}>{title}</h3>
          {
            cardNoteVisibility ? 
              <img style={{width: '20px',background: 'white',borderRadius: '10px'}} src={up1}></img> : 
              <img style={{width: '20px',background: 'white',borderRadius: '10px'}} src={down1}></img>
           }
          </div>
      </button>
      
      <div style={{background:'#e7e7e7', height: '1px', marginLeft: '24px', marginRight: '24px'}}></div>
    </div>
  );
}

export default UnitHeader;
