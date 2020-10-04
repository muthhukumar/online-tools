import Entry from './entry';

const Date = ({ data, date }) => {
    return (
        <div className="py-1 w-11/12 mx-auto border-l-4 border-teal-500 px-2">
            <div className="text-lg font-sans bg-teal-100 py-2 px-2 text-gray-500 font-bold">
                {date}
            </div>
            {data.map(entry => (
                <Entry key={entry.id} entry={entry.content} />
            ))}
        </div>
    );
};

export default Date;
