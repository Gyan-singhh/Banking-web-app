import React, {useId} from 'react'

function Select({
    options,
    label,
    className,
    ...props
}, ref) {
    const id = useId();
  return (
    <div className='w-full'>
        {label && <label htmlFor={id}>{label}</label>}
        <select
            {...props}
            id = {id}
            ref = {ref}
            className={`px-3 py-2 rounded-lg text-white bg-gray-900 outline-none focus:bg-gray-800 duration-200 border border-gray-200 w-full hover:bg-black ${className}`}
        >
            {options?.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    </div>
  )
}

export default React.forwardRef(Select)