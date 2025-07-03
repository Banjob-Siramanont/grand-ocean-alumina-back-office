import { useSelector } from 'react-redux';

// Components
import Topic from '../../../../common/topic/Topic';
import TablePrimary from '../../../../common/table/TablePrimary';

// Types
import type { RootState } from '../../../../store/Store';

export default function SummaryTable() {

    const {
        productOptionDatas,
        productDatas,
        specialProductDatas,
    } = useSelector((state: RootState) => state.purchaseOrderDataStateValue);

    const productDataWithname = productDatas.map(productData => {
        const productOption = productOptionDatas.find(option => option._id === productData.product_id);
        return {
            ...productData,
            product_name: productOption ? productOption.product_name : '',
        };
    });

    const specialProductDataWithname = specialProductDatas.map(specialProductData => {
        const productOption = productOptionDatas.find(option => option._id === specialProductData.product_id);
        return {
            ...specialProductData,
            product_name: productOption ? productOption.product_name : '',
        };
    });

    return (
        <>
            <Topic text='รายการสินค้า' />
            <TablePrimary
                data={productDataWithname}
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
            {specialProductDatas.length > 0 && (
                <>
                    <Topic className='mt-4' text='รายการสินค้าพิเศษ' />
                    <TablePrimary
                        data={specialProductDataWithname}
                        rowsPerPage={10}
                        isHideTableSearch={true}
                        tHeadDatas={[
                            { tHeadTiltle: 'รหัสสินค้า', cssTextAlign: 'left', key: 'product_id' },
                            { tHeadTiltle: 'ชื่อสินค้า', cssTextAlign: 'left', key: 'product_name' },
                            { tHeadTiltle: 'หมายเหตุ', cssTextAlign: 'left', key: 'note' },
                            { tHeadTiltle: 'ราคาเพิ่มเติมต่อหน่วย', cssTextAlign: 'right', key: 'addedPrice' },
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
