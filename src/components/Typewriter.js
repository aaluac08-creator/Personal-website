import React, { useState, useEffect } from 'react';
import './Typewriter.css';

const Typewriter = ({ titles }) => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    const typeSpeed = isDeleting ? 100 : 150;

    const handleTyping = () => {
      if (isDeleting) {
        setText(currentTitle.substring(0, text.length - 1));
      } else {
        setText(currentTitle.substring(0, text.length + 1));
      }

      if (!isDeleting && text === currentTitle) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
      }
    };

    const typingTimeout = setTimeout(handleTyping, typeSpeed);

    return () => clearTimeout(typingTimeout);
  }, [text, isDeleting, titleIndex, titles]);

  return <span className="typewriter">{text}</span>;
};

export default Typewriter;
