import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    document.body.setAttribute('data-bs-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <Button 
      variant={theme === 'light' ? 'dark' : 'light'} 
      size="sm" 
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      className="d-flex align-items-center"
    >
      {theme === 'light' ? (
        <>
          <i className="bi bi-moon-fill me-2"></i>
          Dark Mode
        </>
      ) : (
        <>
          <i className="bi bi-sun-fill me-2"></i>
          Light Mode
        </>
      )}
    </Button>
  );
}

export default ThemeToggle;