import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';

const HarvestInput = ({ crop, onChange }) => (
    <div className="flex items-center justify-center w-full h-16 px-4 py-2 max-w-xl border border-teal-400 rounded-lg">
        <input
            placeholder="Harvest"
            className="text-xl px-4 focus:outline-none py-2 w-4/5 mx-2 h-12"
            value={crop}
            onChange={onChange}
        />
        <button type="submit" className="outline-none border-none">
            <LibraryBooksIcon fontSize="large" className="text-teal-400" />
        </button>
    </div>
);

export default HarvestInput;
