/** craeting database */

let readlineSync=require("readline-sync");
let score=0;
let userName=readlineSync.question("What's your name? ");

let kuler=require("kuler");
console.log(kuler(`Hello ${userName} welocome to quizify`,"#dc2628"))

const database={
    
    data:[
        {
            question: `let a={}, b={}
            console.log(a==b)
            console.log(a===b) `,
            Options:{
                a:"false false",
                b:"true false",
                c:"false true",
                d:"true true"
            },
            correctAnswer: "a"
        },
        {
            question:"Object.assign(target,source) creates which type pf copy?",
            Options:{
                a:"Deep copy",
                b:"shallow copy",
                c:"Nested copy",
                d:"Creates a new reference"
            },
            correctAnswer: "b"
        },
        {
            question:"Is method chaining possible with forEach?",
            Options:{
                a:"yes",
                b:"No"
            },
            correctAnswer: "b"
        }
    ]
    
}

const leaderBoard={
    data:[
        {
            name:"lakshman",
            score:2
        },
        {
             name:"ramu",
            score:3
        },
        {
             name:"Jau",
            score:1
        }
    ]
}

function playGame(userAnswer,correctAnswer){
    if(userAnswer===correctAnswer){
        console.log(kuler("Correct Answer","#059669"))
        score++
    }else{
        console.log(kuler("Incorrect Answer","b91c1c"))
        console.log(kuler(`Correct answer is ${correctAnswer}`,"#1d4ed8"))
    }
}

function showQuestionAndOptions(database){
    for(let i=0;i<database.data.length;i++){
        console.log(`\nQ${i+1} - ${database.data[i].question}`);
        for(let key in database.data[i].Options){
            console.log(`${key}-${database.data[i].Options[key]}`)
        }
        let userAnswer=readlineSync.question("Enter yout answer - (a/b/c/d) -  ").toLowerCase();
        playGame(userAnswer,database.data[i].correctAnswer)
    }
}
function highScorer(leaderBoard){
    leaderBoard.data.push({name:userName, score:score})
    //console.log(leaderBoard);
    let sortedScoreList=leaderBoard.data.sort((a,b) => b.score-a.score)
    console.log(kuler("\nCheck your position in Leader Board 👇👇","#fde047"))

    for(let leader of sortedScoreList){
        console.log(kuler(`${leader.name} - Score:${leader.score}`,"#9333ea"))
    }
}


showQuestionAndOptions(database);
console.log(`\nscore is - ${score}`);
highScorer(leaderBoard)