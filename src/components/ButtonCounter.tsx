import React, { useState } from 'react';
import Button from './ButtonComponent.tsx';

const ButtonCounter: React.FC = () => {
    const [clicksCount, setClicksCount] = useState(0);

    const handleIncrement = () => {
        setClicksCount(clicksCount + 1);
    };

    const handleDecrement = () => {
        setClicksCount(clicksCount - 1);
    };

    return (
        <>
        <Button onClick={handleIncrement} color="green"> Increment</Button>
        <Button onClick={handleDecrement} color="red">Decrement</Button>
        "You've clicked me {clicksCount} times!"
        </>
    );
};

export default ButtonCounter;