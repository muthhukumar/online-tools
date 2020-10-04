import { v4 as uuid } from 'uuid';

const MAX_SIZE = 15;

export const genRandomIndex = () => {
    const index = Math.floor(Math.random() * 1000);
    if (index > MAX_SIZE && index + MAX_SIZE < 1000) return index;
    return genRandomIndex;
};

export const shuffleArray = arr => {
    const data = [...arr];
    for (let i = data.length - 1; i > 0; i -= 1) {
        const newIndex = Math.floor(Math.random() * (i + 1));
        const temp = data[i];
        data[i] = data[newIndex];
        data[newIndex] = temp;
    }
    return data;
};

export const genRandomWords = (data, max_size = MAX_SIZE) => {
    const randomWords = [];
    for (let i = 0; i < max_size; i += 1) {
        const index = genRandomIndex();
        if (data[index])
            randomWords.push({
                content: data[index].toString().trim(),
                id: uuid(),
                color: null,
            });
    }
    return randomWords;
};
