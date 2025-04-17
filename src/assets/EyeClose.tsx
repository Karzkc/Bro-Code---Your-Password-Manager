import { useEffect, useRef } from 'react';
import { Player } from '@lordicon/react';
import { Tooltip } from 'react-tooltip';

import ICON from '../assets/eye-close.json';

export default function PlayOnce() {    
  const playerRef = useRef<Player>(null);
  
    useEffect(() => {
        playerRef.current?.playFromBeginning();
    }, [])

    return (
        <>

        <div data-tooltip-id="eye" className='cursor-pointer'>
            <Player 
            ref={playerRef} 
            icon={ ICON }
            size={35}
        />
        </div>
                <Tooltip arrowColor="#08a88a" id="eye" place="top" content="See / Unsee Password" className="tooltip" />
        </>

    );
}