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
        <div className="py-4 rounded-lg overflow-hidden">
            <div className="w-full mx-auto flex justify-around items-center">
                <QuestCard {...questDataProps} />
                <button
                    type="submit"
                    onClick={openPopup}
                    className="w-24 text-gray-700 font-bold uppercase focus:outline-none bg-white py-8 shadow-lg rounded-lg"
                >
                    add
                </button>
            </div>
        </div>
    );
};

export default Header;
