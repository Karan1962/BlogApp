import React from "react";

const Navbar = () => {
  return (
    <nav className="p-3 shadow-md">
      <div className="max-w-6xl flex justify-between m-auto">
        <div className="font-bold ">Karan's Blog</div>
        <div className="flex gap-2 w-1/2 justify-evenly">
          <div>Blog's</div>
          <div>About</div>
          <div>Contact Us</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
