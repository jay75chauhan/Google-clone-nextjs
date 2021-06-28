import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Response from "../Response";
import SearchResults from "../components/SerchResults";
import { API_KEY, CONTEXT_KEY } from "../keys";
import { useRouter } from "next/router";

function Search({ results }) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="icon"
          href="https://image.flaticon.com/icons/png/512/281/281781.png"
        />
      </Head>

      {/* Header */}

      <Header />

      {/* serchResult */}

      <SearchResults results={results} />
    </div>
  );
}

export default Search;

export async function getServerSideProps(context) {
  const useDummyData = false;
  const startIndex = context.query.start || "0";

  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term} &start=${startIndex}`
      ).then((response) => response.json());

  // after the SERVER has renderd.. pass the resuits to th.e client

  return {
    props: {
      results: data,
    },
  };
}
