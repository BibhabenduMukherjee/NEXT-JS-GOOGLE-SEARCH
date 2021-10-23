import React from 'react'

function HeaderOption({Icon , title , selected}) {
    return (
        <div className={`flex`}>
            <Icon className='h-8'/>
            <p className='hidden sm:inline-flex'></p>
        </div>
    )
}

export default HeaderOption
