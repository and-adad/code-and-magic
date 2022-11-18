'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_DELTA = 15;
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
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.beginPath();
    ctx.moveTo(110, 20);
    ctx.lineTo(320, 10);
    ctx.lineTo(530, 20);
    ctx.lineTo(540, 155);
    ctx.lineTo(530, 290);
    ctx.lineTo(320, 300);
    ctx.lineTo(110,290);
    ctx.lineTo(100, 155);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

    ctx.fillStyle = '#000';
    ctx.font = '16px Mono';
    ctx.fillText('Ура вы победили!', 255, 20);
    ctx.strokeText('Список результатов:', 245, 40);
};