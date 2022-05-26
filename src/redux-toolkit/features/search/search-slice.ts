import { createSlice } from '@reduxjs/toolkit';

interface SearchState {
	name: string;
}

const initialState: SearchState = {
	name: '',
};

interface SetSearchName {
	payload: string;
}

export const searchSlice = createSlice({
	name: 'search',
	initialState: initialState,
	reducers: {
		setSearchName: (state, action: SetSearchName) => {
			state.name = action.payload;
		},
	},
});

export const { setSearchName } = searchSlice.actions;
