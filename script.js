const mario_states = {
    RUNNING_LEFT: "rl",
    FALL_DOWN: "fd",
    SPEEDER_MAN: "spm"
}

class Mario {
    constructor() {
        this.positionX = 0;
        this.positionY = 0;
        this.speedX = 4;
        this.speedY = 0;
        this.mario = document.getElementById('mario');
        this.state = mario_states.RUNNING_LEFT;
        this.header = document.getElementById("header")

        // Corrigindo a definição da posição vertical inicial
        this.mario.style.top = document.getElementById("header").getBoundingClientRect().top + "px";
        this.mario.style.left = document.getElementById("header").getBoundingClientRect().left + "px";
        this.card =  document.getElementById("cartao")
    }

    tick() {
        switch (this.state) {
            case mario_states.RUNNING_LEFT:
                if (this.positionX > this.header.clientWidth - 50) {
                    this.state = mario_states.FALL_DOWN;
                }
                break;
            case mario_states.FALL_DOWN:
                this.speedY += 2;
                if (this.positionY > (this.card.clientHeight)-240) {
                    this.state = mario_states.SPEEDER_MAN
                    this.speedY = 0
                    this.speedX = -4;

                }
                break;
        }



        this.updateMario();
    }

    updateMario() {

       
        this.positionX += this.speedX;
        this.positionY += this.speedY;

        const dir = this.speedX < 0 ? -1 : 1


        this.mario.style.top = document.getElementById("header").getBoundingClientRect().top-32 + "px";
        this.mario.style.left = document.getElementById("header").getBoundingClientRect().left + "px";
        this.mario.childNodes[1].style.transform = "scaleX("+dir+")"
        this.mario.style.transform = "scaleX("+dir+") translate(" + this.positionX*dir + "px, " + this.positionY + "px)";
    }
}

const mario = new Mario();

setInterval(() => {
    mario.tick();
}, 16);