"use client";
import { ReactLenis, useLenis } from "lenis/react";

function SmoothScrolling({ children }) {
  //   const lenis = useLenis(({ scroll }) => {
  //     // called every scroll
  //   });

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothTouch: true }}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;
