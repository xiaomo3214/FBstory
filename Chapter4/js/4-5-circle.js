var canvas = document.querySelector("#canvas"),
    ctx = canvas.getContext('2d');
    
canvas.width = 325;
canvas.height = 325;

// 滑鼠點在螢幕上的座標值為 X 軸在 (264, 640)(由左而右) 之間, Y 軸在 (316, 640) (由上而下)

var particlePos = 
    [[131,22],[264,34],[16,50],[72,72],[204,73],[141,91],[300,103],[86,113],[182,120],
    [247,127],[122,134],[279,139],[29,145],[216,145],[80,154],[97,175],[45,190],
    [254,195],[169,203],[129,236],[39,251],[156,251],[286,271],[201,274],[110,296]];

//var particlePos = 
//    [[131,22],[264,34]];

var particles = [];
var flag = false; // 滑鼠是否按下
var rect = canvas.getBoundingClientRect();
var canvasLeft = Math.floor(rect.left); // 操作區域的左上角距離視窗左邊的距離
var canvasTop = Math.floor(rect.top);   // 操作區域的左上角距離視窗上邊的距離 
var ptkimgData;

// (sx, sy) 分子的起始位置，(cx, cy) 分子目前的位置
//  isMoving : true 正在移動中， false 原地不動
//  toFinger : true 朝手指方向移動， false 朝起始位置移動

var Particle = function (x, y) {
    var pixels = [];
    this.sx = x; this.sy = y;
    this.cx = x; this.cy = y;
    this.dx = 0; this.dy = 0; // 手指頭目前點取的位置
    this.velocity = 2.25 + Math.random() * 2; // 分子移動的速度
    this.circlearound = false; // 進入繞圈圈模式
    this.isMoving = false;
    this.toFinger = false;
    this.arc = 0;    // 目前分子跟水平方向的弧度(0,1)
    this.speed = Math.round(Math.random() * 10) / 100;  // 旋轉的速度
    this.clock = Math.random() *0.5 ;  // 個別計時器的起始時間
    
    if (Math.random() >= 0.5) this.dir = 1; // 旋轉的方向
    else this.dir = -1;

    this.dist = 60 + Math.random() * 30; // 每一個分子距離手指頭位置距離平方
    this.sqrtdist = Math.sqrt(this.dist); // 每一個分子距離手指頭位置距離平方

    this.touchDown = function (tdx, tdy) {
        this.dx = tdx; this.dy = tdy;
        this.toFinger = true;
    }
    this.touchUp = function () {
        this.toFinger = false;
        this.circlearound = false;
        // console.log("touchUp");
    }
    this.touchMove = function (tdx, tdy) {
        this.dx = tdx; this.dy = tdy;
    }
    this.updateData = function () {
        if (this.toFinger) { // 手指頭按下，分子向手指頭方向移動
            if (!this.circlearound) {
                var vx = this.dx - this.cx;
                var vy = this.dy - this.cy;
                if (Math.abs(vx) >= 0.01 || Math.abs(vy) >= 0.01) { // 兩者在一定的距離之外
                    var t = Math.sqrt(vx * vx + vy * vy);
                    vx = vx / t; vy = vy / t; // 單位的方向向量
                    var nx = this.dx - (this.cx + vx * 0.5 * this.velocity); // 新的位置與觸控點的 x 向量
                    var ny = this.dy - (this.cy + vy * 0.5 * this.velocity); // 新的位置與觸控點的 y 向量
                    this.cx = this.dx - nx;
                    this.cy = this.dy - ny;
                    if ((nx * nx + ny * ny) >= this.dist) { // 未達繞圈圈的距離,更新座標
                        this.circlearound = false;
                    }
                    else { // 進入繞圈圈狀態
                        // 計算目前所在的角度
                        this.arc = Math.acos(vy);
                        this.circlearound = true;
                    }
                }
            }
            else { // 進入繞圈圈狀態
                // 計算兩者距離是否還在繞圈圈的範圍內
                var vx = this.dx - this.cx;
                var vy = this.dy - this.cy;
                if ( (vx * vx + vy * vy) > (this.dist+5) ) { // 不再距離內
                    var t = Math.sqrt(vx * vx + vy * vy);
                    vx = vx / t; vy = vy / t; // 單位的方向向量
                    var nx = this.dx - (this.cx + vx * 0.5 * this.velocity); // 新的位置與觸控點的 x 向量
                    var ny = this.dy - (this.cy + vy * 0.5 * this.velocity); // 新的位置與觸控點的 y 向量
                    this.circlearound = false;
                }
                else { // 繞圈圈的距離內
                    this.arc = this.arc + this.dir*this.speed;
                    this.cx = this.dx + this.sqrtdist * Math.cos(this.arc);
                    this.cy = this.dy + this.sqrtdist * Math.sin(this.arc);
                }
            }
            this.isMoving = true; // 代表分子目前正在移動中
        }
        else { // 
            if (this.isMoving) { 
                // 代表分子之前是在移動中，現在要移動回原來的位置，當到達預設位置時，將 this.isMoving 設定為 false
                this.cx = this.cx + (this.sx - this.cx) * 0.025 *this.velocity;
                this.cy = this.cy + (this.sy - this.cy) * 0.025 * this.velocity;

                if (Math.abs(this.cx - this.sx) <= 0.1 && Math.abs(this.cy - this.sy) <= 0.1) {
                    this.isMoving = false;
                    this.cx = this.sx; this.cy = this.sy;
                }
            }
        }

        this.clock = this.clock + 0.0135;
        this.drawC();
    }
    this.drawC = function () {
        // 根據 this.clock 計算透明度的變化
        if (this.clock >= 3.1415) this.clock = this.clock - 3.1415;
        var opacity = Math.floor(64 + 191 * Math.abs(Math.sin(this.clock)));
        ctx.beginPath();
        ctx.arc(this.cx, this.cy, 5, 0, 360, false);
        ctx.fillStyle = "#F8F9EC" + opacity.toString(16);
        ctx.fill();
        ctx.closePath();
    };
}

function DrawCircle(x,y){
    ctx.beginPath();
    ctx.arc(x,y,3,0,360,false);
    ctx.fillStyle="#F8F9EC";
    ctx.fill();
    ctx.closePath();

}

var initParticles = function () {
    for(var i=0;i<particlePos.length;i++) {
        particles.push(new Particle(particlePos[i][0], particlePos[i][1]));
    }
}

//滑鼠點擊
window.addEventListener("mousedown", function (event) {
    rect = canvas.getBoundingClientRect();
    canvasLeft = Math.floor(rect.left); // 操作區域的左上角距離視窗左邊的距離
    canvasTop = Math.floor(rect.top);   // 操作區域的左上角距離視窗上邊的距離 
    var x = event.x - canvasLeft;
    var y = event.y - canvasTop;
    if (x >= 0 & x <= 325 && y >= 0 && y <= 325) { // 點在操作範圍內
        particles.forEach((p) => { p.touchDown(event.x - canvasLeft, event.y - canvasTop) });
        flag = true;
    }
    // console.log("window", event.x, canvasLeft);
});

//滑鼠移動
window.addEventListener("mousemove", function (event) {
    if (flag) { // 滑鼠有被按下才需要處理
        var x = event.x - canvasLeft;
        var y = event.y - canvasTop;
        if (x >= 0 & x <= 325 && y >= 0 && y <= 325) {// 點在操作範圍內
            particles.forEach((p) => { p.touchDown(event.x - canvasLeft, event.y - canvasTop) });
        }
        else { // 滑鼠移除範圍外，則取消相關的狀態
            particles.forEach((p) => { p.touchUp(); });
            flag = false;
        }
    }
});

//滑鼠放開
window.addEventListener("mouseup", function (event) {
    if (flag) {
        particles.forEach((p) => { p.touchUp(); });
        flag = false;
    }
});


//行動裝置
canvas.addEventListener("touchstart", function (event) {
    event.preventDefault();
    var touch = event.targetTouches[0];
    rect = canvas.getBoundingClientRect();
    canvasLeft = Math.floor(rect.left); // 操作區域的左上角距離視窗左邊的距離
    canvasTop = Math.floor(rect.top);   // 操作區域的左上角距離視窗上邊的距離 
    var x = touch.screenX - canvasLeft;
    var y = touch.screenY - canvasTop;
    // if (x >= 0 & x <= 325 && y >= 0 && y <= 325) { // 點在操作範圍內
        particles.forEach((p) => { p.touchDown(touch.screenX  - canvasLeft, touch.screenY  - canvasTop) });
        flag = true;
    // }
    // console.log("window", event.x, canvasLeft);
});

//移動
window.addEventListener("touchmove", function (event) {
    // event.preventDefault();
    var touch = event.targetTouches[0];
    if (flag) { // 滑鼠有被按下才需要處理
        var x = touch.screenX - canvasLeft;
        var y = touch.screenY - canvasTop;
        // if (x >= 0 & x <= 325 && y >= 0 && y <= 325) {// 點在操作範圍內
            particles.forEach((p) => { p.touchDown(touch.screenX - canvasLeft, touch.screenY - canvasTop) });
        // }
        // else { // 滑鼠移除範圍外，則取消相關的狀態
        //     particles.forEach((p) => { p.touchUp(); });
        //     flag = false;
        // }
    }
});

//放開
window.addEventListener("touchend", function (event) {
    if (flag) {
        particles.forEach((p) => { p.touchUp(); });
        flag = false;
    }
});

window.requestAnimFrame = (function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();

var colorPalette = {
    bg: { r: 0, g:0, b: 0 },
    matter: [
        { r: 36, g: 18, b: 42 }, // darkPRPL
        { r: 78, g: 36, b: 42 }, // rockDust
        { r: 252, g: 178, b: 96 }, // solorFlare
        { r: 253, g: 238, b: 152 } // totesASun
    ]
};

drawBg = function (ctx, color) {
    ctx.fillStyle = "rgb(" + color.r + "," + color.g + "," + color.b + ")";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
};

// Our Frame function
var frame = function () {
    //// Draw background first
    drawBg(ctx, colorPalette.bg);

    particles.forEach((p) => {
        p.updateData();
    });
    window.requestAnimFrame(frame);
};

initParticles();

frame();