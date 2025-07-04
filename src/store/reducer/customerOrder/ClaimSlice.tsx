import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { deleteAndReassignId } from '../../../helper/utils/common';
import type { ClaimData, Payload, RepairProductData, ReplaceProductData, ReturnProductData } from '../../../types/store/customerOrder/claimSliceTypes';

const setSessionStorage = (state: ClaimData) => sessionStorage.setItem('claimDataState', JSON.stringify(state));

const storedState = sessionStorage.getItem('claimDataState');
const initialState: ClaimData = storedState ? JSON.parse(storedState) : {
    selectedCustomerCompany: '',
    poNumber: '',
    invoiceNumber: '',
    shippingDate: '',
    shippingAddress: '',
    repairProductDatas: [{ id: 1, product_id: '', quantity: '', note: '' }],
    returnProductDatas: [{ id: 1, product_id: '', quantity: '', note: '' }],
    replaceProductDatas: [{ id: 1, product_id: '', quantity: '', note: '' }],
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
    customerCompanyOptionDatas: [
        { _id: '01', company_name: 'ไทวัสดุ' },
        { _id: '02', company_name: 'อมรภัณฑ์' },
        { _id: '03', company_name: 'Home Pro' },
    ],
};

const claimDataStateValue = createSlice({
    name: 'claimDataStateValue',
    initialState: initialState,
    reducers: {
        setClaimData: <Key extends keyof ClaimData>(state: ClaimData, action: PayloadAction<Payload<Key>>) => {
            const { value, variableName } = action.payload;

            state[variableName] = value;
            setSessionStorage(state);
        },
        setRepairProductDatas: (
            state: ClaimData,
            action: PayloadAction<{ index: number; updateKey: keyof RepairProductData; value: string }>
        ) => {
            const { index, updateKey, value } = action.payload;
            switch (updateKey) {
                case 'product_id': {
                    state.repairProductDatas[index].product_id = value;
                    break;
                }
                case 'quantity': {
                    state.repairProductDatas[index].quantity = value;
                    break;
                }
                case 'note': {
                    state.repairProductDatas[index].note = value;
                    break;
                }
            }
            setSessionStorage(state);
        },
        setReturnProductDatas: (
            state: ClaimData,
            action: PayloadAction<{ index: number; updateKey: keyof ReturnProductData; value: string }>
        ) => {
            const { index, updateKey, value } = action.payload;
            switch (updateKey) {
                case 'product_id': {
                    state.returnProductDatas[index].product_id = value;
                    break;
                }
                case 'quantity': {
                    state.returnProductDatas[index].quantity = value;
                    break;
                }
                case 'note': {
                    state.returnProductDatas[index].note = value;
                    break;
                }
            }
            setSessionStorage(state);
        },
        setReplaceProductDatas: (
            state: ClaimData,
            action: PayloadAction<{ index: number; updateKey: keyof ReplaceProductData; value: string }>
        ) => {
            const { index, updateKey, value } = action.payload;
            switch (updateKey) {
                case 'product_id': {
                    state.replaceProductDatas[index].product_id = value;
                    break;
                }
                case 'quantity': {
                    state.replaceProductDatas[index].quantity = value;
                    break;
                }
                case 'note': {
                    state.replaceProductDatas[index].note = value;
                    break;
                }
            }
            setSessionStorage(state);
        },
        addProductData: (state: ClaimData, action: PayloadAction<{ productType: 'repair' | 'return' | 'replace' }>) => {
            const { productType } = action.payload;
            let newProduct: RepairProductData | ReturnProductData | ReplaceProductData;
            switch (productType) {
                case 'repair':
                    newProduct = {
                        id: state.repairProductDatas.length + 1,
                        product_id: '',
                        quantity: '',
                        note: '',
                    };
                    state.repairProductDatas.push(newProduct);
                    break;
                case 'return':
                    newProduct = {
                        id: state.returnProductDatas.length + 1,
                        product_id: '',
                        quantity: '',
                        note: '',
                    };
                    state.returnProductDatas.push(newProduct);
                    break;
                case 'replace':
                    newProduct = {
                        id: state.replaceProductDatas.length + 1,
                        product_id: '',
                        quantity: '',
                        note: '',
                    };
                    state.replaceProductDatas.push(newProduct);
                    break;
            }

            setSessionStorage(state);
        },
        deleteProductData: (state: ClaimData, action: PayloadAction<{ productType: 'repair' | 'return' | 'replace', index: number }>) => {
            const { productType, index } = action.payload;

            switch (productType) {
                case 'repair':
                    if (state.repairProductDatas.length <= 0) return;
                    state.repairProductDatas = deleteAndReassignId(state.repairProductDatas, index);
                    break;
                case 'return':
                    if (state.returnProductDatas.length <= 0) return;
                    state.returnProductDatas = deleteAndReassignId(state.returnProductDatas, index);
                    break;
                case 'replace':
                    if (state.replaceProductDatas.length <= 0) return;
                    state.replaceProductDatas = deleteAndReassignId(state.replaceProductDatas, index);
                    break;
            }

            setSessionStorage(state);
        },
        resetClaimData: (state: ClaimData) => {
            state.selectedCustomerCompany = '';
            state.poNumber = '';
            state.invoiceNumber = '';
            state.shippingDate = '';
            state.shippingAddress = '';
            state.repairProductDatas = [{ id: 1, product_id: '', quantity: '', note: '' }];
            state.returnProductDatas = [{ id: 1, product_id: '', quantity: '', note: '' }];
            state.replaceProductDatas = [{ id: 1, product_id: '', quantity: '', note: '' }];
            setSessionStorage(state);
        },
    },
});

export const {
    setClaimData,
    setRepairProductDatas,
    setReturnProductDatas,
    setReplaceProductDatas,
    addProductData,
    deleteProductData,
    resetClaimData
} = claimDataStateValue.actions;
export default claimDataStateValue.reducer;
