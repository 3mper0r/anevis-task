import { useState, useEffect } from 'react';

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle dark mode state
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Effect to add/remove the 'dark-mode' class to the document's body
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return [isDarkMode, toggleDarkMode] as const;
};

export default useDarkMode;
