import Head from 'next/head'
import Avater from '../components/Avater'
import {ViewGridIcon , MicrophoneIcon} from '@heroicons/react/solid'
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

          <ViewGridIcon className='h-10 w-10 p-2 rounded-full hover:cursor-pointer bg-gray-100'/>


           {/* Avater */}

           <Avater
          
          url = 'https://yt3.ggpht.com/ytc/AAUvwnjf45JTg_zblu9feye-Yh7jvrKX6S_p4W8grmm-kA=s900-c-k-c0x00ffffff-no-rj'

           />


         </div>


         </header>


          {/* body */}


          {/* footer */}


    </div>
  )
}
