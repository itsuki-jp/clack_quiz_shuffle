// 選択肢の正誤を判定する
function ans(res) {
    if (res == 'ok') {
        alert("正解!")
    } else {
        alert("不正解!")
    }
}
// 配列をシャッフルする(アルゴリズムは理解しなくても良さげ？)　https://www.nxworld.net/js-array-shuffle.html
const shuffle = ([...array]) => {
    for (let i = array.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// 問題文を何個か用意しておく
// choiceが冗長なので、いい感じに変える
let quiz_set = [{
        q: `"大阪"の郡と名のつく地名は？`,
        choice: [
            ["南河内郡太子町（答え）", 1],
            ["大和郡山南郡山町", 0],
            ["吉野郡大淀町", 0]
        ]
    },
    {
        q: `"適当な問題1`,
        choice: [
            ["答え", 1],
            ["答えじゃない1", 0],
            ["答えじゃない2", 0]
        ]
    },
    {
        q: `"適当な問題2`,
        choice: [
            ["答え", 1],
            ["答えじゃない1", 0],
            ["答えじゃない2", 0]
        ]
    },
    {
        q: `"適当な問題3`,
        choice: [
            ["答え", 1],
            ["答えじゃない1", 0],
            ["答えじゃない2", 0]
        ]
    }
];

// 今回使う問題をquiz_setから引っ張ってくる
let quiz = quiz_set[Math.floor(Math.random() * quiz_set.length)];

// 色々と変数
const question = document.getElementById("question");
const choice = document.getElementById("choice");
const choices = quiz.choice;
const N = choices.length;　 // 選択肢の数 

// 問題文を表示
question.innerText = quiz.q;

// 0~(N-1)までが入った配列をシャッフル
let arr = [];
for (let i = 0; i < N; i++) {
    arr.push(i);
}
let random_arr = shuffle(arr);
console.log(random_arr);

// 選択肢の表示
for (let i = 0; i < N; i++) {
    let j = random_arr[i];
    if (quiz.choice[j][1] === 1) {
        choice.innerHTML += `<input type="submit" class = "choice" value="${choices[j][0]}" onclick="ans('ok')">`;
    } else {
        choice.innerHTML += `<input type="submit" class = "choice" value="${choices[j][0]}" onclick="ans('ng')">`;
    }
}
