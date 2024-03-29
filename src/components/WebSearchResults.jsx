import Link from "next/link";
import Parser from "html-react-parser";
import PaginationsButtons from "./PaginationsButtons";

const WebSearchResults = ({ results }) => {
  return (
    <div className="w-full mx-auto px-3 sm:pb-24 pb-40 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="text-gray-600 text-sm mb-5 mt-3">
        About {results.searchInformation?.formattedTotalResults} results (
        {results.searchInformation?.formattedSearchTime} seconds)
      </p>
      {results.items?.map((result) => (
        <div key={result.link} className="mb-8 max-w-xl">
          <div className="group flex flex-col ">
            <Link href={result.link}>{result.formattedUrl}</Link>
            <Link
              href={result.link}
              className="group-hover:underline decoration-[#8ab4f8] text-xl truncate font-medium text-[#8ab4f8]"
            >
              {result.title}
            </Link>
          </div>
          <p className="text-gray-400">{Parser(result.htmlSnippet)}</p>
        </div>
      ))}
      <PaginationsButtons />
    </div>
  );
};

export default WebSearchResults;
