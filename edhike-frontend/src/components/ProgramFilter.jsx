// ProgramFilters.jsx — FINAL MASTERPIECE
import React, { useState } from "react";
import {
  FunnelIcon,
  ChevronDownIcon,
  AdjustmentsHorizontalIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { FadeInUp } from "./motion";

export default function ProgramFilters() {
  const [openMobile, setOpenMobile] = useState(false);
  const [filters, setFilters] = useState({
    mode: "",
    duration: "",
    fees: "",
    university: "",
    category: "",
  });

  const handleChange = (key, value) => {
    setFilters({ ...filters, [key]: value });
  };

  const resetFilters = () => {
    setFilters({
      mode: "",
      duration: "",
      fees: "",
      university: "",
      category: "",
    });
  };

  return (
    <section className="py-16 bg-white border-t border-gray-100" id="filters">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <FadeInUp>
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-4xl font-black text-black">
                Find Your Perfect Program
              </h2>
              <p className="mt-2 text-lg text-gray-600">
                Filter by mode, duration, fees, university, and category
              </p>
            </div>

            {/* Mobile Filter Button */}
            <button
              onClick={() => setOpenMobile(true)}
              className="flex md:hidden items-center gap-3 px-5 py-3 bg-black text-white rounded-full font-bold text-sm shadow-lg hover:bg-gray-800 transition"
            >
              <AdjustmentsHorizontalIcon className="w-5 h-5" />
              Filters
            </button>
          </div>
        </FadeInUp>

        {/* Desktop Filters — Pill Style */}
        <FadeInUp delay={0.2}>
          <div className="hidden md:flex flex-wrap gap-4">
            {/* Mode */}
            <div className="relative">
              <select
                value={filters.mode}
                onChange={(e) => handleChange("mode", e.target.value)}
                className={`appearance-none bg-white border-2 ${filters.mode ? "border-blue-600" : "border-gray-300"} rounded-full px-6 py-4 pr-12 text-base font-medium text-black focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all cursor-pointer hover:border-blue-500`}
              >
                <option value="">Mode</option>
                <option>Online</option>
                <option>Hybrid</option>
                <option>Distance</option>
              </select>
              <ChevronDownIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
            </div>

            {/* Duration */}
            <div className="relative">
              <select
                value={filters.duration}
                onChange={(e) => handleChange("duration", e.target.value)}
                className={`appearance-none bg-white border-2 ${filters.duration ? "border-blue-600" : "border-gray-300"} rounded-full px-6 py-4 pr-12 text-base font-medium text-black focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all cursor-pointer hover:border-blue-500`}
              >
                <option value="">Duration</option>
                <option>3–6 Months</option>
                <option>6–12 Months</option>
                <option>1–2 Years</option>
              </select>
              <ChevronDownIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
            </div>

            {/* Fees */}
            <div className="relative">
              <select
                value={filters.fees}
                onChange={(e) => handleChange("fees", e.target.value)}
                className={`appearance-none bg-white border-2 ${filters.fees ? "border-red-600" : "border-gray-300"} rounded-full px-6 py-4 pr-12 text-base font-medium text-black focus:outline-none focus:ring-4 focus:ring-red-100 transition-all cursor-pointer hover:border-red-500`}
              >
                <option value="">Fees</option>
                <option>Under ₹50,000</option>
                <option>₹50,000 – ₹1,00,000</option>
                <option>Above ₹1,00,000</option>
              </select>
              <ChevronDownIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
            </div>

            {/* University */}
            <div className="relative">
              <select
                value={filters.university}
                onChange={(e) => handleChange("university", e.target.value)}
                className={`appearance-none bg-white border-2 ${filters.university ? "border-blue-600" : "border-gray-300"} rounded-full px-6 py-4 pr-12 text-base font-medium text-black focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all cursor-pointer hover:border-blue-500`}
              >
                <option value="">University</option>
                <option>NMIMS</option>
                <option>Amity</option>
                <option>Jain</option>
                <option>Chandigarh University</option>
                <option>Manipal</option>
              </select>
              <ChevronDownIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
            </div>

            {/* Category */}
            <div className="relative">
              <select
                value={filters.category}
                onChange={(e) => handleChange("category", e.target.value)}
                className={`appearance-none bg-white border-2 ${filters.category ? "border-red-600" : "border-gray-300"} rounded-full px-6 py-4 pr-12 text-base font-medium text-black focus:outline-none focus:ring-4 focus:ring-red-100 transition-all cursor-pointer hover:border-red-500`}
              >
                <option value="">Category</option>
                <option>MBA</option>
                <option>Data Science</option>
                <option>AI / ML</option>
                <option>Digital Marketing</option>
              </select>
              <ChevronDownIcon className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />
            </div>

            {/* Clear Button */}
            {(filters.mode || filters.duration || filters.fees || filters.university || filters.category) && (
              <button
                onClick={resetFilters}
                className="px-6 py-4 bg-gray-100 text-black font-bold rounded-full hover:bg-gray-200 transition"
              >
                Clear All
              </button>
            )}
          </div>
        </FadeInUp>

        {/* Mobile Filters — Slide In Panel */}
        {openMobile && (
          <div className="fixed inset-0 z-50 flex items-end">
            <div className="absolute inset-0 bg-black/50" onClick={() => setOpenMobile(false)} />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full bg-white rounded-t-3xl shadow-2xl p-6 max-h-[80vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-black text-black">Filters</h3>
                <button onClick={() => setOpenMobile(false)}>
                  <XMarkIcon className="w-7 h-7 text-gray-600" />
                </button>
              </div>

              <div className="space-y-5">
                {["mode", "duration", "fees", "university", "category"].map((key) => (
                  <div key={key}>
                    <label className="text-sm font-bold text-gray-700 capitalize">{key}</label>
                    <div className="mt-2">
                      <select
                        value={filters[key]}
                        onChange={(e) => handleChange(key, e.target.value)}
                        className="w-full px-5 py-4 border-2 border-gray-300 rounded-2xl text-base font-medium focus:border-blue-600 focus:outline-none"
                      >
                        <option value="">Any {key}</option>
                        {/* Add options here */}
                      </select>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex gap-4">
                <button
                  onClick={resetFilters}
                  className="flex-1 py-4 bg-gray-100 text-black font-bold rounded-2xl"
                >
                  Clear All
                </button>
                <button
                  onClick={() => setOpenMobile(false)}
                  className="flex-1 py-4 bg-gradient-to-r from-blue-600 to-red-600 text-white font-bold rounded-2xl"
                >
                  Apply Filters
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}