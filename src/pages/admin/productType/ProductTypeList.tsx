import { useNavigate } from 'react-router-dom';
import CardPrimary from '../../../common/card/CardPrimary';
import TablePrimary from '../../../common/table/TablePrimary';
import TopicOfPage from '../../../common/topic/TopicOfPage';

const mockupDatas = [
    { _id: '1', no: 1, product_type: 'ประเภทสินค้า 1' },
    { _id: '2', no: 2, product_type: 'ประเภทสินค้า 2' },
    { _id: '3', no: 3, product_type: 'ประเภทสินค้า 3' },
    { _id: '4', no: 4, product_type: 'ประเภทสินค้า 4' },
    { _id: '5', no: 5, product_type: 'ประเภทสินค้า 5' },
];

export default function ProductTypeList() {

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
                        { tHeadTiltle: 'ประเภทสินค้า', cssTextAlign: 'left', key: 'product_type' },
                        { tHeadTiltle: 'Action', cssTextAlign: 'center' },
                    ]}
                    keyNameOfId='_id'
                    editOnClick={id => navigate(`/edit-product-type?id=${id}`)}
                    deleteOnClick={id => console.log('delete', id as string)}
                />
            </CardPrimary>
        </>
    )
}
