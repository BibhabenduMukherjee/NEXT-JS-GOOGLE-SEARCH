import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'

function Search() {
    return (
        <div>
            <Head>
                <title>Search Result</title>
            </Head>

            <Header/>

            {/* search result  */}



        </div>
    )
}

export default Search

// server side rendering for search results 
// make this config

export async function getServerSideProps(context) {
  const useDummyData = false;
  // get the google api endpoint

  
}
