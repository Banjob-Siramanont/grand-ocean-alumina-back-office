import { useNavigate } from 'react-router-dom';
import OutlinedButton from '../../common/button/OutlinedButton';
import ContainedButton from '../../common/button/ContainedButton';

type ActionButtonsProps = {
    className?: string;
    cancelText?: string;
    actionText?: string;
    onClick: () => void;
}

export default function ActionButtons({ className, cancelText = 'ยกเลิก', actionText = 'บันทึกข้อมูล', onClick }: ActionButtonsProps) {

    const navigate = useNavigate();

    return (
        <div className={`flex justify-end items-center gap-x-2 ${className}`}>
            <OutlinedButton
                text={cancelText}
                textColor='text-alarmRed'
                bgColor='bg-alarmRed'
                borderColor='border-alarmRed'
                onClick={() => navigate(-1)}
            />
            <ContainedButton
                text={actionText}
                bgColor='bg-themeColor'
                borderColor='border-themeColor'
                onClick={() => onClick()}
            />
        </div>
    )
}
