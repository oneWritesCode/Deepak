import React from 'react'

function LovedThings(props) {
    return (
        <li
            className="text-center backdrop-blur-sm hover:bg-blue-500/10 lg:p-4 p-2 rounded border-1 border-gray-700"
        >{props.text}</li>
    )
}

export default LovedThings