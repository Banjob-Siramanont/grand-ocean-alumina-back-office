import { useNavigate } from 'react-router-dom';
import CardPrimary from '../../../common/card/CardPrimary';
import TablePrimary from '../../../common/table/TablePrimary';
import TopicOfPage from '../../../common/topic/TopicOfPage';

const mockupDatas = [
    { _id: '1', no: 1, vehicle_name: 'กลุ่มร้านค้า A', vehicle_type: 'ร้านค้าใน กทม และปริมณฑล' },
    { _id: '2', no: 2, vehicle_name: 'กลุ่มร้านค้า B', vehicle_type: 'ร้านค้าในต่างจังหวัด แต่ไม่ไกลจากบริษัทเกิน 100 กิโลเมตร' },
    { _id: '3', no: 3, vehicle_name: 'กลุ่มร้านค้า C', vehicle_type: 'ร้านค้าในต่างจังหวัด และไกลเกิน 100 กิโลเมตร' },
    { _id: '4', no: 4, vehicle_name: 'กลุ่มร้านค้า D', vehicle_type: 'ร้านค้าประเภทห้างสรรพสินค้า' },
];

export default function CustomerGroupList() {

    const navigate = useNavigate();

    return (
        <>
            <TopicOfPage text='กลุ่มร้านค้าทั้งหมด' />
            <CardPrimary>
                <TablePrimary
                    data={mockupDatas}
                    rowsPerPage={10}
                    tHeadDatas={[
                        { tHeadTiltle: 'No', cssTextAlign: 'center', key: 'no' },
                        { tHeadTiltle: 'ชื่อกลุ่มร้านค้า', cssTextAlign: 'left', key: 'vehicle_name' },
                        { tHeadTiltle: 'ลักษณะของร้านค้าที่อยู่ในกลุ่ม', cssTextAlign: 'left', key: 'vehicle_type' },
                        { tHeadTiltle: 'Action', cssTextAlign: 'center' },
                    ]}
                    keyNameOfId='_id'
                    editOnClick={id => navigate(`/edit-customer-group?id=${id}`)}
                    deleteOnClick={id => console.log('delete', id as string)}
                />
            </CardPrimary>
        </>
    )
}
