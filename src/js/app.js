// ==========================================================================
// Consola de Diagnóstico de Arquitectura & Telemetría (SENATI & Full Stack)
// ==========================================================================

const specsPorModulo = {
  overview: [
    { label: "MÓDULO", val: "PANEL GENERAL DE INGENIERÍA", highlight: true },
    { label: "PERFIL", val: "Full Stack Junior con formación técnica en IA (SENATI Perú)." },
    { label: "ENFOQUE", val: "Sistemas web modulares, trazabilidad de código y desarrollo con buenas prácticas." },
    { label: "ESTADO", val: "Disponible para incorporación a proyectos y equipos técnicos." }
  ],
  frontend: [
    { label: "MÓDULO", val: "SISTEMAS DE INTERFAZ & RENDERIZADO", highlight: true },
    { label: "STACK", val: "HTML5 Semántico, CSS3 Modular (Variables, Grid, Flexbox), JavaScript ES6+." },
    { label: "CRITERIOS", val: "Accesibilidad, rendimiento web (Core Web Vitals), diseño adaptable sin frameworks pesados innecesarios." },
    { label: "ESCALA", val: "Preparado para integración directa con React y TypeScript." }
  ],
  backend: [
    { label: "MÓDULO", val: "SERVICIOS & ARQUITECTURA DE DATOS", highlight: true },
    { label: "CORE", val: "Node.js runtime, Express framework, patrones MVC y capas de servicio." },
    { label: "APIs", val: "Diseño RESTful estandarizado, respuestas JSON estructuradas, manejo de códigos HTTP y middlewares." },
    { label: "PERSISTENCIA", val: "Conceptos aplicados en modelado relacional (SQL) y documental (NoSQL)." }
  ],
  ia: [
    { label: "MÓDULO", val: "INGENIERÍA DE SOFTWARE CON IA & SENATI", highlight: true },
    { label: "FORMACIÓN", val: "Carrera técnica en SENATI enfocada en la convergencia de software e Inteligencia Artificial." },
    { label: "CAPACIDADES", val: "Integración de endpoints de modelos LLM, automatización de flujos y procesamiento de datos." },
    { label: "VALOR", val: "Capacidad de aplicar IA para resolver cuellos de botella en sistemas de software reales." }
  ],
  pipeline: [
    { label: "MÓDULO", val: "DEVOPS, GIT & CONTROL DE VERSIONES", highlight: true },
    { label: "CONTROL", val: "Flujos de trabajo ramificados (feature branches), inspección rigurosa y resolución de estados." },
    { label: "HERRAMIENTAS", val: "Git CLI, Lazygit, repositorios GitHub, Linux (WSL) y Gentle Shell." },
    { label: "ESTÁNDAR", val: "Conventional Commits (feat, fix, refactor, chore) y despliegue continuo." }
  ],
  proyectos: [
    { label: "PROJ-01", val: "RESTful Auth & Core Services Gateway (Node.js, Express, JWT, REST)", highlight: true },
    { label: "PROJ-02", val: "Pipeline IA SENATI: Extracción y tratamiento determinístico de datos con LLMs." },
    { label: "PROJ-03", val: "CLI de Auditoría Git: Scripts Linux/Bash para trazabilidad y reglas de commit." },
    { label: "ESTADO", val: "Código fuente disponible en GitHub: @dev-angel17." }
  ]
};

const botonesConsola = document.querySelectorAll(".console-btn");
const displayConsola = document.getElementById("diagnostic-display");

function renderizarDiagnostico(specKey) {
  const datos = specsPorModulo[specKey] || specsPorModulo.overview;
  displayConsola.innerHTML = "";

  datos.forEach(item => {
    const row = document.createElement("div");
    row.className = "term-row";

    const labelSpan = document.createElement("span");
    labelSpan.className = "term-dim";
    labelSpan.textContent = `${item.label}: `;

    const valSpan = document.createElement("span");
    if (item.highlight) {
      valSpan.className = "term-highlight";
    }
    valSpan.textContent = item.val;

    row.appendChild(labelSpan);
    row.appendChild(valSpan);
    displayConsola.appendChild(row);
  });
}

if (botonesConsola.length && displayConsola) {
  botonesConsola.forEach(boton => {
    boton.addEventListener("click", () => {
      botonesConsola.forEach(b => b.classList.remove("active"));
      boton.classList.add("active");
      const spec = boton.getAttribute("data-spec");
      renderizarDiagnostico(spec);
    });
  });
}
