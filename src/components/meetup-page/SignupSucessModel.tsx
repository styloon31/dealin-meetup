"use client";
import React from "react";
import { X, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface SignupSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  userName: string;
  whatsappLink?: string;
}

const SignupSuccessModal = ({
  isOpen,
  onClose,
  userName,
  whatsappLink = "https://chat.whatsapp.com/YOUR_GROUP_LINK", // Replace with actual link
}: SignupSuccessModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Backdrop Overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative bg-white w-full max-w-lg rounded-[2rem] shadow-2xl p-6 md:p-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* --- Header Section --- */}
        <div className="flex items-start gap-4 mb-8">
          {/* Green Check Icon */}
          <div className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shrink-0 shadow-sm">
            <Check className="w-8 h-8 text-white stroke-[3]" />
          </div>

          <div className="pt-1">
            <p className="text-xs font-bold text-gray-400 tracking-wider uppercase mb-1">
              YOU RE IN!
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Registration confirmed, <br />
              <span className="text-[#25D366]">{userName.split(" ")[0]}</span>
            </h2>
          </div>
        </div>

        {/* --- Info Box --- */}
        <div className="bg-[#F5F7F9] rounded-2xl p-5 mb-8 flex gap-4 items-start">
          <div className="w-6 h-6 shrink-0 rounded-full border border-gray-300 flex items-center justify-center mt-0.5 bg-white">
            <div className="w-2 h-2 bg-gray-300 rounded-full" />
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            <span className="font-bold text-gray-900">
              We've sent your access link.
            </span>{" "}
            Check your WhatsApp for the Google Meet link and event details.
          </p>
        </div>

        {/* --- Next Step Section --- */}
        <div className="mb-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            The Next Step
          </h3>

          <div className="border border-gray-100 rounded-2xl p-5 shadow-sm">
            <p className="text-sm text-gray-500 leading-relaxed mb-6">
              Join our private pre-meetup WhatsApp group to introduce your
              business and start the discussion with other members before we go
              live.
            </p>

            {/* Social Proof */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {/* Placeholder Avatars */}
                {[1, 2, 3].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden relative"
                  >
                    {/* Replace src with actual user images if available */}
                    <Image
                      src={`/images/meetup/success${i+1}.png`}
                      alt="User"
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <span className="text-xs md:text-sm font-bold text-green-600">
                500+{" "}
                <span className="font-medium text-gray-500">
                  professionals already inside
                </span>
              </span>
            </div>
          </div>
        </div>

        {/* --- CTA Button --- */}
        <Link
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-linear-to-b from-[#22C55E] to-[#15803D] hover:shadow-green-300 text-white font-bold py-4 rounded-xl shadow-lg shadow-green-200 flex items-center justify-center gap-2 transition-transform active:scale-[0.98]"
        >
          {/* WhatsApp Icon SVG */}
          <svg
            className="w-6 h-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          JOIN WHATSAPP GROUP
        </Link>
      </div>
    </div>
  );
};

export default SignupSuccessModal;
