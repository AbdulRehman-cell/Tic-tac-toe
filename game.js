const boxes = document.querySelectorAll(".box");
const reset = document.querySelector("#reset");
let turn0 = true;
let i = 0;
let statu = false;

const winningPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

reset.addEventListener("click", () => {
    boxes.forEach(box => {
        box.innerText = "";
        box.disabled = false;
    });
    i = 0;
    statu = false;
    turn0 = true;
    const h2 = document.querySelector("h2");
    if (h2) {
        h2.innerText = "";
        h2.style.visibility = "hidden";
    }
});

boxes.forEach(box => {
    box.addEventListener("click", () => {
        if (statu) return;
        if (box.innerText !== "") return;

        if (turn0) {
            box.innerText = "O";
            turn0 = false;
        } else {
            box.innerText = "X";
            turn0 = true;
        }
        i++;
        box.disabled = true;
        Checkwinner();
        if (i === 9 && statu === false) {
            const h2 = document.querySelector("h2");
            if (h2) {
                h2.innerText = "DRAW!";
                h2.style.visibility = "visible";
            }
        }
    });
});

function Checkwinner() {
    for (const pattern of winningPatterns) {
        const pos1 = boxes[pattern[0]].innerText.trim();
        const pos2 = boxes[pattern[1]].innerText.trim();
        const pos3 = boxes[pattern[2]].innerText.trim();

        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                statu = true;
                const winner = pos1;
                announce(winner);
                return;
            }
        }
    }
}

function announce(winner) {
    const h2 = document.querySelector("h2");
    if (h2) {
        h2.innerText = "WINNER: " + winner;
        h2.style.visibility = "visible";
    }
    boxes.forEach(box => {
        box.disabled = true;
    });
}