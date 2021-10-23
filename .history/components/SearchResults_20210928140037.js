import React from 'react'

function SearchResults({results}) {
    return (
        <div>
            <p>About {results.searchInformation?.formattedTotalResults} results
            ({results.searchInformation?.formattedSearchTime} second)
            </p>
        </div>
    )
}

export default SearchResults
