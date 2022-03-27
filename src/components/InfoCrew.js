import React from 'react';
import '../styles/crew.css';
import img from '../assets/crew/image-douglas-hurley.png'

const InfoCrew = ({handleClick, crew }) => {

    const uri = crew.images.png;
    const uri2 = uri.slice(15);

    return (
        <div className="info-container-crew">

        <div className="crew-picture-frame">
            <img src={require(`../assets/crew/${uri2}`).default} alt="moons" className="img-destination" />
        </div>
        
        <div className='crew-info-text'>
            <div className="crew-button">
            <p className={crew.name  === 'Douglas Hurley' ? 'active' : undefined } onClick={() => handleClick('Douglas Hurley')}></p>
            <p className={crew.name  === 'Mark Shuttleworth' ? 'active' : undefined } onClick={() => handleClick('Mark Shuttleworth')}></p>
            <p className={crew.name  === 'Victor Glover' ? 'active' : undefined } onClick={() => handleClick('Victor Glover')}></p>
            <p className={crew.name  === 'Anousheh Ansari' ? 'active' : undefined } onClick={() => handleClick('Anousheh Ansari')}></p>
            </div>

            <p className="crew-role">{crew.role}</p>

            <p className="crew-name">{crew.name}</p>

            <p className='crew-bio'>{crew.bio}</p>
        </div>
        
    </div>
    );
};

export default InfoCrew;