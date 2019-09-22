
### `Intro`
![GitHub Actions status | linter](https://github.com/anzerr/read.estimate/workflows/linter/badge.svg)
![GitHub Actions status | publish](https://github.com/anzerr/read.estimate/workflows/publish/badge.svg)
![GitHub Actions status | test](https://github.com/anzerr/read.estimate/workflows/test/badge.svg)

Medium's like reading time estimation.

#### `Install`
``` bash
npm install --save git+https://git@github.com/anzerr/read.estimate.git
npm install --save @anzerr/read.estimate
```

### `Example`
``` javascript
const estimate = require('read.estimate'),
	fs = require('fs');

const out = estimate(fs.readFileSync('./README.md').toString(), {
	strip: true,
	wpm: 225, // WORDS_PER_MIN
	ipm: 6, // IMAGE_PER_MIN
	scale: 1,
	pad: 0.25
});

console.log(out);
/*
{
	count: { words: 84, images: 3 },
	time: { words: 0.37333333333333335, images: 0.5 },
	minutes: 0.8733333333333333,
	text: '1 minutes'
}
*/
```