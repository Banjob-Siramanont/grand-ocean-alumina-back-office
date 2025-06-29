import InputPrimary from '../../../../common/input/InputPrimary';
import Topic from '../../../../common/topic/Topic';

type BasicInformationProps = {
    name: string;
    setName: (value: string) => void;
};

export default function BasicInformation({ name, setName }: BasicInformationProps) {
    return (
        <>
            <Topic text='ข้อมูลประเภทสินค้า' />
            <InputPrimary
                className='mb-8'
                labelTag='ประเภทสินค้า'
                type='text'
                placeholder='กรุณาระบุ'
                value={name}
                onChange={event => setName(event.target.value)}
            />
        </>

    )
}
