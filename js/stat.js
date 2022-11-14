'use strict';

var renderCloud = function (ctx, x, y, color) {
	ctx.fillStyle = color;
	ctx.fillRect(x, y, 500, 200);
};

window.renderStatistics = function (ctx) {
	ctx.fillStyle = 'rgba(0, 0, 0, 0.3';
	ctx.fillRect(110, 60, 500, 200);

	ctx.fillStyle = '#fff';
	ctx.fillRect(100, 50, 500, 200);
};
