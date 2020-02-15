import React from 'react';
import { useHistory } from 'react-router-dom';
import './Slide4.css';


export default function Slide4() {
  
  const history = useHistory();

  return(
    <center>
      <div className="list-slide-main-container" onClick={()=>history.push(`/slide5`)}>
        <h1 className="list-slide-heading">Challenges</h1>
        <ul className="list-ul">
          <li className="list-li">Unreadable speadsheets</li>
          <li className="list-li">Financial jargon</li>
          <li className="list-li">Unknown factors</li>
          <li className="list-li">Gender pay gap</li>
          <li className="list-li">Translating information</li>
        </ul>

        <p className="list-tagline">- small changes result in big improvements -</p>
      </div>
    </center>
  );
}