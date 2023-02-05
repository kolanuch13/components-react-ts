"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.themeReducer = exports.toggleTheme = exports.themeSlice = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = {
    mode: 'light',
};
exports.themeSlice = (0, toolkit_1.createSlice)({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: state => {
            state.mode = state.mode === 'dark' ? 'light' : 'dark';
        },
    },
});
exports.toggleTheme = exports.themeSlice.actions.toggleTheme;
exports.themeReducer = exports.themeSlice.reducer;
//# sourceMappingURL=themeSlice.js.map