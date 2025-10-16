import { useState } from "react";

export const useCounter = (initialValaue: number = 10) => {
    const [counter, setCounter] = useState(initialValaue);

    const handleAdd = () => {
        setCounter(counter + 1)
    }

    const handleSubstract = () => {
        setCounter(prev => prev - 1);
    }

    const handleReset = () => {
        setCounter(initialValaue);
    }

    return {
        counter,
        handleAdd,
        handleSubstract,
        handleReset
    }
}

