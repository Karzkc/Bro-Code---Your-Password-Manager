import { useEffect, useRef } from 'react';
import { Player } from '@lordicon/react';


import ICON from '../assets/github.json';

export default function PlayOnce() {    
  const playerRef = useRef<Player>(null);
  
    useEffect(() => {
        playerRef.current?.playFromBeginning();
    }, [])

    return (
        <div className='cursor-pointer'>
            <Player 
            ref={playerRef} 
            icon={ ICON }
            size={65}
        />
        </div>

    );
}