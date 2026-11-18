/**
 * ==============================================================================
 * UPARGRADE STUDIO - GENERADOR DE HOJAS ICFES Y ESCÁNER OMR AUTOMATIZADO
 * ==============================================================================
 */

const STORAGE_KEYS = {
    EXAMS: 'upargrade_exams_v1',
    ACTIVE_EXAM_ID: 'upargrade_active_exam_v1',
    RESULTS: 'upargrade_results_v1',
    THEME: 'upargrade_theme',
    LANG: 'upargrade_lang'
};

const LETTERS = ['A', 'B', 'C', 'D', 'E'];

/* --------------------------------------------------------------------------
   0. INTERNACIONALIZACIÓN COMPLETA (ES / EN)
   -------------------------------------------------------------------------- */
const I18N = {
    es: {
        mainSubtitle: 'Generador de hojas de respuesta y calificación óptica automatizada',
        navExams: '1. Examen y Clave',
        navSheet: '2. Hoja ICFES',
        navScanner: '3. Escáner OMR',
        navResults: '4. Calificaciones',
        btnPrintTop: 'Generar PDF',
        examConfigTitle: 'Configuración del Examen',
        btnNewExam: 'Nuevo',
        btnDuplicateExam: 'Duplicar',
        toastExamDuplicated: 'Examen duplicado. Cambia el curso o nombre y pulsa Guardar',
        labelExamTitle: 'Nombre del Examen / Evaluación',
        btnSaveExam: 'Guardar',
        labelCourse: 'Grado / Asignatura',
        labelQCount: 'N° de Preguntas',
        questionsUnit: 'preguntas',
        questionsShort: 'preg',
        optionsShort: 'opc',
        scaleWord: 'Escala',
        labelMaxGrade: 'Nota Máxima',
        labelMinGrade: 'Nota Mínima',
        labelOptionsCount: 'Opciones',
        metricValPerQ: 'Valor por cada acierto',
        metricPassing: 'Nota aprobatoria',
        metricKeyStatus: 'Clave configurada',
        savedExamsTitle: 'Mis Exámenes Guardados',
        emptySavedExams: 'No hay exámenes guardados aún.',
        btnExportJson: 'Exportar JSON',
        btnImportJson: 'Importar JSON',
        btnQrSync: 'Sincronizar QR',
        // btnQrShare: 'Pasar con QR',
        // btnQrScan: 'Leer QR',
        answerKeyTitle: 'Clave de Respuestas Correctas',
        answerKeySub: 'Marca la burbuja correcta para cada pregunta o pega una secuencia rápida.',
        placeholderQuickKey: 'Pegado rápido: ej. ABCDABCDAA...',
        btnRandomKey: 'Aleatorio',
        btnApplyPattern: 'Aplicar',
        sheetPreviewTitle: 'Vista Previa de Hoja OMR Tipo ICFES',
        sheetPreviewSub: 'Elige entre el formato completo o el formato simplificado (hasta 6 hojas por página).',
        labelShowKeySheet: 'Hoja Guía Docente',
        optStyleFull: 'Completo ICFES',
        optStyleMinimal: 'Simplificada',
        optLayout1: '1 por Hoja',
        optLayout2: '2 por Hoja',
        optLayout4: '4 por Hoja',
        optLayout6: '6 por Hoja',
        optOrientAuto: 'Orientación: Automática',
        optOrientPortrait: 'Vertical',
        optOrientLandscape: 'Horizontal',
        optPaperLetter: 'Tamaño: Carta',
        optPaperLegal: 'Tamaño: Oficio',
        btnDownloadSheetPng: 'Descargar PNG',
        btnPrintSheetNow: 'Generar PDF',
        scannerTitle: 'Escáner Óptico de Hoja ICFES',
        scannerSub: 'Alinea los 4 cuadros negros de las esquinas de la hoja o sube una foto/captura.',
        btnCameraOn: 'Activar Cámara',
        btnCameraOff: 'Detener Cámara',
        btnCapturePhoto: 'Capturar y Calificar',
        btnUploadPhoto: 'Subir Foto de Hoja',
        btnSimulateScan: 'Simular Hoja Llena',
        labelSensitivity: 'Sensibilidad de detección de lápiz/tinta:',
        scanResultTitle: 'Resultado de la Evaluación',
        scanStatusReady: 'Listo para escanear',
        statCorrect: 'Correctas',
        statWrong: 'Incorrectas',
        statBlank: 'En Blanco / Doble',
        statPct: 'Porcentaje',
        labelStudentName: 'Nombre del Estudiante',
        placeholderStudentName: 'Ej. Caroll Lopez - 601',
        labelStudentCode: 'Código / Documento (Opcional)',
        placeholderStudentCode: 'Ej. 106599...',
        btnSaveGrade: 'Registrar Calificación en Planilla',
        auditTitle: 'Revisión y Corrección Rápida por Pregunta',
        auditHint: '(Haz clic en una letra si deseas ajustar manualmente lo detectado)',
        auditKeyLabel: 'Clave',
        gradebookTitle: 'Planilla de Calificaciones',
        gradebookSub: 'Registro histórico de hojas escaneadas con cálculo automático de promedio y exportación a Excel.',
        filterAllExams: 'Todos los Exámenes',
        placeholderSearchStudent: 'Buscar estudiante...',
        optSepSemicolon: 'Separador: Punto y coma ( ; )',
        optSepComma: 'Separador: Coma ( , )',
        optSepTab: 'Separador: Tabulación (Tab)',
        optSepPipe: 'Separador: Barra ( | )',
        btnExportCsv: 'Exportar Excel (.csv)',
        btnClearGrades: 'Vaciar',
        kpiTotal: 'Evaluados',
        kpiAvg: 'Promedio del Grupo',
        kpiPassRate: 'Aprobados',
        kpiBest: 'Mejor Nota',
        thResStudent: 'Estudiante',
        thResCode: 'Código',
        thResExam: 'Examen',
        thResHits: 'Aciertos',
        thResPct: 'Porcentaje',
        thResGrade: 'Nota Final',
        thResDate: 'Fecha',
        emptyGradebook: 'Aún no hay hojas calificadas en esta vista.',
        sheetHeaderTitle: 'HOJA DE RESPUESTAS - FORMATO ÓPTICO OMR',
        sheetStudentLabel: 'NOMBRE COMPLETO DEL ESTUDIANTE:',
        sheetStudentShort: 'Nombre:',
        sheetDateLabel: 'FECHA:',
        sheetGradeLabel: 'NOTA:',
        sheetInstText: 'Rellene completamente el círculo con lápiz oscuro o bolígrafo negro. No haga tachones ni marcas fuera de los círculos.',
        toastExamSaved: 'Examen y clave guardados correctamente',
        toastExamDeleted: 'Examen eliminado de la lista',
        toastRandomKey: 'Clave generada aleatoriamente',
        toastPatternApplied: 'Secuencia de respuestas aplicada',
        toastScanComplete: 'Hoja escaneada y calificada automáticamente',
        toastGradeSaved: 'Calificación registrada en la planilla',
        toastStudentRequired: 'Escribe el nombre del estudiante antes de guardar la nota',
        modalImportTitle: '¿Cómo deseas importar el archivo JSON?',
        modalImportDesc: 'Elige si deseas sumar los exámenes y calificaciones del archivo a los que ya tienes creados, o reemplazar todo:',
        btnImportMerge: 'Sumar a los actuales',
        btnImportOverwrite: 'Sobrescribir todo',
        btnImportCancel: 'Cancelar',
        toastImportMerged: 'Datos sumados a tu lista actual correctamente',
        toastImportOverwritten: 'Datos reemplazados por el archivo importado',
        modalClearAllTitle: '¿Vaciar TODA la planilla de calificaciones?',
        modalClearAllDesc: (count) => `Tienes seleccionado <strong>Todos los Exámenes</strong>. Esta acción eliminará permanentemente los <strong>${count} registros</strong> guardados. ¿Deseas continuar?`,
        modalClearExamTitle: '¿Vaciar calificaciones de este examen?',
        modalClearExamDesc: (exam, count) => `Se eliminarán únicamente las <strong>${count} calificaciones</strong> registradas para el examen <strong>"${exam}"</strong> (las notas de los demás exámenes se conservarán).`,
        btnConfirmClearGrades: 'Sí, vaciar registros',
        toastClearedAllGrades: 'Se vació toda la planilla de calificaciones',
        toastClearedExamGrades: (exam) => `Se vaciaron las calificaciones de "${exam}"`
    },
    en: {
        mainSubtitle: 'OMR answer sheet generator and automated optical grading',
        navExams: '1. Exam & Key',
        navSheet: '2. OMR Sheet',
        navScanner: '3. OMR Scanner',
        navResults: '4. Gradebook',
        btnPrintTop: 'Generate PDF',
        examConfigTitle: 'Exam Configuration',
        btnNewExam: 'New',
        btnDuplicateExam: 'Duplicate',
        toastExamDuplicated: 'Exam duplicated. Update course or title and click Save',
        labelExamTitle: 'Exam / Assessment Title',
        btnSaveExam: 'Save',
        labelCourse: 'Grade / Subject',
        labelQCount: 'Question Count',
        questionsUnit: 'questions',
        questionsShort: 'q',
        optionsShort: 'opt',
        scaleWord: 'Scale',
        labelMaxGrade: 'Max Grade',
        labelMinGrade: 'Min Grade',
        labelOptionsCount: 'Choices',
        metricValPerQ: 'Value per correct answer',
        metricPassing: 'Passing grade',
        metricKeyStatus: 'Configured key',
        savedExamsTitle: 'My Saved Exams',
        emptySavedExams: 'No saved exams yet.',
        btnExportJson: 'Export JSON',
        btnImportJson: 'Import JSON',
        btnQrSync: 'QR Sync',
        // btnQrShare: 'Share via QR',
        // btnQrScan: 'Scan QR',
        answerKeyTitle: 'Correct Answer Key',
        answerKeySub: 'Click the correct bubble for each question or paste a quick answer sequence.',
        placeholderQuickKey: 'Quick paste: e.g. ABCDABCDAA...',
        btnRandomKey: 'Randomize',
        btnApplyPattern: 'Apply',
        sheetPreviewTitle: 'ICFES-Style OMR Answer Sheet Preview',
        sheetPreviewSub: 'Choose between full ICFES layout or simplified compact layout (up to 6 per page).',
        labelShowKeySheet: 'Teacher Key Sheet',
        optStyleFull: 'Full ICFES',
        optStyleMinimal: 'Simplified',
        optLayout1: '1 per Page',
        optLayout2: '2 per Page',
        optLayout4: '4 per Page',
        optLayout6: '6 per Page',
        optOrientAuto: 'Orientation: Auto',
        optOrientPortrait: 'Portrait',
        optOrientLandscape: 'Landscape',
        optPaperLetter: 'Size: Letter',
        optPaperLegal: 'Size: Legal',
        btnDownloadSheetPng: 'Download PNG',
        btnPrintSheetNow: 'Generate PDF',
        scannerTitle: 'Optical OMR Sheet Scanner',
        scannerSub: 'Align the 4 black corner squares of the sheet or upload a photo/scan.',
        btnCameraOn: 'Start Camera',
        btnCameraOff: 'Stop Camera',
        btnCapturePhoto: 'Capture & Grade',
        btnUploadPhoto: 'Upload Sheet Photo',
        btnSimulateScan: 'Simulate Filled Sheet',
        labelSensitivity: 'Pencil / Ink detection sensitivity:',
        scanResultTitle: 'Assessment Result',
        scanStatusReady: 'Ready to scan',
        statCorrect: 'Correct',
        statWrong: 'Wrong',
        statBlank: 'Blank / Double',
        statPct: 'Percentage',
        labelStudentName: 'Student Name',
        placeholderStudentName: 'E.g. Caroll Lopez - 601',
        labelStudentCode: 'Student ID (Optional)',
        placeholderStudentCode: 'E.g. 106599...',
        btnSaveGrade: 'Save Grade to Gradebook',
        auditTitle: 'Quick Question-by-Question Review & Override',
        auditHint: '(Click any bubble below to manually adjust the detected answer)',
        auditKeyLabel: 'Key',
        gradebookTitle: 'Student Gradebook',
        gradebookSub: 'Historical record of scanned sheets with automatic class average and CSV export.',
        filterAllExams: 'All Exams',
        placeholderSearchStudent: 'Search student...',
        optSepSemicolon: 'Delimiter: Semicolon ( ; )',
        optSepComma: 'Delimiter: Comma ( , )',
        optSepTab: 'Delimiter: Tab',
        optSepPipe: 'Delimiter: Pipe ( | )',
        btnExportCsv: 'Export Excel (.csv)',
        btnClearGrades: 'Clear',
        kpiTotal: 'Graded',
        kpiAvg: 'Class Average',
        kpiPassRate: 'Pass Rate',
        kpiBest: 'Highest Grade',
        thResStudent: 'Student',
        thResCode: 'ID',
        thResExam: 'Exam',
        thResHits: 'Hits',
        thResPct: 'Percentage',
        thResGrade: 'Final Grade',
        thResDate: 'Date',
        emptyGradebook: 'No graded sheets in this view yet.',
        sheetHeaderTitle: 'OPTICAL ANSWER SHEET - OMR FORMAT',
        sheetStudentLabel: 'STUDENT FULL NAME:',
        sheetStudentShort: 'Name:',
        sheetDateLabel: 'DATE:',
        sheetGradeLabel: 'GRADE:',
        sheetInstText: 'Completely fill the circle using a dark pencil or black pen. Avoid stray marks or erasures.',
        toastExamSaved: 'Exam and answer key saved successfully',
        toastExamDeleted: 'Exam removed from saved list',
        toastRandomKey: 'Random answer key generated',
        toastPatternApplied: 'Answer sequence applied',
        toastScanComplete: 'Sheet scanned and graded automatically',
        toastGradeSaved: 'Grade saved to gradebook',
        toastStudentRequired: 'Please enter the student name before saving',
        modalImportTitle: 'How would you like to import the JSON file?',
        modalImportDesc: 'Choose whether to merge the imported exams and grades with your existing ones, or overwrite everything:',
        btnImportMerge: 'Add / Merge with current',
        btnImportOverwrite: 'Overwrite all',
        btnImportCancel: 'Cancel',
        toastImportMerged: 'Imported data merged with your existing list',
        toastImportOverwritten: 'All data replaced by imported file',
        modalClearAllTitle: 'Clear the ENTIRE gradebook?',
        modalClearAllDesc: (count) => `You have <strong>All Exams</strong> selected. This action will permanently delete all <strong>${count} records</strong>. Do you want to continue?`,
        modalClearExamTitle: 'Clear grades for this exam?',
        modalClearExamDesc: (exam, count) => `Only the <strong>${count} grades</strong> recorded for <strong>"${exam}"</strong> will be deleted (grades from other exams will be kept).`,
        btnConfirmClearGrades: 'Yes, clear records',
        toastClearedAllGrades: 'Entire gradebook cleared',
        toastClearedExamGrades: (exam) => `Grades cleared for "${exam}"`
    }
};

/* --------------------------------------------------------------------------
   1. ESTADO GLOBAL DE LA APLICACIÓN
   -------------------------------------------------------------------------- */
let appState = {
    lang: localStorage.getItem(STORAGE_KEYS.LANG) || 'es',
    theme: localStorage.getItem(STORAGE_KEYS.THEME) || 'light',
    exams: [],
    activeExam: null,
    results: [],
    scanner: {
        stream: null,
        threshold: 38,
        lastImageSource: null,
        detectedAnswers: {}
    }
};

function t(key) {
    return I18N[appState.lang]?.[key] ?? I18N.es[key] ?? key;
}

/* --------------------------------------------------------------------------
   2. INICIALIZACIÓN Y GESTIÓN DE EXÁMENES (ANSWER KEY & ESCALA DE NOTA)
   -------------------------------------------------------------------------- */
function createDefaultExam() {
    const savedMax = parseFloat(localStorage.getItem('upargrade_default_max'));
    const savedMin = parseFloat(localStorage.getItem('upargrade_default_min'));
    const defaultAnswers = {};
    for (let i = 1; i <= 20; i++) {
        defaultAnswers[i] = LETTERS[(i - 1) % 4];
    }
    return {
        id: 'exam_default_601',
        title: 'Simulacro ICFES - Tecnología 601',
        course: '601 - Informática',
        questionCount: 20,
        optionsCount: 4,
        maxGrade: !isNaN(savedMax) ? savedMax : 10.0,
        minGrade: !isNaN(savedMin) ? savedMin : 0.0,
        answers: defaultAnswers,
        updatedAt: new Date().toISOString().slice(0, 10)
    };
}

function loadStorageData() {
    try {
        const rawExams = JSON.parse(localStorage.getItem(STORAGE_KEYS.EXAMS) || 'null');
        appState.exams = Array.isArray(rawExams) ? rawExams : [createDefaultExam()];
    } catch (e) {
        appState.exams = [createDefaultExam()];
    }

    if (appState.exams.length === 0) {
        appState.activeExam = createDefaultExam();
    } else {
        const savedActiveId = localStorage.getItem(STORAGE_KEYS.ACTIVE_EXAM_ID);
        const found = appState.exams.find(ex => ex.id === savedActiveId) || appState.exams[0];
        appState.activeExam = JSON.parse(JSON.stringify(found));
    }

    try {
        const rawRes = JSON.parse(localStorage.getItem(STORAGE_KEYS.RESULTS) || '[]');
        appState.results = Array.isArray(rawRes) ? rawRes : [];
    } catch (e) {
        appState.results = [];
    }
}

function saveExamsToStorage() {
    localStorage.setItem(STORAGE_KEYS.EXAMS, JSON.stringify(appState.exams));
    if (appState.activeExam) {
        localStorage.setItem(STORAGE_KEYS.ACTIVE_EXAM_ID, appState.activeExam.id);
    }
}

function saveResultsToStorage() {
    localStorage.setItem(STORAGE_KEYS.RESULTS, JSON.stringify(appState.results));
}

function syncCurrentExamMeta() {
    const ex = appState.activeExam;
    if (!ex) return;

    const rawMax = parseFloat(document.getElementById('examMaxGrade').value);
    const rawMin = parseFloat(document.getElementById('examMinGrade').value);

    ex.title = document.getElementById('examTitleInput').value.trim() || 'Examen sin título';
    ex.course = document.getElementById('examCourseInput').value.trim() || 'General';
    ex.maxGrade = !isNaN(rawMax) && rawMax >= 1 ? rawMax : 10.0;
    ex.minGrade = !isNaN(rawMin) && rawMin >= 0 ? rawMin : 0.0;
    if (ex.minGrade >= ex.maxGrade) ex.minGrade = 0;

    // Guardar automáticamente como escala predeterminada global para futuros exámenes
    localStorage.setItem('upargrade_default_max', ex.maxGrade);
    localStorage.setItem('upargrade_default_min', ex.minGrade);

    updateExamMathSummary();
}

// 
function getGlobalPassingRatio() {
    const saved = parseFloat(localStorage.getItem('upargrade_passing_ratio'));
    return !isNaN(saved) && saved > 0 && saved <= 1 ? saved : 0.6;
}

function updatePassingLabelsUI(pctInt) {
    const baseText = appState.lang === 'en' ? 'Pass Rate' : 'Aprobados';
    const fullText = `${baseText} (≥ ${pctInt}%)`;

    // 1. Actualizar directamente el texto en pantalla (ID: uiKpiPassRate)
    const el = document.getElementById('uiKpiPassRate');
    if (el) el.textContent = fullText;

    // 2. Actualizar el diccionario I18N para que al cambiar de idioma conserve el (≥ X%)
    if (typeof I18N !== 'undefined') {
        if (I18N.es) I18N.es.kpiPassRate = `Aprobados (≥ ${pctInt}%)`;
        if (I18N.en) I18N.en.kpiPassRate = `Pass Rate (≥ ${pctInt}%)`;
    }
}

function updateExamMathSummary() {
    const ex = appState.activeExam;
    if (!ex) return;

    const ratio = getGlobalPassingRatio();
    const pctInt = Math.round(ratio * 100);
    const range = ex.maxGrade - ex.minGrade;
    const valPerQuestion = range / ex.questionCount;
    const passingGrade = ex.minGrade + range * ratio;

    document.getElementById('metricPointsPerQuestion').textContent = `+${valPerQuestion.toFixed(3)} pts`;

    const pctEl = document.getElementById('passingPctInput');
    const gradeEl = document.getElementById('metricPassingGrade');
    if (pctEl && document.activeElement !== pctEl) {
        pctEl.textContent = pctInt;
    }
    if (gradeEl && document.activeElement !== gradeEl) {
        gradeEl.textContent = passingGrade.toFixed(2);
    }

    updatePassingLabelsUI(pctInt);

    let configuredCount = 0;
    for (let i = 1; i <= ex.questionCount; i++) {
        if (ex.answers[i]) configuredCount++;
    }
    document.getElementById('metricKeyProgress').textContent = `${configuredCount} / ${ex.questionCount}`;
    document.getElementById('scannerActiveExamBadge').textContent = `${ex.title} (${ex.questionCount} Q)`;
}

function onPassingPctChange(rawText) {
    const ex = appState.activeExam;
    if (!ex) return;

    let pct = parseFloat(String(rawText).replace(',', '.'));
    if (isNaN(pct)) return;
    pct = Math.max(1, Math.min(100, pct));

    const ratio = pct / 100;
    localStorage.setItem('upargrade_passing_ratio', ratio);

    const range = ex.maxGrade - ex.minGrade;
    const passingGrade = ex.minGrade + range * ratio;

    const gradeEl = document.getElementById('metricPassingGrade');
    if (gradeEl && document.activeElement !== gradeEl) {
        gradeEl.textContent = passingGrade.toFixed(2);
    }

    updatePassingLabelsUI(Math.round(pct));
    syncPassingAcrossAllResults();
}

function onPassingGradeChange(rawText) {
    const ex = appState.activeExam;
    if (!ex) return;

    let grade = parseFloat(String(rawText).replace(',', '.'));
    if (isNaN(grade)) return;

    const range = ex.maxGrade - ex.minGrade;
    if (range <= 0) return;

    let ratio = (grade - ex.minGrade) / range;
    ratio = Math.max(0.01, Math.min(1, ratio));
    localStorage.setItem('upargrade_passing_ratio', ratio);

    const pctInt = Math.round(ratio * 100);
    const pctEl = document.getElementById('passingPctInput');
    if (pctEl && document.activeElement !== pctEl) {
        pctEl.textContent = pctInt;
    }

    updatePassingLabelsUI(pctInt);
    syncPassingAcrossAllResults();
}

// Aplica la nueva nota aprobatoria a TODOS los registros guardados
function syncPassingAcrossAllResults() {
    const minPassPct = Math.round(getGlobalPassingRatio() * 100);

    if (Array.isArray(appState.results)) {
        appState.results.forEach(r => {
            r.passed = (r.percentage ?? 0) >= minPassPct;
        });
        localStorage.setItem('upargrade_results_v1', JSON.stringify(appState.results));
    }

    if (typeof renderGradebookTable === 'function') renderGradebookTable();
}
//

function handleQuestionCountChange(val) {
    const count = parseInt(val, 10) || 20;
    const ex = appState.activeExam;
    ex.questionCount = count;

    const allowedLetters = LETTERS.slice(0, ex.optionsCount);
    for (let i = 1; i <= count; i++) {
        if (!ex.answers[i] || !allowedLetters.includes(ex.answers[i])) {
            ex.answers[i] = 'A';
        }
    }
    renderAnswerKeyGrid();
    updateExamMathSummary();
    renderPrintableSheets();
}

function handleOptionsCountChange(val) {
    const optCount = parseInt(val, 10) || 4;
    const ex = appState.activeExam;
    ex.optionsCount = optCount;

    const allowed = LETTERS.slice(0, optCount);
    for (let i = 1; i <= ex.questionCount; i++) {
        if (!allowed.includes(ex.answers[i])) {
            ex.answers[i] = 'A';
        }
    }
    renderAnswerKeyGrid();
    renderPrintableSheets();
}

function renderAnswerKeyGrid() {
    const ex = appState.activeExam;
    const container = document.getElementById('answerKeyGrid');
    if (!container || !ex) return;

    const activeLetters = LETTERS.slice(0, ex.optionsCount);
    let html = '';

    for (let q = 1; q <= ex.questionCount; q++) {
        const currentAns = ex.answers[q] || 'A';
        const bubblesHtml = activeLetters.map(letter => {
            const isSel = currentAns === letter ? 'selected' : '';
            return `<button type="button" class="bubble-btn ${isSel}" onclick="setQuestionAnswerKey(${q}, '${letter}')">${letter}</button>`;
        }).join('');

        html += `
            <div class="key-row-item">
                <span class="key-q-num">${String(q).padStart(2, '0')}.</span>
                <div class="key-bubbles-group">${bubblesHtml}</div>
            </div>
        `;
    }
    container.innerHTML = html;
}

function setQuestionAnswerKey(qNum, letter) {
    appState.activeExam.answers[qNum] = letter;
    renderAnswerKeyGrid();
    updateExamMathSummary();
    renderPrintableSheets();
}

function fillRandomKey() {
    const ex = appState.activeExam;
    const allowed = LETTERS.slice(0, ex.optionsCount);
    for (let q = 1; q <= ex.questionCount; q++) {
        ex.answers[q] = allowed[Math.floor(Math.random() * allowed.length)];
    }
    renderAnswerKeyGrid();
    renderPrintableSheets();
    showToast(t('toastRandomKey'), 'fa-shuffle');
}

function applyQuickKeyString() {
    const raw = (document.getElementById('quickKeyStringInput').value || '').toUpperCase().replace(/[^A-E]/g, '');
    if (!raw) return;
    const ex = appState.activeExam;
    const allowed = LETTERS.slice(0, ex.optionsCount);

    for (let i = 0; i < Math.min(raw.length, ex.questionCount); i++) {
        const ch = raw[i];
        if (allowed.includes(ch)) {
            ex.answers[i + 1] = ch;
        }
    }
    document.getElementById('quickKeyStringInput').value = '';
    renderAnswerKeyGrid();
    renderPrintableSheets();
    showToast(t('toastPatternApplied'), 'fa-bolt');
}

function createNewBlankExam() {
    const savedMax = parseFloat(localStorage.getItem('upargrade_default_max'));
    const savedMin = parseFloat(localStorage.getItem('upargrade_default_min'));

    const newEx = {
        id: 'exam_' + Date.now(),
        title: 'Nueva Evaluación ICFES',
        course: 'Grado 601',
        questionCount: 20,
        optionsCount: 4,
        maxGrade: !isNaN(savedMax) ? savedMax : 10.0,
        minGrade: !isNaN(savedMin) ? savedMin : 0.0,
        answers: {},
        updatedAt: new Date().toISOString().slice(0, 10)
    };
    for (let i = 1; i <= 20; i++) newEx.answers[i] = 'A';
    appState.activeExam = newEx;
    populateExamFormInputs();
    renderAnswerKeyGrid();
    renderPrintableSheets();
}

function duplicateExamById(examId) {
    const source = examId
        ? appState.exams.find(e => e.id === examId)
        : appState.activeExam;
    if (!source) return;

    const copySuffix = appState.lang === 'en' ? '(Copy)' : '(Copia)';
    const duplicated = {
        ...JSON.parse(JSON.stringify(source)),
        id: 'exam_' + Date.now() + '_' + Math.floor(Math.random() * 1000),
        title: `${source.title} ${copySuffix}`,
        updatedAt: new Date().toISOString().slice(0, 10)
    };

    appState.activeExam = duplicated;
    appState.exams.unshift(JSON.parse(JSON.stringify(duplicated)));
    saveExamsToStorage();

    populateExamFormInputs();
    renderAnswerKeyGrid();
    renderSavedExamsList();
    renderPrintableSheets();
    drawReferenceSheetOnScannerCanvas(false);

    const courseInput = document.getElementById('examCourseInput');
    if (courseInput) courseInput.focus();

    showToast(t('toastExamDuplicated'), 'fa-copy');
}

function duplicateCurrentExam() {
    syncCurrentExamMeta();
    if (!appState.activeExam) return;
    duplicateExamById(null);
}

function saveCurrentExam() {
    syncCurrentExamMeta();
    const ex = appState.activeExam;
    ex.updatedAt = new Date().toISOString().slice(0, 10);

    // const idx = appState.exams.findIndex(item => item.id === ex.id || item.title.toLowerCase() === ex.title.toLowerCase());
    const idx = appState.exams.findIndex(item => item.id === ex.id);
    const clone = JSON.parse(JSON.stringify(ex));
    if (idx >= 0) {
        appState.exams[idx] = clone;
    } else {
        appState.exams.unshift(clone);
    }

    saveExamsToStorage();
    renderSavedExamsList();
    renderPrintableSheets();
    showToast(t('toastExamSaved'));
}

function loadSavedExam(examId) {
    const found = appState.exams.find(e => e.id === examId);
    if (!found) return;
    appState.activeExam = JSON.parse(JSON.stringify(found));
    localStorage.setItem(STORAGE_KEYS.ACTIVE_EXAM_ID, found.id);
    populateExamFormInputs();
    renderAnswerKeyGrid();
    renderPrintableSheets();
    drawReferenceSheetOnScannerCanvas(false);
}

function deleteSavedExam(examId) {
    const examToDelete = appState.exams.find(e => e.id === examId);
    if (!examToDelete) return;

    const isEn = appState.lang === 'en';
    const titleText = isEn ? 'Delete saved exam?' : '¿Eliminar examen guardado?';
    const safeTitle = String(examToDelete.title || '').replace(/</g, '<').replace(/>/g, '>');
    const safeCourse = String(examToDelete.course || '').replace(/</g, '<').replace(/>/g, '>');

    const descHtml = isEn
        ? `Are you sure you want to delete <strong>"${safeTitle}"</strong> (${safeCourse} • ${examToDelete.questionCount} ${t('questionsShort')})?`
        : `¿Seguro que deseas eliminar <strong>"${safeTitle}"</strong> (${safeCourse} • ${examToDelete.questionCount} ${t('questionsShort')})?`;

    const confirmBtnText = isEn ? 'Yes, delete exam' : 'Sí, eliminar examen';

    const overlay = document.createElement('div');
    overlay.className = 'upar-modal-overlay';
    overlay.innerHTML = `
        <div class="upar-modal-box">
            <h3><i class="fa-solid fa-triangle-exclamation text-amber"></i> ${titleText}</h3>
            <p>${descHtml}</p>
            <div class="upar-modal-actions">
                <button type="button" class="btn-utility" id="btnCancelDeleteSavedExam">
                    ${t('btnImportCancel')}
                </button>
                <button type="button" class="btn-danger-sm" id="btnConfirmDeleteSavedExam">
                    <i class="fa-regular fa-trash-can"></i> ${confirmBtnText}
                </button>
            </div>
        </div>
    `;
    document.body.appendChild(overlay);

    overlay.querySelector('#btnCancelDeleteSavedExam').onclick = () => {
        overlay.remove();
    };

    overlay.querySelector('#btnConfirmDeleteSavedExam').onclick = () => {
        overlay.remove();
        appState.exams = appState.exams.filter(e => e.id !== examId);

        if (appState.exams.length === 0) {
            createNewBlankExam();
        } else if (appState.activeExam && appState.activeExam.id === examId) {
            appState.activeExam = JSON.parse(JSON.stringify(appState.exams[0]));
            populateExamFormInputs();
            renderAnswerKeyGrid();
        }

        saveExamsToStorage();
        renderSavedExamsList();
        renderPrintableSheets();
        showToast(t('toastExamDeleted'), 'fa-trash-can');
    };
}

function populateExamFormInputs() {
    const ex = appState.activeExam;
    document.getElementById('examTitleInput').value = ex.title;
    document.getElementById('examCourseInput').value = ex.course;
    document.getElementById('examQuestionsCount').value = String(ex.questionCount);
    document.getElementById('examOptionsCount').value = String(ex.optionsCount);
    document.getElementById('examMaxGrade').value = ex.maxGrade;
    document.getElementById('examMinGrade').value = ex.minGrade;
    updateExamMathSummary();
}

function renderSavedExamsList() {
    const listEl = document.getElementById('savedExamsList');
    if (!listEl) return;
    document.getElementById('savedExamsBadge').textContent = appState.exams.length;

    if (appState.exams.length === 0) {
        listEl.innerHTML = `<p class="text-muted-xs" style="text-align:center; padding:0.75rem;">${t('emptySavedExams')}</p>`;
        return;
    }

    listEl.innerHTML = appState.exams.map(ex => `
        <div class="saved-exam-item">
            <div style="cursor:pointer; flex:1;" onclick="loadSavedExam('${ex.id}')">
                <h4>${ex.title}</h4>
                <p>${ex.course} • ${ex.questionCount} ${t('questionsShort')} (${ex.optionsCount} ${t('optionsShort')}) • ${t('scaleWord')} ${ex.minGrade} - ${ex.maxGrade}</p>
            </div>
            <div style="display:flex; gap:0.35rem;">
                <button type="button" class="btn-mini" onclick="openQrSyncHubModal()" title="Sincronizar por QR">
                    <i class="fa-solid fa-qrcode"></i>
                </button>
                <button type="button" class="btn-mini" onclick="loadSavedExam('${ex.id}')" title="Abrir">
                    <i class="fa-regular fa-folder-open"></i>
                </button>
                <button type="button" class="btn-mini" onclick="duplicateExamById('${ex.id}')" title="Duplicar">
                    <i class="fa-regular fa-copy"></i>
                </button>
                <button type="button" class="btn-mini-danger" onclick="deleteSavedExam('${ex.id}')" title="Eliminar">
                    <i class="fa-regular fa-trash-can"></i>
                </button>
            </div>
        </div>
    `).join('');
}

/* --------------------------------------------------------------------------
   3. GENERADOR DE HOJA DE RESPUESTAS TIPO ICFES (COMPLETA Y SIMPLIFICADA HASTA 6 POR PÁGINA)
   -------------------------------------------------------------------------- */
function resolveBestOrientation(copiesCount, questionCount, userSelection) {
    if (userSelection === 'portrait' || userSelection === 'landscape') {
        return userSelection;
    }
    if (copiesCount === 2) return 'landscape';
    if (copiesCount === 6) return questionCount > 25 ? 'portrait' : 'landscape';
    if (copiesCount === 4) return questionCount > 30 ? 'portrait' : 'landscape';
    return 'portrait';
}

function buildSingleSheetHTML(ex, showTeacherKey, isMinimal, copiesCount) {
    const activeLetters = LETTERS.slice(0, ex.optionsCount);

    let numCols = ex.questionCount > 30 ? 3 : 2;
    if (isMinimal) {
        if (ex.questionCount <= 15 && copiesCount >= 4) numCols = 2;
        else if (ex.questionCount > 20) numCols = 3;
        else numCols = 2;
    }

    const perCol = Math.ceil(ex.questionCount / numCols);

    let colsHtml = '';
    for (let c = 0; c < numCols; c++) {
        const startQ = c * perCol + 1;
        const endQ = Math.min((c + 1) * perCol, ex.questionCount);
        if (startQ > ex.questionCount) break;

        let rowsHtml = '';
        for (let q = startQ; q <= endQ; q++) {
            const correctAns = ex.answers[q];
            const bubbles = activeLetters.map(letter => {
                const fillClass = (showTeacherKey && correctAns === letter) ? 'teacher-filled' : '';
                return `<span class="omr-print-bubble ${fillClass}">${letter}</span>`;
            }).join('');

            rowsHtml += `
                <div class="sheet-q-row">
                    <span>${String(q).padStart(2, '0')}</span>
                    <div class="sheet-q-bubbles">${bubbles}</div>
                </div>
            `;
        }
        colsHtml += `<div class="sheet-column-box">${rowsHtml}</div>`;
    }

    if (isMinimal) {
        return `
            <div class="icfes-sheet-card minimal-card">
                <div class="fiducial-mark tl"></div>
                <div class="fiducial-mark tr"></div>
                <div class="fiducial-mark bl"></div>
                <div class="fiducial-mark br"></div>

                <div class="minimal-header-strip">
                    <span>${ex.title} (${ex.course})</span>
                    <span>${showTeacherKey ? '★ KEY ★' : `${ex.questionCount}Q`}</span>
                </div>

                <div class="minimal-name-line">
                    <span style="flex:1;">${t('sheetStudentShort')} ___________________________</span>
                    <span>${t('sheetGradeLabel')} ______</span>
                </div>

                <div class="sheet-bubbles-columns" style="grid-template-columns: repeat(${numCols}, 1fr);">
                    ${colsHtml}
                </div>
            </div>
        `;
    }

    return `
        <div class="icfes-sheet-card">
            <div class="fiducial-mark tl"></div>
            <div class="fiducial-mark tr"></div>
            <div class="fiducial-mark bl"></div>
            <div class="fiducial-mark br"></div>

            <div class="sheet-header-box">
                <div class="sheet-title-block">
                    <h3>${ex.title}</h3>
                    <p>${t('sheetHeaderTitle')} • ${ex.course}</p>
                </div>
                <div class="sheet-code-badge">
                    ${ex.questionCount} Q | MAX: ${ex.maxGrade}
                </div>
            </div>

            <div class="sheet-student-fields">
                <div>
                    <span>${t('sheetStudentLabel')}</span>
                    <div class="field-line"></div>
                </div>
                <div>
                    <span>${t('sheetDateLabel')}</span>
                    <div class="field-line"></div>
                </div>
                <div>
                    <span>${t('sheetGradeLabel')}</span>
                    <div class="field-line"></div>
                </div>
            </div>

            <div class="sheet-instructions-bar">
                <span>● ${t('sheetInstText')}</span>
                <strong>${showTeacherKey ? '★ KEY ★' : 'OMR-ICFES'}</strong>
            </div>

            <div class="sheet-bubbles-columns" style="grid-template-columns: repeat(${numCols}, 1fr);">
                ${colsHtml}
            </div>
        </div>
    `;
}


//BLOQUE CAMBIADO 5 FUNCIONES HASTA ANTES DE LA SESION 4 renderPrintableSheets a downloadSheetAsPNG//
//FUNCION NUEVA getCleanExamFileName//

function renderPrintableSheets() {
    const ex = appState.activeExam;
    const container = document.getElementById('printableAreaContainer');
    if (!container || !ex) return;

    const showKey = document.getElementById('showTeacherKeyOnSheet')?.checked || false;
    const styleMode = document.getElementById('sheetStyleModeSelect')?.value || 'full';
    const copiesCount = parseInt(document.getElementById('sheetPrintLayoutSelect')?.value, 10) || 1;
    const paperSize = document.getElementById('sheetPaperSizeSelect')?.value || 'letter';
    const orientChoice = document.getElementById('sheetOrientationSelect')?.value || 'auto';

    const isMinimal = styleMode === 'minimal' || copiesCount >= 4;
    const finalOrientation = resolveBestOrientation(copiesCount, ex.questionCount, orientChoice);

    // Configurar regla @page dinámica según Carta (letter) u Oficio (legal: 216mm x 330mm)
    const cssSizeName = paperSize === 'legal' ? 'legal' : 'letter';
    const pageStyleEl = document.getElementById('dynamicPrintPageStyle');
    if (pageStyleEl) {
        pageStyleEl.textContent = `@media print { @page { size: ${cssSizeName} ${finalOrientation}; margin: 6mm; } }`;
    }

    container.className = 'printable-area-container';
    container.dataset.paperSize = paperSize;
    if (copiesCount === 1) {
        container.classList.add('grid-1');
    } else {
        container.classList.add(`grid-${copiesCount}-${finalOrientation}`);
    }

    const singleCardHtml = buildSingleSheetHTML(ex, showKey, isMinimal, copiesCount);
    container.innerHTML = Array.from({ length: copiesCount }, () => singleCardHtml).join('');
}

function getCleanExamFileName(ex, prefix = '') {
    const rawTitle = (ex?.title || 'Examen').trim();
    const rawCourse = (ex?.course || '').trim();
    const combined = rawCourse && !rawTitle.toLowerCase().includes(rawCourse.toLowerCase())
        ? `${rawTitle} - ${rawCourse}`
        : rawTitle;
    return prefix ? `${prefix} - ${combined}` : combined;
}

/**
 * Calcula la geometría proporcional sin deformar círculos ni textos,
 * adaptándose a cualquier proporción de celda (1, 2, 4 o 6 por hoja).
 */
function getOMRBubbleGeometry(ex, width = 700, height = 920, isMinimal = false) {
    const s = Math.min(width / 560, height / 720);
    const activeLetters = LETTERS.slice(0, ex.optionsCount);
    const numCols = isMinimal
        ? (ex.questionCount > 20 ? 3 : 2)
        : (ex.questionCount > 30 ? 3 : 2);
    const perCol = Math.ceil(ex.questionCount / numCols);

    const marginX = Math.round((isMinimal ? 30 : 44) * s);
    const startY = isMinimal
        ? Math.round(92 * s)
        : Math.round(198 * s);
    const bottomPad = Math.round((isMinimal ? 26 : 38) * s);

    const availableW = width - marginX * 2;
    const colGap = Math.round((isMinimal ? 12 : 18) * s);
    const colWidth = (availableW - (numCols - 1) * colGap) / numCols;

    const availH = Math.max(120, height - startY - bottomPad);
    const rowHeight = Math.min(
        Math.round((isMinimal ? 28 : 34) * s),
        availH / perCol
    );

    const labelOffset = Math.round((isMinimal ? 32 : 44) * s);
    const bubbleAreaW = Math.max(40, colWidth - labelOffset - Math.round(8 * s));
    const bubbleSpacing = Math.min(
        Math.round((isMinimal ? 25 : 32) * s),
        bubbleAreaW / activeLetters.length
    );

    // El radio depende del menor entre fila y columna para que SIEMPRE sea un círculo perfecto
    const bubbleRadius = Math.max(
        5,
        Math.min(
            Math.round(rowHeight * 0.34),
            Math.round(bubbleSpacing * 0.38),
            Math.round(12 * s)
        )
    );

    const coords = {};

    for (let c = 0; c < numCols; c++) {
        const colLeft = marginX + c * (colWidth + colGap);
        const startQ = c * perCol + 1;
        const endQ = Math.min((c + 1) * perCol, ex.questionCount);

        for (let q = startQ; q <= endQ; q++) {
            const rowIdx = q - startQ;
            const cy = Math.round(startY + rowHeight * 0.55 + rowIdx * rowHeight);
            coords[q] = {};

            const bubblesStartX = Math.round(colLeft + labelOffset + bubbleRadius);

            activeLetters.forEach((letter, lIdx) => {
                const cx = Math.round(bubblesStartX + lIdx * bubbleSpacing);
                coords[q][letter] = { x: cx, y: cy, r: bubbleRadius };
            });
        }
    }

    return { coords, numCols, perCol, marginX, startY, colWidth, colGap, rowHeight, isMinimal, scale: s };
}

/**
 * Dibuja una tarjeta OMR directamente en el rectángulo (offsetX, offsetY, W, H)
 * usando vectores nítidos sin re-escalar imágenes.
 */
/**
 * Auxiliar para dividir texto largo en varias líneas dentro de un ancho máximo en Canvas
 */
function wrapCanvasText(ctx, text, maxWidth) {
    const words = String(text || '').split(' ');
    const lines = [];
    let currentLine = words[0] || '';

    for (let i = 1; i < words.length; i++) {
        const testLine = currentLine + ' ' + words[i];
        if (ctx.measureText(testLine).width <= maxWidth) {
            currentLine = testLine;
        } else {
            lines.push(currentLine);
            currentLine = words[i];
        }
    }
    if (currentLine) lines.push(currentLine);
    return lines;
}

/**
 * Dibuja una tarjeta OMR directamente en el rectángulo (offsetX, offsetY, W, H)
 * replicando exactamente el diseño de la vista previa HTML sin desbordamientos.
 */
function drawOMRSheetRegion(ctx, ex, offsetX, offsetY, W, H, simulatedAnswers = null, isMinimal = false) {
    ctx.save();
    ctx.translate(offsetX, offsetY);

    // Recortar cualquier exceso fuera de la tarjeta por seguridad
    ctx.beginPath();
    ctx.rect(0, 0, W, H);
    ctx.clip();

    const s = Math.min(W / 560, H / 720);

    // Fondo blanco de la tarjeta
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, W, H);

    // Borde exterior de la tarjeta
    ctx.strokeStyle = isMinimal ? '#64748b' : '#334155';
    ctx.lineWidth = Math.max(1, 1.5 * s);
    if (isMinimal) ctx.setLineDash([5 * s, 4 * s]);
    ctx.strokeRect(2 * s, 2 * s, W - 4 * s, H - 4 * s);
    ctx.setLineDash([]);

    // 4 Marcas fiduciales negras en las esquinas
    ctx.fillStyle = '#000000';
    const fSize = Math.round((isMinimal ? 14 : 20) * s);
    const fMargin = Math.round((isMinimal ? 10 : 14) * s);
    ctx.fillRect(fMargin, fMargin, fSize, fSize);
    ctx.fillRect(W - fMargin - fSize, fMargin, fSize, fSize);
    ctx.fillRect(fMargin, H - fMargin - fSize, fSize, fSize);
    ctx.fillRect(W - fMargin - fSize, H - fMargin - fSize, fSize, fSize);

    const geom = getOMRBubbleGeometry(ex, W, H, isMinimal);
    const mx = geom.marginX;
    const innerW = W - mx * 2;

    if (isMinimal) {
        const headerY = fMargin + fSize + Math.round(12 * s);
        ctx.fillStyle = '#000000';
        ctx.font = `800 ${Math.max(9, Math.round(12 * s))}px Inter, sans-serif`;
        ctx.textAlign = 'left';
        ctx.textBaseline = 'alphabetic';

        const rightTag = simulatedAnswers ? '★ KEY ★' : `${ex.questionCount}Q`;
        const maxTitleW = innerW - ctx.measureText(rightTag).width - Math.round(12 * s);
        let titleText = `${ex.title} (${ex.course})`;
        while (ctx.measureText(titleText).width > maxTitleW && titleText.length > 8) {
            titleText = titleText.slice(0, -2) + '…';
        }
        ctx.fillText(titleText, mx, headerY);

        ctx.textAlign = 'right';
        ctx.fillText(rightTag, W - mx, headerY);

        ctx.strokeStyle = '#000000';
        ctx.lineWidth = Math.max(1, 1.4 * s);
        ctx.beginPath();
        ctx.moveTo(mx, headerY + Math.round(5 * s));
        ctx.lineTo(W - mx, headerY + Math.round(5 * s));
        ctx.stroke();

        // Línea de Nombre y Nota con líneas dibujadas sin desbordar
        const nameY = headerY + Math.round(23 * s);
        ctx.textAlign = 'left';
        ctx.font = `700 ${Math.max(8, Math.round(10.5 * s))}px Inter, sans-serif`;

        const nameLbl = `${t('sheetStudentShort')} `;
        const gradeLbl = `${t('sheetGradeLabel')} `;
        const gradeBlockW = Math.round(78 * s);
        const nameBlockEnd = W - mx - gradeBlockW - Math.round(10 * s);

        ctx.fillText(nameLbl, mx, nameY);
        const nameLineStart = mx + ctx.measureText(nameLbl).width + Math.round(3 * s);
        ctx.lineWidth = Math.max(0.9, 1 * s);
        ctx.beginPath();
        ctx.moveTo(nameLineStart, nameY + Math.round(2 * s));
        ctx.lineTo(nameBlockEnd, nameY + Math.round(2 * s));
        ctx.stroke();

        const gradeStartX = W - mx - gradeBlockW;
        ctx.fillText(gradeLbl, gradeStartX, nameY);
        const gradeLineStart = gradeStartX + ctx.measureText(gradeLbl).width + Math.round(3 * s);
        ctx.beginPath();
        ctx.moveTo(gradeLineStart, nameY + Math.round(2 * s));
        ctx.lineTo(W - mx, nameY + Math.round(2 * s));
        ctx.stroke();
    } else {
        // 1. CAJA SUPERIOR DE TÍTULO + RECUADRO DE CÓDIGO (20 Q | MAX: 10)
        const boxTop = Math.round(34 * s);
        const boxH = Math.round(48 * s);
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = Math.max(1.2, 1.8 * s);
        ctx.strokeRect(mx, boxTop, innerW, boxH);

        // Recuadro derecho: "20 Q | MAX: 10"
        const badgeText = `${ex.questionCount} Q | MAX: ${ex.maxGrade}`;
        ctx.font = `800 ${Math.max(8, Math.round(10 * s))}px "JetBrains Mono", monospace`;
        const badgePadX = Math.round(8 * s);
        const badgeW = Math.ceil(ctx.measureText(badgeText).width + badgePadX * 2);
        const badgeH = Math.round(22 * s);
        const badgeX = W - mx - badgeW - Math.round(10 * s);
        const badgeY = boxTop + Math.round((boxH - badgeH) / 2);

        ctx.lineWidth = Math.max(1, 1.4 * s);
        ctx.strokeRect(badgeX, badgeY, badgeW, badgeH);
        ctx.fillStyle = '#000000';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(badgeText, badgeX + badgeW / 2, badgeY + badgeH / 2 + 0.5 * s);

        // Título y subtítulo a la izquierda (truncando si es muy largo para no chocar con el badge)
        const maxLeftTextW = badgeX - (mx + Math.round(16 * s));
        ctx.textAlign = 'left';
        ctx.textBaseline = 'alphabetic';
        ctx.fillStyle = '#000000';
        ctx.font = `800 ${Math.max(10, Math.round(14 * s))}px Inter, sans-serif`;
        let mainTitle = ex.title.toUpperCase();
        while (ctx.measureText(mainTitle).width > maxLeftTextW && mainTitle.length > 6) {
            mainTitle = mainTitle.slice(0, -2) + '…';
        }
        ctx.fillText(mainTitle, mx + Math.round(12 * s), boxTop + Math.round(20 * s));

        ctx.font = `600 ${Math.max(8, Math.round(10 * s))}px Inter, sans-serif`;
        ctx.fillStyle = '#334155';
        let subTitle = `${t('sheetHeaderTitle')} • ${ex.course}`;
        while (ctx.measureText(subTitle).width > maxLeftTextW && subTitle.length > 8) {
            subTitle = subTitle.slice(0, -2) + '…';
        }
        ctx.fillText(subTitle, mx + Math.round(12 * s), boxTop + Math.round(37 * s));

        // 2. CAJA DE ESTUDIANTE / FECHA / NOTA (3 columnas con etiqueta arriba y línea abajo)
        const stTop = boxTop + boxH + Math.round(8 * s);
        const stH = Math.round(44 * s);
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = Math.max(1, 1.4 * s);
        ctx.strokeRect(mx, stTop, innerW, stH);

        const padIn = Math.round(10 * s);
        const colGapSt = Math.round(12 * s);
        const usableStW = innerW - padIn * 2 - colGapSt * 2;
        const wCol1 = Math.floor(usableStW * 0.50);
        const wCol2 = Math.floor(usableStW * 0.25);
        const wCol3 = usableStW - wCol1 - wCol2;

        const xCol1 = mx + padIn;
        const xCol2 = xCol1 + wCol1 + colGapSt;
        const xCol3 = xCol2 + wCol2 + colGapSt;

        const labelY = stTop + Math.round(15 * s);
        const lineY = stTop + stH - Math.round(8 * s);

        ctx.fillStyle = '#000000';
        ctx.font = `700 ${Math.max(7.5, Math.round(9.2 * s))}px Inter, sans-serif`;
        ctx.textAlign = 'left';
        ctx.textBaseline = 'alphabetic';

        ctx.fillText(t('sheetStudentLabel'), xCol1, labelY);
        ctx.fillText(t('sheetDateLabel'), xCol2, labelY);
        ctx.fillText(t('sheetGradeLabel'), xCol3, labelY);

        ctx.strokeStyle = '#000000';
        ctx.lineWidth = Math.max(0.9, 1.1 * s);
        ctx.beginPath();
        ctx.moveTo(xCol1, lineY);
        ctx.lineTo(xCol1 + wCol1, lineY);
        ctx.moveTo(xCol2, lineY);
        ctx.lineTo(xCol2 + wCol2, lineY);
        ctx.moveTo(xCol3, lineY);
        ctx.lineTo(xCol3 + wCol3, lineY);
        ctx.stroke();

        // 3. BARRA DE INSTRUCCIONES (Con ajuste de línea automático + OMR-ICFES a la derecha)
        const instTop = stTop + stH + Math.round(8 * s);
        const instH = Math.round(32 * s);
        ctx.fillStyle = '#f1f5f9';
        ctx.fillRect(mx, instTop, innerW, instH);
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = Math.max(0.9, 1.1 * s);
        ctx.strokeRect(mx, instTop, innerW, instH);

        // Sello derecho "OMR-ICFES" o "★ KEY ★"
        const rightStamp = simulatedAnswers ? '★ KEY ★' : 'OMR-ICFES';
        ctx.fillStyle = '#0f172a';
        ctx.font = `800 ${Math.max(7.5, Math.round(9 * s))}px Inter, sans-serif`;
        const stampW = ctx.measureText(rightStamp).width + Math.round(14 * s);
        ctx.textAlign = 'right';
        ctx.textBaseline = 'middle';
        ctx.fillText(rightStamp, W - mx - Math.round(10 * s), instTop + instH / 2);

        // Texto de recomendación con salto de línea (máximo 2 líneas dentro del ancho disponible)
        ctx.textAlign = 'left';
        ctx.font = `600 ${Math.max(7.5, Math.round(8.8 * s))}px Inter, sans-serif`;
        const maxInstTextW = innerW - stampW - Math.round(20 * s);
        const wrappedLines = wrapCanvasText(ctx, `● ${t('sheetInstText')}`, maxInstTextW);

        if (wrappedLines.length === 1) {
            ctx.textBaseline = 'middle';
            ctx.fillText(wrappedLines[0], mx + Math.round(10 * s), instTop + instH / 2);
        } else {
            ctx.textBaseline = 'alphabetic';
            const line1Y = instTop + Math.round(13 * s);
            const line2Y = instTop + Math.round(25 * s);
            ctx.fillText(wrappedLines[0], mx + Math.round(10 * s), line1Y);
            ctx.fillText(wrappedLines.slice(1).join(' '), mx + Math.round(10 * s), line2Y);
        }
    }

    // 4. RECUADROS DE COLUMNAS Y BURBUJAS DE RESPUESTA
    const activeLetters = LETTERS.slice(0, ex.optionsCount);
    const colBoxH = Math.round(geom.perCol * geom.rowHeight + 10 * s);

    for (let c = 0; c < geom.numCols; c++) {
        const colLeft = geom.marginX + c * (geom.colWidth + geom.colGap);
        ctx.strokeStyle = '#000000';
        ctx.lineWidth = Math.max(1, 1.2 * s);
        ctx.strokeRect(colLeft, geom.startY - Math.round(4 * s), geom.colWidth, colBoxH);
    }

    for (let q = 1; q <= ex.questionCount; q++) {
        const firstBubble = geom.coords[q]['A'];
        ctx.fillStyle = '#000000';
        ctx.font = `800 ${Math.max(8, Math.round((isMinimal ? 10.5 : 12) * s))}px "JetBrains Mono", monospace`;
        ctx.textAlign = 'right';
        ctx.textBaseline = 'middle';
        ctx.fillText(String(q).padStart(2, '0'), firstBubble.x - firstBubble.r - Math.round(8 * s), firstBubble.y);

        activeLetters.forEach(letter => {
            const b = geom.coords[q][letter];
            const isFilled = simulatedAnswers && simulatedAnswers[q] === letter;

            ctx.beginPath();
            ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
            ctx.fillStyle = isFilled ? '#0f172a' : '#ffffff';
            ctx.fill();
            ctx.lineWidth = Math.max(1.1, 1.5 * s);
            ctx.strokeStyle = '#000000';
            ctx.stroke();

            ctx.fillStyle = isFilled ? '#ffffff' : '#000000';
            ctx.font = `800 ${Math.max(7, Math.round(b.r * 0.92))}px "JetBrains Mono", monospace`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(letter, b.x, b.y + 0.5 * s);
        });
    }

    ctx.restore();
}

function drawOMRSheetToCanvas(canvas, ex, simulatedAnswers = null, isMinimal = false) {
    drawOMRSheetRegion(canvas.getContext('2d'), ex, 0, 0, canvas.width, canvas.height, simulatedAnswers, isMinimal);
}

/**
 * Construye el Canvas maestro en ultra-alta definición (2400px, sin distorsión)
 * para exportar tanto a PNG como a PDF con proporción exacta.
 */
function buildHighResSheetPageCanvas() {
    const ex = appState.activeExam;
    const showKey = document.getElementById('showTeacherKeyOnSheet')?.checked || false;
    const styleMode = document.getElementById('sheetStyleModeSelect')?.value || 'full';
    const copiesCount = parseInt(document.getElementById('sheetPrintLayoutSelect')?.value, 10) || 1;
    const paperSize = document.getElementById('sheetPaperSizeSelect')?.value || 'letter';
    const orientChoice = document.getElementById('sheetOrientationSelect')?.value || 'auto';

    const isMinimal = styleMode === 'minimal' || copiesCount >= 4;
    const finalOrientation = resolveBestOrientation(copiesCount, ex.questionCount, orientChoice);

    // Resolución 300 DPI real sin deformación (Carta: 216x279mm, Oficio: 216x330mm)
    const basePortraitW = 2160;
    const basePortraitH = paperSize === 'legal' ? 3300 : 2790;

    const pageW = finalOrientation === 'landscape' ? basePortraitH : basePortraitW;
    const pageH = finalOrientation === 'landscape' ? basePortraitW : basePortraitH;

    let cols = 1, rows = 1;
    if (copiesCount === 2) {
        if (finalOrientation === 'landscape') { cols = 2; rows = 1; }
        else { cols = 1; rows = 2; }
    } else if (copiesCount === 4) {
        cols = 2; rows = 2;
    } else if (copiesCount === 6) {
        if (finalOrientation === 'landscape') { cols = 3; rows = 2; }
        else { cols = 2; rows = 3; }
    }

    const masterCanvas = document.createElement('canvas');
    masterCanvas.width = pageW;
    masterCanvas.height = pageH;
    const mCtx = masterCanvas.getContext('2d');

    mCtx.fillStyle = '#ffffff';
    mCtx.fillRect(0, 0, pageW, pageH);

    const pad = 42;
    const gap = 32;
    const cellW = Math.floor((pageW - pad * 2 - (cols - 1) * gap) / cols);
    const cellH = Math.floor((pageH - pad * 2 - (rows - 1) * gap) / rows);

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const dx = pad + c * (cellW + gap);
            const dy = pad + r * (cellH + gap);
            drawOMRSheetRegion(mCtx, ex, dx, dy, cellW, cellH, showKey ? ex.answers : null, isMinimal);
        }
    }

    return { masterCanvas, copiesCount, paperSize, finalOrientation };
}

function downloadSheetAsPNG() {
    const ex = appState.activeExam;
    if (!ex) return;

    const { masterCanvas, copiesCount, paperSize } = buildHighResSheetPageCanvas();
    const cleanFileName = getCleanExamFileName(ex);

    const a = document.createElement('a');
    a.href = masterCanvas.toDataURL('image/png');
    a.download = `${cleanFileName} (${copiesCount}x ${paperSize === 'legal' ? 'Oficio' : 'Carta'}).png`;
    a.click();
}

/**
 * Carga jsPDF bajo demanda (0 impacto en Lighthouse inicial) y abre una ventana
 * de Previsualización PDF con el nombre real del Examen + Grado para Descargar o Imprimir.
 */
async function ensureJsPdfLoaded() {
    if (window.jspdf && window.jspdf.jsPDF) return window.jspdf.jsPDF;
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
        script.onload = () => resolve(window.jspdf.jsPDF);
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

async function printAnswerSheet() {
    switchView('sheet');
    renderPrintableSheets();

    const ex = appState.activeExam;
    if (!ex) return;

    const cleanTitle = getCleanExamFileName(ex);
    const { masterCanvas, copiesCount, paperSize, finalOrientation } = buildHighResSheetPageCanvas();
    const imgDataUrl = masterCanvas.toDataURL('image/jpeg', 0.95);

    try {
        const jsPDF = await ensureJsPdfLoaded();
        // Tamaño exacto en milímetros: Carta (215.9 x 279.4) u Oficio (215.9 x 330.2)
        const formatDims = paperSize === 'legal' ? [215.9, 330.2] : [215.9, 279.4];
        const pdf = new jsPDF({
            orientation: finalOrientation === 'landscape' ? 'l' : 'p',
            unit: 'mm',
            format: formatDims
        });

        const pdfW = pdf.internal.pageSize.getWidth();
        const pdfH = pdf.internal.pageSize.getHeight();
        pdf.setProperties({ title: cleanTitle });
        pdf.addImage(imgDataUrl, 'JPEG', 0, 0, pdfW, pdfH);

        const pdfBlob = pdf.output('blob');
        const blobUrl = URL.createObjectURL(pdfBlob);

        openPdfPreviewModal(cleanTitle, blobUrl, pdf, copiesCount, paperSize);
    } catch (err) {
        // Respaldo nativo cambiando también window.top.document.title si está en Suite
        const prevTitle = document.title;
        let prevTopTitle = null;
        document.title = cleanTitle;
        try {
            if (window.top && window.top.document) {
                prevTopTitle = window.top.document.title;
                window.top.document.title = cleanTitle;
            }
        } catch (_) {}
        window.print();
        setTimeout(() => {
            document.title = prevTitle;
            try {
                if (prevTopTitle && window.top && window.top.document) {
                    window.top.document.title = prevTopTitle;
                }
            } catch (_) {}
        }, 1000);
    }
}

function openPdfPreviewModal(cleanTitle, blobUrl, pdfInstance, copiesCount, paperSize) {
    const isEn = appState.lang === 'en';
    const paperLabel = paperSize === 'legal' ? (isEn ? 'Legal' : 'Oficio') : (isEn ? 'Letter' : 'Carta');
    const fileName = `${cleanTitle}.pdf`;

    const overlay = document.createElement('div');
    overlay.className = 'upar-modal-overlay no-print';
    overlay.innerHTML = `
        <div class="upar-modal-box" style="max-width: 860px; width: 95%; padding: 1.25rem;">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.75rem; gap:0.5rem; flex-wrap:wrap;">
                <div style="text-align:left;">
                    <h3 style="margin:0;"><i class="fa-solid fa-file-pdf text-indigo"></i> ${fileName}</h3>
                    <p style="margin:0; font-size:0.75rem; color:var(--text-muted);">${copiesCount}x • ${paperLabel}</p>
                </div>
                <div style="display:flex; gap:0.5rem; flex-wrap:wrap;">
                    <button type="button" class="btn-primary-md" id="btnModalDownloadPdf">
                        <i class="fa-solid fa-download"></i> ${isEn ? 'Download PDF' : 'Descargar PDF'}
                    </button>
                    <button type="button" class="btn-emerald-md" id="btnModalPrintNative">
                        <i class="fa-solid fa-print"></i> ${isEn ? 'Print Now' : 'Imprimir Ahora'}
                    </button>
                    <button type="button" class="btn-utility" id="btnModalClosePdf">
                        <i class="fa-solid fa-xmark"></i> ${isEn ? 'Close' : 'Cerrar'}
                    </button>
                </div>
            </div>
            <iframe src="${blobUrl}" title="${fileName}" style="width:100%; height:70vh; border:1px solid var(--border); border-radius:0.75rem; background:#fff;"></iframe>
        </div>
    `;
    document.body.appendChild(overlay);

    overlay.querySelector('#btnModalDownloadPdf').onclick = () => {
        pdfInstance.save(fileName);
    };

    overlay.querySelector('#btnModalPrintNative').onclick = () => {
        const prevTitle = document.title;
        let prevTopTitle = null;
        document.title = cleanTitle;
        try {
            if (window.top && window.top.document) {
                prevTopTitle = window.top.document.title;
                window.top.document.title = cleanTitle;
            }
        } catch (_) {}
        overlay.remove();
        setTimeout(() => {
            window.print();
            setTimeout(() => {
                document.title = prevTitle;
                try {
                    if (prevTopTitle && window.top && window.top.document) {
                        window.top.document.title = prevTopTitle;
                    }
                } catch (_) {}
            }, 1000);
        }, 150);
    };

    overlay.querySelector('#btnModalClosePdf').onclick = () => {
        URL.revokeObjectURL(blobUrl);
        overlay.remove();
    };
}

/* --------------------------------------------------------------------------
   4. MOTOR ESCÁNER OMR (DETECCIÓN ÓPTICA DE BURBUJAS EN CANVAS + CÁMARA)
   -------------------------------------------------------------------------- */
function drawReferenceSheetOnScannerCanvas(withSimulatedStudent = false) {
    const canvas = document.getElementById('omrScannerCanvas');
    const ex = appState.activeExam;
    if (!canvas || !ex) return;

    let simAnswers = null;
    if (withSimulatedStudent) {
        simAnswers = {};
        const allowed = LETTERS.slice(0, ex.optionsCount);
        for (let q = 1; q <= ex.questionCount; q++) {
            if (Math.random() < 0.8) {
                simAnswers[q] = ex.answers[q];
            } else {
                simAnswers[q] = allowed[Math.floor(Math.random() * allowed.length)];
            }
        }
    }

    drawOMRSheetToCanvas(canvas, ex, simAnswers);

    const snapshot = document.createElement('canvas');
    snapshot.width = canvas.width;
    snapshot.height = canvas.height;
    snapshot.getContext('2d').drawImage(canvas, 0, 0);
    appState.scanner.lastImageSource = snapshot;

    if (withSimulatedStudent) {
        runOMRPixelAnalysis();
    }
}

function generateSimulatedStudentScan() {
    stopCameraStream();
    drawReferenceSheetOnScannerCanvas(true);
    const names = ['Caroll Cuero', 'Sofía Martínez', 'Luis Fernando Ríos', 'Daniela Gómez', 'Mateo Vargas'];
    const randomName = names[Math.floor(Math.random() * names.length)];
    document.getElementById('scannedStudentName').value = `${randomName} - ${appState.activeExam.course.split(' ')[0]}`;
    showToast(t('toastScanComplete'), 'fa-wand-magic-sparkles');
}

async function toggleCameraStream() {
    const video = document.getElementById('scannerVideo');
    const canvas = document.getElementById('omrScannerCanvas');
    const guide = document.getElementById('cameraGuideOverlay');
    const btnCam = document.getElementById('uiBtnCameraToggle');
    const btnCap = document.getElementById('btnCaptureFrame');

    if (appState.scanner.stream) {
        stopCameraStream();
        return;
    }

    try {
        const stream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: 'environment', width: { ideal: 1280 }, height: { ideal: 1600 } }
        });
        appState.scanner.stream = stream;
        video.srcObject = stream;
        video.classList.remove('hidden');
        canvas.classList.add('hidden'); // <-- Oculta la imagen previa mientras apuntas con la cámara
        guide.classList.remove('hidden');
        btnCap.classList.remove('hidden');
        btnCam.textContent = t('btnCameraOff');
    } catch (err) {
        showToast('No se pudo acceder a la cámara. Puedes usar "Subir Foto de Hoja".', 'fa-triangle-exclamation');
    }
}

function stopCameraStream() {
    if (appState.scanner.stream) {
        appState.scanner.stream.getTracks().forEach(tr => tr.stop());
        appState.scanner.stream = null;
    }
    document.getElementById('scannerVideo')?.classList.add('hidden');
    document.getElementById('omrScannerCanvas')?.classList.remove('hidden'); // <-- Vuelve a mostrar el lienzo con el resultado
    document.getElementById('cameraGuideOverlay')?.classList.add('hidden');
    document.getElementById('btnCaptureFrame')?.classList.add('hidden');
    const btnCam = document.getElementById('uiBtnCameraToggle');
    if (btnCam) btnCam.textContent = t('btnCameraOn');
}

function captureFromVideoAndScan() {
    const video = document.getElementById('scannerVideo');
    const canvas = document.getElementById('omrScannerCanvas');
    if (!video || !canvas) return;

    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    const snapshot = document.createElement('canvas');
    snapshot.width = canvas.width;
    snapshot.height = canvas.height;
    snapshot.getContext('2d').drawImage(canvas, 0, 0);
    appState.scanner.lastImageSource = snapshot;

    stopCameraStream();
    runOMRPixelAnalysis();
    showToast(t('toastScanComplete'), 'fa-camera');
}

function handleSheetImageUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    stopCameraStream();
    const img = new Image();
    img.onload = () => {
        const canvas = document.getElementById('omrScannerCanvas');
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        const snapshot = document.createElement('canvas');
        snapshot.width = canvas.width;
        snapshot.height = canvas.height;
        snapshot.getContext('2d').drawImage(canvas, 0, 0);
        appState.scanner.lastImageSource = snapshot;

        runOMRPixelAnalysis();
        showToast(t('toastScanComplete'), 'fa-file-image');
        event.target.value = '';
    };
    img.src = URL.createObjectURL(file);
}

function updateSensitivityLabel(val) {
    appState.scanner.threshold = parseInt(val, 10) || 38;
    document.getElementById('sensitivityValueLabel').textContent = `${appState.scanner.threshold}%`;
}

function rescanCurrentCanvasImage() {
    if (!appState.scanner.lastImageSource) return;
    runOMRPixelAnalysis();
}

function runOMRPixelAnalysis() {
    const canvas = document.getElementById('omrScannerCanvas');
    const ctx = canvas.getContext('2d');
    const ex = appState.activeExam;
    if (!canvas || !ex || !appState.scanner.lastImageSource) return;

    ctx.drawImage(appState.scanner.lastImageSource, 0, 0);
    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const pixels = imgData.data;

    const geom = getOMRBubbleGeometry(ex, canvas.width, canvas.height);
    const activeLetters = LETTERS.slice(0, ex.optionsCount);
    const darknessThreshold = appState.scanner.threshold / 100;

    const detected = {};

    for (let q = 1; q <= ex.questionCount; q++) {
        const darknessByLetter = {};

        activeLetters.forEach(letter => {
            const { x, y, r } = geom.coords[q][letter];
            let darkPixels = 0;
            let totalSampled = 0;
            const sampleR = r - 2;

            for (let dy = -sampleR; dy <= sampleR; dy++) {
                for (let dx = -sampleR; dx <= sampleR; dx++) {
                    if (dx * dx + dy * dy <= sampleR * sampleR) {
                        const px = Math.round(x + dx);
                        const py = Math.round(y + dy);
                        const idx = (py * canvas.width + px) * 4;
                        const R = pixels[idx];
                        const G = pixels[idx + 1];
                        const B = pixels[idx + 2];
                        const luma = (0.299 * R + 0.587 * G + 0.114 * B) / 255;
                        totalSampled++;
                        if (luma < 0.55) darkPixels++;
                    }
                }
            }
            darknessByLetter[letter] = totalSampled > 0 ? (darkPixels / totalSampled) : 0;
        });

        const markedLetters = activeLetters.filter(l => darknessByLetter[l] >= darknessThreshold);

        if (markedLetters.length === 0) {
            detected[q] = 'BLANK';
        } else if (markedLetters.length === 1) {
            detected[q] = markedLetters[0];
        } else {
            markedLetters.sort((a, b) => darknessByLetter[b] - darknessByLetter[a]);
            if (darknessByLetter[markedLetters[0]] - darknessByLetter[markedLetters[1]] > 0.22) {
                detected[q] = markedLetters[0];
            } else {
                detected[q] = 'DOUBLE';
            }
        }
    }

    appState.scanner.detectedAnswers = detected;
    drawOMRAuditOverlayAndScore();
}

function drawOMRAuditOverlayAndScore() {
    const canvas = document.getElementById('omrScannerCanvas');
    const ctx = canvas.getContext('2d');
    const ex = appState.activeExam;
    if (!canvas || !ex) return;

    if (appState.scanner.lastImageSource) {
        ctx.drawImage(appState.scanner.lastImageSource, 0, 0);
    }

    const geom = getOMRBubbleGeometry(ex, canvas.width, canvas.height);
    const detected = appState.scanner.detectedAnswers;

    let hits = 0;
    let wrongs = 0;
    let blanks = 0;

    for (let q = 1; q <= ex.questionCount; q++) {
        const studentAns = detected[q] || 'BLANK';
        const correctAns = ex.answers[q];

        if (studentAns === 'BLANK' || studentAns === 'DOUBLE') {
            blanks++;
            const cb = geom.coords[q][correctAns];
            if (cb) {
                ctx.beginPath();
                ctx.arc(cb.x, cb.y, cb.r + 3, 0, Math.PI * 2);
                ctx.strokeStyle = '#f59e0b';
                ctx.lineWidth = 2.5;
                ctx.stroke();
            }
        } else if (studentAns === correctAns) {
            hits++;
            const b = geom.coords[q][studentAns];
            if (b) {
                ctx.beginPath();
                ctx.arc(b.x, b.y, b.r + 3, 0, Math.PI * 2);
                ctx.strokeStyle = '#10b981';
                ctx.lineWidth = 3.5;
                ctx.stroke();
            }
        } else {
            wrongs++;
            const bWrong = geom.coords[q][studentAns];
            if (bWrong) {
                ctx.beginPath();
                ctx.arc(bWrong.x, bWrong.y, bWrong.r + 3, 0, Math.PI * 2);
                ctx.strokeStyle = '#e11d48';
                ctx.lineWidth = 3.5;
                ctx.stroke();
            }
            const bRight = geom.coords[q][correctAns];
            if (bRight) {
                ctx.beginPath();
                ctx.arc(bRight.x, bRight.y, bRight.r + 3, 0, Math.PI * 2);
                ctx.strokeStyle = '#3b82f6';
                ctx.lineWidth = 2.5;
                ctx.stroke();
            }
        }
    }

    const pct = ex.questionCount > 0 ? (hits / ex.questionCount) : 0;
    const rawGrade = ex.minGrade + pct * (ex.maxGrade - ex.minGrade);
    const finalGrade = Math.min(ex.maxGrade, Math.max(ex.minGrade, rawGrade));

    document.getElementById('scannedFinalGrade').textContent = finalGrade.toFixed(2);
    document.getElementById('scannedMaxGradeLabel').textContent = `/ ${ex.maxGrade.toFixed(1)}`;
    document.getElementById('scannedCorrectCount').textContent = hits;
    document.getElementById('scannedWrongCount').textContent = wrongs;
    document.getElementById('scannedBlankCount').textContent = blanks;
    document.getElementById('scannedPercentText').textContent = `${Math.round(pct * 100)}%`;

    renderScannedAuditList();
}

function renderScannedAuditList() {
    const ex = appState.activeExam;
    const listEl = document.getElementById('scannedAuditList');
    if (!listEl || !ex) return;

    const activeLetters = LETTERS.slice(0, ex.optionsCount);
    let html = '';

    for (let q = 1; q <= ex.questionCount; q++) {
        const studentAns = appState.scanner.detectedAnswers[q] || 'BLANK';
        const correctAns = ex.answers[q];
        const statusCls = studentAns === correctAns
            ? 'is-correct'
            : ((studentAns === 'BLANK' || studentAns === 'DOUBLE') ? 'is-blank' : 'is-wrong');

        const miniBubbles = activeLetters.map(l => {
            const isMarked = studentAns === l ? 'selected' : '';
            return `<button type="button" class="bubble-btn ${isMarked}" style="width:22px;height:22px;font-size:0.65rem;" onclick="overrideScannedQuestion(${q}, '${l}')">${l}</button>`;
        }).join('');

        html += `
            <div class="audit-item ${statusCls}">
                <span class="font-mono"><strong>${String(q).padStart(2, '0')}</strong> (${t('auditKeyLabel')}: ${correctAns})</span>
                <div class="key-bubbles-group">${miniBubbles}</div>
            </div>
        `;
    }
    listEl.innerHTML = html;
}

function overrideScannedQuestion(qNum, newLetter) {
    const current = appState.scanner.detectedAnswers[qNum];
    appState.scanner.detectedAnswers[qNum] = current === newLetter ? 'BLANK' : newLetter;
    drawOMRAuditOverlayAndScore();
}

function saveScannedResultToGradebook() {
    let studentName = document.getElementById('scannedStudentName').value.trim();
    if (!studentName) {
        showToast(t('toastStudentRequired'), 'fa-user-pen');
        document.getElementById('scannedStudentName').focus();
        return;
    }

    const ex = appState.activeExam;
    // Si el nombre escrito no incluye ya el grado/curso, anexarlo automáticamente
    if (ex.course && !studentName.toLowerCase().includes(ex.course.toLowerCase())) {
        studentName = `${studentName} - ${ex.course}`;
    }

    const studentCode = document.getElementById('scannedStudentId').value.trim() || '---';
    const detected = appState.scanner.detectedAnswers;

    let hits = 0;
    for (let q = 1; q <= ex.questionCount; q++) {
        if (detected[q] === ex.answers[q]) hits++;
    }

    const pct = ex.questionCount > 0 ? (hits / ex.questionCount) : 0;
    const finalGrade = ex.minGrade + pct * (ex.maxGrade - ex.minGrade);

    appState.results.unshift({
        id: 'res_' + Date.now(),
        studentName,
        studentCode,
        examId: ex.id,
        examTitle: ex.title,
        course: ex.course,
        hits,
        totalQuestions: ex.questionCount,
        percentage: Math.round(pct * 100),
        grade: Number(finalGrade.toFixed(2)),
        maxGrade: ex.maxGrade,
        date: new Date().toLocaleString()
    });

    saveResultsToStorage();
    document.getElementById('scannedStudentName').value = '';
    document.getElementById('scannedStudentId').value = '';
    showToast(`${t('toastGradeSaved')}: ${studentName} (${finalGrade.toFixed(2)})`);
}

/* --------------------------------------------------------------------------
   5. PLANILLA DE CALIFICACIONES, EXPORTACIÓN CSV E IMPORTACIÓN JSON CON ELECCIÓN
   -------------------------------------------------------------------------- */
   //FUNCION NUEVA getResultExamDisplayLabel, renderGradebookTable y clearGradebookForCurrentExam se modificaron para usar la nueva funcion//
function getResultExamDisplayLabel(r) {
    if (!r) return '';
    const title = r.examTitle || '';
    const course = r.course || '';
    if (course && !title.toLowerCase().includes(course.toLowerCase())) {
        return `${title} (${course})`;
    }
    return title;
}

function renderGradebookTable() {
    const filterSel = document.getElementById('resultsExamFilter');
    const searchVal = (document.getElementById('resultsStudentSearch')?.value || '').trim().toLowerCase();
    if (!filterSel) return;

    const currentFilter = filterSel.value || 'all';
    const uniqueExamLabels = [...new Set(appState.results.map(r => getResultExamDisplayLabel(r)))];
    filterSel.innerHTML = `<option value="all">${t('filterAllExams')} (${appState.results.length})</option>` +
        uniqueExamLabels.map(label => `<option value="${label}" ${label === currentFilter ? 'selected' : ''}>${label}</option>`).join('');

    const filtered = appState.results
        .filter(r => currentFilter === 'all' || getResultExamDisplayLabel(r) === currentFilter)
        .filter(r => !searchVal || r.studentName.toLowerCase().includes(searchVal) || r.studentCode.toLowerCase().includes(searchVal));

    const minPassPct = Math.round(getGlobalPassingRatio() * 100);
    updatePassingLabelsUI(minPassPct);

    const totalEval = filtered.length;
    const avgGrade = totalEval > 0 ? (filtered.reduce((acc, r) => acc + r.grade, 0) / totalEval) : 0;
    const passCount = filtered.filter(r => r.percentage >= minPassPct).length;
    const passRate = totalEval > 0 ? Math.round((passCount / totalEval) * 100) : 0;
    const bestGrade = totalEval > 0 ? Math.max(...filtered.map(r => r.grade)) : 0;

    document.getElementById('kpiTotalEvaluated').textContent = totalEval;
    document.getElementById('kpiAverageGrade').textContent = avgGrade.toFixed(2);
    document.getElementById('kpiPassRate').textContent = `${passRate}%`;
    document.getElementById('kpiHighestGrade').textContent = bestGrade.toFixed(2);

    const tbody = document.getElementById('gradebookTableBody');
    if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="9" style="text-align:center; padding:2rem; color:var(--text-muted);">${t('emptyGradebook')}</td></tr>`;
        return;
    }

    tbody.innerHTML = filtered.map((r, idx) => {
        const badgeColor = r.percentage >= minPassPct ? 'text-emerald' : 'text-amber';
        const fullExamLabel = getResultExamDisplayLabel(r);
        return `
            <tr>
                <td class="font-mono">${idx + 1}</td>
                <td><strong>${r.studentName}</strong></td>
                <td class="font-mono">${r.studentCode}</td>
                <td><span class="badge-soft">${fullExamLabel}</span></td>
                <td class="font-mono">${r.hits} / ${r.totalQuestions}</td>
                <td class="font-mono">${r.percentage}%</td>
                <td class="font-mono ${badgeColor}"><strong>${r.grade.toFixed(2)}</strong> <span style="font-size:0.7rem;color:var(--text-muted);">/ ${r.maxGrade}</span></td>
                <td style="font-size:0.74rem; color:var(--text-muted);">${r.date}</td>
                <td>
                    <button class="btn-mini-danger" onclick="deleteSingleResult('${r.id}')"><i class="fa-regular fa-trash-can"></i></button>
                </td>
            </tr>
        `;
    }).join('');
}

function clearGradebookForCurrentExam() {
    if (appState.results.length === 0) return;

    const filterSel = document.getElementById('resultsExamFilter');
    const selectedExamLabel = filterSel ? filterSel.value : 'all';
    const isAllSelected = !selectedExamLabel || selectedExamLabel === 'all';

    const targetRecords = isAllSelected
        ? appState.results
        : appState.results.filter(r => getResultExamDisplayLabel(r) === selectedExamLabel);

    if (targetRecords.length === 0) return;

    const titleText = isAllSelected
        ? t('modalClearAllTitle')
        : t('modalClearExamTitle');

    const descHtml = isAllSelected
        ? t('modalClearAllDesc')(targetRecords.length)
        : t('modalClearExamDesc')(selectedExamLabel, targetRecords.length);

    const overlay = document.createElement('div');
    overlay.className = 'upar-modal-overlay';
    overlay.innerHTML = `
        <div class="upar-modal-box">
            <h3><i class="fa-solid fa-triangle-exclamation text-amber"></i> ${titleText}</h3>
            <p>${descHtml}</p>
            <div class="upar-modal-actions">
                <button type="button" class="btn-utility" id="btnCancelClearGrades">
                    ${t('btnImportCancel')}
                </button>
                <button type="button" class="btn-danger-sm" id="btnAcceptClearGrades">
                    <i class="fa-regular fa-trash-can"></i> ${t('btnConfirmClearGrades')}
                </button>
            </div>
        </div>
    `;
    document.body.appendChild(overlay);

    overlay.querySelector('#btnCancelClearGrades').onclick = () => {
        overlay.remove();
    };

    overlay.querySelector('#btnAcceptClearGrades').onclick = () => {
        overlay.remove();
        if (isAllSelected) {
            appState.results = [];
            showToast(t('toastClearedAllGrades'), 'fa-trash-can');
        } else {
            appState.results = appState.results.filter(r => getResultExamDisplayLabel(r) !== selectedExamLabel);
            showToast(t('toastClearedExamGrades')(selectedExamLabel), 'fa-trash-can');
        }
        saveResultsToStorage();
        renderGradebookTable();
    };
}

function deleteSingleResult(resId) {
    const record = appState.results.find(r => r.id === resId);
    if (!record) return;

    const isEn = appState.lang === 'en';
    const titleText = isEn ? 'Delete student grade record?' : '¿Eliminar calificación del estudiante?';
    const safeStudent = String(record.studentName || '').replace(/</g, '<').replace(/>/g, '>');
    const safeExam = String(record.examTitle || '').replace(/</g, '<').replace(/>/g, '>');
    const gradeStr = `${Number(record.grade || 0).toFixed(2)} / ${record.maxGrade}`;

    const descHtml = isEn
        ? `You are about to remove the grade record for <strong>${safeStudent}</strong> in <strong>${safeExam}</strong> (<strong>${gradeStr}</strong>).`
        : `Se eliminará el registro de <strong>${safeStudent}</strong> en <strong>${safeExam}</strong> (nota: <strong>${gradeStr}</strong>).`;

    const confirmBtnText = isEn ? 'Yes, delete record' : 'Sí, eliminar registro';
    const toastMsg = isEn
        ? `Grade record deleted for ${safeStudent}`
        : `Calificación eliminada para ${safeStudent}`;

    const overlay = document.createElement('div');
    overlay.className = 'upar-modal-overlay';
    overlay.innerHTML = `
        <div class="upar-modal-box">
            <h3><i class="fa-solid fa-triangle-exclamation text-amber"></i> ${titleText}</h3>
            <p>${descHtml}</p>
            <div class="upar-modal-actions">
                <button type="button" class="btn-utility" id="btnCancelDeleteSingleResult">
                    ${t('btnImportCancel')}
                </button>
                <button type="button" class="btn-danger-sm" id="btnConfirmDeleteSingleResult">
                    <i class="fa-regular fa-trash-can"></i> ${confirmBtnText}
                </button>
            </div>
        </div>
    `;
    document.body.appendChild(overlay);

    overlay.querySelector('#btnCancelDeleteSingleResult').onclick = () => {
        overlay.remove();
    };

    overlay.querySelector('#btnConfirmDeleteSingleResult').onclick = () => {
        overlay.remove();
        appState.results = appState.results.filter(r => r.id !== resId);
        saveResultsToStorage();
        renderGradebookTable();
        showToast(toastMsg, 'fa-trash-can');
    };
}

function exportGradebookCSV() {
    if (appState.results.length === 0) {
        showToast('No hay calificaciones registradas para exportar', 'fa-circle-exclamation');
        return;
    }

    const rawSep = document.getElementById('csvDelimiterSelect')?.value || ';';
    const delimiter = rawSep === 'tab' ? '\t' : rawSep;

    const headers = ['Estudiante', 'Codigo', 'Examen', 'Curso', 'Aciertos', 'Total_Preguntas', 'Porcentaje', 'Nota_Final', 'Nota_Maxima', 'Fecha'];
    const rows = appState.results.map(r => [
        `"${r.studentName.replace(/"/g, '""')}"`,
        `"${r.studentCode.replace(/"/g, '""')}"`,
        `"${r.examTitle.replace(/"/g, '""')}"`,
        `"${r.course.replace(/"/g, '""')}"`,
        r.hits,
        r.totalQuestions,
        `${r.percentage}%`,
        r.grade.toFixed(2),
        r.maxGrade,
        `"${r.date}"`
    ].join(delimiter));

    const csvContent = '\uFEFF' + [headers.join(delimiter), ...rows].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `calificaciones-upargrade-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
}

function exportAllDataJSON() {
    const bundle = {
        app: 'UparGrade Studio',
        exportedAt: new Date().toISOString(),
        exams: appState.exams,
        results: appState.results
    };
    const blob = new Blob([JSON.stringify(bundle, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `respaldo-upargrade.json`;
    a.click();
}

/**
 * Muestra un diálogo para preguntar si desea SUMAR los exámenes importados
 * a los existentes o SOBRESCRIBIR todo
 */
function promptImportModeModal(onChoice) {
    const overlay = document.createElement('div');
    overlay.className = 'upar-modal-overlay';
    overlay.innerHTML = `
        <div class="upar-modal-box">
            <h3><i class="fa-solid fa-file-import text-indigo"></i> ${t('modalImportTitle')}</h3>
            <p>${t('modalImportDesc')}</p>
            <div class="upar-modal-actions">
                <button type="button" class="btn-primary-md" id="btnModalMerge">
                    <i class="fa-solid fa-layer-group"></i> ${t('btnImportMerge')}
                </button>
                <button type="button" class="btn-danger-sm" id="btnModalOverwrite">
                    <i class="fa-solid fa-rotate"></i> ${t('btnImportOverwrite')}
                </button>
                <button type="button" class="btn-utility" id="btnModalCancelImport">
                    ${t('btnImportCancel')}
                </button>
            </div>
        </div>
    `;
    document.body.appendChild(overlay);

    overlay.querySelector('#btnModalMerge').onclick = () => {
        overlay.remove();
        onChoice('merge');
    };
    overlay.querySelector('#btnModalOverwrite').onclick = () => {
        overlay.remove();
        onChoice('overwrite');
    };
    overlay.querySelector('#btnModalCancelImport').onclick = () => {
        overlay.remove();
    };
}

function applyImportedData(data, mode) {
    const incomingExams = Array.isArray(data.exams)
        ? data.exams
        : (Array.isArray(data) ? data : (data.id && data.answers ? [data] : []));
    const incomingResults = Array.isArray(data.results) ? data.results : [];

    if (mode === 'overwrite') {
        if (incomingExams.length > 0) appState.exams = incomingExams;
        appState.results = incomingResults;
        if (appState.exams.length > 0) {
            appState.activeExam = JSON.parse(JSON.stringify(appState.exams[0]));
        }
        showToast(t('toastImportOverwritten'));
    } else {
        // Modo SUMAR (Merge): conserva los actuales y agrega/actualiza los del JSON sin borrar nada
        incomingExams.forEach(incEx => {
            if (!incEx || !incEx.title) return;
            const existsIdx = appState.exams.findIndex(
                e => e.id === incEx.id || e.title.toLowerCase() === incEx.title.toLowerCase()
            );
            if (existsIdx >= 0) {
                // Si tiene el mismo nombre pero distinto ID o contenido, lo agregamos como copia o actualizamos
                if (appState.exams[existsIdx].id === incEx.id) {
                    appState.exams[existsIdx] = incEx;
                } else {
                    appState.exams.unshift({ ...incEx, id: 'exam_' + Date.now() + '_' + Math.floor(Math.random() * 1000) });
                }
            } else {
                appState.exams.unshift(incEx);
            }
        });

        incomingResults.forEach(incRes => {
            if (!incRes) return;
            const already = appState.results.some(r => r.id === incRes.id);
            if (!already) {
                appState.results.push(incRes);
            }
        });

        if (incomingExams.length > 0) {
            appState.activeExam = JSON.parse(JSON.stringify(incomingExams[0]));
        }
        showToast(t('toastImportMerged'));
    }

    saveExamsToStorage();
    saveResultsToStorage();
    populateExamFormInputs();
    renderAnswerKeyGrid();
    renderSavedExamsList();
    renderPrintableSheets();
    renderGradebookTable();
}

function handleImportJSON(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const data = JSON.parse(e.target.result);
            if (appState.exams.length > 0 || appState.results.length > 0) {
                promptImportModeModal((chosenMode) => {
                    applyImportedData(data, chosenMode);
                });
            } else {
                applyImportedData(data, 'overwrite');
            }
        } catch (err) {
            showToast('Archivo JSON inválido', 'fa-circle-exclamation');
        }
        event.target.value = '';
    };
    reader.readAsText(file);
}


/* --------------------------------------------------------------------------
   5.1 CENTRO DE SINCRONIZACIÓN QR BIDIRECCIONAL (PC ↔ CELULAR)
   -------------------------------------------------------------------------- */
let qrActiveStream = null;
let qrActiveLoopId = null;
let qrActivePeer = null;

function loadScriptOnce(url, globalName) {
    if (window[globalName]) return Promise.resolve(window[globalName]);
    return new Promise((resolve, reject) => {
        const s = document.createElement('script');
        s.src = url;
        s.onload = () => resolve(window[globalName]);
        s.onerror = reject;
        document.head.appendChild(s);
    });
}

function ensureQrLibs(needPeer = false) {
    const promises = [
        loadScriptOnce('https://cdnjs.cloudflare.com/ajax/libs/qrcode-generator/1.4.4/qrcode.min.js', 'qrcode'),
        loadScriptOnce('https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.min.js', 'jsQR')
    ];
    if (needPeer) {
        promises.push(loadScriptOnce('https://unpkg.com/peerjs@1.5.4/dist/peerjs.min.js', 'Peer'));
    }
    return Promise.all(promises);
}

function cleanupQrSyncResources() {
    if (qrActiveLoopId) {
        cancelAnimationFrame(qrActiveLoopId);
        qrActiveLoopId = null;
    }
    if (qrActiveStream) {
        qrActiveStream.getTracks().forEach(tr => tr.stop());
        qrActiveStream = null;
    }
    if (qrActivePeer) {
        try { qrActivePeer.destroy(); } catch (_) {}
        qrActivePeer = null;
    }
}

function drawQrTextToElement(containerEl, textData) {
    const qr = window.qrcode(0, 'M');
    qr.addData(textData);
    qr.make();

    const moduleCount = qr.getModuleCount();
    const cellSize = Math.max(4, Math.min(7, Math.floor(230 / moduleCount)));
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

function getCurrentBundleForSync() {
    syncCurrentExamMeta();
    return {
        app: 'UparGrade Studio',
        exportedAt: new Date().toISOString(),
        exams: appState.exams,
        results: appState.results
    };
}

/**
 * Abre el Centro QR con 2 pestañas claras:
 * 1) Mostrar QR en esta pantalla (para Enviar datos o para Recibir datos desde el celular)
 * 2) Usar Cámara de este dispositivo para escanear el QR de la otra pantalla
 */
async function openQrSyncHubModal() {
    cleanupQrSyncResources();
    const isEn = appState.lang === 'en';

    const overlay = document.createElement('div');
    overlay.className = 'upar-modal-overlay no-print';
    overlay.innerHTML = `
        <div class="upar-modal-box" style="max-width: 500px; width: 95%;">
            <h3><i class="fa-solid fa-qrcode text-indigo"></i> ${isEn ? 'QR Sync (PC ↔ Phone)' : 'Sincronizar con QR (PC ↔ Celular)'}</h3>
            <p style="margin-bottom:0.8rem; font-size:0.78rem;">
                ${isEn
                    ? 'Transfer all your exams and grades between PC and Phone without cables using your phone camera.'
                    : 'Pasa todos tus exámenes y calificaciones de PC a Celular o de Celular a PC usando siempre la cámara de tu teléfono.'}
            </p>

            <!-- Selector de rol -->
            <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:0.4rem; margin-bottom:0.9rem;">
                <button type="button" class="btn-utility" id="tabQrSendFromHere" style="justify-content:center; font-size:0.73rem; padding:0.45rem;">
                    <i class="fa-solid fa-upload text-indigo"></i> ${isEn ? '1. Send from here (QR)' : '1. Enviar de aquí (QR)'}
                </button>
                <button type="button" class="btn-utility" id="tabQrReceiveHere" style="justify-content:center; font-size:0.73rem; padding:0.45rem;">
                    <i class="fa-solid fa-download text-emerald"></i> ${isEn ? '2. Receive here (QR)' : '2. Recibir aquí (QR)'}
                </button>
                <button type="button" class="btn-utility" id="tabQrCameraScan" style="justify-content:center; font-size:0.73rem; padding:0.45rem;">
                    <i class="fa-solid fa-camera text-amber"></i> ${isEn ? '3. Scan with Camera' : '3. Escanear con Cámara'}
                </button>
            </div>

            <div id="qrHubBody" style="min-height:280px; display:flex; flex-direction:column; align-items:center; justify-content:center;">
                <span class="text-muted-xs">${isEn ? 'Initializing QR channel...' : 'Iniciando canal QR...'}</span>
            </div>

            <div class="upar-modal-actions" style="margin-top:0.9rem;">
                <button type="button" class="btn-utility" id="btnCloseQrHub">
                    ${t('btnImportCancel')}
                </button>
            </div>
        </div>
    `;
    document.body.appendChild(overlay);

    const bodyEl = overlay.querySelector('#qrHubBody');
    const btnTabSend = overlay.querySelector('#tabQrSendFromHere');
    const btnTabReceive = overlay.querySelector('#tabQrReceiveHere');
    const btnTabScan = overlay.querySelector('#tabQrCameraScan');

    function setActiveTabButton(activeBtn) {
        [btnTabSend, btnTabReceive, btnTabScan].forEach(b => {
            b.style.borderColor = b === activeBtn ? 'var(--accent-light)' : 'var(--border)';
            b.style.background = b === activeBtn ? 'var(--accent-soft)' : 'var(--card)';
        });
    }

    // MODO 1: Mostrar QR en esta pantalla para ENVIAR datos al otro dispositivo (Ej. de PC a Celular)
    async function startSendQrMode() {
        cleanupQrSyncResources();
        setActiveTabButton(btnTabSend);
        bodyEl.innerHTML = `<span class="text-muted-xs">${isEn ? 'Creating transfer QR...' : 'Generando QR de envío...'}</span>`;

        try {
            await ensureQrLibs(true);
            const roomId = 'upar_' + Math.random().toString(36).substring(2, 10) + '_' + Date.now().toString(36);
            qrActivePeer = new window.Peer(roomId);

            qrActivePeer.on('open', (id) => {
                const syncPayload = JSON.stringify({ mode: 'UPAR_P2P_SEND', peerId: id });
                bodyEl.innerHTML = `
                    <div id="qrBoxRender" style="background:#fff; padding:12px; border-radius:0.9rem; border:2px solid var(--border); margin-bottom:0.55rem;"></div>
                    <p style="font-size:0.76rem; font-weight:700; color:var(--accent-light); margin-bottom:0.2rem;">
                        <i class="fa-solid fa-mobile-screen-button"></i>
                        ${isEn ? 'On your Phone, tap "3. Scan with Camera" and point here' : 'En tu Celular pulsa "3. Escanear con Cámara" y apunta a este QR'}
                    </p>
                    <span id="qrStatusText" class="text-muted-xs">${isEn ? 'Waiting for phone to scan...' : 'Esperando que el celular escanee el código...'}</span>
                `;
                drawQrTextToElement(bodyEl.querySelector('#qrBoxRender'), syncPayload);
            });

            qrActivePeer.on('connection', (conn) => {
                const statusEl = bodyEl.querySelector('#qrStatusText');
                if (statusEl) statusEl.textContent = isEn ? 'Connected! Sending exams...' : '¡Celular conectado! Enviando datos...';
                conn.on('open', () => {
                    conn.send({ type: 'UPAR_DATA_BUNDLE', payload: getCurrentBundleForSync() });
                    setTimeout(() => {
                        showToast(isEn ? 'Data sent to phone successfully!' : '¡Datos enviados al otro dispositivo correctamente!');
                        cleanupQrSyncResources();
                        overlay.remove();
                    }, 600);
                });
            });
        } catch (err) {
            bodyEl.innerHTML = `<p class="text-amber">${isEn ? 'Connection error. Check internet access.' : 'No se pudo iniciar el canal QR. Verifica tu conexión.'}</p>`;
        }
    }

    // MODO 2: Mostrar QR en esta pantalla para RECIBIR datos desde el celular (Ej. de Celular a PC)
    async function startReceiveQrMode() {
        cleanupQrSyncResources();
        setActiveTabButton(btnTabReceive);
        bodyEl.innerHTML = `<span class="text-muted-xs">${isEn ? 'Creating receiver QR...' : 'Generando QR para recibir desde el celular...'}</span>`;

        try {
            await ensureQrLibs(true);
            const roomId = 'upar_' + Math.random().toString(36).substring(2, 10) + '_' + Date.now().toString(36);
            qrActivePeer = new window.Peer(roomId);

            qrActivePeer.on('open', (id) => {
                const syncPayload = JSON.stringify({ mode: 'UPAR_P2P_RECEIVE', peerId: id });
                bodyEl.innerHTML = `
                    <div id="qrBoxRender" style="background:#fff; padding:12px; border-radius:0.9rem; border:2px solid var(--border); margin-bottom:0.55rem;"></div>
                    <p style="font-size:0.76rem; font-weight:700; color:var(--emerald); margin-bottom:0.2rem;">
                        <i class="fa-solid fa-laptop"></i>
                        ${isEn ? 'Scan this QR with your Phone ("3. Scan with Camera") to receive its data here' : 'En tu Celular abre "3. Escanear con Cámara" y apunta aquí para recibir los datos en este PC'}
                    </p>
                    <span id="qrStatusText" class="text-muted-xs">${isEn ? 'Waiting to receive data from phone...' : 'Esperando recibir los datos desde tu celular...'}</span>
                `;
                drawQrTextToElement(bodyEl.querySelector('#qrBoxRender'), syncPayload);
            });

            qrActivePeer.on('connection', (conn) => {
                conn.on('data', (msg) => {
                    if (msg && msg.type === 'UPAR_DATA_BUNDLE' && msg.payload) {
                        conn.send({ type: 'UPAR_ACK' });
                        cleanupQrSyncResources();
                        overlay.remove();
                        promptImportModeModal((chosenMode) => {
                            applyImportedData(msg.payload, chosenMode);
                        });
                    }
                });
            });
        } catch (err) {
            bodyEl.innerHTML = `<p class="text-amber">${isEn ? 'Connection error.' : 'Error al crear el buzón receptor.'}</p>`;
        }
    }

    // MODO 3: Abrir cámara en el celular para escanear el QR del PC (envía o recibe automáticamente según el QR)
    async function startCameraScanMode() {
        cleanupQrSyncResources();
        setActiveTabButton(btnTabScan);

        bodyEl.innerHTML = `
            <div style="position:relative; width:100%; max-width:260px; aspect-ratio:1/1; background:#0f172a; border-radius:0.85rem; overflow:hidden; border:2px solid var(--border); margin-bottom:0.5rem;">
                <video id="qrCamVideo" autoplay playsinline muted style="width:100%; height:100%; object-fit:cover;"></video>
                <canvas id="qrCamCanvas" class="hidden"></canvas>
                <div style="position:absolute; inset:22px; border:2px dashed #10b981; border-radius:0.65rem; pointer-events:none;"></div>
            </div>
            <span id="qrCamStatus" class="text-muted-xs">${isEn ? 'Point camera at the PC QR code...' : 'Apunta la cámara al código QR de la pantalla del PC...'}</span>
        `;

        const video = bodyEl.querySelector('#qrCamVideo');
        const canvas = bodyEl.querySelector('#qrCamCanvas');
        const ctx = canvas.getContext('2d', { willReadFrequently: true });
        const statusEl = bodyEl.querySelector('#qrCamStatus');

        try {
            await ensureQrLibs(true);
            qrActiveStream = await navigator.mediaDevices.getUserMedia({
                video: { facingMode: 'environment', width: { ideal: 640 }, height: { ideal: 640 } }
            });
            video.srcObject = qrActiveStream;

            const tick = () => {
                if (!qrActiveStream) return;
                if (video.readyState === video.HAVE_ENOUGH_DATA) {
                    canvas.width = video.videoWidth;
                    canvas.height = video.videoHeight;
                    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
                    const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                    const code = window.jsQR(imgData.data, imgData.width, imgData.height, { inversionAttempts: 'dontInvert' });

                    if (code && code.data) {
                        handleScannedQrInstruction(code.data, statusEl);
                        return;
                    }
                }
                qrActiveLoopId = requestAnimationFrame(tick);
            };
            qrActiveLoopId = requestAnimationFrame(tick);
        } catch (err) {
            statusEl.textContent = isEn ? 'Could not access camera.' : 'No se pudo abrir la cámara en este dispositivo.';
        }
    }

    function handleScannedQrInstruction(rawText, statusEl) {
        try {
            const parsed = JSON.parse(rawText);
            if (!parsed || !parsed.peerId) throw new Error('Not a valid sync QR');

            if (qrActiveLoopId) cancelAnimationFrame(qrActiveLoopId);
            if (qrActiveStream) {
                qrActiveStream.getTracks().forEach(tr => tr.stop());
                qrActiveStream = null;
            }

            if (statusEl) statusEl.textContent = isEn ? 'Linking with PC...' : 'Conectando con el PC...';

            qrActivePeer = new window.Peer();
            qrActivePeer.on('open', () => {
                const conn = qrActivePeer.connect(parsed.peerId, { reliable: true });

                conn.on('open', () => {
                    // Si el PC estaba en modo "Recibir aquí (2)", el celular le envía sus datos al PC
                    if (parsed.mode === 'UPAR_P2P_RECEIVE') {
                        if (statusEl) statusEl.textContent = isEn ? 'Sending data to PC...' : 'Enviando exámenes y notas al PC...';
                        conn.send({ type: 'UPAR_DATA_BUNDLE', payload: getCurrentBundleForSync() });
                    }
                });

                conn.on('data', (msg) => {
                    // Si el PC estaba en modo "Enviar de aquí (1)", el celular recibe los datos del PC
                    if (msg && msg.type === 'UPAR_DATA_BUNDLE' && msg.payload) {
                        cleanupQrSyncResources();
                        overlay.remove();
                        promptImportModeModal((chosenMode) => {
                            applyImportedData(msg.payload, chosenMode);
                        });
                    } else if (msg && msg.type === 'UPAR_ACK') {
                        showToast(isEn ? 'Data transferred to PC!' : '¡Datos enviados al PC correctamente!');
                        cleanupQrSyncResources();
                        overlay.remove();
                    }
                });
            });
        } catch (e) {
            showToast(isEn ? 'Unrecognized QR code' : 'Código QR no reconocido', 'fa-triangle-exclamation');
        }
    }

    btnTabSend.onclick = startSendQrMode;
    btnTabReceive.onclick = startReceiveQrMode;
    btnTabScan.onclick = startCameraScanMode;

    overlay.querySelector('#btnCloseQrHub').onclick = () => {
        cleanupQrSyncResources();
        overlay.remove();
    };

    // Si se abre en celular, iniciar por defecto en pestaña 3 (Escanear); si es PC, en pestaña 1 (Enviar QR)
    const isMobileDevice = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (isMobileDevice) {
        startCameraScanMode();
    } else {
        startSendQrMode();
    }
}

/* --------------------------------------------------------------------------
   6. NAVEGACIÓN SPA, TEMA CLARO/OSCURO E IDIOMA
   -------------------------------------------------------------------------- */
function switchView(viewName) {
    if (viewName !== 'scanner') {
        stopCameraStream();
    }

    document.querySelectorAll('.view-section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.nav-tab').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.view === viewName);
    });

    const map = {
        exams: 'viewExams',
        sheet: 'viewSheet',
        scanner: 'viewScanner',
        results: 'viewResults'
    };
    document.getElementById(map[viewName] || 'viewExams')?.classList.add('active');

    if (viewName === 'sheet') renderPrintableSheets();
    if (viewName === 'scanner') {
        if (!appState.scanner.lastImageSource) {
            drawReferenceSheetOnScannerCanvas(true);
        }
    }
    if (viewName === 'results') renderGradebookTable();
}

function showToast(msg, icon = 'fa-circle-check') {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    const item = document.createElement('div');
    item.className = 'toast-item';
    item.innerHTML = `<i class="fa-solid ${icon} text-indigo"></i><span>${msg}</span>`;
    container.appendChild(item);
    setTimeout(() => item.remove(), 3200);
}

function applyTheme() {
    const html = document.documentElement;
    const icon = document.getElementById('themeIcon');
    if (appState.theme === 'dark') {
        html.classList.add('dark');
        html.classList.remove('light');
        if (icon) icon.className = 'fa-solid fa-sun text-amber';
    } else {
        html.classList.remove('dark');
        html.classList.add('light');
        if (icon) icon.className = 'fa-solid fa-moon text-indigo';
    }
}

function setText(id, val) {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
}

function applyTranslations() {
    setText('langLabel', appState.lang.toUpperCase());
    setText('uiMainSubtitle', t('mainSubtitle'));
    setText('uiNavExams', t('navExams'));
    setText('uiNavSheet', t('navSheet'));
    setText('uiNavScanner', t('navScanner'));
    setText('uiNavResults', t('navResults'));
    setText('uiBtnPrintTop', t('btnPrintTop'));
    setText('uiExamConfigTitle', t('examConfigTitle'));
    setText('uiBtnNewExam', t('btnNewExam'));
    setText('uiBtnDuplicateExam', t('btnDuplicateExam'));
    setText('uiLabelExamTitle', t('labelExamTitle'));
    setText('uiBtnSaveExam', t('btnSaveExam'));
    setText('uiLabelCourse', t('labelCourse'));
    setText('uiLabelQCount', t('labelQCount'));

    // Traducir opciones de cantidad de preguntas (10 preguntas / 10 questions...)
    const qCountSel = document.getElementById('examQuestionsCount');
    if (qCountSel) {
        Array.from(qCountSel.options).forEach(opt => {
            opt.textContent = `${opt.value} ${t('questionsUnit')}`;
        });
    }

    setText('uiLabelMaxGrade', t('labelMaxGrade'));
    setText('uiLabelMinGrade', t('labelMinGrade'));
    setText('uiLabelOptionsCount', t('labelOptionsCount'));
    setText('uiMetricValPerQ', t('metricValPerQ'));
    setText('uiMetricPassing', t('metricPassing'));
    setText('uiMetricKeyStatus', t('metricKeyStatus'));
    setText('uiSavedExamsTitle', t('savedExamsTitle'));
    setText('uiBtnExportJson', t('btnExportJson'));
    setText('uiBtnImportJson', t('btnImportJson'));
    setText('uiBtnQrSync', t('btnQrSync'));
    // setText('uiBtnQrShare', t('btnQrShare'));
    // setText('uiBtnQrScan', t('btnQrScan'));
    setText('uiAnswerKeyTitle', t('answerKeyTitle'));
    setText('uiAnswerKeySub', t('answerKeySub'));

    const quickKeyInput = document.getElementById('quickKeyStringInput');
    if (quickKeyInput) quickKeyInput.placeholder = t('placeholderQuickKey');

    setText('uiBtnRandomKey', t('btnRandomKey'));
    setText('uiBtnApplyPattern', t('btnApplyPattern'));
    setText('uiSheetPreviewTitle', t('sheetPreviewTitle'));
    setText('uiSheetPreviewSub', t('sheetPreviewSub'));
    setText('uiLabelShowKeySheet', t('labelShowKeySheet'));
    setText('optStyleFull', t('optStyleFull'));
    setText('optStyleMinimal', t('optStyleMinimal'));
    setText('optLayout1', t('optLayout1'));
    setText('optLayout2', t('optLayout2'));
    setText('optLayout4', t('optLayout4'));
    setText('optLayout6', t('optLayout6'));
    setText('optOrientAuto', t('optOrientAuto'));
    setText('optOrientPortrait', t('optOrientPortrait'));
    setText('optOrientLandscape', t('optOrientLandscape'));
    setText('optPaperLetter', t('optPaperLetter'));
    setText('optPaperLegal', t('optPaperLegal'));
    setText('uiBtnDownloadSheetPng', t('btnDownloadSheetPng'));
    setText('uiBtnPrintSheetNow', t('btnPrintSheetNow'));
    setText('uiScannerTitle', t('scannerTitle'));
    setText('uiScannerSub', t('scannerSub'));
    setText('uiBtnCameraToggle', appState.scanner.stream ? t('btnCameraOff') : t('btnCameraOn'));
    setText('uiBtnCapturePhoto', t('btnCapturePhoto'));
    setText('uiBtnUploadPhoto', t('btnUploadPhoto'));
    setText('uiBtnSimulateScan', t('btnSimulateScan'));
    setText('uiLabelSensitivity', t('labelSensitivity'));
    setText('uiScanResultTitle', t('scanResultTitle'));
    setText('scanStatusBadge', t('scanStatusReady'));
    setText('uiStatCorrect', t('statCorrect'));
    setText('uiStatWrong', t('statWrong'));
    setText('uiStatBlank', t('statBlank'));
    setText('uiStatPct', t('statPct'));
    setText('uiLabelStudentName', t('labelStudentName'));

    const studentNameInput = document.getElementById('scannedStudentName');
    if (studentNameInput) studentNameInput.placeholder = t('placeholderStudentName');
    const studentCodeInput = document.getElementById('scannedStudentId');
    if (studentCodeInput) studentCodeInput.placeholder = t('placeholderStudentCode');

    setText('uiLabelStudentCode', t('labelStudentCode'));
    setText('uiBtnSaveGrade', t('btnSaveGrade'));
    setText('uiAuditTitle', t('auditTitle'));
    setText('uiAuditHint', t('auditHint'));
    setText('uiGradebookTitle', t('gradebookTitle'));
    setText('uiGradebookSub', t('gradebookSub'));

    const searchStudentInput = document.getElementById('resultsStudentSearch');
    if (searchStudentInput) searchStudentInput.placeholder = t('placeholderSearchStudent');

    setText('optSepSemicolon', t('optSepSemicolon'));
    setText('optSepComma', t('optSepComma'));
    setText('optSepTab', t('optSepTab'));
    setText('optSepPipe', t('optSepPipe'));
    setText('uiBtnExportCsv', t('btnExportCsv'));
    setText('uiBtnClearGrades', t('btnClearGrades'));
    setText('uiKpiTotal', t('kpiTotal'));
    setText('uiKpiAvg', t('kpiAvg'));
    setText('uiKpiPassRate', t('kpiPassRate'));
    setText('uiKpiBest', t('kpiBest'));
    setText('thResStudent', t('thResStudent'));
    setText('thResCode', t('thResCode'));
    setText('thResExam', t('thResExam'));
    setText('thResHits', t('thResHits'));
    setText('thResPct', t('thResPct'));
    setText('thResGrade', t('thResGrade'));
    setText('thResDate', t('thResDate'));

    renderSavedExamsList();
    renderPrintableSheets();
    renderScannedAuditList();
    renderGradebookTable();
    updatePassingLabelsUI(Math.round(getGlobalPassingRatio() * 100));
}

/* Exposición global explícita */
Object.assign(window, {
    switchView,
    printAnswerSheet,
    createNewBlankExam,
    duplicateCurrentExam,
    duplicateExamById,
    syncCurrentExamMeta,
    saveCurrentExam,
    handleQuestionCountChange,
    handleOptionsCountChange,
    setQuestionAnswerKey,
    fillRandomKey,
    applyQuickKeyString,
    loadSavedExam,
    deleteSavedExam,
    exportAllDataJSON,
    handleImportJSON,
    openQrSyncHubModal,
    renderPrintableSheets,
    downloadSheetAsPNG,
    toggleCameraStream,
    captureFromVideoAndScan,
    handleSheetImageUpload,
    generateSimulatedStudentScan,
    updateSensitivityLabel,
    rescanCurrentCanvasImage,
    overrideScannedQuestion,
    saveScannedResultToGradebook,
    renderGradebookTable,
    deleteSingleResult,
    clearGradebookForCurrentExam,
    exportGradebookCSV
});

window.addEventListener('DOMContentLoaded', () => {
    loadStorageData();
    applyTheme();
    populateExamFormInputs();
    renderAnswerKeyGrid();
    renderSavedExamsList();
    applyTranslations();
    drawReferenceSheetOnScannerCanvas(true);

    document.getElementById('btnThemeToggle').addEventListener('click', () => {
        appState.theme = appState.theme === 'dark' ? 'light' : 'dark';
        localStorage.setItem(STORAGE_KEYS.THEME, appState.theme);
        applyTheme();
    });

    document.getElementById('btnLangToggle').addEventListener('click', () => {
        appState.lang = appState.lang === 'es' ? 'en' : 'es';
        localStorage.setItem(STORAGE_KEYS.LANG, appState.lang);
        applyTranslations();
    });
});

/* --- Receptor automático cuando corre dentro de UparApp Studio --- */
if (window.self !== window.top || window.location.search.includes('suite=1')) {
    const st = document.createElement('style');
    st.textContent = `.brand-group, #appMainHeader .flex.items-center.gap-3:first-child, .app-header .header-top > div:first-child, #btnLangToggle, #btnThemeToggle, #langToggleBtn, #themeToggleBtn, footer, .app-footer, #appMainFooter { display: none !important; } .app-header .header-container, #appMainHeader > div { padding-top: 0.4rem !important; padding-bottom: 0.4rem !important; justify-content: center !important; } .subnav-bar { border-top: none !important; padding-top: 0 !important; }`;
    document.head.appendChild(st);
}
window.addEventListener('message', (e) => {
    if (e.data && e.data.type === 'UPAR_SUITE_SYNC') {
        if (typeof appState === 'object') { appState.theme = e.data.theme; appState.lang = e.data.lang; }
        if (typeof currentTheme !== 'undefined') currentTheme = e.data.theme;
        if (typeof currentLang !== 'undefined') currentLang = e.data.lang;
        if (typeof applyTheme === 'function') applyTheme();
        if (typeof applyTranslations === 'function') applyTranslations();
    }
});