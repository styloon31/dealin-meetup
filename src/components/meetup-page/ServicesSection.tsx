import React from "react";
import { Search, Package, Users } from "lucide-react";
import Image from "next/image";

const ServicesSection = () => {
  const services = [
    {
      title: "Direct Discovery",
      description:
        "Sellers meet verified bulk buyers and specialized brokers in a structured environment designed to accelerate business discovery and deal-flow.",
      icon: (
        <Image
          src={"/images/meetup/direct.svg"}
          alt="icon"
          width={1000}
          height={1000}
          className="w-20 h-20"
        />
      ),
    },
    {
      title: "Inventory Liquidity",
      description:
        "Move stock faster and liquidate inventory efficiently by showcasing arrivals directly to our vetted network of active brokers and buyers.",
      icon: (
        <Image
          src={"/images/meetup/inventory.svg"}
          alt="icon"
          width={1000}
          height={1000}
          className="w-20 h-20"
        />
      ),
    },
    {
      title: "Broker Synergies",
      description:
        "Brokers connect with primary suppliers to fulfill active requirements and explore high-value partnerships during live session matchmaking.",
      icon: (
        <Image
          src={"/images/meetup/broker.svg"}
          alt="icon"
          width={1000}
          height={1000}
          className="w-20 h-20"
        />
      ),
    },
  ];

  return (
    <section className="relative py-20 px-6 bg-white overflow-hidden">
      {/* Dot Grid Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Small Overline Header */}
        <p className="text-lg font-bold tracking-widest text-[#303030] uppercase mb-4">
          Services
        </p>

        {/* Main Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#192890] mb-16">
          Why Professionals Attend
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center group">
              {/* Icon Container - Simulated Illustration Style */}
              <div
                className={`w-20 h-20 mb-6 flex items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110`}
              >
                {service.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base max-w-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
