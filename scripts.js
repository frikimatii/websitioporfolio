document.addEventListener("DOMContentLoaded" , function(){
    const text = "Front-end & Diseñador Grafico";
    const typewriteElement = document.getElementById("typewriter");
    let i = 0;
    const speed = 200;
    const delay = 8000;

    function typewriter() {
        if (i < text.length) {
            typewriteElement.innerHTML += text.charAt(i);
            i++;
            setTimeout(typewriter, speed)
        } else {
            setTimeout(deleteText, 2000)
        }
    }

    function deleteText(){
        if (i<0){
            typewriteElement.innerHTML = text.substring(0, i -  i);
            i--;
            setTimeout(deleteText, speed);
        } else {
            setTimeout(typewriter, 2000);
        }
    }

    function startAnimation(){
        i = 0; 
        typewriteElement.innerHTML = "";
        typewriter();
    }


    startAnimation();
    setInterval(startAnimation, delay)

})


document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.custom-btn');

    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const diameter = Math.max(button.clientWidth, button.clientHeight);
            const radius = diameter / 2;

            ripple.style.width = ripple.style.height = `${diameter}px`;
            ripple.style.left = `${e.clientX - button.offsetLeft - radius}px`;
            ripple.style.top = `${e.clientY - button.offsetTop - radius}px`;
            ripple.classList.add('ripple');

            const rippleElement = button.querySelector('.ripple');
            if (rippleElement) {
                rippleElement.remove();
            }

            button.appendChild(ripple);

            // Animate icon
            const icon = button.querySelector('i');
            if (icon) {
                icon.classList.add('icon-bounce');
                setTimeout(() => {
                    icon.classList.remove('icon-bounce');
                }, 600);
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function(){
    var pelota = document.querySelector('.pelota');
    var pelotaOtra = document.querySelector('.pelota_otra');
    var pelotaTres = document.querySelector('.pelota_tres');
    var pelotaCuatro = document.querySelector('.pelota_cuatro');
    var contenedor = document.querySelector('.animacion_dos');
    var contenedorWidth = contenedor.clientWidth;
    var contenedorHeight = contenedor.clientHeight;
    var pelotaWidth = pelota.clientWidth;
    var pelotaHeight = pelota.clientHeight;

    // Primera pelota
    var posX1 = 0;
    var posY1 = 0;
    var valX1 = 12;
    var valY1 = 55;

    // Segunda pelota
    var posX2 = contenedorWidth - pelotaWidth;
    var posY2 = 0;
    var valX2 = 14;
    var valY2 = 55;

    // Tercera pelota
    var posX3 = 0;
    var posY3 = contenedorHeight - pelotaHeight;
    var valX3 = 16;
    var valY3 =55;

    // Cuarta pelota
    var posX4 = contenedorWidth - pelotaWidth;
    var posY4 = contenedorHeight - pelotaHeight;
    var valX4 = 18;
    var valY4 = 55;

    function moverPelotas(){
        // Movimiento de la primera pelota
        posX1 += valX1;
        posY1 += valY1;

        if (posX1 + pelotaWidth > contenedorWidth || posX1 < 0){
            valX1 = -valX1;
        }

        if (posY1 + pelotaHeight > contenedorHeight || posY1 < 0){
            valY1 = -valY1;
        }

        pelota.style.left = posX1 + 'px';
        pelota.style.top = posY1 + 'px';

        // Movimiento de la segunda pelota
        posX2 += valX2;
        posY2 += valY2;

        if (posX2 + pelotaWidth > contenedorWidth || posX2 < 0){
            valX2 = -valX2;
        }

        if (posY2 + pelotaHeight > contenedorHeight || posY2 < 0){
            valY2 = -valY2;
        }

        pelotaOtra.style.left = posX2 + 'px';
        pelotaOtra.style.top = posY2 + 'px';

        // Movimiento de la tercera pelota
        posX3 += valX3;
        posY3 += valY3;

        if (posX3 + pelotaWidth > contenedorWidth || posX3 < 0){
            valX3 = -valX3;
        }

        if (posY3 + pelotaHeight > contenedorHeight || posY3 < 0){
            valY3 = -valY3;
        }

        pelotaTres.style.left = posX3 + 'px';
        pelotaTres.style.top = posY3 + 'px';

        // Movimiento de la cuarta pelota
        posX4 += valX4;
        posY4 += valY4;

        if (posX4 + pelotaWidth > contenedorWidth || posX4 < 0){
            valX4 = -valX4;
        }

        if (posY4 + pelotaHeight > contenedorHeight || posY4 < 0){
            valY4 = -valY4;
        }

        pelotaCuatro.style.left = posX4 + 'px';
        pelotaCuatro.style.top = posY4 + 'px';
    }

    setInterval(moverPelotas, 20);
});




const ballContainer = document.getElementById('ball-container');

function createBall(){
    const ball = document.createElement('div');
    ball.className = 'ball';

    const size = Math.random() * 50 + 5; 
    ball.style.width = size + 'px';
    ball.style.height = size + 'px';

    const { width , height} = ballContainer.getBoundingClientRect();
    const x = Math.random() * (width - size);
    const y = Math.random() * (height - size);
    ball.style.left = x + 'px';
    ball.style.top = y + 'px';

    // Generar un color base aleatorio
    const baseColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    ball.style.backgroundColor = baseColor;

    // Aplicar variaciones de brillo al color base
    ball.style.boxShadow = `0 0 20px ${shadeColor(baseColor, -20)}, 0 0 30px ${shadeColor(baseColor, -10)}, 0 0 40px ${baseColor}`;

    ballContainer.appendChild(ball);

    const speed = Math.random() * 15 + 4; 
    const angle = Math.random() * Math.PI * 2;
    const vx = Math.cos(angle) * speed;
    const vy = Math.sin(angle) * speed;

    function update(){
        const currentX = parseFloat(ball.style.left);
        const currentY = parseFloat(ball.style.top);

        const newX = currentX + vx;
        const newY = currentY + vy;

        ball.style.left = (newX + width) % width + 'px';
        ball.style.top = (newY + height) % height + 'px';

        requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
}

// Función para ajustar el brillo del color
function shadeColor(color, percent) {
    const num = parseInt(color.slice(1), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) + amt;
    const G = (num >> 8 & 0x00FF) + amt;
    const B = (num & 0x0000FF) + amt;
    return '#' + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 + (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 + (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
}

for (let i = 0; i < 13; i++){
    createBall();
}


// Proyctos  mostrar por tanda 

// Obtener los elementos del DOM
let YahoraX = document.getElementById('YahoraX'); // web
let Noticias1 = document.getElementById('FlujoInfo_X'); // web
let tiempoApp = document.getElementById('tiempoapp'); // app
let enigmamente = document.getElementById('enigmamente'); // web
let mandalas = document.getElementById('mandala'); // desing
let beerweb = document.getElementById('beerapp'); // desing
let Fadecoweb = document.getElementById('fadecowed'); // web
let amzreview = document.getElementById('amzReview'); // web
let Proyctosporta = document.getElementById('portafolioproyect'); // web
let fadecostock = document.getElementById('fadecoapp'); // app
let pets_wed = document.getElementById('petsweb') //desing
let lofi_ = document.getElementById('lofi') //youtuve
let Fadeco_stock = document.getElementById('app_fadeco') //app
let app_fadeco_repaciones = document.getElementById('app_fadeco_repaciones') //app
let misterdinero007 = document.getElementById('misterdinero') //desing
let ecos = document.getElementById('frikilogia') //desing

let boxer = document.getElementById('project-cards');
let clear = document.getElementById('clear');


function todo(){
    let Yahora = YahoraX.innerHTML;
    let FlujoInfo = Noticias1.innerHTML;
    let webfadeco = Fadecoweb.innerHTML;
    let enigma = enigmamente.innerHTML;
    let fadeweb = Fadecoweb.innerHTML;
    let amz = amzreview.innerHTML;
    let portaproyect = Proyctosporta.innerHTML;
    let app_fadeco = fadecostock.innerHTML;
    let app_tiempo = tiempoApp.innerHTML;
    let libro = mandalas.innerHTML;
    let beer = beerweb.innerHTML;
    let pets = pets_wed.innerHTML;
    let lofi = lofi_.innerHTML; 
    let Fadeco_stock_actualizado = Fadeco_stock.innerHTML;
    let app_fadeco_repaciones_app = app_fadeco_repaciones.innerHTML;
    let mister = misterdinero007.innerHTML;
    let frikilogia = ecos.innerHTML;

    clear.style.display = 'none';

    boxer.innerHTML = `
    <div class="col-md-4 >${app_fadeco}</div>
    <div class="col-md-4 >${Yahora}</div> 
    <div class="col-md-4 >${webfadeco}</div>
    <div class="col-md-4 >${enigma}</div> 
    <div class="col-md-4 >${FlujoInfo}</div> 
    <div class="col-md-4 >${amz}</div> 
    <div class="col-md-4 >${portaproyect}</div>
    <div class="col-md-4 >${app_tiempo}</div>
    <div class="col-md-4 >${beer}</div>
    <div class="col-md-4 >${libro}</div>
    <div class="col-md-4 >${fadeweb}</div>
    <div class="col-md-4 >${pets}</div> 
    <div class="col-md-4 >${lofi}</div> 
    <div class="col-md-4 >${Fadeco_stock_actualizado}</div>
    <div class="col-md-4 >${app_fadeco_repaciones}</div>
    <div class="col-md-4 >${app_fadeco_repaciones_app}</div>
    <div class="col-md-4 >${mister}</div>
    <div class="col-md-4 >${frikilogia}</div>`;
}



function web() {
    if (YahoraX && Noticias1 && Fadecoweb) {
        let Yahora = YahoraX.innerHTML;
        let FlujoInfo = Noticias1.innerHTML;
        let webfadeco = Fadecoweb.innerHTML;
        let enigma = enigmamente.innerHTML;
        let amz = amzreview.innerHTML;
        let portaproyect = Proyctosporta.innerHTML;

        if (clear) clear.style.display = 'none';

        if (boxer) {
            boxer.innerHTML = `
            <div class="col-md-4 >${Yahora}</div> 
            <div class="col-md-4 >${FlujoInfo}</div> 
            <div class="col-md-4 >${webfadeco}</div>
            <div class="col-md-4 >${enigma}</div> 
            <div class="col-md-4 >${amz}</div> 
            <div class="col-md-4 >${portaproyect}</div>`;
        }
    } else {
        console.error('Uno o más elementos no existen en el DOM para la función web.');
    }
}

function app_1() {
    if (fadecostock && tiempoApp && Fadeco_stock&& app_fadeco_repaciones) {
        let app_fadeco = fadecostock.innerHTML;
        let app_tiempo = tiempoApp.innerHTML;
        let Fadeco_actulizado = Fadeco_stock.innerHTML;
        let app_reparaciones = app_fadeco_repaciones.innerHTML;

        if (clear) clear.style.display = 'none';

        if (boxer) {
            boxer.innerHTML = `
            <div class="col-md-4 >${app_fadeco}</div>
            <div class="col-md-4 >${app_tiempo}</div>
            <div class="col-md-4 >${Fadeco_actulizado}</div>
            <div class="col-md-4 >${app_reparaciones}</div>`;
        }
    } else {
        console.error('Uno o más elementos no existen en el DOM para la función app_1.');
    }
}

function desing() {
    if (mandalas && beerweb) {
        let libro = mandalas.innerHTML;
        let beer = beerweb.innerHTML;
        let pets = pets_wed.innerHTML;
        let lofibeats = lofi_.innerHTML; 
        let dinero007 = misterdinero007.innerHTML;
        let youtube_frikigoia = ecos.innerHTML;

        if (clear) clear.style.display = 'none';

        if (boxer) {
            boxer.innerHTML = `
            <div class="col-md-4 >${beer}</div>
            <div class="col-md-4 >${libro}</div>
            <div class="col-md-4 >${pets}</div>
            <div class="col-md-4 >${lofibeats}</div> 
            <div class="col-md-4 >${dinero007}</div>
            <div class="col-md-4 >${youtube_frikigoia}</div>`;
        }
    } else {
        console.error('Uno o más elementos no existen en el DOM para la función desing.');
    }
}





document.querySelector('.send-button').addEventListener('click', function() {
    this.classList.add('sending');
    this.innerHTML = '<i class="fas fa-paper-plane"></i>';

    // Simula una petición de envío
    setTimeout(() => {
        this.innerHTML = '<i class="fas fa-check" style="background-color: "red"></i>';
    }, 1000); // Simula 2 segundos de tiempo de envío
});
