// themeToggle.js
   
   import { useEffect, useState } from 'react';
   
   export const ThemeToggle = () => {
       const [isDark, setIsDark] = useState(false);
   
       useEffect(() => {
           // Check for saved theme preference or default to light
           const savedTheme = localStorage.getItem('theme');
           const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
           
           if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
               setIsDark(true);
               document.documentElement.setAttribute('data-theme', 'dark');
           } else {
               setIsDark(false);
               document.documentElement.removeAttribute('data-theme');
           }
       }, []);
   
       const toggleTheme = () => {
           const newIsDark = !isDark;
           setIsDark(newIsDark);
           
           if (newIsDark) {
               document.documentElement.setAttribute('data-theme', 'dark');
               localStorage.setItem('theme', 'dark');
           } else {
               document.documentElement.removeAttribute('data-theme');
               localStorage.setItem('theme', 'light');
           }
       };
   
       return (
           <button
               onClick={toggleTheme}
               style={{
                   position: 'fixed',
                   top: '20px',
                   right: '20px',
                   zIndex: 1001,
                   background: 'var(--bg-secondary)',
                   border: '1px solid var(--border-light)',
                   borderRadius: 'var(--radius-lg)',
                   padding: '10px 14px',
                   display: 'flex',
                   alignItems: 'center',
                   gap: '8px',
                   cursor: 'pointer',
                   boxShadow: 'var(--shadow-md)',
                   transition: 'all 0.2s ease',
                   fontSize: '13px',
                   fontWeight: 500,
                   color: 'var(--text-secondary)',
                   fontFamily: 'inherit',
               }}
               onMouseEnter={(e) => {
                   e.currentTarget.style.borderColor = 'var(--accent-primary)';
                   e.currentTarget.style.color = 'var(--accent-primary)';
               }}
               onMouseLeave={(e) => {
                   e.currentTarget.style.borderColor = 'var(--border-light)';
                   e.currentTarget.style.color = 'var(--text-secondary)';
               }}
           >
               <span style={{ fontSize: '14px' }}>
                   {isDark ? '☀️' : '🌙'}
               </span>
               <span>{isDark ? 'Light' : 'Dark'}</span>
           </button>
       );
   };