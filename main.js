
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
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.09835207006!2d-68.5851663!3d-31.631157399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96813ee4b75ffe13%3A0x7ce40081ae85461d!2sSalon%20Peumayen%20Eventos!5e0!3m2!1ses!2sar!4v1793746568957!5m2!1ses!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>' +
        'Podes ampliar el mapa',
        
        
    })
  });

