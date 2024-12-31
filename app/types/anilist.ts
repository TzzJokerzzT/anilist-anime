export interface Anime {
  id: number;
  title: {
    romaji: string;
    english: string | null;
  };
  description: string;
  coverImage: {
    large: string;
    medium: string;
  };
  status: string;
  episodes: number;
  type: string;
  characters: CharacterConnection;
}

export interface AnimeQueryResponse {
  Page: {
    media: Anime[];
  };
}

export interface SearchState {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  resetSearchTerm: () => void;
}

export interface AnimeStore {
  popularAnimes: Anime[];
  searchResults: Anime[];
  animeDetails: Anime | null;
  allAnimes: Anime[];
  favorites: Anime[];
  addToFavorites: (anime: Anime) => void;
  removeFromFavorites: (animeId: number) => void;
  loading: boolean;
  category: string;
  page: number;
  perPage: number;
  currentPage: number;
  totalPages: number;
  animeId: number;
  fetchPopularAnimes: () => Promise<void>;
  fetchAnimeById: (id: number) => Promise<void>;
  searchAnimes: (query: string, category: string) => Promise<void>;
  setCategory: (newCategory: string) => void;
  setPage: (page: number) => void;
  setID: (id: number) => void;
}

export interface Character {
  id: number;
  name: {
    full: string;
  };
  image: {
    large: string;
  };
}

export interface CharacterEdge {
  node: Character;
}

export interface CharacterConnection {
  edges: CharacterEdge[];
}
