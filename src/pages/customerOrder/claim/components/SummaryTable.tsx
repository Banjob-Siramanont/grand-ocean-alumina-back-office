import { useSelector } from 'react-redux';

// Components
import Topic from '../../../../common/topic/Topic';
import TablePrimary from '../../../../common/table/TablePrimary';

// Types
import type { RootState } from '../../../../store/Store';
import type { ProductOptionData, RepairProductData, ReplaceProductData, ReturnProductData } from '../../../../types/store/customerOrder/claimSliceTypes';

export default function SummaryTable() {

    const {
        productOptionDatas,
        repairProductDatas,
        returnProductDatas,
        replaceProductDatas,
    } = useSelector((state: RootState) => state.claimDataStateValue);

    const repairProductDataWithname = productWithName(repairProductDatas, productOptionDatas);
    const returnProductDataWithname = productWithName(returnProductDatas, productOptionDatas);
    const replaceProductDataWithname = productWithName(replaceProductDatas, productOptionDatas);

    return (
        <>
            {repairProductDataWithname.length > 0 && (
                <>
                    <Topic text='รายการสินค้าส่งซ่อม' />
                    <TablePrimary
                        data={repairProductDataWithname}
                        rowsPerPage={10}
                        isHideTableSearch={true}
                        tHeadDatas={[
                            { tHeadTiltle: 'รหัสสินค้า', cssTextAlign: 'left', key: 'product_id' },
                            { tHeadTiltle: 'ชื่อสินค้า', cssTextAlign: 'left', key: 'product_name' },
                            { tHeadTiltle: 'หมายเหตุ', cssTextAlign: 'left', key: 'note' },
                            { tHeadTiltle: 'จำนวนสินค้า', cssTextAlign: 'right', key: 'quantity' },
                        ]}
                        keyNameOfId='_id'
                        hasDeleteBtn={false}
                        hasEditBtn={false}
                    />
                </>
            )}
            {returnProductDataWithname.length > 0 && (
                <>
                    <Topic text='รายการสินค้าส่งคืน' />
                    <TablePrimary
                        data={returnProductDataWithname}
                        rowsPerPage={10}
                        isHideTableSearch={true}
                        tHeadDatas={[
                            { tHeadTiltle: 'รหัสสินค้า', cssTextAlign: 'left', key: 'product_id' },
                            { tHeadTiltle: 'ชื่อสินค้า', cssTextAlign: 'left', key: 'product_name' },
                            { tHeadTiltle: 'หมายเหตุ', cssTextAlign: 'left', key: 'note' },
                            { tHeadTiltle: 'จำนวนสินค้า', cssTextAlign: 'right', key: 'quantity' },
                        ]}
                        keyNameOfId='_id'
                        hasDeleteBtn={false}
                        hasEditBtn={false}
                    />
                </>
            )}
            {replaceProductDataWithname.length > 0 && (
                <>
                    <Topic text='รายการสินค้าเปลี่ยน' />
                    <TablePrimary
                        data={replaceProductDataWithname}
                        rowsPerPage={10}
                        isHideTableSearch={true}
                        tHeadDatas={[
                            { tHeadTiltle: 'รหัสสินค้า', cssTextAlign: 'left', key: 'product_id' },
                            { tHeadTiltle: 'ชื่อสินค้า', cssTextAlign: 'left', key: 'product_name' },
                            { tHeadTiltle: 'หมายเหตุ', cssTextAlign: 'left', key: 'note' },
                            { tHeadTiltle: 'จำนวนสินค้า', cssTextAlign: 'right', key: 'quantity' },
                        ]}
                        keyNameOfId='_id'
                        hasDeleteBtn={false}
                        hasEditBtn={false}
                    />
                </>
            )}
        </>
    )
}

function productWithName(productDatas: (RepairProductData | ReturnProductData | ReplaceProductData)[], productOptionDatas: ProductOptionData[]) {
    return productDatas.map(productData => {
        const productOption = productOptionDatas.find(option => option._id === productData.product_id);
        return {
            ...productData,
            product_name: productOption ? productOption.product_name : '',
        };
    });
}