let can = document.getElementById("canvas"),
    cxt = can.getContext('2d');

time();
setInterval(function(){
    time();
},1000)

function time(){
    let time = new Date(),
        h = time.getHours(),
        m = time.getMinutes(),
        s = time.getSeconds();
    h = h>12 ? h-12 : h;

    //清画布
    cxt.clearRect(0,0,300,300);

    //两个表圆
    cxt.beginPath();
    cxt.arc(150,150,148,0,Math.PI*2,true);
    cxt.strokeStyle = '#f0f';
    cxt.lineWidth = 5;
    cxt.stroke();

    cxt.beginPath();
    cxt.arc(150,150,140,0,Math.PI*2,true);
    cxt.strokeStyle = '#ff0';
    cxt.lineWidth = 2;
    cxt.stroke();

    // 小时刻度
    for(let i=0; i<12; i++){
        cxt.save();
        cxt.translate(150,150);
        cxt.rotate(30*i*Math.PI/180);
        cxt.lineWidth = 5;
        cxt.beginPath();
        cxt.strokeStyle = '#0f0';
        cxt.moveTo(0,120);
        cxt.lineTo(0,138);
        cxt.stroke();
        cxt.restore();
    }
    
    //分钟刻度 
    for(let j=0; j<60; j++){
        cxt.save();
        cxt.translate(150,150);
        cxt.rotate(6*j*Math.PI/180);
        cxt.lineWidth = 3;
        cxt.beginPath();
        cxt.strokeStyle = '#0f0';
        cxt.moveTo(0,130);
        cxt.lineTo(0,138);
        cxt.stroke();
        cxt.restore();
    }

    // 时针
    cxt.save();
    cxt.translate(150,150);
    cxt.rotate(h*30*Math.PI/180);
    cxt.beginPath();
    cxt.lineWidth = 5;
    cxt.moveTo(0,6);
    cxt.lineTo(0,-60);
    cxt.strokeStyle = 'black';
    cxt.stroke();
    cxt.restore();

    //分针
    cxt.save();
    cxt.beginPath();
    cxt.translate(150,150);
    cxt.rotate(m*6*Math.PI/180);
    cxt.lineWidth = 4;
    cxt.moveTo(0,8);
    cxt.lineTo(0,-90);
    cxt.strokeStyle = 'brown';
    cxt.stroke();
    cxt.restore();

    // 秒针
    cxt.save();
    cxt.translate(150,150);
    cxt.rotate(s*6*Math.PI/180);
    cxt.beginPath();
    cxt.lineWidth = 3;
    cxt.moveTo(0,10);
    cxt.lineTo(0,-110);
    cxt.strokeStyle = 'grey';
    cxt.stroke();
    cxt.restore();

    //中心圆
    cxt.beginPath();
    cxt.arc(150,150,5,0,2*Math.PI,true);
    cxt.fillStyle = '#462263';
    cxt.fill();
}




