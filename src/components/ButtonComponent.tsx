import React, {MouseEvent, ReactNode} from "react";


type Props = 
{
    onClick(e: MouseEvent <HTMLElement>): void,
    children: ReactNode
}

const Button: React.FC<Props> = ({ onClick, children}) => {
    return (
        <button onClick={onClick}> {children}</button>
    );
};

export default Button;