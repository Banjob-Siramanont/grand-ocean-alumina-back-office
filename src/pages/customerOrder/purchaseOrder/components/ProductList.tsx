import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProductData, deleteProductData, setProductDatas } from '../../../../store/reducer/customerOrder/PurchaseOrderSlice';

// Components
import Topic from '../../../../common/topic/Topic';
import SelectSearchSecondary from '../../../../common/select/SelectSearchSecondary';
import InputSecondary from '../../../../common/input/InputSecondary';
import OutlinedButton from '../../../../common/button/OutlinedButton';

// Helpers
import { numericWithoutText } from '../../../../helper/utils/validation';

// Types
import type { AppDispatch, RootState } from '../../../../store/Store';
import type { ProductData } from '../../../../types/store/customerOrder/purchaseOrder/purchaseOrderSliceTypes';

export default function ProductList() {

    const { productOptionDatas, productDatas } = useSelector((state: RootState) => state.purchaseOrderDataStateValue);
    const dispatch = useDispatch<AppDispatch>();
    const handleOnChange = <Key extends keyof ProductData>(
        { index, updateKey, value }: { index: number; updateKey: Key; value: ProductData[Key]; }
    ) => dispatch(setProductDatas({ index, updateKey, value: value as string }));

    return (
        <>
            <Topic text='รายการสินค้า' />
            <div className='grid grid-cols-3 gap-x-2 max-[1000px]:grid-cols-1 mb-8'>
                {productDatas.map((productData, index) => {
                    // Count occurrences of each product_id
                    const productIdCounts = productDatas.reduce<Record<string, number>>((acc, item) => {
                        if (item.product_id !== '') {
                            acc[item.product_id] = (acc[item.product_id] || 0) + 1;
                        }
                        return acc;
                    }, {});

                    // Check if the current product_id is a duplicate
                    const isDuplicate = productIdCounts[productData.product_id] > 1;

                    return (
                        <React.Fragment key={productData.id}>
                            <SelectSearchSecondary
                                optionDatas={productOptionDatas}
                                selectedValue={productData.product_id}
                                keyValue='_id'
                                keyDisplayValue='product_name'
                                onChange={value => handleOnChange({ index, updateKey: 'product_id', value: value as string })}
                                textHelper={isDuplicate ? 'ซ้ำกับรายการอื่น' : ''}
                            />
                            <InputSecondary
                                placeholder='จำนวนสินค้า'
                                type='number'
                                value={productData.quantity}
                                onChange={event => handleOnChange({ index, updateKey: 'quantity', value: numericWithoutText(event.target.value) })}
                            />
                            <div className='flex justify-start items-start gap-x-2'>
                                <InputSecondary
                                    className='w-full max-[1000px]:mb-4'
                                    placeholder='หมายเหตุ (ไม่บังคับ)'
                                    type='text'
                                    value={productData.note}
                                    onChange={event => handleOnChange({ index, updateKey: 'note', value: event.target.value })}
                                />
                                <OutlinedButton
                                    className='mt-3'
                                    text='-'
                                    textColor='text-alarmRed'
                                    bgColor='bg-alarmRed'
                                    borderColor='border-alarmRed'
                                    onClick={() => dispatch(deleteProductData({ index }))}
                                />
                            </div>
                        </React.Fragment>
                    );
                })}
            </div>
            <div className='flex justify-start items-center gap-x-2 mb-8'>
                <OutlinedButton
                    text='+ เพิ่มรายการ'
                    textColor='text-themeColor'
                    bgColor='bg-themeColor'
                    borderColor='border-themeColor'
                    onClick={() => dispatch(addProductData({}))}
                />
                <OutlinedButton
                    text='- ลบรายการ'
                    textColor='text-alarmRed'
                    bgColor='bg-alarmRed'
                    borderColor='border-alarmRed'
                    onClick={() => dispatch(deleteProductData({ index: productDatas.length - 1 }))}
                />
            </div>

        </>
    )
}
