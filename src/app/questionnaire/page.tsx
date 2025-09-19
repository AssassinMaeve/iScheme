"use client";

import { useState } from "react";

export default function Questionnaire() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    occupation: "",
    income: "",
    location: "",
    special: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("User Data:", formData);
    // Later: Show scheme recommendations based on this data
    nextStep();
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">Scheme Questionnaire</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {step === 1 && (
          <>
            <input
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
            <input
              name="age"
              type="number"
              placeholder="Age"
              value={formData.age}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </>
        )}

        {step === 2 && (
          <>
            <input
              name="occupation"
              placeholder="Occupation"
              value={formData.occupation}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
            <select
              name="income"
              value={formData.income}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            >
              <option value="">Select Income Range</option>
              <option value="<2L">Below ₹2L</option>
              <option value="2-5L">₹2L-5L</option>
              <option value="5-10L">₹5L-10L</option>
              <option value=">10L">Above ₹10L</option>
            </select>
          </>
        )}

        {step === 3 && (
          <>
            <input
              name="location"
              placeholder="Location"
              value={formData.location}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
            <select
              name="special"
              value={formData.special}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            >
              <option value="">Special Category?</option>
              <option value="senior">Senior Citizen</option>
              <option value="disability">Person with Disability</option>
              <option value="farmer">Farmer</option>
              <option value="none">None</option>
            </select>
          </>
        )}

        {step === 4 && (
          <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded">
            <h2 className="text-lg font-bold mb-2">Summary</h2>
            <pre className="text-sm">{JSON.stringify(formData, null, 2)}</pre>
            <p className="mt-2 text-green-600">Here we will suggest schemes based on your inputs!</p>
          </div>
        )}

        <div className="flex justify-between">
          {step > 1 && step < 4 && (
            <button
              type="button"
              onClick={prevStep}
              className="px-4 py-2 bg-gray-400 rounded text-white hover:bg-gray-500"
            >
              Previous
            </button>
          )}
          {step < 3 && (
            <button
              type="button"
              onClick={nextStep}
              className="px-4 py-2 bg-blue-600 rounded text-white hover:bg-blue-700"
            >
              Next
            </button>
          )}
          {step === 3 && (
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 rounded text-white hover:bg-green-700"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
