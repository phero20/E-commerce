import React from "react";
import Title from "../components/Title";
import NewsLetter from "../components/NewsLetter";
import { assets } from "../assets/frontend_assets/assets";

export default function about() {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img src={assets.about_img} alt="" className="wfull md:max-w-[450px]" />
        <div className="flex flex-col justify-center gap-6 md;2/4 text-gray-600">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam
            nostrum, velit ullam eos dignissimos iste facere commodi minus
            quibusdam culpa, vitae esse fugiat? Consequatur autem iure, tempore
            modi quae nam quasi eveniet culpa velit praesentium, dolorum qui
            recusandae voluptatem itaque corporis placeat beatae cupiditate ab
            quia aspernatur natus! Ipsam, atque.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            illo omnis in quam, ullam distinctio provident corporis impedit
            eligendi, harum modi tempore quo inventore fugiat quis voluptatem
            dolores odio ad.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
            officiis quasi dicta excepturi voluptas? Voluptate suscipit
            voluptatem reiciendis quam tempore? Dolorem dolores saepe rem illo
            commodi unde mollitia voluptates impedit!
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
            impedit quibusdam perspiciatis nam reprehenderit, eligendi dolorum
            esse quia id libero quae repudiandae excepturi. Dolor voluptas
            dolorem sed error incidunt neque?
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
            impedit quibusdam perspiciatis nam reprehenderit, eligendi dolorum
            esse quia id libero quae repudiandae excepturi. Dolor voluptas
            dolorem sed error incidunt neque?
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum
            impedit quibusdam perspiciatis nam reprehenderit, eligendi dolorum
            esse quia id libero quae repudiandae excepturi. Dolor voluptas
            dolorem sed error incidunt neque?
          </p>
        </div>
      </div>
      <NewsLetter />
    </div>
  );
}
