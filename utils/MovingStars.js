export default function MovingStars() {
    const canvas = document.getElementById("canvas3");
    const ctx = canvas.getContext("2d");

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    window.addEventListener("resize", function () {
        canvas.height = window.innerHeight;
        canvas.width = window.innerWidth;
        // star = []
        // stars = []
        // init()
        // init2()
    });

    const color = ["#ffac6", "#f4f5ff", "#ffd27d", "#ffa731", "#a6a8ff"];
    class space {
        constructor(x, y, r, dx, dy) {
            this.x = x;
            this.y = y;
            this.r = r;
            this.dx = dx;
            this.dy = dy;
            this.color = Math.floor(Math.random() * color.length);
        }

        update() {
            this.draw();
            if (this.x - this.r >= innerWidth) {
                this.x = -this.r;
                this.y += 10;
            }

            if (this.y - this.r >= innerHeight) {
                this.y = -this.y;
            }

            this.x += this.dx;
        }

        draw() {
            ctx.beginPath();
            ctx.fillStyle = color[this.color];
            ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    let star = [];
    function init() {
        for (let i = 0; i < 200; i++) {
            let x = Math.random() * innerWidth;
            let y = Math.random() * innerHeight;
            let r = Math.random() * 2;
            let dx = Math.random() * 1.5;
            let dy = Math.random() * 2 + 1;

            star.push(new space(x, y, r, dx, dy));
        }
    }
    init()
    //For Planets

    // class space2 {
    //     constructor(x, y, r, dx, dy) {
    //         this.x = x;
    //         this.y = y;
    //         this.r = r;
    //         this.dx = dx;
    //         this.dy = dy;
    //         this.color = Math.floor(Math.random() * color.length);
    //     }

    //     update() {
    //         this.draw();
    //         if (this.x - this.r >= innerWidth) {
    //             this.x = -this.r;
    //             this.y += 10;
    //         }

    //         if (this.y - this.r >= innerHeight) {
    //             this.y = -this.y;
    //         }
    //         this.x += this.dx;
    //     }

    //     draw() {
    //         ctx.beginPath();
    //         ctx.fillStyle = color[this.color];
    //         ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    //         ctx.fill();
    //     }
    // }

    let stars = [];
    // function init2() {
    //     for (let i = 0; i < 10; i++) {
    //         let x = Math.random() * innerWidth;
    //         let y = Math.random() * innerHeight;
    //         let r = Math.random() * 20;
    //         let dx = Math.random() * 2 + 0.1;
    //         let dy = Math.random() * 2 + 1;

    //         stars.push(new space2(x, y, r, dx, dy));
    //     }
    // }
    // init2()
    // Calling both classes
    function animate() {
        requestAnimationFrame(animate);
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, innerWidth, innerHeight);
        for (let j = 0; j < stars.length; j++) {
            stars[j].update();
        }
        for (let i = 0; i < star.length; i++) {
            star[i].update();
        }
    }
    return animate();
}
