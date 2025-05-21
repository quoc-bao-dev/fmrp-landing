import { useEffect, useState } from "react";

export const useHideOnScrollBottom = (offset = 100) => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      const scrolledToBottom =
        scrollY + windowHeight >= documentHeight - offset;
      setHide(scrolledToBottom);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // chạy lần đầu

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [offset]);

  return hide;
};
