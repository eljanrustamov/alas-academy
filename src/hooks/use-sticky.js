import { useState, useEffect } from "react";

const UseSticky = () => {
  const [isSticky, setIsSticky] = useState(false);
  const stickyHeader = () => {
    if (window.scrollY > 180) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", stickyHeader);
  }, []);
  return {
    isSticky,
  };
};

export default UseSticky;
