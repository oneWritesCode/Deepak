import React from 'react'

function LovedThings(props) {
    return (
        <li
            className="text-center backdrop-blur-sm hover:bg-blue-500/10 p-4 rounded border-1 border-gray-700"
        >{props.text}</li>
    )
}

export default LovedThings