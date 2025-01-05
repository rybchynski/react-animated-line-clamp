type Props = {
    content: string | JSX.Element;
    showMoreButtonContent: string | JSX.Element;
    showLessButtonContent?: string | JSX.Element;
    classes?: {
        blockWrapper?: string;
        contentWrapper?: string;
        content?: string;
        button?: string;
    };
    duration?: number;
    easing?: string;
    lineClamp?: number;
    hideExpandedButton?: boolean;
};
export declare const ReactLineClamp: (props: Props) => import("react/jsx-runtime").JSX.Element;
export {};
