import {createSlice} from '@reduxjs/toolkit';

const globalState = createSlice({
  name: 'globalState',
  initialState: {
    loading: false,
    contactList: [],
  },

  reducers: {
    setLoading: (state, action) => {
      return {...state, loading: action.payload};
    },
    setContactList: (state, action) => {
      return {...state, contactList: action.payload};
    },
  },
});

export const {setLoading, setContactList} = globalState.actions;

export default globalState.reducer;
