import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';

const MAX_SIZE = 15;
const index = 0;

export const useText = data => {
    const [input, setInputValue] = useState('');
    const texts = data[0]
        .split(' ')
        .map(v => ({ content: v, id: uuid() }))
        .filter(v => v.content !== '');
    const [initial, setInitial] = useState(texts.slice(index, MAX_SIZE));
    useEffect(() => {
        if (input === initial[0].content) {
            setInitial(state => {
                state.shift();
                return state;
            });
            setInputValue('');
        }
    }, [input]);

    const setInput = e => {
        setInputValue(e.target.value);
    };
    useEffect(() => {
        console.log('length', initial.length);
        console.log(initial);
    }, [initial]);
    return [initial, input, setInput];
};
