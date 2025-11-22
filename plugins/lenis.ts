import { useEffect } from "react";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";



export const scrollTriggerPlugin = ()=> gsap.registerPlugin(ScrollTrigger);



export const useLenis = () => {
  useEffect(() => {
    const lenis = new Lenis();
    let rafId: any

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  });
}