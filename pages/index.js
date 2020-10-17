import Page from '../components/page/index';
import HomeContent from '../components/home/index';
import firebase from '../lib/db';

const Home = () => {
    return (
        <Page title="Home">
            <HomeContent />
        </Page>
    );
};

export default Home;
