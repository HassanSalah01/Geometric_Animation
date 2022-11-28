const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const ctx3 = canvas.getContext("2d");
const ctx4 = canvas.getContext("2d");

const arr = [];
let x = 50;
let y = 50;
let w = canvas.width;
let h = canvas.height;
const ctx2 = canvas.getContext("2d");
ctx.moveTo(0, 0);
ctx2.moveTo(w, h);
ctx3.moveTo(x, w);
// ctx4.moveTo();

const test = () => {
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx2.lineTo(w, h);
    ctx2.stroke();
    ctx3.lineTo(w, y);
    ctx3.stroke();
    x += 5;
    y += 5;
    w -= 5;
    h -= 5;
    requestAnimationFrame(test);
};
requestAnimationFrame(test);

// const asignRect = () => {
//     let arr = [];
//     let x = 0;
//     let y = 0;
//     for (let i = 0; i < 5; i++) {
//         arr.push(new Rect(x, y));
//         x += 5;
//         y += 5;
//     }
//     return arr;
// };

// const s = () => {
//     if (x < 300) {
//         //     console.log("welcome");
//         //     ctx.lineTo(x, y);
//         //     ctx.stroke();
//         //     requestAnimationFrame(s);
//         //     x += 2;
//         //     y += 2;
//         // } else {
//         //     ctx.lineTo(x, y);
//         //     ctx.stroke();
//         //     requestAnimationFrame(s);
//         //     x -= 2;
//         //     y -= 2;
//     }
// };
// requestAnimationFrame(s);

// const main = () => {
//     console.log(asignRect());
// };

// main();
