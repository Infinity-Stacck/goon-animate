import gsap from "gsap";
import { RefObject, useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PinOptions, StickyOptions } from "../types/options";


export const useStickyScrollFollowing = (
  containerRef: RefObject<HTMLElement | null>,
  stickyOptions: StickyOptions[]
) => {

  useLayoutEffect(() => {
    if (!containerRef.current || !containerRef) return;
    const ctx = gsap.context(() => {
      stickyOptions.forEach((opt) => {

        containerRef.current!
        .querySelectorAll<HTMLElement>(`.${opt.tag}`)
        .forEach((el) => {
          gsap.to(el, {
            y: opt.distance,
            ease: opt.ease,
            scrollTrigger: {
              trigger: el,
              start: opt.start,
              end: opt.end,
              scrub: opt.scrub,
            },
          });
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);
};



export const usePinScrollTrigger = (
  containerRef: RefObject<HTMLElement | null>,
  options: PinOptions[]
) => {
  useLayoutEffect(() => {
    if (!containerRef.current || !containerRef) return;

    const ctx = gsap.context(() => {
      options.forEach((op) => {
        containerRef.current!
        .querySelectorAll<HTMLElement>(`.${op.tag}`)
        .forEach((el) => {
          ScrollTrigger.create({
            trigger: el,
            pin: el,
            start: op.start,
            end: op.end,
            pinSpacing: op.pinSpacing,
          });
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);
};
