
const util = require('./src/util.js'),
	ENUM = require('./src/enum.js');

module.exports = (str, options = {}) => {
	str = str.replace(/(\r|\n)+/g, '');
	const count = {
			words: options.strip === false ? util.wordCount(str) : util.wordCount(util.strip(str)),
			images: util.imageCount(str)
		}, time = {
			words: count.words / (options.wpm || ENUM.WORDS_PER_MIN),
			images: count.images / (options.ipm || ENUM.IMAGE_PER_MIN),
		}, total = (time.words + time.images) * (options.scale || 1);

	return {
		count: count,
		time: time,
		minutes: total,
		text: (total < 0.5) ? 'less than a minute' : `${Math.round(total)} minutes`
	};
};
