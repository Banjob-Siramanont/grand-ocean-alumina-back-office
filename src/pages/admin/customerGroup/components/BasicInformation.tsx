import TwoColumnGrid from '../../../../common/general/TwoColumnGrid';
import InputPrimary from '../../../../common/input/InputPrimary';
import Topic from '../../../../common/topic/Topic';

type BasicInformationProps = {
    name: string;
    setName: (value: string) => void;
    characteristic: string;
    setCharacteristic: (value: string) => void;
};


export default function BasicInformation({ name, setName, characteristic, setCharacteristic }: BasicInformationProps) {
    return (
        <>
            <Topic text='ข้อมูลกลุ่มร้านค้า' />
            <TwoColumnGrid>
                <InputPrimary
                    labelTag='ชื่อกลุ่มร้านค้า'
                    type='text'
                    placeholder='กรุณาระบุ'
                    value={name}
                    onChange={event => setName(event.target.value)}
                />
                <InputPrimary
                    labelTag='ลักษณะของร้านค้าที่อยู่ในกลุ่ม'
                    type='text'
                    placeholder='กรุณาระบุ'
                    value={characteristic}
                    onChange={event => setCharacteristic(event.target.value)}
                />
            </TwoColumnGrid>
        </>
    )
}
