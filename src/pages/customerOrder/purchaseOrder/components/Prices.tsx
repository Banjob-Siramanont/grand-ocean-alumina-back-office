import { useSelector } from 'react-redux';
import type { RootState } from '../../../../store/Store';
import { currency } from '../../../../helper/utils/currency';

const productOptionDatas = [
    { _id: '60367919', product_name: 'ตู้อเนกประสงค์ Ocean OCF-10170 100x53x120 ซม. สีขาว', price: 1500, vat: 105 },
    { _id: '60367920', product_name: 'ตู้อเนกประสงค์ Ocean OCF-10180 120x53x120 ซม. สีดำ', price: 1600, vat: 112 },
    { _id: '60367921', product_name: 'ตู้อเนกประสงค์ Ocean OCF-10190 150x53x120 ซม. สีน้ำตาล', price: 1700, vat: 119 },
    { _id: '60367922', product_name: 'ตู้อเนกประสงค์ Ocean OCF-10200 80x53x120 ซม. สีเทา', price: 1400, vat: 98 },
    { _id: '60367926', product_name: 'ตู้กับข้าว 2/4 Zagio CR2040-S 61.5x43x120.5 ซม. สีเงิน', price: 1800, vat: 126 },
    { _id: '60367927', product_name: 'ตู้กับข้าว 3/4 Zagio CR3040-S 91.5x43x120.5 ซม. สีขาว', price: 1900, vat: 133 },
    { _id: '60367928', product_name: 'ตู้กับข้าว 4/4 Zagio CR4040-S 122x43x120.5 ซม. สีดำ', price: 2000, vat: 140 },
    { _id: '60367929', product_name: 'ตู้กับข้าว 2/3 Zagio CR2030-S 61.5x43x90.5 ซม. สีเงิน', price: 1700, vat: 119 },
    { _id: '60367932', product_name: 'ตู้วางเตาแก๊ส Zagio CR120-S 122x45.5x85.5 ซม. สีเงิน', price: 1600, vat: 112 },
    { _id: '60367933', product_name: 'ตู้วางเตาแก๊ส Zagio CR100-S 102x45.5x85.5 ซม. สีขาว', price: 1500, vat: 105 },
    { _id: '60367934', product_name: 'ตู้วางเตาแก๊ส Zagio CR140-S 142x45.5x85.5 ซม. สีดำ', price: 1700, vat: 119 },
    { _id: '60367935', product_name: 'ตู้วางเตาแก๊ส Zagio CR80-S 82x45.5x85.5 ซม. สีเทา', price: 1400, vat: 98 },
];

export default function Prices() {
    const VAT_FRACTION = 0.07; // Assuming VAT is 7%
    const { productDatas, specialProductDatas } = useSelector((state: RootState) => state.purchaseOrderDataStateValue);

    const totalProductPrice: number = productDatas.reduce((total, product) => {
        const productOption = productOptionDatas.find(option => option._id === product.product_id);
        return total + (productOption ? productOption.price * (Number(product.amount) || 0) : 0);
    }, 0);
    const totalProductVat: number = productDatas.reduce((total, product) => {
        const productOption = productOptionDatas.find(option => option._id === product.product_id);
        return total + (productOption ? productOption.vat * (Number(product.amount) || 0) : 0);
    }, 0);

    const totalSpecialProductPrice: number = specialProductDatas.reduce((total, product) => {
        const productOption = productOptionDatas.find(option => option._id === product.product_id);
        const sumPrice = (productOption?.price || 0) + (Number(product.addedPrice) || 0);
        return total + (productOption ? sumPrice * (Number(product.amount) || 0) : 0);
    }, 0);
    const totalSpecialProductVat: number = specialProductDatas.reduce((total, product) => {
        const productOption = productOptionDatas.find(option => option._id === product.product_id);
        const sumVatPrice = (productOption?.vat || 0) + (VAT_FRACTION * Number(product.addedPrice) || 0);
        return total + (productOption ? sumVatPrice * (Number(product.amount) || 0) : 0);
    }, 0);

    const totalPrice: number = totalProductPrice + totalSpecialProductPrice;
    const totalVat: number = totalProductVat + totalSpecialProductVat;

    return (
        <div className='text-right text-themeColor dark:text-white'>
            <div className='text-right'>ยอดสั่งซื้อ : {currency(totalPrice)} บาท</div>
            <div className='text-right'>ภาษีมูลค่าเพิ่ม : {currency(totalVat)} บาท</div>
            <div className='text-right'>รวมทั้งสิ้่น : {currency(totalPrice + totalVat)} บาท</div>
        </div>
    )
}
