import { Anime } from "./anilist";

export interface SearchFormProps {
  onSearch: (query: string) => void;
}

export interface AnimeListProps {
  animes: Anime[];
}
