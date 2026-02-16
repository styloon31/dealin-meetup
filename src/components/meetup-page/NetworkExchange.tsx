import React from "react";
import { Zap, MessageCircle, Phone, MessageSquare } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const NetworkExchangeHero = () => {
  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden flex items-center justify-center py-12 md:py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* --- LEFT CONTENT COLUMN --- */}
        <div className="z-10 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
          {/* Top Label */}
          <p className="text-gray-900 font-semibold tracking-wide text-sm md:text-base uppercase">
            Next Exchange: Feb 20, 5:00 PM IST
          </p>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-[1.15]">
            Where Manufacturers, <br className="hidden lg:block" />
            Wholesalers <span className="text-black">&</span>{" "}
            <span className="text-[#4FD896]">Close Deals.</span>
          </h1>

          {/* Subtext */}
          <p className="text-gray-600 text-lg md:text-xl max-w-xl leading-relaxed">
            The Network Exchange is a weekly, 60-minute virtual trade floor. No
            fluff—just verified professionals moving inventory and sourcing
            stock.
          </p>

          {/* CTA Button */}
          <a href="#deal-form" className="bg-[#E5882B] hover:bg-[#d67d25] text-white font-semibold py-4 px-8 rounded-lg shadow-lg transition-transform transform hover:scale-105 active:scale-95 text-base md:text-lg w-full md:w-auto">
            Claim Your Free Invite - Feb 20, 5:00 PM
          </a>

          {/* Social Proof */}
          <div className="flex items-center gap-2 text-sm font-semibold text-gray-900 pt-2">
            <Zap className="w-4 h-4 fill-blue-700 text-blue-700" />
            <span>
              Join 450+ industry leaders already in the DealIn ecosystem.
            </span>
          </div>
        </div>

        {/* --- RIGHT IMAGE COMPOSITION COLUMN --- */}
        <div className="relative w-full h-full flex items-center justify-center mt-8 lg:mt-0">
          <Image
            src="/images/meetup/network-exchange-hero.png"
            alt="Network Exchange Hero"
            width={1000}
            height={1000}
            className="w-full h-full object-contain rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default NetworkExchangeHero;
