"use client";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SchemeFeature {
  education_level: string;
  age_group: string;
  occupation: string;
  state: string;
  income_level: string;
  caste_category: string;
}

export interface Scheme {
  title: string;
  description: string;
  link: string;
  category: string;
  features: SchemeFeature;
}

interface SchemeViewerProps {
  schemes: Scheme[];
}

export const SchemeViewer: React.FC<SchemeViewerProps> = ({ schemes }) => {
  const [search, setSearch] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState<string | undefined>();
  const [selectedState, setSelectedState] = React.useState<string | undefined>();
  const [page, setPage] = React.useState(1);

  const itemsPerPage = 6;

  // Categories
  const categories = Array.from(
    new Set(
      schemes.flatMap((s) => s.category.split(",").map((c) => c.trim()))
    )
  ).filter(Boolean);

  // States
  const states = Array.from(
    new Set(
      schemes.flatMap((s) => s.features.state.split(",").map((st) => st.trim()))
    )
  ).filter(Boolean);

  // Filtering
  const filteredSchemes = schemes.filter((s) => {
    const matchesSearch =
      s.title.toLowerCase().includes(search.toLowerCase()) ||
      s.description.toLowerCase().includes(search.toLowerCase());

    const matchesCategory = selectedCategory
      ? s.category.split(",").map((c) => c.trim()).includes(selectedCategory)
      : true;

    const matchesState = selectedState
      ? s.features.state.split(",").map((st) => st.trim()).includes(selectedState)
      : true;

    return matchesSearch && matchesCategory && matchesState;
  });

  // Pagination
  const totalPages = Math.ceil(filteredSchemes.length / itemsPerPage);
  const startIndex = (page - 1) * itemsPerPage;
  const currentSchemes = filteredSchemes.slice(startIndex, startIndex + itemsPerPage);

  const resetFilters = () => {
    setSearch("");
    setSelectedCategory(undefined);
    setSelectedState(undefined);
    setPage(1);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <Input
          placeholder="Search schemes..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          className="flex-1"
        />

        {/* Category Select */}
        <Select value={selectedCategory} onValueChange={(val) => { setSelectedCategory(val); setPage(1); }}>
          <SelectTrigger>
            <SelectValue placeholder="Select Category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((cat) => (
              <SelectItem key={cat} value={cat}>
                {cat}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {/* State Select */}
        <Select value={selectedState} onValueChange={(val) => { setSelectedState(val); setPage(1); }}>
          <SelectTrigger>
            <SelectValue placeholder="Select State" />
          </SelectTrigger>
          <SelectContent>
            {states.map((st) => (
              <SelectItem key={st} value={st}>
                {st}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button onClick={resetFilters}>Reset Filters</Button>
      </div>

      {/* Schemes List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentSchemes.length > 0 ? (
          currentSchemes.map((scheme) => (
            <Card key={scheme.title}>
              <CardContent className="space-y-2">
                <h2 className="text-lg font-semibold">{scheme.title}</h2>
                <p className="text-sm text-gray-700">{scheme.description}</p>
                <div className="flex flex-wrap gap-2 text-xs text-gray-600">
                  {scheme.category.split(",").map((cat) => (
                    <span key={cat} className="bg-gray-100 px-2 py-1 rounded">
                      {cat.trim()}
                    </span>
                  ))}
                  {scheme.features.state.split(",").map((st) => (
                    <span key={st} className="bg-gray-100 px-2 py-1 rounded">
                      {st.trim()}
                    </span>
                  ))}
                  <span className="bg-gray-100 px-2 py-1 rounded">{scheme.features.occupation}</span>
                  <span className="bg-gray-100 px-2 py-1 rounded">{scheme.features.income_level}</span>
                </div>
                <a
                  href={scheme.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn("inline-block mt-2 text-blue-600 hover:underline")}
                >
                  View Scheme
                </a>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">No schemes found.</p>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2">
          <Button
            disabled={page === 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
          >
            Previous
          </Button>
          <span className="text-sm">
            Page {page} of {totalPages}
          </span>
          <Button
            disabled={page === totalPages}
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
};
