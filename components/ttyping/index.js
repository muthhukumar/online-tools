import SampleText from './sampleText';
import englishWords from '../../lib/englishWords';

const Ttyping = () => {
    return (
        <div className="flex items-center justify-center pt-2 min-h-screen sm:w-full md:w-11/12 mx-auto">
            <SampleText data={englishWords} />
        </div>
    );
};

export default Ttyping;
