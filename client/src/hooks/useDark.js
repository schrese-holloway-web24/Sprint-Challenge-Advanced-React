import {useEffect} from 'react';
import {useLocalStorage} from './useLocalStorage';

export const useDark = (key, initVal) => {
    const [dark, setDark] = useLocalStorage(key, initVal);

    useEffect(() => {
        if(dark === true) {
            document.querySelector('body').classList.add('dark-mode')
        } else {
            document.querySelector('body').classList.remove('dark-mode')
        }
    }, [dark])
    return [dark, setDark]
}