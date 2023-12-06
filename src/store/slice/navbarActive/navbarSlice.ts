import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BoolState {
  value: boolean;
}

const initialState: BoolState = {
  value: false,
};

const boolSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    toggle: (state) => {
      state.value = !state.value;
    },
    setTrue: (state) => {
      state.value = true;
    },
    setFalse: (state) => {
      state.value = false;
    },
  },
});

export const { toggle, setTrue, setFalse } = boolSlice.actions;
export default boolSlice.reducer;
