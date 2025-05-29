import React from "react";
import { assets } from "../assets/frontend_assets/assets";

export default function Footer() {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div className="">
          <img src={assets.logo} className="mb-5 w-32" alt="logo" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur maiores molestiae dicta soluta atque asperiores aut sit
            itaque vel, enim ipsa repudiandae sint at assumenda libero minus in
            quisquam vero!
          </p>
        </div>
        <div>
            <p className="text-xl font-medium mb-5">
                COMPANY
            </p>
            <ul className="flex flex-col gap-1 text-gray-600">
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div>
            <p className="text-xl fmont-medium mb-5">
                GET IN TOUCH
            </p>
               <ul className="flex flex-col gap-1 text-gray-600">
                <li>+9190909090</li>
                <li>abcdef@gmail.com</li>
            </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="text-center text-sm py-5">
             Copyright 2025@forever.com  - All Rights Reserved
        </p>
      </div>
    </div>
  );
}
