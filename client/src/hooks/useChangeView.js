import {useEffect} from 'react';
import {useLocalStorage} from './useLocalStorage';

export const useChangeView = (key, initVal) => {
    const [view, setView] = useLocalStorage(key, initVal);

    useEffect(() => {
        if (view === true) {
            document.querySelector('body').classList.add('change-view')
        } else {
            document.querySelector('body').classList.remove('change-view')
        }
    }, [view])
    return[view, setView]
}