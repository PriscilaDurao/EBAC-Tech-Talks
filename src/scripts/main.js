AOS.init({
  duration: 1000,
  once: true,
});

const dataDoEvento = new Date("Jun 29, 2027 19:00:00").getTime();

const contaAsHoras = setInterval(function () {
  const agora = new Date().getTime();
  const distanciaAteOEvento = dataDoEvento - agora;

  const diaEmMs = 1000 * 60 * 60 * 24;
  const horaEmMs = 1000 * 60 * 60;
  const minutoEmMs = 1000 * 60;

  const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
  const horasAteOEvento = Math.floor(
    (distanciaAteOEvento % diaEmMs) / horaEmMs,
  );
  const minutosAteOEvento = Math.floor(
    (distanciaAteOEvento % horaEmMs) / minutoEmMs,
  );
  const segundosAteOEvento = Math.floor(
    (distanciaAteOEvento % minutoEmMs) / 1000,
  );

  const elementoContador = document.getElementById("contador");

  if (distanciaAteOEvento < 0) {
    clearInterval(contaAsHoras);
    elementoContador.innerHTML = "Evento expirado";
  } else {
    elementoContador.innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`;
  }
}, 1000);
