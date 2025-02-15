// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "He llenado tu tiempo vacío de aventuras y más", time: 20 },
  { text: "Y mi mente ha parido nostalgia por no verte ya", time: 28 },
  { text: "Y haciendo el amor te he nombrado sin quererlo yo", time: 38 },
  { text: "Porque en todas busco lo salvaje de tu sexo, amor", time: 43 },
  { text: "Hasta en sueño he creído tenerte devorándome", time: 48 },
  { text: "Y he mojado mis sábanas blancas recordándote", time: 53 },
  { text: "En mi cama nadie es como tú", time: 57 },
  { text: "No he podido encontrar la mujer", time: 59 },
  { text: "Que dibuje mi cuerpo en cada rincón", time: 64 },
  { text: "Sin que sobre un pedazo de piel", time: 67 },
  { text: "Ay, ven devórame otra vez", time: 70 }, 
  { text: "Ven devórame otra vez", time: 72 },
  { text: "Ven castígame con tus deseos más", time: 75 },
  { text: "Que el vigor lo guardé para ti", time: 78 },
  { text: "Ay, ven devórame otra vez", time: 80 },
  { text: "Ven devórame otra vez", time: 85 },
  { text: "Que la boca me sabe a tu cuerpo", time: 90 },
  
  { text: "Hasta en sueño he creído tenerte devorándome", time: 106 },
  { text: "Y he mojado mis sábanas blancas llorándote", time: 108 },
  { text: "En mi cama nadie es como tú", time:  114},
  { text: "No he podido encontrar la mujer", time: 118 },
  { text: "Que dibuje mi cuerpo en cada rincón", time: 120 },
  { text: "Sin que sobre un pedazo de piel", time: 122 },
  { text: "Ay, ven devórame otra vez", time: 124 },
  { text: "Ven devórame otra vez", time: 128},
  { text: "Ven castígame con tus deseos más", time: 134 },
  { text: "Que el vigor lo guardé para ti", time: 135 },
  { text: "Ay, ven devórame otra vez", time: 140 },
  { text: "Ven devórame otra vez", time: 145 },
  { text: "Que la boca me sabe a tu cuerpo", time: 150 },
  { text: "Desesperan mis ganas por ti", time: 155 },
  { text: "Hasta en sueño he creído tenerte devorándome", time: 160 },
  { text: "Y he mojado mis sábanas blancas llorándote", time: 165 },
  { text: "En mi cama nadie es como tú", time: 170 },
  { text: "No he podido encontrar la mujer", time: 175 },
  { text: "Que dibuje mi cuerpo en cada rincón", time: 180 },
  { text: "Sin que sobre un pedazo de piel", time: 185 },
  { text: "Ven devórame otra vez", time: 190 },
  { text: "Ven devórame otra vez", time: 195 },
  { text: "Ven castígame con tus deseos más", time: 200 },
  { text: "Que el vigor lo guardé para ti", time: 205 },
  { text: "Ven devórame otra vez", time: 210 },
  { text: "Ven devórame otra vez", time: 215 },
  { text: "Que la boca me sabe a tu cuerpo", time: 220 },
  { text: "Desesperan mis ganas por ti", time: 225 },
  { text: "Ven devórame otra vez", time: 230 },
  { text: "Ven devórame otra vez", time: 235 },
  { text: "Ven devórame otra vez", time: 240 },
  { text: "Devórame otra vez", time: 245 },
  { text: "Hace tiempo que mi cuerpo está reclamando en silencio", time: 250 },
  { text: "Tus momentos de placer", time: 255 },
  { text: "Ven devórame otra vez", time: 260 },
  { text: "Devórame otra vez", time: 265 },
  { text: "Son ansias de amarte, deseos de mi carne", time: 270 },
  { text: "Que hacen que te llame, ven devórame", time: 275 },
  { text: "Quiero esa sensualidad", time: 280 },
  { text: "Ven devórame otra vez", time: 285 },
  { text: "Devórame otra vez", time: 290 },
  { text: "Devórame suavecito y con calma hasta el amanecer", time: 295 },
  { text: "Ven devórame otra vez", time: 300 },
  { text: "Devórame otra vez", time: 305 },
  { text: "Ven castígame con tus deseos más", time: 310 },
  { text: "Que el vigor lo guardé para ti ven", time: 315 }
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);