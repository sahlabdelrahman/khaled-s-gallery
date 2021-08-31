import { useLayoutEffect } from "react";

export default function useLockBodyScroll(comp) {
  useLayoutEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    if (comp) {
      document.body.style.overflow = "hidden";
    }
    return () => (document.body.style.overflow = originalStyle);
  }, [comp]);
}
