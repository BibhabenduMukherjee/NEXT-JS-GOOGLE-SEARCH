import React from 'react'
import {GlobeIcon} from '@heroicons/react/solid'
function Footer() {
    return (
       <footer className="grid w-full divide-y-[1px] divide-gray-100 text-sm text-gray-500">
           <div className='px-8 py-3'>
               <p>India!</p>
           </div>
           <div>
               <div>
                   <GlobeIcon className='h-5 mr-1 text-green-700'/>
               </div>
           </div>
       </footer>
    )
}

export default Footer
