'use strict';

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

    ctx.fillStyle = '#fff';
    ctx.beginPath();
    ctx.moveTo(100, 10);
    ctx.lineTo(310, 0);
    ctx.lineTo(520, 10);
    ctx.lineTo(530, 145);
    ctx.lineTo(520, 280);
    ctx.lineTo(310, 290);
    ctx.lineTo(100,280);
    ctx.lineTo(90, 145);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();

    ctx.fillStyle = '#000';
    ctx.font = '16px Mono';
    ctx.fillText('Ура вы победили!', 255, 20);
    ctx.strokeText('Список результатов:', 245, 40);
};