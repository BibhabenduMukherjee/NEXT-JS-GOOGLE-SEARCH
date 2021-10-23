import React from 'react'

function Avater({url}) {
    return (
        <img loading= 'lazy'
            src={url}
            alt='avater'
        />
    )
}

export default Avater
