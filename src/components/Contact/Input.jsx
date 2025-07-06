import React, { useId } from 'react'

const Input = React.forwardRef(function Input(
    { label, type = 'text', className = "", ...props }, ref
) {
    const id = useId();
    return (
        <div className='w-full my-3 sm:my-4'>
            {label && <label
                className='inline-block mb-2 pl-2 text-sm sm:text-base font-medium'
                htmlFor={id}>
                {label}
            </label>
            }
            <input
                type={type}
                className={`px-3 sm:px-4 py-2 sm:py-3 rounded-lg outline-none w-full text-sm sm:text-base ${className}`}
                ref={ref}
                {...props}
                id={id}
            />
        </div>
    )
})

export default Input