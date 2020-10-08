import Page from '../components/page/index';
import HomeContent from '../components/home/index';
import firebase from '../lib/db';
import fs from 'fs';

const Home = () => {
    return (
        <Page title="Home">
            <HomeContent />
        </Page>
    );
};

const promise = () => {
    return new Promise((resolve, reject) => {
        try {
            const db = firebase.firestore();
            db.collection('warehouse').onSnapshot(snapshot => {
                const snap = snapshot.docs.map(doc => ({
                    id: doc.id,
                    crops: doc.data(),
                }));
                if (snap) resolve(snap);
            });
        } catch (err) {
            console.log(err);
            reject('something went wrong');
        }
    });
};

export async function getServerSideProps() {
    const response = await promise();
    const file = fs.createWriteStream('data.json');
    file.on('error', function(err) {
        console.log(err); /* error handling */
    });
    file.write(JSON.stringify(response));
    file.end();
    return {
        props: {},
    };
}

export default Home;
