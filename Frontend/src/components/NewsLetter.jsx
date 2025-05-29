import React from "react";

export default function NewsLetter() {
const onSubmithandler = (e) =>{
  e.preventDefault();
}

  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe now & get 20% off
      </p>
      <p className="text-gray-400 mt-3">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod beatae
        omnis, molestiae commodi in a soluta. Perferendis optio repudiandae
        tempore.
      </p>
      <form action="" onSubmit={onSubmithandler} className="w-full sm:w-1/2 flex items-center gap-3 mx-auto border pl-3 mt-5">
        <input
          className="w-full sm:flex-1 outline-none"
          required
          type="email"
          placeholder="Enter your email"
        />
        <button
          type="submit"
          className="bg-black text-white text-xs px-10 py-4"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
}
