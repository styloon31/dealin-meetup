"use client"
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

// 1. FAQ Data
const faqData = [
  {
    question: "Is This Only For DealIn Members?",
    answer: "While priority is given to members, we often open specific sessions to vetted non-members who meet our trade criteria. Sign up to see if you qualify for a guest pass."
  },
  {
    question: "How Does The Session Work?",
    answer: "It is a 60-minute structured virtual meetup. Every participant gets a dedicated slot to introduce their business and announce what they are currently buying, selling, or brokering to the entire room."
  },
  {
    question: "Is There A Registration Fee?",
    answer: "The Network Exchange is free for invited DealIn members. Guest passes for non-members may carry a nominal commitment fee to ensure attendance and quality."
  },
  {
    question: "What Happens After The Meetup?",
    answer: "You will receive a curated list of attendees and their requirements. You can then connect directly through the DealIn dashboard to initiate negotiations."
  },
  {
    question: "How Do I Prepare For The Session?",
    answer: "Prepare a clear 60-second pitch: Who you are, what stock you have ready to ship, and exactly what inventory you are looking to source right now."
  }
];

const FAQSection = () => {
  // State to track which item is open (1 is open by default in your screenshot)
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#FAFAFA] py-16 px-6 md:px-12 lg:px-20 font-sans min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER SECTION --- */}
        {/* Mobile: Column & Centered. Desktop: Row, Spaced Between & Aligned Bottom */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-12 md:mb-16">
          
          {/* Left Side: Heading */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-semibold text-black leading-tight tracking-tight">
              Frequently <br className="hidden md:block" />
              Asked Question
            </h2>
          </div>

          {/* Right Side: Description */}
          <div className="text-center md:text-left max-w-lg md:max-w-md">
            <p className="text-gray-500 text-sm md:text-base leading-relaxed">
              Get quick answers about DealIn's B2B platform — from seller and 
              broker verification to pricing, tags, and secure deal tools. Need more 
              help? Contact our support team.
            </p>
          </div>
        </div>

        {/* --- FAQ LIST SECTION --- */}
        {/* Sits below the header, full width */}
        <div className="flex flex-col gap-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={index}
                className="bg-white rounded-[2rem] overflow-hidden shadow-sm transition-all duration-300"
              >
                {/* Clickable Question Area */}
                <button
                  onClick={() => handleToggle(index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none group"
                >
                  <span className="text-gray-900 text-base md:text-lg pr-4">
                    {item.question}
                  </span>
                  
                  {/* Toggle Icon Circle */}
                  <div className={`
                    flex items-center justify-center w-10 h-10 rounded-full shrink-0 transition-colors duration-200
                    ${isOpen ? 'bg-[#303030] text-white' : 'bg-white border-[#F1F2FF] border text-[#1E0A52]'}
                  `}>
                    {isOpen ? <Minus size={18} strokeWidth={3} /> : <Plus size={18} strokeWidth={3} />}
                  </div>
                </button>

                {/* Expandable Answer Area */}
                <div 
                  className={`
                    transition-[max-height,opacity] duration-300 ease-in-out overflow-hidden
                    ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}
                  `}
                >
                  <div className="px-6 md:px-8 pb-8 text-gray-500 text-sm md:text-base leading-relaxed max-w-4xl">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;