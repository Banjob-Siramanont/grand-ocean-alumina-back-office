import { useNavigate } from 'react-router-dom';
import CardPrimary from '../../../common/card/CardPrimary';
import TablePrimary from '../../../common/table/TablePrimary';
import TopicOfPage from '../../../common/topic/TopicOfPage';

const mockupDatas = [
    { _id: '1', no: 1, product_category: 'ตู้เก็บของเอนกประสงค์' },
    { _id: '2', no: 2, product_category: 'ตู้กับข้าว' },
    { _id: '3', no: 3, product_category: 'ตู้วางเตาแก๊ส' },
    { _id: '4', no: 4, product_category: 'ตู้เสื้อผ้า' },
    { _id: '5', no: 5, product_category: 'ตู้รองเท้า' },
];

export default function ProductCategoryList() {

    const navigate = useNavigate();
    return (
        <>
            <TopicOfPage text='ประเภทสินค้าทั้งหมด' />
            <CardPrimary>
                <TablePrimary
                    data={mockupDatas}
                    rowsPerPage={10}
                    tHeadDatas={[
                        { tHeadTiltle: 'No', cssTextAlign: 'center', key: 'no' },
                        { tHeadTiltle: 'ประเภทสินค้า', cssTextAlign: 'left', key: 'product_category' },
                        { tHeadTiltle: 'Action', cssTextAlign: 'center' },
                    ]}
                    keyNameOfId='_id'
                    editOnClick={id => navigate(`/edit-product-category?id=${id}`)}
                    deleteOnClick={id => console.log('delete', id as string)}
                />
            </CardPrimary>
        </>
    )
}
