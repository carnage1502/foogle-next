"use client";

import { GoSearch } from "react-icons/go";
import { IoMdMic } from "react-icons/io";
import { useState } from "react";
import { useRouter } from "next/navigation";

const HomeSearch = () => {
  const [input, setInput] = useState("");
  const [randomSearchLoader, setRandomSearchLoader] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`);
  };

  const randomSearch = async (e) => {
    setRandomSearchLoader(true);
    const response = await fetch("https://random-word-api.herokuapp.com/word")
      .then((res) => res.json())
      .then((data) => data[0]);
    if (!response) return;
    router.push(`/search/web?searchTerm=${response}`);
    setRandomSearchLoader(false);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex w-full mt-5 mx-auto max-w-[90%] border border-[#5f6368] px-5 py-3 rounded-full hover:shadow-md focus-within:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl hover:bg-[#303134] group"
      >
        <GoSearch className="text-xl text-[#9aa0a6] mr-3" />
        <input
          type="text"
          className="flex-grow focus:outline-none bg-black group-hover:bg-[#303134]"
          onChange={(e) => setInput(e.target.value)}
        />
        <IoMdMic className="text-xl text-blue-400" />
      </form>
      <div className="flex flex-col space-y-2 sm:space-y-0 justify-center sm:flex-row mt-8 sm:space-x-4">
        <button
          onClick={handleSubmit}
          className="test-sm border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 w-36 h-10 transition-shadow"
        >
          Foogle Search
        </button>
        <button
          disabled={randomSearchLoader}
          onClick={randomSearch}
          className="test-sm border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-700 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 w-36 h-10 transition-shadow disabled:opacity-80 disabled:shadow-sm"
        >
          {randomSearchLoader ? "Loading..." : "I'm Feeling Lucky"}
        </button>
      </div>
    </>
  );
};

export default HomeSearch;
