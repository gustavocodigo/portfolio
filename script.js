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
        this.mario = this.marioEl.cloneNode(true);
        this.mario.style.display = "block";
        this.state = mario_states.RUNNING_LEFT;
        this.header = document.getElementById("header");

        // Set initial position
        this.mario.style.top = this.header.getBoundingClientRect().top + "px";
        this.mario.style.left = this.header.getBoundingClientRect().left + "px";

        if (name) this.mario.childNodes[1].innerText = name;
        this.card = document.getElementById("cartao");
        document.body.appendChild(this.mario); // Append to body instead of the parent of marioEl
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
                if (this.positionY > 320) {
                    this.state = mario_states.SPEEDER_MAN;
                    this.speedY = 0;
                    this.speedX = -4;
                }
                break;
        }

        return this.updateMario();
    }

    updateMario() {
        this.positionX += this.speedX;
        this.positionY += this.speedY;

        const dir = this.speedX < 0 ? -1 : 1;

        this.mario.style.top = this.header.getBoundingClientRect().top + 8 + "px";
        this.mario.style.left = this.header.getBoundingClientRect().left + "px";
        this.mario.childNodes[1].style.transform = "scaleX(" + dir + ")";
        this.mario.style.transform = "scaleX(" + dir + ") translate(" + this.positionX * dir + "px, " + this.positionY + "px)";

        const out = this.positionX < -800; // Use this.positionX instead of this.mario.positionX
        if (out) this.mario.remove(); // Use .remove() to remove the element

        return out;
    }
}









function typewriterEffect(text, element) {
    let i = 0;
    const speed = 100; // Velocidade de digitação (em milissegundos)

    function type() {
        if (i < text.length) {
            element.innerText += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}




document.addEventListener("DOMContentLoaded", () => {
    const marios = [];

    function update() {
        marios.forEach(mario => {
            if (mario.tick()) {
                const index = marios.indexOf(mario);
                if (index !== -1) {
                    marios.splice(index, 1);
                }
            }
        });

        requestAnimationFrame(update);
    }
    setTimeout(() => {
        const initialMario = new Mario();
        marios.push(initialMario);
    }, 600);

  

    setTimeout(() => {
        marios.push(new Mario("Python"));
    }, 1000);

    setTimeout(() => {
        marios.push(new Mario("React"));
    }, 1000*2);
    
    setTimeout(() => {
        marios.push(new Mario("C++"));
    }, 1000*3);

    setTimeout(() => {
        marios.push(new Mario("TypeScript"));
    }, 1000*3);


    setTimeout(() => {
        marios.push(new Mario("Bootstrap"));
    }, 1000*4);

    setTimeout(() => {
        marios.push(new Mario("React Native"));
    }, 1000*5);

    setTimeout(() => {
        marios.push(new Mario("Css"));
    }, 1000*6);

    setTimeout(() => {
        marios.push(new Mario("Git"));
    }, 1000*7);
    setTimeout(() => {
        marios.push(new Mario("GitHub"));
    }, 1000*7.5);

    setTimeout(()=>{
        update();
    },600)


});






function typewriterEffect(text, element) {
    let i = 0;
    const speed = 50; // Velocidade de digitação (em milissegundos)

    function type() {
        if (i < text.length) {
            element.innerText = text.substring(0, i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Chamando a função de efeito de typewriter quando a página é carregada
document.addEventListener("DOMContentLoaded", function() {
    const element = document.getElementById("message");
    element.style.minHeight = element.clientHeight+"px";
    const text = element.innerText;
    element.innerText = ""; // Limpa o conteúdo original do elemento
    setTimeOut(()=>{
        typewriterEffect(text, element);
    },1000*8)
});
