// The following variables below are all the sound variables and mute/unmute fucntions 
var backgroundMusic = new Audio();
backgroundMusic.src = "SOUNDS/background-music.mp3"

let backgroundMusicStatus = 0
let backgroundMusicInterval 

function playBackgroundMusic(){
    backgroundMusic.play()
    backgroundMusic.volume = 0.1
}

function muteBackgroundMusic(){
    if (backgroundMusicStatus == 0){
        document.getElementById("mute-btn-img").setAttribute("src","ASSETS/HEADER/mute.png")
        backgroundMusic.volume = 0
        backgroundMusicStatus++
    } else {
        document.getElementById("mute-btn-img").setAttribute("src","ASSETS/HEADER/unmute.png")
        backgroundMusic.volume = 0.1
        backgroundMusicStatus--
    }
}

document.getElementById("mute-header-btn").addEventListener("click", muteBackgroundMusic)
//END HERE

// The following lines of codes include all of the functions and variables needed for you to transition from the start screen to the game board
let startScreenTimer

function startTicketInterval(){
    startScreenTimer = setInterval(startGame ,500)
    document.getElementById("right-ticket-img").style.opacity = "0%"
}

// Add the function below to your start game function
function hideStartScreen(){
    document.getElementById("start-screen").style.display = "none"
    playBackgroundMusic()
    backgroundMusicInterval = setInterval(playBackgroundMusic, 120000)
    clearInterval(startScreenTimer)
}

document.getElementById("start-button").addEventListener("click", startTicketInterval)
// END HERE

// The following lines of codes hides all the header and gameboard elements, and shows the end message
function endGame(){
    document.getElementById("game-board").style.display = "none"
    document.getElementById("header").style.display = "none"
    clearInterval(backgroundMusicInterval)
    backgroundMusic.volume = 0
    document.getElementById("end-screen").style.display = "flex"
}
// END HERE

let inputBox = document.getElementById("input-box")
let promptText = document.getElementById("prompt-text")
let promptQuestion = document.getElementById("prompt-question")
let submitBtn = document.getElementById("submit-btn")

let roundIndex = 0

let questionBank = [
    [
        "egarrsrit",
        "This office maintains students academic records' and other documents relevant to academic residence, ensuring the confidentiality of student records at all times.",
        "REGISTRAR"
    ],
    [
        "nebi xett stalb",
        "This is a Communication Support wherein students may register their mobile numbers to be able to receive SMS announcements.",
        "BEIN TEXT BLAST"
    ],
    [
        "lsyypeghectloo",
        "____________ Services under BWC offer programs and services in online and mobile platforms to support the psychosocial well-being of the Benildean community.",
        "TELEPSYCHOLOGY"
    ],
    [
        "ocristmorf",
        "This Suite is one of the Benildean Perks which includes a complete set of Microsoft Applications such as Word, Powerpoint, Excel, and unlimited storage for OneDrive.",
        "MICROSOFT"
    ],
    [
        "icmeaacd dsviangi",
        "This program helps Benildean Students during their stay in the school by getting assigned an Academic Adviser from their respective schools.",
        "ACADEMIC ADVISING"
    ],
    [
        "idaou-slivau",
        "This Service is under the Center for Learning Resources (CLR), which maintains a collection of audio-visual (AV) materials such as DVDs, audio CDs, DVD-ROMs, and CD-ROMs in support of both academic and recreational needs.",
        "AUDIO-VISUAL"
    ],
    [
        "chsahpslrsio",
        "These are grants to aid students and families financially during their stay in Benilde. These may be Academic, Financial Grants, or Government-Mandated Grants.",
        "SCHOLARSHIPS"
    ],
    [
        "incfean",
        "This office is committed to safeguarding and managing the institution’s resources, accounting, and financial affairs.",
        "FINANCE"
    ],
    [
        "rceare latpro",
        "This program is under the Career and Placement Unit which is an information and marketing arm for students, on-the-job trainees, graduates, and the school’s industry linkages to increase awareness of current options for employment, business, and education.",
        "CAREER PORTAL"
    ],
    [
        "ebienr",
        "This program by the Center for Lasallian Ministry (CLM) provides spiritual formation activities to all students, regardless of their religious affiliation. These activities come in forms of Retreats and Recollections.",
        "BENIRE"
    ]
]

function startGame(){
    hideStartScreen()
    promptText.innerHTML = questionBank[roundIndex][0]
    promptQuestion.innerHTML = questionBank[roundIndex][1]
}

function checkAnswer(){
    var inputValue = inputBox.value

    if (inputValue.toUpperCase() == questionBank[roundIndex][2]){
        roundIndex++
        if (roundIndex >= 10) {
            endGame()
        } else {
            promptText.innerHTML = questionBank[roundIndex][0]
            promptQuestion.innerHTML = questionBank[roundIndex][1]
            inputBox.value = ""
        }
    } else {
        alert("PLEASE TRY AGAIN! Your answer is incorrect.")
    }
}

//BUTTONS AND EVENT LISTENERS
submitBtn.addEventListener("click", checkAnswer)

addEventListener('keypress', function (e){
    if (e.key === 'Enter') {
        checkAnswer()
    }
})


