import { useEffect, useRef } from 'react';

import RotateLeftIcon from '@material-ui/icons/RotateLeft';

import Text from './text';
import { useText } from './hooks/useText';
import { useTimer } from './hooks/useTimer';

const SampleText = ({ data }) => {
    const levelRef = useRef('hard');
    const [
        targetWords,
        newRandomWords,
        input,
        setInput,
        lettersCount,
        wordsCount,
        resetText,
    ] = useText(data, levelRef.current.value);
    const [seconds, minutes, startTimer, wps, resetTime] = useTimer(wordsCount);
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <div className="w-11/12 mx-auto rounded-sm shadow-lg flex-col rounded-lg">
            <div className="bg-gray-100 px-2 py-3 text-lg flex justify-between text-gray-700">
                <div className="flex items-center ">
                    {minutes}m : {seconds % 60}s
                    <button
                        type="button"
                        className="focus:outline-none ml-2"
                        onClick={() => resetTime()}
                    >
                        <RotateLeftIcon fontSize="small" />
                    </button>
                </div>
                <div> {wps} wps/min </div>
            </div>
            <div className="w-full flex flex-wrap p-2 border border-gray-300 mx-auto">
                {targetWords.map(text => (
                    <Text
                        content={text.content}
                        key={text.id}
                        color={text.color}
                    />
                ))}
            </div>
            <div className="border px-4 py-2 border-gray-200">
                <input
                    ref={inputRef}
                    value={input}
                    onChange={e => {
                        setInput(e);
                        startTimer();
                    }}
                    className="w-full rounded-sm focus:outline-none"
                />
            </div>
            <div className="flex items-center py-2 justify-between w-full bg-gray-100 text-gray-700">
                <div className="flex justify-between">
                    <div className="px-2 py-1 mx-2">{lettersCount} letters</div>
                    <div className="px-2 py-1 mx-2">{wordsCount} words </div>
                </div>
                <div className="flex items-center">
                    <select
                        ref={levelRef}
                        type="dropdown"
                        className="px-4 border border-lg border-teal-600 focus:outline-none mx-2 py-2 text-teal-600 bg-gray-100"
                    >
                        <option value="easy">easy</option>
                        <option value="medium">medium</option>
                        <option value="hard" selected>
                            hard
                        </option>
                    </select>
                    <button
                        onClick={() => {
                            resetText();
                            resetTime();
                        }}
                        type="button"
                        className="px-4 py-2 rounded-sm border border-red-400 text-red-400 mx-2 focus:outline-none hover:border-red-700 hover:text-red-700"
                    >
                        reset
                    </button>
                    <button
                        onClick={() => newRandomWords()}
                        type="button"
                        className="px-4 py-2 rounded-sm border border-blue-400 text-blue-400 mx-2 focus:outline-none hover:border-blue-700 hover:text-blue-700"
                    >
                        shuffle
                    </button>
                    <button
                        onClick={() => startTimer()}
                        type="button"
                        className="px-4 py-2 rounded-sm border border-green-400 text-green-400 mx-2 focus:outline-none hover:border-green-700 hover:text-green-700"
                    >
                        start timer
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SampleText;
