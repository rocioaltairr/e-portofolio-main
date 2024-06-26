import React from 'react';
import up from './icons8-up-100.png'
import down from './icons8-down-button-100.png'

const UnitHeaderTwo = ({ unit, title, toggleNoteCard,toggleCard, cardNoteVisibility, cardVisibility}) => {
  return (
    <div>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}} className="">
            <h3 style={{ margin: 0 }}>{title}</h3>
            <div style={{display: 'flex'}}>
                <button style={{width: '100%', background: cardNoteVisibility ? 'transparent' : '#1abc9c',border:'0px'}} className="btn btn-primary ml-2" onClick={() => toggleNoteCard(unit)}>
                    {
                    cardNoteVisibility ? 
                        <img style={{width: '20px',background: 'white',borderRadius: '10px'}} src={up}></img> : 
                        <img style={{width: '20px',background: 'white',borderRadius: '10px'}} src={down}></img>
                    }
                </button>
                <button style={{width: '100%', background: cardVisibility ? 'transparent' : '#1abc9c',border:'0px'}} className="btn btn-primary ml-2" onClick={() => toggleCard(unit)}>
                    {
                    cardVisibility ? 
                        <img style={{width: '20px',background: 'white',borderRadius: '10px'}} src={up}></img> 
                        : <img style={{width: '20px',background: 'white',borderRadius: '10px'}} src={down}></img>
                    }
                </button>
            </div>
        </div>
      <div style={{background:'#e7e7e7', height: '1px', marginLeft: '24px', marginRight: '24px'}}></div>
    </div>
  );
}

export default UnitHeaderTwo;
