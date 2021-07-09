import React, { useEffect, useState } from 'react';

function usePersistedState(key, initialState) {
    const [state, setState] = useState(() => {
    
        if (typeof window !== 'undefined') {
            const storageValue = localStorage.getItem(key);
            if (storageValue) {
                return JSON.parse(storageValue);
            } else {
                return initialState;
            }
        } else {
            return initialState;
        }
       
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
    }, [key, state]);

    return [state, setState];
}

export default usePersistedState;