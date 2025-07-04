import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProductData, deleteProductData, setRepairProductDatas } from '../../../../store/reducer/customerOrder/ClaimSlice';

// Components
import Topic from '../../../../common/topic/Topic';
import SelectSearchSecondary from '../../../../common/select/SelectSearchSecondary';
import InputSecondary from '../../../../common/input/InputSecondary';
import OutlinedButton from '../../../../common/button/OutlinedButton';

// Helpers
import { numericWithoutText } from '../../../../helper/utils/validation';

// Types
import type { AppDispatch, RootState } from '../../../../store/Store';
import type { RepairProductData } from '../../../../types/store/customerOrder/claimSliceTypes';

export default function RepairProductList() {

    const { productOptionDatas, repairProductDatas } = useSelector((state: RootState) => state.claimDataStateValue);
    const dispatch = useDispatch<AppDispatch>();
    const handleOnChange = <Key extends keyof RepairProductData>(
        { index, updateKey, value }: { index: number; updateKey: Key; value: RepairProductData[Key]; }
    ) => dispatch(setRepairProductDatas({ index, updateKey, value: value as string }));

    return (
        <>
            <Topic text='รายการสินค้าส่งซ่อม' />
            <div className='grid grid-cols-3 gap-x-2 max-[1000px]:grid-cols-1 mb-8'>
                {repairProductDatas.map((repairProductData, index) => {
                    // Count occurrences of each product_id
                    const productIdCounts = repairProductDatas.reduce<Record<string, number>>((acc, item) => {
                        if (item.product_id !== '') {
                            acc[item.product_id] = (acc[item.product_id] || 0) + 1;
                        }
                        return acc;
                    }, {});

                    // Check if the current product_id is a duplicate
                    const isDuplicate = productIdCounts[repairProductData.product_id] > 1;

                    return (
                        <React.Fragment key={repairProductData.id}>
                            <SelectSearchSecondary
                                optionDatas={productOptionDatas}
                                selectedValue={repairProductData.product_id}
                                keyValue='_id'
                                keyDisplayValue='product_name'
                                onChange={value => handleOnChange({ index, updateKey: 'product_id', value: value as string })}
                                textHelper={isDuplicate ? 'ซ้ำกับรายการอื่น' : ''}
                            />
                            <InputSecondary
                                placeholder='จำนวนสินค้า'
                                type='number'
                                value={repairProductData.quantity}
                                onChange={event => handleOnChange({ index, updateKey: 'quantity', value: numericWithoutText(event.target.value) })}
                            />
                            <div className='flex justify-start items-start gap-x-2'>
                                <InputSecondary
                                    className='w-full max-[1000px]:mb-4'
                                    placeholder='หมายเหตุ (ไม่บังคับ)'
                                    type='text'
                                    value={repairProductData.note}
                                    onChange={event => handleOnChange({ index, updateKey: 'note', value: event.target.value })}
                                />
                                <OutlinedButton
                                    className='mt-3'
                                    text='-'
                                    textColor='text-alarmRed'
                                    bgColor='bg-alarmRed'
                                    borderColor='border-alarmRed'
                                    onClick={() => dispatch(deleteProductData({ index, productType: 'repair' }))}
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
                    onClick={() => dispatch(addProductData({ productType: 'repair' }))}
                />
                <OutlinedButton
                    text='- ลบรายการ'
                    textColor='text-alarmRed'
                    bgColor='bg-alarmRed'
                    borderColor='border-alarmRed'
                    onClick={() => dispatch(deleteProductData({ index: repairProductDatas.length - 1, productType: 'repair' }))}
                />
            </div>
        </>
    )
}
