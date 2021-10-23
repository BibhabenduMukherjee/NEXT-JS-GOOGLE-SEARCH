import Head from 'next/head'
import Avater from '../components/Avater'
import {ViewGridIcon , MicrophoneIcon, SearchIcon} from '@heroicons/react/solid'
import { ServerIcon } from '@heroicons/react/outline'
import Image from 'next/image'
export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Google Search eNGINE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
     
          
            

         {/* header    */}
 
         <header className='flex w-full p-5 justify-between text-gray-800 ' >

          {/* left */}
          <div className='flex space-x-4 items-center' >
           <p className='link' >About</p>
           <p className='link'>Store</p>
          </div>

          {/* right */}
         <div className='flex space-x-4 items-center' >
          <p className='link' >Gmail</p>
          <p className='link'>Images</p>
           
           {/* <Icon/> */}

          <ViewGridIcon className='h-10 w-10 p-2 rounded-full hover:cursor-pointer hover:bg-gray-100'/>


           {/* Avater */}

           <Avater
          
          url = 'https://yt3.ggpht.com/ytc/AAUvwnjf45JTg_zblu9feye-Yh7jvrKX6S_p4W8grmm-kA=s900-c-k-c0x00ffffff-no-rj'

           />


         </div>


         </header>


          {/* body */}
          

           <form className='flex flex-col mt-44 items-center flex-grow '>
            <Image
            src= 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
            height='100'
            width='300'
             />
            
            <div className='flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl' >
              <SearchIcon

                className= 'h-5 mr-3 text-gray-500'
              />
              <input className= 'focus:outline-none flex-grow' />

              <MicrophoneIcon className= 'h-5'/>
            </div>

           </form>

          {/* footer */}


    </div>
  )
}
