import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scrolls to the top of the page on every route change. React Router preserves
// scroll position by default, which leaves new pages scrolled mid-way.
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default ScrollToTop;
