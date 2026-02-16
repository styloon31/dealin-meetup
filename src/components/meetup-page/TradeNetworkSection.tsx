"use client";
import React from "react";
import { Users, Package, Briefcase } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

// 1. Define the shape of the card data
interface CardData {
  title: string;
  description: string;
  icon: React.ReactNode;

}

const TradeNetworkSection = () => {
  const cards: CardData[] = [
    {
      title: "Manufacturers",
      description:
        "Showcase production capacity to find reliable distribution partners and bulk agents.",
      icon: (
        <Image
          src={"/images/meetup/manufacture.svg"}
          alt="icon"
          width={1000}
          height={1000}
          className="w-20 h-20"
        />
      ),
    },
    {
      title: "Bulk Buyers",
      description:
        "Wholesalers and retailers sourcing high-volume inventory directly from the primary source.",
      icon: (
        <Image
          src={"/images/meetup/bulk.svg"}
          alt="icon"
          width={1000}
          height={1000}
          className="w-20 h-20"
        />
      ),
     
    },
    {
      title: "Deal Makers",
      description:
        "Verified brokers and agents facilitating trade, closing requirements, and earning commissions.",
      icon: (
        <Image
          src={"/images/meetup/deal.svg"}
          alt="icon"
          width={1000}
          height={1000}
          className="w-20 h-20"
        />
      ),
     
    },
  ];

  // 2. Add the type annotation to the component props
  const NetworkCard = ({ card }: { card: CardData }) => (
    <div className="bg-white border border-gray-100 rounded-[2rem] p-8 shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
      <div
        className={`w-20 h-20 flex mb-6`}
      >
        {card.icon}
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-4">{card.title}</h3>
      <p className="text-gray-500 text-sm leading-relaxed">
        {card.description}
      </p>
    </div>
  );

  return (
    <section className="relative py-16 md:py-24 px-4 bg-white overflow-hidden font-sans">
      <div
        className="absolute inset-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-4 tracking-tight">
            Join a Curated Trade Network
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Connect with the primary pillars of the Delhi NCR industrial market.
          </p>
        </div>

        {/* Mobile View */}
        <div className="md:hidden block pb-10">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1.1}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            className="w-full"
            style={{
              // @ts-ignore
              "--swiper-pagination-color": "#1a2b6d",
              "--swiper-pagination-bullet-inactive-color": "#999999",
              "--swiper-pagination-bullet-inactive-opacity": "0.4",
              "--swiper-pagination-bullet-size": "8px",
              "--swiper-pagination-bottom": "0px",
            }}
          >
            {cards.map((card, index) => (
              <SwiperSlide key={index} className="pb-10">
                <NetworkCard card={card} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop View */}
        <div className="hidden md:grid grid-cols-3 gap-8 lg:gap-12">
          {cards.map((card, index) => (
            <div key={index}>
              <NetworkCard card={card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TradeNetworkSection;
