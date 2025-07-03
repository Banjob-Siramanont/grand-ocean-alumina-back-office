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
    productOptionDatas: [
        { _id: '60367919', product_name: 'ตู้อเนกประสงค์ Ocean OCF-10170 100x53x120 ซม. สีขาว', price: 1500, vat: 105 },
        { _id: '60367920', product_name: 'ตู้อเนกประสงค์ Ocean OCF-10180 120x53x120 ซม. สีดำ', price: 1600, vat: 112 },
        { _id: '60367921', product_name: 'ตู้อเนกประสงค์ Ocean OCF-10190 150x53x120 ซม. สีน้ำตาล', price: 1700, vat: 119 },
        { _id: '60367922', product_name: 'ตู้อเนกประสงค์ Ocean OCF-10200 80x53x120 ซม. สีเทา', price: 1400, vat: 98 },
        { _id: '60367926', product_name: 'ตู้กับข้าว 2/4 Zagio CR2040-S 61.5x43x120.5 ซม. สีเงิน', price: 1800, vat: 126 },
        { _id: '60367927', product_name: 'ตู้กับข้าว 3/4 Zagio CR3040-S 91.5x43x120.5 ซม. สีขาว', price: 1900, vat: 133 },
        { _id: '60367928', product_name: 'ตู้กับข้าว 4/4 Zagio CR4040-S 122x43x120.5 ซม. สีดำ', price: 2000, vat: 140 },
        { _id: '60367929', product_name: 'ตู้กับข้าว 2/3 Zagio CR2030-S 61.5x43x90.5 ซม. สีเงิน', price: 1700, vat: 119 },
        { _id: '60367932', product_name: 'ตู้วางเตาแก๊ส Zagio CR120-S 122x45.5x85.5 ซม. สีเงิน', price: 1600, vat: 112 },
        { _id: '60367933', product_name: 'ตู้วางเตาแก๊ส Zagio CR100-S 102x45.5x85.5 ซม. สีขาว', price: 1500, vat: 105 },
        { _id: '60367934', product_name: 'ตู้วางเตาแก๊ส Zagio CR140-S 142x45.5x85.5 ซม. สีดำ', price: 1700, vat: 119 },
        { _id: '60367935', product_name: 'ตู้วางเตาแก๊ส Zagio CR80-S 82x45.5x85.5 ซม. สีเทา', price: 1400, vat: 98 },
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
