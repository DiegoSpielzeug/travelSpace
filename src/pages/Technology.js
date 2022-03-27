import React, { useState } from 'react';
import InfoTech from '../components/InfoTech';
import data from '../data/data.json';
import '../styles/technology.css';


const Technology = () => {

    const [items, setItems] = useState(data.technology);
    const [tech, setTech] = useState(items[0]);
    const [anim, setAnim] = useState(0)

    

    const handleClick = (name = "Launch vehicle") => {
        const filterItem = items.filter( item => item.name === name)
        setTech(filterItem[0])
        setAnim(1)
    }
    return (
        <div className="technology-bg">
            <h3 className="tech-title"><span>03</span>space launch 101</h3>
            <InfoTech   handleClick={handleClick} tech={tech} anim={anim} setAnim={setAnim}/>
        </div>
    );
};

export default Technology;
