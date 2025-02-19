import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const staggerAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 }
  })
};

export const horizontalScroll = (element: HTMLElement) => {
  gsap.to(element, {
    xPercent: -100,
    ease: "none",
    scrollTrigger: {
      trigger: element,
      scrub: 1,
      pin: true,
      end: "+=200%"
    }
  });
};