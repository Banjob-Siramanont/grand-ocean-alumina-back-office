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
        invoice_number: 'INV-2568-001245',
        shipping_date: '6 มิถุนายน 2568',
        shipping_address: '99/10 หมู่ 5 บางเดื่อ เมือง บางปะอิน 12000'
    },
    {
        _id: '2',
        no: 2,
        company_name: 'อมรศักดิ์ สายบางจันทนี',
        po_number: '250600583 00',
        invoice_number: 'INV-2568-001246',
        shipping_date: '7 มิถุนายน 2568',
        shipping_address: '123/45 หมู่ 6 บางจากฯ บางกรวย นนทบุรี 11110'
    },
    {
        _id: '3',
        no: 3,
        company_name: 'โตโอต้า สายบางวิมาน',
        po_number: '250600585 00',
        invoice_number: 'INV-2568-001247',
        shipping_date: '8 มิถุนายน 2568',
        shipping_address: '789/12 หมู่ 1 บางวิมาน อ.บางปะหัน จ.กรุงเทพมหานคร 10230'
    },
    {
        _id: '4',
        no: 4,
        company_name: 'บิ๊กซี สายราชดำริ',
        po_number: '250600586 00',
        invoice_number: 'INV-2568-001248',
        shipping_date: '9 มิถุนายน 2568',
        shipping_address: '321/56 หมู่ 4 ราชดำริ ปทุมวัน จ.กรุงเทพมหานคร 10400'
    },
    {
        _id: '5',
        no: 5,
        company_name: 'เมกโกร สายบางจองฯ',
        po_number: '250600587 00',
        invoice_number: 'INV-2568-001249',
        shipping_date: '10 มิถุนายน 2568',
        shipping_address: '654/89 หมู่ 5 ตลาดบางจอง อ.บางจอง จ.นนทบุรี 11110'
    }
];

export default function ClaimList() {

    const navigate = useNavigate();

    return (
        <>
            <TopicOfPage text='รายการส่งซ่อม / คืน / เปลี่ยน' />
            <CardPrimary>
                <TablePrimary
                    data={mockupDatas}
                    rowsPerPage={10}
                    tHeadDatas={[
                        { tHeadTiltle: 'No', cssTextAlign: 'center', key: 'no' },
                        { tHeadTiltle: 'บริษัทลูกค้า', cssTextAlign: 'left', key: 'company_name' },
                        { tHeadTiltle: 'เลขที่ใบสั่งซื้อ (PO Number)', cssTextAlign: 'left', key: 'po_number' },
                        { tHeadTiltle: 'เลขใบกำกับภาษี / ใบส่งสินค้า', cssTextAlign: 'left', key: 'invoice_number' },
                        { tHeadTiltle: 'วันที่ส่งสินค้า', cssTextAlign: 'left', key: 'shipping_date' },
                        { tHeadTiltle: 'สถานที่จัดส่งสินค้า', cssTextAlign: 'left', key: 'shipping_address' },
                        { tHeadTiltle: 'Action', cssTextAlign: 'center' },
                    ]}
                    keyNameOfId='_id'
                    editOnClick={id => navigate(`/preview-claim?id=${id}`)}
                    deleteOnClick={id => console.log('delete', id as string)}
                />
            </CardPrimary>
        </>
    )
}
