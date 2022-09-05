import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

function usePersistedState(key, initialState) {
    const [state, setState] = useState(() => {
        const storageValue = Cookies.get(key);
        if (storageValue) {
            return JSON.parse(storageValue);
        } else {
            return initialState;
        }
    });

    useEffect(() => {
        Cookies.set(key, JSON.stringify(state))
    }, [key, state]);

    return [state, setState];
}

export default usePersistedState;