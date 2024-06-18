import { createSlice } from "@reduxjs/toolkit";

export interface ToggleEmojis {
  toggler: boolean;
}

const initialState: ToggleEmojis = {
  toggler: true,
};

export const EmojisSlice = createSlice({
  name: "emojis",
  initialState,
  reducers: {
    toggleEmojis: (state) => {
      state.toggler = !state.toggler;
    },
  },
});

export default EmojisSlice.reducer;

export const { toggleEmojis } = EmojisSlice.actions;
