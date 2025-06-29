// Component
import SelectBase from './components/SelectBase';
import type { Option } from '../../types/common/commonTypes';

type SelectPrimaryProps = {
    className?: string;
    labelTag?: string;
    optionDatas: Option[];
    selectedValue: string | number;
    keyValue?: string;
    keyDisplayValue?: string;
    textHelper?: string;
    onChange: (data: string | number) => void;
}

export default function SelectPrimary(props: SelectPrimaryProps) {
    return <SelectBase {...props} variant='primary' />;
}
