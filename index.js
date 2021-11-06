let brain = require('brain.js');
let express = require('express');

let net = new brain.NeuralNetwork();

net.train(
	[
		{
			input: {
				r: getCoefficientR(205, 92, 92),
				g: getCoefficientG(205, 92, 92),
				b: getCoefficientB(205, 92, 92),
			},
			output: { white: 1 },
		},
		{
			input: {
				r: getCoefficientR(240, 128, 128),
				g: getCoefficientG(240, 128, 128),
				b: getCoefficientB(240, 128, 128),
			},
			output: { black: 1 },
		},
		{
			input: {
				r: getCoefficientR(250, 128, 114),
				g: getCoefficientG(250, 128, 114),
				b: getCoefficientB(250, 128, 114),
			},
			output: { black: 1 },
		},
		{
			input: {
				r: getCoefficientR(233, 150, 122),
				g: getCoefficientG(233, 150, 122),
				b: getCoefficientB(233, 150, 122),
			},
			output: { black: 1 },
		},
		{
			input: {
				r: getCoefficientR(255, 160, 122),
				g: getCoefficientG(255, 160, 122),
				b: getCoefficientB(255, 160, 122),
			},
			output: { black: 1 },
		},
		{
			input: {
				r: getCoefficientR(220, 20, 60),
				g: getCoefficientG(220, 20, 60),
				b: getCoefficientB(220, 20, 60),
			},
			output: { white: 1 },
		},
		{
			input: {
				r: getCoefficientR(255, 0, 0),
				g: getCoefficientG(255, 0, 0),
				b: getCoefficientB(255, 0, 0),
			},
			output: { white: 1 },
		},
		{
			input: {
				r: getCoefficientR(178, 34, 34),
				g: getCoefficientG(178, 34, 34),
				b: getCoefficientB(178, 34, 34),
			},
			output: { white: 1 },
		},
		{
			input: {
				r: getCoefficientR(139, 0, 0),
				g: getCoefficientG(139, 0, 0),
				b: getCoefficientB(139, 0, 0),
			},
			output: { white: 1 },
		},
		{
			input: {
				r: getCoefficientR(255, 192, 203),
				g: getCoefficientG(255, 192, 203),
				b: getCoefficientB(255, 192, 203),
			},
			output: { black: 1 },
		},
		{
			input: {
				r: getCoefficientR(255, 182, 193),
				g: getCoefficientG(255, 182, 193),
				b: getCoefficientB(255, 182, 193),
			},
			output: { black: 1 },
		},
		{
			input: {
				r: getCoefficientR(255, 105, 180),
				g: getCoefficientG(255, 105, 180),
				b: getCoefficientB(255, 105, 180),
			},
			output: { white: 1 },
		},
		{
			input: {
				r: getCoefficientR(255, 20, 147),
				g: getCoefficientG(255, 20, 147),
				b: getCoefficientB(255, 20, 147),
			},
			output: { white: 1 },
		},
		{
			input: {
				r: getCoefficientR(199, 21, 133),
				g: getCoefficientG(199, 21, 133),
				b: getCoefficientB(199, 21, 133),
			},
			output: { white: 1 },
		},
		{
			input: {
				r: getCoefficientR(219, 112, 147),
				g: getCoefficientG(219, 112, 147),
				b: getCoefficientB(219, 112, 147),
			},
			output: { white: 1 },
		},
		{
			input: {
				r: getCoefficientR(255, 160, 122),
				g: getCoefficientG(255, 160, 122),
				b: getCoefficientB(255, 160, 122),
			},
			output: { black: 1 },
		},
		{
			input: {
				r: getCoefficientR(255, 127, 80),
				g: getCoefficientG(255, 127, 80),
				b: getCoefficientB(255, 127, 80),
			},
			output: { black: 1 },
		},
		{
			input: {
				r: getCoefficientR(255, 69, 0),
				g: getCoefficientG(255, 69, 0),
				b: getCoefficientB(255, 69, 0),
			},
			output: { black: 1 },
		},
		{
			input: {
				r: getCoefficientR(255, 99, 71),
				g: getCoefficientG(255, 99, 71),
				b: getCoefficientB(255, 99, 71),
			},
			output: { black: 1 },
		},
		{
			input: {
				r: getCoefficientR(255, 255, 0),
				g: getCoefficientG(255, 255, 0),
				b: getCoefficientB(255, 255, 0),
			},
			output: { black: 1 },
		},
		{
			input: {
				r: getCoefficientR(250, 250, 210),
				g: getCoefficientG(250, 250, 210),
				b: getCoefficientB(250, 250, 210),
			},
			output: { black: 1 },
		},
		{
			input: {
				r: getCoefficientR(255, 218, 185),
				g: getCoefficientG(255, 218, 185),
				b: getCoefficientB(255, 218, 185),
			},
			output: { black: 1 },
		},
		{
			input: {
				r: getCoefficientR(189, 183, 107),
				g: getCoefficientG(189, 183, 107),
				b: getCoefficientB(189, 183, 107),
			},
			output: { black: 1 },
		},
		{
			input: {
				r: getCoefficientR(230, 230, 250),
				g: getCoefficientG(230, 230, 250),
				b: getCoefficientB(230, 230, 250),
			},
			output: { black: 1 },
		},
		{
			input: {
				r: getCoefficientR(238, 130, 238),
				g: getCoefficientG(238, 130, 238),
				b: getCoefficientB(238, 130, 238),
			},
			output: { black: 1 },
		},
		{
			input: {
				r: getCoefficientR(218, 112, 214),
				g: getCoefficientG(218, 112, 214),
				b: getCoefficientB(218, 112, 214),
			},
			output: { white: 1 },
		},
		{
			input: {
				r: getCoefficientR(75, 0, 130),
				g: getCoefficientG(75, 0, 130),
				b: getCoefficientB(75, 0, 130),
			},
			output: { white: 1 },
		},
		{
			input: {
				r: getCoefficientR(255, 248, 220),
				g: getCoefficientG(255, 248, 220),
				b: getCoefficientB(255, 248, 220),
			},
			output: { black: 1 },
		},
		{
			input: {
				r: getCoefficientR(165, 42, 42),
				g: getCoefficientG(165, 42, 42),
				b: getCoefficientB(165, 42, 42),
			},
			output: { white: 1 },
		},
		{
			input: {
				r: getCoefficientR(173, 255, 47),
				g: getCoefficientG(173, 255, 47),
				b: getCoefficientB(173, 255, 47),
			},
			output: { black: 1 },
		},
		{
			input: {
				r: getCoefficientR(0, 100, 0),
				g: getCoefficientG(0, 100, 0),
				b: getCoefficientB(0, 100, 0),
			},
			output: { white: 1 },
		},
		{
			input: {
				r: getCoefficientR(50, 205, 50),
				g: getCoefficientG(50, 205, 50),
				b: getCoefficientB(50, 205, 50),
			},
			output: { black: 1 },
		},
		{
			input: {
				r: getCoefficientR(60, 179, 113),
				g: getCoefficientG(60, 179, 113),
				b: getCoefficientB(60, 179, 113),
			},
			output: { white: 1 },
		},
		{
			input: {
				r: getCoefficientR(85, 107, 47),
				g: getCoefficientG(85, 107, 47),
				b: getCoefficientB(85, 107, 47),
			},
			output: { white: 1 },
		},
	],
	{
		iterations: 20000,
		learningRate: 0.3,
		momentum: 0.1,
	}
);

function getCoefficientR(r, g, b) {
	return r / (r + g + b);
}

function getCoefficientG(r, g, b) {
	return g / (r + g + b);
}

function getCoefficientB(r, g, b) {
	return b / (r + g + b);
}

function selectColor(output) {
	let max = 0;
	let color = 'red';
	for (let i in output) {
		let value = output[i];
		if (value > max) {
			max = value;
			color = i;
		}
	}
	return color;
}

let app = express();
app.use('/', function (req, res) {
	let output = net.run({
		r: getCoefficientR(255, 230, 105),
		g: getCoefficientG(255, 230, 105),
		b: getCoefficientB(255, 230, 105),
	});
	res.send(selectColor(output));
});

app.listen(3000, () => {
	console.log('i am listening port 3000');
});
