import React, { useState } from 'react';
import InfoCrew from '../components/InfoCrew';
import data from '../data/data.json'
import '../styles/crew.css';

const Crew = () => {
    const [items, setItems] = useState(data.crew)
    const [crew, setCrew] = useState(items[0]);


    const handleClick = (name = 'Douglas Hurley') => {
        const filterItem = items.filter( item => item.name === name) 
        setCrew(filterItem[0])
    }  

    return (
        <div className='crew-bg'>
            <div className='crew-container'>
                <h3 className="crew-title"><span>02</span> MEET YOUR CREW</h3>
                <InfoCrew  handleClick={handleClick} crew={crew} />
            </div>
        </div>
    );

};

export default Crew;
