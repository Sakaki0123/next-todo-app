import React from 'react'

const loading = () => {
    return (
        <div className='h-full flex justify-center items-center'
            aria-label="loading">
                <div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500'></div>
            </div>
    )
}

export default loading