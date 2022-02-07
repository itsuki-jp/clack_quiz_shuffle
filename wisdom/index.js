const wisdom_genre = ["楽器", "演劇", "ジャンル3", "ジャンル4"];
const wisdommmm = [
    ["ギターについて", "ドラムについて"],
    ["シェイクスピアについて", "劇団四季について"],
    ["a", "b", "c", "d"],
    ["a", "b", "c", "d"]
];
let selected = null;

const init = () => {
    const genre = document.getElementById("genre");
    for (let i = 0; i < wisdom_genre.length; i++) {
        let temp = document.createElement("button");
        temp.classList.add("not_selected");
        temp.classList.add("choice");
        temp.innerText = wisdom_genre[i];

        temp.onclick = () => {
            if (selected != null) {
                const change = document.getElementById("genre").children[selected];
                change.classList.toggle("selected");
                change.classList.toggle("not_selected");
                document.getElementById("genre").children[selected] = change;
            }
            selected = i;
            temp.classList.toggle("selected");
            temp.classList.toggle("not_selected");
            show(i);
        }
        genre.appendChild(temp);
    }
}
const show = (index) => {
    const wisdom = wisdommmm[index];
    const btn = document.getElementById("btn");
    const result = document.getElementById("result");
    const userInput = document.getElementById("userInput");
    userInput.onkeydown = event => {
        if (event.key === 'Enter') {
            btn.onclick();
        }
    };
    btn.onclick = () => {
        result.innerHTML = "";
        const userInputValue = document.getElementById("userInput").value;
        let found = false;
        for (const elem of wisdom) {
            if (elem.includes(userInputValue)) {
                found = true;
                let temp = document.createElement("p");
                temp.innerText = elem;
                result.appendChild(temp);
            }
        }
        if (found === false) {
            result.innerText = "Not Found";
        }
    }
}
init();