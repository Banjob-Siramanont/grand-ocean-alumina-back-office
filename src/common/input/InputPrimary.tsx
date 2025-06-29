// Component
import InputBase from './components/InputBase';
import type { ChangeEvent, HTMLInputTypeAttribute } from 'react';

type InputPrimaryProps = {
    className?: string;
    labelTag?: string;
    type: HTMLInputTypeAttribute;
    placeholder?: string;
    value: string | number | readonly string[] | undefined;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    textHelper?: string;
    max?: number;
    min?: number;
    maxLength?: number;
};

export default function InputPrimary(props: InputPrimaryProps) {
    return <InputBase {...props} variant='primary' />;
}
