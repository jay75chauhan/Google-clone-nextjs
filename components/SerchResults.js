import React from "react";
import PaginationButtons from "./PaginationButtons";

function SerchResults({ results }) {
  return (
    <div className="mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52 overflow-x-hidden ">
      <p className="text-gray-600 text-md mb-5 mt-3">
        About{results.searchInformation?.formattedTotalResults} results(
        {results.searchInformation?.formattedSearchTime}seconds)
      </p>
      {results.items?.map((result) => (
        <div
          key={result.link}
          className="max-w-xl mb-8  border-2 p-3 rounded-xl dark:bg-[#292A2D] shadow-md transition duration-200 transform ease-in hover:scale-105"
        >
          <div className="group">
            <a
              href={result.link}
              className="text-sml line-clamp-1 text-gray-500"
            >
              {result.formattedUrl}
            </a>
            <a href={result.link}>
              <h2
                className="truncate text-xl
                
                dark:text-blue-600
              text-blue-800 font-medium
              group-hover:underline
              "
              >
                {result.title}
              </h2>
            </a>
          </div>

          <p className="line-clamp-2">{result.snippet}</p>
        </div>
      ))}

      <PaginationButtons />
    </div>
  );
}

export default SerchResults;
