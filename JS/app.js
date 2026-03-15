// 1. BASE DE DATOS DE LA MALLA
const subjectsData = [
    // NIVEL 1
    { id: "7017102", name: "MATEMÁTICAS OPERATIVAS", credits: 4, level: 1, reqIds: [], reqCreds: 0, icon: "🔢" },
    { id: "7017103", name: "SALUD PÚBLICA", credits: 4, level: 1, reqIds: [], reqCreds: 0, icon: "🏥" },
    { id: "7017104", name: "ADMINISTRACIÓN", credits: 3, level: 1, reqIds: [], reqCreds: 0, icon: "📊" },
    { id: "7017105", name: "COMUNICACIÓN", credits: 3, level: 1, reqIds: [], reqCreds: 0, icon: "🗣️" },
    { id: "7017107", name: "PROYECTO DE VIDA", credits: 2, level: 1, reqIds: [], reqCreds: 0, icon: "🌱" },
    { id: "9070101", name: "ENGLISH 1", credits: 2, level: 1, reqIds: [], reqCreds: 0, icon: "🇺🇸" },

    // NIVEL 2
    { id: "7017202", name: "ESTADÍSTICA DESCRIPTIVA", credits: 3, level: 2, reqIds: ["7017102"], reqCreds: 0, icon: "📈" },
    { id: "7017204", name: "ADMINISTRACIÓN PÚBLICA", credits: 3, level: 2, reqIds: ["7017104"], reqCreds: 0, icon: "🏛️" },
    { id: "7017205", name: "CONTABILIDAD", credits: 3, level: 2, reqIds: ["7017104"], reqCreds: 0, icon: "📒" },
    { id: "7017232", name: "ECONOMÍA", credits: 3, level: 2, reqIds: ["7017104"], reqCreds: 0, icon: "💵" },
    { id: "7018201", name: "DERECHO CONSTITUCIONAL", credits: 2, level: 2, reqIds: [], reqCreds: 12, icon: "⚖️" },
    { id: "7018202", name: "FILOSOFIA", credits: 2, level: 2, reqIds: ["7017107"], reqCreds: 0, icon: "🤔" },
    { id: "9070102", name: "ENGLISH 2", credits: 2, level: 2, reqIds: ["9070101"], reqCreds: 0, icon: "🇺🇸" },

    // NIVEL 3
    { id: "7017304", name: "PLANIFICACIÓN EN SALUD", credits: 4, level: 3, reqIds: ["7017103", "7017204"], reqCreds: 0, icon: "📋" },
    { id: "7017605", name: "SALUD AMBIENTAL", credits: 3, level: 3, reqIds: [], reqCreds: 30, icon: "🌍" },
    { id: "7018303", name: "FINANZAS", credits: 3, level: 3, reqIds: ["7017205"], reqCreds: 0, icon: "💰" },
    { id: "7018305", name: "DERECHO LABORAL", credits: 3, level: 3, reqIds: [], reqCreds: 30, icon: "⚖️" },
    { id: "7018705", name: "CIENCIAS SOCIALES Y SALUD", credits: 3, level: 3, reqIds: ["7017103"], reqCreds: 0, icon: "👥" },
    { id: "9070103", name: "ENGLISH 3", credits: 2, level: 3, reqIds: ["9070102"], reqCreds: 0, icon: "🇺🇸" },

    // NIVEL 4
    { id: "7017050", name: "CÁTEDRA CIUDADANA", credits: 1, level: 4, reqIds: [], reqCreds: 40, icon: "🕊️" },
    { id: "7017302", name: "SEMINARIO HÉCTOR ABAD", credits: 2, level: 4, reqIds: ["7017103"], reqCreds: 0, icon: "📖" },
    { id: "7017401", name: "EPIDEMIOLOGÍA", credits: 3, level: 4, reqIds: ["7017202"], reqCreds: 0, icon: "🔬" },
    { id: "7017402", name: "SEGURIDAD SOCIAL", credits: 3, level: 4, reqIds: ["7017304"], reqCreds: 0, icon: "🛡️" },
    { id: "7017601", name: "FUNDAMENTOS DE INVESTIGACIÓN", credits: 3, level: 4, reqIds: [], reqCreds: 40, icon: "🔍" },
    { id: "7018404", name: "COSTOS EN SALUD", credits: 4, level: 4, reqIds: ["7018303"], reqCreds: 0, icon: "📉" },
    { id: "9070104", name: "ENGLISH 4", credits: 2, level: 4, reqIds: ["9070103"], reqCreds: 0, icon: "🇺🇸" },

    // NIVEL 5
    { id: "7017502", name: "SISTEMAS DE SALUD", credits: 3, level: 5, reqIds: ["7017402"], reqCreds: 0, icon: "⚙️" },
    { id: "7018302", name: "PARTICIPACION SOCIAL", credits: 3, level: 5, reqIds: ["7018705", "7017204"], reqCreds: 0, icon: "🤝" },
    { id: "7018503", name: "PROCESOS ADMIN EN SALUD I", credits: 4, level: 5, reqIds: ["7017402", "7018303"], reqCreds: 0, icon: "📂" },
    { id: "7018504", name: "ECONOMÍA COLOMBIANA", credits: 3, level: 5, reqIds: ["7017232"], reqCreds: 0, icon: "🇨🇴" },
    { id: "7018505", name: "PRESUPUESTOS", credits: 3, level: 5, reqIds: ["7018303", "7018404"], reqCreds: 0, icon: "🧾" },
    { id: "9070105", name: "ENGLISH 5", credits: 2, level: 5, reqIds: ["9070104"], reqCreds: 0, icon: "🇺🇸" },

    // NIVEL 6
    { id: "7017600", name: "ATENCIÓN PRIMARIA", credits: 3, level: 6, reqIds: [], reqCreds: 70, icon: "🩺" },
    { id: "7017702", name: "ÉTICA", credits: 2, level: 6, reqIds: [], reqCreds: 70, icon: "⚖️" },
    { id: "7018601", name: "DERECHO COMERCIAL", credits: 3, level: 6, reqIds: ["7018303"], reqCreds: 0, icon: "📜" },
    { id: "7018602", name: "PROCESOS ADMIN EN SALUD II", credits: 4, level: 6, reqIds: ["7018503"], reqCreds: 0, icon: "📁" },
    { id: "7018604", name: "ECONOMÍA DE LA SALUD", credits: 3, level: 6, reqIds: ["7017232", "7018404"], reqCreds: 0, icon: "⚕️" },
    { id: "7018605", name: "CONTRATACIÓN EN SALUD", credits: 3, level: 6, reqIds: [], reqCreds: 90, icon: "✍️" },

    // NIVEL 7
    { id: "7017501", name: "SEGURIDAD Y SALUD TRABAJO", credits: 3, level: 7, reqIds: [], reqCreds: 70, icon: "🦺" },
    { id: "7018701", name: "DEMOGRAFÍA", credits: 2, level: 7, reqIds: [], reqCreds: 70, icon: "🗺️" },
    { id: "7018704", name: "EDUCACIÓN PARA LA SALUD", credits: 4, level: 7, reqIds: ["7017600"], reqCreds: 0, icon: "🎓" },
    { id: "7018706", name: "INVESTIGACIÓN ADMIN SALUD", credits: 4, level: 7, reqIds: ["7017601"], reqCreds: 0, icon: "🔬" },
    { id: "7018901", name: "GESTIÓN DE PROYECTOS", credits: 3, level: 7, reqIds: [], reqCreds: 80, icon: "🚀" },

    // NIVEL 8
    { id: "7017801", name: "ADMIN TALENTO HUMANO", credits: 3, level: 8, reqIds: [], reqCreds: 90, icon: "👥" },
    { id: "7017805", name: "EMPRENDIMIENTO", credits: 2, level: 8, reqIds: [], reqCreds: 90, icon: "💡" },
    { id: "7018800", name: "CONTROL INTERNO", credits: 3, level: 8, reqIds: [], reqCreds: 108, icon: "✅" },
    { id: "7018803", name: "ADMINISTRACIÓN FINANCIERA", credits: 4, level: 8, reqIds: ["7018303"], reqCreds: 0, icon: "🏦" },
    { id: "7018805", name: "EMERGENCIAS Y DESASTRES", credits: 3, level: 8, reqIds: [], reqCreds: 40, icon: "🚨" },
    { id: "7018807", name: "TRABAJO DE GRADO I", credits: 3, level: 8, reqIds: ["7018706"], reqCreds: 0, icon: "📚" },

    // NIVEL 9
    { id: "7018806", name: "MERCADEO", credits: 3, level: 9, reqIds: [], reqCreds: 100, icon: "🛒" },
    { id: "7018902", name: "ORGANIZACIONES EN SALUD", credits: 3, level: 9, reqIds: ["7018602"], reqCreds: 0, icon: "🏢" },
    { id: "7018903", name: "ADMIN RECURSOS FÍSICOS", credits: 3, level: 9, reqIds: ["7018602"], reqCreds: 0, icon: "📦" },
    { id: "7018904", name: "CALIDAD Y AUDITORÍA", credits: 4, level: 9, reqIds: ["7018602", "7018800"], reqCreds: 0, icon: "⭐" },
    { id: "7018905", name: "TRABAJO DE GRADO II", credits: 3, level: 9, reqIds: ["7018807"], reqCreds: 0, icon: "🎓" },

    // NIVEL 10
    { id: "7018999", name: "PRÁCTICA", credits: 14, level: 10, reqIds: [], reqCreds: 144, icon: "💼" },

    // MATERIAS ELECTIVAS
    { id: "7018911", name: "BÚSQUEDA DE BASES DE DATOS", credits: 2, level: "Electiva", reqIds: [], reqCreds: 0, icon: "🔎" },
    { id: "7018928", name: "DETERMINANTES DE LA PÚBLICA", credits: 2, level: "Electiva", reqIds: [], reqCreds: 0, icon: "📊" },
    { id: "7018703", name: "ELECTIVA PROFESIONAL I", credits: 2, level: "Electiva", reqIds: [], reqCreds: 0, icon: "📘" },
    { id: "7018900", name: "ELECTIVA PROFESIONAL II", credits: 2, level: "Electiva", reqIds: [], reqCreds: 0, icon: "📗" },
    { id: "7018927", name: "FORMACIÓN ESTÉTICA", credits: 2, level: "Electiva", reqIds: [], reqCreds: 0, icon: "🎨" },
    { id: "7018929", name: "RECURSOS DE LA INFORMACIÓN", credits: 2, level: "Electiva", reqIds: [], reqCreds: 0, icon: "💻" },
    { id: "7018910", name: "SALUD INTERNACIONAL", credits: 2, level: "Electiva", reqIds: [], reqCreds: 0, icon: "🌎" }
];

// 2. ESTADO DE LA APLICACIÓN
let passedSubjects = JSON.parse(localStorage.getItem('malla_luisa')) || [];
let totalCredits = 0;

// 3. FUNCIONES PRINCIPALES
function init() {
    renderGrid();
    updateStatus();
}

// Dibujar toda la malla en el HTML
function renderGrid() {
    const container = document.getElementById('malla-container');
    container.innerHTML = '';

    // 3.1 Renderizar Niveles del 1 al 10
    for (let level = 1; level <= 10; level++) {
        const subjectsInLevel = subjectsData.filter(s => s.level === level);
        if (subjectsInLevel.length === 0) continue;

        const section = document.createElement('div');
        section.className = 'nivel-section';
        section.innerHTML = `<h3 class="nivel-title">Nivel ${level}</h3><div class="subjects-grid" id="grid-level-${level}"></div>`;
        container.appendChild(section);

        const grid = document.getElementById(`grid-level-${level}`);
        crearTarjetas(subjectsInLevel, grid);
    }

    // 3.2 Renderizar Electivas al final
    const electivas = subjectsData.filter(s => s.level === "Electiva");
    if (electivas.length > 0) {
        const section = document.createElement('div');
        section.className = 'nivel-section';
        // Agregamos el aviso de los créditos mínimos requeridos
        section.innerHTML = `<h3 class="nivel-title" style="background: #f48fb1; color: white;">Materias Electivas (Mínimo 4 créditos)</h3><div class="subjects-grid" id="grid-electivas"></div>`;
        container.appendChild(section);

        const grid = document.getElementById('grid-electivas');
        crearTarjetas(electivas, grid);
    }
}

// Función auxiliar para no repetir código al crear las tarjetas
function crearTarjetas(materias, contenedor) {
    materias.forEach(subject => {
        const card = document.createElement('div');
        card.id = `card-${subject.id}`;
        card.className = 'subject-card locked'; 
        card.innerHTML = `
            <div class="subject-icon">${subject.icon}</div>
            <div class="subject-name">${subject.name}</div>
            <div class="subject-credits">${subject.credits} Créditos</div>
        `;
        
        card.addEventListener('click', () => toggleSubject(subject.id));
        contenedor.appendChild(card);
    });
}

// Calcular créditos y actualizar qué se puede ver y qué no
function updateStatus() {
    totalCredits = 0;
    passedSubjects.forEach(id => {
        const sub = subjectsData.find(s => s.id === id);
        if (sub) totalCredits += sub.credits;
    });
    document.getElementById('total-credits').innerText = totalCredits;

    subjectsData.forEach(subject => {
        const card = document.getElementById(`card-${subject.id}`);
        if (!card) return; // Por si alguna tarjeta no se ha renderizado

        const meetsReqIds = subject.reqIds.every(reqId => passedSubjects.includes(reqId));
        const meetsReqCreds = totalCredits >= subject.reqCreds;

        card.classList.remove('locked', 'unlocked', 'passed');

        if (passedSubjects.includes(subject.id)) {
            card.classList.add('passed');
        } else if (meetsReqIds && meetsReqCreds) {
            card.classList.add('unlocked');
        } else {
            card.classList.add('locked');
        }
    });
}

// Marcar o desmarcar una materia al hacerle clic
function toggleSubject(id) {
    const subject = subjectsData.find(s => s.id === id);
    const card = document.getElementById(`card-${id}`);

    if (card.classList.contains('locked')) {
        return; 
    }

    if (passedSubjects.includes(id)) {
        passedSubjects = passedSubjects.filter(passedId => passedId !== id);
    } else {
        passedSubjects.push(id);
    }

    localStorage.setItem('malla_luisa', JSON.stringify(passedSubjects));
    updateStatus();
}

// Arrancar el programa
init();