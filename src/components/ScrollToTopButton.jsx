import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { BsArrowUpCircle } from "react-icons/bs";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  return (
    <>
      {visible && (
        <Button
          onClick={scrollToTop}
          variant="success"
          className="position-fixed bottom-0 end-0 m-4 rounded-circle shadow"
          style={{
            width: "60px",
            height: "60px",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <BsArrowUpCircle size={30} color="white" />
        </Button>
      )}
    </>
  );
};

export default ScrollToTopButton;
