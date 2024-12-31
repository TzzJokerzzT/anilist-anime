import client from "@/lib/apollo-client";
import {
  GET_ANIME_DETAILS,
  GET_ANIME_QUERY,
  SEARCH_ANIME_QUERY,
} from "@/query/query";
import { Anime, AnimeQueryResponse } from "@/types/anilist";

export async function fetchAnimes(
  page: Number,
  perPage: Number,
): Promise<Anime[]> {
  const { data } = await client.query<AnimeQueryResponse>({
    query: GET_ANIME_QUERY,
    variables: {
      page,
      perPage,
    },
  });
  return data.Page.media;
}

export async function fetchAnimesByQuery(
  search: string = "",
  category: string = "ANIME",
  page: number = 1,
): Promise<Anime[]> {
  const { data } = await client.query<AnimeQueryResponse>({
    query: SEARCH_ANIME_QUERY,
    variables: {
      search,
      type: category,
      page,
      perPage: 50,
    },
  });
  return data.Page.media;
}

export async function fetchAnimeById(id: Number) {
  const { data } = await client.query({
    query: GET_ANIME_DETAILS,
    variables: { id },
  });

  return data.Media;
}
