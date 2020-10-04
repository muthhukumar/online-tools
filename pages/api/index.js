// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { genRandomWords } = require('../../lib/words/index');
const data = require('../../lib/englishWords');

export default (req, res) => {
    res.statusCode = 200;
    res.json(genRandomWords(data));
};
