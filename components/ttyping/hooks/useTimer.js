import { useState, useEffect } from 'react';

export const useTimer = (words = 0) => {
    const [startTime, setStartTime] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [wps, setWps] = useState(0);

    const reset = () => {
        setStartTime(0);
        setSeconds(0);
        setMinutes(0);
        setWps(0);
    };

    const startTimer = () => {
        if (startTime === 0) setStartTime(new Date().getTime());
    };

    useEffect(() => {
        let interval;
        if (startTime === 0) return;
        interval = setInterval(() => {
            setSeconds(
                Math.floor(
                    ((new Date().getTime() - startTime) % (1000 * 60 * 60)) /
                        1000
                )
            );
            setMinutes(
                Math.floor(
                    ((new Date().getTime() - startTime) % (1000 * 60 * 60)) /
                        (1000 * 60)
                )
            );
        }, 1000);
        return () => clearInterval(interval);
    }, [startTime]);

    useEffect(() => {
        if (words === 0) return setWps(0);
        setWps(Math.floor((words / seconds) * 60));
    }, [minutes, words]);

    return [seconds, minutes, startTimer, wps, reset];
};
