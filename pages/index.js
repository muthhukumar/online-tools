import Harvester from '../components/harvester/index';
import Page from '../components/page/index';

export default function Home() {
    return (
        <Page title="Harvester" description="Task harvester input page">
            <Harvester />
        </Page>
    );
}
