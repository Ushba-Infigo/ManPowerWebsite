import React, { useEffect } from 'react';

function BottomToTop() {
  useEffect(() => {
    const backToTop = document.getElementById('backToTop');

    const handleScroll = () => {
      if (window.scrollY > 200) {
        backToTop.style.display = 'block';
      } else {
        backToTop.style.display = 'none';
      }
    };

    const handleClick = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('scroll', handleScroll);
    backToTop.addEventListener('click', handleClick);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      backToTop.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <button
      id="backToTop"
      style={{
        display: 'none',
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 1000,
      }}
    >
      <i className="bi bi-arrow-up"></i>
    </button>
  );
}

export default BottomToTop;
