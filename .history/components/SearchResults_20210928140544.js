import React from 'react'

function SearchResults({results}) {
    return (
        <div className='mx-auto w-full px-3 sm:pl-[5%] 
         md:pl-[14%] lg:pl-52' >
            <p className='text-gray-600 text-md mb-5 mt-3' >About {results.searchInformation?.formattedTotalResults} results
            ({results.searchInformation?.formattedSearchTime} second)
            </p>
        </div>
    )
}

export default SearchResults
