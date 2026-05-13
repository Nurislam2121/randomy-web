import { createSlice } from "@reduxjs/toolkit";

interface ThemeState {
  mode: "light" | "dark";
}

const initialState: ThemeState = {
    mode: (localStorage.getItem("theme") as "light" | "dark") || "dark",
}

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light"
            localStorage.setItem("theme", state.mode)
            document.documentElement.setAttribute("data-theme", state.mode)
        }
    }
})

export const {toggleTheme} = themeSlice.actions
export default themeSlice.reducer