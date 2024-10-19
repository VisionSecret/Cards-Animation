import { useEffect } from "react";
import Card from "./Card";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    gsap.utils.toArray(".card").forEach((card) => {
      gsap.to(card, {
        opacity: 0,
        duration: 1.2,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: card,
          start: "top 15%",
          end: "bottom 15%",
          scrub: true,
        },
      });
    });
  }, []);
  return (
    <>
      <div className="w-full py-[15vh] bg-zinc-800">
        <Card />
      </div>
    </>
  );
}

export default App;
