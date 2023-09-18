const questions = [
    {
        question : "يقسم خط جرينتش الكره الارضيه الى نصفين متساويين...",
        answers: [
            { text: "شرقي وشمالي", correct:false},
            { text: "غربي وجنوبي", correct:false},
            { text: "شمالي وجنوبي", correct:false},
            { text: "شرقي وغربي", correct:true},
        ]
    },
    {
        question : "تساعدنا خطوط الطول في...",
        answers: [
            { text: " قياس درجات الحراره", correct:false},
            { text: "تقسيم الارض الاقاليم مناخيه", correct:false},
            { text: "معرفه فروق التوقيت", correct:true},
            { text: "تحديد المواقع شمالا وجنوبا", correct:false},
            
        ]
    },
    {
        question : "حد العوامل الطبيعيه التي ساعدت على قيام الحضاره المصريه القديمه..",
        answers: [
            { text: "وجود جيش قوي", correct:false},
            { text: "الموقع الجغرافي المتميز ", correct:true},
            { text: "وجود حكومه مركزيه", correct:false},
            { text: "الوحده بين المصريين)", correct:false},
        ]
    },
    {
        question : "اهتم ملوك مصر القديمه باقامه مشروعات عديده في مختلف مجالات الاقتصاد في عصر..",
        answers: [
            { text: "الدوله القديمه", correct:false},
            { text: "الدوله الوسطى ", correct:true},
            { text: " الدوله الحديثه", correct:false},
            // { text: "", correct:false},
        ]
    },
    {
        question : "يقع جبل سانت كاترين في ..",
        answers: [
            { text: "الصحراء الشرقيه", correct:false},
            { text: "الصحراء الغربيه ", correct:false},
            { text: "شبه جزيره سيناء", correct:true},
            { text: "وادي النيل", correct:false},
        ]
    },
    {
        question : "ينبع نهر النيل من",
        answers: [
            { text: " بحيره ناصر", correct:false},
            { text: "بحيره فكتوريا ", correct:true},
            { text: "فرع دمياط", correct:false},
            { text: "فرع رشيد", correct:false},
        ]
    },
    {
        question : "يتصل منخفض الفيوم بنهر النيل عن طريق ترعه...",
        answers: [
            { text: "الاسماعيليه.", correct:false},
            { text: "الابراهيميه", correct:false},
            { text: "بحر يوسف ", correct:true},
            { text: "السوهاجيه", correct:false},
        ]
    },
    {
        question : "احد شهور فصل الشتاء في مصر هو ..",
        answers: [
            { text: "سبتمبر", correct:false},
            { text: "اكتوبر ", correct:false},
            { text: "نوفمبر ", correct:false},
            { text: "ديسمبر ", correct:true},
        ]
    },
    {
        question : "فصل مناخي يحدث في مصر عندما تتعامد اشعه الشمس على مدار السرطان هو ...",
        answers: [
            { text: " صيف", correct:true},
            { text: "شتاء ", correct:false},
            { text: "ربيع ", correct:false},
            { text: "الخريف", correct:false},
        ]
    },
    {
        question : "تنمو على ساحر البحر المتوسط اشجار ..",
        answers: [
            { text: "الصبار ", correct:false},
            { text: "التوت  ", correct:false},
            { text: " الكافور ", correct:false},
            { text: "الزيتون ", correct:true},
        ]
    },
]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const show = document.getElementById("show");
let input = document.getElementById("input")

// console.log(input.value)
let currentQuestionIndex = 0;
let score = 0 ;

function startQuiz(){
    currentQuestionIndex = 0;
    score= 0;
    nextButton.innerHTML = "Next";
    showQuestion();

}
 function showQuestion(){
        resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNumber = currentQuestionIndex + 1 ;
    // show question
    questionElement.innerHTML = questionNumber + "." + currentQuestion.question;

    //show answer
    currentQuestion.answers.forEach((answer) =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    })

 }

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct ==="true";
    if(isCorrect){
        selectBtn.classList.add("correct");
       score++;   
    }else{
        selectBtn.classList.add("incorrect")
    }
 
        Array.from(answerButtons.children).forEach((button) =>{
          if( button.dataset.correct === "true"){
            button.classList.add("correct");
          } 
          button.disabled = true;
        });
    nextButton.style.display = "block";

}

function showScore(){
    // showData();
    resetState();
    questionElement.innerHTML = ` درجتك ${ score} من ${questions.length}`;
    // if( score > 4 ){
    //     show.innerHTML= "success";
    //     setTimeout(() => {
    //         show.style.display="none"
    //     }, 3000);
    // }else{
    //     show.innerHTML= "faild";
    // }

    // nextButton.innerHTML = "finish";
    // input.value.innerHTML = "";
    // nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if( currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}


nextButton.addEventListener("click",()=>{
    if( currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

// let showIpute =[];
// function showData(){

    
//         let newInput = {
//             input:input.value,
//             score
//         }
//         showIpute.push(newInput);
//         localStorage.setItem("show",  JSON.stringify(showIpute))
//         console.log(showIpute);
// }

 startQuiz();
  
