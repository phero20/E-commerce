import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

export default function NavBar() {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("");
  const adminPort = import.meta.env.VITE_ADMIN_PORT;
  const {
    setShowSearch,
    getcartcount,
    navigate,
    token,
    setToken,
    setCartItems,
    backendUrl,
  } = useContext(ShopContext);

  const fetchUserName = async () => {
    try {
      const response = await axios.post(
        backendUrl + "/api/user/getName",
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        setName(response.data.name);
      } else {
        setName("");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };
  useEffect(() => {
    fetchUserName();
  }, [token]);

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
    navigate("/login");
  };

  const handleSearch = () => {
    setShowSearch(true);

    navigate("/collection");
  };

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      <Link to="/">
        <img src={assets.logo} alt="" className="w-[5.4rem]" />
      </Link>
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink className="flex flex-col items-center gap-1" to="/">
          <p>HOME</p>
          <hr className="w-11/12 border-none h-[2px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink className="flex flex-col items-center gap-1" to="/collection">
          <p>COLLECTION</p>
          <hr className="w-11/12 border-none h-[2px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink className="flex flex-col items-center gap-1" to="/orders">
          <p>ORDERS</p>
          <hr className="w-11/12 border-none h-[2px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink className="flex flex-col items-center gap-1" to="/about">
          <p>ABOUT</p>
          <hr className="w-11/12 border-none h-[2px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink className="flex flex-col items-center gap-1" to="/contact">
          <p>CONTACT</p>
          <hr className="w-11/12 border-none h-[2px] bg-gray-700 hidden" />
        </NavLink>
          <a className="flex flex-col items-center gap-1" href={adminPort + "/add"}>
          <p>ADMIN PANEL</p>
          <hr className="w-11/12 border-none h-[2px] bg-gray-700 hidden" />
        </a>
        
      </ul>
      <div className="flex items-center gap-6">
        <img
          src={assets.search_icon}
          alt="search"
          className="w-5 cursor-pointer"
          onClick={handleSearch}
        />

        <div className="group relative">
          <img
            src={assets.profile_icon}
            alt="p"
            className="w-5 cursor-pointer"
            onClick={() => (token ? null : navigate("/login"))}
          />

          {token && (
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                <p
                  className="cursor-pointer hover:text-black"
                  onClick={() => navigate("/")}
                >
                  {name}
                </p>
                <p className="cursor-pointer hover:text-black" onClick={logout}>
                  Logout
                </p>
              </div>
            </div>
          )}
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} alt="card" className="w-5 min-w-5" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getcartcount()}
          </p>
        </Link>
        <img
          src={assets.menu_icon}
          alt="menu"
          className="w-5 cursor-pointer sm:hidden"
          onClick={() => setVisible(true)}
        />
      </div>
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${
          visible ? "w-full" : "w-0"
        }`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img
              src={assets.dropdown_icon}
              alt="dp"
              className="h-4 rotate-180 "
            />
            <p>Back</p>
          </div>
          <NavLink
            to="/"
            className="py-2 pl-6 border"
            onClick={() => setVisible(false)}
          >
            HOME
          </NavLink>
          <NavLink
            to="/collection"
            className="py-2 pl-6 border"
            onClick={() => setVisible(false)}
          >
            COLLECTION
          </NavLink>
          <NavLink
            to="/orders"
            className="py-2 pl-6 border"
            onClick={() => setVisible(false)}
          >
            ORDERS
          </NavLink>
          <NavLink
            to="/about"
            className="py-2 pl-6 border"
            onClick={() => setVisible(false)}
          >
            ABOUT
          </NavLink>
          <NavLink
            to="/contact"
            className="py-2 pl-6 border"
            onClick={() => setVisible(false)}
          >
            CONTACT
          </NavLink>
          <a
            href={adminPort + "/add"}
            className="py-2 pl-6 border"
          >
            ADMIN PANEL
          </a>
        </div>
      </div>
    </div>
  );
}
