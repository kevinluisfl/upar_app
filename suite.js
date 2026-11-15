/**
 * ==============================================================================
 * UPARAPP STUDIO - CONTROLADOR MAESTRO DE LA SUITE (4 APPS EN 1)
 * ==============================================================================
 */

const SUITE_KEYS = {
    THEME: 'uparapp_suite_theme',
    LANG: 'uparapp_suite_lang',
    CHILD_THEMES: ['uparpuzzle_theme', 'ruleta_theme', 'upartrivia_theme', 'upargrade_theme'],
    CHILD_LANGS: ['uparpuzzle_lang', 'ruleta_lang', 'upartrivia_lang', 'upargrade_lang']
};

/* Configuración de identidad visual (Título, Color, Icono, Insignia y Subtítulo) para Inicio y cada App */
const BRAND_PROFILES = {
    dashboard: {
        titleHtml: 'Upar<span class="text-indigo">App</span>',
        icon: 'fa-solid fa-cubes',
        logoGrad: 'bg-grad-indigo',
        badgeClass: 'badge-indigo',
        badgeEs: 'Suite 4 en 1',
        badgeEn: '4-in-1 Suite',
        subEs: 'Ecosistema interactivo de herramientas para el aula',
        subEn: 'Interactive classroom tools ecosystem'
    },
    uparpuzzle: {
        titleHtml: 'Upar<span class="text-blue">Puzzle</span>',
        icon: 'fa-solid fa-puzzle-piece',
        logoGrad: 'bg-grad-blue',
        badgeClass: 'badge-blue',
        badgeEs: 'Interactivo',
        badgeEn: 'Interactive',
        subEs: 'Generador algorítmico de Sopas de Letras y Crucigramas',
        subEn: 'Algorithmic Word Search & Crossword Generator'
    },
    uparwheel: {
        titleHtml: 'Upar<span class="text-emerald">Wheel</span>',
        icon: 'fa-solid fa-dharmachakra',
        logoGrad: 'bg-grad-emerald',
        badgeClass: 'badge-emerald',
        badgeEs: 'Interactivo',
        badgeEn: 'Interactive',
        subEs: 'Ruleta de participación y selector interactivo para el aula',
        subEn: 'Interactive participation wheel and classroom selector'
    },
    upartrivia: {
        titleHtml: 'Upar<span class="text-amber">Trivia</span>',
        icon: 'fa-solid fa-brain',
        logoGrad: 'bg-grad-amber',
        badgeClass: 'badge-amber',
        badgeEs: 'Edición Millonario',
        badgeEn: 'Millionaire Edition',
        subEs: 'Plataforma interactiva de trivias por niveles para el aula',
        subEn: 'Interactive tiered trivia platform for the classroom'
    },
    upargrade: {
        titleHtml: 'Upar<span class="text-rose">Grade</span>',
        icon: 'fa-solid fa-qrcode',
        logoGrad: 'bg-grad-rose',
        badgeClass: 'badge-rose',
        badgeEs: 'ICFES & OMR',
        badgeEn: 'ICFES & OMR',
        subEs: 'Generador de hojas de respuesta y calificación óptica automatizada',
        subEn: 'OMR answer sheet generator and automated optical grading'
    }
};

const SUITE_I18N = {
    es: {
        navHome: 'Inicio',
        btnMasterBackup: 'Respaldo',
        heroKicker: '<i class="fa-solid fa-wand-magic-sparkles"></i> UparSoft Educación Digital',
        heroTitle: 'Bienvenido a UparApp Studio',
        heroDesc: 'Selecciona cualquiera de las 4 herramientas pedagógicas interactivas. Todos tus datos, temas visuales e idioma están sincronizados automáticamente en un solo lugar.',
        statTotalSaved: 'Registros Guardados',
        btnHeroExport: 'Exportar Todo',
        btnHeroImport: 'Importar Todo',
        tagPuzzle: 'Pasatiempos Didácticos',
        descPuzzle: 'Generador algorítmico interactivo de Sopas de Letras (con fusión multicolor en cruces) y Crucigramas inteligentes listos para proyectar o imprimir en PDF/PNG.',
        badgePuzzlePrint: 'Impresión A4 & PNG',
        launchPuzzle: 'Abrir UparPuzzle',
        tagWheel: 'Participación en Aula',
        descWheel: 'Doble ruleta aleatoria sincronizada para selección de estudiantes y asignación de temas, con limpiador inteligente de listas de plataforma, voz y sonido real.',
        badgeWheelVoice: 'Narrador por Voz',
        launchWheel: 'Abrir UparWheel',
        tagTrivia: 'Edición Millonario',
        descTrivia: 'Competencia escolar por niveles estilo "¿Quién quiere ser millonario?" con 3 comodines, perfiles docentes, carga masiva (Excel/Texto/JSON), rondas a medida y ranking.',
        launchTrivia: 'Abrir UparTrivia',
        tagGrade: 'Evaluación ICFES OMR',
        descGrade: 'Diseñador de exámenes, generador de hojas de respuesta tipo ICFES (completas o simplificadas hasta 6 por página) y escáner óptico OMR por cámara o fotografía.',
        launchGrade: 'Abrir UparGrade',
        metricPuzzleUnit: 'actividades guardadas',
        metricWheelUnit: 'elementos en ruletas',
        metricTriviaBanksUnit: 'bancos de preguntas',
        metricTriviaScoresUnit: 'récords en ranking',
        metricGradeExamsUnit: 'exámenes creados',
        metricGradeResultsUnit: 'hojas calificadas',
        modalBackupTitle: 'Respaldo Maestro de UparApp Studio',
        modalBackupDesc: 'Exporta o importa en un único archivo .json todos los datos guardados en las 4 aplicaciones (crucigramas, listas de ruletas, bancos/rankings de trivia y exámenes/notas de UparGrade).',
        modalBtnExport: 'Descargar Respaldo (.json)',
        modalBtnImport: 'Cargar Archivo (.json)',
        modalBtnClose: 'Cerrar',
        footerText: '<strong>UparApp Studio</strong> — Suite Educativa creada por <a href="https://github.com/kevinluisfl" target="_blank">(klfl)</a> • UparSoft 💻',
        toastExportOk: 'Respaldo maestro de las 4 aplicaciones descargado con éxito',
        toastImportOk: 'Respaldo maestro restaurado en las 4 aplicaciones'
    },
    en: {
        navHome: 'Home',
        btnMasterBackup: 'Backup',
        heroKicker: '<i class="fa-solid fa-wand-magic-sparkles"></i> UparSoft Digital Education',
        heroTitle: 'Welcome to UparApp Studio',
        heroDesc: 'Pick any of the 4 interactive teaching tools below. All your saved data, visual themes, and language preferences are automatically synced in one place.',
        statTotalSaved: 'Total Saved Records',
        btnHeroExport: 'Export All',
        btnHeroImport: 'Import All',
        tagPuzzle: 'Educational Puzzles',
        descPuzzle: 'Interactive algorithmic generator for Word Searches (with multi-color intersection blending) and smart Crosswords ready to project or print in PDF/PNG.',
        badgePuzzlePrint: 'A4 Print & PNG',
        launchPuzzle: 'Open UparPuzzle',
        tagWheel: 'Classroom Selector',
        descWheel: 'Synchronized dual random wheel for student selection and topic assignment, featuring a smart platform list cleaner, voice narrator, and real sound.',
        badgeWheelVoice: 'Voice Narrator',
        launchWheel: 'Open UparWheel',
        tagTrivia: 'Millionaire Edition',
        descTrivia: 'Tiered classroom quiz game inspired by "Who Wants to Be a Millionaire?" with 3 lifelines, teacher profiles, multi-format bulk loader, custom rounds, and leaderboard.',
        launchTrivia: 'Open UparTrivia',
        tagGrade: 'ICFES OMR Grading',
        descGrade: 'Exam designer, ICFES-style optical answer sheet generator (full or compact up to 6 per page), and automated OMR scanner via camera or photo.',
        launchGrade: 'Open UparGrade',
        metricPuzzleUnit: 'saved activities',
        metricWheelUnit: 'wheel items',
        metricTriviaBanksUnit: 'question banks',
        metricTriviaScoresUnit: 'leaderboard records',
        metricGradeExamsUnit: 'created exams',
        metricGradeResultsUnit: 'graded sheets',
        modalBackupTitle: 'UparApp Studio Master Backup',
        modalBackupDesc: 'Export or import all saved data across all 4 applications (puzzles, wheel lists, trivia banks/leaderboards, and OMR exams/grades) in a single .json file.',
        modalBtnExport: 'Download Backup (.json)',
        modalBtnImport: 'Load File (.json)',
        modalBtnClose: 'Close',
        footerText: '<strong>UparApp Studio</strong> — Educational Suite created by <a href="https://github.com/kevinluisfl" target="_blank">(klfl)</a> • UparSoft 💻',
        toastExportOk: 'Master backup for all 4 apps downloaded successfully',
        toastImportOk: 'Master backup restored across all 4 apps'
    }
};

let suiteState = {
    activeApp: 'dashboard',
    theme: localStorage.getItem(SUITE_KEYS.THEME) || localStorage.getItem('uparpuzzle_theme') || 'light',
    lang: localStorage.getItem(SUITE_KEYS.LANG) || localStorage.getItem('uparpuzzle_lang') || 'es'
};

function st(key) {
    return SUITE_I18N[suiteState.lang]?.[key] ?? SUITE_I18N.es[key] ?? key;
}

/* --------------------------------------------------------------------------
   1. ACTUALIZACIÓN DINÁMICA DE LA MARCA ARRIBA A LA IZQUIERDA
   -------------------------------------------------------------------------- */
function updateTopBarBrandIdentity() {
    const profile = BRAND_PROFILES[suiteState.activeApp] || BRAND_PROFILES.dashboard;

    const logoEl = document.getElementById('suiteBrandLogo');
    const iconEl = document.getElementById('suiteBrandIcon');
    const titleEl = document.getElementById('suiteBrandTitle');
    const badgeEl = document.getElementById('uiSuiteBadge');
    const subEl = document.getElementById('uiSuiteSubtitle');

    if (logoEl) {
        logoEl.className = `suite-logo ${profile.logoGrad}`;
    }
    if (iconEl) {
        iconEl.className = profile.icon;
    }
    if (titleEl) {
        titleEl.innerHTML = profile.titleHtml;
    }
    if (badgeEl) {
        badgeEl.className = `suite-badge ${profile.badgeClass} hide-md`;
        badgeEl.textContent = suiteState.lang === 'en' ? profile.badgeEn : profile.badgeEs;
    }
    if (subEl) {
        subEl.textContent = suiteState.lang === 'en' ? profile.subEn : profile.subEs;
    }
}

/* --------------------------------------------------------------------------
   2. PERSISTENCIA Y NAVEGACIÓN ENTRE DASHBOARD Y LAS 4 APLICACIONES
   -------------------------------------------------------------------------- */
function persistThemeAndLangToStorage() {
    localStorage.setItem(SUITE_KEYS.THEME, suiteState.theme);
    SUITE_KEYS.CHILD_THEMES.forEach(k => localStorage.setItem(k, suiteState.theme));

    localStorage.setItem(SUITE_KEYS.LANG, suiteState.lang);
    SUITE_KEYS.CHILD_LANGS.forEach(k => localStorage.setItem(k, suiteState.lang));
}

function openSuiteApp(appKey) {
    suiteState.activeApp = appKey;
    persistThemeAndLangToStorage();
    updateTopBarBrandIdentity();

    document.querySelectorAll('.suite-nav-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.app === appKey);
    });

    document.querySelectorAll('.suite-view').forEach(v => v.classList.remove('active'));

    const footer = document.getElementById('suiteMainFooter');

    if (appKey === 'dashboard') {
        document.getElementById('viewDashboard').classList.add('active');
        if (footer) footer.classList.remove('hidden');
        refreshDashboardMetrics();
        return;
    }

    if (footer) footer.classList.add('hidden');

    const targetSection = document.getElementById(`viewApp_${appKey}`);
    const iframe = document.getElementById(`frame_${appKey}`);
    if (targetSection) targetSection.classList.add('active');

    if (iframe) {
        const targetUrl = `${iframe.dataset.src}?suite=1&theme=${suiteState.theme}&lang=${suiteState.lang}`;
        if (!iframe.getAttribute('src')) {
            iframe.onload = () => {
                injectSeamlessChildMode(iframe, appKey);
                syncSingleIframeAppearance(iframe);
            };
            iframe.setAttribute('src', targetUrl);
        } else {
            injectSeamlessChildMode(iframe, appKey);
            syncSingleIframeAppearance(iframe);
        }
    }
}

/**
 * Ajusta cada aplicación hija para eliminar barras o botones sueltos innecesarios:
 * - En UparGrade: quita la fila superior donde quedaba solo el botón "Imprimir Hoja".
 * - En UparWheel: mueve el botón desplegable "Configuración" junto a "+ Añadir Segunda Ruleta"
 *   (después de él) y oculta la fila superior vacía.
 */
function injectSeamlessChildMode(iframe, appKey) {
    try {
        const doc = iframe.contentDocument || iframe.contentWindow?.document;
        if (!doc || !doc.head) return;

        // En UparWheel: mover el contenedor .settings-dropdown-wrapper dentro de .controls-actions, justo después de #toggleWheel2Btn
        if (appKey === 'uparwheel') {
            const settingsDropdown = doc.querySelector('.settings-dropdown-wrapper');
            const controlsActions = doc.querySelector('.controls-actions');
            const wheel2Btn = doc.getElementById('toggleWheel2Btn');
            if (settingsDropdown && controlsActions && !controlsActions.contains(settingsDropdown)) {
                if (wheel2Btn && wheel2Btn.nextSibling) {
                    controlsActions.insertBefore(settingsDropdown, wheel2Btn.nextSibling);
                } else {
                    controlsActions.appendChild(settingsDropdown);
                }
            }
        }

        if (!doc.getElementById('uparSuiteSeamlessStyle')) {
            const style = doc.createElement('style');
            style.id = 'uparSuiteSeamlessStyle';
            style.textContent = `
                /* 1. Ocultar logos/títulos repetidos en las 4 apps hijas */
                .brand-group,
                header .brand-group,
                #appMainHeader .flex.items-center.gap-3:first-child,
                .app-header .header-top > div:first-child {
                    display: none !important;
                }
                /* 2. Ocultar botones duplicados de Idioma y Tema en las apps hijas */
                #btnLangToggle,
                #btnThemeToggle,
                #langToggleBtn,
                #themeToggleBtn {
                    display: none !important;
                }
                /* 3. En UparGrade: ocultar la fila superior que solo tenía "Imprimir Hoja" y dejar únicamente la barra de 4 pasos */
                ${appKey === 'upargrade' ? `
                .app-header > .header-container {
                    display: none !important;
                }
                .subnav-bar {
                    border-top: none !important;
                    padding-top: 0.45rem !important;
                    padding-bottom: 0.45rem !important;
                }
                ` : ''}
                /* 4. En UparWheel: ocultar la fila superior .header-top (ya que Configuración bajó junto a Añadir Segunda Ruleta) */
                ${appKey === 'uparwheel' ? `
                .app-header .header-top {
                    display: none !important;
                }
                .app-header {
                    padding: 0.5rem 1.25rem !important;
                    margin-bottom: 0.75rem !important;
                }
                ` : ''}
                /* 5. Compactar cabecera en UparPuzzle y UparTrivia */
                .app-header .header-container,
                #appMainHeader > div {
                    padding-top: 0.4rem !important;
                    padding-bottom: 0.4rem !important;
                    justify-content: center !important;
                    gap: 0.75rem !important;
                }
                /* 6. Ocultar el pie de página interno de cada app hija */
                footer, .app-footer, #appMainFooter {
                    display: none !important;
                }
            `;
            doc.head.appendChild(style);
        }
    } catch (e) {}
}

/**
 * Sincroniza Tema e Idioma dentro del iframe hijo
 */
// function syncSingleIframeAppearance(iframe) {
//     if (!iframe) return;

//     try {
//         const win = iframe.contentWindow;
//         const doc = iframe.contentDocument || win?.document;
//         if (!win || !doc) return;

//         doc.documentElement.classList.toggle('dark', suiteState.theme === 'dark');
//         doc.documentElement.classList.toggle('light', suiteState.theme !== 'dark');
//         doc.documentElement.lang = suiteState.lang;

//         const childThemeBtn = doc.getElementById('btnThemeToggle') || doc.getElementById('themeToggleBtn');
//         const isChildDark = doc.documentElement.classList.contains('dark');
//         if (childThemeBtn && ((suiteState.theme === 'dark' && !isChildDark) || (suiteState.theme === 'light' && isChildDark))) {
//             childThemeBtn.click();
//         }

//         const childLangLabel = doc.getElementById('langLabel');
//         const currentChildLang = childLangLabel ? childLangLabel.textContent.trim().toLowerCase() : null;
//         const childLangBtn = doc.getElementById('btnLangToggle') || doc.getElementById('langToggleBtn');
//         if (childLangBtn && currentChildLang && currentChildLang !== suiteState.lang) {
//             childLangBtn.click();
//         }

//         if (win.appState && typeof win.appState === 'object') {
//             win.appState.theme = suiteState.theme;
//             win.appState.lang = suiteState.lang;
//         }
//         if (typeof win.applyTheme === 'function') win.applyTheme();
//         if (typeof win.applyTranslations === 'function') win.applyTranslations();
//     } catch (e) {}
// }

/**
 * Sincroniza Tema e Idioma dentro del iframe hijo en tiempo real (sin recargar)
 */
function syncSingleIframeAppearance(iframe) {
    if (!iframe) return;

    try {
        const win = iframe.contentWindow;
        const doc = iframe.contentDocument || win?.document;
        if (!win || !doc || !doc.documentElement) return;

        // 1. SINCRONIZAR TEMA (Claro / Oscuro)
        // Leemos el estado actual del hijo ANTES de modificar sus clases manualmente
        const isChildCurrentlyDark =
            doc.documentElement.classList.contains('dark') ||
            (doc.body && doc.body.classList.contains('dark-mode'));
        const wantDark = suiteState.theme === 'dark';

        if (wantDark !== isChildCurrentlyDark) {
            const childThemeBtn = doc.getElementById('btnThemeToggle') || doc.getElementById('themeToggleBtn');
            if (childThemeBtn) {
                // Al hacer click nativo, la app hija actualiza su variable interna let currentTheme / appState.theme y redibuja todo (incluyendo Canvas de la ruleta)
                childThemeBtn.click();
            } else {
                doc.documentElement.classList.toggle('dark', wantDark);
                doc.documentElement.classList.toggle('light', !wantDark);
            }
        }

        // 2. SINCRONIZAR IDIOMA (ES / EN)
        const childLangLabel = doc.getElementById('langLabel');
        const currentChildLang = childLangLabel
            ? childLangLabel.textContent.trim().toLowerCase()
            : (doc.documentElement.lang || '').toLowerCase();

        if (currentChildLang && currentChildLang !== suiteState.lang) {
            const childLangBtn = doc.getElementById('btnLangToggle') || doc.getElementById('langToggleBtn');
            if (childLangBtn) {
                childLangBtn.click();
            }
        }
    } catch (e) {}
}

function syncAllLoadedIframes() {
    ['uparpuzzle', 'uparwheel', 'upartrivia', 'upargrade'].forEach(key => {
        const iframe = document.getElementById(`frame_${key}`);
        if (iframe && iframe.getAttribute('src')) {
            syncSingleIframeAppearance(iframe);
        }
    });
}

/* --------------------------------------------------------------------------
   3. TEMA CLARO/OSCURO E IDIOMA GLOBAL SINCRONIZADO
   -------------------------------------------------------------------------- */
function applySuiteTheme() {
    const html = document.documentElement;
    const icon = document.getElementById('suiteThemeIcon');

    html.classList.toggle('dark', suiteState.theme === 'dark');
    html.classList.toggle('light', suiteState.theme !== 'dark');

    if (icon) {
        icon.className = suiteState.theme === 'dark'
            ? 'fa-solid fa-sun text-amber'
            : 'fa-solid fa-moon text-indigo';
    }

    persistThemeAndLangToStorage();
    syncAllLoadedIframes();
}

function toggleSuiteTheme() {
    suiteState.theme = suiteState.theme === 'dark' ? 'light' : 'dark';
    applySuiteTheme();
}

function applySuiteLanguage() {
    document.documentElement.lang = suiteState.lang;
    document.getElementById('suiteLangLabel').textContent = suiteState.lang.toUpperCase();

    persistThemeAndLangToStorage();
    updateTopBarBrandIdentity();

    const setTxt = (id, val) => {
        const el = document.getElementById(id);
        if (el) el.textContent = val;
    };

    setTxt('uiNavHome', st('navHome'));
    setTxt('uiBtnMasterBackup', st('btnMasterBackup'));
    document.getElementById('uiHeroKicker').innerHTML = st('heroKicker');
    setTxt('uiHeroTitle', st('heroTitle'));
    setTxt('uiHeroDesc', st('heroDesc'));
    setTxt('uiStatTotalSaved', st('statTotalSaved'));
    setTxt('uiBtnHeroExport', st('btnHeroExport'));
    setTxt('uiBtnHeroImport', st('btnHeroImport'));

    setTxt('uiTagPuzzle', st('tagPuzzle'));
    setTxt('uiDescPuzzle', st('descPuzzle'));
    setTxt('uiBadgePuzzlePrint', st('badgePuzzlePrint'));
    setTxt('uiLaunchPuzzle', st('launchPuzzle'));

    setTxt('uiTagWheel', st('tagWheel'));
    setTxt('uiDescWheel', st('descWheel'));
    setTxt('uiBadgeWheelVoice', st('badgeWheelVoice'));
    setTxt('uiLaunchWheel', st('launchWheel'));

    setTxt('uiTagTrivia', st('tagTrivia'));
    setTxt('uiDescTrivia', st('descTrivia'));
    setTxt('uiLaunchTrivia', st('launchTrivia'));

    setTxt('uiTagGrade', st('tagGrade'));
    setTxt('uiDescGrade', st('descGrade'));
    setTxt('uiLaunchGrade', st('launchGrade'));

    setTxt('uiModalBackupTitle', st('modalBackupTitle'));
    setTxt('uiModalBackupDesc', st('modalBackupDesc'));
    setTxt('uiModalBtnExport', st('modalBtnExport'));
    setTxt('uiModalBtnImport', st('modalBtnImport'));
    setTxt('uiModalBtnClose', st('modalBtnClose'));
    document.getElementById('uiSuiteFooterText').innerHTML = st('footerText');

    refreshDashboardMetrics();
    syncAllLoadedIframes();
}

function toggleSuiteLang() {
    suiteState.lang = suiteState.lang === 'es' ? 'en' : 'es';
    applySuiteLanguage();
}

/* --------------------------------------------------------------------------
   4. MÉTRICAS EN VIVO DEL DASHBOARD (LECTURA DE LOCALSTORAGE DE LAS 4 APPS)
   -------------------------------------------------------------------------- */
function safeParseArray(key) {
    try {
        const raw = localStorage.getItem(key);
        if (!raw) return [];
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
        return [];
    }
}

function refreshDashboardMetrics() {
    const puzzleSaved = safeParseArray('uparpuzzle_saved_activities_v1').length;
    document.getElementById('metricPuzzleSaved').textContent = `${puzzleSaved} ${st('metricPuzzleUnit')}`;

    const w1 = (localStorage.getItem('ruleta_nombres_1') || 'Maria\nSofia\nLuis\nDaniel\nDavid')
        .split('\n').map(s => s.trim()).filter(Boolean).length;
    const w2 = (localStorage.getItem('ruleta_nombres_2') || 'Tema 1\nTema 2\nTema 3\nTema 4')
        .split('\n').map(s => s.trim()).filter(Boolean).length;
    const wheelTotal = w1 + w2;
    document.getElementById('metricWheelCount').textContent = `${wheelTotal} ${st('metricWheelUnit')}`;

    const triviaBanks = safeParseArray('upartrivia_banks_v1').length || 2;
    const triviaScores = safeParseArray('upartrivia_ranking_v1').length;
    document.getElementById('metricTriviaBanks').textContent = `${triviaBanks} ${st('metricTriviaBanksUnit')}`;
    document.getElementById('metricTriviaScores').textContent = `${triviaScores} ${st('metricTriviaScoresUnit')}`;

    const gradeExams = safeParseArray('upargrade_exams_v1').length || 1;
    const gradeResults = safeParseArray('upargrade_results_v1').length;
    document.getElementById('metricGradeExams').textContent = `${gradeExams} ${st('metricGradeExamsUnit')}`;
    document.getElementById('metricGradeResults').textContent = `${gradeResults} ${st('metricGradeResultsUnit')}`;

    const grandTotal = puzzleSaved + wheelTotal + triviaBanks + triviaScores + gradeExams + gradeResults;
    document.getElementById('totalSuiteItemsCount').textContent = grandTotal;
}

/* --------------------------------------------------------------------------
   5. RESPALDO MAESTRO UNIFICADO (.JSON) Y PANTALLA COMPLETA
   -------------------------------------------------------------------------- */
function openBackupModal() {
    document.getElementById('backupModalOverlay').classList.remove('hidden');
}

function closeBackupModal() {
    document.getElementById('backupModalOverlay').classList.add('hidden');
}

function exportMasterBackupJSON() {
    const allStorage = {};
    for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (k && (k.startsWith('upar') || k.startsWith('ruleta_'))) {
            allStorage[k] = localStorage.getItem(k);
        }
    }

    const payload = {
        suite: 'UparApp Studio',
        version: '1.0',
        exportedAt: new Date().toISOString(),
        storage: allStorage
    };

    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `uparapp-studio-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    closeBackupModal();
    showSuiteToast(st('toastExportOk'));
}

function handleMasterImportJSON(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const data = JSON.parse(e.target.result);
            if (data && data.storage && typeof data.storage === 'object') {
                Object.entries(data.storage).forEach(([k, val]) => {
                    localStorage.setItem(k, val);
                });
                ['uparpuzzle', 'uparwheel', 'upartrivia', 'upargrade'].forEach(key => {
                    const iframe = document.getElementById(`frame_${key}`);
                    if (iframe && iframe.getAttribute('src')) {
                        iframe.setAttribute('src', `${iframe.dataset.src}?suite=1&theme=${suiteState.theme}&lang=${suiteState.lang}&t=${Date.now()}`);
                    }
                });
                refreshDashboardMetrics();
                closeBackupModal();
                showSuiteToast(st('toastImportOk'));
            }
        } catch (err) {
            showSuiteToast('Archivo JSON inválido', 'fa-circle-exclamation');
        }
        event.target.value = '';
    };
    reader.readAsText(file);
}

function toggleSuiteFullscreen() {
    const icon = document.getElementById('suiteFsIcon');
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen?.();
        if (icon) icon.className = 'fa-solid fa-compress text-indigo';
    } else {
        document.exitFullscreen?.();
        if (icon) icon.className = 'fa-solid fa-expand text-indigo';
    }
}

function showSuiteToast(msg, icon = 'fa-circle-check') {
    const container = document.getElementById('suiteToastContainer');
    const div = document.createElement('div');
    div.className = 'suite-toast';
    div.innerHTML = `<i class="fa-solid ${icon} text-indigo"></i><span>${msg}</span>`;
    container.appendChild(div);
    setTimeout(() => div.remove(), 3300);
}

window.addEventListener('DOMContentLoaded', () => {
    applySuiteTheme();
    applySuiteLanguage();
    refreshDashboardMetrics();
});


/* --------------------------------------------------------------------------
   6. REGISTRO DE PWA Y BOTÓN DE INSTALACIÓN NATIVA EN MÓVIL / PC
   -------------------------------------------------------------------------- */
let deferredInstallPrompt = null;

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').catch(() => {});
    });
}

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredInstallPrompt = e;
    const btnInstall = document.getElementById('btnInstallPWA');
    if (btnInstall) btnInstall.classList.remove('hidden');
});

async function installSuitePWA() {
    if (!deferredInstallPrompt) return;
    deferredInstallPrompt.prompt();
    const { outcome } = await deferredInstallPrompt.userChoice;
    if (outcome === 'accepted') {
        document.getElementById('btnInstallPWA')?.classList.add('hidden');
    }
    deferredInstallPrompt = null;
}

window.addEventListener('appinstalled', () => {
    document.getElementById('btnInstallPWA')?.classList.add('hidden');
    deferredInstallPrompt = null;
});