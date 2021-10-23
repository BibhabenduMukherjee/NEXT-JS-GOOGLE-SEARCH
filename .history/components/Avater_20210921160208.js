import React from 'react'

function Avater({url}) {
    return (
        <img loading= 'lazy'
            src={url}
            alt='avater'
            className='h-10 rounded-full hover:translate-x-1'
        />
    )
}

export default Avater
