import React from 'react'
import {useEffect} from 'react'
import {useRouter} from 'next/router'
function about() {
   const router = useRouter()
    useEffect(setTimeout(()=>{
     router.push('/')
    } , 4000) , [])

    return (
        <div className=' container mx-auto flex items-center justify-center p-2  '>
            <h1 className=' font-mono text-4xl' >About the page how we created this google search page and from where we getting_started </h1>

        </div>
    )
}

export default about
