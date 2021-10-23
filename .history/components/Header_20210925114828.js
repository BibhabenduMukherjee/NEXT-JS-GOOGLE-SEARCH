import React from 'react'
import Image from 'next/image'
function Header() {
    return (
        <header>

         <Image src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'  height={40}
                    width={120}
         className = 'cursor-pointer'
         />
  
        </header>
    )
}

export default Header
