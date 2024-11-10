"use client";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className="bg-blue-400 border-t-2">
      <footer className="text-white body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex  flex-wrap title-font font-medium items-center md:justify-start justify-center text-gray-900">
            
            <span className="ml-3 text-white tracking-widest text-xl">Bushra</span>
          </a>
          <p className=" text-sm text-white mb-4 md:mb-0 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-500 sm:py-2 sm:mt-0 mt-4">
            © 2024 | All Right Reserved
          </p>
          <div className="ml-12 ">
            <ul className="footer-text mx-auto flex flex-wrap  ">
              <li>
            <a href="/" className="line tag  text-white px-2 ">
              FAQ
            </a></li>
            <li>
            <a href="/" className="line tag text-white px-2">
              Services
            </a></li>
            <li><a href="/contact" className="line tag text-white px-2">
              Contact
            </a></li>
            <li><a href="/" className="line tag text-white px-2">
              Privacy Policy
            </a></li>
            </ul>
          </div>

          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start text-2xl">
            <Link
              href={"https://github.com/bushramemon941"}
              className="text-white ml-5"
            >
              <FaGithub className="foot-icon  "{...(null as any)} />
            </Link>

            <Link
              href={
                "https://www.linkedin.com/in/bushra-memon-40b8a02b6?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B0F%2BpqnwNRb%2BEoHlIZuVl5g%3D%3D"
              }
              className="ml-5 text-white">
              <FaLinkedin className="foot-icon"{...(null as any)} />
            </Link>

            <Link href={"mailto:"} className="ml-5 text-white">
              <IoMdMail className="foot-icon "{...(null as any)} />
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;