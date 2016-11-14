var canvas;
var ctx;
var interval = 1000;
var count = 0;

// develop the canvas application
function init() {
    canvas = document.getElementById('canvas');
    var width = 500;
    var height = 500;
    canvas.width = width;
    canvas.height = height;
    ctx = canvas.getContext('2d');
    intervalObject = setInterval(function () {
        ctx.clearRect(0, 0, width, height);
        drawSky();
        drawSun();
        drawGrass();
        drawHouse();
        drawSmoke();
    }, interval);
}

// combine the smoke elements
function drawSmoke() {
    if (count == 0) {
        smoke1();
    }
    if (count == 1) {
        smoke2();
    }
    if (count == 2) {
        smoke3();
    }
    if (count == 3) {
        smoke4();
    }
    count++;
    if (count == 4) count = 0;
}

// set the range control
function changed(e) {
    interval = 900 * (1 - e.value / 100);
    console.log(interval);
    clearInterval(intervalObject);
    intervalObject = setInterval(function () {
        ctx.clearRect(0, 0, 500, 500);
        drawSky();
        drawSun();
        drawGrass();
        drawHouse();
        drawSmoke();
    }, interval);
}

// draw the lowest smoke
function smoke1() {
    // save state
    ctx.save();
    var x = 150;
    var y = 230;
    ctx.translate(x, y);
    ctx.scale(1, 0.8);
    ctx.beginPath();
    ctx.arc(0, 0, Math.random() * 15 + 5, 0, 2 * Math.PI, false);
    ctx.closePath();
    ctx.arc(20, 0, Math.random() * 25, 0, 2 * Math.PI, false);
    ctx.closePath();
    ctx.arc(10, 20, Math.random() * 25, 0, 2 * Math.PI, false);
    ctx.closePath();
    // apply styling
    ctx.fillStyle = 'hsl(0, 0%, 45%)';
    ctx.fill();
    // restore to original state
    ctx.restore();
}

// draw the middle smoke
function smoke2() {
    // save state
    ctx.save();
    var x = 170;
    var y = 180;
    ctx.translate(x, y);
    ctx.scale(1, 0.7);
    ctx.beginPath();
    ctx.arc(0, 0, Math.random() * 25 + 15, 0, 2 * Math.PI, false);
    ctx.closePath();
    ctx.arc(25, -20, Math.random() * 35 + 10, 0, 2 * Math.PI, false);
    ctx.closePath();
    ctx.arc(25, 20, Math.random() * 35 + 1, 0, 2 * Math.PI, false);
    ctx.closePath();
    ctx.arc(40, 0, Math.random() * 35 + 15, 0, 2 * Math.PI, false);
    ctx.closePath();
    ctx.arc(50, -30, Math.random() * 25 + 5, 0, 2 * Math.PI, false);
    ctx.closePath();
    // apply styling
    ctx.fillStyle = 'hsl(0, 0%, 65%)';
    ctx.fill();
    // restore to original state
    ctx.restore();
}

// draw the second highest smoke
function smoke3() {
    // save state
    ctx.save();
    var x = 250;
    var y = 100;
    ctx.translate(x, y);
    ctx.scale(1, 0.7);
    ctx.beginPath();
    ctx.arc(0, 0, Math.random() * 35 + 15, 0, 2 * Math.PI, false);
    ctx.closePath();
    ctx.arc(25, -35, Math.random() * 45 + 10, 0, 2 * Math.PI, false);
    ctx.closePath();
    ctx.arc(25, 30, Math.random() * 45 + 10, 0, 2 * Math.PI, false);
    ctx.closePath();
    ctx.arc(50, 0, Math.random() * 45 + 15, 0, 2 * Math.PI, false);
    ctx.closePath();
    ctx.arc(70, -40, Math.random() * 35 + 5, 0, 2 * Math.PI, false);
    ctx.closePath();
    // apply styling
    ctx.fillStyle = 'hsl(0, 0%, 75%)';
    ctx.fill();
    // restore to original state
    ctx.restore();
}

// draw the highest smoke
function smoke4() {
    // save state
    ctx.save();
    var x = 350;
    var y = 0;
    ctx.translate(x, y);
    ctx.scale(1, 1);
    ctx.beginPath();
    ctx.arc(0, 0, Math.random() * 35 + 40, 0, 2 * Math.PI, false);
    ctx.closePath();
    ctx.arc(25, -35, Math.random() * 45 + 20, 0, 2 * Math.PI, false);
    ctx.closePath();
    ctx.arc(25, 30, Math.random() * 45 + 15, 0, 2 * Math.PI, false);
    ctx.closePath();
    ctx.arc(50, 0, Math.random() * 45 + 25, 0, 2 * Math.PI, false);
    ctx.closePath();
    ctx.arc(70, -40, Math.random() * 35 + 35, 0, 2 * Math.PI, false);
    ctx.closePath();
    // apply styling
    ctx.fillStyle = 'hsl(0, 0%, 85%)';
    ctx.fill();
    // restore to original state
    ctx.restore();
}

// draw the sky
function drawSky() {
    ctx.beginPath();
    ctx.rect(0, 0, 500, 500);
    // apply styling
    ctx.fillStyle = "#87CEFA";
    ctx.fill();
    ctx.closePath();
}

// draw the house
function drawHouse() {
    // save state
    ctx.save();
    var x = 60;
    var y = 130;
    ctx.translate(x, y);
    ctx.scale(0.8, 0.8);

    // The path
    ctx.beginPath();
    ctx.moveTo(173, 374);
    ctx.lineTo(192, 354);
    ctx.lineTo(600, 435);
    ctx.lineTo(500, 500);
    // apply styling
    ctx.fillStyle = "gray";
    ctx.fill();

    //The chimney
    //The chimney hole
    ctx.beginPath();
    ctx.moveTo(95, 178);
    ctx.lineTo((113), 178);
    ctx.lineTo(127, 163);
    ctx.lineTo(110, 163);
    ctx.closePath();
    // apply styling
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.stroke();

    //The chimney front facing side
    ctx.beginPath();
    ctx.moveTo(95, 178);
    ctx.lineTo(95, 226);
    ctx.lineTo(113, 226);
    ctx.lineTo(113, 178);
    ctx.closePath();
    // apply styling
    ctx.fillStyle = "maroon";
    ctx.fill();
    ctx.stroke();

    //The chimney right side
    ctx.beginPath();
    ctx.moveTo(113, 178);
    ctx.lineTo(113, 226);
    ctx.lineTo(127, 226);
    ctx.lineTo(127, 163);
    ctx.closePath();
    // apply styling
    ctx.fillStyle = "maroon";
    ctx.fill();
    ctx.stroke();

    //Front facing side | Left side | Pentagon
    ctx.beginPath();
    ctx.moveTo(43, 296);
    ctx.lineTo(43, 402);
    ctx.lineTo(143, 402);
    ctx.lineTo(143, 295);
    ctx.lineTo(94, 244);
    ctx.lineTo(43, 296);
    ctx.closePath();
    // apply styling
    ctx.fillStyle = "#FFFE74";
    ctx.fill();
    ctx.stroke();

    //Side facing with door | Left side | Rectangle
    ctx.beginPath();
    ctx.moveTo(143, 295);
    ctx.lineTo(143, 402);
    ctx.lineTo(227, 319);
    ctx.lineTo(227, 212);
    ctx.lineTo(143, 295);
    ctx.closePath();
    // apply styling
    ctx.fillStyle = "#FFFE74";
    ctx.fill();
    ctx.stroke();

    //Front facing garage wall | Right side | Rectangle
    ctx.beginPath();
    ctx.moveTo(227, 319);
    ctx.lineTo(383, 319);
    ctx.lineTo(383, 212);
    ctx.lineTo(227, 212);
    ctx.lineTo(227, 319);
    ctx.closePath();
    // apply styling
    ctx.fillStyle = "#FFFE74";
    ctx.fill();
    ctx.stroke();

    //Garage wall | Right side | Rectangle
    ctx.beginPath();
    ctx.moveTo(383, 319);
    ctx.lineTo(440, 257);
    ctx.lineTo(440, 160);
    ctx.lineTo(383, 212);
    ctx.lineTo(383, 319);
    ctx.closePath();
    // apply styling
    ctx.fillStyle = "#FFFE74";
    ctx.fill();
    ctx.stroke();

    // The roof
    //front facing arch left
    ctx.beginPath();
    ctx.moveTo(94, 227);
    ctx.lineTo(94, 244);
    ctx.lineTo(29, 310);
    ctx.lineTo(29, 292);
    ctx.lineTo(94, 227);
    ctx.closePath();
    // apply styling
    ctx.fillStyle = "#B62121";
    ctx.fill();
    ctx.stroke();

    //front facing arch right
    ctx.beginPath();
    ctx.moveTo(94, 227);
    ctx.lineTo(94, 244);
    ctx.lineTo(157, 310);
    ctx.lineTo(157, 292);
    ctx.lineTo(94, 227);
    ctx.closePath();
    // apply styling
    ctx.fillStyle = "#B62121";
    ctx.fill();
    ctx.stroke();

    //Roof extend right
    ctx.beginPath();
    ctx.moveTo(94, 227);
    ctx.lineTo(169, 152);
    ctx.lineTo(230, 215);
    ctx.lineTo(157, 292);
    ctx.lineTo(94, 227);
    ctx.closePath();
    // apply styling
    ctx.fillStyle = "#B62121";
    ctx.fill();
    ctx.stroke();

    //Roof thickness right
    ctx.beginPath();
    ctx.moveTo(157, 292);
    ctx.lineTo(157, 310);
    ctx.lineTo(230, 234);
    ctx.lineTo(230, 215);
    ctx.lineTo(157, 292);
    ctx.closePath();
    // apply styling
    ctx.fillStyle = "#B62121";
    ctx.fill();
    ctx.stroke();

    //Roof thickness to the right at the back
    ctx.beginPath();
    ctx.moveTo(230, 234);
    ctx.lineTo(393, 234);
    ctx.lineTo(393, 215);
    ctx.lineTo(230, 215);
    ctx.lineTo(230, 234);
    ctx.closePath();
    // apply styling
    ctx.fillStyle = "#B62121";
    ctx.fill();
    ctx.stroke();

    //Roof back right thing
    ctx.beginPath();
    ctx.moveTo(230, 234);
    ctx.lineTo(393, 234);
    ctx.lineTo(393, 215);
    ctx.lineTo(230, 215);
    ctx.lineTo(230, 234);
    ctx.closePath();
    // apply styling
    ctx.fillStyle = "#B62121";
    ctx.fill();
    ctx.stroke();

    //Back straight Roof
    ctx.beginPath();
    ctx.moveTo(230, 215);
    ctx.lineTo(169, 152);
    ctx.lineTo(408, 152);
    ctx.lineTo(393, 215);
    ctx.lineTo(230, 215);
    ctx.closePath();
    // apply styling
    ctx.fillStyle = "#B62121";
    ctx.fill();
    ctx.stroke();

    //Roof front | Right extenstion
    ctx.beginPath();
    ctx.moveTo(408, 152);
    ctx.lineTo(449, 160);
    ctx.lineTo(393, 215);
    ctx.lineTo(408, 152);
    ctx.closePath();
    // apply styling
    ctx.fillStyle = "#B62121";
    ctx.fill();
    ctx.stroke();

    //Roof Front bottom | Right extension
    ctx.beginPath();
    ctx.moveTo(393, 215);
    ctx.lineTo(393, 234);
    ctx.lineTo(449, 180);
    ctx.lineTo(449, 160);
    ctx.lineTo(393, 215);
    ctx.closePath();
    // apply styling
    ctx.fillStyle = "#B62121";
    ctx.fill();
    ctx.stroke();

    //Door
    ctx.beginPath();
    ctx.moveTo(173, 374);
    ctx.lineTo(192, 354);
    ctx.lineTo(192, 306);
    ctx.lineTo(173, 325);
    ctx.lineTo(173, 374);
    ctx.closePath();
    // apply styling
    ctx.fillStyle = "#8A4300";
    ctx.fill();
    ctx.stroke();

    //Garage Outline
    ctx.beginPath();
    ctx.moveTo(395, 306);
    ctx.lineTo(430, 268);
    ctx.lineTo(430, 210);
    ctx.lineTo(395, 248);
    ctx.lineTo(395, 306);
    ctx.closePath();
    // apply styling
    ctx.fillStyle = "#C2BAB3";
    ctx.fill();
    ctx.stroke();

    //Garage slides
    ctx.beginPath();
    ctx.moveTo(395, 293);
    ctx.lineTo(430, 255);
    ctx.closePath();
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(395, 280);
    ctx.lineTo(430, 242);
    ctx.closePath();
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(395, 267);
    ctx.lineTo(430, 229);
    ctx.closePath();
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(395, 254);
    ctx.lineTo(430, 216);
    ctx.closePath();
    ctx.stroke();

    //MainWindow
    ctx.beginPath();
    ctx.rect(245, 245, 120, 50);
    ctx.closePath();
    // apply styling
    ctx.fillStyle = "#007DFF";
    ctx.fill();
    ctx.stroke();

    //Window bottom ledge
    ctx.beginPath();
    ctx.moveTo(240, 300);
    ctx.lineTo(370, 300);
    ctx.lineTo(370, 295);
    ctx.lineTo(240, 295);
    ctx.lineTo(240, 300);
    ctx.closePath();
    // apply styling
    ctx.fillStyle = "maroon";
    ctx.fill();
    ctx.stroke();

    //Window cross
    ctx.beginPath();
    ctx.moveTo(245, 273);
    ctx.lineTo(365, 273);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(300, 245);
    ctx.lineTo(300, 295);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    // restore to original state
    ctx.restore();
}

// draw the ground
function drawGrass() {
    // save state
    ctx.save();
    var x = 0;
    var y = 0;
    ctx.translate(x, y);
    ctx.beginPath();
    ctx.arc(250, 1200, 900, 0, 2 * Math.PI, false);
    // apply styling
    ctx.fillStyle = 'rgb(11,195,72)';
    ctx.fill();
    // restore to original state
    ctx.restore();
}

// draw the Sun
function drawSun() {
    ctx.beginPath();
    ctx.arc(10, 10, 70, 0, 2 * Math.PI);
    ctx.closePath();
    // apply styling
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.stroke();
}

