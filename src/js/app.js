// ==========================================================================
// Módulo de exploración interactiva de habilidades (SENATI & Full Stack)
// ==========================================================================

const infoPorArea = {
  todos: "Mostrando todas las áreas: perfil equilibrado Full Stack Junior con formación sólida en Inteligencia Artificial (SENATI).",
  frontend: "Frontend: Maquetación semántica, interfaces responsivas, consumo de APIs y buenas prácticas con JavaScript moderno.",
  backend: "Backend: Creación de endpoints RESTful con Node.js y Express, manejo de datos y arquitectura limpia.",
  ia: "IA & SENATI: Análisis de requerimientos para aplicar modelos inteligentes, automatización de tareas y desarrollo de software orientado al futuro."
};

const botones = document.querySelectorAll(".filter-btn");
const salida = document.getElementById("output-box");

if (botones.length && salida) {
  botones.forEach(boton => {
    boton.addEventListener("click", () => {
      // 1. Quitar clase active a todos los botones
      botones.forEach(b => b.classList.remove("active"));
      
      // 2. Activar el botón presionado
      boton.classList.add("active");
      
      // 3. Cambiar el texto dinámico según el área seleccionada
      const area = boton.getAttribute("data-area");
      salida.textContent = infoPorArea[area] || infoPorArea.todos;
    });
  });
}
