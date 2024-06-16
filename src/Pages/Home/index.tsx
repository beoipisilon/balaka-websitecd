import { Navbar } from "../../components/Navbar";
import { Hero } from "../../components/Hero";
import { HeaderGroup } from "../../components/Main";
import { Stats} from "../../components/Stats";
import { Footer } from "../../components/Footer";

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
