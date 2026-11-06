
let diaEvento = new Date('December 11, 2026 20:00:00').getTime();
let boton = document.querySelector("#btn")

// Lógica para simular la carga y actualizar el porcentaje
    const percentageEl = document.getElementById('percentage');
    const progressBarEl = document.getElementById('progress-bar');
    const preloaderEl = document.getElementById('preloader');

    let currentProgress = 0;

    const interval = setInterval(() => {
      // Incremento aleatorio para dar sensación de carga real
      currentProgress += Math.floor(Math.random() * 8) + 2;

      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
        
        // Ocultar el preloader al terminar
        setTimeout(() => {
          preloaderEl.classList.add('hidden');
          document.body.style.overflow = 'auto'; // Habilitar scroll de la página
        }, 500);
      }

      percentageEl.textContent = `${currentProgress}%`;
      progressBarEl.style.width = `${currentProgress}%`;
    }, 120);

// diaEvento = new Date().getTime() + 1_000 * 20;

let relojE = document.getElementById('reloj');

const diaM = 86_400_000;
const horaM = 3_600_000;
const minutoM = 60_000;
const segundoM = 1_000;
const ejecutarReloj = setInterval(
    () => {

        let hoy = new Date().getTime();
        let distancia = diaEvento - hoy;

        let diaR = Math.trunc(distancia / diaM);

        let horaR = Math.trunc((distancia % diaM) / horaM);

        let minutoR = Math.trunc((distancia % horaM) / minutoM);

        let segundoR = Math.trunc((distancia % minutoM) / segundoM);

        if (distancia  < 1) {
            clearInterval(ejecutarReloj);
            diaEventoAhora();
        }

        pintarElementos(diaR, horaR, minutoR, segundoR);

    }
, 1000);

let creDia = document.getElementById('cre-dia');
let creHora = document.getElementById('cre-hora');
let creMinuto = document.getElementById('cre-minuto');
let creSegundo = document.getElementById('cre-segundo');
function pintarElementos(dia, hora, minuto, segundo) {

    segundo = (segundo < 10) ? '0' + segundo : segundo;

    minuto = (minuto < 10) ? '0' + minuto : minuto;

    hora = (hora < 10) ? '0' + hora : hora;

    creDia.innerHTML = dia;
    creHora.innerHTML = hora;
    creMinuto.innerHTML = minuto;
    creSegundo.innerHTML = segundo;
}

function diaEventoAhora () {
    alert('Dia del Evento!!!');
    // Todo el codigo cuando el evento llegue
}




boton.addEventListener("click", () => {

    Swal.fire({
      title: '<strong>VER LA UBICACION<u></u></strong>',
      icon: 'success',
      html:
        'INGRESÁ' +
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3340.2411198286645!2d-62.85825102459845!3d-33.15529618245711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95cecbfb63f10c7d%3A0x2053aa0f57648792!2sCENTRO%20DE%20JUBILADOS%20Y%20PENSIONADOS%20DE%20LABORDE!5e0!3m2!1ses!2sar!4v1793973218164!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>' +
        'Podes ampliar el mapa',
        
        
    })
  });

