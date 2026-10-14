let isRuning = false;

self.onmessage = function (event) {
  if (isRuning) return;

  isRuning = true;

  const state = event.data;
  const { activeTask, secondsRemaining } = state;

  const endDate = activeTask.startDate + secondsRemaining * 1000;
  const now = Date.now();

  // contar decrescente quanto tempo falta para o timer zerar
  let countDwonSeconds = Math.ceil((endDate - now) / 1000);

  function tick() {
    // enviando para o providar quantos segundos faltam
    self.postMessage(countDwonSeconds);

    const now = Date.now();
    countDwonSeconds = Math.floor((endDate - now) / 1000);

    setTimeout(tick, 1000);
  }

  tick();
};
