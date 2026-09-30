import { Community } from "./home/community/Community";
import Discover from "./home/discover/Discover";
import { Explore } from "./home/explore/Explore";
import Hero from "./home/Hero";
import { Path } from "./home/path/Path";
import { Sponsor } from "./home/Sponsor";
import { Unlock } from "./home/unlock/Unlock";



export default function Home() {
  return (
    <section>
      <Hero />
      <Sponsor />
      <Discover />
      <Explore />
      <Path />
      <Unlock />
      <Community />
    </section>
  );
}
