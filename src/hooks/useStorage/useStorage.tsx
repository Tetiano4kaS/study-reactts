import React, {useEffect, useState} from 'react';

const useStorage = <T,>(key: string, localStorageObject:any, defaultValue:T) => {
    const [value, setValue] = useState<T>(() => {
        const storedValue = localStorageObject.getItem(key);
        if (storedValue !== null) return JSON.parse(storedValue);

        if (typeof defaultValue === 'function') {
            return defaultValue();
        } else {
            return defaultValue;
        }
    });

    useEffect(() => {
        if (value === undefined) return localStorageObject.removeItem(key);
        localStorageObject.setItem(key, JSON.stringify(value));
    }, [key, value, localStorageObject]);

    return [value, setValue]
};

export default useStorage;