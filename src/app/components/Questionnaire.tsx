"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const questions = [
  { label: "What is your current level of education?", type: "select", options: ["High School", "Undergraduate", "Postgraduate"] },
  { label: "Which state do you reside in?", type: "select", options: ["Maharashtra", "Karnataka", "Kerala", "Delhi"] },
  { label: "What is your household's annual income?", type: "number" },
  { label: "What is your caste category?", type: "select", options: ["General", "OBC", "SC", "ST"] },
];

export default function Questionnaire() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<any>({});
  const router = useRouter();
  const totalSteps = questions.length;
  const current = questions[step];
  const progress = ((step + 1) / totalSteps) * 100;

  const handleNext = () => {
    if (!answers[current.label] || answers[current.label] === "") return;
    if (step < totalSteps - 1) setStep(step + 1);
    else router.push("/schemes");
  };

  const handleBack = () => { if (step > 0) setStep(step - 1); };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 px-4">
      {/* Card with fixed width & height */}
      <div className="w-full max-w-xl min-w-[420px] h-[400px] bg-white shadow-xl rounded-2xl p-8 relative text-gray-800 flex flex-col justify-between">

        {/* Progress Bar */}
        <div className="h-3 bg-gray-200 rounded-full mb-4 overflow-hidden">
          <div
            className="h-3 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Question Section - fixed height */}
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {current.label}
              </h2>

              {current.type === "select" && (
                <select
                  className="w-full p-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-400 transition text-gray-800 border-none"
                  value={answers[current.label] || ""}
                  onChange={(e) => setAnswers({ ...answers, [current.label]: e.target.value })}
                >
                  <option value="">Select an option</option>
                  {current.options?.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>
              )}

              {current.type === "number" && (
                <input
                  type="number"
                  className="w-full p-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-400 transition text-gray-800 border-none"
                  placeholder="Enter amount"
                  value={answers[current.label] || ""}
                  onChange={(e) => setAnswers({ ...answers, [current.label]: e.target.value })}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Buttons */}
        <div className="flex justify-between mt-4">
          <button
            className="px-5 py-2 rounded-lg bg-gray-200 text-gray-800 hover:bg-gray-300 transition disabled:opacity-50"
            onClick={handleBack}
            disabled={step === 0}
          >
            Back
          </button>
          <button
            className="px-5 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90 transition"
            onClick={handleNext}
          >
            {step === totalSteps - 1 ? "Get Results" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}
