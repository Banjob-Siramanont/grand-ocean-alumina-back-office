import { useNavigate } from 'react-router-dom';
import CardPrimary from '../../../common/card/CardPrimary';
import TablePrimary from '../../../common/table/TablePrimary';
import TopicOfPage from '../../../common/topic/TopicOfPage';

const mockupDatas = [
    { _id: '1', no: 1, name: 'ร้านค้า A', branch: 'สาขา 1', type: 'ห้างสรรพสินค้า', group: 'กลุ่มร้านค้า A', region: 'ภาคกลาง', distance: 10, isVat: '✓', address: '123 ถนนหลัก แขวงหลัก เขตหลัก กรุงเทพฯ', pickup: 'ภายในเช้าวันส่งสินค้า' },
    { _id: '2', no: 2, name: 'ร้านค้า B', branch: 'สาขา 1', type: 'ร้านค้าทั่วไป', group: 'กลุ่มร้านค้า B', region: 'ภาคตะวันออกเฉียงเหนือ', distance: 550, isVat: '✕', address: '456 ถนนรอง แขวงรอง เขตรอง จังหวัดรอง', pickup: '1 วันก่อนส่งสินค้า และก่อนเที่ยง' },
    { _id: '3', no: 3, name: 'ร้านค้า C', branch: 'สาขา 2', type: 'ร้านค้าทั่วไป', group: 'กลุ่มร้านค้า C', region: 'ภาคใต้', distance: 550, isVat: '✓', address: '789 ถนนเส้นเล็ก แขวงเล็ก เขตเล็ก จังหวัดเล็ก', pickup: '1 วันก่อนส่งสินค้า และก่อนเที่ยง' },
    { _id: '4', no: 4, name: 'ร้านค้า D', branch: 'สาขา 1', type: 'ร้านค้าทั่วไป', group: 'กลุ่มร้านค้า D', region: 'ภาคเหนือ', distance: 920, isVat: '✕', address: '321 ถนนใหญ่ แขวงใหญ่ เขตใหญ่ จังหวัดใหญ่', pickup: '1 วันก่อนส่งสินค้า และก่อนเที่ยง' },
];

export default function CustomerList() {

    const navigate = useNavigate();

    return (
        <>
            <TopicOfPage text='ร้านค้าในระบบทั้งหมด' />
            <CardPrimary>
                <TablePrimary
                    data={mockupDatas}
                    rowsPerPage={10}
                    tHeadDatas={[
                        { tHeadTiltle: 'No', cssTextAlign: 'center', key: 'no' },
                        { tHeadTiltle: 'ชื่อร้านค้า', cssTextAlign: 'left', key: 'name' },
                        { tHeadTiltle: 'สาขา', cssTextAlign: 'left', key: 'branch' },
                        { tHeadTiltle: 'ประเภทร้านค้า', cssTextAlign: 'left', key: 'type' },
                        { tHeadTiltle: 'กลุ่มร้านค้า', cssTextAlign: 'left', key: 'group' },
                        { tHeadTiltle: 'ภาค', cssTextAlign: 'left', key: 'region' },
                        { tHeadTiltle: 'ระยะห่างจากบริษัท (km)', cssTextAlign: 'right', key: 'distance' },
                        { tHeadTiltle: 'ราคาสินค้ารวม VAT', cssTextAlign: 'center', key: 'isVat' },
                        { tHeadTiltle: 'ที่อยู่จัดส่งสินค้า', cssTextAlign: 'left', key: 'address' },
                        { tHeadTiltle: 'การขึ้นสินค้า (ช้าที่สุด)', cssTextAlign: 'left', key: 'pickup' },
                        { tHeadTiltle: 'Action', cssTextAlign: 'center' },
                    ]}
                    keyNameOfId='_id'
                    editOnClick={id => navigate(`/edit-customer?id=${id}`)}
                    deleteOnClick={id => console.log('delete', id as string)}
                />
            </CardPrimary>
        </>
    )
}
