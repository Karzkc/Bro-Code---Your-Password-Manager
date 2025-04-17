import { useEffect, useRef } from 'react';
import { Player } from '@lordicon/react';
import { Tooltip } from 'react-tooltip';

import ICON from '../assets/eye-open.json';

export default function PlayOnce() {    
  const playerRef = useRef<Player>(null);
  
    useEffect(() => {
        playerRef.current?.playFromBeginning();
    }, [])

    return (
        <>
        
        <div data-tooltip-id="eye-open" className='cursor-pointer'>
            <Player 
            ref={playerRef} 
            icon={ ICON }
            size={35}
        />
        </div>
        <Tooltip arrowColor="#08a88a" id="eye-open" place="top" content="See / Unsee Password" className="tooltip" />
        </>

    );
}