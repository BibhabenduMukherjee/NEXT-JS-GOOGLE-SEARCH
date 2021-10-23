import React from 'react'
import Image from 'next/image'
import {useRouter} from 'next/router'
import {useRef} from 'react'
import {MicrophoneIcon, SearchIcon, XCircleIcon, XIcon} from '@heroicons/react/solid'
import Search from '../pages/search'
function Header() {
    
    const route = useRouter()
    const searchInputRef = useRef(null)
    const search = (e) =>{
        const term = searchInputRef.current.value
        if(!term) return 

    route.push(`/search?term=${term}`)
    }
    return (
        <header className='static top-0 bg-white'>
        <div className='flex w-full p-6 items-center'>
        <Image src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'  height={40}
                    width={120}
         className = 'cursor-pointer'
         onClick={()=> route.push('/')}
         />

         <from className='flex  px-6 py-3 border-gray-200 rounded-full shadow-lg max-w-3xl items-center' >
             <input ref={searchInputRef} type="text" 

                 className='flex-grow w-full focus:outline-none '
             />
  
             <XIcon className='h-8 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125'/>
             <MicrophoneIcon  className='h-6 mr-3 hidden sm:inline-flex text-blue-600 border-l-2 border-gray-300 pl-4 cursor-pointer transition duration-100 transform hover:scale-125' />
             <SearchIcon className='h-6 text-blue-500 hidden sm:inline-flex '/>
             <button hidden type='submit' onClick={search} >
                 Search
             </button>
         </from>
        </div>
         
  
        </header>
    )
}

export default Header
