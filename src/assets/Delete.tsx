import React from 'react'
import { Tooltip } from 'react-tooltip';

const Delete = () => {
    return (
        <>
            <div data-tooltip-id="Dlt">
                <lord-icon
                    src="https://cdn.lordicon.com/hwjcdycb.json"
                    trigger="hover"
                    className="icons"
                    stroke="bold"
                    style={{ width: '25px', height: '25px' , cursor:"pointer" }}>
                </lord-icon>
            </div>
            <Tooltip arrowColor="#08a88a" id="Dlt" place="top" content="Delete Field" className="copy" />

        </>
    )
}

export default Delete
