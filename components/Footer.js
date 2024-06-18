import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export const Footer = () => {
	return (
    <>
      <div className="relative">
        <div className="bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start">
          <div className="p-5">
            <ul>
              <p className="text-gray-800 font-bold text-3xl pb-6">
                Francis Silva
              </p>
              <div className="flex gap-6 pb-5 ml-6">
                <a
                  className="text-gray-800"
                  href="https://github.com/VathanSilva"
                >
                  <FaGithub className="text-2xl cursor-pointer hover:text-black" />
                </a>
                <a
                  className="text-gray-800"
                  href="https://www.linkedin.com/in/vathan-silva/"
                >
                  <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
                </a>
                <a
                  className="text-gray-800"
                  href="https://www.youtube.com/channel/UCzWYas0cWXTT1YFgZQhLUyQ"
                >
                  <FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
                </a>
              </div>
            </ul>
          </div>
          <div className="p-5">
            <ul>
              <p className="text-gray-800 font-bold text-2xl pb-4">Pages</p>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                <a className="nav-link" href="Project">
                  Electronics Project
                </a>
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                <a className="nav-link" href="Graphic">
                  Graphic Design
                </a>
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                <a
                  className="nav-link"
                  href="https://francis-webproject.vercel.app/#connect"
                >
                  Web Projects
                </a>
              </li>
            </ul>
          </div>
          <div className="p-5">
            <ul>
              <p className="text-gray-800 font-bold text-2xl pb-4"> Project </p>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                <a className="nav-link" href="Project">
                  Electronics Projects
                </a>
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                <a
                  className="nav-link"
                  href="https://francis-webproject.vercel.app/#connect"
                >
                  Web Projects
                </a>
              </li>
            </ul>
          </div>
          <div className="p-5">
            <ul>
              <p className="text-gray-800 font-bold text-2xl pb-4">
                Graphic Design
              </p>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                <a className="nav-link" href="Graphic">
                  {" "}
                  Logo Design{" "}
                </a>
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                <a className="nav-link" href="Graphic">
                  Post Design
                </a>
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                <a className="nav-link" href="Graphic">
                  Video Editing{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center bg-gray-50">
          <p className=" text-gray-800 font-semibold">
            © 2023 Built By{" "}
            <span className="hover:text-blue-600 font-semibold cursor-pointer">
              Francis Silva{" "}
            </span>
          </p>
        </div>
      </div>
    </>
  );
}