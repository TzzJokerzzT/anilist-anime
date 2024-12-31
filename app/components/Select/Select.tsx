import { useAnimeStore } from "@/context/AnilistProvider";
import {
  Select,
  SelectAction,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectValue,
} from "keep-react";

export const SelectComponent = () => {
  const { category, setCategory } = useAnimeStore();

  const handleChange = (value: string) => {
    setCategory(value);
  };
  return (
    <Select value={category} onValueChange={handleChange}>
      <SelectAction className="w-[7rem] h-[2rem]">
        <SelectValue placeholder="Select team" />
      </SelectAction>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Select category</SelectLabel>
          <SelectItem value="ANIME">ANIME</SelectItem>
          <SelectItem value="MANGA">MANGA</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
