import { Ease } from ".";

export interface PinOptions {
  tag: string;
  start: string;
  end: string;
  pinSpacing: boolean;
}


  export type StickyOptions = {
    tag: string
    distance: number | string
    start: number | string
    end: number | string
    pin: boolean
    scrub: boolean
    ease: Ease
  }