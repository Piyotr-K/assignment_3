var canvas = document.getElementById("housePicture");
var draw = canvas.getContext("2d");

function drawHouse() {
    
    function drawSky() {
        //draws the sky
        draw.beginPath();
        draw.fillStyle = "#87CEFA";
        draw.rect(0, 0, 500, 500);
        draw.fill();
        draw.closePath();
    }
    drawSky();
    
    function drawGround() {
        //The ground
        draw.fillStyle = "green";
        draw.beginPath();
        draw.rect(0, 235, 500, 500);
        draw.closePath();
        draw.fill();
        draw.stroke();
    }
    drawGround();
    
    function drawChimney() {
        var x = 95;
        var y = 178;
        //The chimney hole
        draw.fillStyle = "black";
        draw.beginPath();
        draw.moveTo(x, y);
        draw.lineTo((x + 18), y);
        draw.lineTo(127, 163);
        draw.lineTo(110, 163);
        draw.closePath();
        draw.fill();
        draw.stroke();
        //The chimney front facing side
        draw.fillStyle = "maroon";
        draw.beginPath();
        draw.moveTo(x, y);
        draw.lineTo(x, (y + 48));
        draw.lineTo((x + 18), (y + 48));
        draw.lineTo((x + 18), y);
        draw.closePath();
        draw.fill();
        draw.stroke();
        //The chimney right side
        draw.fillStyle = "maroon";
        draw.beginPath();
        draw.moveTo((x + 18), y);
        draw.lineTo((x + 18), (y + 48));
        draw.lineTo((x + 32), (y + 48));
        draw.lineTo((x + 32), 163);
        draw.closePath();
        draw.fill();
        draw.stroke();
        
    }
    drawChimney();
    drawWalls();
    function drawRoof() {
        var x = 94;
        var y = 227;
        //front facing arch left
        draw.fillStyle = "#B62121";
        draw.beginPath();
        draw.moveTo(x, y);
        draw.lineTo(94, 244);
        draw.lineTo(29, 310);
        draw.lineTo(29, 292);
        draw.lineTo(x, y);
        draw.closePath();
        draw.fill();
        draw.stroke();
        //front facing arch right
        draw.fillStyle = "#B62121";
        draw.beginPath();
        draw.moveTo(x, y);
        draw.lineTo(94, 244);
        draw.lineTo(157, 310);
        draw.lineTo(157, 292);
        draw.lineTo(x, y);
        draw.closePath();
        draw.fill();
        draw.stroke();
        //Roof extend right
        draw.fillStyle = "#B62121";
        draw.beginPath();
        draw.moveTo(x, y);
        draw.lineTo(169, 152);
        draw.lineTo(230, 215);
        draw.lineTo(157, 292);
        draw.lineTo(x, y);
        draw.closePath();
        draw.fill();
        draw.stroke();
        //Roof thickness right
        draw.fillStyle = "#B62121";
        draw.beginPath();
        draw.moveTo(157, 292);
        draw.lineTo(157, 310);
        draw.lineTo(230, 234);
        draw.lineTo(230, 215);
        draw.lineTo(157, 292);
        draw.closePath();
        draw.fill();
        draw.stroke();
        //Roof thickness to the right at the back
        draw.fillStyle = "#B62121";
        draw.beginPath();
        draw.moveTo(230, 234);
        draw.lineTo(393, 234);
        draw.lineTo(393, 215);
        draw.lineTo(230, 215);
        draw.lineTo(230, 234);
        draw.closePath();
        draw.fill();
        draw.stroke();
        //Roof back right thing
        draw.fillStyle = "#B62121";
        draw.beginPath();
        draw.moveTo(230, 234);
        draw.lineTo(393, 234);
        draw.lineTo(393, 215);
        draw.lineTo(230, 215);
        draw.lineTo(230, 234);
        draw.closePath();
        draw.fill();
        draw.stroke();
        //Back straight Roof
        draw.fillStyle = "#B62121";
        draw.beginPath();
        draw.moveTo(230, 215);
        draw.lineTo(169, 152);
        draw.lineTo(408, 152);
        draw.lineTo(393, 215);
        draw.lineTo(230, 215);
        draw.closePath();
        draw.fill();
        draw.stroke();
        //Roof front | Right extenstion
        draw.fillStyle = "#B62121";
        draw.beginPath();
        draw.moveTo(408, 152);
        draw.lineTo(449, 160);
        draw.lineTo(393, 215);
        draw.lineTo(408, 152);
        draw.closePath();
        draw.fill();
        draw.stroke();
        //Roof Front bottom | Right extension
        draw.fillStyle = "#B62121";
        draw.beginPath();
        draw.moveTo(393, 215);
        draw.lineTo(393, 234);
        draw.lineTo(449, 180);
        draw.lineTo(449, 160);
        draw.lineTo(393, 215);
        draw.closePath();
        draw.fill();
        draw.stroke();
    }
    drawRoof();
    
    function drawWalls() {
        //Front facing side | Left side | Pentagon
        draw.fillStyle = "#FFFE74";
        draw.beginPath();
        draw.moveTo(43, 296);
        draw.lineTo(43, 402);
        draw.lineTo(143, 402);
        draw.lineTo(143, 295);
        draw.lineTo(94, 244);
        draw.lineTo(43, 296);
        draw.closePath();
        draw.fill();
        draw.stroke();
        //Side facing with door | Left side | Rectangle
        draw.fillStyle = "#FFFE74";
        draw.beginPath();
        draw.moveTo(143, 295);
        draw.lineTo(143, 402);
        draw.lineTo(227, 319);
        draw.lineTo(227, 212);
        draw.lineTo(143, 295);
        draw.closePath();
        draw.fill();
        draw.stroke();
        //Front facing garage wall | Right side | Rectangle
        draw.fillStyle = "#FFFE74";
        draw.beginPath();
        draw.moveTo(227, 319);
        draw.lineTo(383, 319);
        draw.lineTo(383, 212);
        draw.lineTo(227, 212);
        draw.lineTo(227, 319);
        draw.closePath();
        draw.fill();
        draw.stroke();
        //Garage wall | Right side | Rectangle
        draw.fillStyle = "#FFFE74";
        draw.beginPath();
        draw.moveTo(383, 319);
        draw.lineTo(440, 257);
        draw.lineTo(440, 160);
        draw.lineTo(383, 212);
        draw.lineTo(383, 319);
        draw.closePath();
        draw.fill();
        draw.stroke();
    }
    //drawHouse();
    
    function drawDoor() {
        //Door
        draw.fillStyle = "#8A4300";
        draw.beginPath();
        draw.moveTo(173, 374);
        draw.lineTo(192, 354);
        draw.lineTo(192, 306);
        draw.lineTo(173, 325);
        draw.lineTo(173, 374);
        draw.closePath();
        draw.fill();
        draw.stroke();
    }
    drawDoor();
    
    function drawGarage() {
        //Garage Outline
        draw.fillStyle = "#C2BAB3";
        draw.beginPath();
        draw.moveTo(395, 306);
        draw.lineTo(430, 268);
        draw.lineTo(430, 210);
        draw.lineTo(395, 248);
        draw.lineTo(395, 306);
        draw.closePath();
        draw.fill();
        draw.stroke();
        //Garage slides
        draw.beginPath();
        draw.moveTo(395, 293);
        draw.lineTo(430, 255);
        draw.closePath();
        draw.stroke();
        draw.beginPath();
        draw.moveTo(395, 280);
        draw.lineTo(430, 242);
        draw.closePath();
        draw.stroke();
        draw.beginPath();
        draw.moveTo(395, 267);
        draw.lineTo(430, 229);
        draw.closePath();
        draw.stroke();
        draw.beginPath();
        draw.moveTo(395, 254);
        draw.lineTo(430, 216);
        draw.closePath();
        draw.stroke();
    }
    drawGarage();
    
    function drawWindow() {
        //MainWindow
        draw.fillStyle = "#007DFF";
        draw.beginPath();
        draw.rect(245, 245, 120, 50);
        draw.closePath();
        draw.fill();
        draw.stroke();
        //Window bottom ledge
        draw.fillStyle = "maroon";
        draw.beginPath();
        draw.moveTo(240, 300);
        draw.lineTo(370, 300);
        draw.lineTo(370, 295);
        draw.lineTo(240, 295);
        draw.lineTo(240, 300);
        draw.closePath();
        draw.fill();
        draw.stroke();
        //Window cross
        draw.beginPath();
        draw.moveTo(245, 273);
        draw.lineTo(365, 273);
        draw.closePath();
        draw.fill();
        draw.stroke();
        draw.beginPath();
        draw.moveTo(300, 245);
        draw.lineTo(300, 295);
        draw.closePath();
        draw.fill();
        draw.stroke();
    }
    drawWindow();
    
    function drawPath() {
        //Walking path
        draw.fillStyle = "gray";
        draw.beginPath();
        draw.moveTo(173, 374);
        draw.lineTo(192, 354);
        draw.lineTo(500, 395);
        draw.lineTo(500, 500);
        draw.lineTo(500, 500);
        draw.closePath();
        draw.fill();
        draw.stroke();
    }
    drawPath();
    
    function drawSun() {
        var arcEnd = 2*Math.PI;
        //The Sun
        draw.fillStyle = "yellow";
        draw.beginPath();
        draw.arc(10, 10, 70, 0, arcEnd);
        draw.closePath();
        draw.fill();
        draw.stroke();
    }
    drawSun();
}
drawHouse();