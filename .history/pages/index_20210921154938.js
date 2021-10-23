import Head from 'next/head'

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




           {/* Avater */}


         </div>


         </header>


          {/* body */}


          {/* footer */}


    </div>
  )
}
