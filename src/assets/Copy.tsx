import React from 'react'
import { Tooltip } from 'react-tooltip';

<style>

</style>
const Copy = () => {
    return (
        <>
            <div data-tooltip-id="Copy" className='hover:!scale-110 ease-in-out duration-100 '>
                <lord-icon
                    src="https://cdn.lordicon.com/fikcyfpp.json"
                    trigger="hover"
                    stroke="bold"
                    colors="primary:#000000,secondary:#2b6261"
                    style={{ width: '25px', height: '25px', cursor: "pointer", position: "inline" }}>
                </lord-icon>
            </div>
            <Tooltip arrowColor="#08a88a" id="Copy" place="right" content="Copy content" className="copy" />
        </>
    )
}

export default Copy
