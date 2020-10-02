import Text from './text';
import { useText } from './hooks/useText';

const SampleText = ({ data }) => {
    const [initial, input, setInput] = useText(data);

    return (
        <div className="w-11/12 mx-auto border border-gray-300 rounded-sm">
            {initial.map(text => (
                <Text content={text.content} key={text.id} />
            ))}
            <input
                value={input}
                onChange={setInput}
                className="w-full border-gray-400 rounded-sm"
            />
        </div>
    );
};

export default SampleText;
