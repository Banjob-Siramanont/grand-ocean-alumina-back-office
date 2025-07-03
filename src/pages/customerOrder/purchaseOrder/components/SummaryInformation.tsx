import { useSelector } from 'react-redux';

// Components
import Topic from '../../../../common/topic/Topic';

// Helpers
import { calculateOrderTotals } from '../../../../helper/utils/common';
import { currency } from '../../../../helper/utils/currency';

// Types
import type { RootState } from '../../../../store/Store';

export default function SummaryInformation() {

    const {
        productOptionDatas,
        productDatas,
        specialProductDatas
    } = useSelector((state: RootState) => state.purchaseOrderDataStateValue);

    const price = calculateOrderTotals(productDatas, specialProductDatas, productOptionDatas);

    return (
        <>
            <Topic text='ข้อมูลใบ PO' />
            <div className='grid grid-cols-[auto_1fr] gap-x-4 mb-8'>
                <Detail topic='บริษัทลูกค้า' detail='ไทวัสดุ สาขาปทุมธานี' />
                <Detail topic='เลขที่ใบสั่งซื้อ (PO Number)' detail='PO123456789' />
                <Detail topic='วันที่ออกใบสั่งซื้อ' detail='4 มิถุนายน 2568' />
                <Detail topic='วันหมดอายุใบสั่งซื้อ (PO Exp.)' detail='31 ตุลาคม 2568' />
                <Detail topic='ยอดสั่งสินค้า' detail={`${currency(price.totalPrice)} บาท`} />
                <Detail topic='ภาษีมูลค่าเพิ่ม' detail={`${currency(price.totalVat)} บาท`} />
                <Detail topic='รวมทั้งสิ้น' detail={`${currency(price.grandTotal)} บาท`} />
            </div>
        </>
    )
}

type DetailProps = {
    topic: string;
    detail: string;
}
function Detail({ topic, detail }: DetailProps) {
    return (
        <>
            <div className='dark:text-white font-bold'>{topic} :</div>
            <div className='dark:text-white'>{detail}</div>
        </>
    )
}