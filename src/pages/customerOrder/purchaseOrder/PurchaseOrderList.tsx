import { useNavigate } from 'react-router-dom';
import CardPrimary from '../../../common/card/CardPrimary';
import TablePrimary from '../../../common/table/TablePrimary';
import TopicOfPage from '../../../common/topic/TopicOfPage';

const mockupDatas = [
    {
        _id: '1',
        no: 1,
        company_name: 'โตโอต้า สายบางปะอิน',
        po_number: '250600582 00',
        order_date: '4 มิถุนายน 2568',
        expire_date: '19 มิถุนายน 2568',
        shipping_address: '99/10 หมู่ 5 บางเดื่อ เมือง บางปะอิน 12000',
        total_price: '8,472.09',
        total_vat: '847.21',
        grand_total: '9,319.30'
    },
    {
        _id: '2',
        no: 2,
        company_name: 'อมรศักดิ์ สายบางจันทนี',
        po_number: '250600583 00',
        order_date: '5 มิถุนายน 2568',
        expire_date: '20 มิถุนายน 2568',
        shipping_address: '123/45 หมู่ 6 บางจากฯ บางกรวย นนทบุรี 11110',
        total_price: '18,636.36',
        total_vat: '1,863.64',
        grand_total: '20,500.00'
    },
    {
        _id: '3',
        no: 3,
        company_name: 'อมรกนก สายบางจอม',
        po_number: '250600584 00',
        order_date: '5 มิถุนายน 2568',
        expire_date: '20 มิถุนายน 2568',
        shipping_address: '456/78 ซอยรามคำแหง 39 หนองจอก กรุงเทพมหานคร 10240',
        total_price: '14,090.91',
        total_vat: '1,409.09',
        grand_total: '15,500.00'
    },
    {
        _id: '4',
        no: 4,
        company_name: 'โตโอต้า สายบางวิมาน',
        po_number: '250600585 00',
        order_date: '6 มิถุนายน 2568',
        expire_date: '21 มิถุนายน 2568',
        shipping_address: '789/12 หมู่ 1 บางวิมาน อ.บางปะหัน จ.กรุงเทพมหานคร 10230',
        total_price: '26,818.18',
        total_vat: '2,681.82',
        grand_total: '29,500.00'
    },
    {
        _id: '5',
        no: 5,
        company_name: 'บิ๊กซี สายราชดำริ',
        po_number: '250600586 00',
        order_date: '7 มิถุนายน 2568',
        expire_date: '22 มิถุนายน 2568',
        shipping_address: '321/56 หมู่ 4 ราชดำริ ปทุมวัน จ.กรุงเทพมหานคร 10400',
        total_price: '22,272.73',
        total_vat: '2,227.27',
        grand_total: '24,500.00'
    },
    {
        _id: '6',
        no: 6,
        company_name: 'เมกโกร สายบางจองฯ',
        po_number: '250600587 00',
        order_date: '8 มิถุนายน 2568',
        expire_date: '23 มิถุนายน 2568',
        shipping_address: '654/89 หมู่ 5 ตลาดบางจอง อ.บางจอง จ.นนทบุรี 11110',
        total_price: '31,818.18',
        total_vat: '3,181.82',
        grand_total: '35,000.00'
    },
    {
        _id: '7',
        no: 7,
        company_name: 'โตโอต้า สายกาลครั่วใจ',
        po_number: '250600588 00',
        order_date: '9 มิถุนายน 2568',
        expire_date: '24 มิถุนายน 2568',
        shipping_address: '147/25 ถนนกาลครั่วใจ แขวงลองไผ่ เขตคลองถม กรุงเทพมหานคร 10900',
        total_price: '17,272.73',
        total_vat: '1,727.27',
        grand_total: '19,000.00'
    },
    {
        _id: '8',
        no: 8,
        company_name: 'อมรศักดิ์ สายสีลม',
        po_number: '250600589 00',
        order_date: '10 มิถุนายน 2568',
        expire_date: '25 มิถุนายน 2568',
        shipping_address: '258/36 ถนนสีลม แขวงสีลม เขตบางรัก กรุงเทพมหานคร 10500',
        total_price: '12,727.27',
        total_vat: '1,272.73',
        grand_total: '14,000.00'
    }
];

export default function PurchaseOrderList() {

    const navigate = useNavigate();

    return (
        <>
            <TopicOfPage text='ใบ PO ทั้งหมด' />
            <CardPrimary>
                <TablePrimary
                    data={mockupDatas}
                    rowsPerPage={10}
                    tHeadDatas={[
                        { tHeadTiltle: 'No', cssTextAlign: 'center', key: 'no' },
                        { tHeadTiltle: 'บริษัทลูกค้า', cssTextAlign: 'left', key: 'company_name' },
                        { tHeadTiltle: 'เลขที่ใบสั่งซื้อ (PO Number)', cssTextAlign: 'left', key: 'po_number' },
                        { tHeadTiltle: 'วันที่ออกใบสั่งซื้อ', cssTextAlign: 'left', key: 'order_date' },
                        { tHeadTiltle: 'วันหมดอายุใบสั่งซื้อ', cssTextAlign: 'left', key: 'expire_date' },
                        { tHeadTiltle: 'สถานที่จัดส่งสินค้า', cssTextAlign: 'left', key: 'shipping_address' },
                        { tHeadTiltle: 'ยอดสั่งซื้อ [บาท]', cssTextAlign: 'right', key: 'total_price' },
                        { tHeadTiltle: 'ภาษีมูลค่าเพิ่ม [บาท]', cssTextAlign: 'right', key: 'total_vat' },
                        { tHeadTiltle: 'รวมทั้งสิ้น [บาท]', cssTextAlign: 'right', key: 'grand_total' },
                        { tHeadTiltle: 'Action', cssTextAlign: 'center' },
                    ]}
                    keyNameOfId='_id'
                    editOnClick={id => navigate(`/preview-purchase-order?id=${id}`)}
                    deleteOnClick={id => console.log('delete', id as string)}
                />
            </CardPrimary>
        </>
    )
}
