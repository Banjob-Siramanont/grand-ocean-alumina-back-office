import { currency } from '../../../../helper/utils/currency';

export type ProductInformationData = {
    id: string;
    customerType: 'shoppingMall' | 'generalStore' | 'claim';
    customerCompanyName: string;
    shippingAddress: string;
    poNumber: string;
    price: number;
    poExpireDate: string;
    logisticStatus: boolean;
    productionStatus: boolean;
};

type ProductInformationProps = {
    productInformation: ProductInformationData;
};

export default function ProductInformation({ productInformation }: ProductInformationProps) {

    const getBorderColor = (customerType: ProductInformationData['customerType']) => {
        switch (customerType) {
            case 'shoppingMall': return 'border-alarmRed';
            case 'generalStore': return 'border-creamYellow';
            case 'claim': return 'border-emeraldGreen';
            default: return 'border-emeraldGreen';
        }
    };

    const borderColor = getBorderColor(productInformation.customerType);

    return (
        <div className={`grid grid-cols-[auto_1fr] gap-x-5 border-l-4 ${borderColor} dark:text-white pl-3 mb-2`}>
            <MainDetail productInformation={productInformation} />
            <SubDetail productInformation={productInformation} />
        </div>
    )
}

function MainDetail({ productInformation }: ProductInformationProps) {
    const {
        customerCompanyName,
        shippingAddress,
        poNumber,
        price,
    } = productInformation;
    return (
        <>
            <div>{customerCompanyName} | {shippingAddress} {poNumber}</div>
            <div className='text-right whitespace-nowrap'>{currency(price)} บาท</div>
        </>
    )
}

function SubDetail({ productInformation }: ProductInformationProps) {

    const { poExpireDate, logisticStatus, productionStatus } = productInformation;
    return (
        <>
            <div className='flex justify-start items-center gap-x-4 col-span-2'>
                <div className='text-grey'>PO Exp: {poExpireDate}</div>
                <LogisticAndProductionStatus
                    logisticStatus={logisticStatus}
                    productionStatus={productionStatus}
                />
            </div>
        </>
    )
}


type LogisticAndProductionStatusProps = {
    logisticStatus: boolean;
    productionStatus: boolean;
}
// This component displays the logistic and production status of a product.
function LogisticAndProductionStatus({ logisticStatus = false, productionStatus = false }: LogisticAndProductionStatusProps) {

    const COMMON_STYLE = 'text-sm font-bold rounded-sm p-0.5 cursor-pointer';
    const TRUE_STYLE = 'bg-emeraldGreen text-white';
    const FALSE_STYLE = 'bg-creamYellow text-black';

    return (
        <div className='flex justify-start items-center gap-x-2'>
            <div className={`${COMMON_STYLE} ${logisticStatus ? TRUE_STYLE : FALSE_STYLE} relative group`}>
                LGT
                <Title text={logisticStatus ? 'approve แล้ว' : 'รอ approve'} />
            </div>
            <div className={`${COMMON_STYLE} ${productionStatus ? TRUE_STYLE : FALSE_STYLE} relative group`}>
                PRD
                <Title text={productionStatus ? 'ผลิตเสร็จแล้ว' : 'อยู่ระหว่างการผลิต'} />
            </div>
        </div>
    )
}

function Title({ text }: { text: string; }) {
    return (
        <span className='absolute bottom-full left-1/2 transform -translate-x-1/2 -translate-y-1 bg-oceanGrey text-white text-sm rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-0 pointer-events-none whitespace-nowrap'>
            {text}
        </span>
    )
}