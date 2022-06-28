import React, { useEffect, useState } from "react";

const useDebouned = (value: any, timeDelay: number = 800) => {
    const [valueDebouned, setValueDebouned] = useState(value);

    useEffect(() => {
        const id = setTimeout(() => {
            setValueDebouned(value);
        }, timeDelay);

        return () => {
            clearTimeout(id);
        };
    }, [value]);

    return valueDebouned;
};

export default useDebouned;
