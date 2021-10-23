import React from 'react'

function Avater({url}) {
    return (
        <img loading= 'lazy'
            src={url}
            alt='avater'
            className='h-10 rounded-full'
        />
    )
}

export default Avater
