'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var BAR_DELTA = 35; // это расстояние между столбиками гистограммы
var CLOUD_DELTA = 10; // это кратчайшее расстояние (как по оси x, так и по оси y) от грани многоугольника до ребра прямоугольника вписанного в наш многоугольник. А также расстояние, на которое тень отстает от облака.
var CLOUD_X = 100;
var CLOUD_Y = 10;
var TEXT_HEIGHT = 16;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;

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

    renderCloud(ctx, CLOUD_X + CLOUD_DELTA, CLOUD_Y + CLOUD_DELTA, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    ctx.fillText('Ура вы победили!', 255, 35);
    ctx.strokeText('Список результатов:', 245, 80);

    var players = ['Вы', 'Валя', 'Кекс', 'Катя'];

    for (var i = 0; i < players.length; i++) {
        console.log(i);
        ctx.fillText(players[i], CLOUD_X + BAR_DELTA + (BAR_WIDTH + BAR_DELTA)*i, CLOUD_Y + CLOUD_HEIGHT -CLOUD_DELTA);
        ctx.fillRect(CLOUD_X + BAR_DELTA + (BAR_WIDTH + BAR_DELTA)*i, CLOUD_Y + CLOUD_HEIGHT -CLOUD_DELTA - TEXT_HEIGHT, BAR_WIDTH, - BAR_HEIGHT);
    }
};