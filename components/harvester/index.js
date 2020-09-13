import { useEffect, useState } from 'react';
import firebase from '../../lib/db';

import DisplayDate from './displayDate';
import HarvestInput from './harvestInput';
import Message from './message';

const Harvester = () => {
    // harvesting the crop
    const [crop, setCrop] = useState('');
    const [message, setMessage] = useState({
        error: false,
        showMessage: false,
        content: '',
    });

    const closeMessage = () =>
        setMessage(state => ({ ...state, showMessage: false }));

    useEffect(() => {
        let timeout;

        if (message.showMessage)
            timeout = setTimeout(() => {
                closeMessage();
            }, 5000);

        return () => clearTimeout(timeout);
    }, [message.showMessage]);

    const submitHandler = e => {
        e.preventDefault();
        try {
            const db = firebase.firestore();
            db.collection('warehouse').add({
                crop,
                timestamp: new Date(),
            });
            setCrop('');
            setMessage(state => ({
                ...state,
                content: 'saved',
                showMessage: true,
            }));
        } catch (err) {
            setMessage({
                error: true,
                content: 'unable to save',
                showMessage: true,
            });
        }
    };

    return (
        <form
            className="flex items-center flex-col justify-center h-screen"
            onSubmit={submitHandler}
        >
            <DisplayDate />
            <HarvestInput onChange={e => setCrop(e.target.value)} crop={crop} />
            {message.showMessage && (
                <Message {...message} onClose={closeMessage} />
            )}
        </form>
    );
};

export default Harvester;
