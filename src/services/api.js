import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamApi = createApi({
  reducerPath: "shazamApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-api7.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", `${import.meta.env.VITE_RAPID_API_KEY}`);

      return headers;
    },
  }),

  endpoints: (builder) => ({
    getTopSongs: builder.query({
      query: () => "charts/get-top-songs-in-world",
    }),
    getSongsByGenre: builder.query({
      query: (genre) => `charts/get-top-songs-in_world_by_genre?genre=${genre}`,
    }),
  }),
});

export const { useGetTopSongsQuery, useGetSongsByGenreQuery } = shazamApi;
