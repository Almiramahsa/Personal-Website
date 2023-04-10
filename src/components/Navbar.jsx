import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { title: 'home', path: '/home', href: '#home' },
    { title: 'about', path: '/about', href: '#about' },
    { title: 'role', path: '/role', href: '#role' },
    { title: 'projects', path: '/projects', href: '#projects' },
  ];

  return (
    <div className="navbar-container max-w-xl mx-auto  justify-end mt-4 p-4">
      <div>
        <a href="#home">
          <img src="/src/assets/am_plain_w.png" className="md:w-16 md:h-16 w-12 h-12  top-0 left-0 p-2 fixed" alt="Logo"></img>
        </a>
      </div>
      <div className="sm:hidden fixed top-4 right-12 md:right-0">
        <button className=" text-zinc-800 hover:text-violet-500 focus:text-violet-500 transition duration-150 ease-in-out" onClick={toggleMenu}>
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <rect y="4" width="24" height="2" />
            <rect y="11" width="24" height="2" />
            <rect y="18" width="24" height="2" />
          </svg>
        </button>
      </div>
      <div className="navbar-container max-w-xl mx-auto justify-between items-center mt-4 p-4">
        <ul
          className={`${
            isOpen ? 'block' : 'hidden'
          }  sm:flex  bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur hover:text-violet-500 rounded-xl dark:bg-gray-900/90 dark:text-blue-200 dark:ring-white/10`}
        >
          {navLinks.map((link, index) => (
            <li key={index}>
              <a className={`relative block px-3 py-2 transition ${window.location.pathname === link.path ? 'text-violet-500' : 'text-gray-500 hover:text-violet-500'}`} href={link.href}>
                <p className="capitalize">{link.title}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
