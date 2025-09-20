"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Scheme, SchemeViewer } from "../components/Scheme";
import allSchemesData from "../../data/all_schemes.json";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";


export default function SchemesPage() {
  const searchParams = useSearchParams();
  const [eligibleSchemes, setEligibleSchemes] = useState<Scheme[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const answersParam = searchParams.get("answers");
    if (answersParam) {
      try {
        const answers = JSON.parse(decodeURIComponent(answersParam));
        const filtered = (allSchemesData as Scheme[]).filter((scheme) =>
          isEligible(scheme, answers)
        );
        setEligibleSchemes(filtered);
      } catch (error) {
        console.error("Failed to parse answers from URL:", error);
        // Fallback to showing all schemes on error
        setEligibleSchemes(allSchemesData as Scheme[]);
      }
    } else {
      // If no answers, display all schemes as a fallback
      setEligibleSchemes(allSchemesData as Scheme[]);
    }
    setLoading(false);
  }, [searchParams]);

  const isEligible = (scheme: Scheme, answers: any): boolean => {
    const userAnswers = {
        education: answers["What is your current level of education?"]?.trim(),
        state: answers["Which state do you reside in?"]?.trim(),
        age: answers["What is your age?"],
        income: answers["What is your household's annual income?"],
        caste: answers["What is your caste category?"]?.trim(),
        occupation: answers["What sector or occupation do you work in?"]?.trim(),
    };

    // 1. Check Age Eligibility
    const ageRange = scheme.features.age_group.split('-').map(Number);
    const minAge = ageRange[0];
    const maxAge = ageRange[1];
    if (userAnswers.age < minAge || userAnswers.age > maxAge) {
        return false;
    }

    // 2. Check Income Eligibility
    if (scheme.features.income_level && scheme.features.income_level !== "None") {
        const maxIncomeMatch = scheme.features.income_level.match(/Below (\d+) Lakh\/year/);
        if (maxIncomeMatch) {
            const maxIncome = Number(maxIncomeMatch[1]) * 100000;
            if (userAnswers.income > maxIncome) {
                return false;
            }
        }
    }

    // 3. Check State Eligibility
    const schemeStates = scheme.features.state.split(',').map(s => s.trim());
    if (!schemeStates.includes("All India") && !schemeStates.includes(userAnswers.state)) {
        return false;
    }

    // 4. Check Caste Eligibility
    const schemeCaste = scheme.features.caste_category.split(',').map(c => c.trim());
    if (!schemeCaste.includes("All") && !schemeCaste.includes(userAnswers.caste)) {
        return false;
    }

    // 5. Check Occupation Eligibility
    const schemeOccupations = scheme.features.occupation.split(',').map(o => o.trim());
    if (!schemeOccupations.includes("All") && !schemeOccupations.includes(userAnswers.occupation)) {
        return false;
    }

    return true;
  };

  if (loading) {
    return (
      <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#111827] text-white">
        <h1 className="text-3xl font-bold">Loading Schemes...</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full flex flex-col bg-[#111827] text-white">
      <Navbar />
      <main className="flex-grow container mx-auto p-4 md:p-6">
        <h1 className="text-3xl font-bold text-center mt-10 mb-6">Eligible Schemes</h1>
        {eligibleSchemes.length > 0 ? (
          <SchemeViewer schemes={eligibleSchemes} />
        ) : (
          <p className="text-center text-gray-400">
            No schemes found based on your answers.
          </p>
        )}
      </main>
      <Footer />
    </div>
  );
}