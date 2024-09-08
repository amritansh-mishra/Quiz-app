const questions= [
    {
        question: "Which is the largest animal in the world ?" ,
        answers:[

            {  text:"shark", correct:false},
            {  text:"Blue Whale", correct:true},
            {  text:"Dog", correct:false},
            {  text:"Sea Horse", correct:false},
        ]

    },
    {   question: "Which is the smallest animal in the world ?" ,
        answers:[

            {  text:"shark", correct:false},
            {  text:"Blue Whale", correct:false},
            {  text:"Dog", correct:false},
            {  text:"Sea Horse", correct:true},
        ]
        
    },
    {  question: "Which is called king of fruits ?" ,
        answers:[

            {  text:"Mango", correct:true},
            {  text:"Banana", correct:false},
            {  text:"Dragon Fruit", correct:false},
            {  text:"Litchi", correct:false},
        ]

    },
    {
        question: "Which is called king of jungle ?" ,
        answers:[

            {  text:"zebra", correct:false},
            {  text:"snake", correct:false},
            {  text:"Giraffe", correct:false},
            {  text:"lion", correct:true},
        ]

    }
];

const question  = document.getElementById("question");
const answerbutton = document.getElementById("answerbuttons");
const nxtbutton = document.getElementById("nxtbtn");