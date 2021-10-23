import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import { API_KEY, CONTEXT_KEY } from "../keys";
import Response from "../Response";
import { useRouter } from "next/router";
import SearchResults from "../components/SearchResults";
import PaginationButton from "../components/PaginationButton";
function Search({ results }) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{router.query.term} - google search</title>
      </Head>

      <Header />

      {/* search result  */}

      <SearchResults results={results} />
      <PaginationButton />
    </div>
  );
}

export default Search;

// server side rendering for search results
// make this config

export async function getServerSideProps(context) {
  const useDummyData = false;
  // get the google api endpoint

  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}`
      ).then((res) => res.json());

  console.log(data);

  //After the server side rendering pass the //results to the client
  return {
    props: {
      results: data,
    },
  };
}
