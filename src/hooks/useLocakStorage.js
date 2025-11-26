import { useEffect, useState } from "react"

const useLocalStorage = (key, initialstate) => {
    const [state, setState] = useState(() => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : initialstate;

        } catch (error) {
            console.log(error)
            return initialstate;
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(state));
        } catch (error) {
            console.log(error);
        }
    }, [key, state]);

    return [state, setState];
}

export default useLocalStorage;