// 問題セット
const quizData = [{
        title: "織田信長は何年生まれ？",
        choices: [
            { id: 1, value: "1600" },
            { id: 2, value: "1500" },
            { id: 3, value: "1550" },
            { id: 4, value: "1500" },
        ],
        correctId: 1,
    },
    {
        title: "徳川家康は何年生まれ？",
        choices: [
            { id: 1, value: "1600" },
            { id: 2, value: "1500" },
            { id: 3, value: "1550" },
            { id: 4, value: "1500" },
        ],
        correctId: 1,
    },
    {
        title: "明智光秀は何年生まれ？",
        choices: [
            { id: 1, value: "1600" },
            { id: 2, value: "1500" },
            { id: 3, value: "1550" },
            { id: 4, value: "1500" },
        ],
        correctId: 1,
    },
    {
        title: "豊臣秀吉は何年生まれ？",
        choices: [
            { id: 1, value: "1600" },
            { id: 2, value: "1500" },
            { id: 3, value: "1550" },
            { id: 4, value: "1500" },
        ],
        correctId: 1,
    },
]

// ランクの一覧
const rank = ["B", "A", "S", "SS", "SSS"]

//　HTMLからいろいろな要素を取得して、変数に入れている
const quizSentence = document.getElementById('quiz_sentence');
const quizAnswerSelect = document.getElementById('quiz_answer_select');
const quizSendButton = document.getElementById('quiz_send_button');
const quizResult = document.getElementById('quiz_result');

// 正解数を保存する変数
let correct_num = 0;

// 再帰出来るように関数として定義した
// idx => 何番目の問題を見るか
function func(idx) {
    // indが用意した問題の数以上に成れば、正解数等を表示する
    if (idx === quizData.length) {
        // 要らない要素を削除する
        quizSentence.remove();
        quizAnswerSelect.remove();
        quizSendButton.remove();
        // 正解数とランクを表示する
        quizResult.innerText = `正解数 : ${correct_num}\nRank : ${rank[correct_num/1]}`;
        // quizResultにクラス名 end を付与
        quizResult.classList.add("end");
        // 再帰を終了する
        return;
    }

    // idx番目の問題を使い、選択肢等を表示していく
    const useQuizData = quizData[idx];
    // idx != 0　の時は、前の問題を消す必要がある
    quizResult.innerHTML = "";
    quizAnswerSelect.innerHTML = "";

    // 選択肢を表示する
    for (const choice of useQuizData.choices) {
        quizAnswerSelect.innerHTML += `<input id="${choice.id}" class="radio-inline__input" type="radio" name="answer" value="${choice.id}"><label class="radio-inline__label" for="${choice.id}">${choice.value}</label>`
    }

    // 問題文を表示する
    quizSentence.innerHTML = `<p>${useQuizData.title}</p>`

    // クリックされたときの動作
    quizSendButton.onclick = ev => {
        for (const element of quizAnswerSelect.querySelectorAll("input")) {
            if (element.checked) {
                const result = element.id == useQuizData.correctId;
                if (result) {
                    correct_num++;
                }
                const str = result ? "正解です" : "不正解です";
                quizResult.innerHTML = `<p>${str}</p>`
            }
        }

        // 回答ボタンを押した一秒後に次の問題に移る
        setTimeout(() => {
            func(idx + 1)
        }, 1000);

    };
}
// 関数の呼び出し、最初の問題から表示していく
func(0);