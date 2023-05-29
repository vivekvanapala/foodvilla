import React from "react";
import aboutus from "../assets/About.jpeg";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

const About = () => {
  return (
    <div className="max-w-[1320px] mx-6 lg:mx-auto flex justify-center items-center flex-wrap flex-col lg:flex-row my-16">
      <div className="lg:w-[40%] bg-white rounded-lg shadow-lg p-8">
        <p className="text-gray-600 font-semibold font-serif text-2xl">
          vivek varma
        </p>
        <p className=" font-serif font-light text-md my-1">
          KL Univercity
        </p>
        </div>
        
        
    </div>
  );
};

export default About;
