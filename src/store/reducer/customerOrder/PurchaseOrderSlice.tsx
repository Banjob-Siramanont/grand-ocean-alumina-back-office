import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Payload, ProductData, PurchaseOrderData, SpecialProductData } from '../../../types/store/customerOrder/purchaseOrder/purchaseOrderSliceTypes';
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
    specialProductDatas: [
        {
            id: 1,
            product_id: '',
            amount: '',
            addedPrice: '',
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
            action: PayloadAction<{ index: number; updateKey: keyof ProductData; value: string }>
        ) => {
            const { index, updateKey, value } = action.payload;
            switch (updateKey) {
                case 'product_id': {
                    state.productDatas[index].product_id = value;
                    break;
                }
                case 'amount': {
                    state.productDatas[index].amount = value;
                    break;
                }
                case 'note': {
                    state.productDatas[index].note = value;
                    break;
                }
            }
            setSessionStorage(state);
        },
        setSpecialProductDatas: (
            state: PurchaseOrderData,
            action: PayloadAction<{ index: number; updateKey: keyof SpecialProductData; value: string }>
        ) => {
            const { index, updateKey, value } = action.payload;
            switch (updateKey) {
                case 'product_id': {
                    state.specialProductDatas[index].product_id = value;
                    break;
                }
                case 'amount': {
                    state.specialProductDatas[index].amount = value;
                    break;
                }
                case 'addedPrice': {
                    state.specialProductDatas[index].addedPrice = value;
                    break;
                }
                case 'note': {
                    state.specialProductDatas[index].note = value;
                    break;
                }
            }
            setSessionStorage(state);
        },
        addProductData: (state: PurchaseOrderData, action: PayloadAction<{ productType?: 'normal' | 'special' }>) => {
            const { productType } = action.payload;
            let newProduct: ProductData | SpecialProductData;
            if (productType === 'special') {
                newProduct = {
                    id: state.specialProductDatas.length + 1,
                    product_id: '',
                    amount: '',
                    addedPrice: '',
                    note: '',
                };
                state.specialProductDatas.push(newProduct);
            } else {
                newProduct = {
                    id: state.productDatas.length + 1,
                    product_id: '',
                    amount: '',
                    note: '',
                };
                state.productDatas.push(newProduct);
            }

            setSessionStorage(state);
        },
        deleteProductData: (state: PurchaseOrderData, action: PayloadAction<{ productType?: 'normal' | 'special', index: number }>) => {
            const { productType, index } = action.payload;

            if (productType === 'special') state.specialProductDatas = deleteAndReassignId(state.specialProductDatas, index);
            else state.productDatas = deleteAndReassignId(state.productDatas, index);
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
            state.specialProductDatas = [
                {
                    id: 1,
                    product_id: '',
                    amount: '',
                    addedPrice: '',
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
    setSpecialProductDatas,
    addProductData,
    deleteProductData,
    resetPurchaseOrderData
} = purchaseOrderDataStateValue.actions;
export default purchaseOrderDataStateValue.reducer;
