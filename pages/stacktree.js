import { useState, useEffect } from 'react';

import Page from '../components/page/index';
import StackTreePage from '../components/stacktree/index';
import firebase from '../lib/db';

const StackTree = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        try {
            const db = firebase.firestore();
            db.collection('stack').onSnapshot(snapshot => {
                const snap = snapshot.docs.map(doc => ({
                    id: doc.id,
                    description: doc.data().description,
                    title: doc.data().title,
                    completed: doc.data().completed,
                    timestamp: new Date(doc.data().timestamp).toDateString(),
                }));
                setData(snap);
            });
        } catch (err) {
            setData([]);
        }
    }, []);

    return (
        <Page
            title="Stacktree"
            description="A simple todo app using firebase realtime firestore database and Nextjs framework"
        >
            <StackTreePage data={data} />
        </Page>
    );
};

export default StackTree;
