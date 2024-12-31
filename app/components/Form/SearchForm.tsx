"use client";

import { useSearchStore } from "@/context/AnilistProvider";
import { SearchFormProps } from "@/types/types";
import { Button, Input } from "keep-react";
import { useState } from "react";

export default function SearchForm({ onSearch }: SearchFormProps) {
  const { searchTerm, setSearchTerm, resetSearchTerm } = useSearchStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
    resetSearchTerm();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-4 flex justify-center align-center"
    >
      <Input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Buscar anime..."
        className="m-1 border-[#2e2e2e]  rounded-md w-screen h-8"
      />
      <Button
        type="submit"
        variant="outline"
        className="m-1 text-[#2e2e2e] border-[#2e2e2e] rounded-md h-8 focus:bg-[#4fc4cf] border-[#2e2e2e] active:text-white before:bg-white"
      >
        Search
      </Button>
    </form>
  );
}
