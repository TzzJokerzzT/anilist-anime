import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://graphql.anilist.co", // Endpoint de AniList
  cache: new InMemoryCache(),
});

export default client;
