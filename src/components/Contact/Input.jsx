import React, { useId } from 'react'

const Input = React.forwardRef(function Input(
    { label, type = 'text', className = "", ...props }, ref
) {
    const id = useId();
    return (
        <div className='w-full my-4'>
            {label && <label
                className='inline-block mb-2 pl-2'
                htmlFor={id}>
                {label}
            </label>
            }
            <input
                type={type}
                className={`lg:px-3 px-2 lg:py-2 py-1 rounded-lg outline-none w-full ${className}`}
                ref={ref}
                {...props}
                id={id}
            />
        </div>
    )
})

export default Input