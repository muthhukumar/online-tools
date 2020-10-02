import SampleText from './sampleText';
import randomData from '../../lib/genRandomText';

const Ttyping = () => {
    return (
        <div className="pt-2 min-h-screen sm:w-full md:w-11/12 mx-auto">
            <SampleText data={randomData} />
        </div>
    );
};

export default Ttyping;
