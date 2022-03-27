import React  from 'react';
import '../styles/destination.css';


const InfDestination = ({handleClick, satelite}) => {

    const uri = satelite.images.png;
    const uri2 = uri.slice(22)

    return (
        <div className="info-container">
           
            <div className='info-picture-satelite'> 
                <img src={require(`../assets/destination/${uri2}`).default} alt="moons" className="img-destination" /> 
            </div>

            <div className='info-satelite'>
                    <div className="place-arrival">
                        <p className={satelite.name  === 'Moon' ? 'active' : undefined } onClick={() => handleClick('Moon')}>Moon</p>
                        <p className={satelite.name  === 'Mars' ? 'active' : undefined } onClick={() => handleClick('Mars')}>Mars</p>
                        <p className={satelite.name  === 'Europa' ? 'active' : undefined } onClick={() => handleClick('Europa')}>Europa</p>
                        <p className={satelite.name  === 'Titan' ? 'active' : undefined } onClick={() => handleClick('Titan')}>Titan</p>
                    </div>

                    <h1 className="destination-name">{satelite.name}</h1>

                    <p className="info-text-destination">
                    {satelite.description}
                    </p>

                    <hr/>

                <div className='extra-info'>
                        <div className='distance'>
                            <p className="avg-distance">AVG. DISTANCE</p>
                            <p className="km-distance">{satelite.distance}</p>
                        </div>
                        <div className='time'>
                            <p className="est-time">EST. TRAVEL TIME</p>
                            <p className="days-disntance">{satelite.travel}</p>
                        </div>
                </div>
                
            </div>

        </div>
    );
};

export default InfDestination;
