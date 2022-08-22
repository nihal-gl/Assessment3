import { createSlice } from "@reduxjs/toolkit";


import { movieData } from "../FakeData";

export const userSlice = createSlice({
  name: "movie",
  initialState: { value: movieData },
  reducers: {
    addMovie: (state, action) => {
      state.value.push(action.payload);
    },

    deleteMovie: (state, action) => {
      state.value = state.value.filter((movie) => movie.id !== action.payload.id);
    },

    updateMovie: (state, action) => {
      state.value.map((movie) => {
        if (movie.id === action.payload.id) {
          movie.genres = action.payload.genres;
        }
      });
    },
  },
});

export const { addMovie, deleteMovie, updateMovie } = userSlice.actions;
export default userSlice.reducer;