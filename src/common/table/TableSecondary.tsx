import { currency } from '../../helper/utils/currency';
import styles from './Table.module.css';

const mockupDatas = [
    {
        id: 1,
        product: 'ตู้อเนกประสงค์ Ocean OCF-10170 100x53x120 ซม. สีขาว',
        price: '5,000',
        quantity: '2',
        total: '10,000',
    },
    {
        id: 2,
        product: 'ตู้อเนกประสงค์ Ocean OCF-10170 100x53x120 ซม. สีฟ้า',
        price: '5,500',
        quantity: '3',
        total: '16,500',
    },
    {
        id: 3,
        product: 'ตู้อเนกประสงค์ Ocean OCF-10170 100x53x120 ซม. สีชมพู',
        price: '8,000',
        quantity: '9',
        total: '72,000',
    },
    {
        id: 3,
        product: 'ตู้อเนกประสงค์ Ocean OCF-10170 100x53x120 ซม. สีชมพู',
        price: '8,000',
        quantity: '9',
        total: '72,000',
    },
    {
        id: 3,
        product: 'ตู้อเนกประสงค์ Ocean OCF-10170 100x53x120 ซม. สีชมพู',
        price: '8,000',
        quantity: '9',
        total: '72,000',
    },
    {
        id: 3,
        product: 'ตู้อเนกประสงค์ Ocean OCF-10170 100x53x120 ซม. สีชมพู',
        price: '8,000',
        quantity: '9',
        total: '72,000',
    },
    {
        id: 3,
        product: 'ตู้อเนกประสงค์ Ocean OCF-10170 100x53x120 ซม. สีชมพู',
        price: '8,000',
        quantity: '9',
        total: '72,000',
    },
    {
        id: 3,
        product: 'ตู้อเนกประสงค์ Ocean OCF-10170 100x53x120 ซม. สีชมพู',
        price: '8,000',
        quantity: '9',
        total: '72,000',
    },
    {
        id: 3,
        product: 'ตู้อเนกประสงค์ Ocean OCF-10170 100x53x120 ซม. สีชมพู',
        price: '8,000',
        quantity: '9',
        total: '72,000',
    },
    {
        id: 3,
        product: 'ตู้อเนกประสงค์ Ocean OCF-10170 100x53x120 ซม. สีชมพู',
        price: '8,000',
        quantity: '9',
        total: '72,000',
    },
    {
        id: 3,
        product: 'ตู้อเนกประสงค์ Ocean OCF-10170 100x53x120 ซม. สีชมพู',
        price: '8,000',
        quantity: '9',
        total: '72,000',
    },
    {
        id: 3,
        product: 'ตู้อเนกประสงค์ Ocean OCF-10170 100x53x120 ซม. สีชมพู',
        price: '8,000',
        quantity: '9',
        total: '72,000',
    },
    {
        id: 3,
        product: 'ตู้อเนกประสงค์ Ocean OCF-10170 100x53x120 ซม. สีชมพู',
        price: '8,000',
        quantity: '9',
        total: '72,000',
    },
    {
        id: 3,
        product: 'ตู้อเนกประสงค์ Ocean OCF-10170 100x53x120 ซม. สีชมพู',
        price: '8,000',
        quantity: '9',
        total: '72,000',
    },
    {
        id: 3,
        product: 'ตู้อเนกประสงค์ Ocean OCF-10170 100x53x120 ซม. สีชมพู',
        price: '8,000',
        quantity: '9',
        total: '72,000',
    },
    {
        id: 3,
        product: 'ตู้อเนกประสงค์ Ocean OCF-10170 100x53x120 ซม. สีชมพู',
        price: '8,000',
        quantity: '9',
        total: '72,000',
    },
    {
        id: 3,
        product: 'ตู้อเนกประสงค์ Ocean OCF-10170 100x53x120 ซม. สีชมพู',
        price: '8,000',
        quantity: '9',
        total: '72,000',
    },
    {
        id: 3,
        product: 'ตู้อเนกประสงค์ Ocean OCF-10170 100x53x120 ซม. สีชมพู',
        price: '8,000',
        quantity: '9',
        total: '72,000',
    },
    {
        id: 3,
        product: 'ตู้อเนกประสงค์ Ocean OCF-10170 100x53x120 ซม. สีชมพู',
        price: '8,000',
        quantity: '9',
        total: '72,000',
    },
    {
        id: 3,
        product: 'ตู้อเนกประสงค์ Ocean OCF-10170 100x53x120 ซม. สีชมพู',
        price: '8,000',
        quantity: '9',
        total: '72,000',
    },
    {
        id: 3,
        product: 'ตู้อเนกประสงค์ Ocean OCF-10170 100x53x120 ซม. สีชมพู',
        price: '8,000',
        quantity: '9',
        total: '72,000',
    },
    {
        id: 3,
        product: 'ตู้อเนกประสงค์ Ocean OCF-10170 100x53x120 ซม. สีชมพู',
        price: '8,000',
        quantity: '9',
        total: '72,000',
    },
    {
        id: 3,
        product: 'ตู้อเนกประสงค์ Ocean OCF-10170 100x53x120 ซม. สีชมพู',
        price: '8,000',
        quantity: '9',
        total: '72,000',
    },
];

const BORDER_COLOR = 'border-lightGrey dark:border-black';

export default function TableSecondary() {

    const totalPrice = currency(mockupDatas.reduce((acc, data) => acc + Number(data.total.replace(/,/g, '')), 0));

    return (
        <div className={styles.tableWrapper}>
            <table className='w-full border-separate border-spacing-0'>
                <TableHeader />
                <tbody className='dark:text-white text-lg'>
                    {mockupDatas.map((data, index) => (
                        <TableRow
                            key={data.id}
                            index={index + 1}
                            product={data.product}
                            price={data.price}
                            quantity={data.quantity}
                            total={data.total}
                        />
                    ))}
                    <tr>
                        <td colSpan={4} className={`border-t border-r ${BORDER_COLOR} text-right py-1 px-1.5 font-medium text-themeColor`}>จำนวนเงินรวมทั้งสิ้น</td>
                        <td className={`border-r border-y ${BORDER_COLOR} text-right py-1 px-1.5 font-light`}>{totalPrice}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

function TableHeader() {
    return (
        <thead className='text-themeColor'>
            <tr>
                <TableHeaderComponent className='border-l' title='ลำดับ' align='text-center' />
                <TableHeaderComponent title='ชื่อสินค้า' align='text-left' />
                <TableHeaderComponent title='ราคา / หน่วย' align='text-right' />
                <TableHeaderComponent title='จำนวน' align='text-right' />
                <TableHeaderComponent title='ราคาสุทธิ (บาท)' align='text-right' />
            </tr>
        </thead>
    )
}

type TableHeaderComponentsProps = {
    className?: string
    title: string;
    align: 'text-left' | 'text-right' | 'text-center';
};
function TableHeaderComponent({ className, title, align }: TableHeaderComponentsProps) {
    return (
        <th
            className={`
                ${className}
                border-y border-r ${BORDER_COLOR}
                sticky top-0 z-10
                bg-white dark:bg-primaryBlack
                py-1 px-1.5 whitespace-nowrap font-medium ${align}
            `}
        >
            {title}
        </th>
    )
}

type TableRowProps = {
    index: number;
    product: string;
    price: string;
    quantity: string;
    total: string;
};
function TableRow({ index, product, price, quantity, total }: TableRowProps) {
    return (
        <tr>
            <TableRowComponent className='border-l' content={index} align='text-center' />
            <TableRowComponent content={product} align='text-left' />
            <TableRowComponent content={price} align='text-right' />
            <TableRowComponent content={quantity} align='text-right' />
            <TableRowComponent content={total} align='text-right' />
        </tr>
    )
}

type TableRowComponentProps = {
    className?: string;
    content: string | number;
    align: 'text-left' | 'text-right' | 'text-center';
};
function TableRowComponent({ className, content, align }: TableRowComponentProps) {
    return (
        <td
            className={`
                ${className}
                border-r ${BORDER_COLOR}
                py-1 px-1.5 font-light whitespace-nowrap ${align}
            `}
        >
            {content}
        </td>
    )
}