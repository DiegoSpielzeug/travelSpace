import React from 'react';
import img from '../assets/technology/image-space-capsule-landscape.jpg';
import useWindowDimensions from '../hook/useWindowDimensions'

const InfoTech = ({handleClick, tech, setAnim}) => {

    const {height, width} = useWindowDimensions();
    
   
   
    const uriLandscape = tech.images.landscape;
    const uriLansdscapeClean = uriLandscape.slice(21)

    const uriPortrait = tech.images.portrait;
    const uriPortraitClean = uriPortrait.slice(21);
    const windowSizeBig = 1260;

    console.log(width >= windowSizeBig)


    return (
    <div className="info-container-tech" onAnimationEnd={() => setAnim(0) }>
        
         {

             (width >= windowSizeBig)
             ?
                <div className="tech-picture-frame">
                    <img src={require(`../assets/technology/${uriPortraitClean}`).default} alt="technology"/>
                </div>
             :
                <div className="tech-picture-frame">
                    <img src={require(`../assets/technology/${uriLansdscapeClean}`).default} alt="technology"/>
                </div> 
            
         }
         {
             console.log()
         }
        <div className="tech-buttons">
            <p className={tech.name  === 'Launch vehicle' ? 'active' : undefined } onClick={() => handleClick('Launch vehicle')}>1</p>
            <p className={tech.name  === 'Spaceport' ? 'active' : undefined } onClick={() => handleClick('Spaceport')}>2</p>
            <p className={tech.name  === 'Space capsule' ? 'active' : undefined } onClick={() => handleClick('Space capsule')}>3</p>
        </div>

         <div className='tech-info-text'>
            <p className="tech-terminology">THE TERMINOLOGY…</p>
            <p className="tech-name">{tech.name}</p>
            <p className='tech-bio'>{tech.description}</p>
         </div>
    </div>
    );
};

export default InfoTech;
