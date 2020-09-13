import QuestCard from './questcard';
import isToday from '../../lib/isToday';

const Header = ({ openPopup, data }) => {
    const questDataProps = {
        conquered: data.filter(todos => todos.completed === 'completed').length,
        quest: data.filter(todos => todos.completed !== 'completed').length,
        total: data.length,
        todayQuest: data.filter(todos => isToday(new Date(todos.timestamp)))
            .length,
    };

    return (
        <div className="py-4 bg-teal-400 rounded-lg overflow-hidden">
            <QuestCard {...questDataProps} />
            <div className="w-10/12 mx-auto flex justify-between items-center">
                <div className=" font-bold text-white text-3xl py-2">Stack</div>
                <button
                    onClick={openPopup}
                    className="w-16 text-gray-700 font-bold uppercase focus:outline-none bg-white py-2 rounded-lg"
                >
                    add
                </button>
            </div>
        </div>
    );
};

export default Header;
