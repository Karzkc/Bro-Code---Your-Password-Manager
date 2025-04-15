import React from 'react'
import { Tooltip } from 'react-tooltip';

const Edit = () => {
    return (
       <>
        <div data-tooltip-id="Edit">
            <lord-icon
                src="https://cdn.lordicon.com/exymduqj.json"
                trigger="hover"
                stroke="bold"
                className="icons"
                state="hover-line"
                style={{ width: '25px', height: '25px' , cursor:"pointer" }}>            
            </lord-icon>
        </div>
        <Tooltip arrowColor="#08a88a" id="Edit" place="top" content="Edit Field" className="copy" />
       </>

    )
}

export default Edit
 