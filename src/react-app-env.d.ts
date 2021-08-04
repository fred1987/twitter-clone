/// <reference types="node" />
/// <reference types="react" />
/// <reference types="react-dom" />

declare namespace NodeJS {
    interface ProcessEnv {
        readonly NODE_ENV: 'development' | 'production' | 'test';
        readonly PUBLIC_URL: string;
    }
}

declare module '*.avif' {
    const src: string;
    export default src;
}

declare module '*.bmp' {
    const src: string;
    export default src;
}

declare module '*.gif' {
    const src: string;
    export default src;
}

declare module '*.jpg' {
    const src: string;
    export default src;
}

declare module '*.jpeg' {
    const src: string;
    export default src;
}

declare module '*.png' {
    const src: string;
    export default src;
}

declare module '*.webp' {
    const src: string;
    export default src;
}

declare module '*.svg' {
    export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>;
    const src: string;
    export default src;
}

declare module '*.module.css' {
    const classes: { readonly [key: string]: string };
    export default classes;
}

declare module '*.module.scss' {
    const classes: { readonly [key: string]: string };
    export default classes;
}

declare module '*.module.sass' {
    const classes: { readonly [key: string]: string };
    export default classes;
}

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
    mode?: string;
    disabled?: boolean,
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
