import React, { useState } from 'react';
import InfDestination from '../components/InfDestination';
import '../styles/destination.css'
import data from '../data/data.json'

const Destination = () => {

    const [items, setItems] = useState(data.destinations)
    const [satelite, setSatelite] = useState(items[0]);

    const handleClick = (luna = 'Moon') => {
        const filterItem = items.filter( item => item.name === luna) 
        setSatelite(filterItem[0])
    }  
    
    return (
        <div className='destination-bg'>
            <InfDestination handleClick={handleClick} satelite={satelite} />
        </div>
    );
};

export default Destination;