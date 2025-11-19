import { Navbar } from "../../Components/Navbar";
import { WhatHappenedSection } from "../../Components/Blog/WhatHappenedSection";
import { NewEraSection } from "../../Components/Blog/NewEraSection";
import { FutureUpdatesSection } from '../../Components/Blog/FutureUpdatesSection';
import { HeaderGroup } from "../../Components/Main";
import { Footer } from "../../Components/Footer";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export function Blog() {
  return (
    <>
      <div className="bg-kora-Neutral-kora-neutral-12 min-h-screen flex flex-col justify-between">
        <HeaderGroup>
          <Navbar />
        </HeaderGroup>
       
        <main className="flex-grow">
            <AnimatedSection>
               <WhatHappenedSection />
            </AnimatedSection>
            <AnimatedSection>
               <NewEraSection />
            </AnimatedSection>
            <AnimatedSection>
               <FutureUpdatesSection />
            </AnimatedSection>

        </main>

        <Footer />
      </div>
    </>
  );
}

const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
  const { ref, inView } = useInView({
      triggerOnce: false, 
      threshold: 0.5 
  });

  const variants = {
      hidden: { opacity: 0, y: 20 },
      visible: {
          opacity: 1,
          y: 0,
          transition: {
              duration: 0.5,
              ease: "easeOut"
          }
      }
  };

  return (
      <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          className="min-h-screen"
      >
          {children}
      </motion.div>
  );
};
