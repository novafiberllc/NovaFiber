"use client";

import { X } from "lucide-react";
import { useEffect } from "react";
import { modalContent } from "@/lib/constants";

export default function ModalWindow({ isOpen, onClose, content }) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
      onClick={handleBackdropClick}
      role="presentation"
    >
      {/* Modal Container */}
      <div
        className="bg-white rounded-lg shadow-xl max-h-[90vh] overflow-y-auto w-full max-w-2xl transform transition-transform duration-300 scale-100 animate-scale-in"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <h2 id="modal-title" className="text-2xl font-bold text-gray-800">
            {content === "Pricing"
              ? modalContent.Pricing.title
              : modalContent.Materials.title}
          </h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close modal"
          >
            <X size={24} className="text-gray-600" />
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-8">
          <p>
            {content === "Pricing"
              ? modalContent.Pricing.description
              : modalContent.Materials.description}
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes scale-in {
          from {
            transform: scale(0.95);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
