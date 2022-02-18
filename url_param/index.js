// 配列をシャッフルする(アルゴリズムは理解しなくても良さげ？)　https://www.nxworld.net/js-array-shuffle.html
const shuffle = ([...array]) => {
    for (let i = array.length - 1; i >= 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const quizzz = [
    { question: "問題文1", choices: ["ans", "b", "c", "d"], ans: 0 },
    { question: "問題文2", choices: ["ans", "b", "c", "d"], ans: 0 },
    { question: "問題文3", choices: ["ans", "b", "c", "d"], ans: 0 },
    { question: "問題文4", choices: ["ans", "b", "c", "d"], ans: 0 }
];

const arr = location.href.split("/"); // 現在のページを取得
// 問題セットが載っているページ・問題が載っているページで処理を変える
console.log(arr[arr.length - 1]);
// もし現在のページが問題セットが載ってる方であれば
if (arr[arr.length - 1] === "index.html" || arr[arr.length - 1] === "") {
    const questionArea = document.getElementById("questionArea");
    // 問題の数だけ回し、ボタンとして表示する
    for (let i = 0; i < quizzz.length; i++) {
        const questionBtn = document.createElement("button");
        questionBtn.innerText = quizzz[i].question;
        // cssのためにclassを付与する
        questionBtn.classList.add("not_selected");
        questionBtn.classList.add("choice");
        // クリックされたら問題番号と共に飛ぶ、
        questionBtn.onclick = () => {
            location.href = `quiz.html#${i}`
        }
        questionArea.appendChild(questionBtn);
    }
}
// もし現在のページが問題が載ってる方であれば
else {
    const param = location.href.split("#")[1];
    if (param > quizzz.length) {
        const main = document.getElementById("main");
        main.innerText = "QUESTION NOT FOUND";
    } else {
        const quiz = quizzz[param];
        // 0~(N-1)までが入った配列をシャッフル
        let arr = [];
        for (let i = 0; i < quiz.choices.length; i++) {
            arr.push(i);
        }
        let random_arr = shuffle(arr);

        // ------- HTMLに関する操作はここから -------

        // 問題文に関する操作
        const question = document.getElementById("question");
        question.innerText = quiz.question;


        let selected = null; // 現在選択しているボタン(上からn何番目)
        // 選択ボタンに関する操作
        const choice = document.getElementById("choice");
        for (let i = 0; i < quiz.choices.length; i++) {
            // とりあえずボタンを作る
            let temp = document.createElement("button");
            temp.classList.add("not_selected");
            temp.classList.add("choice");
            temp.innerText = quiz.choices[random_arr[i]];
            // クリックされたときの処理
            temp.onclick = () => {
                // まだ何も選択されていなければ、クラスを変更するだけでいい
                // もし選択されていれば、選択されている方のクラスも変更する必要がある
                if (selected != null) {
                    const change = document.getElementById("choice").children[selected];
                    change.classList.toggle("selected");
                    change.classList.toggle("not_selected");
                    document.getElementById("choice").children[selected] = change;
                }
                selected = i;
                temp.classList.toggle("selected");
                temp.classList.toggle("not_selected");
            }
            choice.appendChild(temp);
        }

        // 確認ボタンが押された時の処理
        const confirm = document.getElementById("confirm");
        const result = document.getElementById("result");
        confirm.onclick = () => {
            if (selected === null) {
                result.innerText = "選択肢を選んでください";
            } else if (random_arr[selected] == quiz.ans) {
                result.innerText = "正解!!!";
            } else {
                result.innerText = "不正解...";
            }
        }
    }
}