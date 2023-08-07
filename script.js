const mario_states = {
    RUNNING_LEFT: "rl",
    FALL_DOWN: "fd",
    SPEEDER_MAN: "spm"
}

class Mario {
    constructor(name) {
        this.positionX = 0;
        this.positionY = 0;
        this.speedX = 4;
        this.speedY = 0;
        this.marioEl = document.getElementById('mario');
        this.mario = this.marioEl.cloneNode(true)
        this.marioEl.parentNode.appendChild(this.mario)
        this.mario.style.display="block"
        this.state = mario_states.RUNNING_LEFT;
        this.header = document.getElementById("header")

        // Corrigindo a definição da posição vertical inicial
        this.mario.style.top = document.getElementById("header").getBoundingClientRect().top + "px";
        this.mario.style.left = document.getElementById("header").getBoundingClientRect().left + "px";
        this.card =  document.getElementById("cartao")
        if (name)this.mario.childNodes[1].innerText=name
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
                if (this.positionY > 400) {
                    this.state = mario_states.SPEEDER_MAN
                    this.speedY = 0
                    this.speedX = -4;

                }
                break;
        }



        return this.updateMario();
    }

    updateMario() {

       
        this.positionX += this.speedX;
        this.positionY += this.speedY;

        const dir = this.speedX < 0 ? -1 : 1


        this.mario.style.top = document.getElementById("header").getBoundingClientRect().top+8 + "px";
        this.mario.style.left = document.getElementById("header").getBoundingClientRect().left + "px";
        this.mario.childNodes[1].style.transform = "scaleX("+dir+")"
        this.mario.style.transform = "scaleX("+dir+") translate(" + this.positionX*dir + "px, " + this.positionY + "px)";
        const out = this.mario.positionX < -800
        if ( out ) this.mario.deleteNode()
        return out
    }
}

const mario = new Mario();


let marios = []
setInterval(() => {
	marios = marios.filter( (el)=> {
		return el.tick() == false
	})
}, 16);

marios.push(mario)

setTimeout( ()=> {
	marios.push(new Mario("Python"))
},1000)

setTimeout( ()=> {
	marios.push(new Mario("C++"))
},720*2)

setTimeout( ()=> {
	marios.push(new Mario("JavaScript"))
},720*3)

setTimeout( ()=> {
	marios.push(new Mario("React"))
},720*3)

setTimeout( ()=> {
	marios.push(new Mario("Node"))
},720*4)

setTimeout( ()=> {
	marios.push(new Mario("Linux"))
},720*5)



setTimeout( ()=> {
	marios.push(new Mario("vs code"))
},720*7)



setTimeout( ()=> {
	marios.push(new Mario("Git"))
},720*8)



setTimeout( ()=> {
	marios.push(new Mario("GitHub"))
},720*9)

setTimeout( ()=> {
	marios.push(new Mario("Html"))
},720*11)

setTimeout( ()=> {
	marios.push(new Mario("TypeScript"))
},720*12.5)


setTimeout( ()=> {
	marios.push(new Mario("TailWind"))
},720*14)

setTimeout( ()=> {
	marios.push(new Mario("Css"))
},720*19)

setTimeout( ()=> {
	
},720*20)






