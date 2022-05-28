import { createSlice } from '@reduxjs/toolkit';

interface SearchState {
	name: string | undefined;
}

const initialState: SearchState = {
	name: '',
};

interface SetSearchName {
	payload: string | undefined;
}

export const searchSlice = createSlice({
	name: 'search',
	initialState: initialState,
	reducers: {
		setSearchName: (state, action: SetSearchName) => {
			state.name = action.payload;
		console.log(state.name)
		},
	},
});

export const { setSearchName } = searchSlice.actions;
