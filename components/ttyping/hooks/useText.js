import { useEffect, useState } from 'react';
import { genRandomWords } from '../../../lib/words/index';

export const useText = data => {
    const [input, setInputValue] = useState('');
    const [randomWords, setRandomWords] = useState(genRandomWords(data));
    const [index, setIndex] = useState(0);
    const [lettersCount, setLettersCount] = useState(0);
    const [wordsCount, setWordsCount] = useState(0);

    const newRandomWords = () => {
        setRandomWords(genRandomWords(data));
    };

    const reset = () => {
        setInputValue('');
        setRandomWords(genRandomWords(data));
        setIndex(0);
        setLettersCount(0);
        setWordsCount(0);
    };

    useEffect(() => {
        setRandomWords(state => {
            state[index] = {
                ...state[index],
                color: 'bg-gray-400 text-gray-800',
            };
            return state;
        });
    }, [index]);

    useEffect(() => {
        if (index < randomWords.length) {
            if (input.substring(input.length - 1) === ' ') {
                if (input.trim() === randomWords[index].content) {
                    setRandomWords(state => {
                        state[index] = {
                            ...state[index],
                            color: 'text-green-400 bg-none',
                        };
                        if (index < randomWords.length - 1) {
                            state[index + 1] = {
                                ...state[index + 1],
                                color: 'bg-gray-400 text-gray-800',
                            };
                        }
                        return state;
                    });
                    setWordsCount(state => state + 1);
                    setIndex(state => state + 1);
                    setLettersCount(state => state + input.trim().length);
                    setInputValue('');
                }
            }
        } else {
            setIndex(0);
            newRandomWords();
        }
    }, [input]);

    const setInput = e => setInputValue(e.target.value);

    return [
        randomWords,
        newRandomWords,
        input,
        setInput,
        lettersCount,
        wordsCount,
        reset,
    ];
};
