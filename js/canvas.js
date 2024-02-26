const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

//      SET-UP
canvas.width = 500;
canvas.height = window.innerHeight;


//      GLOBAL CANVAS SETTINGS
ctx.lineWidth = 5;
ctx.clearRect(0, 0, canvas.width, canvas.height);

//      EYE IMAGE
const eyeImage = document.getElementById('eyeImage');
const eye01 = ctx.createPattern(eyeImage, 'no-repeat');
ctx.strokeStyle = eye01;


//#region       LINE FUNCTION

class  Line {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.x = Math.floor(Math.random() * this.canvas.width);
        this.y = Math.floor(Math.random() * this.canvas.height);
        this.history = [{ x: this.x, y: this.y }];
        this.lineWidth = Math.floor(Math.random() * 5 + 1);
        this.hue = Math.floor(Math.random() * 360);
        this.maxLength = Math.floor(Math.random() * 150 + 10);
        this.speedX = Math.random() * 1 - 0.5;
        this.speedY = 5;
        this.lifeSpan = this.maxLength * 3;
        this.breakPoint = this.lifeSpan * 0.75;
        this.timer = 0;
        this.angle = 0;
        this.va = Math.random() * 0.5 - 0.25;
        this.curve = 1;
        this.vc = Math.random() * 0.4 - 0.2;
        // this.randNum = Math.floor(Math.random() * 3);
    };

    draw(context) {
        // context.strokeStyle = `hsl(${this.hue}, 100%, 50%)`;
        context.lineWidth = this.lineWidth;
        // context.lineCap = lineCap[this.randNum];
        context.beginPath();
        context.moveTo(this.history[0].x, this.history[0].y);

        //      Draw the 3 Lines
        for (let n = 1; n < this.history.length; n++) {
            context.lineTo(this.history[n].x, this.history[n].y);
        };

        context.stroke();
    };

    update() {
        this.timer++;
        this.angle += this.va;
        this.curve += this.vc;

        if (this.timer < this.lifeSpan) {
            if (this.timer > this.breakPoint) {
                this.va *= -1.02;
            };
            //      Build a 3-Line Array
            this.x += Math.sin(this.angle) * this.curve;
            this.y += Math.cos(this.angle) * this.curve;
            this.history.push({ x: this.x, y: this.y });
            if (this.history.length >= this.maxLength) {
                this.history.shift();
            };
        }
        else if (this.history.length <= 1) {
            this.reset();
        }
        else {
            this.history.shift();
        };
    };

    reset(){
        this.x = Math.floor(Math.random() * this.canvas.width);
        this.y = Math.floor(Math.random() * this.canvas.height);
        this.history = [{ x: this.x, y: this.y }];
        this.timer = 0;
        this.curve = 0.025;
        this.vc = 0.1;
        // this.va = Math.random() * 0.5 - 0.25;
    };
};

//      Line Array
const linesArray = [];
const numberOfLines = 200;

for (let x = 0; x < numberOfLines; x++) {
    linesArray.push(new Line(canvas));
};

//#endregion




//      Animate
const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //  Draw Line
    linesArray.forEach(line => {
        line.draw(ctx);
        line.update();
    });

    requestAnimationFrame(animate);
};
animate();



// //      RESIZE
// window.addEventListener('resize', () => {
//     canvas.width = 600;
//     canvas.height = window.innerHeight;
//     // ctx.clearRect(0, 0, canvas.width, canvas.height);

//     reset();
//     draw(ctx);
//     update();
// });


 



