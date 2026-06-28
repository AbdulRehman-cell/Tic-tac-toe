let boxes = document.querySelectorAll(".but");
let rreset = document.querySelector("#reset");
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

rreset.addEventListener("click", () => {
    for (let box of boxes) {
        box.innerText = "";
        box.disabled = false;
    }
    i = 0;
    statu = false;
    turn0 = true;
    let h2 = document.querySelector("h2");
    if (h2) {
        h2.innerText = "";
        h2.style.visibility = "hidden";
    }
});

boxes.forEach((but) => {
    but.addEventListener("click", () => {
        if (statu) return; // Prevent moves after winner

        if (but.innerText !== "") return; // Prevent clicking filled boxes

        if (turn0) {
            but.innerText = "O";
            turn0 = false;
        } else {
            but.innerText = "X";
            turn0 = true;
        }
        i++;
        but.disabled = true;
        Checkwinner();
        if (i === 9 && statu === false) {
            let h2 = document.querySelector("h2");
            if (h2) {
                h2.innerText = "DRAW!";
                h2.style.visibility = "visible";
            }
        }
    });
});

function Checkwinner() {
    for (let pattern of winningPatterns) {
        let pos1 = boxes[pattern[0]].innerText.trim();
        let pos2 = boxes[pattern[1]].innerText.trim();
        let pos3 = boxes[pattern[2]].innerText.trim();

        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                statu = true;
                let winner = pos1;
                announce(winner);
                return;
            }
        }
    }
}

function announce(winner) {
    let h2 = document.querySelector("h2");
    if (h2) {
        h2.innerText = "WINNER: " + winner;
        h2.style.visibility = "visible";
    }
    for (let box of boxes) {
        box.disabled = true;
    }
}