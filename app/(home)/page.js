import HomeBS from "@components/HomeBS";
import HomeCard from "@components/HomeCard";
import HomeCard2 from "@components/HomeCard2";
import HomeCard3 from "@components/HomeCard3";
import SLap from "@components/SLap";
import HomeSale from "@components/HomeSale";
import SbyCat from "@components/SbyCat";
import SDrone from "@components/SDrone";
import Newsletter from "@components/Newsletter";
export default function Home() {
  return (
    <>
      <HomeCard />
      <HomeCard2 />
      <HomeCard3 />
      <HomeBS />
      <SbyCat />
      <SLap />
      <HomeSale />
      <SDrone />
      <Newsletter />
    </>
  );
}
