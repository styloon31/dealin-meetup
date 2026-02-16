"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import Instagram from "../../public/Images/Dealin icons/instagram.svg";
import FacebookF from "../../public/Images/Dealin icons/facebook.svg";
import LinkedinIn from "../../public/Images/Dealin icons/linkedin.svg";
import Address from "../../public/Images/FooterAddress.svg";
import Call from "../../public/Images/FooterCall.svg";
import Contact from "../../public/Images/FooterContact.svg";
import logo from "../../public/Images/Logo-2.png";
import logo2 from "../../public/Images/Logo PDF-01.svg"

export default function HomeFooter() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`bg-white ${isMobile ? "p-6" : "py-12 px-[8vw]"}`}>
      <div className="w-full flex flex-col items-center justify-center md:hidden mb-4">
        <Image src={logo} alt="Dealin Logo" width={200}/>
        <p className="text-sm mt-2 text-center">
          Bridging Industrial Trade with Verified <br /> Connections.
        </p>
      </div>
      {/* Newsletter Section */}
      <div className="bg-[#192890] rounded-xl py-10 px-6 md:px-16 text-white mb-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="md:w-1/2">
          <h5 className="text-lg md:text-2xl font-semibold mb-2 text-center">
            Fuel Your Pipeline, Not Your Inbox
          </h5>
          <p className="text-sm md:text-lg font-normal text-center">
            Join the list of 10,000+ customers<br className="block md:hidden" /> in our newsletter
          </p>
        </div>
        <div className="md:w-1/2 flex justify-end w-full">
          <form id="Newsletter" className="flex w-full max-w-xl bg-white rounded-lg overflow-hidden shadow-md p-1">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 text-sm md:text-base text-black bg-white focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#192890] text-white text-sm md:text-base font-medium px-3 md:px-6 py-3 rounded-lg md:ml-2 focus:outline-none focus:ring-2 focus:ring-[#192890] transition-all duration-150"
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </div>

      {/* Footer Content */}
      <div className="md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-black hidden">
        {/* Logo & Social Media */}
        <div className="">
          <Image src={logo2} alt="Dealin Logo" height={60}  className="hidden md:block"/>
          <p className="text-sm mt-2 hidden md:block">
            Bridging Industrial Trade with Verified <br /> Connections.
          </p>
          <h5 className="mt-10 text-base font-semibold">Social Media</h5>
          <div className="flex gap-4 mt-6">
            <a
              href="https://www.instagram.com/dealinofficial?igsh=cHZrcmR2azY3cHlm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={Instagram} alt="Instagram" width={20} height={20} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61577813374986"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={FacebookF} alt="Facebook" width={20} height={20} />
            </a>
            <a
              href="http://linkedin.com/company/dealinofficial"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={LinkedinIn} alt="LinkedIn" width={20} height={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="pl-8">
          <h5 className="text-base font-semibold mb-10">Quick Link</h5>
          <ul className="space-y-2 text-sm list-none">
            <li>Home</li>
            <li>About us</li>
            <li>Blog</li>
            <li>Pricing for Seller</li>
            <li>Pricing for Broker</li>
            <li className="mt-10">Login as a seller/broker</li>
            <li>Register as a seller/broker</li>
          </ul>
        </div>

        {/* Assistance Section */}
        <div>
          <h5 className="text-base font-semibold mb-6">Assistance</h5>

          {/* Immediate Assistance */}
          <div className="mb-8">
            <p className="text-[#4FD896] font-semibold text-sm md:text-base mb-2">
              Immediate Assistance
            </p>
            <p className="text-sm mb-3">
              For urgent disputes, account issues, <br /> or transaction support
            </p>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-base">@</span>
              <span className="font-medium text-sm">support@dealin.in</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-base">📞</span>
              <span className="font-medium text-sm">+91 9310244736</span>
            </div>
          </div>

          {/* Grow with Dealin */}
          <div className="mb-8">
            <p className="text-[#4FD896] font-semibold text-sm md:text-base mb-2">
              Grow with Dealin
            </p>
            <p className="text-sm mb-3">
              For bulk seller onboarding, corporate <br /> training programs, or strategic alliances
            </p>
            <div className="flex items-center gap-2">
              <span className="text-base">@</span>
              <span className="font-medium text-sm">partnership@dealin.in</span>
            </div>
          </div>

          {/* Suggestions */}
          <div>
            <p className="text-[#4FD896] font-semibold text-sm md:text-base mb-2">
              Suggestions & Questions
            </p>
            <p className="text-sm mb-3">
              Share ideas to improve Dealin or ask <br /> about platform features
            </p>
            <div className="flex items-center gap-2">
              <span className="text-base">@</span>
              <span className="font-medium text-sm">hello@dealin.in</span>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h5 className="text-2xl font-medium mb-4">Contact</h5>
          <div className="flex gap-2 items-baseline">
            <Image src={Address} alt="LinkedIn" width={15} height={15} />
            <p className="text-sm mb-3">
              <span className="font-semibold">Office Address:</span>
              <br />
              Noida sector 105, <br /> Noida, Uttar Pradesh - 201304
            </p>
          </div>
          <div className="flex items-baseline gap-2">
            <Image src={Contact} alt="LinkedIn" width={15} height={15} />
            <p className="text-sm mb-3">
              <span className="font-medium">Email</span>
              <br />
              info@dealin.com
            </p>
          </div>
          <div className="flex items-baseline gap-2">
            <Image src={Call} alt="LinkedIn" width={15} height={15} />
            <p className="text-sm">
              <span className="font-medium">Phone</span>
              <br />
              +91 9310244736
            </p>
          </div>
        </div>
      </div>






      {/* footer content mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-black md:hidden">
        {/* Contact Info */}
        <div className="border-b border-[#808080] pb-4">
          <h5 className="text-2xl font-medium mb-4">Contact</h5>
          <div className="flex gap-3 items-baseline">
            <Image src={Address} alt="LinkedIn" width={15} height={15} />
            <p className="text-sm mb-3">
              <span className="font-semibold text-base">Office Address</span>
              <br />
              Noida sector 105, Noida, Uttar Pradesh -<br /> 201304
            </p>
          </div>
          <div className="flex items-baseline gap-3">
            <Image src={Contact} alt="LinkedIn" width={15} height={15} />
            <p className="text-sm mb-3">
              <span className="font-medium text-base">Email</span>
              <br />
              info@dealin.com
            </p>
          </div>
          <div className="flex items-baseline gap-3">
            <Image src={Call} alt="LinkedIn" width={15} height={15} />
            <p className="text-sm">
              <span className="font-medium text-base">Phone</span>
              <br />
              +91 9310244736
            </p>
          </div>
        </div>
        
        {/* Quick Links */}
        <div className="border-b border-[#808080] pb-4">
          <h5 className="text-xl font-medium mb-10">Quick Link</h5>
          <ul className="space-y-2 text-sm list-none">
            <li>Home</li>
            <li>About us</li>
            <li>Blog</li>
            <li>Pricing for Seller</li>
            <li>Pricing for Broker</li>
            <li className="mt-6">Login as a seller/broker</li>
            <li>Register as a seller/broker</li>
          </ul>
        </div>

        {/* Assistance Section */}
        <div className="border-b border-[#808080] pb-4">
          <h5 className="text-xl font-medium mb-6">Assistance</h5>

          {/* Immediate Assistance */}
          <div className="mb-8">
            <p className="text-[#4FD896] font-semibold text-base md:text-base mb-2">
              Immediate Assistance
            </p>
            <p className="text-sm mb-3">
              For urgent disputes, account issues, <br /> or transaction support
            </p>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-base">@</span>
              <span className="font-medium text-sm">support@dealin.in</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-base">📞</span>
              <span className="font-medium text-sm">+91 9310244736</span>
            </div>
          </div>

          {/* Grow with Dealin */}
          <div className="mb-8">
            <p className="text-[#4FD896] font-semibold text-base md:text-base mb-2">
              Grow with Dealin
            </p>
            <p className="text-sm mb-3">
              For bulk seller onboarding, corporate <br /> training programs, or strategic alliances
            </p>
            <div className="flex items-center gap-2">
              <span className="text-base">@</span>
              <span className="font-medium text-sm">partnership@dealin.in</span>
            </div>
          </div>

          {/* Suggestions */}
          <div>
            <p className="text-[#4FD896] font-semibold text-base md:text-base mb-2">
              Suggestions & Questions
            </p>
            <p className="text-sm mb-3">
              Share ideas to improve Dealin or ask <br /> about platform features
            </p>
            <div className="flex items-center gap-2">
              <span className="text-base">@</span>
              <span className="font-medium text-sm">hello@dealin.in</span>
            </div>
          </div>
        </div>

        {/* Logo & Social Media */}
        <div>
          <Image src={logo} alt="Dealin Logo" height={60}  className="hidden md:block"/>
          <p className="text-sm mt-2 hidden md:block">
            Bridging Industrial Trade with Verified <br /> Connections.
          </p>
          <h5 className="text-base font-semibold">Social Media</h5>
          <div className="flex gap-4 mt-6">
            <a
              href="https://www.instagram.com/dealinofficial?igsh=cHZrcmR2azY3cHlm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={Instagram} alt="Instagram" width={28} height={28} />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61577813374986"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={FacebookF} alt="Facebook" width={28} height={28} />
            </a>
            <a
              href="http://linkedin.com/company/dealinofficial"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={LinkedinIn} alt="LinkedIn" width={28} height={28} />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
