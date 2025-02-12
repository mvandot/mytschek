import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full bg-(--color-white) z-3">
      <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          <div className="flex flex-row w-full justify-between items-center"> 

            {/* logo */}
            <div className="text-3xl font-bold font-lato">
              <a href="/">mytschek</a>
            </div>

            {/* menu in large screen */}
            <ul className="hidden md:flex items-center space-x-5 font-extralight font-x1">
              <li>
                <a href="#about">quality</a>
              </li>
              <li>
                <a href="#about">design</a>
              </li>
              <li>
                <a href="#about">models</a>
              </li>
            </ul>

            <div className="md:hidden">
              <button onClick={toggleNav}>{isOpen ? <X /> : <Menu />}</button>
            </div>

          </div>
        </div>
      </div>

      {isOpen && (
        <div className="flex flex-col justify-end space-y-5 right-0 duration-150 w-screen pb-10 -top-full md:hidden">
          <ul className="font-extralight font-x1">
            <li className="flex justify-center w-full py-4">
              <a href="#about">quality</a>
            </li>
            <li className="flex justify-center w-full py-4">
              <a href="#about">design</a>
            </li>
            <li className="flex justify-center w-full py-4">
              <a href="#about">models</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
