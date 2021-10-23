import React from "react";
import Avater from "../components/Avater";

function all() {
  return (
    <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center mx-auto sm:py-12">
      <div class="">
        <div class="h-auto py-20 px-10 w-2/3 bg-indigo-500 flex flex-col space-y-5 mx-auto rounded-3xl shadow-xl hover:rotate-1 transition-transform">
          <h1 class=" font-medium text-white text-xl tracking-wide">
            It's Mukherjee
          </h1>
          <h2 class="font-normal tracking-wide text-2xl text-white lg:w-2/5">
            Try to create a google-clone not perfect but{" "}
            <span className="font-mono text-black ">Good</span> using NEXT.JS
            technologies
          </h2>
          <Avater
            url="https://yt3.ggpht.com/ytc/AAUvwnjf45JTg_zblu9feye-Yh7jvrKX6S_p4W8grmm-kA=s900-c-k-c0x00ffffff-no-rj"
            className="ml-auto w-36 h-36 rounded-full animate-bounce "
          />

          <div class="flex flex-col">
            <backquotes class="font-normal text-white text-sm tracking-wider">
              <span className=" text-lg font-serif">
                {" "}
                Bibhabendu Mukherjee{" "}
              </span>{" "}
            </backquotes>
            <backqoutes class="font-normal text-white text-sm tracking-wider">
              2021{" "}
            </backqoutes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default all;
