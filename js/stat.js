'use strict';

window.renderStatistics = function (ctx) {
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
};