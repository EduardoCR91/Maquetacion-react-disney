import './App.css'
import React from 'react';

// --- Global Styles Component ---
// To resolve the file path issue, the CSS is included directly within the component.
const GlobalStyles = () => (
  <style>{`
    /* Resetting default styles and setting base font */
    body {
        margin: 0;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        background-color: #f7f7f7;
        color: #333;
    }

    /* Main container for the entire navbar */
    .navbar-container {
        width: 100%;
        background-color: #002664; /* Dark blue background for the entire navbar */
        color: #ffffffff;
    }

    /* Top navigation bar styles */
    .top-nav {
        padding: 8px 40px;
        display: flex;
        justify-content: space-between; /* Space between left and right items */
        align-items: center;
        font-size: 12px;
        color: #9cdcf9;
    }

    .top-nav-right {
        display: flex;
        align-items: center;
        gap: 15px;
    }
    
    .nav-separator {
        color: #ffffff;
    }

    /* Search bar styles */
    .search-bar {
        display: flex;
        align-items: center;
        background-color: white;
        border-radius: 16px;
        padding: 4px 10px;
        border: 1px solid #ccc;
    }

    .search-input {
        border: none;
        background: transparent;
        outline: none;
        color: #555;
        font-size: 12px;
        margin-left: 5px;
    }

    .search-input::placeholder {
        color: #888;
    }
    
    .search-icon-container {
        color: #333;
    }


    /* General link styles */
    .nav-link {
        color: inherit;
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 8px;
        font-weight: 500;
        transition: color 0.2s ease-in-out;
    }

    .nav-link:hover {
        color: #9cdcf9; /* Light blue for hover effect */
        text-decoration: underline;
    }

    /* Main navigation bar styles */
    .main-nav {
        display: flex;
        align-items: center;
        padding: 10px 40px;
        border-top: 1px solid #004a9e; /* Separator line */
        background-color: #002664; /* Dark blue background for the entire navbar */
    }

    .main-nav-links {
        display: flex;
        align-items: center;
        gap: 20px;
        margin-left: 25px;
    }

    .disney-logo {
        height: 80px; /* Adjust height as needed */
        background-color: #ffffffff;
    }

    .main-link {
        font-size: 16px;
        font-weight: 600;
        padding: 10px 0;
    }

    /* Icon styling */
    .icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }

    .icon svg {
        width: 1.2em;
        height: 1.2em;
    }
  `}</style>
);


// --- SVG Icons as Components ---
const ProfileIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const CartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
    </svg>
);

const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
);

const WorldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);


// --- Data Structure ---
const navData = {
    logo: {
        src: 'https://assets.stickpng.com/images/61378edc4b96600004f676ee.png', // Using white logo
        alt: 'Walt Disney World Logo',
        href: '#'
    },
    topLeftLink: { text: 'Visita Disney.com', href: '#' },
    topRightLinks: [
        { id: 1, text: 'Ingresar o Crear una Cuenta', href: '#' },
        { id: 2, type: 'separator' },
        { id: 3, text: 'Colombia (Español)', href: '#', icon: <WorldIcon /> }
    ],
    mainNav: [
        { id: 1, text: 'Tickets y Parques', href: '#' },
        { id: 2, text: 'Hoteles', href: '#' },
        { id: 3, text: 'Cosas para hacer', href: '#' },
        { id: 4, text: 'Ayuda y Reglas', href: '#' },
        { id: 5, text: 'Carrito', href: '#', icon: <CartIcon /> },
        { id: 6, text: 'My Disney Experience', href: '#', icon: <ProfileIcon /> }
    ]
};

// --- Navbar Component ---
const Navbar = () => {
    return (
        <header className="navbar-container">
            {/* Top Navigation */}
            <div className="top-nav">
                <a href={navData.topLeftLink.href} className="nav-link">{navData.topLeftLink.text}</a>
                <div className="top-nav-right">
                    {navData.topRightLinks.map(item => {
                        if (item.type === 'separator') {
                            return <span key={item.id} className="nav-separator">|</span>;
                        }
                        return (
                            <a key={item.id} href={item.href} className="nav-link">
                                {item.text}
                                {item.icon && <span className="icon">{item.icon}</span>}
                            </a>
                        );
                    })}
                     <div className="search-bar">
                        <span className="icon search-icon-container"><SearchIcon /></span>
                        <input type="text" placeholder="buscar en disneyworld.com" className="search-input" />
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <div className="main-nav">
                <a href={navData.logo.href}>
                    <img src={navData.logo.src} alt={navData.logo.alt} className="disney-logo" />
                </a>
                <div className="main-nav-links">
                     {navData.mainNav.map(item => (
                        <a key={item.id} href={item.href} className="nav-link main-link">
                            {item.icon && <span className="icon">{item.icon}</span>}
                            {item.text}
                        </a>
                    ))}
                </div>
            </div>
        </header>
    );
};

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Navbar />
      {/* The rest of the page content would go here */}
    </div>
  );
}

export default App;

