
const dateScreen =
    document.getElementById("date-screen");

const countdownDays =
    document.getElementById("countdown-days");

const jarPlayground =
    document.getElementById("jar-playground");

const largeMessageJar =
    document.getElementById("large-message-jar");

const jarGlassArea =
    document.getElementById("jar-glass-area");

const paperPile =
    document.getElementById("paper-pile");

const jarInstruction =
    document.getElementById("jar-instruction");

const resetJarButton =
    document.getElementById("reset-jar-button");

const countdownHours =
    document.getElementById("countdown-hours");

const countdownMinutes =
    document.getElementById("countdown-minutes");

const countdownSeconds =
    document.getElementById("countdown-seconds");

const countdownMessage =
    document.getElementById("countdown-message");
const quizScreen =
    document.getElementById("quiz-screen");

const resultScreen =
    document.getElementById("result-screen");

const returnScreen =
    document.getElementById("return-screen");

const transitionScreen =
    document.getElementById("transition-screen");

const dashboardScreen =
    document.getElementById("dashboard-screen");

const dashboardCards =
    document.querySelectorAll(".dashboard-card");

const backButtons =
    document.querySelectorAll(".back-button");


const directEnterButton =
    document.getElementById("direct-enter-button");

const repeatQuizButton =
    document.getElementById("repeat-quiz-button");


const dateInput =
    document.getElementById("final-date");

const answerButton =
    document.getElementById("answer-button");

const answerMessage =
    document.getElementById("answer-message");

const continueButton =
    document.getElementById("continue-button");


const quizQuestion =
    document.getElementById("quiz-question");

const quizHint =
    document.getElementById("quiz-hint");

const quizAnswer =
    document.getElementById("quiz-answer");

const quizButton =
    document.getElementById("quiz-button");

const quizMessage =
    document.getElementById("quiz-message");

const questionNumber =
    document.getElementById("question-number");

const progressBar =
    document.getElementById("progress-bar");


const finalScore =
    document.getElementById("final-score");

const enterButton =
    document.getElementById("enter-button");


const scannerBar =
    document.getElementById("scanner-bar");

const scannerPercentage =
    document.getElementById("scanner-percentage");

const scannerTitle =
    document.getElementById("scanner-title");

const scannerDescription =
    document.getElementById("scanner-description");

const scannerDinosaur =
    document.getElementById("scanner-dinosaur");

const profileFound =
    document.getElementById("profile-found");

const reunionDate =
    new Date("2026-12-20T17:30:00-06:00");


const dashboardProfileName =
    document.getElementById("dashboard-profile-name");

const dashboardProfileScore =
    document.getElementById("dashboard-profile-score");

const dashboardAvatar =
    document.getElementById("dashboard-avatar");

const privatePassword =
    document.getElementById("private-password");

const privateUnlockButton =
    document.getElementById("private-unlock-button");

const privateMessage =
    document.getElementById("private-message");

const privateLogin =
    document.getElementById("private-login");

const privateJoke =
    document.getElementById("private-joke");


const photosSection =
    document.getElementById("photos-section");

const togetherGallery =
    document.getElementById("together-gallery");

const marianaGallery =
    document.getElementById("mariana-gallery");

const photoTabs =
    document.querySelectorAll(".photo-tab");

    const togetherPhotos = [
  
    
    {
        image: "images/together/foto3.webp",
        date: "Julio 9",
        title: "En casa de Chave",
        description: "Relación homeorotica interracial"
    },
    {
        image: "images/together/foto5.webp",
        date: "Enero 25",
        title: "El primer plan con Manrique",
        description: "Estuvimos jugando y me la pase muy padree."
    },

    {
        image: "images/together/foto8.webp",
        date: "Abril 16",
        title: "El día que fuimos a Valle Alto. ",
        description: "Era de noche y te acostaste en mí. Llegué a casa y pedí KFC."
    },
    {
        image: "images/together/foto9.webp",
        date: "Mayo 1",
        title: "Mi persona favorita",
        description: "Hermosa."
    },
    {
        image: "images/together/foto10.webp",
        date: "Abril 8",
        title: "Imagen sacada de video",
        description: "Porque te veías dms pretty. No sabes cuantas veces vi el video para ver tu cara x 2 segundos."
    },
    {
        image: "images/together/foto11.webp",
        date: "Abril 16",
        title: "Cuando me regresé contigo.",
        description: "Disfruté demasiado agarrarte la mano todo el camino y escuchar la música de tus papis. Creo que fui verdaderamente feliz."
    },
    {
        image: "images/together/foto14.webp",
        date: "Febrero 13",
        title: "Cuando me volé física para ir a tu casa",
        description: "Me hiciste una trenza pequeña."
    },
    {
        image: "images/together/foto15.webp",
        date: "Julio 7",
        title: "Viniste a mi casa y mi mamá nos cachó",
        description: "Extraño eso."
    },
    {
        image: "images/together/foto16.webp",
        date: "Julio 8",
        title: "Las rosas que me diste",
        description: "Que coraje que no me las pude llevar. Pero realmente fui feliz con la intención. Muchas gracias."
    },
    {
        image: "images/together/foto17.webp",
        date: "Julio 22",
        title: "Paseando a la perra",
        description: "Y luego te diste cuenta de que te tome la foto y me preguntaste que qué hacia tomando sneaky pics"
    },
    {
        image: "images/together/foto18.webp",
        date: "Julio 24",
        title: "Las chanclas gigantes",
        description: "El viernes de la pijamada"
    },
    {
        image: "images/together/foto19.webp",
        date: "Un día bonito",
        title: "Hermanos en Boru",
        description: "Extraño tu carrito."
    },
    {
        image: "images/together/foto21.webp",
        date: "Febrero 14",
        title: "Cuando vi un Nailong y me recordó a ti",
        description: "Me decías que te recordaba a mi por los ojos verdes."
    },
    {
        image: "images/together/foto22.webp",
        date: "Febrero 15",
        title: "En mi casa.",
        description: "Adoro esta foto. Qué hermosa estás."
    },
    {
        image: "images/together/foto23.webp",
        date: "Febrero 18",
        title: "El conejo de peluche",
        description: "Yo quería un peluche y me mentiste para que te lo aceptara."
    },
    {
        image: "images/together/foto24.webp",
        date: "Marzo 2",
        title: "En la prepa.",
        description: "Durmiendo como siempre jajajaj"
    },
    {
        image: "images/together/foto27.webp",
        date: "Marzo 26",
        title: "En tu carrito.",
        description: "Creo que esta foto fue en u´gurt."
    },
    {
        image: "images/together/foto29.webp",
        date: "Abril 12",
        title: "Datecito en Ommani.",
        description: "No me lo pude acabar. Estaba demasiado nerviosa."
    },
    {
        image: "images/together/foto6.webp",
        date: "Febrero 2",
        title: "Pin de rana gay",
        description: "Fuiste a barrio antiguo con una amiga y me lo compraste. Jamás lo olvidaré."
    },
    {
        image: "images/together/foto30.webp",
        date: "Junio 21",
        title: "Tu canción",
        description: "De los colores que me recuerdan a ti."
    },
    {
        image: "images/together/foto31.webp",
        date: "Julio 16",
        title: "Intercambio de zapatos",
        description: "Y casi se me olvida regresartelos cuando te dejé en tu casa."
    },
    {
        image: "images/together/foto32.webp",
        date: "Marzo 31",
        title: "Salí contigo",
        description: "De hecho fue en mi cumple."
    },
    {
        image: "images/together/foto33.webp",
        date: "No encuentro la fecha",
        title: "Cuando traía colcha para ti en la cajuela.",
        description: "Extrañooooo"
    },
    {
        image: "images/together/foto35.webp",
        date: "No se fecha",
        title: "Zapatos afuera",
        description: "Tus zapatitos afuera mega cute."
    },
    {
        image: "images/together/foto36.webp",
        date: "Enero 31",
        title: "Plan de los de OW",
        description: "la mandó Raúl al chat."
    },
    {
        image: "images/together/foto37.webp",
        date: "Abril 1",
        title: "Banana peluche",
        description: "Me encantó para ti."
    },
    {
        image: "images/together/foto38.webp",
        date: "Marzo 13",
        title: "First stay",
        description: "Primera vez que me dejaste a tus perros."
    },
    {
        image: "images/together/foto39.webp",
        date: "Abril 24",
        title: "Elote",
        description: "Compré un elote porque te quería compartir y que lo probaras, pero no te vi así que me lo comí."
    },
    {
        image: "images/together/foto40.webp",
        date: "Abril 26",
        title: "Me encantó",
        description: "Ahora si estabamos matching en persona y en boblox"
    },
    {
        image: "images/together/foto41.webp",
        date: "Febrero 2",
        title: "Pin de rana gay",
        description: "Fuiste a barrio antiguo con una amiga y me lo compraste. Jamás lo olvidaré."
    },
    {
        image: "images/together/foto42.webp",
        date: "Abril 12",
        title: "Banana y Melón",
        description: "Amarillo"
    },
    {
        image: "images/together/foto34.webp",
        date: "Marzo 22",
        title: "Flores amarillas",
        description: "No sabes como andaba de feliz."
    },
    {
        image: "images/together/foto43.webp",
        date: "Marzo 25",
        title: "Mono amarillo dibujado",
        description: "Ese día te escondí en mi baño porque llegó mi mamá."
    },
    {
        image: "images/together/foto44.webp",
        date: "Marzo 25",
        title: "Rosas de lego que me diste",
        description: "Las armé con la Mercy y todavía las tengo aquí guardadas."
    },
    {
        image: "images/together/foto45.webp",
        date: "Abril 1",
        title: "El carrito para tu cumple",
        description: "Ya te lo quería dar jajaja."
    }
];

const marianaPhotos = [
    {
        image: "images/mariana/mariana1.webp",
        date: "   ",
        title: "La primera vez que te robé hoodie",
        description: "me la pasé oliendola en mi casa. De hecho, me dormí con ella para poder olerte jajjajaj."
    },
    {
        image: "images/mariana/mariana2.webp",
        date: "   ",
        title: "Winterfest",
        description: "La primera vez que me subí a tu carro."
    },
    {
        image: "images/mariana/mariana3.webp",
        date: "    ",
        title: "Esperándote",
        description: "Te andaba esperando en el carro y puse música en mis audífonos que traje para examen de aleman o algo así."
    },
    {
        image: "images/mariana/mariana4.webp",
        date: "    ",
        title: "Pelo",
        description: "El día que me dijiste que se me veía muy bien así ondulado y te mandé foto."
    },
    {
        image: "images/mariana/mariana5.webp",
        date: "    ",
        title: "Un partido y tu con mi hoodie",
        description: "No te quisiste tomar foto conmigooo"
    },
    {
        image: "images/mariana/mariana6.webp",
        date: "    ",
        title: "Oficina de Dr. Jorge",
        description: "Me la tomaste tú."
    },
    {
        image: "images/mariana/mariana7.webp",
        date: "    ",
        title: "Yo",
        description: "   "
    },
    {
        image: "images/mariana/mariana8.webp",
        date: "    ",
        title: "Oversize",
        description: "   "
    },
    {
        image: "images/mariana/mariana9.webp",
        date: "    ",
        title: "Formal",
        description: "   "
    },
    {
        image: "images/mariana/mariana10.webp",
        date: "    ",
        title: "Mirror",
        description: "   "
    },
    {
        image: "images/mariana/mariana11.webp",
        date: "    ",
        title: "jajaja",
        description: "   "
    },
    {
        image: "images/mariana/mariana12.webp",
        date: "    ",
        title: "Otra mirror",
        description: "   "
    },
    {
        image: "images/mariana/mariana13.webp",
        date: "    ",
        title: "Pelo que te gustó",
        description: "   "
    },
    {
        image: "images/mariana/mariana14.webp",
        date: "    ",
        title: "Te",
        description: "   "
    },
    {
        image: "images/mariana/mariana15.webp",
        date: "    ",
        title: "Amo",
        description: "   "
    },
    {
        image: "images/mariana/mariana17.webp",
        date: "    ",
        title: "La que te mandé por accidente una vez",
        description: "   "
    },
    {
        image: "images/mariana/mariana18.webp",
        date: "    ",
        title: "En Costco llorando",
        description: "Porque me gustabas demasiado."
    },
    {
        image: "images/mariana/mariana19.webp",
        date: "    ",
        title: "Mirror + Chongo",
        description: "   "
    },
    {
        image: "images/mariana/mariana20.webp",
        date: "    ",
        title: "El día que fuimos a arboleda y estuvimos ahí arriba",
        description: "   "
    },
    {
        image: "images/mariana/mariana21.webp",
        date: "    ",
        title: "Con tu hoodie",
        description: "   "
    },
    {
        image: "images/mariana/mariana22.webp",
        date: "    ",
        title: "Fotopilates",
        description: "   "
    },
    {
        image: "images/mariana/mariana23.webp",
        date: "    ",
        title: "Mirror",
        description: "   "
    },
    {
        image: "images/mariana/mariana24.webp",
        date: "    ",
        title: "jajajaj no se que es esto",
        description: "   "
    },
    {
        image: "images/mariana/mariana25.webp",
        date: "    ",
        title: "lwk no me gusta esta pero xs ig",
        description: "   "
    },
    {
        image: "images/mariana/mariana26.webp",
        date: "    ",
        title: "Los pants que me diste en lugar de a Ana Paula",
        description: "   "
    }
    
];
function createPhotoCards(photos, container) {

    if (!container) {
        return;
    }

    container.innerHTML = "";

    photos.forEach(function (photo) {

        const article =
            document.createElement("article");

        article.className =
            "photo-memory-card";

        article.innerHTML = `
            <div class="photo-wrapper">
                <img
                    src="${photo.image}"
                    alt="${photo.title}"
                    loading="lazy"
                    decoding="async"
                >
            </div>

            <div class="photo-text">
                <p class="photo-date">
                    ${photo.date}
                </p>

                <h2>
                    ${photo.title}
                </h2>

                <p>
                    ${photo.description}
                </p>
            </div>
        `;

        container.appendChild(article);
    });
}

photoTabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
        photoTabs.forEach(function (button) {
            button.classList.remove(
                "active-photo-tab"
            );
        });

        document
            .querySelectorAll(".photo-gallery")
            .forEach(function (gallery) {
                gallery.classList.remove(
                    "active-photo-gallery"
                );
            });

        tab.classList.add(
            "active-photo-tab"
        );

        const selectedGallery =
            document.getElementById(
                tab.dataset.gallery
            );

        selectedGallery.classList.add(
            "active-photo-gallery"
        );
    });
});




let dateAttempts = 0;

let currentQuestion = 0;

let score = 0;

let transitionRunning = false;


function checkSavedProfile() {

    const quizWasCompleted =
        localStorage.getItem(
            "yoonaQuizCompleted"
        );

    if (quizWasCompleted === "true") {

        dateScreen.classList.remove(
            "active-card"
        );

        returnScreen.classList.add(
            "active-card"
        );

        loadYoonaProfile();
    }
}



const questions = [
    {
        question: "Cómo me llamo?",
        hint: "A ver si te acuerdas jajaja",
        answers: [
            "mariana",
            "mari",
            "mariana garza"
        ]
    },

    {
        question: "Qué día cumplimos meses?",
        hint: "Escribe solamente el número.",
        answers: [
            "16",
            "el 16",
            "dia 16",
            "día 16"
    
        ]
    },

    {
        question: "A dónde fuimos la primera vez que salimos juntas?",
        hint: "La primeriiiita vez",
        answers: [
            "nectarworks",
            "a nectarworks",
            "Nectarworks",
            "Arboleda"
        ]
    },

    {
        question: "Cuantás pijamadas hemos tenido en total?",
        hint: "Sabes? creo q esta facil jajajaj",
        answers: [
            "2",
            "dos",
            "Dos",
    
        ]
    },

    {
        question: "Quién ama mas?",
        hint: "Uyyy díficil vdd",
        answers: [
            "mariana",
            "ninguna",
            "igual",
            "ok",
            "va"
        ]
    }
];




answerButton.addEventListener("click", function () {

    if (dateInput.value === "") {

        answerMessage.textContent =
            "Selecciona algo jajaj";

        return;
    }

    dateAttempts++;

    if (dateAttempts === 1) {

        answerMessage.innerHTML =
            "Nope. 🦖<br>" +
            "Te queda 1 intento más.";

        dateInput.value = "";

    } else {

        answerMessage.innerHTML =
            "Ay Yoona<br>" +
            "Como crees que te dejaría de amaarrrr???? " +
            "Te adorooo";

        dateInput.disabled = true;
        answerButton.disabled = true;

        answerButton.textContent =
            "Botón menso";

        answerButton.style.opacity = "0.7";
        answerButton.style.cursor = "default";

        continueButton.classList.add(
            "visible-button"
        );
    }
});


continueButton.addEventListener(
    "click",
    function () {

        currentQuestion = 0;
        score = 0;

        quizButton.disabled = false;
        quizAnswer.disabled = false;

        showCard(quizScreen);

        loadQuestion();

        quizAnswer.focus();
    }
);

function loadQuestion() {

    const question =
        questions[currentQuestion];

    quizQuestion.textContent =
        question.question;

    quizHint.textContent =
        question.hint;

    quizAnswer.value = "";

    quizMessage.textContent = "";

    questionNumber.textContent =
        "Pregunta " +
        (currentQuestion + 1) +
        " de " +
        questions.length;

    const progress =
        ((currentQuestion + 1) /
            questions.length) * 100;

    progressBar.style.width =
        progress + "%";
}


quizButton.addEventListener(
    "click",
    checkQuizAnswer
);



quizAnswer.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Enter" &&
            !quizButton.disabled
        ) {
            checkQuizAnswer();
        }
    }
);


function checkQuizAnswer() {

    const userAnswer =
        normalizeText(
            quizAnswer.value
        );

    if (userAnswer === "") {

        quizMessage.textContent =
            "Tienes que escribir una respuestaaaa";

        return;
    }

    const correctAnswers =
        questions[currentQuestion].answers;

    const isCorrect =
        correctAnswers.some(
            function (answer) {

                return (
                    normalizeText(answer) ===
                    userAnswer
                );
            }
        );

    if (isCorrect) {

        score++;

        quizMessage.textContent =
            "Siiii";

    } else {

        quizMessage.textContent =
            "Mmm... sospechoso ";
    }

    quizButton.disabled = true;
    quizAnswer.disabled = true;

    setTimeout(
        function () {

            currentQuestion++;

            if (
                currentQuestion <
                questions.length
            ) {

                quizButton.disabled = false;
                quizAnswer.disabled = false;

                loadQuestion();

                quizAnswer.focus();

                return;
            }

            showResults();

        },
        1000
    );
}




function showResults() {

    const now =
        new Date().toISOString();

    const yoonaProfile = {
        name: "Yoona",
        dinosaur: "🦖",
        completedQuiz: true,
        score: score,
        totalQuestions: questions.length,
        firstVisit: now,
        lastVisit: now
    };

    localStorage.setItem(
        "yoonaProfile",
        JSON.stringify(yoonaProfile)
    );

    localStorage.setItem(
        "yoonaQuizCompleted",
        "true"
    );

    finalScore.textContent =
        "Obtuviste " +
        score +
        " de " +
        questions.length +
        " respuestas correctas";

    showCard(resultScreen);
}


function loadYoonaProfile() {

    const savedProfile =
        localStorage.getItem(
            "yoonaProfile"
        );

    if (!savedProfile) {
        return;
    }

    try {

        const profile =
            JSON.parse(savedProfile);

        dashboardProfileName.textContent =
            profile.name || "Yoona";

        dashboardAvatar.textContent =
            profile.dinosaur || "🦖";

        dashboardProfileScore.textContent =
            "Quiz: " +
            (profile.score ?? 0) +
            "/" +
            (profile.totalQuestions ??
                questions.length);

        profile.lastVisit =
            new Date().toISOString();

        localStorage.setItem(
            "yoonaProfile",
            JSON.stringify(profile)
        );

    } catch (error) {

        console.error(
            "No se pudo cargar el perfil:",
            error
        );

        localStorage.removeItem(
            "yoonaProfile"
        );

        localStorage.removeItem(
            "yoonaQuizCompleted"
        );
    }
}




enterButton.addEventListener(
    "click",
    showDashboardTransition
);



function showDashboardTransition() {

    if (transitionRunning) {
        return;
    }

    transitionRunning = true;

    dateScreen.classList.remove(
        "active-card"
    );

    quizScreen.classList.remove(
        "active-card"
    );

    resultScreen.classList.remove(
        "active-card"
    );

    returnScreen.classList.remove(
        "active-card"
    );

    dashboardScreen.classList.remove(
        "active-dashboard"
    );


    // Reiniciar el escáner cada vez

    scannerBar.style.width =
        "0%";

    scannerPercentage.textContent =
        "0%";

    scannerTitle.textContent =
        "Sí eres tú??";

    scannerDescription.textContent =
        "dinos...rompecabezas...spiderman...";

    scannerDinosaur.textContent =
        "🦕";

    profileFound.classList.remove(
        "visible-profile-found"
    );


    transitionScreen.classList.add(
        "active-transition"
    );


    let percentage = 0;


    const scannerInterval =
        setInterval(
            function () {

                percentage =
                    Math.min(
                        percentage + 4,
                        100
                    );

                scannerBar.style.width =
                    percentage + "%";

                scannerPercentage.textContent =
                    percentage + "%";


                if (percentage < 100) {
                    return;
                }

                clearInterval(
                    scannerInterval
                );

                scannerTitle.textContent =
                    "YAYYYY";

                scannerDescription.textContent =
                    "Claro que eres tú!!";

                scannerDinosaur.textContent =
                    "🦖";

                profileFound.classList.add(
                    "visible-profile-found"
                );


                setTimeout(
                    function () {

                        transitionScreen.classList.remove(
                            "active-transition"
                        );

                        dashboardScreen.classList.add(
                            "active-dashboard"
                        );

                        loadYoonaProfile();

                        transitionRunning = false;

                        window.scrollTo({
                            top: 0,
                            behavior: "smooth"
                        });

                    },
                    1800
                );

            },
            55
        );
}
directEnterButton.addEventListener(
    "click",
    showDashboardTransition
);



repeatQuizButton.addEventListener(
    "click",
    function () {

        const wantsToRepeat =
            confirm(
                "Segura que quieres repetir el quiz? 🦖"
            );

        if (!wantsToRepeat) {
            return;
        }

        localStorage.removeItem(
            "yoonaQuizCompleted"
        );

        localStorage.removeItem(
            "yoonaProfile"
        );

        resetQuiz();

        showCard(dateScreen);

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
);


function resetQuiz() {

    dateAttempts = 0;
    currentQuestion = 0;
    score = 0;

    dateInput.disabled = false;
    answerButton.disabled = false;

    dateInput.value = "";

    answerButton.textContent =
        "Confirmar respuesta";

    answerMessage.textContent = "";

    continueButton.classList.remove(
        "visible-button"
    );

    quizAnswer.disabled = false;
    quizButton.disabled = false;

    quizAnswer.value = "";
    quizMessage.textContent = "";

    questionNumber.textContent =
        "Pregunta 1 de " +
        questions.length;

    progressBar.style.width =
        (100 / questions.length) + "%";
}



function showCard(cardToShow) {

    dateScreen.classList.remove(
        "active-card"
    );

    quizScreen.classList.remove(
        "active-card"
    );

    resultScreen.classList.remove(
        "active-card"
    );

    returnScreen.classList.remove(
        "active-card"
    );

    cardToShow.classList.add(
        "active-card"
    );
}




function normalizeText(text) {

    return text
        .trim()
        .toLowerCase()
        .normalize("NFD")
        .replace(
            /[\u0300-\u036f]/g,
            ""
        )
        .replace(/\s+/g, " ");
}



dashboardCards.forEach(
    function (card) {

        card.addEventListener(
            "click",
            function () {

                const selectedSectionId =
                    card.dataset.section;

                    if (
    selectedSectionId ===
    "constellation-section"
) {

    document.body.classList.add(
        "observatory-mode"
    );

}

                const selectedSection =
                    document.getElementById(
                        selectedSectionId
                    );

                if (!selectedSection) {

                    alert(
                        "Esta sección todavía no está lista 🦕"
                    );

                    return;
                }

                dashboardScreen.classList.remove(
                    "active-dashboard"
                );

                selectedSection.classList.add(
                    "active-content-screen"
                );

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            }
        );
    }
);


backButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                if (
                    button.id ===
                    "leave-observatory-button"
                ) {
                    return;
                }

                document.body.classList.remove(
                    "observatory-mode"
                );

                const openSections =
                    document.querySelectorAll(
                        ".dashboard-content-screen"
                    );

                openSections.forEach(
                    function (section) {

                        section.classList.remove(
                            "active-content-screen"
                        );

                    }
                );

                dashboardScreen.classList.add(
                    "active-dashboard"
                );

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
            }
        );
    }
);



const secretPassword =
    "reirea10041009";

function unlockPrivateSection() {

    const enteredPassword =
        normalizeText(
            privatePassword.value
        );

    if (enteredPassword === "") {

        privateMessage.textContent =
            "Contraseña";

        return;
    }

    if (
        enteredPassword !==
        normalizeText(secretPassword)
    ) {

        privateMessage.textContent =
            "Si no te sabes la contraseña pídemela.";

        privatePassword.value = "";

        privatePassword.focus();

        return;
    }

    privateMessage.textContent = "";

    privateLogin.style.display =
        "none";

    privateJoke.classList.add(
        "visible-private-joke"
    );
}


privateUnlockButton.addEventListener(
    "click",
    unlockPrivateSection
);


privatePassword.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Enter") {
            unlockPrivateSection();
        }
    }
);


function updateCountdown() {

    if (
        !countdownDays ||
        !countdownHours ||
        !countdownMinutes ||
        !countdownSeconds ||
        !countdownMessage
    ) {
        return;
    }

    const now =
        new Date();

    const distance =
        reunionDate.getTime() - now.getTime();

    if (distance <= 0) {

        countdownDays.textContent = "00";
        countdownHours.textContent = "00";
        countdownMinutes.textContent = "00";
        countdownSeconds.textContent = "00";

        countdownMessage.textContent =
            "YA ES HOY";

        return;
    }

    const days =
        Math.floor(
            distance /
            (1000 * 60 * 60 * 24)
        );

    const hours =
        Math.floor(
            (
                distance %
                (1000 * 60 * 60 * 24)
            ) /
            (1000 * 60 * 60)
        );

    const minutes =
        Math.floor(
            (
                distance %
                (1000 * 60 * 60)
            ) /
            (1000 * 60)
        );

    const seconds =
        Math.floor(
            (
                distance %
                (1000 * 60)
            ) /
            1000
        );

    countdownDays.textContent =
        String(days).padStart(2, "0");

    countdownHours.textContent =
        String(hours).padStart(2, "0");

    countdownMinutes.textContent =
        String(minutes).padStart(2, "0");

    countdownSeconds.textContent =
        String(seconds).padStart(2, "0");

    if (days >= 30) {

        countdownMessage.textContent =
            "Que siga pasando el tiempo y más rápido por favorrrr";

    } else if (days >= 7) {

        countdownMessage.textContent =
            "Ya casi nos vemoooooossss";

    } else if (days >= 1) {

        countdownMessage.textContent =
            "MENOS DE UNA SEMANA OMG";

    } else {

        countdownMessage.textContent =
            "MENOS DE 24 HORASSSS";
    }
}




loadYoonaProfile();

checkSavedProfile();

createPhotoCards(
    togetherPhotos,
    togetherGallery
);

createPhotoCards(
    marianaPhotos,
    marianaGallery
);


function updateCountdown() {

    if (
        !countdownDays ||
        !countdownHours ||
        !countdownMinutes ||
        !countdownSeconds ||
        !countdownMessage
    ) {
        return;
    }

    const now =
        new Date();

    const distance =
        reunionDate.getTime() - now.getTime();

    if (distance <= 0) {

        countdownDays.textContent = "00";
        countdownHours.textContent = "00";
        countdownMinutes.textContent = "00";
        countdownSeconds.textContent = "00";

        countdownMessage.textContent =
            "HOY NOS VEMOS VEN YA";

        return;
    }

    const days =
        Math.floor(
            distance /
            (1000 * 60 * 60 * 24)
        );

    const hours =
        Math.floor(
            (
                distance %
                (1000 * 60 * 60 * 24)
            ) /
            (1000 * 60 * 60)
        );

    const minutes =
        Math.floor(
            (
                distance %
                (1000 * 60 * 60)
            ) /
            (1000 * 60)
        );

    const seconds =
        Math.floor(
            (
                distance %
                (1000 * 60)
            ) /
            1000
        );

    countdownDays.textContent =
        String(days).padStart(2, "0");

    countdownHours.textContent =
        String(hours).padStart(2, "0");

    countdownMinutes.textContent =
        String(minutes).padStart(2, "0");

    countdownSeconds.textContent =
        String(seconds).padStart(2, "0");

    if (days >= 30) {

        countdownMessage.textContent =
            "Porfa que siga pasando el tiempo y más rápidooo";

    } else if (days >= 7) {

        countdownMessage.textContent =
            "SIII YA FALTA MENOS";

    } else if (days >= 1) {

        countdownMessage.textContent =
            "MENOS DE UNA SEMANA OMG";

    } else {

        countdownMessage.textContent =
            "AHH MENOS DE 24 HRS";
    }
}

const jarMessages = [
    "Siempre estoy pensando en ti",
    "Eres la persona más importante y especial de mi vida",
    "Gracias por estár conmigo en todo momento",
    "Te mereces todo lo bueno. Eres perfecta",
    "Me sigo preguntando que es lo que tanto te gusta de mi, porque simplemente eres tan increíble que no me lo creo.",
    "Eres la persona más pro que conozco.",
    "Me encantas siempre. Siempre siempre siempre en todo momento siempre.",
    "Estás hermosa. Neta hermosisisisisisisisima. Te amo",
    "Te escogería en todos los lifetimes, siempre.",
    "Nada puede hacer que deje de sentir lo que siento por ti",
    "Nadie me habia hecho sentir tanto. Neta estoy enamoradísima de ti",
    "Gracias por ahcerme tan feliz. De verdad.",
    "Si pudiera, te traería aquí conmigo en este momento",
    "Tengo unas ganotas GIGANTES de abrazarte YA.",
    "Ando haciendo los mensajitos y me están dando ganas de llorar de lo mucho que te extraño. Y ni te has ido.",
    "Eres una preciosa hermosa bella",
    "Mi amooooorrrrrr holaaaa este papelito es para saludarte q cute q andas abriendolosss!!! Sigueee",
]




let availableJarMessages =
    jarMessages.map(function (_, index) {
        return index;
    });

    function getRandomJarMessage() {

    if (availableJarMessages.length === 0) {

        availableJarMessages =
            jarMessages.map(function (_, index) {
                return index;
            });
    }

    const randomPosition =
        Math.floor(
            Math.random() *
            availableJarMessages.length
        );

    const selectedMessageIndex =
        availableJarMessages[randomPosition];

    availableJarMessages.splice(
        randomPosition,
        1
    );

    return jarMessages[selectedMessageIndex];
}


const paperPositionsDesktop = [
    { left: 34, top: 365, rotation: -13 },
    { left: 145, top: 385, rotation: 8 },
    { left: 260, top: 360, rotation: -6 },
    { left: 72, top: 300, rotation: 10 },
    { left: 208, top: 295, rotation: -12 },
    { left: 15, top: 425, rotation: 6 },
    { left: 120, top: 420, rotation: -8 },
    { left: 245, top: 415, rotation: 13 }
];

const paperPositionsMobile = [
    { left: 18, top: 270, rotation: -13 },
    { left: 105, top: 285, rotation: 8 },
    { left: 200, top: 270, rotation: -6 },
    { left: 45, top: 215, rotation: 10 },
    { left: 160, top: 210, rotation: -12 },
    { left: 12, top: 320, rotation: 6 },
    { left: 105, top: 325, rotation: -8 },
    { left: 205, top: 315, rotation: 13 }
];

function getPaperPositions() {

    if (window.innerWidth <= 650) {
        return paperPositionsMobile;
    }

    return paperPositionsDesktop;
}


function createJarPapers() {

    if (
        !paperPile ||
        !jarGlassArea
    ) {
        return;
    }

    paperPile.innerHTML = "";

    const currentPaperPositions =
    getPaperPositions();

currentPaperPositions.forEach(
        function (position, index) {

            const paper =
                document.createElement("div");

            paper.className =
                "jar-drag-paper";

            paper.setAttribute(
                "role",
                "button"
            );

            paper.setAttribute(
                "tabindex",
                "0"
            );

            paper.setAttribute(
                "aria-label",
                "Sacar papelito del frasco"
            );

            paper.dataset.extracted =
                "false";

            paper.style.left =
                position.left + "px";

            paper.style.top =
                position.top + "px";

            paper.style.transform =
                `rotate(${position.rotation}deg)`;

            paper.innerHTML = `
                <div class="hidden-paper-message">

                    <p class="paper-message-text"></p>

                    <p class="paper-message-signature">
                        Mariana 
                    </p>

                </div>
            `;

            makePaperDraggable(
                paper,
                position.rotation
            );

            paperPile.appendChild(
                paper
            );
        }
    );
}


function makePaperDraggable(
    paper,
    originalRotation
) {

    let dragging = false;

    let pointerOffsetX = 0;
    let pointerOffsetY = 0;


    paper.addEventListener(
        "pointerdown",
        function (event) {

            dragging = true;

            const paperRectangle =
                paper.getBoundingClientRect();

            pointerOffsetX =
                event.clientX -
                paperRectangle.left;

            pointerOffsetY =
                event.clientY -
                paperRectangle.top;

            paper.classList.add(
                "dragging-paper"
            );

            paper.setPointerCapture(
                event.pointerId
            );

           
        }
    );


    paper.addEventListener(
        "pointermove",
        function (event) {

            if (!dragging) {
                return;
            }

            const playgroundRectangle =
                jarPlayground.getBoundingClientRect();

            const newLeft =
                event.clientX -
                playgroundRectangle.left -
                pointerOffsetX;

            const newTop =
                event.clientY -
                playgroundRectangle.top -
                pointerOffsetY;

            if (
                paper.parentElement !==
                jarPlayground
            ) {

                const currentRectangle =
                    paper.getBoundingClientRect();

                jarPlayground.appendChild(
                    paper
                );

                paper.style.left =
                    currentRectangle.left -
                    playgroundRectangle.left +
                    "px";

                paper.style.top =
                    currentRectangle.top -
                    playgroundRectangle.top +
                    "px";
            }

            paper.style.left =
                newLeft + "px";

            paper.style.top =
                newTop + "px";

            paper.style.transform =
                "rotate(1deg)";
        }
    );


    paper.addEventListener(
        "pointerup",
        function (event) {

            if (!dragging) {
                return;
            }

            dragging = false;

            paper.classList.remove(
                "dragging-paper"
            );

            paper.releasePointerCapture(
                event.pointerId
            );

            const paperRectangle =
                paper.getBoundingClientRect();

            const jarRectangle =
                jarGlassArea.getBoundingClientRect();

           const paperCenterX =
    paperRectangle.left +
    paperRectangle.width / 2;

const paperCenterY =
    paperRectangle.top +
    paperRectangle.height / 2;

const wasTakenOut =
    paperCenterY <
        jarRectangle.top + 190 ||
    paperCenterX <
        jarRectangle.left ||
    paperCenterX >
        jarRectangle.right;

            if (
                wasTakenOut &&
                paper.dataset.extracted ===
                "false"
            ) {

                extractPaper(paper);

            } else if (
                paper.dataset.extracted ===
                "false"
            ) {

                returnPaperToJar(
                    paper,
                    originalRotation
                );
            }
        }
    );
}


function extractPaper(paper) {

    paper.dataset.extracted =
        "true";

    paper.dataset.message =
    getRandomJarMessage();

    paper.classList.add(
        "extracted-paper"
    );

    const messageElement =
        paper.querySelector(
            ".paper-message-text"
        );

    messageElement.textContent =
        paper.dataset.message;

    const playgroundRectangle =
        jarPlayground.getBoundingClientRect();

    const randomLeft =
        Math.max(
            10,
            Math.min(
                playgroundRectangle.width - 350,
                Math.random() *
                (playgroundRectangle.width - 350)
            )
        );

    paper.style.left =
        randomLeft + "px";

    paper.style.top =
        "20px";

    paper.style.transform =
        `rotate(${Math.random() * 6 - 3}deg)`;

    jarInstruction.textContent =
        "Yayyy";

    largeMessageJar.classList.remove(
        "jar-bounce"
    );

    void largeMessageJar.offsetWidth;

    largeMessageJar.classList.add(
        "jar-bounce"
    );
}


function returnPaperToJar(
    paper,
    originalRotation
) {

   const currentPaperPositions =
    getPaperPositions();

const availablePosition =
    currentPaperPositions[
        Math.floor(
            Math.random() *
            currentPaperPositions.length
        )
    ];

    paperPile.appendChild(
        paper
    );

    paper.style.left =
        availablePosition.left + "px";

    paper.style.top =
        availablePosition.top + "px";

    paper.style.transform =
        `rotate(${originalRotation}deg)`;
}


if (resetJarButton) {

    resetJarButton.addEventListener(
        "click",
        function () {

            availableJarMessages =
                jarMessages.map(
                    function (_, index) {
                        return index;
                    }
                );

            createJarPapers();

            jarInstruction.textContent =
                "Agarra uno";
        }
    );
}


createJarPapers();

updateCountdown();

setInterval(
    updateCountdown,
    1000
);
// PARA TELESCOPIO Y OBSERVATORIO// 

const telescopeIntro =
    document.getElementById("telescope-intro");

const interactiveTelescope =
    document.getElementById("interactive-telescope");

const enterObservatoryButton =
    document.getElementById("enter-observatory-button");

const spaceObservatory =
    document.getElementById("space-observatory");

const leaveObservatoryButton =
    document.getElementById("leave-observatory-button");

const spaceSky =
    document.getElementById("space-sky");

const backgroundStars =
    document.getElementById("background-stars");

const celestialObjects =
    document.querySelectorAll(
        ".celestial-object, .real-constellation"
    );

const wishModal =
    document.getElementById("wish-modal");

const closeWishButton =
    document.getElementById("close-wish-button");

const wishIcon =
    document.getElementById("wish-icon");

const wishObjectName =
    document.getElementById("wish-object-name");

const wishTitle =
    document.getElementById("wish-title");

const wishDescription =
    document.getElementById("wish-description");

const discoveredCount =
    document.getElementById("discovered-count");




const constellationWishes = [

    {
        object: "Venus",
        icon: "●",
        title: "Love",
        description:
            "Deseo que aunque la vida nos lleve por caminos distintos siempre nos amemos muchisimoooo" 
    },

    {
        object: "Polaris",
        icon: "✦",
        title: "Regresa",
        description:
            "Deseo que regreses conmigo a pesar de la distancia."
    },

    {
        object: "Betelgeuse",
        icon: "✦",
        title: "Happy",
        description:
            "Deseo que nuestras vidas esten full de momentos bonitos, experiencias, risas, y felicidaddddd."
    },

    {
        object: "Osa Mayor",
        icon: "✧",
        title: "Together",
        description:
            "Deseo que algún día vivamos juntas para poder despertar y dormir contigo siempre."
    },

    {
        object: "Casiopea",
        icon: "W",
        title: "Strength",
        description:
            "Deseo que seamos capaces de superar todos los challenges y aprovecharlos para aprender y mejorar."
    },

    {
        object: "Orión",
        icon: "⋆",
        title: "Confianza",
        description:
            "Deseo que siempre exista confianza entre nosotras. Siempre siempre siempre."
    },

    {
        object: "Cisne",
        icon: "✦",
        title: "Cambio",
        description:
            "Deseo que nada cambie. Y que si va a cambiar, sea para bien."
    },

    {
        object: "Estrella secreta",
        icon: "♡",
        title: "Mi deseo más importante",
        description:
            "Deseo que seas feliz, que cumplas todo y absolutamente TODO lo que quieras y que al final pueda estar a tu lado para celebrarlo contigo."
    }

];

const discoveredWishes =
    new Set();

function createBackgroundStars() {

    if (!backgroundStars) {
        return;
    }

    backgroundStars.innerHTML = "";

    const starAmount = 240;

    for (
        let index = 0;
        index < starAmount;
        index++
    ) {

        const star =
            document.createElement("span");

        star.classList.add(
            "generated-star"
        );

        const size =
            Math.random() * 2.8 + 0.5;

        star.style.left =
            `${Math.random() * 100}%`;

        star.style.top =
            `${Math.random() * 100}%`;

        star.style.setProperty(
            "--star-size",
            `${size}px`
        );

        star.style.setProperty(
            "--star-opacity",
            `${Math.random() * 0.8 + 0.2}`
        );

        star.style.setProperty(
            "--star-speed",
            `${Math.random() * 5 + 2}s`
        );

        star.style.animationDelay =
            `${Math.random() * 6}s`;

        if (Math.random() > 0.9) {

            star.classList.add(
                "bright-generated-star"
            );

        }

        if (Math.random() > 0.97) {

            star.classList.add(
                "neon-generated-star"
            );

        }

        backgroundStars.appendChild(
            star
        );
    }
}


function openObservatory() {

    document.body.classList.add(
        "observatory-mode"
    );

    telescopeIntro.classList.add(
        "hidden-telescope-intro"
    );

    spaceObservatory.classList.add(
        "visible-observatory"
    );

    spaceObservatory.setAttribute(
        "aria-hidden",
        "false"
    );

    createBackgroundStars();
}

  function leaveObservatory() {

    document.body.classList.remove(
        "observatory-mode"
    );

    spaceObservatory.classList.remove(
        "visible-observatory"
    );

    spaceObservatory.setAttribute(
        "aria-hidden",
        "true"
    );

    telescopeIntro.classList.remove(
        "hidden-telescope-intro"
    );
}

function openWish(wishIndex, selectedObject) {

    const selectedWish =
        constellationWishes[wishIndex];

    if (!selectedWish) {
        return;
    }

    wishIcon.textContent =
        selectedWish.icon;

    wishObjectName.textContent =
        selectedWish.object;

    wishTitle.textContent =
        selectedWish.title;

    wishDescription.textContent =
        selectedWish.description;

    wishModal.classList.add(
        "visible-wish-modal"
    );

    wishModal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.style.overflow =
        "hidden";

    discoveredWishes.add(
        wishIndex
    );

    selectedObject.classList.add(
        "discovered-object"
    );

    discoveredCount.textContent =
        discoveredWishes.size;
}


function closeWish() {

    wishModal.classList.remove(
        "visible-wish-modal"
    );

    wishModal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow =
        "";
}


/* El telescopio sigue el cursor */

telescopeIntro.addEventListener(
    "mousemove",
    function (event) {

        const rectangle =
            telescopeIntro.getBoundingClientRect();

        const horizontalPosition =
            (
                event.clientX -
                rectangle.left
            ) / rectangle.width;

        const verticalPosition =
            (
                event.clientY -
                rectangle.top
            ) / rectangle.height;

        const rotation =
            (horizontalPosition - 0.5) * 16;

        const movement =
            (verticalPosition - 0.5) * 9;

        interactiveTelescope.style.transform =
            `
                rotate(${rotation}deg)
                translateY(${movement}px)
            `;
    }
);


telescopeIntro.addEventListener(
    "mouseleave",
    function () {

        interactiveTelescope.style.transform =
            "rotate(0deg) translateY(0)";
    }
);


enterObservatoryButton.addEventListener(
    "click",
    openObservatory
);


leaveObservatoryButton.addEventListener(
    "click",
    leaveObservatory
);


celestialObjects.forEach(
    function (celestialObject) {

        celestialObject.addEventListener(
            "click",
            function () {

                const wishIndex =
                    Number(
                        celestialObject.dataset.wish
                    );

                openWish(
                    wishIndex,
                    celestialObject
                );
            }
        );
    }
);


closeWishButton.addEventListener(
    "click",
    closeWish
);


document
    .querySelectorAll("[data-close-wish]")
    .forEach(function (background) {

        background.addEventListener(
            "click",
            closeWish
        );
    });


document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            wishModal.classList.contains(
                "visible-wish-modal"
            )
        ) {
            closeWish();
        }
    }
);



(function initializeLettersDesk() {

    const deskPapers =
        document.querySelectorAll(".desk-paper");

    const letterReader =
        document.getElementById("letter-reader");

    const letterReaderPaper =
        document.getElementById("letter-reader-paper");

    const letterReaderLabel =
        document.getElementById("letter-reader-label");

    const letterReaderTitle =
        document.getElementById("letter-reader-title");

    const letterReaderText =
        document.getElementById("letter-reader-text");

    const closeLetterReaderButton =
        document.getElementById("close-letter-reader");

    const letterReaderBackground =
        document.getElementById("letter-reader-background");


    if (
        deskPapers.length === 0 ||
        !letterReader ||
        !letterReaderPaper ||
        !letterReaderTitle ||
        !letterReaderText ||
        !closeLetterReaderButton
    ) {
        return;
    }


    const letters = [
        {
            label: "07/27/2026",
            title: "Me extrañas?",
            paragraphs: [
                "Hola Yoona. Si abriste esta carta es porque probablemente me extrañas, así que primero quiero recordarte que yo siempre siempre siempre pienso en ti.",
                "Aunque no esté contigo ahorita, tengo la esperanza de que te volveré a ver en persona de nuevo pronto.",
                "No importa cuánto tiempo pase ni qué tan lejos estemos. Hay una versión de mí que siempre va a estar sentada junto a ti, agarrándote la mano y recordándote cuánto te amo.",
                "Respira lento y con la nariz porfa. Te amo y ya sabes que siempre voy a estar para ti. Mándame un mensajito cada que te acuerdes de mí."
            ]
        },
        {
            label: "07/27/2026",
            title: "Ábreme si estás triste",
            paragraphs: [
                "No tienes que estar bien todo el tiempo. No tienes que fingir conmigo ni intentar encontrar inmediatamente una solución para todo.",
                "Es válido que te sientas así. Puedes descansar. Puedes llorar. Nada de eso cambia lo fuerte, inteligente y hermosa que eres.",
                "Neta quisiera estar ahí para abrazarte, fix ur hair y quedarme contigo hasta que te sientas mejor.",
                "Aunque hoy te sientas triste es solamente un día difícil, y no estás sola. A mí siempre me vas a tener. Te amo con toda mi alma y tú mereces ser feliz. Daría todo para que seas feliz."
            ]
        },
        {
            label: "07/27/2026",
            title: "No puedes dormir?",
            paragraphs: [
                "Ay Yoona, como te pasa eso de que no puedes dormir. Mereces descansar!! Tu mente super pro necesita descanso también jajaja",
                "Si hay algo que te preocupa recuerda que mañana seguirán existiendo maneras para resolverlo, tiempo para pensar, y decidir.",
                "Mira a tu alrededor y date cuenta del lugar en el que estás, de la suerte que tienes, y de la paz que puedes sentir ahora. Estoy contigo aunque sea por aquí, eso ya lo sabes :). Aunque sea a través de una pantalla.",
            ]
        },
        {
            label: "07/27/2026",
            title: "Te amo.",
            paragraphs: [
                "Yoona, te amo.",
                "Y te amo en cada momento. Te amo cuando no me hablas, cuando me palticas todo, cuando te ríes y cuando estas seria. Siempre te amo y siempre quiero que estés feliz. ",
                "Te elijo cada día de mi vida. No te elegí solamente por los momentos fáciles. Te elegí porque eres tú: por tu forma de pensar, de hablar, de vestirte, de reírte y de existir.",
                "No necesitas ganarte mi amor. No es un examen. Y si fuera un examen ya te hubieran descalificado por tramposa y haber sacado 100 antes de comenzarlo. Te adoro mi amor, eres todo para mí. Por favor nunca dudes de mi amor."
            ]
        },
        {
            label: "07/27/2026",
            title: "Gracias",
            paragraphs: [
                "No me arrepiento. No me arrepiento de haber tenido mi racha más larga de llorar. No me arrpiento porque me diste la oportunidad de conocerte al nivel que quería.",
                "Estoy convencida de que conocerte me ayudó a aprender sobre el amor. Me gusta recordar las primeras conversaciones, los nervios, el shaking, las indirectas que según yo intentaba entender y todos los momentos en que no sabía qué iba a pasar.",
                "Todos esos recuerdos forman una historia que no cambiaría por nada.",
                "Gracias por haber existido en mi timeline y darme experiencias tan bonitas y especiales."
            ]
        },
        {
            label: "07/27/2026",
            title: "El por qué te elegí",
            paragraphs: [
                "Te elegí porque contigo siento algo que nunca había sentido.",
                "Porque me encanta tu cabello, tus ojos, tu nariz, tu boca, tu manera de hablar, tus palabras, la forma en la que ves el mundo, y todo de ti.",
                "Te elegí porque los detalles pequeños de ti nunca se me olvidan",
                "Porque eres perfecta de todas las maneras. Y sobre todo, te elegí porque eres tú. Y entre todas las personas posibles, siempre seguías siendo tú.",
                "En mi vida me había sentido así por alguien. Me cambiaste completamente. Me quitaste mi estabilidad tmb jajajaja que pues al final no es algo por lo que te tengas que disculpar. A lo que voy es que por ti, todo valió y vale la pena. Muchas gracias por todos los momentos."
            ]
        }
    ];


    let currentPaper = null;
    let readerIsOpen = false;

let letterCleanupTimeout = null;
let letterParagraphTimeouts = [];

function createLetterParagraphs(paragraphs) {

    // Cancela animaciones que quedaron de otra carta.
    letterParagraphTimeouts.forEach(
        function (timeoutId) {
            window.clearTimeout(timeoutId);
        }
    );

    letterParagraphTimeouts = [];

    letterReaderText.innerHTML = "";

    paragraphs.forEach(
        function (paragraphText, index) {

            const paragraph =
                document.createElement("p");

            paragraph.textContent =
                paragraphText;

            paragraph.style.opacity = "0";

            paragraph.style.transform =
                "translateY(10px)";

            letterReaderText.appendChild(
                paragraph
            );

            const timeoutId =
                window.setTimeout(
                    function () {

                        // Confirma que el párrafo siga en la página.
                        if (!paragraph.isConnected) {
                            return;
                        }

                        paragraph.style.transition =
                            "opacity 0.55s ease, transform 0.55s ease";

                        paragraph.style.opacity =
                            "1";

                        paragraph.style.transform =
                            "translateY(0)";

                    },
                    250 + index * 110
                );

            letterParagraphTimeouts.push(
                timeoutId
            );
        }
    );
}

function openLetter(paper) {

    // Evita que una carta cerrada anteriormente
    // borre el contenido de la nueva.
    if (letterCleanupTimeout !== null) {

        window.clearTimeout(
            letterCleanupTimeout
        );

        letterCleanupTimeout = null;
    }

    const letterIndex =
        Number(paper.dataset.letter);

    const selectedLetter =
        letters[letterIndex];

    if (
        !selectedLetter ||
        readerIsOpen
    ) {
        return;
    }

    currentPaper = paper;
    readerIsOpen = true;

    // Siempre comienza desde arriba.
    letterReaderPaper.scrollTop = 0;

    if (letterReaderLabel) {
        letterReaderLabel.textContent =
            selectedLetter.label;
    }

    letterReaderTitle.textContent =
        selectedLetter.title;

    createLetterParagraphs(
        selectedLetter.paragraphs
    );

    const paperRectangle =
        paper.getBoundingClientRect();

    const paperCenterX =
        paperRectangle.left +
        paperRectangle.width / 2;

    const paperCenterY =
        paperRectangle.top +
        paperRectangle.height / 2;

    const viewportCenterX =
        window.innerWidth / 2;

    const viewportCenterY =
        window.innerHeight / 2;

    const movementX =
        paperCenterX - viewportCenterX;

    const movementY =
        paperCenterY - viewportCenterY;

    letterReaderPaper.style.transformOrigin =
        `calc(50% + ${movementX}px) calc(50% + ${movementY}px)`;

    letterReader.setAttribute(
        "aria-hidden",
        "false"
    );

    letterReader.classList.add(
        "reader-open"
    );

    document.body.classList.add(
        "reading-letter"
    );

    window.setTimeout(
        function () {
            closeLetterReaderButton.focus();
        },
        700
    );
}

    function openLetter(paper) {

        const letterIndex =
            Number(paper.dataset.letter);

        const selectedLetter =
            letters[letterIndex];


        if (
            !selectedLetter ||
            readerIsOpen
        ) {
            return;
        }


        currentPaper = paper;
        readerIsOpen = true;


        if (letterReaderLabel) {
            letterReaderLabel.textContent =
                selectedLetter.label;
        }

        letterReaderTitle.textContent =
            selectedLetter.title;

        createLetterParagraphs(
            selectedLetter.paragraphs
        );


        const paperRectangle =
            paper.getBoundingClientRect();

        const paperCenterX =
            paperRectangle.left +
            paperRectangle.width / 2;

        const paperCenterY =
            paperRectangle.top +
            paperRectangle.height / 2;

        const viewportCenterX =
            window.innerWidth / 2;

        const viewportCenterY =
            window.innerHeight / 2;


        const movementX =
            paperCenterX - viewportCenterX;

        const movementY =
            paperCenterY - viewportCenterY;


        letterReaderPaper.style.transformOrigin =
            `calc(50% + ${movementX}px) calc(50% + ${movementY}px)`;


        letterReader.setAttribute(
            "aria-hidden",
            "false"
        );

        letterReader.classList.add(
            "reader-open"
        );

        document.body.classList.add(
            "reading-letter"
        );


        window.setTimeout(function () {
            closeLetterReaderButton.focus();
        }, 700);
    }
function closeLetter() {

    if (!readerIsOpen) {
        return;
    }

    readerIsOpen = false;

    letterReader.classList.remove(
        "reader-open"
    );

    letterReader.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove(
        "reading-letter"
    );

    // Cancela las animaciones de párrafos pendientes.
    letterParagraphTimeouts.forEach(
        function (timeoutId) {
            window.clearTimeout(timeoutId);
        }
    );

    letterParagraphTimeouts = [];

    // Cancela una limpieza anterior, por seguridad.
    if (letterCleanupTimeout !== null) {

        window.clearTimeout(
            letterCleanupTimeout
        );
    }

    letterCleanupTimeout =
        window.setTimeout(
            function () {

                // Solo limpia si ninguna otra carta
                // se abrió durante la animación.
                if (!readerIsOpen) {
                    letterReaderText.innerHTML = "";
                }

                if (
                    currentPaper &&
                    !readerIsOpen
                ) {
                    currentPaper.focus();
                    currentPaper = null;
                }

                letterCleanupTimeout = null;

            },
            650
        );
}


    deskPapers.forEach(function (paper) {

        paper.addEventListener(
            "click",
            function () {
                openLetter(paper);
            }
        );

    });


    closeLetterReaderButton.addEventListener(
        "click",
        closeLetter
    );


    if (letterReaderBackground) {

        letterReaderBackground.addEventListener(
            "click",
            closeLetter
        );

    }


    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                readerIsOpen
            ) {
                closeLetter();
            }

        }
    );

})();

const CACHE_NAME = "for-yoona-v1";

const filesToCache = [
  "./",
  "./index.html",
  "./style.css",
  "./script.js",
  "./manifest.json",
  "./images/icon-192.png",
  "./images/icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      return cachedResponse || fetch(event.request);
    })
  );
});


if ("serviceWorker" in navigator) {
  window.addEventListener("load", async () => {
    try {
      const registration = await navigator.serviceWorker.register(
        "./service-worker.js"
      );

      console.log(
        "Service worker registrado:",
        registration.scope
      );
    } catch (error) {
      console.error(
        "No se pudo registrar el service worker:",
        error
      );
    }
  });
}