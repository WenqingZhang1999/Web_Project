function drawChart() {
        
    xInterval = 10;
    yInterval = 10;
    let rawData = JSON.parse(document.getElementById('ttJsonStr').value);
    data =[];
    for (let item of rawData) {
        data.push({ x:item.x, y:item.y, value:item.value })
    }

    let canvas = document.getElementById('myCanvas');

    // creat the canvas object
    let context = canvas.getContext("2d");
    // acquire the width and hight
    const WIDTH = canvas.width;
    const HEIGHT = canvas.height;
    // define the padding
    var padding = 20;//initial the padding
    var paddingLeft = 60;//get over the width of characters
    var paddingBottom = 30;//get over the high of characters

    // define the key point and its value
    var axisYStart = {// the start value of y
        x: paddingLeft,
        y: padding
    };
    var origin = {// the value of origin coordinates
        x: paddingLeft,
        y: HEIGHT - paddingBottom
    };
    var axisXStart = {//the start value of x 
        x: WIDTH - padding,
        y: HEIGHT - paddingBottom
    };
    // draw the coordinate axis
    context.beginPath();
    context.moveTo(axisYStart.x, axisYStart.y);
    context.lineTo(origin.x, origin.y);
    context.lineTo(axisXStart.x, axisXStart.y);
    context.stroke();
    // draw the arrow of the axis
    context.beginPath();
    context.moveTo(axisYStart.x - 5, axisYStart.y + 10);
    context.lineTo(axisYStart.x, axisYStart.y);
    context.lineTo(axisYStart.x + 5, axisYStart.y + 10);
    context.stroke();
//draw the line
    context.beginPath();
    context.moveTo(axisXStart.x - 10, axisXStart.y - 5);
    context.lineTo(axisXStart.x, axisXStart.y);
    context.lineTo(axisXStart.x - 10, axisXStart.y + 5);
    context.stroke();
    

    // define the x-axis value of turning point
    var pointsX = [];

    // draw the scale of x and y axis
    // the scale of x-axis
    var month = {
        x: paddingLeft,
        y: HEIGHT - paddingBottom
    }
    //calculate the scale of y
    data.sort(function (a, b) { return a.x - b.x });
    let xIntervalCount = Math.ceil(data[data.length - 1].x / xInterval);
    let xIntervalLen = (axisXStart.x - origin.x) / xIntervalCount;
    // setting the style of character
    context.font = "14px 微软雅黑";
    // set vertical alignment
    context.textBaseline = "top";
    //make scale of x-axis
    let xStart = origin.x + xIntervalLen;
    let interval = this.xInterval;
    for (let i = 1; i <= xIntervalCount; i++) {
        context.fillText(interval, xStart, origin.y);
        //  chang the value of x-axis for every draw
        xStart += xIntervalLen;
        interval += this.xInterval;
    }

    //calculate the scale of y
    this.data.sort(function (a, b) { return a.y - b.y });
    let yIntervalCount = Math.ceil(this.data[this.data.length - 1].y / this.yInterval);
    let yIntervalLen = (axisXStart.y - axisYStart.y) / yIntervalCount;
    // set vertical alignment
    context.textAlign = "right";
    //make scale of y-axis
    let yStart = origin.y - xIntervalLen;
    interval = this.yInterval;
    for (let i = 1; i <= yIntervalCount; i++) {
        context.fillText(interval, origin.x, yStart);
        // chang the value of y-axis for every draw
        yStart -= yIntervalLen;
        interval += yInterval;
    }
    context.fillText("0,0", origin.x, origin.y);
    context.stroke();

    //draw the broken line
    this.data.sort(function (a, b) { return a.x - b.x });
    context.textAlign ="left";
    context.textBaseline = "bottom";
    for(let i=0;i<this.data.length;i++){
        
        let pointX=origin.x+this.data[i].x/this.xInterval*xIntervalLen;
        let pointY=origin.y-this.data[i].y/this.yInterval*yIntervalLen;
        if(i==0)
        {
            context.moveTo(pointX,pointY);
        }
        else{
            context.lineTo(pointX,pointY);
        }
        context.fillText(this.data[i].value, pointX, pointY);
    }
    context.stroke();
}