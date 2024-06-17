import { Navbar } from "../../components/Navbar";
import { Features } from "../../components/Blog/Features";
import { HeaderGroup } from "../../components/Main";
import { Footer } from "../../components/Footer";

export function Blog() {
  return (
    <>
      <div className="teste bg-kora-Neutral-kora-neutral-12 min-h-screen flex flex-col justify-between">
        <HeaderGroup>
          <Navbar />
        </HeaderGroup>
        <Features />
        <Footer />
      </div>
    </>
  );
}
