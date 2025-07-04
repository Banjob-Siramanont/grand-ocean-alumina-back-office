import CardPrimary from '../../../common/card/CardPrimary';
import TopicOfPage from '../../../common/topic/TopicOfPage';
import BasicInformation from './components/BasicInformation';
import RepairProductList from './components/RepairProductList';
import ReplaceProductList from './components/ReplaceProductList';
import ReturnProductList from './components/ReturnProductList';

export default function AddClaim() {

    return (
        <>
            <TopicOfPage text='ส่งซ่อม / คืน / เปลี่ยน' />
            <CardPrimary>
                <BasicInformation />
                <RepairProductList />
                <ReturnProductList />
                <ReplaceProductList />
            </CardPrimary>
        </>
    )
}
