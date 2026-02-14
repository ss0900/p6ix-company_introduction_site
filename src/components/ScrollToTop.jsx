import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const prevPathname = useRef(pathname);

  useEffect(() => {
    // If staying within product sub-routes, do not scroll to top.
    // This allows the page-internal scrolling logic (GSAP) to handle positioning
    if ((pathname.startsWith('/time-management') && prevPathname.current.startsWith('/time-management')) ||
        (pathname.startsWith('/ppm') && prevPathname.current.startsWith('/ppm')) ||
        (pathname.startsWith('/eppm') && prevPathname.current.startsWith('/eppm')) ||
        (pathname.startsWith('/opc') && prevPathname.current.startsWith('/opc')) ||
        (pathname.startsWith('/unifier') && prevPathname.current.startsWith('/unifier')) ||
        (pathname.startsWith('/aconex') && prevPathname.current.startsWith('/aconex'))) {
      prevPathname.current = pathname;
      return;
    }

    window.scrollTo(0, 0);
    prevPathname.current = pathname;
  }, [pathname]);

  return null;
}
