import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Payload, SidebarData } from '../../../types/store/sidebar/sidebarSliceTypes';


const setSessionStorage = (state: SidebarData) => sessionStorage.setItem('sidebarDataState', JSON.stringify(state));

const storedState = sessionStorage.getItem('sidebarDataState');
const initialState: SidebarData = storedState ? JSON.parse(storedState) : {
    isSidebarOpen: false,
    isClickingHamburger: false,
};

const sidebarDataStateValue = createSlice({
    name: 'sidebarDataStateValue',
    initialState: initialState,
    reducers: {
        setSidebarDatas: <Key extends keyof SidebarData>(state: SidebarData, action: PayloadAction<Payload<Key>>) => {
            const { value, variableName } = action.payload;

            state[variableName] = value;
            setSessionStorage(state);
        },
    }
});

export const { setSidebarDatas } = sidebarDataStateValue.actions;
export default sidebarDataStateValue.reducer
