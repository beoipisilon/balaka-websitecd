import { Navbar } from "../../Components/Navbar";
import { Hero } from "../../Components/Hero";
import { HeaderGroup } from "../../Components/Main";
import { Stats} from "../../Components/Stats";
import { Footer } from "../../Components/Footer";

export function Home() {
  return (
    <>
      <div className="bg-kora-Neutral-kora-neutral-12 min-h-screen flex flex-col justify-between">
        <HeaderGroup>
          <Navbar />
          <Hero />
        </HeaderGroup>
        <Stats />
        <Footer />
      </div>
    </>
  );
}
