/**
 * ==============================================================================
 * UPARAPP STUDIO - CONTROLADOR MAESTRO DE LA SUITE (4 APPS EN 1)
 * ==============================================================================
 */

const SUITE_KEYS = {
    THEME: 'uparapp_suite_theme',
    LANG: 'uparapp_suite_lang',
    ACTIVE_APP: 'uparapp_suite_active_app',
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
        subEs: 'Generador de Sopas de Letras y Crucigramas',
        subEn: 'Word Search & Crossword Generator'
    },
    uparwheel: {
        titleHtml: 'Upar<span class="text-emerald">Wheel</span>',
        icon: 'fa-solid fa-dharmachakra',
        logoGrad: 'bg-grad-emerald',
        badgeClass: 'badge-emerald',
        badgeEs: 'Interactivo',
        badgeEn: 'Interactive',
        subEs: 'Ruleta de selección y participación interactiva',
        subEn: 'Interactive selection and participation wheel'
    },
    upartrivia: {
        titleHtml: 'Upar<span class="text-amber">Trivia</span>',
        icon: 'fa-solid fa-brain',
        logoGrad: 'bg-grad-amber',
        badgeClass: 'badge-amber',
        badgeEs: 'Edición Millonario',
        badgeEn: 'Millionaire Edition',
        subEs: 'Plataforma interactiva de trivias por niveles',
        subEn: 'Interactive tiered trivia platform'
    },
    upargrade: {
        titleHtml: 'Upar<span class="text-rose">Grade</span>',
        icon: 'fa-solid fa-qrcode',
        logoGrad: 'bg-grad-rose',
        badgeClass: 'badge-rose',
        badgeEs: 'ICFES & OMR',
        badgeEn: 'ICFES & OMR',
        subEs: 'Generador de hojas de respuesta y calificación óptica',
        subEn: 'OMR answer sheet generator and optical grading'
    }
};

const SUITE_I18N = {
    es: {
        navHome: 'Inicio',
        settingsLabel: 'Ajustes',
        mobileInstallText: 'Instalar App',
        installMaster: 'Instalar App',
        mobileLangText: 'Idioma',
        mobileThemeText: 'Tema',
        mobileBackupText: 'Respaldo',
        mobileFsText: 'Pantalla',
        btnMasterBackup: 'Respaldo',
        heroKicker: '<i class="fa-solid fa-wand-magic-sparkles"></i> UparSoft Educación Digital',
        heroTitle: 'Bienvenido a UparApp Studio',
        heroDesc: 'Selecciona cualquiera de las 4 herramientas pedagógicas interactivas. Todos tus datos, temas visuales e idioma están sincronizados automáticamente en un solo lugar.',
        statTotalSaved: 'Registros Guardados',
        btnHeroExport: 'Exportar Todo',
        btnHeroImport: 'Importar Todo',
        btnHeroQr: 'QR Sync',
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
        settingsLabel: 'Settings',
        btnMasterBackup: 'Backup',
        installMaster: 'Install App',
        mobileInstallText: 'Install App',
        mobileLangText: 'Language',
        mobileThemeText: 'Theme',
        mobileBackupText: 'Backup',
        mobileFsText: 'Fullscreen',
        heroKicker: '<i class="fa-solid fa-wand-magic-sparkles"></i> UparSoft Digital Education',
        heroTitle: 'Welcome to UparApp Studio',
        heroDesc: 'Pick any of the 4 interactive teaching tools below. All your saved data, visual themes, and language preferences are automatically synced in one place.',
        statTotalSaved: 'Total Saved Records',
        btnHeroExport: 'Export All',
        btnHeroImport: 'Import All',
        btnHeroQr: 'QR Sync',
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
    const isDashboard = suiteState.activeApp === 'dashboard';

    const logoEl = document.getElementById('suiteBrandLogo');
    const iconEl = document.getElementById('suiteBrandIcon');
    const customSvgEl = document.getElementById('suiteBrandCustomSvg');
    const titleEl = document.getElementById('suiteBrandTitle');
    const badgeEl = document.getElementById('uiSuiteBadge');
    const subEl = document.getElementById('uiSuiteSubtitle');

    if (logoEl) {
        logoEl.className = isDashboard ? 'suite-logo' : `suite-logo ${profile.logoGrad}`;
        logoEl.style.padding = isDashboard ? '0' : '';
        logoEl.style.overflow = 'hidden';
    }
    if (customSvgEl) {
        customSvgEl.style.display = isDashboard ? 'block' : 'none';
    }
    if (iconEl) {
        iconEl.style.display = isDashboard ? 'none' : '';
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
    localStorage.setItem(SUITE_KEYS.ACTIVE_APP, appKey);
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

    const frameBg = suiteState.theme === 'dark' ? '#020617' : '#f8fafc';
    if (targetSection) targetSection.style.backgroundColor = frameBg;

    const loader = document.getElementById(`loader_${appKey}`);

    if (iframe) {
        iframe.style.backgroundColor = frameBg;
        const targetUrl = `${iframe.dataset.src}?suite=1&theme=${suiteState.theme}&lang=${suiteState.lang}`;
        if (!iframe.getAttribute('src')) {
            if (loader) loader.classList.remove('is-hidden');
            iframe.style.opacity = '0';
            iframe.style.transition = 'opacity 0.15s ease';
            iframe.onload = () => {
                injectSeamlessChildMode(iframe, appKey);
                syncSingleIframeAppearance(iframe);
                iframe.style.opacity = '1';
                if (loader) loader.classList.add('is-hidden');
            };
            iframe.setAttribute('src', targetUrl);
        } else {
            iframe.style.opacity = '1';
            if (loader) loader.classList.add('is-hidden');
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
                    padding-top: 0.35rem !important;
                    padding-bottom: 0.35rem !important;
                    justify-content: center !important;
                    gap: 0.5rem !important;
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
    setTxt('uiSuiteSettingsLabel', st('settingsLabel'));
    setTxt('uiBtnMasterBackup', st('btnMasterBackup'));
    document.getElementById('uiHeroKicker').innerHTML = st('heroKicker');
    setTxt('uiHeroTitle', st('heroTitle'));
    setTxt('uiHeroDesc', st('heroDesc'));
    setTxt('uiStatTotalSaved', st('statTotalSaved'));
    setTxt('uiBtnHeroExport', st('btnHeroExport'));
    setTxt('uiBtnHeroImport', st('btnHeroImport'));
    setTxt('uiBtnHeroQr', st('btnHeroQr'));

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
    setTxt('uiMobileInstallText', st('mobileInstallText'));
    setTxt('uiMobileLangText', st('mobileLangText'));
    setTxt('uiMobileThemeText', st('mobileThemeText'));
    setTxt('uiMobileBackupText', st('mobileBackupText'));
    setTxt('uiMobileFsText', st('mobileFsText'));
    setTxt('uiInstallMaster', st('installMaster'));

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

function closeMobileActionsMenu() {
    const menu = document.getElementById('suiteActionsDropdown');
    const btn = document.getElementById('btnMobileMoreMenu');
    if (menu) menu.classList.remove('open');
    if (btn) btn.setAttribute('aria-expanded', 'false');
}

function toggleMobileActionsMenu(event) {
    if (event) event.stopPropagation();
    const menu = document.getElementById('suiteActionsDropdown');
    const btn = document.getElementById('btnMobileMoreMenu');
    if (!menu) return;
    const isOpen = menu.classList.toggle('open');
    if (btn) btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
}

document.addEventListener('pointerdown', (e) => {
    const wrapper = document.getElementById('suiteActionsWrapper');
    if (wrapper && !wrapper.contains(e.target)) {
        closeMobileActionsMenu();
    }
});

window.addEventListener('blur', closeMobileActionsMenu);

window.addEventListener('DOMContentLoaded', () => {
    applySuiteTheme();
    applySuiteLanguage();
    refreshDashboardMetrics();

    const savedApp = localStorage.getItem(SUITE_KEYS.ACTIVE_APP);
    if (savedApp && savedApp !== 'dashboard') {
        openSuiteApp(savedApp);
    }
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

/* --------------------------------------------------------------------------
   7. SINCRONIZACIÓN QR BIDIRECCIONAL DE LA SUITE (MISMO FLUJO QUE UPARGRADE)
   -------------------------------------------------------------------------- */
let suiteQrStream = null;
let suiteQrLoopId = null;
let suiteQrPeer = null;

const SUITE_PEER_ICE = {
    iceServers: [
        { urls: 'stun:stun.l.google.com:19302' },
        { urls: 'stun:stun1.l.google.com:19302' },
        { urls: 'stun:stun2.l.google.com:19302' },
        { urls: 'stun:cloudflare.com:3478' }
    ]
};

function loadSuiteScriptOnce(url, globalName) {
    if (window[globalName]) return Promise.resolve(window[globalName]);
    return new Promise((resolve, reject) => {
        const existing = document.querySelector(`script[src="${url}"]`);
        if (existing) {
            existing.addEventListener('load', () => resolve(window[globalName]), { once: true });
            existing.addEventListener('error', reject, { once: true });
            return;
        }
        const s = document.createElement('script');
        s.src = url;
        s.onload = () => resolve(window[globalName]);
        s.onerror = reject;
        document.head.appendChild(s);
    });
}

function ensureSuiteQrLibs(needPeer = false) {
    const list = [
        loadSuiteScriptOnce('https://cdnjs.cloudflare.com/ajax/libs/qrcode-generator/1.4.4/qrcode.min.js', 'qrcode'),
        loadSuiteScriptOnce('https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.min.js', 'jsQR')
    ];
    if (needPeer) {
        list.push(loadSuiteScriptOnce('https://unpkg.com/peerjs@1.5.4/dist/peerjs.min.js', 'Peer'));
    }
    return Promise.all(list);
}

function cleanupSuiteQrResources() {
    if (suiteQrLoopId) {
        cancelAnimationFrame(suiteQrLoopId);
        suiteQrLoopId = null;
    }
    if (suiteQrStream) {
        suiteQrStream.getTracks().forEach(tr => tr.stop());
        suiteQrStream = null;
    }
    if (suiteQrPeer) {
        try { suiteQrPeer.destroy(); } catch (_) {}
        suiteQrPeer = null;
    }
}

function getSuiteMasterBundleForSync() {
    const allStorage = {};
    for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (k && (k.startsWith('upar') || k.startsWith('ruleta_'))) {
            allStorage[k] = localStorage.getItem(k);
        }
    }
    return {
        suite: 'UparApp Studio',
        version: '1.0',
        exportedAt: new Date().toISOString(),
        storage: allStorage
    };
}

function applySuiteMasterBundle(payload) {
    const bag = payload && payload.storage && typeof payload.storage === 'object'
        ? payload.storage
        : (payload && payload.data && typeof payload.data === 'object' ? payload.data : null);
    if (!bag) return false;

    Object.entries(bag).forEach(([k, val]) => {
        if (typeof val === 'string') {
            localStorage.setItem(k, val);
        }
    });

    if (bag[SUITE_KEYS.THEME]) suiteState.theme = bag[SUITE_KEYS.THEME];
    if (bag[SUITE_KEYS.LANG]) suiteState.lang = bag[SUITE_KEYS.LANG];
    applySuiteTheme();
    applySuiteLanguage();

    ['uparpuzzle', 'uparwheel', 'upartrivia', 'upargrade'].forEach(key => {
        const iframe = document.getElementById(`frame_${key}`);
        if (iframe && iframe.getAttribute('src')) {
            iframe.setAttribute('src', `${iframe.dataset.src}?suite=1&theme=${suiteState.theme}&lang=${suiteState.lang}&t=${Date.now()}`);
        }
    });

    refreshDashboardMetrics();
    showSuiteToast(st('toastImportOk'));
    return true;
}

function buildCompactSuiteQrParam() {
    const bundle = getSuiteMasterBundleForSync();
    const compactStorage = {};
    Object.entries(bundle.storage).forEach(([k, v]) => {
        if (typeof v === 'string' && v.length <= 900) {
            compactStorage[k] = v;
        }
    });
    const jsonStr = JSON.stringify({ v: 1, s: compactStorage });
    return btoa(unescape(encodeURIComponent(jsonStr)))
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
}

function decodeCompactSuiteQrParam(b64Param) {
    let b64 = b64Param.replace(/-/g, '+').replace(/_/g, '/');
    while (b64.length % 4) b64 += '=';
    const parsed = JSON.parse(decodeURIComponent(escape(atob(b64))));
    if (parsed && parsed.v === 1 && parsed.s && typeof parsed.s === 'object') {
        return { suite: 'UparApp Studio', storage: parsed.s };
    }
    return null;
}

function buildSuiteSyncUrl(paramsObj) {
    const baseUrl = window.location.origin + window.location.pathname;
    const usp = new URLSearchParams(paramsObj);
    return `${baseUrl}?${usp.toString()}`;
}

function drawSuiteQrCanvas(containerEl, textData) {
    const qr = window.qrcode(0, 'L');
    qr.addData(textData);
    qr.make();

    const moduleCount = qr.getModuleCount();
    const cellSize = Math.max(3, Math.min(7, Math.floor(240 / moduleCount)));
    const margin = cellSize * 2;
    const size = moduleCount * cellSize + margin * 2;

    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, size, size);
    ctx.fillStyle = '#0f172a';

    for (let r = 0; r < moduleCount; r++) {
        for (let c = 0; c < moduleCount; c++) {
            if (qr.isDark(r, c)) {
                ctx.fillRect(margin + c * cellSize, margin + r * cellSize, cellSize, cellSize);
            }
        }
    }
    containerEl.innerHTML = '';
    containerEl.appendChild(canvas);
}

function connectSuitePeer(peerId, mode, statusEl, onDoneFn) {
    const isEn = suiteState.lang === 'en';
    if (statusEl) {
        statusEl.innerHTML = `<i class="fa-solid fa-spinner fa-spin text-indigo"></i> ${isEn ? 'Linking devices...' : 'Enlazando dispositivos...'}`;
    }

    cleanupSuiteQrResources();
    suiteQrPeer = new window.Peer({ config: SUITE_PEER_ICE });

    let done = false;
    const timer = setTimeout(() => {
        if (!done && statusEl) {
            statusEl.textContent = isEn ? 'Connection timed out. Scan again.' : 'Tiempo agotado. Verifica que el otro QR siga abierto e intenta de nuevo.';
        }
    }, 14000);

    suiteQrPeer.on('open', () => {
        const conn = suiteQrPeer.connect(peerId, {
            reliable: true,
            serialization: 'json'
        });

        conn.on('open', () => {
            if (mode === 'SUITE_P2P_RECEIVE') {
                if (statusEl) statusEl.textContent = isEn ? 'Sending suite backup...' : 'Enviando respaldo de la suite...';
                conn.send({ type: 'SUITE_DATA_BUNDLE', payload: getSuiteMasterBundleForSync() });
            } else {
                if (statusEl) statusEl.textContent = isEn ? 'Requesting suite backup...' : 'Solicitando respaldo de la suite...';
                conn.send({ type: 'SUITE_REQUEST_BUNDLE' });
            }
        });

        conn.on('data', (msg) => {
            if (msg && msg.type === 'SUITE_DATA_BUNDLE' && msg.payload) {
                done = true;
                clearTimeout(timer);
                cleanupSuiteQrResources();
                if (onDoneFn) onDoneFn();
                applySuiteMasterBundle(msg.payload);
            } else if (msg && msg.type === 'SUITE_ACK') {
                done = true;
                clearTimeout(timer);
                showSuiteToast(isEn ? 'Backup transferred successfully!' : '¡Respaldo transferido correctamente!');
                cleanupSuiteQrResources();
                if (onDoneFn) onDoneFn();
            }
        });

        conn.on('error', () => {
            clearTimeout(timer);
            if (statusEl) statusEl.textContent = isEn ? 'Transfer error.' : 'Error en la transferencia.';
        });
    });
}

function processSuiteScannedQr(rawText, statusEl, closeModalFn) {
    const isEn = suiteState.lang === 'en';
    if (!rawText) return false;
    const trimmed = rawText.trim();

    try {
        if (trimmed.includes('suite_qrdata=') || trimmed.includes('suite_qrpeer=')) {
            const urlObj = new URL(trimmed, window.location.origin);
            const qrdata = urlObj.searchParams.get('suite_qrdata');
            const qrpeer = urlObj.searchParams.get('suite_qrpeer');
            const qrmode = urlObj.searchParams.get('suite_qrmode') || 'SUITE_P2P_SEND';

            if (qrdata) {
                const decoded = decodeCompactSuiteQrParam(qrdata);
                if (decoded) {
                    cleanupSuiteQrResources();
                    if (closeModalFn) closeModalFn();
                    applySuiteMasterBundle(decoded);
                    return true;
                }
            }

            if (qrpeer) {
                connectSuitePeer(qrpeer, qrmode, statusEl, closeModalFn);
                return true;
            }
        }
    } catch (_) {}

    showSuiteToast(isEn ? 'Unrecognized QR code' : 'Código QR no reconocido', 'fa-triangle-exclamation');
    return false;
}

async function openSuiteQrSyncModal() {
    cleanupSuiteQrResources();
    const isEn = suiteState.lang === 'en';
    const overlay = document.getElementById('suiteQrModalOverlay');
    if (!overlay) return;

    overlay.classList.remove('hidden');

    const bodyEl = document.getElementById('suiteQrHubBody');
    const btnSend = document.getElementById('tabSuiteQrSend');
    const btnReceive = document.getElementById('tabSuiteQrReceive');
    const btnScan = document.getElementById('tabSuiteQrScan');
    const btnClose = document.getElementById('btnCloseSuiteQrHub');

    const closeModal = () => {
        cleanupSuiteQrResources();
        overlay.classList.add('hidden');
    };

    function markTab(activeBtn) {
        [btnSend, btnReceive, btnScan].forEach(b => {
            if (!b) return;
            b.style.borderColor = b === activeBtn ? 'var(--accent-light)' : 'var(--border)';
            b.style.background = b === activeBtn ? 'var(--accent-soft)' : 'var(--card)';
        });
    }

    async function startSendMode() {
        cleanupSuiteQrResources();
        markTab(btnSend);
        bodyEl.innerHTML = `<span class="text-muted-xs">${isEn ? 'Generating QR...' : 'Generando QR...'}</span>`;

        try {
            await ensureSuiteQrLibs(true);
            const compactB64 = buildCompactSuiteQrParam();
            const directUrl = buildSuiteSyncUrl({ suite_qrdata: compactB64 });

            if (directUrl.length < 1800) {
                bodyEl.innerHTML = `
                    <div id="suiteQrRenderBox" class="suite-qr-box-frame"></div>
                    <p style="font-size:0.76rem; font-weight:700; color:var(--accent-light); margin-bottom:0.2rem;">
                        <i class="fa-solid fa-bolt"></i>
                        ${isEn ? 'Scan with Phone Camera or Tab 3' : 'Escanéalo con la Cámara del celular o desde la Pestaña 3'}
                    </p>
                    <span class="text-muted-xs">${isEn ? 'Ready to scan.' : 'Listo para escanear.'}</span>
                `;
                drawSuiteQrCanvas(bodyEl.querySelector('#suiteQrRenderBox'), directUrl);
                return;
            }

            const roomId = 'upar_suite_' + Math.random().toString(36).substring(2, 10) + '_' + Date.now().toString(36);
            suiteQrPeer = new window.Peer(roomId, { config: SUITE_PEER_ICE });

            suiteQrPeer.on('open', (id) => {
                const p2pUrl = buildSuiteSyncUrl({ suite_qrpeer: id, suite_qrmode: 'SUITE_P2P_SEND' });
                bodyEl.innerHTML = `
                    <div id="suiteQrRenderBox" class="suite-qr-box-frame"></div>
                    <p style="font-size:0.76rem; font-weight:700; color:var(--accent-light); margin-bottom:0.2rem;">
                        <i class="fa-solid fa-mobile-screen-button"></i>
                        ${isEn ? 'Scan with Phone Camera or Tab 3' : 'Escanéalo con la Cámara de tu Celular o desde la Pestaña 3'}
                    </p>
                    <span id="suiteQrLiveStatus" class="text-muted-xs">${isEn ? 'Waiting for phone...' : 'Esperando conexión del otro dispositivo...'}</span>
                `;
                drawSuiteQrCanvas(bodyEl.querySelector('#suiteQrRenderBox'), p2pUrl);
            });

            suiteQrPeer.on('connection', (conn) => {
                const stEl = bodyEl.querySelector('#suiteQrLiveStatus');
                if (stEl) stEl.textContent = isEn ? 'Connected! Sending backup...' : '¡Conectado! Enviando respaldo...';
                const sendNow = () => {
                    conn.send({ type: 'SUITE_DATA_BUNDLE', payload: getSuiteMasterBundleForSync() });
                    setTimeout(() => {
                        showSuiteToast(isEn ? 'Backup sent successfully!' : '¡Respaldo enviado correctamente!');
                        closeModal();
                    }, 700);
                };
                conn.on('open', sendNow);
                conn.on('data', (msg) => {
                    if (msg && msg.type === 'SUITE_REQUEST_BUNDLE') sendNow();
                });
            });
        } catch (_) {
            bodyEl.innerHTML = `<p class="text-amber">${isEn ? 'Could not generate QR.' : 'No se pudo generar el QR.'}</p>`;
        }
    }

    async function startReceiveMode() {
        cleanupSuiteQrResources();
        markTab(btnReceive);
        bodyEl.innerHTML = `<span class="text-muted-xs">${isEn ? 'Preparing receiver QR...' : 'Generando QR para recibir aquí...'}</span>`;

        try {
            await ensureSuiteQrLibs(true);
            const roomId = 'upar_suite_rx_' + Math.random().toString(36).substring(2, 10) + '_' + Date.now().toString(36);
            suiteQrPeer = new window.Peer(roomId, { config: SUITE_PEER_ICE });

            suiteQrPeer.on('open', (id) => {
                const rxUrl = buildSuiteSyncUrl({ suite_qrpeer: id, suite_qrmode: 'SUITE_P2P_RECEIVE' });
                bodyEl.innerHTML = `
                    <div id="suiteQrRenderBox" class="suite-qr-box-frame"></div>
                    <p style="font-size:0.76rem; font-weight:700; color:var(--emerald); margin-bottom:0.2rem;">
                        <i class="fa-solid fa-laptop"></i>
                        ${isEn ? 'Scan this QR from the other device to receive here' : 'Escanea este QR desde el otro dispositivo para recibir aquí'}
                    </p>
                    <span id="suiteQrRxStatus" class="text-muted-xs">${isEn ? 'Waiting to receive...' : 'Esperando que el otro dispositivo envíe los datos...'}</span>
                `;
                drawSuiteQrCanvas(bodyEl.querySelector('#suiteQrRenderBox'), rxUrl);
            });

            suiteQrPeer.on('connection', (conn) => {
                const stEl = bodyEl.querySelector('#suiteQrRxStatus');
                if (stEl) stEl.textContent = isEn ? 'Receiving backup...' : 'Recibiendo respaldo...';
                conn.on('data', (msg) => {
                    if (msg && msg.type === 'SUITE_DATA_BUNDLE' && msg.payload) {
                        conn.send({ type: 'SUITE_ACK' });
                        closeModal();
                        applySuiteMasterBundle(msg.payload);
                    }
                });
            });
        } catch (_) {
            bodyEl.innerHTML = `<p class="text-amber">${isEn ? 'Could not create receiver QR.' : 'No se pudo crear el QR receptor.'}</p>`;
        }
    }

    async function startScanMode() {
        cleanupSuiteQrResources();
        markTab(btnScan);

        bodyEl.innerHTML = `
            <div id="suiteQrCamBox" class="suite-qr-cam-box">
                <video id="suiteQrCamVideo" autoplay playsinline muted></video>
                <canvas id="suiteQrCamCanvas" class="hidden"></canvas>
                <div class="suite-qr-cam-reticle"></div>
            </div>
            <div id="suiteQrCamStatus" style="font-size:0.78rem; font-weight:700; color:var(--text-secondary);">
                ${isEn ? 'Point camera at QR code...' : 'Apunta la cámara al código QR...'}
            </div>
        `;

        const video = bodyEl.querySelector('#suiteQrCamVideo');
        const canvas = bodyEl.querySelector('#suiteQrCamCanvas');
        const ctx = canvas.getContext('2d', { willReadFrequently: true });
        const statusEl = bodyEl.querySelector('#suiteQrCamStatus');

        try {
            await ensureSuiteQrLibs(true);
            suiteQrStream = await navigator.mediaDevices.getUserMedia({
                video: { facingMode: 'environment', width: { ideal: 640 }, height: { ideal: 640 } }
            });
            video.srcObject = suiteQrStream;

            const tick = () => {
                if (!suiteQrStream) return;
                if (video.readyState === video.HAVE_ENOUGH_DATA) {
                    canvas.width = video.videoWidth;
                    canvas.height = video.videoHeight;
                    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                    const code = window.jsQR(imgData.data, imgData.width, imgData.height, { inversionAttempts: 'dontInvert' });

                    if (code && code.data) {
                        if (suiteQrLoopId) cancelAnimationFrame(suiteQrLoopId);
                        if (suiteQrStream) {
                            suiteQrStream.getTracks().forEach(tr => tr.stop());
                            suiteQrStream = null;
                        }
                        const camBox = bodyEl.querySelector('#suiteQrCamBox');
                        if (camBox) {
                            camBox.innerHTML = `<div style="text-align:center; padding:1rem; color:#10b981;"><i class="fa-solid fa-circle-nodes fa-spin" style="font-size:2.4rem; margin-bottom:0.4rem;"></i><p style="font-size:0.76rem; color:#fff;">QR Detectado</p></div>`;
                        }
                        processSuiteScannedQr(code.data, statusEl, closeModal);
                        return;
                    }
                }
                suiteQrLoopId = requestAnimationFrame(tick);
            };
            suiteQrLoopId = requestAnimationFrame(tick);
        } catch (_) {
            if (statusEl) statusEl.textContent = isEn ? 'Could not access camera.' : 'No se pudo acceder a la cámara.';
        }
    }

    if (btnSend) btnSend.onclick = startSendMode;
    if (btnReceive) btnReceive.onclick = startReceiveMode;
    if (btnScan) btnScan.onclick = startScanMode;
    if (btnClose) btnClose.onclick = closeModal;

    const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (isMobile) {
        startScanMode();
    } else {
        startSendMode();
    }
}

async function checkIncomingSuiteQrParams() {
    const params = new URLSearchParams(window.location.search);
    if (!params.has('suite_qrdata') && !params.has('suite_qrpeer')) return;

    const fullHref = window.location.href;
    params.delete('suite_qrdata');
    params.delete('suite_qrpeer');
    params.delete('suite_qrmode');
    const cleanSearch = params.toString();
    window.history.replaceState({}, '', window.location.pathname + (cleanSearch ? `?${cleanSearch}` : ''));

    await ensureSuiteQrLibs(true);
    setTimeout(() => {
        processSuiteScannedQr(fullHref, null, null);
    }, 300);
}

window.addEventListener('DOMContentLoaded', () => {
    checkIncomingSuiteQrParams();
});