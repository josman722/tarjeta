// Generar tormenta de nieve
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '❄';
    snowflake.style.left = `${Math.random() * window.innerWidth}px`;
    snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`; // Velocidad aleatoria
    snowflake.style.fontSize = `${Math.random() * 10 + 10}px`; // Tamaño aleatorio
    document.body.appendChild(snowflake);

    // Eliminar después de que caiga
    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}
setInterval(createSnowflake, 100);
document.body.addEventListener("mousemove", (event) => {
    const sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");
    sparkle.style.left = `${event.clientX}px`;
    sparkle.style.top = `${event.clientY}px`;
  
    document.body.appendChild(sparkle);
  
    // Eliminar la partícula después de la animación
    setTimeout(() => {
      sparkle.remove();
    }, 1000); // 1 segundo (igual que la duración de la animación)
  });
  const text = "Este es un texto que aparece letra por letra.";
  const textContainer = document.getElementById("animated-text");
  
  let index = 0;
  
  function typeText() {
    if (index < text.length) {
      textContainer.textContent += text[index]; // Agrega una letra a la vez
      index++;
      setTimeout(typeText, 100); // Ajusta la velocidad (100ms por letra)
    }
  }
  
  typeText();