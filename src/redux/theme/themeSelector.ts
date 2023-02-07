import { RootState } from 'redux/store';

export const selectTheme = (state: RootState) => state.theme.mode;
// export const selectCount = (state: RootState) => state.counter.value
