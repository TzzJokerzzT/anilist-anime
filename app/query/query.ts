import { gql } from "@apollo/client";

export const GET_ANIME_QUERY = gql`
  query ($page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      media(type: ANIME, sort: POPULARITY_DESC) {
        id
        title {
          romaji
          english
        }
        description
        coverImage {
          extraLarge
          large
          medium
        }
        status
        type
        format
        episodes
        season
        rankings {
          rank
          type
        }
        characters {
          edges {
            node {
              id
              name {
                full
              }
              image {
                large
              }
            }
          }
        }
      }
    }
  }
`;

export const SEARCH_ANIME_QUERY = gql`
  query ($search: String, $type: MediaType) {
    Page(page: 1, perPage: 10) {
      media(type: $type, search: $search) {
        id
        title {
          romaji
          english
        }
        description
        coverImage {
          extraLarge
          large
          medium
        }
        status
        type
        format
        episodes
        season
        rankings {
          rank
          type
        }
        characters {
          edges {
            node {
              id
              name {
                full
              }
              image {
                large
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_ANIME_DETAILS = gql`
  query ($id: Int!) {
    Media(id: $id, type: ANIME) {
      id
      title {
        romaji
        english
      }
      description
      coverImage {
        extraLarge
        large
        medium
      }
      status
      type
      format
      episodes
      season
      rankings {
        rank
        type
      }
      characters {
        edges {
          node {
            id
            name {
              full
            }
            image {
              large
            }
          }
        }
      }
    }
  }
`;
