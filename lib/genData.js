import { v4 as uuid } from 'uuid';

export const genData = data => {
    const dates = [];
    data.forEach(crop => {
        const newDate = new Date(crop.crops.timestamp).toDateString();
        if (!dates.includes(newDate)) dates.push(newDate);
    });
    const result = dates.map(date => {
        const objData = {};
        data.forEach(crop => {
            const newDate = new Date(crop.crops.timestamp).toDateString();
            if (newDate === date) {
                objData.date = date;
                objData.id = uuid();
                if (!Array.isArray(objData.data)) objData.data = [];
                objData.data.push({ content: crop.crops.crop, id: uuid() });
            }
        });

        return objData;
    });
    return result.sort((a, b) => new Date(b.date) - new Date(a.date));
};
