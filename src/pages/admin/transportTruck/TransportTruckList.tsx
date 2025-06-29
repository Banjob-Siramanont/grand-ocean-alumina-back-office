import { useNavigate } from 'react-router-dom';
import TablePrimary from '../../../common/table/TablePrimary';
import TopicOfPage from '../../../common/topic/TopicOfPage';
import CardPrimary from '../../../common/card/CardPrimary';

const mockupDatas3 = [
    {
        _id: '01',
        no: 1,
        vehicle_name: 'รถขนสินค้า 1',
        vehicle_type: 'รถบรรทุก 4 ล้อ',
        license_plate: '32-0345 กทม',
        max_weight_kg: '3,000',
        vehicle_status: 'พร้อมใช้งาน',
    },
    {
        _id: '02',
        no: 2,
        vehicle_name: 'รถขนสินค้า 2',
        vehicle_type: 'รถบรรทุก 6 ล้อ',
        license_plate: '84-5461 กทม',
        max_weight_kg: '8,000',
        vehicle_status: 'พร้อมใช้งาน',
    },
    {
        _id: '03',
        no: 3,
        vehicle_name: 'รถขนสินค้า 2',
        vehicle_type: 'รถบรรทุก 10 ล้อ',
        license_plate: '85-4132 กทม',
        max_weight_kg: '12,000',
        vehicle_status: 'พร้อมใช้งาน',
    },
];

export default function TransportTruckList() {

    const navigate = useNavigate();

    return (
        <>
            <TopicOfPage text='รถขนสินค้าทั้งหมด' />
            <CardPrimary>
                <TablePrimary
                    data={mockupDatas3}
                    rowsPerPage={10}
                    tHeadDatas={[
                        { tHeadTiltle: 'No', cssTextAlign: 'center', key: 'no' },
                        { tHeadTiltle: 'ชื่อรถขนสินค้า', cssTextAlign: 'left', key: 'vehicle_name' },
                        { tHeadTiltle: 'ประเภทรถ', cssTextAlign: 'left', key: 'vehicle_type' },
                        { tHeadTiltle: 'เลขทะเบียน', cssTextAlign: 'left', key: 'license_plate' },
                        { tHeadTiltle: 'สถานะรถขนสินค้า', cssTextAlign: 'left', key: 'vehicle_status' },
                        { tHeadTiltle: 'น้ำหนักสูงสุดที่สามารถขนได้ [kg]', cssTextAlign: 'right', key: 'max_weight_kg' },
                        { tHeadTiltle: 'Action', cssTextAlign: 'center' },
                    ]}
                    keyNameOfId='_id'
                    editOnClick={id => navigate(`/edit-transport-truck?id=${id}`)}
                    deleteOnClick={id => console.log('delete', id as string)}
                />
            </CardPrimary>
        </>
    )
}
