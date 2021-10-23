import Head from 'next/head'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Google Search eNGINE</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
     
          
            

         {/* header    */}
 
         <header className='flex mt-2 space-x-2 justify-between' >

          {/* left */}
          <div className='flex space-x-2 m-2' >
           <p>About</p>
           <p>Store</p>
          </div>

          {/* right */}
         <div className='flex space-x-2 m-2' >
          <p>Gmail</p>
          <p>Images</p>
           


         </div>


         </header>


          {/* body */}


          {/* footer */}


    </div>
  )
}
