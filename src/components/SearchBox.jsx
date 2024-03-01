"use client";
import { RxCross2 } from "react-icons/rx";
import { IoMdMic } from "react-icons/io";
import { GoSearch } from "react-icons/go";
import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

const SearchBox = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const searchTerm = searchParams.get("searchTerm");
  const [term, setTerm] = useState(searchTerm || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!term.trim()) return;
    router.push(`/search/web?searchTerm=${term}`);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex border border-[#5f6368] rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center hover:bg-[#303134] group"
    >
      <input
        type="text"
        className="w-full focus:outline-none bg-black group-hover:bg-[#303134]"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <RxCross2
        className="text-2xl text-[#9aa0a6] cursor-pointer sm:mr-2 "
        onClick={() => setTerm("")}
      />
      <IoMdMic className="hidden sm:inline-flex text-5xl text-blue-500 border-l-2 border-[#5f6368] mr-3 pl-4" />
      <GoSearch
        className="text-2xl hidden sm:inline-flex text-[#8ab4f8] cursor-pointer"
        onClick={handleSubmit}
      />
    </form>
  );
};

export default SearchBox;
