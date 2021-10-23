import React from 'react'
import Image from 'next/image'
import {useRouter} from 'next/router'
import {useRef} from 'react'
import {MicrophoneIcon, SearchIcon, XCircleIcon, XIcon} from '@heroicons/react/solid'
import Search from '../pages/search'
import Avater from '../components/Avater'
import HeaderOptains from '../components/HeaderOptains'
function Header() {
    
    const route = useRouter()
    const searchInputRef = useRef(null)
    const search = (e) =>{
        const term = searchInputRef.current.value
        if(!term) return 

    route.push(`/search?term=${term}`)
    }
    return (
        <header className=' sticky top-0 bg-white'>
        <div className='flex w-full p-6  items-center'>
        <Image src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'  height={32}
                    width={100}
         className = 'cursor-pointer '
         onClick={()=> route.push('/')}
         />

         <from className='flex flex-grow px-5 py-3 ml-4 sm:ml-10 mr-5 border-gray-200 rounded-full shadow-lg max-w-3xl items-center' >
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
         <Avater url='https://yt3.ggpht.com/ytc/AAUvwnjf45JTg_zblu9feye-Yh7jvrKX6S_p4W8grmm-kA=s900-c-k-c0x00ffffff-no-rj'
             className='ml-auto'
         />
        
        </div>
          

          {/* headerOptaion */}

          <HeaderOptains/>
  
        </header>
    )
}

export default Header
