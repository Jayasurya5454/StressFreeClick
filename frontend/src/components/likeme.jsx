import React from 'react';
import Checkbox from '../components/barisdogonsutcu/Checkbox';
import Checkbox1 from '../components/htwarriors/Checkbox';
import Checkbox2 from '../components/simontheonlyone/Checkbox';
import Checkbox3 from '../components/souravBandyopadhyay/Checkbox';
import Checkbox4 from '../components/trayRandall/Checkbox';
const Likeme = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around', 
        alignItems: 'center',
        marginTop: '150px',
        flexWrap: 'wrap', 
        gap: '20px', 
        width: '80%', 
        boxSizing: 'border-box', 
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <Checkbox1 />
      </div>
      <div style={{ textAlign: 'center' }}>
        <Checkbox />
      </div>
      <div style={{ textAlign: 'center' }}>
        <Checkbox3 />
      </div>
      <div style={{ textAlign: 'center' }}>
        <Checkbox2 />
      </div>
      <div style={{ textAlign: 'center' }}>
        <Checkbox4 />
      </div>
      
    </div>
  );
};

export default Likeme;
