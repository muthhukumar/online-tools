import TimelineDate from './date';

const History = ({ data }) => {
    return (
        <div className="md:px-1">
            {data.map(crop => (
                <TimelineDate date={crop.date} key={crop.id} data={crop.data} />
            ))}
        </div>
    );
};

export default History;
