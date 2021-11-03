import React  from 'react';
import '../styles/destination.css';
import logo from '../assets/destination/image-moon.png';

const InfDestination = ({handleClick, satelite}) => {

    console.log(satelite)
    return (
        <div className="info-container">

            <h3 className="title-destination"><span>01</span> PICK YOUR DESTINATION</h3>

            <img src={logo} alt="moons" className="img-destination" />

            <div className="place-arrival">
                <p className={satelite.name  === 'Moon' && 'active' } onClick={() => handleClick('Moon')}>Moon</p>
                <p className={satelite.name  === 'Mars' && 'active' } onClick={() => handleClick('Mars')}>Mars</p>
                <p className={satelite.name  === 'Europa' && 'active' } onClick={() => handleClick('Europa')}>Europa</p>
                <p className={satelite.name  === 'Titan' && 'active' } onClick={() => handleClick('Titan')}>Titan</p>
            </div>

            <h1 className="destination-name">{satelite.name}</h1>

            <p className="info-text-destination">
               {satelite.description}
            </p>

            <hr/>

            <p className="avg-distanse">AVG. DISTANCE</p>

            <p className="km-distanse">{satelite.distance}</p>

            <p className="est-time">EST. TRAVEL TIME</p>

            <p className="days-disntanse">{satelite.travel}</p>
        </div>
    );
};

export default InfDestination;
