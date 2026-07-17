import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  student: null,
  skills: [],
  hobbies: [],
  darkMode: false,
  background: "",
};

const profileSlice = createSlice({
  name: "profile",

  initialState,

  reducers: {
    setStudent(state, action) {
      state.student = action.payload;
    },

    setSkills(state, action) {
      state.skills = action.payload;
    },

    setHobbies(state, action) {
      state.hobbies = action.payload;
    },

    toggleDarkMode(state) {
      state.darkMode = !state.darkMode;
    },
    setBackground: (state, action) => {
  state.background = action.payload;
},
  },
});

export const {
  setStudent,
  setSkills,
  setHobbies,
  toggleDarkMode,
  setBackground,
} = profileSlice.actions;

export default profileSlice.reducer;