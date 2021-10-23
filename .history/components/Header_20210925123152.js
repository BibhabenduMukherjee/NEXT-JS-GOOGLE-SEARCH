import React from 'react'
import Image from 'next/image'
import {useRouter} from 'next/router'
import {useRef} from 'react'
import {MicrophoneIcon, XCircleIcon, XIcon} from '@heroicons/react/solid'
function Header() {
    const route = useRouter()
    const searchInputRef = useRef(null)
    return (
        <header>

         <Image src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'  height={40}
                    width={120}
         className = 'cursor-pointer'
         onClick={()=> route.push('/')}
         />

         <from className='flex px-6 py-3 border-gray-200 rounded-full shadow-lg max-w-3xl items-center' >
             <input ref={searchInputRef} type="text" 

                 className='flex-grow w-full focus:outline-none '
             />
  
             <XIcon className='h-8 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125'/>
             <MicrophoneIcon  className='h-6 mr-3 hidden sm:inline-flex text-blue-600 border-l-2 border-gray-300 pl-4' />
         </from>
  
        </header>
    )
}

export default Header
