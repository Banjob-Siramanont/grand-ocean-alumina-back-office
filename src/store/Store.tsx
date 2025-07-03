import { configureStore } from '@reduxjs/toolkit';
import sidebarDataStateValue from './reducer/sidebarSlice/SidebarSlice';
import purchaseOrderDataStateValue from './reducer/customerOrder/PurchaseOrderSlice';

export const store = configureStore({
    reducer: {
        sidebarDataStateValue,
        purchaseOrderDataStateValue
    },
});

// Define RootState dynamically
export type RootState = ReturnType<typeof store.getState>; // type for state in useSelector
export type AppDispatch = typeof store.dispatch; // type for useDispatch
