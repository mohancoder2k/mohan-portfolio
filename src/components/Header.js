import { Bars3Icon } from '@heroicons/react/24/solid';
import { useState } from 'react';

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="flex justify-between px-5 py-2 bg-primary">
      <a className="font-bold text-black" href="/">MOHAN</a>
      <nav className="hidden md:block">
        <ul className="flex text-white">
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="/login">My Resume Upload </a></li>

        </ul>
      </nav>
      {toggleMenu && (
        <nav className="block md:hidden">
          <ul onClick={() => setToggleMenu(false)} className="flex flex-col text-white mobile-nav">
            <li><a href="#hero" className="py-2 px-4 block hover:bg-gray-700">Home</a></li>
            <li><a href="#about" className="py-2 px-4 block hover:bg-gray-700">About</a></li>
            <li><a href="#projects" className="py-2 px-4 block hover:bg-gray-700">Projects</a></li>
            <li><a href="#resume" className="py-2 px-4 block hover:bg-gray-700">Resume</a></li>
            <li><a href="#contact" className="py-2 px-4 block hover:bg-gray-700">Contact</a></li>
          </ul>
        </nav>
      )}
      <button onClick={() => setToggleMenu(!toggleMenu)} className="block md:hidden">
        <Bars3Icon className="text-white h-5" />
      </button>
    </header>
  );
}
