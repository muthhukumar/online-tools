import Quest from './quest';

const QuestCard = ({ conquered, quest, todayQuest, total }) => {
    return (
        <div className="w-9/12 flex items-center justify-evenly bg-white py-3 rounded rounded-lg shadow-lg">
            <Quest title="completed" count={conquered} />
            <Quest title="todos" count={quest} />
            <Quest title="total" count={total} />
            <Quest title="Today task" count={todayQuest} />
        </div>
    );
};

export default QuestCard;
