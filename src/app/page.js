import HomeHeader from "@/components/HomeHeader";
import Image from "next/image";
import HomeSearch from "@/components/HomeSearch";

const Home = () => {
  return (
    <>
      <HomeHeader />
      <div className="flex flex-col items-center mt-24">
        <Image
          alt="logo"
          src="/foogle.svg"
          width="300"
          height="100"
          priority
          style={{ width: "auto" }}
        />
        <HomeSearch />
      </div>
    </>
  );
};

export default Home;
