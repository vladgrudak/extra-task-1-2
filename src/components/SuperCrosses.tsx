import {ReactNode} from 'react';

type Props = {
    crosses: Cross[]
    children: ReactNode
}

type Cross = {
    id: number
    model: string
    size: string
}


export const SuperCrosses = ({crosses, children}: Props) => {
    return (
        <div>
            <ul>
                {crosses.map((crosse, i) => {
                    return (
                        <li key={i}>
                            <div>{crosse.id}</div>
                            <div>{crosse.size}</div>
                            <div>{crosse.model}</div>
                        </li>
                    )
                })}
            </ul>
            {children}
            <hr/>
        </div>
    );
};