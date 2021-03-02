//create function
function PieChart() {
    this.ctx = document.querySelector('canvas').getContext('2d');
    this.x0 = this.ctx.canvas.width/2+60;
    this.y0 = this.ctx.canvas.height/2;
    //radius
    this.radius = 90;
    this.outLine = 30;
    // space
    this.space = 20;
    //width and height
    this.rectW = 50;
    this.rectH = 25;
}

PieChart.prototype = {
    //make it initial
        init: function(){
            this.drawPie(data);
        },
        drawPie: function(data){
        var angleList = this.changeAngle(data);
        var that = this;
        var startLine = 0;
        angleList.forEach(function(item,i){
            var endLine = item.angle + startLine;
            that.ctx.beginPath();
            that.ctx.moveTo(that.x0,that.y0);
            that.ctx.arc(that.x0,that.y0,that.radius,startLine,endLine);
            var color = that.ctx.fillStyle = that.random();
            that.ctx.fill();
            that.drawTitle(color,startLine,endLine,item.title);
            that.drawExplain(i,item.title)
            that.ctx.stroke();
            startLine = endLine;
        })
    },
    //draw the title
    drawTitle: function (color,startLine,endLine,title){
        //point
        var outX = (this.radius + this.outLine) * Math.cos((startLine+endLine)/2)+this.x0;
        var outY = (this.radius + this.outLine) * Math.sin((startLine+endLine)/2)+this.y0;
        this.ctx.moveTo(this.x0,this.y0);
        this.ctx.lineTo(outX,outY);
        this.ctx.strokeStyle = color;
        this.ctx.stroke();

        //setting words
        var textW = this.ctx.measureText(title).width;
        if (outX>this.x0) {
            this.ctx.lineTo(outX+textW,outY);
            this.ctx.textAlign = 'left';
        } else {
            this.ctx.lineTo(outX-textW,outY);
            this.ctx.textAlign = 'right';
        }
        this.ctx.textBaseline = 'botton';
        this.ctx.fillText(title,outX,outY-5);
        this.ctx.stroke();
    },
    //make explanation
    drawExplain: function(i,title){
        this.ctx.beginPath();
        this.ctx.textAlign = 'left';
        this.ctx.textBaseline = 'top';
        this.ctx.fillRect(  this.space,
                            this.space + i*(this.rectH+10),
                            this.rectW,
                            this.rectH);
        //write words
        this.ctx.fillText(title,
                        this.rectW+this.space+10,
                        this.space + i*(this.rectH+10));
    },
    //have the  random color
    random: function(){
        var r = Math.floor(Math.random()*150);
        var g = Math.floor(Math.random()*150);
        var b = Math.floor(Math.random()*150);
        return 'rgb('+r+','+g+','+b+')';
    },
    //change the angle
    changeAngle: function(data){
     
        var total = 0;
        data.forEach(function(item,i){
            total += item.num;
        })
        // use the console.log(total);
        data.forEach(function(item,i){
            var angle = item.num/total * 2 *Math.PI;
            item.angle = angle;
        })
        return data;
    },
}
//the section's figure 
var data = [
    {
        title:'COM1001',
        num:15
    },

    {
        title:'COM1002',
        num:15
    },

    {
        title:'COM1003',
        num:25
    },
    
    {
        title:'COM1008',
        num:20
    },

    {
        title:'COM1005',
        num:10
    },

    {
        title:'COM1006',
        num:15
    },

    
]

var pieChart = new PieChart();
pieChart.init();
// set bottom and change colors of pie 
function draw(){
    var pieChart = new PieChart();
    pieChart.init();
}

var buttonElement = document.getElementById("redraw");
buttonElement.addEventListener('click', draw, false);