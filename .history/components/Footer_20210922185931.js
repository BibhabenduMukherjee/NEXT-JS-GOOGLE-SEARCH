import React from 'react'
import {GlobeIcon} from '@heroicons/react/solid'
function Footer() {
    return (
       <footer className="grid w-full divide-y-[1px] divide-gray-300 bg-gray-100 text-sm text-gray-500">
           <div className='px-8 py-3'>
               <p>India!</p>
           </div>
           <div>
               <div>
                   <GlobeIcon className='h-5 mr-1 text-green-700'/>
                   since 2007
               </div>
               <div className='flex justify-center space-x-8 whitespace-nowrap md:justify-self-start'>
                <p>Advertisement</p>
                   <p>Only Clone</p>
                   <p>Bivu</p>
               </div>
               <div className='flex justify-center space-x-8 md:ml-auto'>
                   <p>Privacy</p>
                   <p>Terms</p>
                   <p>Setting</p>
               </div>
           </div>
       </footer>
    )
}

export default Footer
