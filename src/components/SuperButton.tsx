import {ButtonHTMLAttributes, ReactNode} from 'react';

// type SuperButtonProps = {
//     onClick: () => void
//     color: string
//     children?: ReactNode
//     title: string
// }

type ColorsProps = {
    color1?: string
    color2?: string
    color3?: string
    color4?: string
    color5?: string
}

type SuperButtonProps=ButtonHTMLAttributes<HTMLButtonElement> &{
    backGround?: string
} & Omit<ColorsProps, 'color4' | 'color5'>

export const SuperButton = (props: SuperButtonProps) => {
    const {title, onClick, color, children, className,  ...restProps} = props

    return (
        <div>
            <button className={className}>
                {children}
            </button>
        </div>
    );
};