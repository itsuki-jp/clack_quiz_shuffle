'use strict';

//豆知識の登録
const wordSentence = [{
    sentence: [
        'トランペットは、金管楽器の一種である。略称は「Tp」など。語源は貝殻の一種を意味するギリシア語のstrombosであるとされる',
        '太鼓のことで、膜鳴楽器のほぼすべてが含まれるが、一部の民族音楽において用いられているスリット・ドラム（割れ目太鼓）のように、体鳴楽器でもこの名のついているものがある。',
        'フルートは、木管楽器の一種で、リードを使わないエアリード（無簧）式の横笛である',
    ],
    word: ['トランペット', 'ドラム', 'フルート']
}];

//id取得など
const wordInput = document.getElementById('word');
const searchButton = document.getElementById('search');
const resultDivided = document.getElementById('result-area');
const tweetDivided = document.getElementById('tweet-area');
const useWordSentence = wordSentence[0];


// 何回も使うから、これも定義した
const word = useWordSentence.word;

/* 私自身がツイートのよく分かってないから、とりあえず消した
//  ツイートエリアを作成
tweetDivided.innerText = "";
const anchor = document.createElement('a');
const hrefValue =
    'https://twitter.com/intent/tweet?button_hashtag=' +
    encodeURIComponent('豆知識BOX') +
    '&ref_src=twsrc%5Etfw';

anchor.setAttribute('href', hrefValue);
anchor.className = 'twitter-hashtag-button';
anchor.setAttribute('data-text', result);
anchor.innerText = 'Tweet #豆知識BOXの感想';
tweetDivided.appendChild(anchor);
const script = document.createElement('script');
script.setAttribute('src', 'https://platform.twitter.com/widgets.js');
tweetDivided.appendChild(script);
 */

//ボタンが押されたときの動き
searchButton.onclick = () => {
    console.log('ボタンが押されました');
    resultDivided.innerText = "";
    // keywordが空の時は処理を終了、やり直しを勧める
    const inputWord = wordInput.value;
    const paragraph = document.createElement('p');

    if (inputWord.length === 0) {
        paragraph.innerText = '楽器名が入力されていないようです。楽器名を入力してから探してくださいね！';
        resultDivided.appendChild(paragraph);
        console.log('楽器名が入力されていませんでした。');
    } else if (!word.includes(inputWord)) {

        // 検索される文字列/配列.includes(検索する文字列) -> bool型

        paragraph.innerText = '申し訳ございません。当店では取り扱っておりません';
        resultDivided.appendChild(paragraph);
        console.log('定義されていない単語でした');
    } else {
        // この下のコードがelseの中に入ってなかったから、length===0,扱ってない場合も実行されてた

        // 今回は使わなかった
        // let result = inputWord.indexOf('トランペット', 'ドラム', 'フルート');

        //入力した単語が登録されている単語と一致したら対応する豆知識の文章を返す←分からない…！！！
        const header = document.createElement('h3');
        header.innerText = '診断結果';
        resultDivided.appendChild(header);
        // wordの要素をfor文で検索していく
        for (let i = 0; i < word.length; i++) {
            if (word[i].includes(inputWord)) { // もしword[i]に入力された文字があれば
                paragraph.innerText = `${useWordSentence.sentence[i]}`;
                resultDivided.appendChild(paragraph);
                console.log('お客様が気になっている楽器の豆知識をご案内しました');
                break;
            }
        }
    }

    /*<a href="https://twitter.com/intent/tweet?button_hashtag=豆知識BOX&ref_src=twsrc%5Etfw" 
          class="twitter-hashtag-button"
          data-text="豆知識BOXの感想"
          data-show-count="false">
          Tweet #豆知識BOX
          </a>
          <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>*/
}
