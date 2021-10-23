import React from 'react'
import Image from 'next/image'
import {useRouter} from 'next/router'
function Header() {
    const route = useRouter()
    return (
        <header>

         <Image src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'  height={40}
                    width={120}
         className = 'cursor-pointer'
         onClick={()=> route.push('/')}
         />
  
        </header>
    )
}

export default Header
