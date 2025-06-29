// Component
import SelectSearchBase from './components/SelectSearchBase';

import type { Option } from '../../types/common/commonTypes';

type SelectSearchProps = {
    className?: string;
    labelTag?: string;
    optionDatas: Option[];
    selectedValue: string | number;
    keyValue?: string;
    keyDisplayValue?: string;
    textHelper?: string;
    onChange: (data: string | number) => void;
}

export default function SelectSearchPrimary(props: SelectSearchProps) {
    return <SelectSearchBase {...props} variant='primary' />;
}
