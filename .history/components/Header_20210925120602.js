import React from 'react'
import Image from 'next/image'
import {useRouter} from 'next/router'
import {useRef} from 'react'
import {XIcon} from '@heroicons/react/solid'
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

             <xIcon/>
         </from>
  
        </header>
    )
}

export default Header
