import gravitional from "../assets/audios/gravitational_beep.mp3";

export function LoadBeep() {
  const audio = new Audio(gravitional);
  audio.play();

  return () => {
    audio.currentTime = 0;
    audio.play().catch((error) => console.log("Erro ao tocar a musica", error));
  };
}
