import { useNavigate } from 'react-router-dom';
import CardPrimary from '../../../common/card/CardPrimary';
import TablePrimary from '../../../common/table/TablePrimary';
import TopicOfPage from '../../../common/topic/TopicOfPage';

const mockupDatas = [
    { _id: '1', no: 1, product_type: 'ตู้เก็บของเอนกประสงค์', product_subtype: 'ตู้เก็บของ 2 ประตู' },
    { _id: '2', no: 2, product_type: 'ตู้เก็บของเอนกประสงค์', product_subtype: 'ตู้เก็บของ 3 ประตู' },
    { _id: '3', no: 3, product_type: 'ตู้กับข้าว', product_subtype: 'ตู้กับข้าวขนาดเล็ก' },
    { _id: '4', no: 4, product_type: 'ตู้กับข้าว', product_subtype: 'ตู้กับข้าวขนาดใหญ่' },
    { _id: '5', no: 5, product_type: 'ตู้วางเตาแก๊ส', product_subtype: 'ตู้วางเตาแก๊สมาตรฐาน' },
    { _id: '6', no: 6, product_type: 'ตู้วางเตาแก๊ส', product_subtype: 'ตู้วางเตาแก๊สพร้อมลิ้นชัก' },
    { _id: '7', no: 7, product_type: 'ตู้เสื้อผ้า', product_subtype: 'ตู้เสื้อผ้า 2 บาน' },
    { _id: '8', no: 8, product_type: 'ตู้เสื้อผ้า', product_subtype: 'ตู้เสื้อผ้า 3 บาน' },
    { _id: '9', no: 9, product_type: 'ตู้รองเท้า', product_subtype: 'ตู้รองเท้า 4 ชั้น' },
    { _id: '10', no: 10, product_type: 'ตู้รองเท้า', product_subtype: 'ตู้รองเท้า 6 ชั้น' },
];

export default function ProductSubtypeList() {

    const navigate = useNavigate();
    return (
        <>
            <TopicOfPage text='ประเภทสินค้าย่อยทั้งหมด' />
            <CardPrimary>
                <TablePrimary
                    data={mockupDatas}
                    rowsPerPage={10}
                    tHeadDatas={[
                        { tHeadTiltle: 'No', cssTextAlign: 'center', key: 'no' },
                        { tHeadTiltle: 'ประเภทสินค้า', cssTextAlign: 'left', key: 'product_type' },
                        { tHeadTiltle: 'ประเภทสินค้าย่่อย', cssTextAlign: 'left', key: 'product_subtype' },
                        { tHeadTiltle: 'Action', cssTextAlign: 'center' },
                    ]}
                    keyNameOfId='_id'
                    editOnClick={id => navigate(`/edit-product-subtype?id=${id}`)}
                    deleteOnClick={id => console.log('delete', id as string)}
                />
            </CardPrimary>
        </>
    )
}
