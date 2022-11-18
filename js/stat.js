'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_DELTA = 10; // это кратчайшее расстояние (как по оси x, так и по оси y) от грани многоугольника до ребра прямоугольника вписанного в наш многоугольник
var CLOUD_X = 100;
var CLOUD_Y = 10;

var renderCloud = function(ctx, CLOUD_X, CLOUD_Y, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(CLOUD_X, CLOUD_Y);
    ctx.lineTo(CLOUD_X +CLOUD_WIDTH/2, CLOUD_Y - CLOUD_DELTA);
    ctx.lineTo(CLOUD_X + CLOUD_WIDTH, CLOUD_Y);
    ctx.lineTo(CLOUD_X + CLOUD_WIDTH + CLOUD_DELTA, CLOUD_Y + CLOUD_HEIGHT/2);
    ctx.lineTo(CLOUD_X + CLOUD_WIDTH, CLOUD_Y + CLOUD_HEIGHT);
    ctx.lineTo(CLOUD_X + CLOUD_WIDTH/2, CLOUD_Y + CLOUD_HEIGHT + CLOUD_DELTA);
    ctx.lineTo(CLOUD_X,CLOUD_Y +CLOUD_HEIGHT);
    ctx.lineTo(CLOUD_X - CLOUD_DELTA, CLOUD_Y +CLOUD_HEIGHT/2);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
};

window.renderStatistics = function (ctx) {

    renderCloud(ctx, CLOUD_X + 10, CLOUD_Y + 10, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

    ctx.fillStyle = '#000';
    ctx.font = '16px Mono';
    ctx.fillText('Ура вы победили!', 255, 20);
    ctx.strokeText('Список результатов:', 245, 40);
};