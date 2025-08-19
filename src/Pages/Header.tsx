import React from 'react';
import { useNavigate } from 'react-router-dom';
import basket from '../assets/Basket.png'; 
import user from '../assets/user.png'; 
import search from '../assets/search.png'; 

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
  
    navigate('/'); 
  };

  return (
    <header className="bg-black border-t-4 border-red-600 text-white px-4 sm:px-6 py-3">
      <div className="flex items-center justify-between">
      
        <div className="flex-1 sm:flex-none sm:text-left text-center">
          <span className="text-yellow-400 font-bold text-lg tracking-wide block sm:inline">
            LANDAS
          </span>
        </div>

    
        <nav className="hidden sm:flex gap-4 md:gap-6 text-sm font-medium">
          <a href="#">SE</a>
          <a href="#">FW</a>
          <a href="#">PANTS</a>
          <a href="#">T-SHIRT</a>
          <a href="#">SALE</a>
          <a href="#">COLLECTION</a>
          <a href="#">COMMUNITY</a>
        </nav>

     
        <div className="flex items-center gap-3 sm:gap-4">
          <img src={basket} alt="Cart" className="w-5 h-5 sm:w-6 sm:h-6" />
          <img src={user} alt="User" className="hidden sm:inline-block w-6 h-6" />
          <img src={search} alt="Search" className="w-5 h-5 sm:w-6 sm:h-6" />

         
          <button
            onClick={handleLogout}
            className="text-xs sm:text-sm ml-1 sm:ml-2 hover:underline focus:outline-none"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
