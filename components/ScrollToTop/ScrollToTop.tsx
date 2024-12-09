// components/ScrollToTop.tsx
'use client'
import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import ButtonBlue from '../Button/ButtonBlue';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-4 right-4">
      {visible && (
        // <button
        //   onClick={scrollToTop}
        //   className="bg-primary-300 text-white p-2 rounded-full shadow-md hover:bg-blue-700 transition duration-300"
        // >
        //   <FaArrowUp/>
        // </button>
        <ButtonBlue OnClick={scrollToTop} text={<FaArrowUp/>}/>
      )}
    </div>
  );
};

export default ScrollToTop;
