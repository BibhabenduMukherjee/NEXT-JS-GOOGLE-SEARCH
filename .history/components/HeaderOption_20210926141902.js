import React from 'react'

function HeaderOption({Icon , title , selected}) {
    return (
        <div className={`flex items-center
        space-x-1 border-b-4 `}>
            <Icon className='h-8'/>
            <p className='hidden sm:inline-flex'>{title}</p>
        </div>
    )
}

export default HeaderOption
