"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import NavBar from "./NavBar";

const questions = [
  {
    label: "What is your current level of education?",
    type: "select",
    options: ["High School", "Undergraduate", "Postgraduate"],
  },
  {
    label: "Which state do you reside in?",
    type: "select",
    options: [
      "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat",
      "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra",
      "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim",
      "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
      "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu",
      "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
    ],
  },
  {
    label: "What is your household's annual income?",
    type: "number",
  },
  {
    label: "What is your caste category?",
    type: "select",
    options: ["General", "OBC", "SC", "ST"],
  },
  {
    label: "What sector or occupation do you work in?",
    type: "select",
    options: ["Farmer", "Government Servant", "Private Employee", "Self-Employed", "Student", "Unemployed"],
  },
];

export default function Questionnaire() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<any>({});
  const [error, setError] = useState("");
  const router = useRouter();
  const totalSteps = questions.length;
  const current = questions[step];
  const progress = ((step + 1) / totalSteps) * 100;

  const handleNext = () => {
    if (!answers[current.label] && answers[current.label] !== 0) {
      setError("This field is required");
      return;
    }
    setError("");
    if (step < totalSteps - 1) setStep(step + 1);
    else router.push("/schemes");
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  return (
    
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#111827]  text-white">
      
      {/* Card */}
      <div className="w-full max-w-xl min-h-[460px] bg-gray-900 shadow-2xl rounded-2xl p-8 flex flex-col justify-between border border-gray-700 transition-transform hover:scale-[1.01] duration-300">
        
        {/* Progress Bar */}
        <div className="mb-4">
          <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4 }}
              className="h-3 bg-[#155dfc]"
            />
          </div>
          <p className="text-sm text-gray-400 mt-1 text-right font-medium">
            Step {step + 1} of {totalSteps}
          </p>
        </div>

        {/* Question Section */}
        <div className="flex-1 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <h2 className="text-2xl font-bold mb-6">{current.label}</h2>

              {current.type === "select" && (
                <select
                  className="w-full p-3 rounded-lg bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[#155dfc] transition text-white border-none shadow-sm"
                  value={answers[current.label] || ""}
                  onChange={(e) =>
                    setAnswers({ ...answers, [current.label]: e.target.value })
                  }
                >
                  <option value="" className="text-gray-400">Select an option</option>
                  {current.options?.map((opt) => (
                    <option key={opt} value={opt} className="text-white">
                      {opt}
                    </option>
                  ))}
                </select>
              )}

              {current.type === "number" && (
                <div className="flex flex-col items-center">
                  <input
                    type="range"
                    min="0"
                    max="2000000"
                    step="5000"
                    value={answers[current.label] || 0}
                    onChange={(e) =>
                      setAnswers({ ...answers, [current.label]: Number(e.target.value) })
                    }
                    className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-700 accent-[#155dfc]"
                  />
                  <span className="mt-3 text-lg font-semibold text-[#155dfc]">
                    ₹{(answers[current.label] || 0).toLocaleString("en-IN")}
                  </span>
                </div>
              )}

              {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2 flex items-center gap-2 rounded-lg bg-gray-700 text-white hover:bg-gray-600 transition disabled:opacity-50"
            onClick={handleBack}
            disabled={step === 0}
          >
            <ArrowLeft className="w-4 h-4" /> Back
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2 flex items-center gap-2 rounded-lg bg-[#155dfc] text-white hover:opacity-90 transition"
            onClick={handleNext}
          >
            {step === totalSteps - 1 ? "Get Results" : "Next"} <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}
