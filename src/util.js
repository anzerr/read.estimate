
class Util {

	wordCount(str) {
		return (str.match(/\w+/g) || []).length;
	}

	imageCount(str) {
		return (str.match(/\w+\.(jpg|png|svg|gif)/g) || []).length;
	}

	strip(str) {
		let out = str.replace(/<\w+(\s+("[^"]*"|\\'[^\\']*\'|[^>])+)?>|<\/\w+>/gi, '');
		out = out.replace(/^\s+/, '').replace(/\s+$/, '');
		return out;
	}

}

module.exports = new Util();
