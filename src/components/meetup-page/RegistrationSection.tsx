"use client";
import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Check, Loader2 } from "lucide-react";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import SignupSuccessModal from "./SignupSucessModel";

// --- Assets & Icons ---
const TopoPattern = () => (
  <Image
    src={"/images/meetup/form-bg.png"}
    alt="bg"
    width={1000}
    height={1000}
    className="absolute inset-0 w-full h-full pointer-events-none"
  />
);

const statsData = [
  {
    icon: (
      <Image
        src={"/images/meetup/active.svg"}
        alt="icon"
        width={1000}
        height={1000}
        className="w-20 h-20"
      />
    ),
    title: "500+",
    subtitle: "ACTIVE PROFESSIONALS",
  },
  {
    icon: (
      <Image
        src={"/images/meetup/industry.svg"}
        alt="icon"
        width={1000}
        height={1000}
        className="w-20 h-20"
      />
    ),
    title: "12+",
    subtitle: "INDUSTRY CATEGORIES",
  },
  {
    icon: (
      <Image
        src={"/images/meetup/live.svg"}
        alt="icon"
        width={1000}
        height={1000}
        className="w-20 h-20"
      />
    ),
    title: "Weekly",
    subtitle: "LIVE MATCHING",
  },
  {
    icon: (
      <Image
        src={"/images/meetup/registration.svg"}
        alt="icon"
        width={1000}
        height={1000}
        className="w-20 h-20"
      />
    ),
    title: "₹0",
    subtitle: "REGISTRATION FEE",
  },
];

// --- Custom Dropdown Component ---
interface DropdownProps {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const CustomDropdown = ({
  label,
  options,
  value,
  onChange,
  placeholder = "Select option",
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex flex-col gap-2 relative" ref={dropdownRef}>
      {label && (
        <label className="text-sm font-bold text-gray-700 flex items-center gap-1">
          {label} <span className="text-red-500">*</span>
        </label>
      )}

      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full bg-gray-50 border ${
          isOpen ? "border-blue-400 ring-2 ring-blue-100" : "border-gray-200"
        } rounded-xl px-4 py-3 cursor-pointer flex justify-between items-center transition-all`}
      >
        <span className={value ? "text-gray-900" : "text-gray-400"}>
          {value || placeholder}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-gray-400 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      {isOpen && (
        <div className="absolute top-[calc(100%+4px)] left-0 w-full bg-white border border-gray-100 rounded-xl shadow-xl z-50 overflow-hidden py-1 animate-in fade-in zoom-in-95 duration-100">
          <div className="max-h-60 overflow-y-auto custom-scrollbar">
            {options.map((option, idx) => (
              <div
                key={idx}
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
                className="px-4 py-3 hover:bg-gray-50 cursor-pointer text-gray-700 text-sm font-medium border-b border-gray-50 last:border-none flex items-center justify-between group"
              >
                {option}
                {value === option && (
                  <Check className="w-4 h-4 text-blue-600" />
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const RegistrationSection = () => {
  const [step, setStep] = useState(1);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [loading, setLoading] = useState(false);
  
  const initialFormState = {
    fullName: "",
    phone: "",
    role: "",
    companyName: "",
    industry: "", 
    location: "", 
    goal: "",
    catalogLink: "",
  };

  const [formData, setFormData] = useState(initialFormState);

  const handleFinalSubmit = async () => {
    setLoading(true);

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setShowSuccessModal(true);
        // Do not reset form here, wait for modal close
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Error submitting form.");
    } finally {
      setLoading(false);
    }
  };

  const handleCloseModal = () => {
    setShowSuccessModal(false);
    setFormData(initialFormState); // Reset Data
    setStep(1); // Go back to Step 1
  };

  const formRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    if (
      step === 1 &&
      formData.fullName &&
      formData.phone.length === 10 &&
      formData.role
    ) {
      setStep(2);
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const isBroker = [
    "Broker / Independent Agent",
    "Strategic Consultant (Business, Supply Chain, Finance)",
    "Contractor / Project Consultant",
  ].includes(formData.role);

  const isStep2Valid = () => {
    if (isBroker) {
      return formData.industry && formData.location && formData.goal;
    } else {
      return (
        formData.companyName &&
        formData.industry &&
        formData.location &&
        formData.goal
      );
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 10) {
      setFormData({ ...formData, phone: value });
    }
  };

  // --- OPTIONS DATA ---
  const roleOptions = [
    "Manufacturer / Factory Owner",
    "Wholesaler / Distributor / Stockist",
    "Distributor / C&F Agent",
    "Retailer / Showroom Owner",
    "Contractor / Project Consultant",
    "Industrial Service Provider (Logistics, IT, Maintenance)",
    "Broker / Independent Agent",
    "Strategic Consultant (Business, Supply Chain, Finance)",
  ];

  const businessGoalOptions = [
    "Move Inventory / Liquidate Stock",
    "Sourcing / Find New Suppliers",
    "Identify Bulk Buyers / Wholesalers",
    "Find Agents / Expand Distribution Network",
    "Market Price Intelligence",
    "Project Partnership / Collaboration",
    "Explore DealIn Community",
  ];

  const brokerGoalOptions = [
    "Find New Suppliers for Active Buyers",
    "Expand My Manufacturer/Seller Network",
    "Offer Consultation/Advisory Services",
    "Market Price & Inventory Intelligence",
    "Project Partnership & Collaboration",
    "Explore DealIn Community",
  ];

  const locationOptions = [
    "Delhi NCR (Delhi, Noida, Gurugram, Faridabad, Ghaziabad)",
    "Mumbai MMR (Mumbai, Thane, Navi Mumbai)",
    "Pune Cluster (Pimpri-Chinchwad, Chakan)",
    "Gujarat Hubs (Ahmedabad, Surat, Vadodara, Rajkot)",
    "Bengaluru (Whitefield, Peenya, Electronic City)",
    "Chennai (Sriperumbudur, Oragadam)",
    "Hyderabad (Pashamylaram, Jeedimetla)",
    "Kolkata (Howrah, Haldia)",
    "Bihar Industrial Hubs (Patna, Bihta, Begusarai, Muzaffarpur)",
    "Industrial North (Ludhiana, Jalandhar, Kanpur, Jaipur)",
    "Central India (Indore, Raipur)",
    "PAN India (Operating Nationally)",
    "International / Export-Import",
  ];

  const brokerSpecializationOptions = [
    "Industrial Real Estate & Leasing",
    "Raw Material Procurement",
    "Bulk Finished Goods Trading",
    "Machinery & Industrial Assets",
    "Tender & Govt. Project Liaison",
    "Textiles & Apparel (Bulk)",
    "Logistics & Supply Chain",
    "Energy & Solar Solutions",
    "Corporate & Institutional Sales",
    "Business & Strategic Consultation",
    "Industrial Service Provider",
  ];

  const sellerIndustryOptions = [
    "Construction & Building Materials",
    "Industrial Chemicals & Raw Materials",
    "Petrochemicals, Oil & Gas",
    "Hardware, Tools & Fasteners",
    "Electrical & Electronic Components",
    "Packaging, Plastic & Polymers",
    "Textiles, Apparel & Fabrics (Bulk)",
    "Machinery, Equipment & Spare Parts",
    "Safety, PPE & Medical Supplies",
    "FMCG, Food & Agriculture (Wholesale)",
    "Energy & Solar Solutions",
    "B2B Services (Logistics, Warehousing, Taxation, Legal)",
    "Technology & AI Solutions",
  ];

  return (
    <section
      id="deal-form"
      className="min-h-screen bg-[#F9F9F9] flex flex-col justify-center items-center py-12 px-4 font-sans"
    >
      
      <SignupSuccessModal
        isOpen={showSuccessModal}
        onClose={handleCloseModal}
        userName={formData.fullName}
        whatsappLink="https://chat.whatsapp.com/YOUR_ACTUAL_GROUP_LINK"
      />
      {/* --- FORM CARD --- */}
      <div
        ref={formRef}
        className="relative bg-white w-full max-w-5xl rounded-[2.5rem] shadow-sm border border-gray-100 p-6 md:p-12 overflow-visible mb-12 transition-all duration-500"
      >
        <TopoPattern />

        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 flex items-center justify-center gap-2">
              <span className=" p-2 rounded-lg text-blue-600">
                <Image
                  src={"/images/meetup/book.svg"}
                  alt="form icon"
                  width={2400}
                  height={2400}
                  className="w-20 h-20"
                />
              </span>
              {step === 1 ? "Let's get started" : "Role-Specific Details"}
            </h2>
          </div>

          {/* Stepper */}
          <div className="flex items-center justify-center max-w-xl mx-auto mb-10 md:mb-14 text-sm md:text-base">
            <div
              className={`flex items-center gap-2 ${step >= 1 ? "opacity-100" : "opacity-50"}`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shadow-sm transition-colors ${step > 1 ? "bg-[#4FD896] text-white" : "bg-[#4FD896] text-white"}`}
              >
                {step > 1 ? <Check className="w-4 h-4" /> : "1"}
              </div>
              <span
                className={`font-semibold ${step === 1 ? "text-gray-800" : "text-gray-500"}`}
              >
                Personal Information
              </span>
            </div>

            <div
              className={`flex-1 h-[1px] mx-4 min-w-[20px] max-w-[100px] transition-colors ${step > 1 ? "bg-[#4FD896]" : "bg-gray-300"}`}
            />

            <div
              className={`flex items-center gap-2 ${step === 2 ? "opacity-100" : "opacity-50"}`}
            >
              <div
                className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold text-sm transition-colors ${step === 2 ? "border-[#4FD896] bg-[#4FD896] text-white" : "border-gray-300 bg-white text-gray-400"}`}
              >
                2
              </div>
              <span
                className={`font-medium ${step === 2 ? "text-gray-800" : "text-gray-500"}`}
              >
                Role & Intent Verification
              </span>
            </div>
          </div>

          {/* --- STEP 1 CONTENT --- */}
          {step === 1 && (
            <div className="max-w-3xl mx-auto space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-gray-700 flex items-center gap-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all text-gray-700 placeholder-gray-400"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-gray-700 flex items-center gap-1">
                    WhatsApp Number <span className="text-red-500">*</span>
                  </label>

                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none z-10">
                      <span className="text-xl mr-1">
                        <Image
                          src={"/images/india.svg"}
                          alt="icon"
                          width={20}
                          height={20}
                        />
                      </span>
                      <span className="text-gray-700 font-medium text-sm">
                        +91
                      </span>
                      <div className="w-[1px] h-6 bg-gray-300 mx-2"></div>
                    </div>

                    <input
                      type="tel"
                      placeholder="98765 43210"
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      maxLength={10}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-[6.5rem] pr-4 py-3 outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all text-gray-700 placeholder-gray-400"
                    />
                  </div>
                </div>
              </div>

              <CustomDropdown
                label="I Am A..."
                placeholder="Select Your Role"
                options={roleOptions}
                value={formData.role}
                onChange={(val) => setFormData({ ...formData, role: val })}
              />

              <div className="pt-4">
                <button
                  onClick={handleNext}
                  disabled={
                    !formData.fullName ||
                    formData.phone.length < 10 ||
                    !formData.role
                  }
                  className="w-full bg-[#1a2b6d] hover:bg-[#132052] disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-900/10 transition-all active:scale-[0.98]"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {/* --- STEP 2 CONTENT (Dynamic) --- */}
          {step === 2 && (
            <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-gray-700 flex items-center gap-1">
                    {isBroker
                      ? "Core Specialization"
                      : "Company / Business Name"}{" "}
                    <span className="text-red-500">*</span>
                  </label>

                  {isBroker ? (
                    <CustomDropdown
                      label=""
                      options={brokerSpecializationOptions}
                      value={formData.industry}
                      onChange={(val) =>
                        setFormData({ ...formData, industry: val })
                      }
                      placeholder="Select Specialization"
                    />
                  ) : (
                    <input
                      type="text"
                      placeholder="Enter your company name"
                      value={formData.companyName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          companyName: e.target.value,
                        })
                      }
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all text-gray-700 placeholder-gray-400"
                    />
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-gray-700 flex items-center gap-1">
                    {isBroker ? "Area of Operation" : "Core Industry/ Sector"}{" "}
                    <span className="text-red-500">*</span>
                  </label>

                  {isBroker ? (
                    <CustomDropdown
                      label=""
                      options={locationOptions}
                      value={formData.location}
                      onChange={(val) =>
                        setFormData({ ...formData, location: val })
                      }
                      placeholder="Select Area"
                    />
                  ) : (
                    <CustomDropdown
                      label=""
                      options={sellerIndustryOptions}
                      value={formData.industry}
                      onChange={(val) =>
                        setFormData({ ...formData, industry: val })
                      }
                      placeholder="Select Industry"
                    />
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {!isBroker && (
                  <CustomDropdown
                    label="Primary Business Location"
                    placeholder="Select your location"
                    options={locationOptions}
                    value={formData.location}
                    onChange={(val) =>
                      setFormData({ ...formData, location: val })
                    }
                  />
                )}

                <div className={isBroker ? "col-span-1" : ""}>
                  <CustomDropdown
                    label="Primary Goal"
                    placeholder="Select your primary goal"
                    options={isBroker ? brokerGoalOptions : businessGoalOptions}
                    value={formData.goal}
                    onChange={(val) => setFormData({ ...formData, goal: val })}
                  />
                </div>

                {isBroker && (
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-gray-700">
                      Digital Catalog/ LinkedIn
                    </label>
                    <input
                      type="text"
                      placeholder="Link to your work or products"
                      value={formData.catalogLink}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          catalogLink: e.target.value,
                        })
                      }
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all text-gray-700 placeholder-gray-400"
                    />
                  </div>
                )}
              </div>

              {!isBroker && (
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-gray-700">
                    Digital Catalog/ LinkedIn
                  </label>
                  <input
                    type="text"
                    placeholder="Link to your work or products"
                    value={formData.catalogLink}
                    onChange={(e) =>
                      setFormData({ ...formData, catalogLink: e.target.value })
                    }
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all text-gray-700 placeholder-gray-400"
                  />
                </div>
              )}

              {/* Submit Button (With Back Button Added) */}
              <div className="pt-4 flex flex-col md:flex-row gap-4">
                <button
                  onClick={() => setStep(1)}
                  className="w-full md:w-1/3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold py-4 rounded-xl transition-all"
                >
                  Back
                </button>
                <button
                  onClick={handleFinalSubmit}
                  disabled={!isStep2Valid() || loading}
                  className="w-full md:w-2/3 bg-[#1a2b6d] hover:bg-[#132052] disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-900/10 transition-transform active:scale-[0.98] flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    "Confirm My Spot in the Exchange"
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* --- STATS FOOTER --- */}
      <div className="md:hidden w-full max-w-sm">
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="pb-10"
          style={{
            // @ts-ignore
            "--swiper-pagination-color": "#1a2b6d",
            "--swiper-pagination-bottom": "0px",
          }}
        >
          {statsData.map((stat, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center justify-center text-center pb-4">
                <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center mb-3">
                  {stat.icon}
                </div>
                <h3 className="text-2xl font-extrabold text-[#1a2b6d]">
                  {stat.title}
                </h3>
                <p className="text-xs font-bold text-gray-600 tracking-wider uppercase">
                  {stat.subtitle}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="hidden md:flex w-full max-w-5xl justify-between items-center px-8">
        {statsData.map((stat, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="flex items-center justify-center">{stat.icon}</div>
            <div className="flex flex-col">
              <h3 className="text-2xl font-extrabold text-[#1a2b6d] leading-none mb-1">
                {stat.title}
              </h3>
              <p className="text-[10px] font-bold text-gray-500 tracking-wider uppercase">
                {stat.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RegistrationSection;