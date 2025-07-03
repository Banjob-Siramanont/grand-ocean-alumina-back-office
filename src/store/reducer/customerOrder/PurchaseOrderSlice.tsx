import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Payload, ProductData, PurchaseOrderData } from '../../../types/store/customerOrder/purchaseOrder/purchaseOrderSliceTypes';
import { deleteAndReassignId } from '../../../helper/utils/common';

const setSessionStorage = (state: PurchaseOrderData) => sessionStorage.setItem('purchaseOrderDataState', JSON.stringify(state));

const storedState = sessionStorage.getItem('purchaseOrderDataState');
const initialState: PurchaseOrderData = storedState ? JSON.parse(storedState) : {
    selectedCustomerCompany: '',
    poNumber: '',
    orderDate: '',
    expiredDate: '',
    shippingAddress: '',
    productDatas: [
        {
            id: 1,
            product_id: '',
            amount: '',
            note: '',
        },
        {
            id: 2,
            product_id: '',
            amount: '',
            note: '',
        },
        {
            id: 3,
            product_id: '',
            amount: '',
            note: '',
        },
        {
            id: 4,
            product_id: '',
            amount: '',
            note: '',
        },
    ],
};

const purchaseOrderDataStateValue = createSlice({
    name: 'purchaseOrderDataStateValue',
    initialState: initialState,
    reducers: {
        setPurchaseOrderData: <Key extends keyof PurchaseOrderData>(state: PurchaseOrderData, action: PayloadAction<Payload<Key>>) => {
            const { value, variableName } = action.payload;

            state[variableName] = value;
            setSessionStorage(state);
        },
        setProductDatas: (
            state: PurchaseOrderData,
            action: PayloadAction<{ index: number; updateKey: keyof ProductData; value: number | string }>
        ) => {
            const { index, updateKey, value } = action.payload;
            switch (updateKey) {
                case 'product_id': {
                    state.productDatas[index].product_id = value as string;
                    break;
                }
                case 'amount': {
                    state.productDatas[index].amount = value as string;
                    break;
                }
                case 'note': {
                    state.productDatas[index].note = value as string;
                    break;
                }
            }
            setSessionStorage(state);
        },
        addProductData: (state: PurchaseOrderData) => {
            const newProduct = {
                id: state.productDatas.length + 1,
                product_id: '',
                amount: '',
                note: '',
            };
            state.productDatas.push(newProduct);
            setSessionStorage(state);
        },
        deleteProductData: (state: PurchaseOrderData, action: PayloadAction<number>) => {
            if (state.productDatas.length <= 1) return;

            const indexToDelete = action.payload;
            state.productDatas = deleteAndReassignId(state.productDatas, indexToDelete);
            setSessionStorage(state);
        },
        resetPurchaseOrderData: (state: PurchaseOrderData) => {
            state.selectedCustomerCompany = '';
            state.poNumber = '';
            state.orderDate = '';
            state.expiredDate = '';
            state.shippingAddress = '';
            state.productDatas = [
                {
                    id: 1,
                    product_id: '',
                    amount: '',
                    note: '',
                },
                {
                    id: 2,
                    product_id: '',
                    amount: '',
                    note: '',
                },
                {
                    id: 3,
                    product_id: '',
                    amount: '',
                    note: '',
                },
                {
                    id: 4,
                    product_id: '',
                    amount: '',
                    note: '',
                },
            ];
            setSessionStorage(state);
        },
    },
});

export const {
    setPurchaseOrderData,
    setProductDatas,
    addProductData,
    deleteProductData,
    resetPurchaseOrderData
} = purchaseOrderDataStateValue.actions;
export default purchaseOrderDataStateValue.reducer;
