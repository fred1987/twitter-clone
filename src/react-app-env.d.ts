declare module '*.svg' {
    export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

declare module 'inputmask' {
    declare const inputmask: any;
    export default inputmask;
}

interface IFormElement {
    name: string,
    placeholder?: string;
    value?: string,
    onChange: ChangeEvent<HTMLInputElement>;
}

interface IButton {
    title: string;
    plain?: boolean;
    type?: string;
    style?: object;
    action?: () => any;
}

interface IInput extends IFormElement {
    onBlur?: FocusEventHandler<HTMLInputElement>,
    error?: string;
    mask?: string | object;
}

type Select = {
    id: string,
    label: string
}

interface ISelect extends IFormElement {
    list?: Select[];
}

