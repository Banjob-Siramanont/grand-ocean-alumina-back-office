import { configureStore } from '@reduxjs/toolkit';
import vehicleBrandDataStateValue from './reducer/vehicleBrandSlice/VehicleBrandSlice';
import sidebarDataStateValue from './reducer/sidebarSlice/SidebarSlice';

export const store = configureStore({
    reducer: {
        vehicleBrandDataStateValue,
        sidebarDataStateValue
    },
});

// Define RootState dynamically
export type RootState = ReturnType<typeof store.getState>; // type for state in useSelector
export type AppDispatch = typeof store.dispatch; // type for useDispatch
