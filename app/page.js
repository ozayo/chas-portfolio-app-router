import Head from "next/head";
import MainHero from "../components/MainHero";
import MarqueeHome from "../components/MarqueeHome";
import Cta from "../components/Cta";
import HomeProjects from "../components/HomeProjects";

export const metadata = {
  title: "Chas Portfollio",
  description: "Chas portfollio uppgift",
};

export default function Home() {
   return (
    <>
      <div>
        <Head>
          <title>Ozay Chas Portfollio - Home</title>
        </Head>
       </div>
       <div className="mx-auto">
          <MainHero />
          <MarqueeHome />
          <HomeProjects/>
          <Cta />
        </div>
    </>
  );
}
