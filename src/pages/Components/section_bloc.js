import React from 'react';
import up from './icons8-up-100.png'
import down from './icons8-down-button-100.png'

const SectionBloc = ({ section, title, toggleSection, sectionVisibility, }) => {
  return (
    <div>
      <button style={{width: '100%', background: sectionVisibility ? 'transparent' : 'transparent',border:'0px'}} className="btn btn-primary ml-2" onClick={() => toggleSection(section)}>
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', fontSize: '20px' }} className="">
          <h3 style={{ color: sectionVisibility ? 'black' : 'black', margin: 0 }}>{title}</h3>
          {
            sectionVisibility ? 
              <img style={{width: '20px',background: 'white',borderRadius: '10px'}} src={up}></img> : 
              <img style={{width: '20px',background: 'white',borderRadius: '10px'}} src={down}></img>
           }
          </div>
      </button>
      
      <div style={{background:'#e7e7e7', height: '1px', marginLeft: '24px', marginRight: '24px'}}></div>
    </div>
  );
}

export default SectionBloc;
