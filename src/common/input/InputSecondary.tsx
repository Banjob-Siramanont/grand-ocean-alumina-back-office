// Component
import InputBase from './components/InputBase';
import type { ChangeEvent, HTMLInputTypeAttribute } from 'react';

type InputSecondaryProps = {
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

export default function InputSecondary(props: InputSecondaryProps) {
    return <InputBase {...props} variant='secondary' />;
}
