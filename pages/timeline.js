import { useState, useEffect } from 'react';

import Page from '../components/page/index';
import History from '../components/timeline/index';
import firebase from '../lib/db';
import { genData } from '../lib/genData';

const Timeline = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        try {
            const db = firebase.firestore();
            db.collection('warehouse').onSnapshot(snapshot => {
                const snap = snapshot.docs.map(doc => ({
                    id: doc.id,
                    crops: doc.data(),
                }));
                setData(snap);
            });
        } catch (err) {
            setData([]);
        }
    }, []);

    return (
        <Page title="Timeline">
            <History data={genData(data)} />
        </Page>
    );
};

export default Timeline;
